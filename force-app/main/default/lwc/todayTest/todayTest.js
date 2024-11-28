import { LightningElement } from 'lwc';
export default class TodayTest extends LightningElement {
    name;
    lastname="Kuppala"
    array=[1,2,3,]
    age;
    constructor(){
        super();
        this.name="Udaychand";

    }
    handleChild(ev){
        this.age=ev.detail.a;
        console.log('-----------------------------------------------');
         console.log(this.age);
        console.log('-----------------------------------------------');

    }
    handleClick(){
        this.name=this.name?'':'Udaychand';

    }
    connectedCallback() {
       console.log('I am connected');
    }

    renderedCallback(){
        console.log('I am rendered');
    }


}