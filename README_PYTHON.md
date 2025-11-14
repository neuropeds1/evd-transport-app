# Python Environment Setup (Original Streamlit App)

This directory contains the original Python Streamlit application. If you want to run the Python version alongside the Node.js version, follow these instructions.

## Prerequisites

- Python 3.9 or higher (already installed: Python 3.13.0)
- pip (Python package manager)

## Quick Setup

### Option 1: Using the Setup Script (Easiest)

```bash
chmod +x setup_python.sh
./setup_python.sh
```

### Option 2: Manual Setup

1. **Create virtual environment:**
   ```bash
   python3 -m venv venv
   ```

2. **Activate virtual environment:**
   ```bash
   source venv/bin/activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

## Running the Python App

1. **Activate the virtual environment** (if not already activated):
   ```bash
   source venv/bin/activate
   ```

2. **Run the Streamlit app:**
   ```bash
   streamlit run evd_app.py
   ```

3. **Open your browser:**
   The app will automatically open at `http://localhost:8501`

## Deactivating the Virtual Environment

When you're done:
```bash
deactivate
```

## Dependencies

- **streamlit** (1.32.0) - Web framework for the app
- **pandas** (2.2.0) - Data manipulation (if needed for future features)

## Notes

- The Python app (`evd_app.py`) is preserved for reference
- The Node.js version is the primary application going forward
- Both versions can run simultaneously on different ports

## Version Compatibility

- Python 3.13.0 (installed via Homebrew)
- Works on macOS, Linux, and Windows (with appropriate modifications)

