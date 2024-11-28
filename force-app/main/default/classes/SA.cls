public class SA {
   @AuraEnabled
   public static List<Account>  getsearchStudentList(String x)
    {
       
        system.debug(x);
       List<Account > searchedStudentList = (List<Account>)[FIND :x IN NAME FIELDS  RETURNING Account(Id, Name,AnnualRevenue, BillingState, 
                                    Website, Phone, Industry, Type) ][0];

        return searchedStudentList;
        
    }
  
}