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


var modal = document.getElementById("myModal");


var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");


document.addEventListener("click", (e) => {
    const elem = e.target;
    if (elem.id==="myImg") {
      modal.style.display = "block";
      modalImg.src = elem.dataset.biggerSrc || elem.src;
      captionText.innerHTML = elem.alt; 
    }
  });

var span = document.getElementsByClassName("close")[0];


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

        this.classList.toggle("active");

        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}
