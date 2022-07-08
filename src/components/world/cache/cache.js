const positions = [{position: "-13.43007 -0.00483 -5.78539", rotation: "0 37.83 0"},
	{position: "-6.52414 -0.00483 -9.61352", rotation: "0 37.83 0"},
	{position: "0.97651 -0.00483 -11.41705", rotation: "0 0 0"},
	{position: "9.16316 -0.00483 -12.47704", rotation: "0 -36.94 0"},
	{position: "13.40126 -0.00483 -7.60519", rotation: "0 -60.94 0"},
	{position: "12.07774 -0.00483 8.65857", rotation: "0 -127.14 0"},
	{position: "5.349 -0.00483 8.002", rotation: "0 -127.140 0"},
	{position: "-7.877 -0.00483 11.000", rotation: "0 -216.710 0"}];

window.AFRAME.registerComponent("cache", {
	init() {
		const random = Math.floor(Math.random() * positions.length);
		this.el.setAttribute("position", positions[random].position);
		this.el.setAttribute("rotation", positions[random].rotation);
		this.el.setAttribute("gltf-model", "assets/cache.gltf");
		this.el.setAttribute("scale", "0.2 0.2 0.2");
		this.el.setAttribute("sound", "src: assets/CacheGeluid.mp3; autoplay: true; loop: true; maxDistance: 10000; rolloffFactor: 3; volume: 1;");
		this.el.setAttribute("class", "interactable");

		const hitbox = document.createElement("a-sphere");

		hitbox.setAttribute("position", positions[random].position);
		hitbox.setAttribute("radius", "0.75");
		hitbox.setAttribute("opacity", "0");
		hitbox.setAttribute("class", "interactable");

		hitbox.addEventListener("raycaster-intersected", function () {
			sessionStorage.setItem("interacting", "true");
			document.getElementById("cacheSoundAsset").components.sound.playSound();
			document.getElementById("right").components.haptics.pulse(0.5, 50);
		});

		hitbox.addEventListener("raycaster-intersected-cleared", function () {
			sessionStorage.setItem("interacting", "false");
		});

		document.getElementById("scene").appendChild(hitbox);
	}
});