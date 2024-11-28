public class myclass2 {
    public static void getStudentDetails(){
        List<Student__c> s = [ SELECT LastModifiedBy.Name from Student__c ];
        System.debug(s);
    }
    
}