window.AFRAME.registerComponent("player-sound", {
	walking: false,
	init() {
		this.el.addEventListener("pointup", () => {
			this.walking = true;
		});
		this.el.addEventListener("pointdown", () => {
			this.walking = false;
		});
	},
	tick() {
		if (this.walking) {
			document.getElementById("playerWalkingsoundAsset").components.sound.playSound();
		}
	}
});