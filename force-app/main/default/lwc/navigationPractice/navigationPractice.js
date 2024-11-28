import { LightningElement } from 'lwc';
import { NavigationMixin} from 'lightning/navigation';
export default class NavigationPractice extends NavigationMixin(LightningElement) {
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