import streamlit as st
import math

st.title("EVD Transport Risk Estimator (based on published adjusted odds ratios)")

# Select IHT Type
iht_type = st.selectbox("Type of IHT", ["Diagnostic", "Therapeutic"])

# Define aORs
aors = {
    "Therapeutic": {
        "base": 5.82,
        "ICP_15_19": 3.40,
        "ICP_20+": 12.94,
        "Intubated": 0.58,
        "DurationPer10Min": 0.95,
        "DaysSinceICU": 0.97,
        "CSFHourly": 1.11
    },
    "Diagnostic": {
        "base": 18.02,
        "ICP_15_19": 1.52,
        "ICP_20+": None,  # N/A
        "Intubated": 1.16,
        "DurationPer10Min": 1.05,
        "DaysSinceICU": 0.97,
        "CSFHourly": 1.21
    }
}

# ICP Category
icp_category = st.selectbox("Pre-IHT ICP category", ["<15 mmHg", "15–19 mmHg", "≥20 mmHg"])

# Intubation
intubated = st.selectbox("Is the patient intubated?", ["Yes", "No"])

# Duration of IHT
duration = st.slider("Duration of IHT (in minutes)", 0, 120, 30)

# Days since ICU admission
days_since_icu = st.slider("Days since ICU admission", 0, 30, 5)

# Hourly CSF drained
csf_drain = st.number_input("Hourly CSF drained (mL/h)", min_value=0.0, value=5.0)

# Compute aOR
selected = aors[iht_type]

# Start with base odds
total_odds = selected["base"]

# Add ICP contribution
if icp_category == "15–19 mmHg":
    total_odds *= selected["ICP_15_19"]
elif icp_category == "≥20 mmHg":
    if selected["ICP_20+"] is None:
        st.error("No data available for ICP ≥20 mmHg in Diagnostic IHT group.")
        st.stop()
    total_odds *= selected["ICP_20+"]

# Intubation contribution
if intubated == "Yes":
    total_odds *= selected["Intubated"]

# Duration contribution
duration_factor = duration / 10.0
total_odds *= math.pow(selected["DurationPer10Min"], duration_factor)

# Days since ICU
total_odds *= math.pow(selected["DaysSinceICU"], days_since_icu)

# CSF drained
total_odds *= math.pow(selected["CSFHourly"], csf_drain)

# Display results
st.markdown("### Estimated Adjusted Odds Ratio")
st.success(f"Estimated aOR: **{total_odds:.2f}**")

# Interpretation
if total_odds > 10:
    st.warning("⚠️ High estimated odds — consider close monitoring and EVD precautions.")
elif total_odds > 3:
    st.info("🔵 Moderate odds — standard ICP transport precautions advised.")
else:
    st.success("🟢 Low estimated odds — favorable transport profile.")
