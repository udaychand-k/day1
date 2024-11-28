public class dd {
	  public static void msg()
     {
         List<Student__c> s = [select name,department__r.name from student__c];
         system.debug('helloo myan @@@@@@@@@@@@@'+s);
         system.debug(s);
         for(Student__c k : s)
         system.debug(k);
     }

}