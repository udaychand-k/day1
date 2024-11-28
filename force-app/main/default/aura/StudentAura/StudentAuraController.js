({
    notify:function(component, event, helper){
        alert("Record Saved Successfully :)");

    }
    
    ,editData:function(component, event, helper){
        var pk = document.getElementById("btn").value;
         component.set("v.rid",pk);
         component.set("v.editFor",true);
         var a= component.get("c.editStudent");
        a.setParams({'id':pk});
        $A.enqueueAction(a);
    },
     deleteData:function(component, event, helper){
         
         
        var pk = document.getElementById("btn").value;
         
        var a= component.get("c.deleteStudent");
        a.setParams({'id':pk});
        $A.enqueueAction(a);
        alert("Record Deleted Successfully :(");
         
     },
    
	getStudentData : function(component, event, helper) {
        
        
        var a= component.get("c.getstudentListss");
        a.setCallback(this,function(resp){
            var state =resp.getState();
            if(state ==="SUCCESS")
            {
                component.set("v.asked",true);
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
		
	},
    searchNames:function(component, event, helper){
         
    var valueToBeSearched = component.find("s").get("v.value");
         
    var a = component.get("c.getsearchStudentList");
    a.setParams({'x':valueToBeSearched});
    a.setCallback(this,function(resp){
         var state =resp.getState();
            if(state ==="SUCCESS")
            {
                component.set("v.asked",true);
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