function write(obj, sentence, i, cb) {
  if (i != sentence.length) {
    setTimeout(function () {
      i++
      obj.innerHTML = sentence.substr(0, i + 1) + ' <em aria-hidden="true"></em>';
      write(obj, sentence, i, cb)
    }, 50)
  } else {
    cb()
  }
}

function erase(obj, cb, i) {
  var sentence = obj.innerText
  if (sentence.length != 0) {
    setTimeout(function () {
      sentence = sentence.substr(0, sentence.length - 1)
      obj.innerText = sentence
      erase(obj, cb)
    }, 18 / (i * (i / 10000000)))
  } else {
    obj.innerText = " "
    cb()
  }
}
var typeline = document.querySelector("#typeline")

function writeerase(obj, sentence, time, cb) {
  write(obj, sentence, 0, function () {
    setTimeout(function () {
      erase(obj, cb)
    }, time)
  })
}

var sentences = [
  " Luna.",
  "a Software Engineer.",
  "a Web Developer.",
  "a Web Designer. "
]

var counter = 0

function loop() {
  var sentence = sentences[counter % sentences.length]
  writeerase(typeline, sentence, 3000, loop)
  counter++
}

loop()


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}


/*const menu = document.getElementById("menudrop");
const menuList = document.getElementById("mytopnavlink");

menu.addEventListener("click", function(){
  menuList.classList.toggle("menuList");
})*/

$('document').ready(function(){

  $('#menudrop').click(function(){

    $('#mytopnavlink').slideToggle(200)
  })

  $('.navlist').click(function(){
    $('#mytopnavlink').slideUp(200)
  })

})

