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
def ingest_gcp_billing(file_path: str) -> pd.DataFrame:
    """Ingest and clean GCP billing export CSV."""
    df = pd.read_csv(file_path)

    # Convert usage times to datetime
    df["usage_start_time"] = pd.to_datetime(df["usage_start_time"])
    df["usage_end_time"] = pd.to_datetime(df["usage_end_time"])

    # Focus on Google Cloud Platform services
    gcp_expenses = df[df["service_description"].str.contains("Cloud", na=False)]

    # Drop rows with missing cost
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


def build_vendor_table() -> None:
    """Render Cloud & SaaS vendor inventory."""
    st.subheader("Cloud & SaaS Vendor Detail")

    vendor_data = [
        {"Vendor": "GitHub", "Monthly": 38.00, "Due": "15th", "Account": "Schwab"},
        {"Vendor": "Appwrite", "Monthly": 25.00, "Due": "10th", "Account": "Business"},
        {"Vendor": "Railway", "Monthly": 20.00, "Due": "20th", "Account": "Personal BoA"},
        {"Vendor": "Google Cloud", "Monthly": 1.00, "Due": "1st", "Account": "Schwab"},
        {
            "Vendor": "Polygon (Annual)",
            "Monthly": 0.00,
            "Annual": 199.00,
            "Due": "11/23",
        },
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


# -----------------------------
# Main Streamlit app
# -----------------------------
def main() -> None:
    # Title
    st.title("🚀 2025 FinOps Dashboard")

    # High-level KPI cards
    col1, col2, col3 = st.columns(3)
    col1.metric("Total Monthly Spend", "$298.44")
    col2.metric("Business Expenses", "$204.80", delta="-15% vs Last Month")
    col3.metric("Personal Expenses", "$93.64")

    # Spend timing analysis
    build_spend_timing_chart()

    # Vendor inventory
    build_vendor_table()

    # Idle resource alert
    show_idle_resource_alert()

    # Unit economics
    show_unit_economics()

    # Optional: GCP billing upload + mapping
    st.subheader("GCP Billing Export (Optional)")
    uploaded_file = st.file_uploader("Upload GCP billing CSV", type=["csv"])

    if uploaded_file is not None:
        gcp_df = ingest_gcp_billing(uploaded_file)
        ledger_summary = map_to_ledger(gcp_df)

        st.markdown("### GCP Cost vs Budget (Ledger View)")
        st.dataframe(ledger_summary, width="stretch")


if __name__ == "__main__":
    main()
