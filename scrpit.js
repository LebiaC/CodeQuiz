console.log('this is from the linked file')

var questions= [
    {
        question: "who is the best",
        choices: [
            "me",
            "them"
        ],
        answer: "me"
    },
    {
        question: "who is the best",
        choices: [
            "me",
            "them"
        ],
        answer: "me"
    },
    {
        question: "who is the best",
        choices: [
            "me",
            "them"
        ],
        answer: "me"
    },
    {
        question: "who is the best",
        choices: [
            "me",
            "them"
        ],
        answer: "me"
    },
]
var otherMoreVerboseFullForNosReasonNick = document.getElementById('nick')//element selection (superflous b/c html id attribute creates a reference anyway)
console.log(nick)
console.log(nick==otherMoreVerboseFullForNosReasonNick)
var isItAThing = nick.addEventListener('click', function(){
    var questionOb = questions[0]
    doFirstQ(questionOb)
})
console.log(isItAThing)

function doFirstQ(quest){
    //nick.removeEventListn
    var questionOb = quest
    var firstq=questionOb.question
    nick.innerHTML = "<h3>"+firstq+"</h3>"
    var firstChoice =document.createElement('p')
    firstChoice.textContent=questionOb.choices[0]
    console.log(firstChoice)
    console.log(typeof firstChoice)
    firstChoice.addEventListener('click', function(){
        console.log("nick")
    })
    nick.appendChild(firstChoice)
    //nick.innerHTML += "<h6>"+ questionOb.choices[1]+"</h6>"
}