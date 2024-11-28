import { LightningElement, track} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class LightningStudioPlugin extends LightningElement {

    isHide=true;
    pw="";
    hidePw=""
    length=0;
    asterisk="*";

    a=[]
    counter=1;


    handleInput(event){
        this.pw=event.target.value;
        this.length=this.pw.length;
    }
    handleClick(){
        this.refs.product.value="";
        this.isHide= !this.isHide;
        if(!this.isHide){
            this.hidePw = this.asterisk.repeat(this.length);
            
        }
        console.log(this.counter)
        console.log(this.pw)
        if(this.pw.length<1)
        alert('Please type the item name');
        let object={counter:this.counter, name:this.pw}
        this.counter = this.counter+1;
        console.log('****************************************************')
        console.log(this.a);
        console.log('****************************************************')
        this.a.push(object);

        const event = new ShowToastEvent({
    title: 'Success!',
    message: 'Item Added!', 
    variant : 'success'         
});
this.dispatchEvent(event); 


        
        
        console.log(this);

        // console.log('_________________________');
        // console.log(this.hidePw);
        // console.log(this.isHide);
        // console.log('_________________________');
    }

}