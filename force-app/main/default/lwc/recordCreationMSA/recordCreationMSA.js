import { LightningElement } from 'lwc';
import { NavigationMixin} from 'lightning/navigation';
import MSA_RT from '@salesforce/label/c.MSA_RT_ID';

export default class RecordCreationMSA extends LightningElement {
msa=MSA_RT;

handleNavigateToHome(){
this[NavigationMixin.Navigate]({
    type:"standard__objectPage",
    attributes: {
                objectApiName: 'Agreement__c',
                actionName: 'new'
            },
    state: {
        recordTypeId:'0125h000000Ga3TAAS'
      }

});
}
}