import { LightningElement,api } from 'lwc';

export default class ChildComp extends LightningElement {
    @api message;
    messageToParent='def';
    myEvent = new CustomEvent('message2parent',{
        detail:{a:1,b:2,a:3,name:'hey',messaged:this.messageToParent}
    });
    inputChangeHandler(event){
        this.messageToParent = event.target.value;
       
        
    }
    clickHandler(){
        this.dispatchEvent(this.myEvent);
    }
    
}