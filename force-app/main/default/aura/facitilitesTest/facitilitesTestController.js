({
    doInit: function (component, event, helper) {
        // Set the columns of the Table 
        component.set('v.columns', [
            {label: 'Facility ID', fieldName: 'Name', type: 'text'},
            {label: 'Chain Code', fieldName: 'Chain_Code__c', type: 'text'},
            {label: 'City', fieldName: 'City__c', type: 'text'},
            {label: 'State', fieldName: 'State__c', type: 'text'},
            {label: 'Accreditation', fieldName: 'Accreditation__c', type: 'text'},
            {label: 'Active', fieldName: 'Active__c', type: 'boolean'}
        ]);
        helper.doFetchExistingMapping(component);
        helper.doFetchFacilities(component);
    },
    getSelectedName: function (component, event, helper) {
         
        //alert('event 1---->'+JSON.stringify(event));    
       	if ($A.util.isEmpty(component.get("v.searchCity")) && $A.util.isEmpty(component.get("v.searchState")) && $A.util.isEmpty(component.get("v.searchChain"))){
            console.log('no search creitiea - invoked getSelectedName');
            var tempFilteredId = component.get("v.tempFilteredId");
            var result = event.getParam("selectedRows");
            //alert('result 1---->'+JSON.stringify(result));
            var arrayValues = [];
            //alert('done');
            for(var i=0; i < result.length; i++){
                    arrayValues.push(result[i].Id); 
            }
        	//alert('no search - arrayValues---->'+JSON.stringify(arrayValues));
           component.set("v.tempSelectedIds", arrayValues);
        }else{
            var tempFilteredId = component.get("v.tempFilteredId");
            console.log('with search creitiea - invoked getSelectedName');
           //var value = event.getParam('value');
            //alert('value*----->'+JSON.stringify(event));
        	var arrayValues = component.get("v.tempSelectedIds");
    		var result = event.getParam("selectedRows");
    		for(var i=0; i < result.length; i++){
             if (arrayValues.indexOf(result[i].Id) === -1) 
                 arrayValues.push(result[i].Id); 
            }
			component.set("v.tempSelectedIds", arrayValues);
            console.log('arrayValues 1 *---->'+JSON.stringify(arrayValues));
            
            var prevSelectedIdsInCurrScreen = [];
            var bselectedRows = component.get("v.previousScreenSelData");
            for(var i=0; i < bselectedRows.length; i++){
             if (prevSelectedIdsInCurrScreen.indexOf(bselectedRows[i].Id) === -1) 
                 prevSelectedIdsInCurrScreen.push(bselectedRows[i].Id);
            }
            console.log('prevSelectedIdsInCurrScreen *---->'+JSON.stringify(prevSelectedIdsInCurrScreen));
 			
            var finalSelectedIdsInCurrScreen = [];
            var dTable = component.find("accountTable");
        	var selectedRows = dTable.getSelectedRows();
            for(var i=0; i < selectedRows.length; i++){
             if (finalSelectedIdsInCurrScreen.indexOf(selectedRows[i].Id) === -1) 
                 finalSelectedIdsInCurrScreen.push(selectedRows[i].Id);  
            }
            console.log('finalSelectedIdsInCurrScreen *---->'+JSON.stringify(finalSelectedIdsInCurrScreen));
            var removedIds = prevSelectedIdsInCurrScreen.filter(n => !finalSelectedIdsInCurrScreen.includes(n));
            
            //console.log('arrayValues 2 *---->'+JSON.stringify(arrayValues));
           
            console.log('removed Ids*-->'+removedIds);
            console.log('tempFilteredId---->'+JSON.stringify(tempFilteredId));
            for(var k=0; k < removedIds.length; k++){
            
            console.log('removedIds[k]--->'+JSON.stringify(removedIds[k]));
            debugger;
            
            if(tempFilteredId && tempFilteredId.length>0 && !tempFilteredId.includes(removedIds[k]))
            {
                removedIds.splice(k,1);
                console.log('Test');
            }
            }
            console.log('removed Ids after Splice*-->'+removedIds);
            if(removedIds.length>0){
               var finalIds = arrayValues.filter(m => !removedIds.includes(m));
               console.log('finalIds*-->'+finalIds);
               component.set("v.tempSelectedIds", finalIds);
                
            }
    	}
    },
    next: function (component, event, helper) {
        helper.next(component, event);
    },
    previous: function (component, event, helper) {
        helper.previous(component, event);
    },
    saveMapping: function (component, event, helper) {
        helper.save(component, event);
    },
    handleSearch : function (component, event, helper) {
        helper.searchRecordsBySearchPhrase(component);
    },
    onChangeSearchPhrase : function (component, event, helper) {
        if ($A.util.isEmpty(component.get("v.searchPhrase"))) {
            let allData = component.get("v.allData");
            component.set("v.filteredData", allData);
            helper.preparePagination(component, allData);
        }
    },
    handleSearchCity : function (component, event, helper) {
        helper.searchRecordsBySearchPhraseCity(component);
    },
   	handleSearchState : function (component, event, helper) {
        helper.searchRecordsBySearchPhraseState(component);
    },
    handleSearchChainCode : function (component, event, helper) {
        helper.searchRecordsBySearchPhraseChainCode(component);
    },
    onChangeSearchPhraseCity : function (component, event, helper) {
        //alert('city changed');
        if ($A.util.isEmpty(component.get("v.searchCity"))) {
            component.set("v.endPage",0);
            component.set("v.pageSize",49999);
            let allData = component.get("v.allData");
            component.set("v.filteredData", allData);
            var dTable = component.find("accountTable");
            dTable.set("v.selectedRows", component.get("v.tempSelectedIds"));
            //helper.populateDataTable(component, allData);
            helper.preparePagination(component, allData);
        }
    },
    onChangeSearchPhraseState : function (component, event, helper) {
        //alert('start changed');
        if ($A.util.isEmpty(component.get("v.searchState"))) {
            component.set("v.endPage",0); 
            component.set("v.pageSize",49999);
            let allData = component.get("v.allData");
            component.set("v.filteredData", allData);
            var dTable = component.find("accountTable");
            dTable.set("v.selectedRows", component.get("v.tempSelectedIds"));
            //helper.populateDataTable(component, allData);
            helper.preparePagination(component, allData);
        }
    },
    cancelClick : function (component, event, helper) {
    var urlEvent = $A.get("e.force:navigateToURL");
    var AgreementIdData = component.get("v.rrecordId");
    urlEvent.setParams({
        "url": "/lightning/r/Agreement__c/"+AgreementIdData+"/view"
    });
    urlEvent.fire();
      
},
    
    onChangeSearchPhraseChainCode : function (component, event, helper) {
         //alert('Chain changed');
        if ($A.util.isEmpty(component.get("v.searchChain"))) {
            component.set("v.endPage",0);
            component.set("v.pageSize",49999);
            let allData = component.get("v.allData");
            component.set("v.filteredData", allData);
            var dTable = component.find("accountTable");
            dTable.set("v.selectedRows", component.get("v.tempSelectedIds"));
            //helper.populateDataTable(component, allData);
            helper.preparePagination(component, allData);
        }
    }
})