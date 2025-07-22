import streamlit as st
import math

st.title("Quality & Safety During Intra - Hospital Transport of Patients With A Clamped External Ventricular Drain") 

st.header("Calculating the Risk of Intracranial Pressure Elevaton During Intra - Hospital Transport")

# Inject CSS to style the radio buttons like segmented controls
import streamlit as st

# Set options
options = ["hi", "bye", "cya"]
default_index = 0

# Custom CSS for selectbox to mimic segmented control
st.markdown("""
    <style>
    div[data-baseweb="select"] {
        font-size: 2rem !important;
    }

    /* Drop-down text size */
    .css-1d3z3hw {
        font-size: 2rem !important;
    }

    /* Selected value text */
    .css-1pahdxg-control, .css-1d391kg-control {
        font-size: 2rem !important;
        padding: 0.5rem;
        border-radius: 8px;
    }

    /* Dropdown menu items */
    .css-11unzgr {
        font-size: 2rem !important;
    }
    </style>
""", unsafe_allow_html=True)

# Render selectbox
selection = st.selectbox("Choose one", options, index=default_index)
st.write("You selected:", selection)

"""
iht_type_options = ["ICP >= 20mmHg", "Escalation of ICP Category Compared to Pre-Transport ICP Category"]
iht_type = st.segmented_control("Click One:", iht_type_options, selection_mode="single")
st.session_state.inputs["iht_type"] = iht_type
# step 2 greater than 20

icp = st.radio("Pre-IHT ICP category:", ["<15 mmHg", "15–19 mmHg", "≥20 mmHg"], key="icp_cat")
st.session_state.inputs["icp_category"] = icp


intubated = st.radio("Is the patient intubated?", ["Yes", "No"], key="intubation")
st.session_state.inputs["intubated"] = intubated

# Step 4: Duration
duration = st.slider("Duration of IHT (minutes):", 0, 120, 30, key="duration")
st.session_state.inputs["duration"] = duration


# Step 5: Days since ICU admission

days = st.slider("Days since ICU admission:", 0, 30, 5, key="icu_days")

st.session_state.inputs["days_since_icu"] = days
 

# Step 6: CSF Drain
csf_drain = st.number_input("Hourly CSF drained (mL/h):", min_value=0.0, value=5.0, key="csf")

st.session_state.inputs["csf_drain"] = csf_drain"""
