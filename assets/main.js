$("#palette, #quilt, #instructions, .arrow-submit").css("display", "none");

function saveData() {

//homes
let imageSetOne = ["https://i.imgur.com/Of69Ter.png",
"https://i.imgur.com/UOoQZUl.png",
"https://i.imgur.com/XYruZta.png",
"https://i.imgur.com/zNKgpDZ.png",
"https://i.imgur.com/Jv6uMo6.png",
"https://i.imgur.com/ExpdIH7.png",
"https://i.imgur.com/s1TEkuW.png",
"https://i.imgur.com/0KrqU4D.png",
"https://i.imgur.com/ExpdIH7.png",
"https://i.imgur.com/Jv6uMo6.png",
"https://i.imgur.com/lIcBEum.png",
"https://i.imgur.com/veRh1EP.png"];

//places
let imageSetTwo = ["https://i.imgur.com/Of69Ter.png",
"https://i.imgur.com/sxoiitm.png",
"https://i.imgur.com/gOkETuZ.png",
"https://i.imgur.com/A5T6xxi.png",
"https://i.imgur.com/aHrSJL2.png",
"https://i.imgur.com/oZ3kCWm.png",
"https://i.imgur.com/rKfxIta.png",
"https://i.imgur.com/TUpXH9t.png",
"https://i.imgur.com/s1TEkuW.png",
"https://i.imgur.com/0KrqU4D.png",
"https://i.imgur.com/lIcBEum.png",
"https://i.imgur.com/veRh1EP.png"];

//keepsakes
let imageSetFour = ["https://i.imgur.com/Of69Ter.png",
"https://i.imgur.com/mqLTf82.png",
"https://i.imgur.com/5f1v5kV.png",
"https://i.imgur.com/OQqeKex.png",
"https://i.imgur.com/BighHvn.png",
"https://i.imgur.com/UgtsHAY.png",
"https://i.imgur.com/FzLXxov.png",
"https://i.imgur.com/FzLXxov.png", 
"https://i.imgur.com/x5AYemZ.png",
"https://i.imgur.com/vzAJ6vb.png",
"https://i.imgur.com/UgtsHAY.png",
"https://i.imgur.com/BighHvn.png"];

//dreams
let imageSetFive = ["https://i.imgur.com/sfj2tQV.png",
"https://i.imgur.com/dLS59Kg.png",
"https://i.imgur.com/iQLaGye.png",
"https://i.imgur.com/dZrWUi4.png",
"https://i.imgur.com/130IOBa.png",
"https://i.imgur.com/ltSY3su.png",
"https://i.imgur.com/TZE7CzN.png",
"https://i.imgur.com/zqpVBmu.png",
"https://i.imgur.com/KjAmjCw.png",
"https://i.imgur.com/ltSY3su.png",
"https://i.imgur.com/130IOBa.png",
"https://i.imgur.com/ltSY3su.png",
"https://i.imgur.com/sfj2tQV.png",
"https://i.imgur.com/dLS59Kg.png",
"https://i.imgur.com/iQLaGye.png",
"https://i.imgur.com/dZrWUi4.png",
"https://i.imgur.com/130IOBa.png",
"https://i.imgur.com/ltSY3su.png"];

//faith
let imageSetSix = ["https://i.imgur.com/pmxwKQr.png",
"https://i.imgur.com/idHhHHx.png",
"https://i.imgur.com/yya4wE4.png",
"https://i.imgur.com/GLiO8Y4.png",
"https://i.imgur.com/dtjt6TC.png",
"https://i.imgur.com/8eC1QkF.png",
"https://i.imgur.com/veRh1EP.png",
"https://i.imgur.com/lIcBEum.png",
"https://i.imgur.com/YbnCF82.png",
"https://i.imgur.com/lbTZsCs.png",
"https://i.imgur.com/JtGav7u.png",
"https://i.imgur.com/UzIVthr.png",
"https://i.imgur.com/pmxwKQr.png",
"https://i.imgur.com/idHhHHx.png",
"https://i.imgur.com/yya4wE4.png",
"https://i.imgur.com/GLiO8Y4.png",
"https://i.imgur.com/dtjt6TC.png"];

//food
let imageSetEight = ["https://i.imgur.com/mlYRa6Z.png",
"https://i.imgur.com/5cl4RPa.png",
"https://i.imgur.com/PmMFa4S.png",
"https://i.imgur.com/z655O4R.png",
"https://i.imgur.com/zUQlRPs.png",
"https://i.imgur.com/msMzf1v.png",
"https://i.imgur.com/zNKgpDZ.png",
"https://i.imgur.com/UOoQZUl.png",
"https://i.imgur.com/XYruZta.png",
"https://i.imgur.com/mlYRa6Z.png",
"https://i.imgur.com/5cl4RPa.png",
"https://i.imgur.com/PmMFa4S.png",
"https://i.imgur.com/z655O4R.png",
"https://i.imgur.com/zUQlRPs.png"];

//community
let imageSetNine = ["https://i.imgur.com/FzLXxov.png", 
"https://i.imgur.com/x5AYemZ.png",
"https://i.imgur.com/vzAJ6vb.png",
"https://i.imgur.com/UgtsHAY.png",
"https://i.imgur.com/BighHvn.png",
"https://i.imgur.com/OQqeKex.png",
"https://i.imgur.com/zNKgpDZ.png",
"https://i.imgur.com/UOoQZUl.png",
"https://i.imgur.com/XYruZta.png",
"https://i.imgur.com/UgtsHAY.png",
"https://i.imgur.com/BighHvn.png",
"https://i.imgur.com/OQqeKex.png",
"https://i.imgur.com/FzLXxov.png"];

//language
let imageSetTen = ["https://i.imgur.com/Of69Ter.png",
"https://i.imgur.com/teAVRzQ.png",
"https://i.imgur.com/Nbr2qwA.png",
"https://i.imgur.com/TmL4GrH.png",
"https://i.imgur.com/zNKgpDZ.png",
"https://i.imgur.com/UOoQZUl.png",
"https://i.imgur.com/XYruZta.png",
"https://i.imgur.com/s1TEkuW.png",
"https://i.imgur.com/0KrqU4D.png",
"https://i.imgur.com/JtGav7u.png",
"https://i.imgur.com/UzIVthr.png",
"https://i.imgur.com/Of69Ter.png",
"https://i.imgur.com/teAVRzQ.png",
"https://i.imgur.com/Nbr2qwA.png"];

//sports
let imageSetEleven = ["https://i.imgur.com/Of69Ter.png",
"https://i.imgur.com/rdkpsia.png",
"https://i.imgur.com/nxxWuN5.png",
"https://i.imgur.com/zNKgpDZ.png",
"https://i.imgur.com/UOoQZUl.png",
"https://i.imgur.com/XYruZta.png",
"https://i.imgur.com/OQqeKex.png",
"https://i.imgur.com/BighHvn.png",
"https://i.imgur.com/UzIVthr.png",
"https://i.imgur.com/JtGav7u.png",
"https://i.imgur.com/Of69Ter.png",
"https://i.imgur.com/rdkpsia.png",
"https://i.imgur.com/nxxWuN5.png",
"https://i.imgur.com/zNKgpDZ.png"];

//music
let imageSetTwelve = ["https://i.imgur.com/lYPlnr4.png",
"https://i.imgur.com/SrGFzL8.png",
"https://i.imgur.com/teAVRzQ.png",
"https://i.imgur.com/Nbr2qwA.png",
"https://i.imgur.com/TmL4GrH.png",
"https://i.imgur.com/zNKgpDZ.png",
"https://i.imgur.com/UOoQZUl.png",
"https://i.imgur.com/XYruZta.png",
"https://i.imgur.com/s1TEkuW.png",
"https://i.imgur.com/lYPlnr4.png",
"https://i.imgur.com/SrGFzL8.png",
"https://i.imgur.com/XYruZta.png",
"https://i.imgur.com/UgtsHAY.png",
"https://i.imgur.com/BighHvn.png",
"https://i.imgur.com/OQqeKex.png"];

let imageSets = [imageSetOne, imageSetTwo, imageSetFour, imageSetFive, imageSetSix, imageSetEight, imageSetNine, imageSetTen, imageSetEleven, imageSetTwelve];

  let homes = document.getElementById("homes").value;
  let places = document.getElementById("places").value;
  let objects = document.getElementById("objects").value;
  let dreams = document.getElementById("dreams").value;
  let faith = document.getElementById("faith").value;
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
  let answerEight = localStorage.getItem("questionEight");
  let answerNine = localStorage.getItem("questionNine");
  let answerTen = localStorage.getItem("questionTen");
  let answerEleven = localStorage.getItem("questionEleven");
  let answerTwelve = localStorage.getItem("questionTwelve");

  let answerArray = [answerOne, answerTwo, answerFour, answerFive, answerSix, answerEight, answerNine, answerTen, answerEleven, answerTwelve];

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
    currDiv.setAttribute("crossorigin", "anonymous");
    currDiv.setAttribute("style", "background-size: contain; background-image: url(" + imagePaths[i] + ")");
  }

  $("#palette, #quilt").css("display", "table");
  $("#instructions, .arrow-submit").css("display", "block");

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
}, false);

r.addEventListener('input', function() {
  setColor();
}, false);

g.addEventListener('change', function() {
  setColor();
}, false);

g.addEventListener('input', function() {
  setColor();
}, false);

b.addEventListener('change', function() {
  setColor();
}, false);

b.addEventListener('input', function() {
  setColor();
}, false);

function seasonFilter() {
  var palette = document.getElementById("palette");
  var quilt = document.getElementById("quilt");

  let season = document.getElementById("seasons").value;

  if (season == 1) {
    palette.classList.toggle("spring");
    quilt.classList.toggle("spring");
  } else if (season == 2) {
    palette.classList.toggle("summer");
    quilt.classList.toggle("summer");
  } else if (season == 3) {
    palette.classList.toggle("fall");
    quilt.classList.toggle("fall");
  } else if (season == 4) {
    palette.classList.toggle("winter");
    quilt.classList.toggle("winter");
  } 
}

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

function convertToImage() {   
    var resultDiv = document.getElementById("result");
    window.devicePixelRatio = 2;
    html2canvas(document.getElementById("quilt"), {scale: 10, useCORS: true}).then(function(canvas) {
      var img = canvas.toDataURL("image/png", 1);
      result.innerHTML = '<a download="YourQuilt.png" href="'+img+'">Download Quilt</a>';
      });
}

/**
 
function convertToImage() {   
    var resultDiv = document.getElementById("result");
    window.devicePixelRatio = 2;
    html2canvas(document.getElementById("quilt"), {useCORS: true}).then(function(canvas) {
      var img = canvas.toDataURL("image/png");
      setpixelated(canvas.getContext('2d'));
      result.innerHTML = '<a download="YourQuilt.png" href="'+img+'">Download Quilt</a>';
      });
}

function setpixelated(context) {
  context['imageSmoothingEnabled'] = false; 
  context['mozImageSmoothingEnabled'] = false;
  context['oImageSmoothingEnabled'] = false; 
  context['webkitImageSmoothingEnabled'] = false;
  context['msImageSmoothingEnabled'] = false; 
}

function convertToImage() {  
  var resultDiv = document.getElementById("result"); 
    html2canvas(document.getElementById("quilt"), {
      dpi: 300,
      onrendered: function (canvas) {
        var img = canvas.toDataURL("image/png");
        result.innerHTML = '<a download="YourQuilt.png" href="'+img+'">Download Quilt</a>';
      }
  });
}

function convertToImage() {   
    var resultDiv = document.getElementById("result");
    html2canvas(document.getElementById("quilt"), {useCORS: true}).then(function(canvas) {
      var img = canvas.toDataURL("image/png");
      result.innerHTML = '<a download="YourQuilt.png" href="'+img+'">Download Quilt</a>';
      });
}

var audio = document.getElementById("music");
function playPause(){
  if (audio.paused) audio.play();
  else audio.pause();
}

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
**/
