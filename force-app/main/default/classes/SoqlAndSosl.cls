public class SoqlAndSosl {
    
    public static void soqlDemo()
    {
        system.debug('*** Hey I am  SOQL ***');
        List<Account> accObjs = [SELECT Name FROM Account ORDER BY Name ASC LIMIT 5 ];
        for(Account a: accObjs)
        {
            System.debug(a.Name);
        }
        
    }
    public Static void soslDemo()
    {
        system.debug('*** Hey I am  SOSL ***');
        
        String myVar='Wingo OR SFDC';
        List<List<sObject>> soslObjects = [FIND :myVar IN ALL FIELDS RETURNING Account(Name),Contact(Name,Phone)];
        Account[] accArr = (Account[]) soslObjects[0];
        Contact[] conArr = (Contact[]) soslObjects[1];
        for(Account accVar : accArr)
        {
            System.debug(accVar.Name);
        }
        for(Contact conVar: conArr)
        {
            System.debug(conVar.Name+'->'+conVar.Phone);
        }
    }

}