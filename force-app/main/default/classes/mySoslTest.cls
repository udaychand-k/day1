public class mySoslTest {
   
    public static string looker;
    public mySoslTest(String v)
    {
        looker=v;
	}
    public static void getsearchStudentList()
    {
       
        List<List<sObject>> soslObjects = [FIND :looker IN Name FIELDS  Returning Student__c(Name,EMAIL_ID__c,Mobile_Number__c) ];
        system.debug(soslObjects);
       
        
    }

}