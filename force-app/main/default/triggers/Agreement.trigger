trigger Agreement on Agreement__c (before insert, after insert,before update) {
    
    if(Trigger.isBefore &&(Trigger.isInsert || Trigger.isUpdate)){
       AgreementHandler agreementHandler = new AgreementHandler();
       //agreementHandler.beforeUpdate(Trigger.oldMap,Trigger.newMap);
         System.debug('trrigger');
    }

}