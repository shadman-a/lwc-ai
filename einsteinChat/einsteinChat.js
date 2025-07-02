import { LightningElement, track } from 'lwc';

export default class EinsteinChat extends LightningElement {
    @track currentMessage = '';
    @track messages = [];

    handleInputChange(event) {
        this.currentMessage = event.target.value;
    }

    handleSend() {
        if (this.currentMessage) {
            this.messages = [...this.messages, this.currentMessage];
            this.currentMessage = '';
        }
    }
}
