window.AFRAME.registerComponent("oculus-input-handler", {
	init() {
		this.el.addEventListener("abuttondown", function () {
			if (sessionStorage.getItem("interacting") === "true") {
				document.getElementById("cacheGevondenSoundAsset").components.sound.playSound();
			}
		});
	}
});
