<img width="1280" alt="readme-banner" src="https://github.com/user-attachments/assets/35332e92-44cb-425b-9dff-27bcf1023c6c">

# RCG(Random Compliment Generator) 🎯


## Basic Details
### Innovators: 

### Team Members
- Team Lead: Adharsh M S - GEC Palakkad
- Member 2: Richa Maria Johnson - GEC Palakkad
- Member 3: Abhiram K - GEC Palakkad

### Project Description
RCG is a fun web app that uses AI to detect objects in your photos and generates quirky compliments for whatever it finds! Just upload any picture, and our app will spot the main object and serve up a lighthearted, personalized compliment—whether it's your dog, your favorite mug, or even your shoes! Perfect for adding a smile to your day and making your snapshots feel appreciated. 😊

### The Problem (that doesn't exist)
In a world filled with serious photos and critical selfies, people are suffering from a severe lack of random, object-specific compliments. From underappreciated houseplants to uncelebrated coffee mugs, everyday objects are left feeling unloved and unnoticed. Humans, too, are missing out on the joy of hearing delightful and ridiculous praise for the most mundane items in their lives.

### The Solution (that nobody asked for)
Introducing RCG(Random Compliment Generator)—the AI-powered compliment generator that brings appreciation to all things, big and small! Finally, your favorite chair, your half-eaten sandwich, or your loyal coffee mug can bask in the glory of a heartfelt (and sometimes absurd) compliment. Because why should only people get the love? Snap a photo, let the app do its magic, and give your objects the compliments they truly deserve!

## Technical Details
### Technologies/Components Used
For Software:
- Javascript, HTML, SCSS
- React JS, Node JS, Express
- Groq AI

### Project Documentation
# RCG Documentation

**RCG** is a playful web app that detects objects in your photos and generates fun, AI-powered compliments for them! It’s designed to bring humor and light-heartedness to everyday moments by showering appreciation on any object you upload.

---

## Project Overview

**RCG** uses a combination of image recognition and natural language generation to identify objects in an uploaded image and provide a quirky compliment based on what it finds. It’s perfect for adding a bit of fun to mundane objects and celebrating all things with a random, feel-good compliment.

### Key Technologies
- **Frontend**: React (for handling image uploads and displaying compliments)
- **Backend**: Node.js + Express (API for handling image recognition and generating compliments)
- **AI Services**: 
  - **Object Detection & Compliment Generation**: Groq API

---

## Features

- **Image Upload**: Users can upload any image to the app.
- **Object Detection**: Recognizes the main object in the image using an image recognition API.
- **Compliment Generation**: Creates a humorous compliment based on the detected object.
- **Real-Time Display**: Shows the compliment immediately after processing.

---

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/abhiramkunnath/rcg.git
   cd rcg
   ```

2. **Backend Setup**
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `root` directory with the following variables:
     ```plaintext
     GROQ_API_KEY=your_groq_ai_api_key
     PORT=backend_port_number
     ```
   - Start the server:
     ```bash
     node server.js
     ```

3. **Frontend Setup**
   - Install dependencies:
     ```bash
     cd frontend
     npm install
     ```
   - Start the React app:
     ```bash
     npm start
     ```

---

## Usage

1. **Upload an Image**: Click on the upload button to select an image from your device.
2. **View Results**: After a short processing time, the app displays:
   - **Compliment**: A fun, AI-generated compliment for the detected object.
3. **Enjoy and Share**: Take a screenshot or enjoy the silly compliment! 

---

## API Structure

### Backend API Endpoints

- **POST /detect-object**
  - **Description**: Accepts an image file, detects objects in the image, and generates a compliment for the detected object.
  - **Request**: 
    - Form-data with `image` (file)
  - **Response**:
    ```json
    {
      "compliment": "random compliment"
    }
    ```

---

## Example Workflow

1. **User uploads a picture of a dog.**
2. **The app detects "dog" as the main object.**
3. **Groq AI generates a compliment like, "You’re pawsitively perfect!"**
4. **The compliment is displayed to the user.**

---

**RCG** is all about fun and bringing smiles to everyday life. Enjoy using it, and don’t forget to give your coffee mug a well-deserved compliment! 😊

# Screenshots
![Starting Screen](https://github.com/abhiramkunnath/rcg/blob/799dda813d7b1847b1fe420ad7c6ecd605bbc9dc/assests/Screenshot%202024-11-02%20174602.png)
*Starting Screen of RCG*

![Generating Page](https://github.com/abhiramkunnath/rcg/blob/799dda813d7b1847b1fe420ad7c6ecd605bbc9dc/assests/Screenshot%202024-11-02%20180715.png)
*Generator Page of RCG*

![Generating Page(File Uploaded)](https://github.com/abhiramkunnath/rcg/blob/799dda813d7b1847b1fe420ad7c6ecd605bbc9dc/assests/Screenshot%202024-11-02%20180729.png)
*Generator Page of RCG with image uploaded*

![Generating Page(Compliment Generated)](https://github.com/abhiramkunnath/rcg/blob/799dda813d7b1847b1fe420ad7c6ecd605bbc9dc/assests/Screenshot%202024-11-02%20180744.png)
*Compliment Generated*

![Page Not Found](https://github.com/abhiramkunnath/rcg/blob/799dda813d7b1847b1fe420ad7c6ecd605bbc9dc/assests/Screenshot%202024-11-02%20174717.png)
*Page Not Found Screen*

# Video
[Demo Video](https://drive.google.com/file/d/1fFqbwR-2cSDqzD8Q2HxzmMuZNJbdZ1_g/view?usp=sharing)
*Demo video of uploading an image and getting compliment in RCG*

## Team Contributions
- Adharsh M S: Implementation of AI
- Richa Maria Johnson: Styling
- Abhiram K: Server and Front-End

---
Made with ❤️ at TinkerHub Useless Projects 

![Static Badge](https://img.shields.io/badge/TinkerHub-24?color=%23000000&link=https%3A%2F%2Fwww.tinkerhub.org%2F)
![Static Badge](https://img.shields.io/badge/UselessProject--24-24?link=https%3A%2F%2Fwww.tinkerhub.org%2Fevents%2FQ2Q1TQKX6Q%2FUseless%2520Projects)


