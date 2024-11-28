public class r implements Database.Batchable<sobject>{
    public Database.QueryLocator start(Database.BatchableContext jobId)
    {
        Database.QueryLocator k = Database.getQueryLocator( [select Name from account]);
        return k;
    }
    public void execute(Database.BatchableContext jobjid ,list<sObject> h)
    {
        system.debug('hey' + jobjid);
	}
    
    public void finish(database.BatchableContext jobjjid)
    {
        system.debug('i am done myan');
	}

}