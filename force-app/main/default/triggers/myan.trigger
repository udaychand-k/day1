trigger myan on Student__c (before insert) {
    if(trigger.isBefore && trigger.isInsert)
    {
        system.debug(trigger.new);
        for(Student__c s : trigger.new)
        {
            system.debug(s);
        }
	}

}