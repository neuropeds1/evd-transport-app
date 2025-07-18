import streamlit as st
import math

st.title("Quality & Safety During Intra - Hospital Transport of Patients With A Clamped External Ventricular Drain") 

st.header("Calculating the Risk of Intracranial Pressure Elevaton During Intra - Hospital Transport")


if "step" not in st.session_state:
    st.session_state.step = 1


if "inputs" not in st.session_state:
    st.session_state.inputs = {}
data = st.session_state.inputs
def next_step():
    st.session_state.step += 1
# step 1
if st.session_state.step ==1:
    iht_type = st.radio("Check one of the following:", ["ICP >= 20mmHg", "Escalation of ICP Category Compared to Pre-Transport ICP Category"], key ="iht_type")
    if st.button("Next"):
        st.session_state.inputs["iht_type"] = iht_type
        next_step()
# step 2 greater than 20
elif st.session_state.step == 2 and (data['iht_type'] == "ICP >= 20mmHg"):
    icp = st.radio("Pre-IHT ICP category:", ["<15 mmHg", "15–19 mmHg", "≥20 mmHg"], key="icp_cat")
    if st.button("Next"):
        st.session_state.inputs["icp_category"] = icp
        next_step()
# step 2 other
elif st.session_state.step == 2 and (data['iht_type'] == "Escalation of ICP Category Compared to Pre-Transport ICP Category"):
    icp = st.radio("Pre-IHT ICP category:", ["<15 mmHg", "15–19 mmHg"], key="icp_cat")
    if st.button("Next"):
        st.session_state.inputs["icp_category"] = icp
        next_step()

        
    
