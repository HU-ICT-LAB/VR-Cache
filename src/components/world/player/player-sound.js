window.AFRAME.registerComponent("player-sound", {
	walking: false,
	init() {
		this.el.addEventListener("thumbstickmoved", () => {
			this.walking = true;
		});
		this.el.addEventListener("thumbstickup", () => {
			this.walking = false;
		});
	},
	tick() {
		if (this.walking) {
			document.getElementById("playerWalkingsoundAsset").components.sound.playSound();
		}
	}
});