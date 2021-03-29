// logic for the quiz
// from the click button
//  start the timer
//  question is shown
//  answer is given
//      question is either wrong or right
                // if wrong, timer down
                // score goes down
            // display next question
                // if right score go up
            // display next question

var questions = [
    {
        question: "Commonly used data types DO NOT include: ",
        responses: ["Strings","Numbers","Booleans","Alerts"],
        answer: "Alerts"
    },
    {
        question: "An Array's individual element can be accessed via its: ",
        responses: ["Method","Index","Memory","Address"],
        answer: "Index"
    },
    {
        question: "If '8' is a string, then 8 is a/an: ",
        responses: ["Number","Boolean","Character","Object"],
        answer: "Number"
    },
    {
        question: "You can iterate through an Array with a/an: ",
        responses: ["Do-While-Loop","While-Loop","Iterator","For-Loop"],
        answer: "For-Loop"
    },
    {
        question: "If I have an Array with 5 elements, what will array.length return? ",
        responses: ["1","0","4","5"],
        answer: "5"
    }
]

for(let i = 0; i < questions.length; i++){

    console.log("Object" , i, "Question: ", questions[i].question);
    
    for(let i = 0; i < questions[i].responses.length; i++){
        console.log("Response" , i,questions[i].responses[i]);
    }
    
    console.log("Object" , i, "Answer: ", questions[i].answer);
    
}
