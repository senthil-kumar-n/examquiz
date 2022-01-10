/* 

const data = [{Question: "Virtual Machine is ?", Option: "Iaas" },
{Question: "Hybrid cloud is  ?", Option: "Public Cloud" },
{Question: "Private cloud is  ?", Option: "Public Cloud" },
];



const data1 = [{Question: "Virtual Machine is ?", Option:[{Option1:"Iaas",Option2:"Saas",Option3:"Paas" }]},
{Question: "Dedicated Machine is ?", Option:[{Option1:"Yahoo",Option2:"Google",Option3:"Paas" }]},
{Question: "Server Machine is ?", Option:[{Option1:"Netlify",Option2:"Github",Option3:"Paas" }]}

]; */


/* 
console.log(count)
function Nextbtn(){

    

    document.getElementById("Question").innerText = data1[count].Question;
    count = count + 1
    console.log(count)
    document.getElementById("Option1").innerHTML = data1[count].Option[0].Option1; 
    document.getElementById("Option2").innerHTML = data1[count].Option[0].Option2; 
    document.getElementById("Option3").innerHTML = data1[count].Option[0].Option3; 
}

function Prevbtb(){

    count = count - 1
    console.log(count)
    document.getElementById("Question").innerText = data[count].Question;
    document.getElementById("Option1").innerHTML = data1[count].Option[0].Option1; 
    document.getElementById("Option2").innerHTML = data1[count].Option[0].Option2; 
    document.getElementById("Option3").innerHTML = data1[count].Option[0].Option3; 

    
}



function selecTed(clicked_id, clicked_value) {

    alert(clicked_id);
    alert(clicked_value);
    console.log(clicked_id)
    console.log(typeof(clicked_id))
    document.getElementById(clicked_id).style.background = "lightblue";

}
 */


let quizData = [{Question: "A Great Demand for Raw Materials was created by ?",a:"Industrial Revolution",b:"IT Revolution ",c:"French Revolution", d:"Agrary Revolution", correct:"a"},
{Question: "The British and French forces checked the advances of German forces in the battle of ?",a:"Eastern Front",b:"Dardenellus",c:"Marne", d:"North Sea", correct:"c"},
{Question: "The founder of fascist party was ?",a:"Hitler",b:"Mussolini",c:"Stalin", d:"Lenin", correct:"b"},
{Question: "The Seat of International Court of Justice is ? ",a:"The Hague",b:"Berlin",c:"Rome", d:"Tokyo", correct:"a"},
{Question: "The task of Unifying the Indian States was undertaken by ? ",a:"Dr. B.R Ambedkar",b:"Rajendraprasad",c:"Rajaji ", d:"Sardar Vallabhbai Patel", correct:"d"},
]

console.log(quizData);

const ScienceQuizData = [{Question: "Virtual Machine is ?",a:"Iaas",b:"Saas",c:"Paas", d:"NaaS", correct:"a"},
{Question: "HTML is ?",a:"Coding",b:"Tags",c:"Markup", d:"Drawing", correct:"c"},
{Question: "Azure Sentinel",a:"Monitor",b:"SIEM",c:"Storage", d:"NaaS", correct:"b"},
{Question: "Azure Blob is ?",a:"Compute",b:"Network",c:"Server", d:"Storage", correct:"d"},
]

function SocialQuiz() {
    let quizData = SocialQuizData;
    location.href = "/home.html"
}



/* const SocialQuizData = [{Question: "A Great Demand for Raw Materials was created by ?",a:"Industrial Revolution",b:"IT Revolution ",c:"French Revolution", d:"Agrary Revolution", correct:"a"},
{Question: "The British and French forces checked the advances of German forces in the battle of ?",a:"Eastern Front",b:"Dardenellus",c:"Marne", d:"North Sea", correct:"c"},
{Question: "The founder of fascist party was ?",a:"Hitler",b:"Mussolini",c:"Stalin", d:"Lenin", correct:"b"},
{Question: "The Seat of International Court of Justice is ? ",a:"The Hague",b:"Berlin",c:"Rome", d:"Tokyo", correct:"a"},
{Question: "The task of Unifying the Indian States was undertaken by ? ",a:"Dr. B.R Ambedkar",b:"Rajendraprasad",c:"Rajaji ", d:"Sardar Vallabhbai Patel", correct:"d"},
]
 */


quizData = ScienceQuizData;
console.log(ScienceQuizData);
console.log(quizData);

let count = 0;
let score = 0;
const answerEls = document.querySelectorAll(".answer");

conductQuiz();

function conductQuiz(){
    
  /* const currentind = quizData[count]; */

    Que.innerText = quizData[count].Question
    a_text.innerText = quizData[count].a
    b_text.innerText = quizData[count].b
    c_text.innerText = quizData[count].c
    d_text.innerText = quizData[count].d

 
      
}


function getSelected()

{

    answerEls.forEach(selectOption)

    function selectOption(item){

    

        if (item.checked == true) {
        /*     console.log(item)
            console.log(item.id) */
            selanswer = item.id        
           
            console.log(answerEls)
            console.log(typeof(answerEls))
           
    }
    
    }
    return selanswer; 
}



function endofQuiz() {
    
    document.querySelector(".quiz-container").innerHTML = "End of Quiz" 

}


function Submitted(){
   
    let answ = getSelected();

console.log("Selection Option is "+answ)
console.log("Selection Question is "+quizData[count].Question)
console.log("This shows the correct answer"+quizData[count].correct)
   
    if (answ === quizData[count].correct) {

        score=score+1;
        console.log("Score is : "+score)
    }
  
          
    else{}
    count = count + 1; 
    if (count < quizData.length){
            conductQuiz();
/*         console.log("Selection Option is "+answ)
        console.log("This shows the correct answer"+quizData[count].correct)
 */        console.log("Selection Question is "+quizData[count].Question)
        }   
        
        else{
        /*     endofQuiz(); */
            
            alert("End of Quiz Your Score is : " +score);
            document.querySelector(".quiz-container").innerHTML = "Your Score is" +score;
            const para = document.body.createElement(p)
            appendChild(para)
        }
  
}