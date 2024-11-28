public class PrePopulateAndValidationTriggerHandler {
    
    public static void r(List<Student__c> x)
    {
        for(Student__c f : x)
        {
            if(f.Department__c==null)
            f.addError('Department Name shouldn\'t be empty');
                
            if(f.portfolio__c == null)
            f.portfolio__c=f.EMAIL_ID__c;
            
            if(f.Father_Name__c == null)
            f.Father_Name__c.addError(Label.fatherNameLabel);
        }
        
    }
    

}