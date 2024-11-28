import { LightningElement,wire } from 'lwc';
import getAcc from '@salesforce/apex/PaginationAccounts.getAccounts';

export default class PaginationDemoOne extends LightningElement {

    totalAccounts=[
        // {name:"Udaychand"},
        // {name:"Ganesh"},
        // {name:"Chitra"},
        // {name:"sirisha"},
        // {name:"Hemanth"},
        // {name:"Jahnavi"},
        
        
    ];
    nextDisable=false;
    prevDisable=false;

    @wire(getAcc)
    acc({data,error}){
        if(data){
            console.log("***************************************");
            console.log(data);
            this.totalAccounts= data
          //this.totalAccounts=data;
          this.totalPages=Math.ceil(this.totalAccounts.length/this.recordsPerPages);
          this.currentAccounts=this.totalAccounts.slice(0,this.recordsPerPages);

        }
        else if(error){
            console.log(error)
        }
       
    }
    recordsPerPages=10;
    totalPages;
    currentPage=1;
    

    previousHandler(){
        if(!(this.currentPage<=1 )){
            this.currentAccounts = this.totalAccounts.slice(this.currentPage*this.recordsPerPages-this.recordsPerPages*2,this.currentPage*this.recordsPerPages-this.recordsPerPages);
            this.currentPage -=1;
            console

        }
         else{
            this.prevDisable=true;
        }
        if(this.currentPage !=this.totalPages){
            this.nextDisable=false;
        }
        if(this.currentPage ==1){
            this.prevDisable=true;
        }
    }

    nextHandler(){
        if(!(this.currentPage>=this.totalPages)){
            this.currentAccounts = this.totalAccounts.slice(this.currentPage*this.recordsPerPages,this.currentPage*this.recordsPerPages+this.recordsPerPages);
            this.currentPage +=1;
           
        }
        if(this.currentPage ==this.totalPages){
            this.nextDisable=true;
        }
        if(this.currentPage !=1){
            this.prevDisable=false;
        }

    }

}