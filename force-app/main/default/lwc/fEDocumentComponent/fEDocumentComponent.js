import { LightningElement,track,api } from 'lwc';
import { wire } from 'lwc';
import getDocumentRef from '@salesforce/apex/DocumentTrail.getDocument';
import getOrgDomainUrlRef from '@salesforce/apex/DocumentTrail.getUrl';s
export default class FEDocumentComponent extends LightningElement {
    @api recordId;
    baseUrl;
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
        } else if (error) {
            this.error = error;
        }
    }

    
    @wire(getDocumentRef,{recordId:'$recordId'})
    response({error,data}) {
        if (data) {
            this.data=data;
           /* l= data;
            
              arr=[];
        
               for(var i =0 ;i<l.length;i++)
             {
             	var r = l[i];
   		 
             
             fullUrl = baseUrl+"/"+r.ContentDocumentId ;

              r.ContentDocumentId=fullUrl;
                 
                 
                 
              var doctype=r.ContentDocument.FileType.toLowerCase();
              switch(doctype)
                 {
                     case 'text':doctype='txt';
                         break;
                     case 'word_x':doctype='word';
                         break;
                     case 'pptx' : doctype='ppt';
                         break;
                     case 'jpg':doctype='image';
                         break;
                     case 'png':doctype='image';
                         break;
				}

              var z= "doctype:"+doctype;
              r["dynamicIcon"]=z;
                
             


        		arr.push(r);
            }
            this.data=arr;*/
        } else if (error) {
            this.error = error;
        }
    }
    handleClick(event){
        
    }

}