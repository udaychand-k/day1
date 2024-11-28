public class PaginationAccounts {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        List<Account> accounts = [SELECT Id,Name from Account];
        return accounts;
    }
}