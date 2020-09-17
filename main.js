

     let Answer = [
      "YES!",
      "Of Course",
      "Why not", 
      "Sure!",
      "Definitely",
      "Most assuradly",
      "Without A Doubt",
      "I dont think so!",
      "Are you kidding me?",
      "Nope",
      "Never",
      "You Wish!",
      "Heck Yeah",
      "In your dreams",
      "I hope so!",
      "Well......",
      "Ummmm... ",
      "Not sure",
      "It could happen",
      "Not gonna Happen, Sorry"
     ];

     function randomAnswers(){
       let random = Answer[Math.floor(Math.random() * Answer.length)];
      document.body.append(random)      
      setTimeout(function(){location.reload()}, 3000);
     }

  