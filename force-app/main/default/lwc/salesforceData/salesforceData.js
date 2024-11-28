import { LightningElement } from 'lwc';
import name from '@salesforce/schema/Account.Name';
import type from '@salesforce/schema/Account.Type';
import rating from '@salesforce/schema/Account.Rating';
export default class SalesforceData extends LightningElement {

    fields=[name, type, rating];


}