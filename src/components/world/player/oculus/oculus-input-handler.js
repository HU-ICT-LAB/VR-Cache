window.AFRAME.registerComponent("oculus-input-handler", {
	init() {
		document.getElementById("cacheGevondenSoundAsset").addEventListener("sound-ended", function () {
			window.location.href = "./index.html";
		});
		this.el.addEventListener("abuttondown", function () {
			if (sessionStorage.getItem("interacting") === "true") {
				document.getElementById("cacheGevondenSoundAsset").components.sound.playSound();
			}
		});
	}
});
