import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import {  getRecordNotifyChange } from 'lightning/uiRecordApi';
import updateAckLetter from '@salesforce/apex/ActivateAckLetterAgrement.updateAckLetter';


export default class ActivateAckLetterAgrement extends LightningElement {
    @api recordId;
    isShowModal=false;
    @api 
    async invoke () { 
        updateAckLetter({recordId: this.recordId})
        .then(res=>{
            if(res.code==200){
                //this.isShowModal=true;
                        console.log('jelp')

                this.showToast('Success','Signature Control is successfully activated for this client.','success');
            }
            else{
                this.showToast('Error',res.message,'error');
            }
            getRecordNotifyChange([{recordId : this.recordId}]);
        }).catch(e=>{
            this.showToast('Error','Error occoured while updating record','error');
        });
    } 
    // hideModalBox() {  
    //     this.isShowModal = false;
    //     getRecordNotifyChange([{recordId : this.recordId}]);
    // }
    showToast(title,message,variant){
        this.dispatchEvent(
            new ShowToastEvent({
                title: title,
                message: message,
                variant: variant
            })
        );
    }


}