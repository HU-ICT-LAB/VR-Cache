window.AFRAME.registerComponent("player-sound", {
	walking: false,
	alreadyWalking: false,
	init() {
		this.el.addEventListener("thumbstickmoved", this.isWalking.bind(this));
	},

	isWalking(e) {
		this.walking = e.detail.y !== 0 || e.detail.x !== 0;
	},

	tick() {
		console.log(this.walking);
		if (this.walking && !this.alreadyWalking) {
			document.getElementById("playerWalkingsoundAsset").components.sound.playSound();
			this.alreadyWalking = true;
		} else if (!this.walking) {
			document.getElementById("playerWalkingsoundAsset").components.sound.stopSound();
			this.alreadyWalking = false;
		}
	}
});