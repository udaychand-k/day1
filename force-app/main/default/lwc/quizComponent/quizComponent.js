import { LightningElement } from 'lwc';

export default class QuizComponent extends LightningElement {

    started=false;
    score=0;
    selectedOptions={}
    submitted=false;

    data_store=[
        {
            qno:1,
            question:'How many vowels are there in English alphabets?',
            options:{A:6, B:2, C:3, D:5},
            answer: 'D'
            


        },
        {
            qno:2,
            question:'How many consonents are there in English alphabets?',
            options:{A:26, B:12, C:21, D:25},
            answer: 'C'
            


        },
    ]

    
    handleStart(event){
        this.started=!this.started;
        

    }
    handleSubmit(event){
        this.submitted=!this.submitted;
        console.log(this.selectedOptions);
        
        this.data_store.forEach((eachQuestion)=>{
                if(this.selectedOptions[eachQuestion.qno]===eachQuestion.answer){
                    this.score=this.score+1;
                    console.log(this.score);
                }
            
        }
        )
        console.log(this.score);
        
        
    }
    changeHandler(event){
        const {name, value} = event.target

        this.selectedOptions = {...this.selectedOptions,[name]:value}

    }
    handleOkay(){
        this.started=!this.started;
        this.submitted=!this.submitted;
        this.score=0
        // console.log(this.started)
        // console.log(this.submitted)
        // console.log(this.score)
    }
}