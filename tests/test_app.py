from io import StringIO

import pandas as pd

from app import ingest_gcp_billing, map_to_ledger


def test_ingest_gcp_billing_filters_non_cloud_rows_and_missing_costs():
    csv_data = StringIO(
        """usage_start_time,usage_end_time,service_description,cost
2026-01-01,2026-01-02,Google Cloud Storage,3.5
2026-01-01,2026-01-02,Workspace,2.0
2026-01-01,2026-01-02,Google Cloud Run,
"""
    )

    result = ingest_gcp_billing(csv_data)

    assert list(result["service_description"]) == ["Google Cloud Storage"]
    assert pd.api.types.is_datetime64_any_dtype(result["usage_start_time"])
    assert pd.api.types.is_datetime64_any_dtype(result["usage_end_time"])


def test_map_to_ledger_summarizes_costs_and_variance():
    billing_df = pd.DataFrame(
        {
            "service_description": ["Google Cloud Storage", "Google Cloud Storage"],
            "cost": [3.5, 1.5],
        }
    )

    result = map_to_ledger(billing_df)

    assert result.to_dict("records") == [
        {
            "service_description": "Google Cloud Storage",
            "cost": 5.0,
            "variance": 4.0,
        }
    ]
