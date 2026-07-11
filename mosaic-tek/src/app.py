import streamlit as st
import pandas as pd
import plotly.express as px

# -----------------------------
# Page configuration
# -----------------------------
st.set_page_config(page_title="FinOps Biz Ledger 2025", layout="wide")


# -----------------------------
# Helper functions
# -----------------------------
def ingest_gcp_billing(file) -> pd.DataFrame:
    """Ingest and clean GCP billing export CSV."""
    df = pd.read_csv(file)

    df["usage_start_time"] = pd.to_datetime(df["usage_start_time"])
    df["usage_end_time"] = pd.to_datetime(df["usage_end_time"])

    gcp_expenses = df[df["service_description"].str.contains("Cloud", na=False)]
    gcp_expenses = gcp_expenses.dropna(subset=["cost"])

    return gcp_expenses


def map_to_ledger(billing_df: pd.DataFrame) -> pd.DataFrame:
    """Map GCP billing data to budget ledger and compute variance."""
    billing_df["payment_source"] = "Charles Schwab"
    billing_df["budgeted_amount"] = 1.00

    summary = (
        billing_df.groupby("service_description")["cost"]
        .sum()
        .reset_index()
    )
    summary["variance"] = summary["cost"] - 1.00

    return summary


def build_spend_timing_chart() -> None:
    """Render spend timing bar chart."""
    st.subheader("Cash Flow: 1st-15th vs 16th-30th")

    timing_data = pd.DataFrame(
        {
            "Period": ["1st-15th", "16th-30th"],
            "Spend": [135.09, 163.35],
        }
    )

    fig = px.bar(
        timing_data,
        x="Period",
        y="Spend",
        color="Period",
        text_auto=True,
        title="Monthly Spend Distribution",
    )

    st.plotly_chart(fig, width="stretch")


def build_vendor_inventory() -> None:
    """Render Cloud & SaaS vendor inventory (high-level view)."""
    st.subheader("Cloud & SaaS Vendor Detail")

    vendor_data = [
        {"Vendor": "GitHub", "Monthly": 38.00, "Due": "15th", "Account": "Schwab"},
        {"Vendor": "Appwrite", "Monthly": 25.00, "Due": "10th", "Account": "Business"},
        {"Vendor": "Railway", "Monthly": 20.00, "Due": "20th", "Account": "Personal BoA"},
        {"Vendor": "Google Cloud", "Monthly": 1.00, "Due": "1st", "Account": "Schwab"},
        {"Vendor": "Polygon (Annual)", "Monthly": 0.00, "Annual": 199.00, "Due": "11/23"},
    ]

    df_vendors = pd.DataFrame(vendor_data)
    st.dataframe(df_vendors, width="stretch")


def show_idle_resource_alert() -> None:
    """Render idle resource / free tier alert."""
    st.warning(
        "⚠️ **Idle Resource Alert:** The following vendors are currently at $0.00 spend: "
        "Docker, Anaconda, Vercel, Supabase, and Barchart Plus. "
        "Monitor for usage or tier expiration."
    )


def show_unit_economics() -> None:
    """Render unit economics info."""
    st.info(
        "**Unit Economics:** Your current Business spend of $204.80 is spread across "
        "approximately 12 active SaaS vendors, averaging **$17.07 per vendor/month**."
    )


def build_entity_cost_view() -> None:
    """Render entity-level cost breakdown based on 2025 Annual Budget PDF."""
    st.subheader("Entity Cost Breakdown (2025 Annual Budget)")

    entities = ["Moor Grp", "Mosaic Tek", "Mansa Capital"]

    selected_entity = st.selectbox(
        "Select Entity",
        entities,
        index=1,  # default to Mosaic Tek
    )

    entity_costs = {
        "Moor Grp": [
            {"Vendor": "Quickbooks SE", "Cost": 65.00},
            {"Vendor": "Quickbooks Online Payments", "Cost": 0.00},
            {"Vendor": "Quickbook Tax", "Cost": 0.00},
            {"Vendor": "Insurance", "Cost": 110.00},
            {"Vendor": "Google Workspace", "Cost": 14.00},
        ],
        "Mosaic Tek": [
            {"Vendor": "Railway", "Cost": 5.00},
            {"Vendor": "Appwrite", "Cost": 25.00},
            {"Vendor": "Vercel", "Cost": 0.00},
            {"Vendor": "Server", "Cost": 0.00},
            {"Vendor": "Eraser", "Cost": 12.00},
            {"Vendor": "GPC", "Cost": 42.00},
            {"Vendor": "Zoom", "Cost": 24.00},
            {"Vendor": "GitHub", "Cost": 38.00},
            {"Vendor": "Lovable", "Cost": 5.00},
            {"Vendor": "Medium", "Cost": 5.00},
            {"Vendor": "Barchart", "Cost": 5.00},
        ],
        "Mansa Capital": [
            {"Vendor": "Microsoft", "Cost": 0.00},
            {"Vendor": "Hailuo.", "Cost": 25.00},
            {"Vendor": "WordPress", "Cost": 7.00},
            {"Vendor": "Canva", "Cost": 0.00},
            {"Vendor": "Tiingo", "Cost": 0.00},
            {"Vendor": "TradingView", "Cost": 72.95},
            {"Vendor": "Benzinga", "Cost": 0.00},
            {"Vendor": "Simply Wall St", "Cost": 0.00},
            {"Vendor": "GPC", "Cost": 110.00},
            {"Vendor": "WSJ", "Cost": 16.95},
        ],
    }

    df_entity = pd.DataFrame(entity_costs[selected_entity])

    # Optional cost range filter
    min_cost, max_cost = st.slider(
        "Filter by Cost Range",
        min_value=0,
        max_value=200,
        value=(0, 200),
    )

    filtered_df = df_entity[
        (df_entity["Cost"] >= min_cost) &
        (df_entity["Cost"] <= max_cost)
    ]

    st.dataframe(filtered_df, width="stretch")

    total_cost = filtered_df["Cost"].sum()
    st.metric(f"{selected_entity} Filtered Monthly Cost", f"${total_cost:,.2f}")


def build_gcp_section() -> None:
    """Optional GCP billing upload + ledger mapping."""
    st.subheader("GCP Billing Export (Optional)")

    uploaded_file = st.file_uploader("Upload GCP billing CSV", type=["csv"])

    if uploaded_file is not None:
        gcp_df = ingest_gcp_billing(uploaded_file)
        ledger_summary = map_to_ledger(gcp_df)

        st.markdown("### GCP Cost vs Budget (Ledger View)")
        st.dataframe(ledger_summary, width="stretch")


# -----------------------------
# Main Streamlit app
# -----------------------------
def main() -> None:
    st.title("🚀 2025 FinOps Dashboard")

    # High-level KPI cards
    col1, col2, col3 = st.columns(3)
    col1.metric("Total Monthly Spend", "$298.44")
    col2.metric("Business Expenses", "$204.80", delta="-15% vs Last Month")
    col3.metric("Personal Expenses", "$93.64")

    # Spend timing analysis
    build_spend_timing_chart()

    # Entity-level cost breakdown (PDF-style)
    build_entity_cost_view()

    # High-level vendor inventory
    build_vendor_inventory()

    # Idle resource alert
    show_idle_resource_alert()

    # Unit economics
    show_unit_economics()

    # Optional GCP billing section
    build_gcp_section()


if __name__ == "__main__":
    main()
