public class ExecutionFlow {
	
    @AuraEnabled(cacheable=true)
    public static List<Account> getMyAccounts(){
        return [select Id, Name from Account limit 5];
    }
    
    @AuraEnabled(cacheable=true)
    public static Account getMyAccount(String recId){
        return [select Id, Name from Account where id= : recId][0];
    }
}