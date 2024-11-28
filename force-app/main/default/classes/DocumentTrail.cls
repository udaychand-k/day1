public class DocumentTrail {
    
    @AuraEnabled(cacheable=true)
    public static List<ContentDocumentLink> getDocument(Id recordId){
    Id recordIds = recordId;
    List<ContentDocumentLink> cdl = [Select LinkedEntityId, ContentDocumentId, ContentDocument.Title, ContentDocument.FileType From ContentDocumentLink where  ContentDocument.Title LIKE '%FE' and  LinkedEntityId =:recordIds];
    
    
    for(ContentDocumentLink item : cdl)
    {
        System.debug(item.ContentDocument.FileType+' '+item.LinkedEntityId+' '+ContentDocument.Title+' '+ item.ContentDocument.Title+ ' '+item.ContentDocumentId);
    }
        return cdl;
    }
    
    @AuraEnabled(cacheable=true)
    public static String getUrl(){
        System.debug(URL.getSalesforceBaseUrl());
        System.debug(URL.getOrgDomainUrl());
        
        System.debug(URL.getSalesforceBaseUrl().toExternalForm());
       return (URL.getOrgDomainUrl().toExternalForm());
    }
}