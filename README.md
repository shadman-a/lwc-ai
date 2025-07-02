# LWC AI Chatbot

This repository contains a minimal Lightning Web Component (LWC) that serves as a starting point for building an Einstein AI chatbot. The component lives in the `einsteinChat` directory and includes basic markup, styles and JavaScript.

## Component Structure

```
einsteinChat/
├── einsteinChat.html
├── einsteinChat.js
├── einsteinChat.js-meta.xml
└── einsteinChat.css
```

The component renders a simple chat window with an input field and a send button. Messages typed in the input are appended to the message list. You can extend this logic to integrate with your own chatbot service.

## Usage

Include the `einsteinChat` component in your Salesforce DX project or any environment that supports Lightning Web Components. Customize the JavaScript logic to call your chatbot backend and display responses in the message list.
