# SpaceX Capsule Dashboard

This application is a landing page built using **Next.js** that fetches and displays a list of Capsules from the **SpaceX API**. The dashboard includes various features that enhance the user experience while interacting with the capsule data.

## Features

### Table of Capsules

![Project Screenshot](capsule_screenshots/Capsules%20Table.PNG)

- Fetches data from the SpaceX API and displays it in a **PrimeReact** table.
- Supports pagination, showing 5 items per page for easy navigation.
- Each row in the table includes an **"Edit"** button that allows users to edit the entry locally without sending updates to the API.

### Search Form

![Project Screenshot](capsule_screenshots/Search%20Form.PNG)

- Implements a search form using **Formik** to handle the form state.
- Users can filter the table based on three attributes: **status**, **original launch date**, and **type** of the Capsules.
- The search functionality is fast and accurate, providing relevant results in real time.

### Add New Item Form

![Project Screenshot](capsule_screenshots/Add%20Form.PNG)

- Features a form built with **Formik** for adding new Capsules to the local state.
- The form is validated using **Yup**, ensuring that all required fields are filled out correctly.
- Newly added entries appear immediately in the table after submission, without sending any data to the SpaceX API.

### Edit Existing Items

- Each row has an **"Edit"** button that populates the form with existing data, allowing users to update the capsule details.
- Uses **Formik** to manage form submission and validates fields with **Yup** before updating the local state.

### Popup for Item Details

![Project Screenshot](capsule_screenshots/Details%20Popup.PNG)

- Clicking on an item in the table displays a popup/modal with full details of the selected capsule, providing an enhanced view of the information.

Here's the video walkthrough link: [Video Walkthrough](https://www.youtube.com/watch?v=YcfvBWi8UFk)

Live link of the project: [Live Link](https://space-x-dashboard-teal.vercel.app/)

Github Repository: [Github Repository](https://github.com/Yinye013/OnyinyeAdesanya_CheckitFE)

## Usage

1. Clone the repository and navigate to the project directory.
2. Install the required dependencies:
   ```bash
   npm install
   ```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
