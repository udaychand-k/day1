({
    updateColumnSorting: function (cmp, event, helper) {
        var fieldName = event.getParam('fieldName');
        var sortDirection = event.getParam('sortDirection');
        cmp.set("v.sortedBy", fieldName);
        cmp.set("v.sortedDirection", sortDirection);
        helper.sortData(cmp, fieldName, sortDirection);
    }
    ,
   fetchAcc : function(component, event, helper) {
       component.set('v.mycolumns', [
           {label: 'Account Name', fieldName: 'Name', type: 'text',sortable:"true"},
           {label: 'AccountRevenue', fieldName: 'AnnualRevenue', type: 'text',sortable:"true"},
           {label: 'Phone', fieldName: 'Phone', type: 'Phone',sortable:"true"},
           {label: 'Website', fieldName: 'Website', type: 'url ',sortable:"true"}
            ]);
        var valueToBeSearched = component.find("s").get("v.value");
       alert(valueToBeSearched);
        var action = component.get("c.getsearchStudentList");
    action.setParams({'x':valueToBeSearched});
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.acctList", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    } 
    ,
    
   openModel: function(component, event, helper) {
      component.set("v.isModalOpen", true);
   },
  
   closeModel: function(component, event, helper) {
      // Set isModalOpen attribute to false  
      component.set("v.isModalOpen", false);
   },
  
   submitDetails: function(component, event, helper) {
      // Set isModalOpen attribute to false
      //Add your code to call apex method or do some processing
      component.set("v.isModalOpen", false);
   },
})