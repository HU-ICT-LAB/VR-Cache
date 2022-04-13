window.AFRAME.registerComponent("pause-component", {
	init() {
		const timer = document.querySelector("#timer");
		const display = document.querySelector("[displaytimer]");
		const camera = this;

		let pause = false;

		document.onkeydown = function menu(e) {
			if (e.key === "Escape") {
				if (!pause) {
					display.setAttribute("visible","false");
					pause = true;
					timer.emit("paused");
					camera.el.pause();
				} else {
					display.setAttribute("visible","true");
					pause = false;
					timer.emit("continued");
					camera.el.play();
				}
			}
		};

	}
});

