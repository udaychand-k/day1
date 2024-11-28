public class StudentController2 {
    
     public StudentController2()
    {
        stuObj=new Student__c();
    }
    
     public Student__c stuObj{
        get;
        set;
    }
     public static String looker{
        get;
        set;
	}
/*
    public static String looker;
    @AuraEnabled
    public static String getLooker(){return looker;}
    @AuraEnabled
    public static void setLookerrrr(String x){StudentController2.looker=x;}*/
    
   
     public static List<Student__c> searchedStudentList{
        get;
        set;
    }
   public static String changeId{
        get;
        set;
    }
    
    
    public  void createStudent()
    {
       
        try
        {
            system.debug(this.stuObj);
            upsert this.stuObj;
        }
        catch(DmlException e)
        {
            System.debug(e.getMessage());
        }
        finally{
            if(this.stuObj.Id!=null)
            apexpages.addMessage(new ApexPages.Message(ApexPages.Severity.INFO,'Record Created Successfully :)'));
            else
            apexpages.addMessage(new ApexPages.Message(ApexPages.Severity.INFO,'Record Creation Failed!!!'));
        }
    }
    
    public  List<selectOption> getDeptNames(){
        List<selectOption> l = new List<selectOption>();
        
        List<Department__c> pickListValues = [select Name from Department__c ];
  
        for(Department__c o: pickListValues)
        {
            String h = o.Id;
            l.add( new SelectOption(h,o.Name));
        }
        
        return l;
    }
   
    @AuraEnabled
    public static List<Student__c> getstudentListss()
    {
        List<Student__c> l = [SELECT  Name ,X12th_class_percentage__c, X10th_class_percentage__c, Mobile_Number__c, Mother_Name__c, Father_Name__c, date_of_joining__c, Department__c, EMAIL_ID__c, Interests__c, COURSE_TYPE__c, portfolio__c, No_Of_Documents_Submitting__c, cgpa__c FROM Student__c];
        return l;
    }
    
    public void change()
    {
        //system.debug('heeeeeeeeeeee'+changeId);
        this.stuObj = [SELECT  Name ,X12th_class_percentage__c, X10th_class_percentage__c, Mobile_Number__c, Mother_Name__c, Father_Name__c, date_of_joining__c, Department__c, EMAIL_ID__c, Interests__c, COURSE_TYPE__c, portfolio__c, No_Of_Documents_Submitting__c, cgpa__c FROM Student__c where Id=:changeId];
        //system.debug(this.stuObj);
    }
    public  void change2()
    {
        system.debug('heeeeeeeeeeee'+changeId);
        this.stuObj = [SELECT  Name ,X12th_class_percentage__c, X10th_class_percentage__c, Mobile_Number__c, Mother_Name__c, Father_Name__c, date_of_joining__c, Department__c, EMAIL_ID__c, Interests__c, COURSE_TYPE__c, portfolio__c, No_Of_Documents_Submitting__c, cgpa__c FROM Student__c where Id=:changeId];
        delete this.stuObj;
        apexpages.addMessage(new ApexPages.Message(ApexPages.Severity.INFO,'Record Deleted Successfully :('));
    }
    
   @AuraEnabled
   public static void getsearchStudentList()
    {
	
        //List<List<sObject>> soslObjects = [FIND :looker IN Name FIELDS  Returning Student__c(Name,EMAIL_ID__c,Mobile_Number__c) ];
        //system.debug(soslObjects);
       
        searchedStudentList = (List<Student__c>)[FIND :looker IN NAME FIELDS  RETURNING Student__c(Name,EMAIL_ID__c,Mobile_Number__c) ][0];
        //if(searchedStudentList.size()==0)
            //apexpages.addMessage(new ApexPages.Message(ApexPages.Severity.INFO,'No Records Found :('));
        //system.debug(soslObjects);
        //searchedStudentList = new mySoslTest(looker).getsearchStudentList();
        
        //searchedStudentList = (List<Student__c>) soslObjects[0];
       // return searchedStudentList;
        
    }
}