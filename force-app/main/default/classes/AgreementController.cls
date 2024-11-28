public class AgreementController {
    public String relatedToData {get;set;}
    
    public  static list<Agreement__c> getAgreement(){
      
        list<Agreement__c> agr=  [select  id, Name,Approval_time_stamp__c from Agreement__c order by CreatedDate DESC LiMIT 2 ];
        for(Agreement__c a: agr){
            a.Name=a.Name+'Testing in DEV';
            
            TimeZone currentUserTimeZone = UserInfo.getTimeZone();
            System.debug(UserInfo.getTimeZone().toString());
			System.debug(DateTime.now());
            System.debug(a.Approval_time_stamp__c);
            System.debug(currentUserTimeZone.getOffset(a.Approval_time_stamp__c));
            System.debug((currentUserTimeZone.getOffset(a.Approval_time_stamp__c)/1000));
            system.debug(a.Approval_time_stamp__c.addSeconds(currentUserTimeZone.getOffset(a.Approval_time_stamp__c)/1000));
            String uid = UserInfo.getTimeZone().getId();
            System.debug(a.Approval_time_stamp__c.addSeconds(currentUserTimeZone.getOffset(a.Approval_time_stamp__c)/1000).format('MMMM d, yyyy hh:mm a',uid));
			System.debug('************');
            DateTime dt = a.Approval_time_stamp__c;//a.Approval_time_stamp__c.addSeconds(currentUserTimeZone.getOffset(a.Approval_time_stamp__c)/1000);
            System.debug(dt);
            System.debug(dt.format('yyyy-MM-dd hh:mm a',uid));
            String ct = dt.format('yyyy-MM-dd hh:mm a',uid);
            System.debug(ct);
        a.Approval_time_stamp__c=a.Approval_time_stamp__c.addSeconds(currentUserTimeZone.getOffset(a.Approval_time_stamp__c)/1000);
           
        }
        return agr;
        
        
    }
    

}