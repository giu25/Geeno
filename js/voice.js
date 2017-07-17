function start() {
  if (!('webkitSpeechRecognition' in window)) {
    upgrade();
  } else {
    var recognition = new webkitSpeechRecognition();
    $("i").css("color", "#e94043");
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "it";
    recognition.start();
    recognition.onresult = function (event) {
      var interim_transcript = '';
      var final_transcript = '';
      for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final_transcript += event.results[i][0].transcript;
        } else {
          interim_transcript += event.results[i][0].transcript;
        }
      }
      console.log(interim_transcript);
      document.getElementById("box").value = interim_transcript;
      $("i").css("color", "#2A91A8");
    }
  }
}