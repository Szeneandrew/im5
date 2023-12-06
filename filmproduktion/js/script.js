const selectBtnHome = document.getElementById('home-menu');
const entwicklung = document.getElementById('entwicklung-menu');
const preproduction = document.getElementById('preproduction-menu');
const production = document.getElementById('production-menu');
const postproduction = document.getElementById('postproduction-menu');
const iconHome = document.getElementById('icon-home');
const selectBtn = document.getElementById('select-btn');
const selectBtn2 = document.getElementById('select-btn-2');
const selectBtn3 = document.getElementById('select-btn-3');
const selectBtn4 = document.getElementById('select-btn-4');

const coloredBoxes = document.querySelectorAll('.part');

const filmproduktionTitle = document.getElementById("filmproduktion")
const entwicklungTitle = document.getElementById("entwicklung")
const preproductionTitle = document.getElementById("preproduction")
const productionTitle = document.getElementById("production")
const postproductionTitle = document.getElementById("postproduction")
const main = document.getElementById("main")

const squareHome = document.querySelector("#squareHome")
const squareEntwicklung = document.querySelector("#squareEntwicklung")
const squarePreproduction = document.querySelector("#squarePreproduction")
const squareProduction = document.querySelector("#squareProduction")
const squarePostproduction = document.querySelector("#squarePostproduction")


//RESPONSIVE
const selectBtnIcon = document.getElementById('select-btn-icon');
const selectBtnIcon2 = document.getElementById('select-btn-icon-2');
const selectBtnIcon3 = document.getElementById('select-btn-icon-3');
const selectBtnIcon4 = document.getElementById('select-btn-icon-4');

const menuList = document.querySelector('.select-menu .list');






if (window.innerWidth > 1500) {
    
//BUTTON FÜR HOME
selectBtnHome.onmouseenter = function() {
    iconHome.style.transform = 'scale(1.15)';
    iconHome.style.transitionDuration = '.22s';

}

selectBtnHome.onmouseleave = function() {
    iconHome.style.transform = 'scale(1)';

}





//BUTTON FÜR ENTWICKLUNG
selectBtn.onmouseenter = function() {
    selectBtn.classList.add('active');
    document.querySelector('#synopsis-menu').setAttribute("onclick", "window.location='#kastenEntwicklung'");
    document.querySelector('#exposé-menu').setAttribute("onclick", "window.location='#kastenEntwicklung'");
    document.querySelector('#treatment-menu').setAttribute("onclick", "window.location='#kastenEntwicklung'");
    document.querySelector('#drehbuch-menu').setAttribute("onclick", "window.location='#kastenEntwicklung'");
}

entwicklung.onmouseleave = function() {
    selectBtn.classList.remove('active');
    document.querySelector('#synopsis-menu').removeAttribute("onclick");
    document.querySelector('#exposé-menu').removeAttribute("onclick");
    document.querySelector('#treatment-menu').removeAttribute("onclick");
    document.querySelector('#drehbuch-menu').removeAttribute("onclick");
}





//BUTTON FÜR PREPRODUCTION
selectBtn2.onmouseenter = function() {
    selectBtn2.classList.add('active');
    document.querySelector('#locationScouting-menu').setAttribute("onclick", "window.location='#kastenPreproduction'");
    document.querySelector('#casting-menu').setAttribute("onclick", "window.location='#kastenPreproduction'");
    document.querySelector('#shotlist-menu').setAttribute("onclick", "window.location='#kastenPreproduction'");
    document.querySelector('#storyboard-menu').setAttribute("onclick", "window.location='#kastenPreproduction'");

}

preproduction.onmouseleave = function() {
    selectBtn2.classList.remove('active');
    document.querySelector('#locationScouting-menu').removeAttribute("onclick");
    document.querySelector('#casting-menu').removeAttribute("onclick");
    document.querySelector('#shotlist-menu').removeAttribute("onclick");
    document.querySelector('#storyboard-menu').removeAttribute("onclick");
}





//BUTTON FÜR PRODUCTION
selectBtn3.onmouseenter = function() {
    selectBtn3.classList.add('active');
    document.querySelector('#dreharbeiten-menu').setAttribute("onclick", "window.location='#kastenProduction'");

}

production.onmouseleave = function() {
    selectBtn3.classList.remove('active');
    document.querySelector('#dreharbeiten-menu').removeAttribute("onclick");
}





//BUTTON FÜR POSTPRODUCTION
selectBtn4.onmouseenter = function() {
    selectBtn4.classList.add('active');
    document.querySelector('#schnitt-menu').setAttribute("onclick", "window.location='#kastenPostproduction'");
    document.querySelector('#grading-menu').setAttribute("onclick", "window.location='#kastenPostproduction'");
    document.querySelector('#vertonung-menu').setAttribute("onclick", "window.location='#kastenPostproduction'");

}

postproduction.onmouseleave = function() {
    selectBtn4.classList.remove('active');
    document.querySelector('#schnitt-menu').removeAttribute("onclick");
    document.querySelector('#grading-menu').removeAttribute("onclick");
    document.querySelector('#vertonung-menu').removeAttribute("onclick");
}





//HINTERGRUND
window.addEventListener('scroll', () => {
    coloredBoxes.forEach(box => {
      if (
        box.getBoundingClientRect().top <= document.body.scrollTop
      ) {
        document.body.style.backgroundColor = box.dataset.color;
      }
    });
  });
  
  const changeBackgroundColor = (color) => {
      document.body.style.backgroundColor = color;
    };
    
    const handleScroll = () => {
      coloredBoxes.forEach((box, index) => {
        const boxRect = box.getBoundingClientRect();
    
        // Ändere die Hintergrundfarbe, bevor du zum jeweiligen Element scrollst
        if (boxRect.top <= window.innerHeight / 10 && boxRect.bottom >= window.innerHeight / 10) {
          changeBackgroundColor(box.dataset.color);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);





//TEXT SCROLL
const rect = main.getBoundingClientRect()

const animate = (element,position) => {
     element.style.transform = `translateX(${position}px)`
}      

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;
    
   window.requestAnimationFrame(function() {
     
      animate(filmproduktionTitle,lastKnownScrollPosition*.2)
      animate(entwicklungTitle,lastKnownScrollPosition*.2)
      animate(preproductionTitle,lastKnownScrollPosition*.2)
      animate(productionTitle,lastKnownScrollPosition*.2)
      animate(postproductionTitle,lastKnownScrollPosition*.2)
      
    });
});





//SQUARE SCROLL
const animateSquare = (element,position) => {
    element.style.transform = `translateY(-${position}px)`
} 

document.addEventListener('scroll', function(e) {
 lastKnownScrollPosition = window.scrollY;
   
  window.requestAnimationFrame(function() {
    
     animateSquare(squareHome,lastKnownScrollPosition*.03)
     animateSquare(squareEntwicklung,lastKnownScrollPosition*.03)
     animateSquare(squarePreproduction,lastKnownScrollPosition*.03)
     animateSquare(squareProduction,lastKnownScrollPosition*.03)
     animateSquare(squarePostproduction,lastKnownScrollPosition*.03)
     
   });
});





//KASTEN AUFTAUCHEN
window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.liste');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 300;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}
//RESPONSIVE
//RESPONSIVE
//RESPONSIVE
//RESPONSIVE
//RESPONSIVE
//RESPONSIVE
//RESPONSIVE
//RESPONSIVE
//RESPONSIVE
//RESPONSIVE
//RESPONSIVE
//RESPONSIVE
//RESPONSIVE
//RESPONSIVE
//RESPONSIVE
//RESPONSIVE
//RESPONSIVE
//RESPONSIVE
//RESPONSIVE
//RESPONSIVE
} else {

//BUTTON FÜR ENTWICKLUNG
document.addEventListener('click', function(event) {
    // Überprüfen, ob das Dropdown-Menü geöffnet ist und ob der Klick außerhalb des Menüs erfolgt ist
    if (selectBtn.classList.contains('active') && !selectBtn.contains(event.target)) {
        // Schließe das Dropdown-Menü
        selectBtn.classList.remove('active');

        // Entferne die onclick-Attribute
        document.querySelector('#synopsis-menu').removeAttribute("onclick");
        document.querySelector('#exposé-menu').removeAttribute("onclick");
        document.querySelector('#treatment-menu').removeAttribute("onclick");
        document.querySelector('#drehbuch-menu').removeAttribute("onclick");
    }
});


selectBtnIcon.addEventListener('click', function() {
    selectBtn.classList.toggle('active');

    if (selectBtn.classList.contains('active')) {

    document.querySelector('#synopsis-menu').setAttribute("onclick", "window.location='#synopsis'");
    document.querySelector('#exposé-menu').setAttribute("onclick", "window.location='#exposé'");
    document.querySelector('#treatment-menu').setAttribute("onclick", "window.location='#treatment'");
    document.querySelector('#drehbuch-menu').setAttribute("onclick", "window.location='#drehbuch'");
    
    } else {
        document.querySelector('#synopsis-menu').removeAttribute("onclick");
        document.querySelector('#exposé-menu').removeAttribute("onclick");
        document.querySelector('#treatment-menu').removeAttribute("onclick");
        document.querySelector('#drehbuch-menu').removeAttribute("onclick");
    }
});





//BUTTON FÜR PREPRODUCTION
document.addEventListener('click', function(event) {
    // Überprüfen, ob das Dropdown-Menü geöffnet ist und ob der Klick außerhalb des Menüs erfolgt ist
    if (selectBtn2.classList.contains('active') && !selectBtn2.contains(event.target)) {
        // Schließe das Dropdown-Menü
        selectBtn2.classList.remove('active');

        // Entferne die onclick-Attribute
        document.querySelector('#locationScouting-menu').removeAttribute("onclick");
        document.querySelector('#casting-menu').removeAttribute("onclick");
        document.querySelector('#shotlist-menu').removeAttribute("onclick");
        document.querySelector('#storyboard-menu').removeAttribute("onclick");
    }
});

selectBtnIcon2.addEventListener('click', function() {
    selectBtn2.classList.toggle('active');

    if (selectBtn2.classList.contains('active')) {


        document.querySelector('#locationScouting-menu').setAttribute("onclick", "window.location='#locationScouting'");
        document.querySelector('#casting-menu').setAttribute("onclick", "window.location='#casting'");
        document.querySelector('#shotlist-menu').setAttribute("onclick", "window.location='#shotlist'");
        document.querySelector('#storyboard-menu').setAttribute("onclick", "window.location='#storyboard'");
        
        } else {
            document.querySelector('#locationScouting-menu').removeAttribute("onclick");
            document.querySelector('#casting-menu').removeAttribute("onclick");
            document.querySelector('#shotlist-menu').removeAttribute("onclick");
            document.querySelector('#storyboard-menu').removeAttribute("onclick");
        }
});





//BUTTON FÜR PRODUCTION
document.addEventListener('click', function(event) {
    // Überprüfen, ob das Dropdown-Menü geöffnet ist und ob der Klick außerhalb des Menüs erfolgt ist
    if (selectBtn3.classList.contains('active') && !selectBtn3.contains(event.target)) {
        // Schließe das Dropdown-Menü
        selectBtn3.classList.remove('active');

        // Entferne die onclick-Attribute
        document.querySelector('#dreharbeiten-menu').removeAttribute("onclick");
    }
});

selectBtnIcon3.addEventListener('click', function() {
    selectBtn3.classList.toggle('active');

    if (selectBtn3.classList.contains('active')) {

        document.querySelector('#dreharbeiten-menu').setAttribute("onclick", "window.location='#dreharbeiten'");
        
        } else {
            document.querySelector('#dreharbeiten-menu').removeAttribute("onclick");
        }
});





//BUTTON FÜR POSTPRODUCTION
document.addEventListener('click', function(event) {
    // Überprüfen, ob das Dropdown-Menü geöffnet ist und ob der Klick außerhalb des Menüs erfolgt ist
    if (selectBtn4.classList.contains('active') && !selectBtn4.contains(event.target)) {
        // Schließe das Dropdown-Menü
        selectBtn4.classList.remove('active');

        // Entferne die onclick-Attribute
        document.querySelector('#schnitt-menu').removeAttribute("onclick");
        document.querySelector('#grading-menu').removeAttribute("onclick");
        document.querySelector('#vertonung-menu').removeAttribute("onclick");
    }
});

selectBtnIcon4.addEventListener('click', function() {
    selectBtn4.classList.toggle('active');

    if (selectBtn4.classList.contains('active')) {

        document.querySelector('#schnitt-menu').setAttribute("onclick", "window.location='#schnitt'");
        document.querySelector('#grading-menu').setAttribute("onclick", "window.location='#grading'");
        document.querySelector('#vertonung-menu').setAttribute("onclick", "window.location='#vertonung'");
        
        } else {
            document.querySelector('#schnitt-menu').removeAttribute("onclick");
            document.querySelector('#grading-menu').removeAttribute("onclick");
            document.querySelector('#vertonung-menu').removeAttribute("onclick");
        }
});





//HINTERGRUND
window.addEventListener('scroll', () => {
  coloredBoxes.forEach(box => {
    if (
      box.getBoundingClientRect().top <= document.body.scrollTop
    ) {
      document.body.style.backgroundColor = box.dataset.color;
    }
  });
});

const changeBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
  };
  
  const handleScroll = () => {
    coloredBoxes.forEach((box, index) => {
      const boxRect = box.getBoundingClientRect();
  
      // Ändere die Hintergrundfarbe, bevor du zum jeweiligen Element scrollst
      if (boxRect.top <= window.innerHeight / 6 && boxRect.bottom >= window.innerHeight / 6) {
        changeBackgroundColor(box.dataset.color);
      }
    });
  };
  
  window.addEventListener('scroll', handleScroll);




//TEXT SCROLL
const rect = main.getBoundingClientRect()

const animate = (element,position) => {
     element.style.transform = `translateX(${position}px)`
}      

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;
    
   window.requestAnimationFrame(function() {
     
      animate(filmproduktionTitle,lastKnownScrollPosition*.2)
      animate(entwicklungTitle,lastKnownScrollPosition*.2)
      animate(preproductionTitle,lastKnownScrollPosition*.2)
      animate(productionTitle,lastKnownScrollPosition*.2)
      animate(postproductionTitle,lastKnownScrollPosition*.2)
      
    });
});





//SQUARE SCROLL
const animateSquare = (element,position) => {
    element.style.transform = `translateY(-${position}px)`
} 

document.addEventListener('scroll', function(e) {
 lastKnownScrollPosition = window.scrollY;
   
  window.requestAnimationFrame(function() {
    
     animateSquare(squareHome,lastKnownScrollPosition*.03)
     animateSquare(squareEntwicklung,lastKnownScrollPosition*.03)
     animateSquare(squarePreproduction,lastKnownScrollPosition*.03)
     animateSquare(squareProduction,lastKnownScrollPosition*.03)
     animateSquare(squarePostproduction,lastKnownScrollPosition*.03)
     
   });
});





//KASTEN AUFTAUCHEN
window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.liste');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 70;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}
}