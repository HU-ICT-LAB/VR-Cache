const time = {s: 0, m: 0};
let interval;

/**
 * Component that keeps track of the game time
 */
window.AFRAME.registerComponent("timer", {
	init: function () {
		interval = setInterval(this.updateTime, 1000);

		const component = this;

		this.el.sceneEl.addEventListener("paused", component.stop);
		this.el.sceneEl.addEventListener("continued", function () {
			component.continue();
		});
	},

	/**
	 * Keep track of the game time
	 */
	updateTime() {
		if (time.s === 60) {
			time.m++;
			time.s = 0;
		}

		time.s++;

		document.getElementById("timer").emit("timeUpdated", {updatedTime: time}, true);
	},

	/**
	 * Continue timer after it has been paused
	 */
	continue() {
		interval = setInterval(this.updateTime, 1000);
	},

	/**
	 * Stop the timer
	 */
	stop() {
		clearInterval(interval);
	}
});