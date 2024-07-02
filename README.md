# TextBrevity
This project is an AI-powered text summarizer that leverages Hugging Face models to generate concise summaries from long texts.

## Features

- **Text Summarization:** Utilizes the BART-large-CNN model from Hugging Face for advanced text summarization.
- **Responsive Interface:** Supports a responsive web interface with both dark and light themes.
- **Input Range:** Supports input texts ranging from 200 to 100,000 characters.
- **API Integration:** Integrates with Hugging Face API for text summarization.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js and npm installed on your local environment.

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd TextBrevity
2. Install npm dependencies:
    ```sh
    npm install

### Usage

1. Create a .env file in the root directory
      Add your Hugging Face API key:
      ```sh
      ACCESS_TOKEN = YOUR_HUGGING_FACE_API_KEY
2. Install dotenv
     ```sh
      npm install dotenv
3. Start the development server:
      ```sh
      npm start
4. Open your browser and navigate to http://localhost:3000 to view the application.
