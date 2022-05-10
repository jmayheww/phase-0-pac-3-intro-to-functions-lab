function shout(string) {
    //todo
    return string.toUpperCase();
}

function whisper(string) {

    return string.toLowerCase();
}


function logShout(string) {
    console.log(string.toUpperCase());
    return string.toUpperCase();

}

function logWhisper(string) {
    console.log(string.toLowerCase());
    return string.toLowerCase();
}



  function sayHiToHeadphonedRoommate(string) {
      if (string === string.toLowerCase()) {
          return string = "I can\'t hear you!";
      }
      else if (string === string.toUpperCase()) {
          return string = "YES INDEED!";
      }
      else if (string==="Let's have dinner together!") {
          return string = "I would love to!";
      }
          
    }