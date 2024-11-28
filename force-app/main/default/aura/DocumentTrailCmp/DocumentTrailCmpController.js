({
	myAction : function(component, event, helper) {
        
         var columns = [
             
                { label: "Document  id", type: "url" ,
                 cellAttributes: { iconName: { fieldName: 'dynamicIcon' },iconLabel: { fieldName: 'ContentDocumentId' }}
                }
             , 
		 { label: "Document record",fieldName: "LinkedEntityId", type: "Id" }, 
           
        { label: "Document Name",fieldName: "ContentDocument.Title", type: "text" }, 
       
       
       

    ];
             var fullUrl;
              var baseUrl;
             var url = component.get("c.getUrl");
            url.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
       			  console.log('cccc');
            
              baseUrl = response.getReturnValue();
             console.log('ddddd');
             console.log(baseUrl);
             
            }
                    
                });
                 
              $A.enqueueAction(url);
             
             
             
             
        component.set("v.columns",columns);
      
         var a = component.get("c.getDocument");
          
        
         a.setParams({ recordId : component.get("v.recordId") });
      
        	a.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
       
            
              var l = response.getReturnValue();
             

              var arr=[];
        
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
                
			  console.log(z);
             


        		arr.push(r);
                 
             }
     
			   component.set("v.documents",arr);
            }
             else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } 
            }
 }
            );
                
            $A.enqueueAction(a);
	},
        
})