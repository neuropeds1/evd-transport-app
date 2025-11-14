# EVD Transport App

A medical decision support tool for calculating the risk of intracranial pressure (ICP) elevation during intra-hospital transport of patients with clamped External Ventricular Drains (EVDs).

## What This App Does

This application helps healthcare providers (neurosurgeons, ICU staff, anesthesiologists) make informed decisions about patient transport safety. It calculates the risk of dangerous ICP elevation during hospital transfers and provides comprehensive checklists for EVD management.

### Key Features

1. **ICP Risk Calculator** - Calculates the probability of ICP ≥ 20 mmHg during transport
2. **EVD Management Checklist** - Interactive checklist for OR management and anesthesia considerations
3. **Educational Documentation** - Detailed guides on EVD anatomy, physiology, and management protocols

## For Non-Technical Users: How to Run This App

### Prerequisites

Before you begin, you need to have these installed on your computer:

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - Choose the "LTS" (Long Term Support) version
   - Follow the installation instructions for your operating system

2. **A code editor** (optional but recommended)
   - Visual Studio Code is free: https://code.visualstudio.com/

### Step-by-Step Instructions

#### Step 1: Download the Project

1. If you have this project folder already, skip to Step 2
2. If not, you'll need to download or clone the project repository

#### Step 2: Open Terminal/Command Prompt

**On Mac/Linux:**
- Open the "Terminal" application (search for it in Spotlight or Applications)

**On Windows:**
- Open "Command Prompt" or "PowerShell"
- Search for "cmd" or "PowerShell" in the Start menu

#### Step 3: Navigate to the Project Folder

In the terminal, type the following command and press Enter:

```bash
cd path/to/evd-transport-app
```

**Replace `path/to/evd-transport-app` with the actual location of your project folder.**

For example, if your project is in Documents:
```bash
cd ~/Documents/evd-transport-app
```

#### Step 4: Install Dependencies

Type this command and press Enter:

```bash
npm install
```

**What this does:** Downloads all the necessary code libraries the app needs to run.

**How long it takes:** Usually 1-3 minutes. You'll see a lot of text scrolling by - that's normal!

**When it's done:** You'll see your command prompt again, ready for the next command.

#### Step 5: Start the Application

Type this command and press Enter:

```bash
npm run dev
```

**What this does:** Starts the web application on your computer.

**Expected output:** You should see something like:
```
✓ Ready in 2.5s
○ Local: http://localhost:3000
```

#### Step 6: Open the App in Your Browser

1. Look for the line that says `Local: http://localhost:3000`
2. Open your web browser (Chrome, Firefox, Safari, Edge, etc.)
3. In the address bar, type: `http://localhost:3000`
4. Press Enter

**You should now see the app running!**

### Using the App

#### ICP Risk Calculator Tab

1. Select the patient's pre-transport ICP category
2. Indicate if the patient is intubated
3. Set the duration of transport using the slider
4. Set days since ICU admission
5. Enter hourly CSF drainage rate
6. Choose the type of transport (Therapeutic or Diagnostic)
7. Indicate if the transport is unscheduled/emergency
8. Click "Calculate Risk"
9. Review the color-coded risk result:
   - Green = Low risk (≤20%)
   - Orange = Moderate risk (21-50%)
   - Red = High risk (>50%)

#### EVD Management Checklist Tab

1. Switch to the "EVD Management Checklist" tab
2. Choose between:
   - **OR Management Protocol** - For operating room procedures
   - **Anesthesia Considerations** - For anesthesia providers
3. Check off items as you complete them
4. Add clinical notes in the Notes section
5. Use "Print Checklist" to save a copy

### Stopping the App

When you're done using the app:

1. Go back to your terminal window
2. Press `Ctrl + C` (on Mac/Linux) or `Ctrl + C` (on Windows)
3. The app will stop running

### Troubleshooting

**Problem: "npm: command not found"**
- Solution: Node.js is not installed or not in your PATH. Reinstall Node.js from nodejs.org

**Problem: "port 3000 is already in use"**
- Solution: Close other applications using port 3000, or the app will automatically use a different port

**Problem: App won't start**
- Solution: Make sure you ran `npm install` first
- Solution: Try deleting the `node_modules` folder and running `npm install` again

**Problem: Browser shows "This site can't be reached"**
- Solution: Make sure the app is running (check your terminal for the "Ready" message)
- Solution: Make sure you're typing the correct URL: `http://localhost:3000`

### Getting Help

If you encounter issues:
1. Check that all prerequisites are installed correctly
2. Review the troubleshooting section above
3. Contact the app developers for technical support

## Important Medical Disclaimer

⚠️ **This calculator has NOT been prospectively evaluated. Please use it at your discretion.**

**This is a decision support tool, not a replacement for clinical judgment.**

## Medical References

**ICP Risk Calculator Based On:**
Chaikittisilpa N, Lele AV, Lyons VH, Nair BG, Newman SF, Blissitt PA, Vavilala MS. Risks of Routinely Clamping External Ventricular Drains for Intrahospital Transport in Neurocritically Ill Cerebrovascular Patients. Neurocrit Care. 2017 Apr;26(2):196-204. doi: 10.1007/s12028-016-0308-0. PMID: 27757914.

**EVD Management Protocols Based On:**
- SNACC (Society for Neuroscience in Anesthesiology and Critical Care) guidelines
- APSF (Anesthesia Patient Safety Foundation) protocols
- Clinical guidelines from major neurosurgical institutions

## Developers

- Aria Lele
- Abhijit Lele

## Additional Documentation

Detailed medical documentation is available in the `docs` folder:

- `OR_EVD_Management_Protocol.md` - Complete OR management checklist
- `Anesthesia_Considerations.md` - Anesthesia-specific considerations
- `EVD_Anatomy_and_Physiology.md` - Educational module on EVD basics

## Technical Details (For Developers)

### Technology Stack

- **Framework:** Next.js 14 (React-based)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package Manager:** npm

### Project Structure

```
evd-transport-app/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx
│   ├── ICPRiskCalculator.tsx
│   └── EVDChecklist.tsx
├── docs/                  # Medical documentation
│   ├── OR_EVD_Management_Protocol.md
│   ├── Anesthesia_Considerations.md
│   └── EVD_Anatomy_and_Physiology.md
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── tailwind.config.js     # Tailwind CSS config
└── README.md             # This file
```

### Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run linter
```

### Version

Current Version: 1.0.0
Last Updated: January 20, 2025

## License

All RIGHTS RESERVED

## Support

For technical support or questions about the application, please contact the developers.

