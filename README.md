# Explanation of Code Using Ollama 

## Project Overview
Explanation of Code Using Ollama is a backend-based AI application that explains user-provided source code in simple, human-readable language.  
The project uses a **local Large Language Model (LLM) via Ollama (Code LLaMA)** instead of paid cloud APIs, ensuring free, offline, and reliable AI inference.

This project focuses on clean backend design, REST API development, and real-world AI integration using local models.

---

## Features
- Explains small and large code snippets
- Uses local AI via Ollama (Code LLaMA)
- No API keys, no quota limits, no billing
- REST API built with Node.js and Express
- Clean controller–service architecture
- Graceful error handling

---

## Tech Stack
- Node.js
- Express.js
- JavaScript (ES Modules)
- Ollama (Code LLaMA – Local LLM)

---

## Why Ollama?
This project avoids cloud-based AI APIs and instead uses Ollama to run a local LLM.

Advantages:
- Free and open-source
- Works offline after setup
- No API keys or rate limits
- Full control over AI inference
- Ideal for learning and development

---

## Architecture
Client / Test Script  
↓  
Node.js + Express Backend  
↓  
Local LLM (Ollama – Code LLaMA)

---

## Installation & Setup

### Step 1: Clone Repository

### Step 2: Install Ollama
Download from:
https://ollama.com/download

Verify installation:

Pull model:

Ollama runs on:

---

### Step 3: Install Dependencies

---

### Step 4: Run Backend Server

Server runs on:

---

### Step 5: Use the API
Once the server is running, send a POST request to explain code.

Endpoint:

Install → Run server → Send POST request → Get explanation
