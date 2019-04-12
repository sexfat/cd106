TweenMax.to('.box_01', 1.4, {
    //   left: '200px' ,
    //   rotationY: 360,
    //   transformOrigin: 'right top'
    //   scaleY : 1.5,
    width: '100px',
    className: '+=vivi',
    boxShadow : "2px 1px 10px blue"
    // height: '400px',
    // backgroundColor: '#f20'

    // repeat:1,
    // yoyo: true,
    // repeatDelay: .3,
    // ease: Elastic.easeOut
});


// TweenMax.from('.box_02', 5, {
//     x: 400,
//     ease: Elastic.easeOut
// });


// TweenMax.fromTo('.box_03', 5 ,{
//     x: 400
// }, {
//     x: 600
//     // ease: Elastic.easeOut
// });

// TweenMax.to('.box_05', 2, {
//     rotationY: 360,
//     transformOrigin: "left 50% -100",
//     transformPerspective: 600,
//     repeat: -1,
//     // borderRadius: '100%',
//     ease: Power0.easeNone,

// });




TweenMax.set('.box_06' , {x: 50 });
TweenMax.set('.box_07' , {x: 150 });




function alerts() {
    alert();
}


var tl = new TimelineMax({
    //方法
   repeat: 1,
   yoyo: true,
   onComplete: alerts
});

// var tl_01 = TweenMax.to('.box_06' , 1 ,{ x: 100});
// var tl_02  =  TweenMax.to('.box_07' , 1 ,{ y: 100});
// var tl_03  =  TweenMax.to('.box_08' , 1 ,{ y: 100 , x: 100});

// tl.add(tl_01).add(tl_02).add(tl_03);



tl.to('.box_06' , 1 ,{ x: 200})
.to('.box_07' , 1 ,{ y: 100})
.to('.box_08' , 1 ,{ y: 100 , x: 100});

tl.stop();


document.getElementById('btn_play').onclick = function () {
    tl.play(0);
}


document.getElementById('btn_stop').onclick = function () {
    tl.stop();
}



function parallaxs() {
    var scene = document.getElementById('parallax_box');
    var parallax = new Parallax(scene);
};


parallaxs();







console.log('end');