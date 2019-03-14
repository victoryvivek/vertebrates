var counter = 1;
function changeBG() {
    var imgs = [
        "url(https://images5.alphacoders.com/485/485834.jpg)",
        "url(http://www.4usky.com/data/out/55/164486877-lizard-wallpapers.jpg)",
        "url(https://d3l69s690g8302.cloudfront.net/wp-content/uploads/2017/03/15181942/startup-apps.jpg)"
    ]

    if (counter === imgs.length) counter = 0;
    $("#slideshow").css("background-image", imgs[counter]);
    counter++;
}

setInterval(changeBG, 4000);


