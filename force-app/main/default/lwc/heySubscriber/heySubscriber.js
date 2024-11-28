import { LightningElement ,wire} from 'lwc';
import { APPLICATION_SCOPE, MessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import MyChannel from "@salesforce/messageChannel/MyHeyHelloTest__c";
export default class HeySubscriber extends LightningElement {
    subscribedTO;
    receivedMessage;
    @wire(MessageContext)
    mycontext;

    connectedCallback(){
        this.subscribedTO=subscribe(this.mycontext, MyChannel, (mess)=>this.receivedMessage=mess.text.name?mess.text.name:'no message published yet',{scope:APPLICATION_SCOPE});
    }

    handleUnsubscribe(){
        unsubscribe(this.subscribedTO);
    }
}