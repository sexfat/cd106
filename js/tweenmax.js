TweenMax.to('.box_01', 1.4, {
    //   left: '200px' ,
    //   rotationY: 360,
    //   transformOrigin: 'right top'
    //   scaleY : 1.5,
    width: '100px',
    className: '+=vivi',
    boxShadow: "2px 1px 10px blue"
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




TweenMax.set('.box_06', {
    x: 50
});
TweenMax.set('.box_07', {
    x: 150
});




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



tl.to('.box_06', 1, {
        x: 200
    })
    .to('.box_07', 1, {
        y: 100
    })
    .to('.box_08', 1, {
        y: 100,
        x: 100
    });

tl.stop();


document.getElementById('btn_play').onclick = function () {
    tl.play(0);
}


document.getElementById('btn_stop').onclick = function () {
    tl.stop();
}

var tlc = new TimelineMax({
    onComplete: parallaxs
});


// tlc.to('.box_09', 1 , {left: 100}).to('.box_10', 1 , {top: 50}).to('.box_11', 1 , {right: 100}).to('.box_12', 1 , {top: 20})


function parallaxs() {
    var scene = document.getElementById('parallax_box');
    var parallax = new Parallax(scene);

};


var controller = new ScrollMagic.Controller();


var animation_01 = TweenMax.to('.box_13', 1, {
    y: 100,
    rotationX: 360
})


var section_01 = new ScrollMagic.Scene({
        triggerElement: "#trigger_01",

    }).setTween(animation_01)
    .addIndicators()
    .addTo(controller)



//第二段動畫
var animation_02 = TweenMax.staggerFromTo('.item', 1, {
    y: 0,
    alpha: 0
}, {
    y: 30,
    alpha: 1
}, .2)

//觸發事件

var section_02 = new ScrollMagic.Scene({
        triggerElement: "#trigger_02",
        reverse: true,
        offset: 0,
        // triggerHook: 0

    }).setTween(animation_02)
    .addIndicators()
    .addTo(controller)

// 觸發事件

var animation_03 = TweenMax.to('.box_select', 1, {
    x: 100
});
var animation_04 = TweenMax.to('.box_select2', 1, {
    y: 400,
    x: 10
});

var section_03 = new ScrollMagic.Scene({
        triggerElement: "#trigger_03",
        duration: 400
        // reverse: true,
        // offset: 0,
        // triggerHook: 0

    }).setClassToggle('.box_select', 'select')
    .setTween(animation_03)
    .addIndicators()
    .addTo(controller)

///pin
    var tlts = new TimelineMax();

    tlts.add(TweenMax.to('.scrollbox_01', 1, {
        x: 200,
    }));
    tlts.add(TweenMax.to('.scrollbox_02', 1, {
        x: 300,
    }));
    tlts.add(TweenMax.to('.scrollbox_03', 1, {
        x: 400,
    }));


    var scene_s = new ScrollMagic.Scene({
        triggerElement: "#trigger_05",
        duration: '300%',
        //畫面最上緣
        triggerHook: 0,
        //只出現一次
        // reverse: false,
    })
    .setPin('.section_08')
    .setTween(tlts)
    .addIndicators()
    .addTo(controller);

//pin end





var section_04 = new ScrollMagic.Scene({
        triggerElement: "#trigger_04",
        // duration: '80%',
        // offset: 40,
        reverse: false,
        triggerHook: 0
    }).setClassToggle('.bgall', 'on') //選取器 選取物件  
    .addIndicators({
        name: 'section02'
    }).addTo(controller)



















console.log('end');