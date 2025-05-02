# 📋 Task Manager App (Next.js + TypeScript)

A simple and clean Task Management app built with **Next.js (Page Router)** and **TypeScript**.  
This project is designed to practice and demonstrate good structure, clean code, and maintainability.

---

## ✨ Features

- 📋 Add new tasks
- ✅ View list of tasks
- ✏️ Edit existing tasks
- 🗑️ Delete tasks
- 🧹 Clear and scalable folder structure
- 🎨 Basic responsive design with external CSS
- 🛡️ Input validation
- 🛠️ Utility functions for logging and validation
- 🧪 Unit test ready structure (tests to be added later)

---

## 🛠️ Tech Stack

- **Next.js** (Page Router)
- **TypeScript**
- **External CSS (No framework)**
- **Lightweight utilities** (custom validation and logger)

---

## 📂 Folder Structure

```
/src
  /components    -> Reusable UI components (AddTaskForm, TaskItem)
  /layouts       -> Layout components (MainLayout)
  /pages         -> Page components (index.tsx)
  /styles        -> Global CSS styling
  /types         -> TypeScript types (task type)
  /utils         -> Validation and logging helpers
```

---

## 🚀 Getting Started

1. Clone the repo:

```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) 🚀

---

## 🎯 Future Improvements

- Add persistent storage (localStorage / database)
- Add unit and integration tests (Jest + React Testing Library)
- Migrate to App Router
- Use a CSS library/ framework for better styling
- Deploy to Vercel

---

## 📜 License

This project is licensed under the MIT License.

<!-- > "Originally built using Page Router, later migrated to App Router to stay modern with Next.js updates." -->
<!-- **To migrate:**
- Move `/pages` stuff into `/app` folder.
- Convert pages like `index.tsx` into server components or client components.
- Adjust minor imports (like `use client` if needed).
- Layout files become `layout.tsx` under `/app`. -->
