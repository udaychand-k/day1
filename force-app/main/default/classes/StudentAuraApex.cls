public class StudentAuraApex {
        
    @AuraEnabled
    public static List<Student__c> getstudentList()
    {
        List<Student__c> l = [SELECT  Name ,X12th_class_percentage__c, X10th_class_percentage__c, Mobile_Number__c, Mother_Name__c, Father_Name__c, date_of_joining__c, Department__c, EMAIL_ID__c, Interests__c, COURSE_TYPE__c, portfolio__c, No_Of_Documents_Submitting__c, cgpa__c FROM Student__c];
        return l;
    }

}