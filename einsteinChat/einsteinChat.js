import { LightningElement, track } from 'lwc';
import sendMessage from '@salesforce/apex/EinsteinChatController.sendMessage';

export default class EinsteinChat extends LightningElement {
    @track currentMessage = '';
    @track messages = [];

    handleInputChange(event) {
        this.currentMessage = event.target.value;
    }

    handleSend() {
        if (this.currentMessage) {
            const userMessage = this.currentMessage;
            this.messages = [...this.messages, userMessage];
            this.currentMessage = '';
            sendMessage({ prompt: userMessage })
                .then((response) => {
                    this.messages = [...this.messages, response];
                })
                .catch((error) => {
                    // eslint-disable-next-line no-console
                    console.error('Error from Einstein AI', error);
                });
        }
    }
}
