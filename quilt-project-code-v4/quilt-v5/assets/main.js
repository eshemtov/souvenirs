var draggableOptions = {
  placeholder: 'placeholder',
  zIndex: 1000,
  helper: "clone",

  cursorAt: {
    top: 20,
    left: 20
  },
};

// makes all elements with class "draggable" able to be dragged
$('.draggable').draggable(draggableOptions);

// makes all elements with class "droppable" able to be droppable regions that accept elements with the "draggable" class
$('.droppable').droppable({
  hoverClass: 'placeholder',
  accept: ".draggable",             // droppable regions only accept elements with the "draggable" class
  
  // "Triggered when an accepted draggable is dropped on the droppable (based on the tolerance option)."
  drop: function(evt, ui) {
    var draggable = ui.draggable;   // store the draggable element as a jquery object
    var droppable = this;           // store the droppable element as a jquery object
    
    
    $(droppable).children().remove(); // removed children of the droppable region
    $(draggable)                    // selects the draggable element
      .clone()                      // clones it
      .draggable(draggableOptions)  // makes the clone draggable
      .click(function() {           // makes the clone disappear on click by removing child element
        $(this).empty();
      })
      .prependTo($(droppable));     // makes clone child of droppable region you're dragging over
  },
})

// makes all elements with class "draggable" empty when you click them
$('#quilt .draggable').click(function() {
  $(this).empty();
});

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn[0].onclick = function() {
  modal.style.display = "block";
};

btn[1].onclick = function() {
  modal.style.display = "block";
};

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

//mobile adapting test
window.onload = function() {
  // find the element that you want to drag.
  var dragdrop = document.getElementsByClassName('draggable');
  
  /* listen to the touchmove event,
  every time it fires, grab the location
  of touch and assign it to box */
  
  drapdrop.addEventListener('touchmove', function(e) {
    // grab the location of touch
    var touchLocation = e.targetTouches[0];
    
    // assign box new coordinates based on the touch.
    box.style.left = touchLocation.pageX + 'px';
    box.style.top = touchLocation.pageY + 'px';
  })
  
}