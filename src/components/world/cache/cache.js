const positions = [{position: "0.07104 -0.00483 12.4918", rotation: "0 0 0"},
	{position: "-12.370 -0.00483 6.458", rotation: "0 -47.870 0"},
	{position: "9.84865 1.33479 -0.46017", rotation: "0 90 0"},
	{position: "14.91071 -0.00483 3.60356", rotation: "0 65.83 0"},
	{position: "11.31676 -0.00483 10.89139", rotation: "0 31.94 0"},
	{position: "2.30102 -0.00483 14.72652", rotation: "0 31.94 0"},
	{position: "-3.62847 1.19811 11.02244", rotation: "0 -26.05 0"}];

window.AFRAME.registerComponent("cache", {
	init() {
		const random = Math.floor(Math.random() * positions.length);
		this.el.setAttribute("position", positions[random].position);
		this.el.setAttribute("rotation", positions[random].rotation);
		this.el.setAttribute("gltf-model", "assets/cache.gltf");
		this.el.setAttribute("scale", "0.2 0.2 0.2");
		this.el.setAttribute("sound", "src: assets/CacheGeluid.mp3; autoplay: true; loop: true; maxDistance: 10000; rolloffFactor: 3; volume: 1;");

		const hitbox = document.createElement("a-sphere");

		hitbox.setAttribute("position", positions[random].position);
		hitbox.setAttribute("radius", "0.75");
		hitbox.setAttribute("opacity", "0");

		hitbox.addEventListener("raycaster-intersected", function () {
			sessionStorage.setItem("interacting", "true");
			document.getElementById("cacheSoundAsset").components.sound.playSound();
		});

		hitbox.addEventListener("raycaster-intersected-cleared", function () {
			sessionStorage.setItem("interacting", "false");
		});

		document.getElementById("scene").appendChild(hitbox);
	}
});