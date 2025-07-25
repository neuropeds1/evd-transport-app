import streamlit as st
import math
from st_pages import Page, show_pages, add_page_tittle

show_pages([Page("streamlit_app.py", "Home", "la"), Page("other_pages/page2.py", "page 2", "la"), ])
