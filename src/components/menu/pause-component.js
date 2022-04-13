window.AFRAME.registerComponent("pause-component", {
	init() {
		const timer = document.querySelector("#timer");
		const camera = this;

		let pause = false;

		document.onkeydown = function menu(e) {
			if (e.key === "Escape") {
				if (!pause) {
					timer.emit("paused");
					camera.el.pause();
					pause = true;
				} else {
					timer.emit("continued");
					camera.el.play();
					pause = false;
				}
			}
		};

	}
});

