# 📸 Moments App

A modern and responsive **React Native** application built using **Expo Router** and **file-based navigation**. The Moments App allows users to create, view, and manage their memorable experiences — called “moments.” Designed with theming, reusability, and persistence in mind.

---

## ✨ Features

- 🏠 **Home Screen**: Displays a list of moments in card format
- ➕ **Add Moment**: Submit new moments with title, description, image, and date
- 🔎 **Moment Detail View**: View full information of a moment
- 🌗 **Light/Dark Theme Toggle** (Context-based)
- 💾 **Persistent Storage** using AsyncStorage
- ⚛️ **Reusable Components** and organized file structure
- ⚡ Built with **Expo Router v2** (file-based routing system)

---

## 📸 Screenshots

### Home Screen – Light Mode  
![ss1](./assets/ss1.png)

### Home Screen – Dark Mode  
![ss2](./assets/ss2.png)

### Add Moment Form  
![ss3](./assets/ss3.png)

### Moment Detail View  
![ss4](./assets/ss4.png)

### Theme Toggle Active  
![ss5](./assets/ss5.png)

### Responsive Layout & Cards  
![ss6](./assets/ss6.png)

---

## 🎥 Demo Recording

📽️ (./assets/screen-video.mp4)

---

## 🛠️ Tech Stack

- **React Native** with **Expo**
- **Expo Router** (App directory structure)
- **AsyncStorage** for local data
- **Context API** for state + theme
- **Day.js** for date formatting
- **React Navigation** (built into Expo Router)

---

## 📂 Folder Structure
app/
├─ index.js # Home screen
├─ add.js # Add Moment screen
└─ moment/[id].js # Moment details screen

components/
└─ MomentCard.js

context/
├─ MomentsContext.js
└─ ThemeContext.js

data/
└─ dummyMoments.js

utils/
├─ formatDate.js
└─ useThemeStyle.js

assets/
├─ ss1.png → ss6.png


---

## 💡 Thought Process

The goal was to create a fully responsive and cleanly structured app demonstrating practical mobile UI, state management, and feature completeness.  
By using **file-based routing**, the project scales naturally. **AsyncStorage** enables persistence, and theming was added for user personalization.

---

## 🔗 Repository

[GitHub Repo](https://github.com/Dhananjay320/moments-app)

---

## 👋 Author

**Dhananjay Ahlawat**  
📍 Gurugram, Haryana  
🔗 [GitHub](https://github.com/Dhananjay320)

---

> *Thank you for reviewing my assignment! I'm excited about the opportunity to contribute and grow further.*

#   m o m e n t s - a p p  
 