import { LightningElement } from 'lwc';

export default class DayOne extends LightningElement {
    username = 'Udaychand';
    handleChange(event) {
        this.username = event.target.value;
    }
}