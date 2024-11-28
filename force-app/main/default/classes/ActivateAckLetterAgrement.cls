public without sharing class ActivateAckLetterAgrement {
    
    @AuraEnabled
    public static ReturnVal updateAckLetter(String recordId) {
        //boolean retVal=true;
        ReturnVal retVal = new ReturnVal();
        retVal.code=200;
        retVal.message='Success';
        try{
            Agreement__c agrmnt = new Agreement__c();
            agrmnt.Id = recordId;
            agrmnt.Status_Category__c = 'In Effect';
            agrmnt.Status__c = 'Activated';
            update agrmnt;
        }
        catch(Exception ex){
            retVal.code=500;
            retVal.message=ex.getMessage();
        }
        return retVal;
    }
    public class ReturnVal{
        @AuraEnabled
        public String message {get;set;}
        @AuraEnabled
        public Integer code{get;set;}
    } 
}