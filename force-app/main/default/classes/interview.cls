public class interview {
    public static Map<String,String> d;
	public static void r()
    {
        
        schema.DescribeFieldResult r = Student__c.Department__c.getDescribe();
        if(schema.DisplayType.PICKLIST==r.getType())
        {
            system.debug('***********************************************');
            List<schema.PicklistEntry> plv = r.getPicklistValues();
            
            for(schema.PicklistEntry p : plv)
            {
                d.put(p.getLabel(), p.getValue());
			}
        }
        system.debug(d);
    }
}