public class AgreementTermAndRenewBatchSchedule implements System.Schedulable {
	
    public void execute( System.SchedulableContext sc)
    {
        AgreementTermAndRenewBatch batchableInstance = new AgreementTermAndRenewBatch();
        Database.executeBatch(batchableInstance);
	}
}