
//   $(".box").click(function(){

//     $(this).hide(); --> this is for disapearing objects
    
//   });

  $( function() {
    $( ".draggable" ).draggable();
  } );

  // RANDOM LIST
// ---------------------------------------------
var random = document.querySelector('.random');
for (var i = random.children.length; i >= 0; i--) {
  random.appendChild(random.children[Math.random() * i | 0]);
}

var clicks = 0;
$(".imposter").on("click",function() {
  
  alert("You found the imposter!");
  clicks = 6;
});

$(".draggable").on("click",function() {
  if(clicks === 4){
    alert("You lose!");
  }
  clicks++;
});




//   # means id