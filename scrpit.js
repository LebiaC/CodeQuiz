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
nick.addEventListener('click', function(){
    var questionOb = questions[0]
    var firstq=questionOb.question
    nick.innerHTML = "<h3>"+firstq+"</h3>"
    nick.innerHTML += "<h6>"+ questionOb.choices+"</h6>"
})