# Contact Form Email Setup Guide

This guide explains how to set up the Nodemailer backend to send emails from your Contact form using your Gmail account.

## Prerequisites
- A Google/Gmail Account
- Node.js installed on your system

## Step 1: Generate a Gmail App Password
For security reasons, Google does not allow third-party apps to log in using your normal Gmail password. You must generate a specific "App Password" instead.

1. Go to your Google Account settings: [https://myaccount.google.com/](https://myaccount.google.com/)
2. Navigate to the **Security** tab on the left sidebar.
3. Under the "How you sign in to Google" section, ensure **2-Step Verification** is turned ON. (You must enable this first).
4. After enabling 2-Step Verification, click on **2-Step Verification** again, scroll to the bottom, and click on **App passwords**.
   *(Alternatively, use the search bar at the top of your Google Account and search for "App passwords")*
5. Under "Select app", choose **Mail**.
6. Under "Select device", choose **Other (Custom name)** and type exactly: `Portfolio`
7. Click **Generate**.
8. A modal will appear with a 16-character password (e.g., `abcd efgh ijkl mnop`). **Copy this password** exactly as shown. *Do not share this password anywhere public.*

## Step 2: Configure Environment Variables
We need to provide these credentials to your Node.js application securely using an environment file.

1. In the `backend` folder of your project, locate the file named `.env.example`.
2. Keep `.env.example` as it is (it's a template), and create a new file named exactly `.env` in the same folder.
   *(Note: The setup script may have already created this file for you).*
3. Open `.env` and fill it out like this:

```env
PORT=5000
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_PASS=paste_your_16_character_app_password_here
EMAIL_TO=your_gmail_address@gmail.com
FRONTEND_URL=http://localhost:5173
```

* Ensure there are no quotes or spaces around the values in the `.env` file unless explicitly needed.
* `EMAIL_USER` is the account sending the email.
* `EMAIL_TO` is the account receiving the message (should usually be the same address).

## Step 3: Install Required Packages
If you haven't already installed the backend dependencies, open your terminal (Command Prompt/PowerShell), navigate to the backend directory, and install them:

```bash
cd path/to/your/portfolio/backend
npm install
```

This will automatically install `express`, `cors`, `dotenv`, and `nodemailer`.

## Step 4: Run the Backend Server
Now that everything is configured, start the backend server:

```bash
npm run dev
```

You should see output similar to:
```text
🚀 Backend server running on http://localhost:5000
📬 Contact endpoint: POST http://localhost:5000/api/contact
```

## Step 5: Test the Contact Form
1. Ensure your React frontend server is also running (`npm run dev` in the `frontend` folder).
2. Open your browser and navigate to `http://localhost:5173`.
3. Scroll down to the **Contact** section.
4. Fill out the form with a test name, email, and a message longer than 10 characters.
5. Click **Send Message**.
6. If successful, you will see a green success message on the web page.
7. Check your Gmail inbox—you should receive an notification email containing the message details, and the person who filled out the form (the test email address) will receive an automated "Thank you" reply!
