let slideIndex = 0;

function updateSlide(n) {
    slideIndex += n;
    runSlide(slideIndex);
}

function runSlide(i) {
    const sliderItem = document.getElementsByClassName('contents-item');
    for (let i = 0; i < sliderItem.length; i++) {
        sliderItem[i].style.display = "none";
    }

    if (slideIndex == 4) {
    slideIndex = 0;
    sliderItem[4].style.display="block";
    sliderItem[5].style.display="block";
    sliderItem[0].style.display="block";
    } else {
        sliderItem[slideIndex + 2].style.display="block";
        sliderItem[slideIndex + 1].style.display="block";
        sliderItem[slideIndex].style.display="block";
    }
}

runSlide(slideIndex);

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");
// img.onclick = function(){
//  modal.style.display = "block";
//  modalImg.src = this.src;
//  captionText.innerHTML = this.alt;
// }

document.addEventListener("click", (e) => {
    const elem = e.target;
    if (elem.id==="myImg") {
      modal.style.display = "block";
      modalImg.src = elem.dataset.biggerSrc || elem.src;
      captionText.innerHTML = elem.alt; 
    }
  })
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

function message() {
    var Email = document.getElementById('email');
    var msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Email.value === ''|| msg.value ==='') {
        danger.style.display = 'block';
    }
    else {
        setTimeout (() => {
            email.value = '';
            msg.value = '';
        }, 2000);

        success.style.display = 'block';
    }
}

var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}
//const updateSlide = (n) => {
//  slideIndex += n;
//  showSlide(slideIndex);
//}

//const showSlide = (n) => {
  //const slides = document.getElementsByClassName("contents-item");
  //if (n > slides.length - 1) {
    //slideIndex = 0;
  //}
  //if (n < 0) {
    //slideIndex = slides.length - 1;
  //}
  //for (let i = 0; i < slides.length; i++) {
    //slides[i].style.display = "none";
  //}
  //slides[slideIndex].style.display = "block";
//}

//showSlide(slideIndex);