import { LightningElement } from 'lwc';

export default class Game extends LightningElement {
    numbers=[]
    c=0;
    currTarget;
    prevTarget;
    connectedCallback(){
        for(let i=1; i<=160;i++){
            this.numbers.push(i);
        }

        
    }
    changeDiv(event){
        console.log(event.target.getAttribute('value'))
        if(this.c===1)
        {
            console.log('hi')
            console.log(this.prevTarget +' '+ this.currTarget);
        }
        this.c+=1
        event.target.style.backgroundColor='white';
    
    }
    
}