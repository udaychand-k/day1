public Without Sharing class  AgreementFacilityService {
    @AuraEnabled
    public static List<Facility__c> fetchFacilities(){
        List<Facility__c> facilityList = new List<Facility__c>();
        facilityList = [Select Id, Name, Facility_Name__c, Accreditation__c ,State__c, City__c ,Chain_Code__c, Active__c From Facility__c LIMIT 49999];
        return facilityList;
    }
     @AuraEnabled
    public static void saveFacilitiesMapping_V1(String agrId, List<String> selListOfFacilities, List<String> listOfOldFecilities){
        Map<String, boolean> fec_Status = new Map<String, boolean>();
        List<String> listOfFacilities = new List<String>();
        system.debug('agrId--->'+agrId);
        system.debug('selListOfFacilities--->'+selListOfFacilities);
        system.debug('listOfOldFecilities--->'+listOfOldFecilities);
        Set<String> setOfIds = new Set<String>();
        if(selListOfFacilities.size()>0)
        setOfIds.addAll(selListOfFacilities);
        system.debug('setOfIds--->'+setOfIds);        
        if(setOfIds.size()>0)
        listOfFacilities = new List<String>(setOfIds);
        system.debug('listOfFacilities--->'+listOfFacilities);
        List<String> newInsertListOfFecIds = new List<String>();
        for(Integer i=0; i<listOfFacilities.size();i++){
            Integer result = listOfOldFecilities.indexOf(listOfFacilities[i]);
            if(result == -1){
                newInsertListOfFecIds.add(listOfFacilities[i]);
            }
        }
        system.debug('newInsertListOfFecIds--->'+newInsertListOfFecIds);
        for(Facility__c fec:[Select Id, Name,Accreditation__c,State__c,Chain_Code__c,Active__c From Facility__c where Id IN: listOfFacilities]){
           fec_Status.put(fec.Id, fec.Active__c); 
        }
        List<String> deleteListOfFecIds = new List<String>();
        for(Integer j=0; j<listOfOldFecilities.size();j++){
            Integer result = listOfFacilities.indexOf(listOfOldFecilities[j]);
            if(result == -1){
                deleteListOfFecIds.add(listOfOldFecilities[j]); 
            }
        }
        system.debug('deleteListOfFecIds--->'+deleteListOfFecIds);
        if(deleteListOfFecIds.size()>0){
           delete [SELECT ID FROM Agreement_Facilities__c WHERE Agreement__c =:agrId AND Facility__c IN:deleteListOfFecIds]; 
        }
        
        List<Agreement_Facilities__c> newAgrFacList = new List<Agreement_Facilities__c>();
        for(String str:newInsertListOfFecIds){
            Agreement_Facilities__c obj = new Agreement_Facilities__c();
            obj.Agreement__c=agrId;
            obj.Facility__c =str;
          	obj.Active__c =fec_Status.get(str);
            newAgrFacList.add(obj);
        }
        if(newAgrFacList.size()>0)
        insert newAgrFacList;
    }
    
    @AuraEnabled
    public static List<String> fetchFacilitiesMapping(String agrId){
        List<String> listOfFecilityIds = new List<String>();
        for(Agreement_Facilities__c agrF :[Select Id,Facility__c FROM Agreement_Facilities__c WHERE Agreement__c =:agrId]){
           listOfFecilityIds.add(agrF.Facility__c); 
        }
        return listOfFecilityIds;
    }
}