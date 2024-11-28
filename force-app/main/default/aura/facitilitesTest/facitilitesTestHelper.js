({
    doFetchFacilities : function(component) {
        var action = component.get('c.fetchFacilities');
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === 'SUCCESS' && component.isValid()){
                var pageSize = component.get("v.pageSize");
                component.set('v.AccountData', response.getReturnValue());
                component.set('v.allData', response.getReturnValue());
            	component.set('v.filteredData', response.getReturnValue());
                
                // get size of all the records and then hold into an attribute "totalRecords"
                component.set("v.totalRecords", component.get("v.AccountData").length);
                //Set the current Page as 0
                component.set("v.currentPage",0);
                // set star as 0
                component.set("v.startPage",0);
                component.set("v.endPage",pageSize-1);
                var PaginationList = [];
                for(var i=0; i< pageSize; i++){
                    if(component.get("v.AccountData").length> i){
                        PaginationList.push(response.getReturnValue()[i]);
                        
                    }
                }
                component.set('v.PaginationList', PaginationList);
                
                
               
                var dTable = component.find("accountTable");
                dTable.set("v.selectedRows", component.get("v.existFacilityIds"));
                
            }else{
                alert('ERROR');
            }
        });
        $A.enqueueAction(action);
    },
    doFetchExistingMapping : function(component) {
        var action = component.get('c.fetchFacilitiesMapping');
        action.setParams({
            "agrId": component.get("v.recordId")
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === 'SUCCESS' && component.isValid()){
                var selectedRowsIds = [];
                selectedRowsIds = response.getReturnValue();
                component.set("v.tempSelectedIds", selectedRowsIds);
                component.set("v.existFacilityIds", selectedRowsIds);
                
            }else{
                alert('ERROR');
            }
        });
        $A.enqueueAction(action);
    },
    next : function(component, event){
        var current = component.get("v.currentPage");    
        var dTable = component.find("accountTable");
        var selectedRows = dTable.getSelectedRows();
        var pgName = "page" + current;
        component.get("v.SelectedAccount")[pgName] = selectedRows;
        current = current +1;
        pgName = "page" + current;
        var selectedRows = component.get("v.SelectedAccount")[pgName];
        component.set("v.currentPage",current);
        console.log("Next selectedAccount "+JSON.stringify(component.get("v.SelectedAccount")));        
        var sObjectList = component.get("v.AccountData");
        var end = component.get("v.endPage");
        var start = component.get("v.startPage");
        var pageSize = component.get("v.pageSize");
        var Paginationlist = [];
        var counter = 0;
        for(var i=end+1; i<end+pageSize+1; i++){
            if(sObjectList.length > i){
                Paginationlist.push(sObjectList[i]);
            }
            counter ++ ;
        }
        start = start + counter;
        end = end + counter;
        component.set("v.startPage",start);
        component.set("v.endPage",end);
        component.set('v.PaginationList', Paginationlist);
        if (typeof selectedRows != 'undefined' && selectedRows) {
            var selectedRowsIds = [];
            for(var i=0;i<selectedRows.length;i++){
                selectedRowsIds.push(selectedRows[i].Id);  
            }         
            var dTable = component.find("accountTable");
            dTable.set("v.selectedRows", selectedRowsIds); 
        }
    },
    previous : function(component, event){   
        var current = component.get("v.currentPage");
        var dTable = component.find("accountTable");
        var selectedRows = dTable.getSelectedRows();
        var pgName = "page" + current;
        component.get("v.SelectedAccount")[pgName] = selectedRows;
        current = current - 1; 
        pgName = "page" + current;
        var selectedRows = component.get("v.SelectedAccount")[pgName];
        component.set("v.currentPage",current);
        console.log("Prev selectedAccount "+JSON.stringify(component.get("v.SelectedAccount")));        
        var sObjectList = component.get("v.AccountData");
        var end = component.get("v.endPage");
        var start = component.get("v.startPage");
        var pageSize = component.get("v.pageSize");
        var Paginationlist = [];
        var counter = 0;
        for(var i= start-pageSize; i < start ; i++){
            if(i > -1){
                Paginationlist.push(sObjectList[i]);
                counter ++;
            }else{
                start++;
            }
        }
        start = start - counter;
        end = end - counter;
        component.set("v.startPage",start);
        component.set("v.endPage",end);
        component.set('v.PaginationList', Paginationlist);
        if (typeof selectedRows != 'undefined' && selectedRows) {
            var selectedRowsIds = [];
            for(var i=0;i<selectedRows.length;i++){
                selectedRowsIds.push(selectedRows[i].Id);  
            }         
            var dTable = component.find("accountTable");
            dTable.set("v.selectedRows", selectedRowsIds);
        }
    },
    
   
    
    save : function(component, event){
        component.set("v.disableBtn", true);
        var current = component.get("v.currentPage"); 
        var dTable = component.find("accountTable");
        var selectedRows = dTable.getSelectedRows();
        var pgName = "page" + current;
        component.get("v.SelectedAccount")[pgName] = selectedRows;
        var result = component.get("v.SelectedAccount");
        var arrayValues = [];
        for(var key in result){
            result[key].forEach( (value)=>{
              arrayValues.push(value.Id);
            });
        }
       	//alert('arrayValues---->'+JSON.stringify(arrayValues));
        var action = component.get("c.saveFacilitiesMapping_V1");        
        action.setParams({
            "agrId": component.get("v.recordId"),
            "selListOfFacilities" : component.get("v.tempSelectedIds"),
            "listOfOldFecilities" : component.get("v.existFacilityIds")
        });
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            //alert('state ->'+JSON.stringify(state));
            if (state === "SUCCESS") {
                var toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        title : 'success',
                        message: 'Facilities mapping saved successfully!',
                        duration:' 3000',
                        key: 'success',
                        type: 'success',
                        mode: 'pester'
                    });
                    toastEvent.fire();
                $A.get("e.force:closeQuickAction").fire();
                $A.get('e.force:refreshView').fire();
            }
        }); 
        $A.enqueueAction(action);
        //alert("selectedAccount "+JSON.stringify(component.get("v.selectedRows")));
    },
    
    searchRecordsBySearchPhrase : function (component) {
        let searchPhrase = component.get("v.searchPhrase");
        if (!$A.util.isEmpty(searchPhrase)) {
            let allData = component.get("v.PaginationList");
            let filteredData = allData.filter(record => record.Name.includes(searchPhrase));
            component.set("v.filteredData", filteredData);
            this.preparePagination(component, filteredData);
        }
    },
    preparePagination: function (component, records) {
        let countTotalPage = Math.ceil(records.length/component.get("v.pageSize"));
        let totalPage = countTotalPage > 0 ? countTotalPage : 1;
        component.set("v.totalPages", totalPage);
        component.set("v.currentPageNumber", 1);
        this.setPageDataAsPerPagination(component);
    },
    setPageDataAsPerPagination: function(component) {
        let data = [];
        let pageNumber = component.get("v.currentPageNumber");
        let pageSize = component.get("v.pageSize");
        let filteredData = component.get('v.filteredData');
        let x = (pageNumber - 1) * pageSize;
        for (; x < (pageNumber) * pageSize; x++){
            if (filteredData[x]) {
                data.push(filteredData[x]);
            }
        }
        component.set("v.PaginationList", data);
    },
    searchRecordsBySearchPhrase : function (component) {
        let searchPhrase = component.get("v.searchCity");
        if (!$A.util.isEmpty(searchPhrase)) {
            let allData = component.get("v.PaginationList");
            let filteredData = allData.filter(record => record.Name.toLowerCase().includes(searchPhrase.toLowerCase()));
            component.set("v.filteredData", filteredData);
            component.set("v.endPage",999999);
            component.set("v.startPage",0);
            component.set("v.pageSize",49999);
            this.preparePagination(component, filteredData);
        }
    },
   searchRecordsBySearchPhraseCity : function (component) {
 	console.log('invoked searchRecordsBySearchPhraseCity');
        let searchPhrase = component.get("v.searchCity");
        if (!$A.util.isEmpty(searchPhrase)) {
            component.set("v.searchState",'');
            component.set("v.searchChain",'');
            let allData = component.get("v.allData");
            let filteredData = allData.filter(record => record.Accreditation__c.toLowerCase().includes(searchPhrase.toLowerCase()));
            component.set("v.filteredData", filteredData);
            var arrayValues = [];
            for (var i = 0; i < filteredData.length; i++) {
                  arrayValues.push(filteredData[i].Id);
            }
            //alert('arrayValues in search---->'+JSON.stringify(arrayValues));
            component.set("v.tempFilteredId",arrayValues);
            component.set("v.endPage",999999);//RGV
            component.set("v.startPage",0);//RGV
            component.set("v.pageSize",49000);//RGV
            var dTable = component.find("accountTable");
        	var selectedRows = dTable.getSelectedRows();
            component.set("v.previousScreenSelData",selectedRows);
            this.preparePagination(component, filteredData);
            
         }
        console.log('End searchRecordsBySearchPhraseCity');
    },
    searchRecordsBySearchPhraseState : function (component) {
        let searchPhrase = component.get("v.searchState");
        if (!$A.util.isEmpty(searchPhrase)) {
            component.set("v.searchCity",'');
            component.set("v.searchChain",'');
            let allData = component.get("v.allData");
            let filteredData = allData.filter(record => record.State__c.toLowerCase().includes(searchPhrase.toLowerCase()));
            component.set("v.filteredData", filteredData);
            var arrayValues = [];
            for (var i = 0; i < filteredData.length; i++) {
                  arrayValues.push(filteredData[i].Id);
            }
            //alert('arrayValues in search---->'+JSON.stringify(arrayValues));
            component.set("v.tempFilteredId",arrayValues);
            component.set("v.endPage",999999);//RGV
            component.set("v.startPage",0);//RGV
            component.set("v.pageSize",49000);//RGV
            var dTable = component.find("accountTable");
        	var selectedRows = dTable.getSelectedRows();
            component.set("v.previousScreenSelData",selectedRows);
            this.preparePagination(component, filteredData);
        }
    },
    searchRecordsBySearchPhraseChainCode : function (component) {
        let searchPhrase = component.get("v.searchChain");
        if (!$A.util.isEmpty(searchPhrase)) {
            component.set("v.searchCity",'');
            component.set("v.searchState",'');
            let allData = component.get("v.allData");
            let filteredData = allData.filter(record => record.Chain_Code__c.includes(searchPhrase));
            component.set("v.filteredData", filteredData);
            var arrayValues = [];
            for (var i = 0; i < filteredData.length; i++) {
                  arrayValues.push(filteredData[i].Id);
            }
            //alert('arrayValues in search---->'+JSON.stringify(arrayValues));
            component.set("v.tempFilteredId",arrayValues);
            component.set("v.endPage",999999);//RGV
            component.set("v.startPage",0);//RGV
            component.set("v.pageSize",49000);//RGV
            var dTable = component.find("accountTable");
        	var selectedRows = dTable.getSelectedRows();
            component.set("v.previousScreenSelData",selectedRows);
            this.preparePagination(component, filteredData);
        }
    },

})