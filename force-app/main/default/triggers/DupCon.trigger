trigger DupCon on Contact (before insert, before update) {
    

    if(Trigger.isInsert && Trigger.isBefore){
        for( Contact con : Trigger.new)
         {
                con.session_2__c=con.Session_1__c;
         }
    
    }
    
    set<String> EmailIds = new set <String> ();

    for( Contact con : Trigger.new)
    {
        emailIds.add(Con.Email);
    }
    
    List<Contact> listCon = [SELECT Id, Name, Email FROM Contact WHERE Email in :emailIds];

    set<String> existingEmail = new set<string> ();

    for( Contact con: listCon)
    {
     existingEmail.add(Con.Email);

    }
   for( Contact con: Trigger.new){
    if(existingEmail.Contains(con.Email))

    {
        con.AddError('Duplicate contact found, Please use another email id');
    }
}
}