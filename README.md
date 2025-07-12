
# MoodTunes

MoodTunes is an **AI-powered music recommendation system** developed as a **full-stack web application**. It detects the user’s emotional state from free-form text input and fetches relevant music recommendations using the **Spotify Web API**. Designed for personalization and emotional well-being, MoodTunes uses **Hugging Face sentiment analysis models** to understand user moods in real-time.

---

## Project Overview

The **MoodTunes** project provides users with a seamless way to translate their emotions into meaningful music experiences. It allows users to describe how they’re feeling using natural language, and based on that input, it classifies the sentiment using a transformer-based AI model. The app then fetches a mood-appropriate playlist or song list from Spotify.

This project combines real-time emotion detection with music streaming, delivering a tailored audio experience that can uplift, soothe, or match the user's current mood.

### Key Objectives:
- Accept user input in the form of mood-related natural language (e.g., "I'm feeling happy", "I feel anxious").
- Classify emotional sentiment using **DistilBERT** from Hugging Face Transformers.
- Use the **Spotify Web API** to recommend songs that align with the detected mood.
- Offer a responsive and intuitive user interface accessible on both desktop and mobile.
- Authenticate users securely using **Firebase Authentication**, and store user data in **Firestore**.

---

## Features

- **Mood Input Interface:** Text input for users to describe their current emotional state.
- **AI-Powered Sentiment Detection:** Uses a transformer model to analyze and classify the mood from user input.
- **Spotify Integration:** Fetches mood-based songs or playlists using the Spotify Web API.
- **Dynamic Music Player:** Embedded player allows users to play/pause music directly within the app.
- **User Authentication:** Firebase-based sign-up and login for personalized access.
- **Responsive UI:** Mobile-friendly design using Tailwind CSS and Shadcn UI.

---

## Technologies Used

- **React.js** – Frontend framework for building dynamic UI.
- **Django & Django REST Framework** – Backend logic and API handling.
- **Firebase Auth & Firestore** – Authentication and database storage.
- **Hugging Face Transformers (DistilBERT)** – Sentiment analysis engine.
- **Spotify Web API** – Music recommendations based on mood.
- **Tailwind CSS & Shadcn UI** – Styling and UI components.

---

## Project Structure

```plaintext
moodtunes/
├── frontend/                        # React app (user interface)
│   ├── components/                 # UI components (input, player, result)
│   ├── pages/                      # Landing and dashboard views
│   ├── App.js                      # Main application file
│   └── tailwind.config.js          # Styling configuration
├── backend/                        # Django project
│   ├── moodapi/                    # Django app with API endpoints
│   ├── views.py                    # Mood detection and Spotify logic
│   └── urls.py                     # API routes
├── firebase/                       # Firebase config files
├── .env                            # Environment variables
├── README.md                       # Project documentation
```

---

## 🚀 How to Use MoodTunes

### 🌐 On Web (Desktop or Mobile Browser)

1. Sign up or log in using your email/password (via Firebase).
2. Enter a sentence about your mood (e.g., "I'm feeling a bit down today").
3. The app will detect your emotion using Hugging Face sentiment AI.
4. Spotify-matched songs will appear based on your mood.
5. Play, pause, or skip songs right within the app interface.

---
