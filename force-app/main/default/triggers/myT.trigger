trigger myT on Student__c (before insert, after insert) {
    
	if(Trigger.isBefore && Trigger.isInsert)
    {
        PrePopulateAndValidationTriggerHandler.r(Trigger.new);
    }
}