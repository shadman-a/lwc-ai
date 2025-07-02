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

The component renders a simple chat window with an input field and a send button. Messages typed in the input are appended to the message list. The included example shows how to integrate with an Apex controller that in turn could call Salesforce's Einstein AI services.

## Usage

Include the `einsteinChat` component in your Salesforce DX project or any environment that supports Lightning Web Components. Customize the JavaScript logic to call your chatbot backend and display responses in the message list.

## Salesforce AI Integration

This project contains an example Apex controller (`EinsteinChatController`) and a corresponding update to the LWC that demonstrates how you could invoke Salesforce AI services such as Einstein GPT. When a user sends a message, the component calls `sendMessage` on the Apex controller which can then relay the text to Salesforce AI and return the generated response.

```
force-app/main/default/classes/
├── EinsteinChatController.cls
└── EinsteinChatController.cls-meta.xml
```

The provided Apex implementation simply echoes the prompt, but you can replace the placeholder logic with actual Salesforce AI API calls.
