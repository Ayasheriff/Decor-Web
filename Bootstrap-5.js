// <![CDATA[  <-- For SVG support
if ('WebSocket' in window) {
    (function () {
        function refreshCSS() {
            var sheets = [].slice.call(document.getElementsByTagName("link"));
            var head = document.getElementsByTagName("head")[0];
            for (var i = 0; i < sheets.length; ++i) {
                var elem = sheets[i];
                var parent = elem.parentElement || head;
                parent.removeChild(elem);
                var rel = elem.rel;
                if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
                    var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
                    elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
                }
                parent.appendChild(elem);
            }
        }
        var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
        var address = protocol + window.location.host + window.location.pathname + '/ws';
        var socket = new WebSocket(address);
        socket.onmessage = function (msg) {
            if (msg.data == 'reload') window.location.reload();
            else if (msg.data == 'refreshcss') refreshCSS();
        };
        if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
            console.log('Live reload enabled.');
            sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
        }
    })();
}
else {
    console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
}
// ]]>
// <![CDATA[  <-- For SVG support
if ('WebSocket' in window) {
    (function () {
        function refreshCSS() {
            var sheets = [].slice.call(document.getElementsByTagName("link"));
            var head = document.getElementsByTagName("head")[0];
            for (var i = 0; i < sheets.length; ++i) {
                var elem = sheets[i];
                var parent = elem.parentElement || head;
                parent.removeChild(elem);
                var rel = elem.rel;
                if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
                    var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
                    elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
                }
                parent.appendChild(elem);
            }
        }
        var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
        var address = protocol + window.location.host + window.location.pathname + '/ws';
        var socket = new WebSocket(address);
        socket.onmessage = function (msg) {
            if (msg.data == 'reload') window.location.reload();
            else if (msg.data == 'refreshcss') refreshCSS();
        };
        if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
            console.log('Live reload enabled.');
            sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
        }
    })();
}
else {
    console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
}

$('.owl-carousel').owlCarousel({
 loop:false,
 autoplay:false,
 autoplayTimeout:500,
 stagepadding:100,
 margin:10,
 nav:true,

 responsive:{
     0:{
         items:2
      },
     600:{
         items:3
      },
     1000:{
         items:5
      }
    }
})


$(".slick").slick({

// normal options...
infinite: true,
slidesToShow:5,
slidesToScroll:1,
autoplay:true,
arrows:true,
dots:true,

// the magic
responsive: [{

 breakpoint: 1024,
 settings: {
   slidesToShow: 3,
   infinite: true
 }

}, {

 breakpoint: 600,
 settings: {
   slidesToShow: 2,
   dots: true
 }

}, {

 breakpoint: 300,
 settings: "unslick" // destroys slick

}]
});


//  //toggle for heart
//  let heart =document.getElementById('heart');

//  heart.onclick = function(){
//    heart.classList.add("heart2")
//  }

//  heart.onclick = function(){
//    heart.classList.toggle("heart2")
//  }
//  //------
//  let heart1 =document.getElementById('heart1');

//  heart1.onclick = function(){
//    heart1.classList.add("heart2")
//  }

//  heart1.onclick = function(){
//    heart1.classList.toggle("heart2")
//  }
// //------
// let heart2 =document.getElementById('heart2');

// heart2.onclick = function(){
//   heart2.classList.add("heart2")
// }

// heart2.onclick = function(){
//   heart2.classList.toggle("heart2")
// }
 
//  //------
//  let heart3 =document.getElementById('heart3');

//  heart3.onclick = function(){
//    heart3.classList.add("heart2")
//  }

//  heart3.onclick = function(){
//    heart3.classList.toggle("heart2")
//  }

//   //------
//   let heart4 =document.getElementById('heart4');

// heart4.onclick = function(){
//   heart4.classList.add("heart2")
// }

// heart4.onclick = function(){
//    heart4.classList.toggle("heart2")
// }
//   //------
//   let heart5 =document.getElementById('heart5');

// heart5.onclick = function(){
//  heart5.classList.add("heart2")
// }

// heart5.onclick = function(){
//  heart5.classList.toggle("heart2")
// }

//---class
let hearts =document.querySelectorAll('.heart');

hearts.forEach(heart => {
    heart.addEventListener("click", ()=>{
        heart.classList.toggle('heart2')
        
    })
   
})


// heart.onclick = function(){
//  heart.classList.add("heart2")
// }

// heart.onclick = function(){
//  heart.classList.toggle("heart2")
// }



//toogle for bookmark
// let book =document.getElementById('book');

// book.onclick = function(){
//  book.classList.add("book")
// }

// book.onclick = function(){
//  book.classList.toggle("book")
// }

// //-----
// let book1 =document.getElementById('book1');

// book1.onclick = function(){
//  book1.classList.add("book")
// }

// book1.onclick = function(){
//  book1.classList.toggle("book")
// }

// //-----
// let book2 =document.getElementById('book2');

// book2.onclick = function(){
//  book2.classList.add("book")
// }

// book2.onclick = function(){
//  book2.classList.toggle("book")
// }

// //-----
// let book3 =document.getElementById('book3');

// book3.onclick = function(){
//  book3.classList.add("book")
// }

// book3.onclick = function(){
//  book3.classList.toggle("book")
// }

// //-----
// let book4 =document.getElementById('book4');

// book4.onclick = function(){
//  book4.classList.add("book")
// }

// book4.onclick = function(){
//  book4.classList.toggle("book")
// }

// //-----
// let book5 =document.getElementById('book5');

// book5.onclick = function(){
//  book5.classList.add("book")
// }

// book5.onclick = function(){
//  book5.classList.toggle("book")
// }

let books =document.querySelectorAll('.book');

books.forEach(book => {
    book.addEventListener("click", ()=>{
        book.classList.toggle('book2')
        
    })
   
})

//   let stars = document.querySelectorAll(".star");
//   stars.forEach(star => {
//       star.addEventListener("click", ()=>{
//           console.log(star.children[0].classList.remove);
//           console.dir(star);
//       })
//       star.addEventListener("click", ()=>{
//           console.log(star.children[0].classList.add("bi-star-fill"));
//           console.dir(star);
//       })
//   })

 

//   let stars = document.querySelectorAll(".star");
//  stars.forEach((star , index) => {
//      star.addEventListener("click", ()=>{
//         stars.forEach((ele) => ele.classList.remove("bi-star-fill"));
//          for(let i=0; i<=index; i++){
           
//             stars[i].classList.add("bi-star-fill")
//          }
         
//         })
//     })
//  let stars = document.querySelectorAll(".star");
//  stars.forEach((star , index)=> {
//      star.addEventListener("click",() =>{
//         stars.forEach((st) =>st.classList.remove("bi-star-fill"));
//          for(let i=0; i<=index; i++) {
//              stars[i].classList.add("bi-star-fill"),
//              stars[i].classList.remove("bi-star");

//           } 
//      })
  
 
//  })

let stars =document.querySelectorAll('.star');

stars.forEach((star , index) => {
    star.addEventListener("click", ()=>{
        stars.forEach((newStar) => newStar.classList.remove('star2'))
        
        star.addEventListener('click', () => {
            for(let i=0; i<= index; i++){
                stars[i].classList.add('star2');
            }
        })
    })
   
})











