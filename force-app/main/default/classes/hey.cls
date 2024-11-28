public class hey {
	  public static void msg()
     {
         List<Student__c> s = [select Id,name from student__c];
         system.debug('helloo myan ****bbbbbbbbbbbbbbbb***'+s);
         system.debug(s);
         for(Student__c k: s)
         system.debug(k);
         /*for(Student__c k : s){
             system.debug('name='+k.Name);
             //system.debug('Department='+k.Owner.name);
         }*/
     }
}