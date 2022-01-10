
const quizData = [{Question: "A Great Demand for Raw Materials was created by ?",a:"Industrial Revolution",b:"IT Revolution ",c:"French Revolution", d:"Agrary Revolution", correct:"a"},
{Question: "The British and French forces checked the advances of German forces in the battle of ?",a:"Eastern Front",b:"Dardenellus",c:"Marne", d:"North Sea", correct:"c"},
{Question: "The founder of fascist party was ?",a:"Hitler",b:"Mussolini",c:"Stalin", d:"Lenin", correct:"b"},
{Question: "The Seat of International Court of Justice is ? ",a:"The Hague",b:"Berlin",c:"Rome", d:"Tokyo", correct:"a"},
{Question: "The task of Unifying the Indian States was undertaken by ? ",a:"Dr. B.R Ambedkar",b:"Rajendraprasad",c:"Rajaji ", d:"Sardar Vallabhbai Patel", correct:"d"},
]


const testdata = ["a","v","d","d"];

quizData.forEach((element,index)  => {
   $("#quiz-container").append("<br>Question: "+ element.Question+"<br>" + "a. "+ element.a+"<br>"+"b. "+ element.b+"<br>"+"c. "+ element.c+"<br>"+"d. "
   + element.d+"<br>"+"Your selection was "+ testdata[index]);
   /* $("p").append("Option a  "+ element.a+"<br>");
   $("p").append("Option b "+ element.b+"<br>");
   $("p").append("Option c "+ element.c+"<br>");
   $("p").append("Option d "+ element.d+"<br>");
   $("p").append("Correct Option :"+ element.correct+"<br><br>"); */
   console.log("Question is "+ element.Question)
   console.log("Option a  "+ element.a)
   console.log("Option b "+ element.b)
   console.log("Option c "+ element.c)
   console.log("Option d "+ element.d)
   console.log("Correct Option"+ element.correct)

});


