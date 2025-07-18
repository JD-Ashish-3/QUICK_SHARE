# ⚡ QuickShare – File & Image Sharing Platform

**QuickShare** is a modern web application for **securely sharing images and files** across devices. It features user authentication, fast uploads via **Cloudinary**, and a smooth UI powered by **React and Tailwind CSS**.

---

## 🚀 Features

- 🔐 JWT-based user authentication (Sign up / Login)
- 📤 Upload and share images using **Cloudinary**
- 📂 File sharing system backed by **MongoDB Atlas**
- 🌐 Backend deployed on **Vercel**
- 🎨 Beautiful and responsive UI using **React + Tailwind CSS**

---

## 📦 Tech Stack

### 💻 Frontend
- React.js
- Tailwind CSS
- Axios

### 🖥 Backend
- Node.js + Express.js
- MongoDB Atlas (via Mongoose)
- JWT Authentication
- Cloudinary (image hosting)

### ☁️ Hosting & Services
- **Backend**: [Vercel](https://quick-share-seven.vercel.app/)
- **Database**: MongoDB Atlas
- **Media Storage**: Cloudinary

---

## 🔐 Authentication Flow

- Users sign up or log in → JWT token generated
- Token is stored in local storage
- Protected routes require the token
- Image/file upload is allowed only if authenticated



