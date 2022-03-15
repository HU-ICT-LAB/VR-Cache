let pause = false;

document.onkeydown = function menu(e) {
    const camera = document.getElementById("player");
    if (e.key === "Tab" && !pause) {
        camera.pause();
        pause = true;
    } else if (e.key === "Tab") {
        camera.play();
        pause = false;
    }
};