import { LightningElement,track,api } from 'lwc';
import { wire } from 'lwc';
import getDocumentRef from '@salesforce/apex/DocumentTrail.getDocument';
import getOrgDomainUrlRef from '@salesforce/apex/DocumentTrail.getUrl';
export default class DuPDoc extends LightningElement {

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
            /*console.log(data);
            console.log(typeof data);

           
            console.log('YYYYYYYYYYYYYYYY');
             
        
               for(var i =0 ;i<data.length;i++)
             {
                console.log('vvvvvvvvvvv');
             	var r = data[i];
   		 
             
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
                
              console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');


        		arr.push(r);
            }*/
            this.data=data;
            console.log('hhhhhhhhhhhhhhhhh');
            console.log(data);
        } else if (error) {
            this.error = error;
        }
    }
    handleClick(event){
        
    }

}