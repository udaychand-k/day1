public class StudentController {
    /*public static String deptName='';
    public static String studentName='';
    public StudentController(){
     deptName='';
     studentName='';
    }
    
    public Static String getDeptName()
    {
        return deptName;
	}
    public Static void setDeptName(String deptNamer)
    {
        deptName=deptNamer;
	}
    
    public Static String getStudentName()
    {
        return studentName;
	}
    public Static void setStudentName(String studentNamer)
    {
        studentName=studentNamer;
	}
    */
    public static String deptName{
        set;
        get;
    }
    
    public static String studentName{
        set;
        get;
    }
    
    public static String emailId{
        get;
        set;
    }
	
    public static Decimal tenthPercent{
        get;
        set;
    }
    
    
    
    public static void createStudent(){
        
        List<Department__c> deptListObj = [SELEct Id,NAME FROM Department__c where Name=:deptName];
        
    Student__c obj = new Student__c(Name=studentName,EMAIL_ID__c=emailId,Department__c=deptListObj.get(0).Id);
    obj.X10th_class_percentage__c=tenthPercent;
    try{
    insert obj;
    }
    catch(DmlException e){
    system.debug(e.getMessage());
    }
    }
}