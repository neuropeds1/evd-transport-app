import streamlit as st
import math

st.title("Quality & Safety During Intra - Hospital Transport of Patients With A Clamped External Ventricular Drain") 

st.header("Calculating the Risk of Intracranial Pressure Elevaton During Intra - Hospital Transport")

# Inject CSS to style the radio buttons like segmented controls
import streamlit as st

# Setup state
options = ["hi", "bye", "cya"]
if "seg_choice" not in st.session_state:
    st.session_state["seg_choice"] = options[0]

# Inject CSS styling
st.markdown("""
    <style>
    .segmented-button {
        font-size: 2rem;
        padding: 1rem 2rem;
        border: 2px solid #ccc;
        border-radius: 12px;
        text-align: center;
        margin: 0.5rem;
        background-color: #eee;
        transition: 0.2s;
    }

    .segmented-button:hover {
        background-color: #ddd;
    }

    .segmented-selected {
        background-color: #4CAF50 !important;
        color: white !important;
        border-color: #4CAF50 !important;
    }
    </style>
""", unsafe_allow_html=True)

# Layout buttons
cols = st.columns(len(options))
for i, opt in enumerate(options):
    selected = st.session_state["seg_choice"] == opt
    btn_class = "segmented-button segmented-selected" if selected else "segmented-button"
    
    with cols[i]:
        st.markdown(f'<div class="{btn_class}">{opt}</div>', unsafe_allow_html=True)
        if st.button(f"Select {opt}", key=f"seg_{opt}"):
            st.session_state["seg_choice"] = opt

st.write("You selected:", st.session_state["seg_choice"])

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
