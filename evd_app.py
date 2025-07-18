import streamlit as st

st.title("EVD Transport Risk Assessment Tool")

# Step 1: Ask if the patient has an EVD
evd_present = st.radio("Does your patient have an EVD?", ("Yes", "No"))

if evd_present == "No":
    st.warning("This tool is designed for patients with EVDs.")
    st.stop()

# Step 2: ICP Range
icp_range = st.selectbox("What is the ICP range?", ["0-5", "6-10", "11-20"])

# Step 3: CSF Output
csf_output = st.selectbox("What is the CSF output in mL/hr?", ["0-5", "6-10", "11-20"])

# Step 4: Determine Risk
if icp_range == "0-5" and csf_output == "0-5":
    st.success("🟢 Risk is Low: Travel with ICP monitoring.")
elif icp_range == "11-20" and csf_output == "11-20":
    st.error("🔴 Risk is High: Travel with ICP monitoring. Consider keeping EVD open for CSF drainage.")
else:
    st.warning("🟡 Risk is Moderate: Travel with ICP monitoring.")
