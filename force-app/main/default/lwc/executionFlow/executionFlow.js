console.log("*************  1  *************");
import { LightningElement,track,wire,api} from 'lwc';
import USERID from '@salesforce/user/Id';
console.log('user id under import'+USERID)
//animalNodeclaration ='jessy'
var animal='buffalo';
let animallet='sheeplet';
const animalconst= 'helloconst';
console.log(animal);
console.log(animallet);
console.log(animalconst);
console.log("*************  2  *************");
import getMyAcc from '@salesforce/apex/ExecutionFlow.getMyAccount';
import getAcc from '@salesforce/apex/ExecutionFlow.getMyAccounts';
console.log("*************  2+  *************");
console.log(this);
let fruit='banana';

class ExecutionFlow2 extends LightningElement {
    constructor(){
        console.log('jelp')
    }
    
}
export default class ExecutionFlow extends LightningElement {
    sent='sent value';
    userId=USERID;
    @api recordId;
    @api objectApiName 
   @api fruit='Mango';
   
    x=10;
    @track arr=[222,33,4,55,];
    accounts=[];
    error;
    oneerror;
    twoerror;
    one=[];
    two=[];
   
    

    @wire(getAcc)
oneWire({data,error}){
    console.log(this);
     console.log("*************  wire 1  *************"+'User Id'+this.userId+'Object Name '+this.objectApiName+' record Id '+this.recordId + this.fruit +' ***sent value'+this.sent);
    
    if(data){
        console.log(data);
        this.one=data;
        console.log("************* inside wire 1  *************");
    }
    else if(error){
        this.oneerror=error;
    }
}

 @wire(getMyAcc,{recId:'$sent'})
reactiveWire({data,error}){
     console.log("*************  wire Reactive  *************");
    
    if(data){
        console.log(data);
        console.log("************* inside wire Reactive  *************");
    }
    else if(error){
        this.oneerror=error;
    }
}


    
constructor(){
    super(1);
    console.log(this.arr);
    console.log(this.x);
    console.log("************* 3  *************"    +'User Id'+this.userId+ this.fruit);
    console.log(animal);
console.log(animallet);
console.log(animalconst);
    getAcc().then(res=>{
         console.log("*************  constructor imperative 1*************"+ this.fruit);
        this.accounts= res;
        console.log(res);
    }).catch(err=>this.error=error)
        console.log("************* 3+  *************");


    getAcc().then(res=>{
         console.log("*************  constructor imperative 2*************");
        this.accounts= res;
        console.log(res);
    }).catch(err=>this.error=error)


    getAcc().then(res=>{
         console.log("*************  constructor imperative 3*************");
        this.accounts= res;
        console.log(res);
    }).catch(err=>this.error=error)



    getAcc().then(res=>{
         console.log("*************  constructor imperative 4*************");
        this.accounts= res;
        console.log(res);
    }).catch(err=>this.error=error)

    getAcc().then(res=>{
         console.log("*************  constructor imperative 5*************");
        this.accounts= res;
        console.log(res);
    }).catch(err=>this.error=error)

 console.log("************* constructor called *************"+ this.fruit);
}
connectedCallback() {
    console.log('connected callback api '+'Object Name '+'User Id'+this.userId+this.objectApiName+' record Id'+this.recordId )

 getAcc().then(res=>{
         console.log("*************  cc  imperative 3*************"+this.recordId +'User Id'+this.userId+ 'object name'+this.objectApiName );
        this.accounts= res;
        console.log(res);
    }).catch(err=>this.error=error)
     console.log("*************  inside error connected callback*************"+this.recordId +  this.fruit);
    
}


@wire(getAcc)
twoWire({data,error}){
     console.log("*************  wire 2   *************");
    console.log(data);
    if(data){
        this.two=data;
        console.log("*************  inside wire 2 *************");

    }
    else if(error){
        this.twoerror=error;
    }
}

handleClick(){
    this.sent='001J2000002Vy7sIAC';
    // getAcc().then(res=>{
    //     this.accounts= res;
    //     console.log(res);
    // }).catch(err=>this.error=error)
}
handleClickk(){
    this.sent=null;
}

renderedCallback(){
 console.log("************* rendered callback  *************"+this.objectApiName);
    }

}
console.log("************* 4  *************");
// customElements.define(my-flow-component, class MyFlowComponent {
// constructor(){
//     console.log("************* 5  *************");
// }
// })
console.log("************* 6  *************");