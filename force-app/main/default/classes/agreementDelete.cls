public class agreementDelete {

    public static void del(){
        list<Agreement__c> x =[select Id from Agreement__c];
        delete x;
    }
}