import { LightningElement } from 'lwc';

export default class ParentComp extends LightningElement {
    childMessage;
    receivedMessage;
    
    inputChangeHandler(event){
        this.childMessage=event.target.value;
    }
    receiveMessage(event){
        alert('heyyyyyy')
        this.receivedMessage = event.detail.messaged;
    }
}