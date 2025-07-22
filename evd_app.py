import streamlit as st
import math

st.title("Quality & Safety During Intra - Hospital Transport of Patients With A Clamped External Ventricular Drain") 

st.header("Calculating the Risk of Intracranial Pressure Elevaton During Intra - Hospital Transport")

# Inject CSS to style the radio buttons like segmented controls
import streamlit as st

# Create fake segmented control with columns
st.markdown("""
    <style>
    .segmented-option {
        font-size: 2.5rem;
        padding: 1rem 2rem;
        text-align: center;
        border: 2px solid #ccc;
        border-radius: 12px;
        cursor: pointer;
        transition: 0.2s;
    }
    .segmented-option:hover {
        background-color: #f0f0f0;
    }
    .segmented-selected {
        background-color: #4CAF50;
        color: white;
        border-color: #4CAF50;
    }
    </style>
""", unsafe_allow_html=True)

options = ["hi", "bye", "cya"]
selected = st.session_state.get("seg_choice", options[0])

cols = st.columns(len(options))
for i, opt in enumerate(options):
    with cols[i]:
        is_selected = selected == opt
        if st.button(
            f'<div class="segmented-option {"segmented-selected" if is_selected else ""}">{opt}</div>',
            key=f"seg_{opt}",
            use_container_width=True,
            help=None,
            type="primary" if is_selected else "secondary",
            unsafe_allow_html=True,
        ):
            st.session_state.seg_choice = opt

st.write("You selected:", st.session_state.seg_choice)

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
