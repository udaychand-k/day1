import { LightningElement,track,api } from 'lwc';
import { wire } from 'lwc';
import getDocumentRef from '@salesforce/apex/DocumentTrail.getDocument';
import getOrgDomainUrlRef from '@salesforce/apex/DocumentTrail.getUrl';
export default class Fed extends LightningElement {

    @api recordId;
    baseUrl;
    fullUrl;
    arr=[];
    data=[];
    @track columns = [
             
        { label: "Document  id", type: "url" ,
         cellAttributes: { iconName: { fieldName: 'dynamicIcon' },iconLabel: { fieldName: 'ContentDocumentId' }}
        }
     , 
        { label: "Document record",fieldName: "LinkedEntityId", type: "Id" }, 
   
    { label: "Document Name",fieldName: "ContentDocument.Title", type: "text" }, 

    ];
    
    @wire(getOrgDomainUrlRef)
    resp({
        error,
        data
    }) {
        if (data) {
            this.baseUrl = data;
            console.log(this.baseUrl);
        } else if (error) {
            this.error = error;
        }
    }
    
    @wire(getDocumentRef,{recordId:'$recordId'})
    response({error,data}) {
        if (data) {
            console.log('jjjjj');
            this.data=data;
            console.log('hhhhhhhhhhhhhhhhh');
            console.log(data);
        } else if (error) {
            this.error = error;
        }
    }
}