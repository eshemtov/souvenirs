/*$("#palette, #quilt").css("display", "none");*/

  function saveData() {

  let homes = document.getElementById("homes").value;
  /**let places = document.getElementById("places").value;
  let dreams = document.getElementById("dreams").value; **/


  localStorage.setItem("homes", homes);
  /**localStorage.setItem("places", places);
  localStorage.setItem("dreams", dreams); **/

  let categoryHomes;

  for (i = 0; i < localStorage.length ; i++) {
    localStorage.getItem(localStorage.key(i));
    categoryHomes = i + homes;
    categoryHomes
    }
  }

/**var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
} **/

var body = document.body, 
    r = document.querySelector('#r'),
    g = document.querySelector('#g'),
    b = document.querySelector('#b'),
    /**r_out = document.querySelector('#r_out'),
    g_out = document.querySelector('#g_out'),
    b_out = document.querySelector('#b_out'), **/
    hex_out = document.querySelector('#hex');

function setColor(){
  var r_hex = parseInt(r.value, 10).toString(16),
      g_hex = parseInt(g.value, 10).toString(16),
      b_hex = parseInt(b.value, 10).toString(16),
      hex = "#" + pad(r_hex) + pad(g_hex) + pad(b_hex);
      var element = document.getElementById("swatch");
      element.style.backgroundColor = hex;
      /**hex_out.value = hex; **/
}

function pad(n){
  return (n.length<2) ? "0"+n : n;
}

r.addEventListener('change', function() {
  setColor();
  /**r_out.value = r.value;**/
}, false);

r.addEventListener('input', function() {
  setColor();
  /**r_out.value = r.value;**/
}, false);

g.addEventListener('change', function() {
  setColor();
  /**g_out.value = g.value;**/
}, false);

g.addEventListener('input', function() {
  setColor();
  /**g_out.value = g.value; **/
}, false);

b.addEventListener('change', function() {
  setColor();
  /** b_out.value = b.value; **/
}, false);

b.addEventListener('input', function() {
  setColor();
  /** b_out.value = b.value; **/
}, false);


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

var btn = document.getElementsByClassName("myBtn");

var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn[0].onclick = function() {
  modal.style.display = "block";
};

btn[1].onclick = function() {
  modal.style.display = "block";
};

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}