public class AgreementHandler {
    
    public  void formulaTest(List<Agreement__c> agreementList)
    {
   		Agreement__c agreement1;
        for(Agreement__c agreement :agreementList ){
        agreement.MyPriorityString__c = agreement.MyPriorityString__c +' T';
            agreement1=agreement;
        }
        Database.update(agreement1);
        
    }
    public void beforeUpdate(Map<Id, Agreement__c> oldMap,Map<Id, Agreement__c> newMap){
        
       System.debug(oldMap);
       system.debug(newMap);
       System.debug('oldMap');
       List<Agreement__c> oldAgreements = oldMap.values();
       List<Agreement__c> newAgreements = newMap.values();
        for(Agreement__c a : oldAgreements){
            system.debug(a.renewal__c);
       system.debug(a.contract_TAT_language__c);
        }
        for(Agreement__c a : newAgreements){
         system.debug(a.renewal__c);
       system.debug(a.contract_TAT_language__c);
        }
    }

}