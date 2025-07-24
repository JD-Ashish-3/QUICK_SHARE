# ⚡ QuickShare – Chat & Image Sharing Platform

**QuickShare** is a modern web application for **securely sharing images and chat** across devices. It features user authentication, fast uploads via **Cloudinary**, and a smooth UI powered by **React and Tailwind CSS**.

---

## 🚀 Features

- 🔐 JWT-based user authentication (Sign up / Login)
- 📤 Share images in chats using **Cloudinary**
- 📂 File sharing system backend by **MongoDB Atlas**
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
- Chat/Image sharing is allowed only if authenticate



