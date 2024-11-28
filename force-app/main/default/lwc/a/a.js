import { LightningElement, wire } from 'lwc';
import { MessageContext, publish } from 'lightning/messageService';
import MYCHANNEL from "@salesforce/messageChannel/MyHeyHelloTest__c";
import MYAR from "@salesforce/resourceUrl/TransferAR";
import MYCA from "@salesforce/contentAssetUrl/uc_logo";
export default class A extends LightningElement {
    AR=MYAR;
    AC=MYCA;
    message={
        name:"testing",
        age:10
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