import { LightningElement , wire} from 'lwc';
import { MessageContext, publish } from 'lightning/messageService';
export default class HeyPublisher extends LightningElement {
    message={
        text:"testing",
    }

    @wire(MessageContext)
    context

    inputHandler(event){
        this.message={
            text:{
                name:event.target.value,
                age:3,
            }
        };
    }

    publishHandler(){
        publish(this.context, MYCHANNEL, this.message);
    }
}