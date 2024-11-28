@isTest
public class TestRestrictContactByName {
    static testmethod void myan(){
       List<Contact> l =new  List<Contact>();
       Contact x = new Contact(FirstName='e',LastName='x',email='est@test.com');
       Contact y= new Contact(FirstName='f',LastName='INVALIDNAME',email='test@test.com');
        l.add(x);
        l.add(y);
        insert l;
    }
    
}