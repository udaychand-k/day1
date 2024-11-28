public class AgreementRenewBatch implements Database.Batchable<sObject> {
    
     public Database.QueryLocator start(Database.BatchableContext BC) {
         
        String query = 'SELECT Id, Name,renewal__c,nextRenewalDate__c FROM Agreement__c Where nextRenewalDate__c = TODAY';
        return Database.getQueryLocator(query);
    }
    public void execute(Database.BatchableContext bc, List<Agreement__c> agreementList){}
    
	public void finish(Database.BatchableContext BC) {
       System.debug('Successfully completed Batch');
    }
}