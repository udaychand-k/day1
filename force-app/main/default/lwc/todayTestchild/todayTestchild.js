import { LightningElement,api } from 'lwc';
export default class TodayTestchild extends LightningElement {
    @api surname;

    handleClick(){
        let e = new CustomEvent('testevent',{detail:{a:1}});
        this.dispathcEvent(e);
    }

}