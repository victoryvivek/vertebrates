var counter = 1;
function changeBG() {
    var imgs = [
        "url(https://wallpapermemory.com/uploads/786/tiger-wallpaper-hd-1080p-115616.jpg)",
        "url(https://i.pinimg.com/originals/93/6b/14/936b143f02cf44bdd38559b57c06e42d.jpg)",
        "url(http://www.1zoom.me/big2/18/230790-Sepik.jpg)",
        "url(https://images.wallpaperscraft.com/image/fish_underwater_world_red_115913_1920x1080.jpg)",
        "url(https://stmed.net/sites/default/files/amphibians-wallpapers-25370-7263425.jpg)",
        "url(https://i.pinimg.com/originals/fa/55/2b/fa552ba3281dd9028228d5aa200d331f.jpg)"
    ]

    if (counter === imgs.length) counter = 0;
    $("body").css("background-image", imgs[counter]);

    counter++;
}

setInterval(changeBG, 2000);


