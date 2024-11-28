public class AgreementCreation {
    
    @invocableMethod
    public static List<Agreement__History>  getHistory(list<Id> recordIddd){
        Id recordIdd = recordIddd[0];
        return [SELECT OldValue, NewValue FROM Agreement__History WHERE ParentId = :recordIdd And Field='nextRenewalDate__c'  ORDER BY CreatedDate DESC Limit 1];
    }
    
    
    public static void createAgreement(){
        List<Agreement__c> agreementList = new List<Agreement__c>();
        for(Integer i=1; i<1000;i++)
        {
        	Agreement__c a = new Agreement__c();
            a.Name=' TEst '+ i;
            a.EffectiveDate__c =  System.today();
            a.term_in_months__c = 0;
            a.renewal__c = 12;
            agreementList.add(a);
        }
        insert agreementList;
    }

}