# The Wild Oasis Website

[![Vercel](https://img.shields.io/badge/deployed-on-vercel-000000?style=flat&logo=vercel&logoColor=white)](https://the-wild-oasis-website-nu-lac.vercel.app/)

The Wild Oasis Website is a modern, full-featured hotel reservation platform that allows users to browse, filter, and book cabins seamlessly. Built with **Next.js**, **Tailwind CSS**, and **Supabase**, it offers a polished user experience with authentication, reservation management, and an admin dashboard.

---

## 🌐 Live Demo

[Visit The Wild Oasis Website](https://the-wild-oasis-website-nu-lac.vercel.app/)  
Admin Panel: [The Wild Oasis Admin Panel Repository](https://github.com/SanaNiayeshnia/The-Wild-Oasis-Admin-Panel)

---

## 🛠️ Features

- Browse and filter available cabins with ease
- View detailed cabin information and photos
- Book a stay with flexible date selection
- Manage reservations (Create, Read, Update, Delete)
- Authentication via Google login
- User dashboard for managing bookings and profile
- Admin panel for managing cabins and reservations

---

## 🧰 Tech Stack

- **Frontend:** Next.js 15, React 19, Tailwind CSS 4, Shadcn UI, Sass, React icons
- **Backend & Auth:** Supabase (via Auth.js with Google provider)
- **Utilities:** date-fns, moment, react-hot-toast

---

## ⚡ Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SanaNiayeshnia/The-Wild-Oasis-Website.git
   cd the-wild-oasis-website
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file and add your Supabase project credentials and Google OAuth keys:

   ```env

   SUPABASE_KEY=your-supabase-key
   SUPABASE_URL=your-supabase-url
   AUTH_SECRET=your-secret
   AUTH_GOOGLE_ID=your-google-id
   AUTH_GOOGLE_SECRET=your-google-secret
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000)

5. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

---

**The Wild Oasis Website** – A seamless cabin booking experience built with modern web technologies.
