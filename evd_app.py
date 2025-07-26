import streamlit as st
import math
import os
from datetime import datetime
import pandas as pd

st.title("Quality & Safety During Intra - Hospital Transport (IHT) of Patients With a Clamped External Ventricular Drain")

st.header("Calculating the Risk of Intracranial Pressure (ICP) Elevation During Intra - Hospital Transport")

iht_type_options = ["Risk of Absolute Increase in ICP >= 20mmHg"]

iht_type = st.segmented_control("Click One:", iht_type_options, selection_mode="single")

icp = st.radio("Pre-IHT ICP category:", ["<15 mmHg", "15–19 mmHg", "≥20 mmHg"], key="icp_cat")

intubated = st.radio("Is the patient intubated?", ["Yes", "No"], key="intubation")

duration = st.slider("Duration of IHT (minutes):", 0,120,30, key = "duration")

days = st.slider("Days since ICU admission:", 0, 30, 5, key="icu_days")

csf_drain = st.number_input("Hourly CSF drained (mL/h):", min_value=0.0, value=5.0, key="csf")

IHT = st.segmented_control("Click One:", ["IHT for Therapeutic Procedure", "IHT for Diagnostic Procedure"], selection_mode="single")

st.write("(Therapeutic procedures include procedures in the operating room or the angiography suite. Diagnostic procedures are defined as transports to CT or MRI suites).")

unscheduled = st.radio("Is the IHT Unscheduled? (Ex. Emergency Transport)", ["Yes", "No"], key="unscheduled")


next = st.button("Submit")

if next == True:
  if iht_type == "Risk of Absolute Increase in ICP >= 20mmHg":
    if icp == "<15 mmHg":
      risk_icp = 1
    if icp == "15–19 mmHg":
      risk_icp = 3.4
    if icp == "≥20 mmHg":
      risk_icp = 12.94
    if intubated == "Yes":
      risk_intubated = 0.58
    if intubated == "No":
      risk_intubated = 1
    risk_duration = (duration/10)*0.95
    risk_days = days*0.97
    risk_csf = csf_drain*1.11
    if IHT == "IHT for Therapeutic Procedure":
      risk_iht = 5.82
    if IHT == "IHT for Diagnostic Procedure":
      risk_iht = 1
    if unscheduled == "Yes":
      risk_unscheduled = 1.2
    if unscheduled == "No":
      risk_unscheduled = 1
    risk = 1
    risk *= risk_icp
    risk *= risk_intubated
    risk *= risk_duration
    risk *= risk_days
    risk *= risk_csf
    risk *= risk_iht
    risk *= risk_unscheduled
    risk *= 0.118
    final_risk = min(risk, 100.0)
    result = round(final_risk,2)
    if result <= 20:
      risk_label = "✅ LOW"
      banner_color = "green"
    elif 21 <= result <= 50:
      risk_label = "⚠️ MODERATE"
      banner_color = "orange"
    else:
      risk_label = "🟥 HIGH"
      banner_color = "red"
    # Build HTML banner
    st.markdown(f"""
    <div style="padding: 1rem; border-radius: 8px; background-color: {banner_color}; color: white; font-weight: bold; font-size: 1.2rem;">
        The absolute risk of ICP ≥ 20 mmHg during the IHT is {result}%. <br>
        Risk Category: {risk_label}
    </div>
    """, unsafe_allow_html=True)
    
st.divider()
st.write("Calculator has NOT been prospectively evaluated. Please use it at your discretion.")
st.write("Reference: Chaikittisilpa N, Lele AV, Lyons VH, Nair BG, Newman SF, Blissitt PA, Vavilala MS. Risks of Routinely Clamping External Ventricular Drains for Intrahospital Transport in Neurocritically Ill Cerebrovascular Patients. Neurocrit Care. 2017 Apr;26(2):196-204. doi: 10.1007/s12028-016-0308-0. PMID: 27757914.")
st.write("App Developers: Aria Lele, Abhijit Lele")
st.write("All RIGHTS RESERVED")
st.markdown(
    "<p style='color:black; font-size:12px;'>Last Updated: 07/26/2025 ",
    unsafe_allow_html=True
)

st.divider()

# File to store visit count
counter_file = "visit_count.txt"

# Initialize count
if not os.path.exists(counter_file):
    with open(counter_file, "w") as f:
        f.write("0")

# Read current count
with open(counter_file, "r") as f:
  count = int(f.read())

# Increment
count += 1

# Save updated count
with open(counter_file, "w") as f:
    f.write(str(count))

# Display at bottom of page
st.markdown(f"<p style='text-align:center; font-size:12px; color:gray;'>Total Visits: {count}</p>", unsafe_allow_html=True)

