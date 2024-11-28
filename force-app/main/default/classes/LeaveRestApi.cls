@RestResource(urlMapping='/leave/*')
global class LeaveRestApi {
	@HttpGet
    global static Leave__c getLeave(){
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        ID  leaveId = req.requestUri.substring(req.requestUri.lastIndexOf('/')+1);
        
        leave__c l = [select Name from Leave__c where id=:leaveId];
        return l;
        
    }
    @HttpPost
    global static id postLeave(String s){
        leave__c leave = new leave__c();
        leave.name=s;
        insert leave;
        return leave.id;
    }
    public static void patchLeave(){
        
    }
    public static void putLeave(){
        
    }
    public static void deleteLeave(){
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        ID  leaveId = req.requestUri.substring(req.requestUri.lastIndexOf('/')+1);
        
        leave__c l = [select Name from Leave__c where id=:leaveId];
        delete l;
        
    }
}