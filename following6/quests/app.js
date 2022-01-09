function toTimeString(seconds) {
    return (new Date(seconds * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
  }
  
  function startTimer() {
    var nextElem = $(this).parents('td').next();
    var duration = nextElem.text();
    var a = duration.split(':');
    var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
    setInterval(function() {
      seconds--;
      if (seconds >= 0) {
        nextElem.html(toTimeString(seconds));
      }
      if (seconds === 0) {
          document.getElementById("myBtn").disabled = true;
        clearInterval(seconds);
      }
    }, 1000);
  }
  $('.btn').on('click', startTimer);



  $(document).ready(function(){
    $('#upload-file').change(function() {
       var filename = $(this).val();
       $('#file-upload-name').html(filename);
       if(filename!=""){
           setTimeout(function(){
               $('.upload-wrapper').addClass("uploaded");
           }, 600);
           setTimeout(function(){
               $('.upload-wrapper').removeClass("uploaded");
               $('.upload-wrapper').addClass("success");
           }, 1600);
       }
   });
});