trigger x on Student__c (before insert) 
{
    
    if(Trigger.isInsert && Trigger.isBefore)
    {
        system.debug('*****************************');
        for(Student__c s:Trigger.new)
        {
            system.debug(s.Name);
        }
	}

}