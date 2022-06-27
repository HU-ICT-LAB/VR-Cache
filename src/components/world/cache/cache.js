window.AFRAME.registerComponent("cache", {
	init() {
		this.el.setAttribute("static-body", null);
		this.el.setAttribute("position", "0.2 1 14.2");
		this.el.setAttribute("color", "#4CC3D9");
		this.el.setAttribute("radius", "0.5");
		this.el.setAttribute("sound", "src: assets/CacheGeluid.mp3; autoplay: true; loop: true; maxDistance: 10000; rolloffFactor: 3; volume: 1;");

		this.el.addEventListener("raycaster-intersected", function () {
			sessionStorage.setItem("interacting", "true");
			document.getElementById("cacheSoundAsset").components.sound.playSound();
		});

		this.el.addEventListener("raycaster-intersected-cleared", function () {
			sessionStorage.setItem("interacting", "false");
		});
	}
});