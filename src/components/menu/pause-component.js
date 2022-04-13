let pause = false;
let camera;

window.AFRAME.registerComponent("pause-component", {
	init() {
		camera = this;
	},

	tick() {
		document.onkeydown = function menu(e) {
			if (e.key === "Escape" && !pause) {
				camera.el.pause();
				document.querySelector("#timer").emit("paused");
				pause = true;
			} else if (e.key === "Escape") {
				camera.el.play();
				document.querySelector("#timer").emit("continued");
				pause = false;
			}
		};
	}
});

