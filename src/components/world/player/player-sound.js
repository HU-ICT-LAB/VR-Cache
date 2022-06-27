window.AFRAME.registerComponent("player-sound", {
	walking: false,
	alreadyWalking: false,
	init() {
		this.el.addEventListener("thumbstickmoved", this.isWalking);
	},

	isWalking(evt) {
		this.walking = evt.detail.y > 0.95 || evt.detail.y < -0.95 || evt.detail.x < -0.95 || evt.detail.x > 0.95;
		console.log(evt.detail.y);
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