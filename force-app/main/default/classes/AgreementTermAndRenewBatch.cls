public class AgreementTermAndRenewBatch implements Database.Batchable<sObject>{
	
    public Database.QueryLocator start(Database.BatchableContext bc)
    {
        String query = 'SELECT Id, Name,renewal__c,nextRenewalDate__c,Agreement_End_Date__c FROM Agreement__c Where nextRenewalDate__c = TODAY';
        return Database.getQueryLocator(query);
    }
    
    public void execute(Database.BatchableContext bc, List<Agreement__c> agreementList)
    {
        List<Agreement__c> AgreementsToUpdate = new List<Agreement__c>();
          for(Agreement__c agreement : agreementList)
        {	
            if(agreement.renewal__c!=0 && agreement.Agreement_End_Date__c==null)
            {
                System.debug(agreement.renewal__c);
            	agreement.nextRenewalDate__c=agreement.nextRenewalDate__c.addMonths((Integer)agreement.renewal__c);
                System.debug(agreement.nextRenewalDate__c);
                
            }
            else{
                agreement.nextRenewalDate__c=null;
                agreement.Agreement_End_Date__c=null;
            }
             System.debug(agreement.nextRenewalDate__c);
            
            AgreementsToUpdate.add(agreement);
		}
        update AgreementsToUpdate;
    }
    
    public void finish(Database.BatchableContext bc)
    {
        System.debug('Successfully Completed Batch');
    }
}