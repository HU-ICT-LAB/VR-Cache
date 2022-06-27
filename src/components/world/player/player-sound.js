window.AFRAME.registerComponent("player-sound", {
	walking: false,
	alreadyWalking: false,
	init() {
		this.el.addEventListener("thumbstickmoved", () => {
			this.walking = true;
		});
		this.el.addEventListener("thumbstickup", () => {
			this.walking = false;
		});
	},
	tick() {
		if (this.walking && !this.alreadyWalking) {
			document.getElementById("playerWalkingsoundAsset").components.sound.playSound();
			this.alreadyWalking = true;
		} else if (!this.walking) {
			document.getElementById("playerWalkingsoundAsset").components.sound.stopSound();
			this.alreadyWalking = false;
		}
	}
});