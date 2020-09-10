var animatebutton = true;
var mouseinabout = false;

$("#aboutlink").mouseenter(function () {
    mouseinabout = true;
    $("#aboutlink").fadeTo(1, 1)
});
$("#aboutlink").mouseleave(function () {
    mouseinabout = false;
    start();
});

function start() {
    if (mouseinabout == false) {
        if (animatebutton) {
            $("#aboutlink").fadeTo(1000, .5)
            animatebutton = false;
        }
        else {
            $("#aboutlink").fadeTo(1000, 1)
            animatebutton = true;
        }
        setTimeout(start, 1000);
    }
    else {
        return;
    }
}

// boot up the first call
start();

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

// This is a functions that scrolls to #{blah}link
function goToByScroll(id) {
    // Remove "link" from the ID
    id = id.replace("link", "");
    // Scroll
    $('html,body').animate({
        scrollTop: $("#" + id).offset().top
    }, 'slow');
}

$("#aboutlink").click(function (e) {
    // Prevent a page reload when a link is pressed
    e.preventDefault();
    // Call the scroll function
    goToByScroll(this.id);
});

var $button = $(".button1");
var $button2 = $(".button2");
var mrfocus = false;

$(".mrprevtog").on("click", function () {
    if (mrfocus == false) {
        $(this).removeClass("dsatnoint");
        $(this).addClass("dsat2");
        $(this).addClass("outlinemr");
        $button.show();
        $button2.show();
        mrfocus = true;
    }
    else {
        $(this).removeClass("dsat2");
        $(this).addClass("dsatnoint");
        $(this).removeClass("outlinemr");
        $button.hide();
        $button2.hide();
        mrfocus = false;
    }
})


$(".codesec").hide();
var codeshown = false;

$("#prismtog").on("click", function () {
    if (codeshown == false) {
        $(".codesec").show();
        $(".prismbox").slideDown();
        codeshown = true;
    }
    else if (codeshown == true) {
        $(".prismbox").slideUp();
        setTimeout(function () { $(".codesec").hide(); }, 550)
        codeshown = false;
    }
});

$("#mritch").on("click", function () {
    $.magnificPopup.open({
        items: {
            src: 'https://itch.io/embed-upload/2699714?color=333333'
        },
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler custom-iframemp">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen>            </iframe>' +
                '</div>'
        }
    });
});

var CURRENT_CASE = 1;

$(".btn-project").click(function () {
    if ($(this).attr("id") === "PREV") {
        CURRENT_CASE -= 1;
        if (CURRENT_CASE === 1) {
            $(this).css("visibility", "hidden");
        }
        //else {
        //    $("#NEXT").css("visibility", "visible");
        //}
        $("#NEXT").css("visibility", "visible");
    }
    else if ($(this).attr("id") === "NEXT") {
        CURRENT_CASE += 1;
        if (CURRENT_CASE === 2) {
            $(this).css("visibility", "hidden");
            //}
            //else
            //    $("#PREV").css("visibility", "visible");
        }
        $("#PREV").css("visibility", "visible");
    }
    switch (CURRENT_CASE) {
        case 1:
            $("#upprev").attr({
                src: "/img/mockupgreym.png"
            });
            $("#updesc").html("My first commercial game release currently in closed beta, aimed to release via Unreal Store spring 2021. Pneumatiheist is a traditional rogue-like with modern ideas. Lose yourself in an immersive 2d modern world. 100+ unique characters to meet as you journey to steal the air itself. Story driven classic rogue-lite with metroidvania elements in a unique never before seen take on several genres. Written in Unity using C#.");
            break;
        case 2:
            $("#upprev").attr({
                src: "/img/mockupsm2.gif"
            });
            $("#updesc").html("Enjoy the depth of combat strategy you would find in X-COM games along with the dialogue options of a Telltale title. All of your choices matter and you carry your reputation with you wherever you go. You can see NPC's emotions and facial expressions in response to your actions and line choices when in towns. You get to navigate the universe in the comfort of your own ship built pixel by pixel by the player. ");
            break;
    }
});

$(".btn-project").mouseenter(function () {
    $(this).removeClass("fa-2x");
    $(this).addClass("fa-3x");
});
$(".btn-project").mouseleave(function () {
    $(this).removeClass("fa-3x");
    $(this).addClass("fa-2x");
});

$(".dsat").mouseenter(function () {
    $(this).removeClass("dsat");
    $(this).addClass("dsat2");
});
$(".dsat").mouseleave(function () {
    $(this).removeClass("dsat2");
    $(this).addClass("dsat");
});


$(".thumbprev").mouseenter(function () {
    if (mrfocus == false) {
        $(this).css("cursor", "pointer");
    }
});
$(".thumbprev").mouseleave(function () {
    $(this).css("cursor", "default");
});

var gifchange = 0;

$("#upprev").mouseenter(function () {
    if (CURRENT_CASE == 1 && gifchange == 0) {
        gifchange = 1;
        $("#upprev").attr({
            src: "/img/mockupsm.gif"
        });
    };
});

$("#upprev").mouseleave(function () {
    if (CURRENT_CASE == 1 && gifchange == 1) {
        gifchange = 0;
        $("#upprev").attr({
            src: "/img/mockupgreym.png"
        });
    };
});