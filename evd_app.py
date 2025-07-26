import streamlit as st
import math

st.title("Quality & Safety During Intra - Hospital Transport of Patients With a Clamped External Ventricular Drain")

st.header("Calculating the Risk of Intracranial Pressure Elevation During Intra - Hospital Transport")

iht_type_options = ["Risk of Absolute Increase in ICP >= 20mmHg", "Risk of Escalation of ICP Category Compared to Pre-Transport ICP Category"]

iht_type = st.segmented_control("Click One:", iht_type_options, selection_mode="single")

icp = st.radio("Pre-IHT ICP category:", ["<15 mmHg", "15–19 mmHg", "≥20 mmHg"], key="icp_cat")

intubated = st.radio("Is the patient intubated?", ["Yes", "No"], key="intubation")

duration = st.slider("Duration of IHT (minutes):", 0, 120, 30, key="duration")

days = st.slider("Days since ICU admission:", 0, 30, 5, key="icu_days")

csf_drain = st.number_input("Hourly CSF drained (mL/h):", min_value=0.0, value=5.0, key="csf")

IHT = st.segmented_control("Click One:", ["IHT for Therapeutic Procedure", "IHT for Diagnostic Procedure"], selection_mode="single")

unscheduled = st.radio("Is the IHT Unscheduled", ["Yes", "No"], key="icp_cat")


next = st.button("Submit")

if next == True:
  st.write("sup")
