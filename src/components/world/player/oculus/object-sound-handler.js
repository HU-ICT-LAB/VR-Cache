window.AFRAME.registerComponent("object-sound-handler", {
	init() {
		this.el.addEventListener("gripdown", function () {
			switch (sessionStorage.getItem("object")) {
			case "boom":
				document.getElementById("boomSoundAsset").components.sound.playSound();
				break;
			case "kleineBoomstam":
				document.getElementById("kleineBoomstamSoundAsset").components.sound.playSound();
				break;
			case "kampvuur":
				document.getElementById("kampvuurSoundAsset").components.sound.playSound();
				break;
			case "wereldborder":
				document.getElementById("wereldborderSoundAsset").components.sound.playSound();
				break;
			default:
				break;
			}
		});
	}
});