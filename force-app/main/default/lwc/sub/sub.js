import { LightningElement, wire } from 'lwc';
import pubsub from '@salesforce/messageChannel/pubsub__c';
import { MessageContext, subscribe, APPLICATION_SCOPE, unsubscribe } from 'lightning/messageService';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class Sub extends LightningElement {

    @wire(MessageContext)
    myContext;

    receivedMessage;
    subscriberId;
    subscribeHandler(){
        this.subscriberId = subscribe(this.myContext, pubsub, (receivedMessage)=>{
      
            let n= receivedMessage.name.firstName + ' '+ receivedMessage.name.lastName + ' Hobbies are '+ receivedMessage.interest.indoor + ' '+receivedMessage.interest.outdoor;
            
    
    
            this.receivedMessage = receivedMessage?n:'not received any message';
        }, {scope:APPLICATION_SCOPE});
        console.log(this.myContext);
        console.log(this.MessageContext);
        let newToast = new ShowToastEvent({
            title:'Subscription Toast',
            message:"You subscription is succeeded :)",
            variant:'success',
        });
        this.dispatchEvent(newToast);
    }

    unsubscribeHandler(){
        unsubscribe(this.subscriberId);

        let newToast = new ShowToastEvent({
            title:'Unsubscribe',
            message:'You have unsubscribtion is succeeded',
            variant:'success',
            mode:'sticky',
        });
        this.dispatchEvent(newToast);
    }
}