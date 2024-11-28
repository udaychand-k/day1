({
	fetch : function(component, event, helper) {
        var valueToBeSearched = component.find("s").get("v.value");
         
        alert(valueToBeSearched);
    var a = component.get("c.getsearchStudentList");
    a.setParams({'x':valueToBeSearched});
    a.setCallback(this,function(resp){
         var state =resp.getState();
            if(state ==="SUCCESS")
            {
                component.set("v.myList",resp.getReturnValue());
            }
            else if (state === "ERROR") {
                console.log('Problem saving contact, response state: ' + state);
            }
            else {
                console.log('Unknown problem, response state: ' + state);
            }
    });   
    $A.enqueueAction(a);
	}
    
    ,

    sortByAnnualRevenue : function(component, event, helper)
    {
    
     var x='AnnualRevenue';
    var a = component.get("c.ss");
   
    a.setParams({'h':x});
    a.setCallback(this,function(resp){
         var state =resp.getState();
            if(state ==="SUCCESS")
            {
           
                component.set("v.myList",resp.getReturnValue());
            }
            else if (state === "ERROR") {
                console.log('Problem saving contact, response state: ' + state);
            }
            else {
                console.log('Unknown problem, response state: ' + state);
            }
    });   
    $A.enqueueAction(a);
   
    
}
 
})