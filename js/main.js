$(document).ready(function(){
    console.log("the document is ready!");

    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event){

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 900, function(){
          });
    });

$(window).on('resize', function() {
    if($(window).width() > 540) {
        $('#body, #body2, #body3, #body4, #body5, #body6').addClass('limit1200');
        $('#body, #body2, #body3, #body4, #body5, #body6').removeClass('limit400');
    }else{
        $('#body, #body2, #body3, #body4, #body5, #body6').addClass('limit400');
        $('#body, #body2, #body3, #body4, #body5, #body6').removeClass('limit1200');
    }
    console.log("class executed 1");   
    });

    console.log("code executed 1");
    
    //MODAL ON PRINCIPLE CLICK    
    // Get the modal
    var modal = document.getElementById('segmentation-mod');

    // Get the button that opens the modal
    var btn = document.getElementById("Segmentation");
    

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      console.log("button clicked");
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }    
    
console.log("code executed 2");

    // Funky squirly vector animations
      new Vivus('my-svg', {duration: 200}, myCallback);
 
});


    



    




