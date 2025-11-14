#!/bin/bash

# Setup script for Python virtual environment

echo "Creating Python virtual environment..."
python3 -m venv venv

echo "Activating virtual environment..."
source venv/bin/activate

echo "Upgrading pip..."
pip install --upgrade pip

echo "Installing dependencies..."
pip install -r requirements.txt

echo ""
echo "✅ Python environment setup complete!"
echo ""
echo "To activate the virtual environment in the future, run:"
echo "  source venv/bin/activate"
echo ""
echo "To run the Streamlit app:"
echo "  streamlit run evd_app.py"
echo ""
echo "To deactivate the virtual environment:"
echo "  deactivate"

