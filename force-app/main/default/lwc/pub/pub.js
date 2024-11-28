import { LightningElement, wire } from 'lwc';
import { MessageContext,publish } from 'lightning/messageService';
import pubsub from '@salesforce/messageChannel/pubsub__c';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class Pub extends LightningElement {

    @wire(MessageContext)
    myContext;
    //console.log('***** LMS ***** '+myContext);
    message={
        name:{
            firstName:'J',
            lastName:'P'
        }
        ,
        interest:{
            indoor:'carroms',
            outdoor:'cricket'
        }
    }
    inputValue;
    inputHandler(event){
        this.inputValue = event.target.value;
    }
    pubHandler(event){
        let newToast;
        try{
            
        let name= this.inputValue.split(' ');
        console.log('***** LMS ***** ');
        console.log(this.myContext);
        console.log('hey'+name);
        this.message.name.firstName = name[0];
        this.message.name.lastName = name[1];
        this.message.interest.indoor=name[2];
        this.message.interest.outdoor=name[3];

        publish(this.myContext, pubsub,this.message);

        newToast = new ShowToastEvent({
            title:'Publish confirmation',
            message:'Message Published Successfully',
            variant:'success',
        });

        
    }
    catch(e){
        newToast = new ShowToastEvent({title:'Publish failed', message:'your message didn\'t publised '+e.message,variant:'error'});
    }
    finally{
        this.dispatchEvent(newToast);
    }
    }

}