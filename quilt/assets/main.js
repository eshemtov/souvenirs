$("#palette, #quilt, #instructions, .savequilt, .arrow-submit").css("display", "none");

function saveData() {

let imageSetOne = ["tiles-01.svg", "tiles-02.svg", "tiles-04.svg", "tiles-05.svg", "test-09.svg", "test-10.svg", "test-11.svg", "test-16.svg", "test-18.svg", "test-27.svg", "test-17.svg", "test-26.svg"];

let imageSetTwo = ["tiles-41.svg", "tiles-42.svg", "tiles-43.svg", "tiles-44.svg", "tiles-45.svg", "tiles-46.svg", "tiles-47.svg", "test-28.svg", "tiles-48.svg", "tiles-51.svg", "tiles-52.svg", "tiles-53.svg", "tiles-54.svg", "tiles-55.svg", "tiles-56.svg", "tiles-57.svg", "tiles-58.svg"];

let imageSetFour = ["tiles-41.svg", "tiles-42.svg", "tiles-43.svg", "tiles-44.svg", "tiles-45.svg", "tiles-46.svg", "tiles-47.svg", "test-28.svg", "tiles-48.svg", "tiles-51.svg", "tiles-52.svg", "tiles-53.svg", "tiles-54.svg", "tiles-55.svg", "tiles-56.svg", "tiles-57.svg", "tiles-58.svg"];

let imageSetFive = ["test-15.svg", "test-28.svg", "test-25.svg", "test-12.svg", "test-14.svg", "test-23.svg", "test-13.svg"];

let imageSetSix = ["test-15.svg", "test-28.svg", "test-25.svg", "test-12.svg", "test-14.svg", "test-23.svg", "test-13.svg"];

let imageSetSeven = ["illustration-1-92.svg", "triangles-89.svg", "star-86.svg", "illustration-1-92.svg"];

let imageSetEight = ["test-15.svg", "test-28.svg", "test-25.svg", "test-12.svg", "test-14.svg", "test-23.svg", "test-13.svg"];

let imageSetNine = ["test-15.svg", "test-28.svg", "test-25.svg", "test-12.svg", "test-14.svg", "test-23.svg", "test-13.svg"];

let imageSetTen = ["tiles-41.svg", "tiles-42.svg", "tiles-43.svg", "tiles-44.svg", "tiles-45.svg", "tiles-46.svg", "tiles-47.svg", "test-28.svg", "tiles-48.svg", "tiles-51.svg", "tiles-52.svg", "tiles-53.svg", "tiles-54.svg", "tiles-55.svg", "tiles-56.svg", "tiles-57.svg", "tiles-58.svg"];

let imageSetEleven = ["tiles-41.svg", "tiles-42.svg", "tiles-43.svg", "tiles-44.svg", "tiles-45.svg", "tiles-46.svg", "tiles-47.svg", "test-28.svg", "tiles-48.svg", "tiles-51.svg", "tiles-52.svg", "tiles-53.svg", "tiles-54.svg", "tiles-55.svg", "tiles-56.svg", "tiles-57.svg", "tiles-58.svg"];

let imageSetTwelve = ["tiles-41.svg", "tiles-42.svg", "tiles-43.svg", "tiles-44.svg", "tiles-45.svg", "tiles-46.svg", "tiles-47.svg", "test-28.svg", "tiles-48.svg", "tiles-51.svg", "tiles-52.svg", "tiles-53.svg", "tiles-54.svg", "tiles-55.svg", "tiles-56.svg", "tiles-57.svg", "tiles-58.svg"];

let imageSets = [imageSetOne, imageSetTwo, imageSetFour, imageSetFive, imageSetSix, imageSetSeven, imageSetEight, imageSetNine, imageSetTen, imageSetEleven, imageSetTwelve];

  let homes = document.getElementById("homes").value;
  let places = document.getElementById("places").value;
  let objects = document.getElementById("objects").value;
  let dreams = document.getElementById("dreams").value;
  let faith = document.getElementById("faith").value;
  let seasons = document.getElementById("seasons").value;
  let food = document.getElementById("food").value;
  let community = document.getElementById("community").value;
  let nation = document.getElementById("lang-nation").value;
  let sports = document.getElementById("sports").value;
  let music = document.getElementById("music").value;
 
  localStorage.setItem("questionOne", homes);
  localStorage.setItem("questionTwo", places);
  localStorage.setItem("questionFour", objects);
  localStorage.setItem("questionFive", dreams);
  localStorage.setItem("questionSix", faith);
  localStorage.setItem("questionSeven", seasons);
  localStorage.setItem("questionEight", food);
  localStorage.setItem("questionNine", community);
  localStorage.setItem("questionTen", nation);
  localStorage.setItem("questionEleven", sports);
  localStorage.setItem("questionTwelve", music);

  let answerOne = localStorage.getItem("questionOne");
  let answerTwo = localStorage.getItem("questionTwo");
  let answerFour = localStorage.getItem("questionFour");
  let answerFive = localStorage.getItem("questionFive");
  let answerSix = localStorage.getItem("questionSix");
  let answerSeven = localStorage.getItem("questionSeven");
  let answerEight = localStorage.getItem("questionEight");
  let answerNine = localStorage.getItem("questionNine");
  let answerTen = localStorage.getItem("questionTen");
  let answerEleven = localStorage.getItem("questionEleven");
  let answerTwelve = localStorage.getItem("questionTwelve");

  let answerArray = [answerOne, answerTwo, answerFour, answerFive, answerSix, answerSeven, answerEight, answerNine, answerTen, answerEleven, answerTwelve];

  let answerArraySum = 0;

  for (i=0; i < answerArray.length; i++) {
    answerArraySum += parseInt(answerArray[i]);
  }

  var answerWeights = [];
  var numberOfImages = [];

  for (i = 0; i < answerArray.length; i++) {
    answerWeights[i] = ((answerArray[i] / (answerArraySum)) * 12);
    numberOfImages[i] = Math.round(answerWeights[i]);
  }

  let imagePaths = [];

  for (i = 0; i < numberOfImages.length; i++) {
    const shuffled = imageSets[i].sort(() => 0.5 - Math.random()).slice(0,numberOfImages[i]);
    imagePaths = imagePaths.concat(shuffled);
  }  

  for (i = 0; i < 12; i++) {
    let currDiv = document.getElementById("div" + i);
    currDiv.setAttribute("style", "background-image: url(assets/" + imagePaths[i] + ")");
  }

  $("#palette, #quilt").css("display", "table");
  $("#instructions, .savequilt, .arrow-submit").css("display", "block");

}

var body = document.body, 
    r = document.querySelector('#r'),
    g = document.querySelector('#g'),
    b = document.querySelector('#b'),
    hex_out = document.querySelector('#hex');

function setColor(){
  var r_hex = parseInt(r.value, 10).toString(16),
      g_hex = parseInt(g.value, 10).toString(16),
      b_hex = parseInt(b.value, 10).toString(16),
      hex = "#" + pad(r_hex) + pad(g_hex) + pad(b_hex);
      var element = document.getElementById("swatch");
      element.style.backgroundColor = hex;
      var quilt = document.getElementById("quilt");
      quilt.style.backgroundColor = hex;
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


/* not yet working /
function downloadimage() {
  var container = document.getElementById("quilt");
  
  html2canvas(container, { allowTaint: true }).then(function (canvas) {

  var link = document.createElement("a");
  document.body.appendChild(link);
  link.download = "html_image.jpg";
  link.href = canvas.toDataURL();
  link.target = '_blank';
  link.click();
  });
}
*/
