
        // whether the slideshow is paused or not
        var paused = false;

        // when you click on a thumbnail
        // it sets the src of the big image
        // to be the same as the image
        // you clicked on
        $(".crop-img").click(function() {
            $("#bigImage").attr('src',
                $(this).attr('src'));
						$("#counter").text(
                $(this).attr('alt'));
        });

        // the counter variable that keeps
        // track of which image you are showing
        var counter = 1;
        // virtually click on the current
        // image to load it into the big image
        $("#image" + counter).click();

        // when you click on the backwards
        // button select the previous image
        

        // when you click on the backwards
        // button select the next image
        $("#forward").click(function() {
            // go forward one in the counter
            counter = counter + 1;
            // if we are above 4 (the last
            // image) loop round to 1 (the
            // first image)
            if (counter > 6) {
                counter = 1;
            }
            // virtually click on the current
            // image to load it into the big image
            $("#image" + counter).click();
        });

        // when you click the big image 
        // toggle pausing. Set paused to 
        // not paused, i.e. if it is paused
        // set it to not paused, if it is 
        // not paused set it to paused
        $("#btnSlide").click(function() {
            paused = !paused;
            if ($('#btnSlide').children('span').hasClass('fa-pause')) {
                $('#btnSlide').children('span').removeClass('fa-pause')
                $('#btnSlide').children('span').addClass('fa-play')
            } else if ($('#btnSlide').children('span').hasClass('fa-play')) {
                $('#btnSlide').children('span').removeClass('fa-play')
                $('#btnSlide').children('span').addClass('fa-pause')
            }

        });

        // set interval makes it move 
        // forward every 3 second
        setInterval(function() {
            // first check if it is paused
            if (!paused) {
                // virtual click the forward
                // button
                $("#forward").click();
            };
        }, 3000);
//faq
  			$("#faque").click(function(){
          $('.cacherClic').show();
  });
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
// Get the button that close the modal
var btnannuler = document.getElementById("close");
// When the user clicks the button, close the modal 
btnannuler.onclick = function() {
  modal.style.display = "none";
}
