import streamlit as st
import math

st.title("Quality & Safety During Intra - Hospital Transport of Patients With A Clamped External Ventricular Drain") 

st.header("Calculating the Risk of Intracranial Pressure Elevaton During Intra - Hospital Transport")


if "step" not in st.session_state:
    st.session_state.step = 1


if "inputs" not in st.session_state:
    st.session_state.inputs = {}

def next_step():
    st.session_state.step += 1

if st.session_state.step ==1:
    int_type = st.radio("Check one fo the following:", ["ICP >= 20mmHg", "Escalation of ICP Category Compared to Pre-Transport ICP Category"])
