window.AFRAME.registerComponent("campfire", {
	init: function () {
		const element = this.el;

		element.setAttribute("geometry", "height: 5.06; radiusBottom: 4.30; radiusTop: 1.56");
		element.setAttribute("material", "opacity: 0;");
		element.setAttribute("sound", "src: assets/KampvuurGeluid.mp3; autoplay: true; loop: true; volume: 3.5");
		element.setAttribute("class", "interactable");

		this.el.addEventListener("raycaster-intersected", function () {
			sessionStorage.setItem("object", "kampvuur");
			document.getElementById("right").components.haptics.pulse(0.5, 50);
		});

		this.el.addEventListener("raycaster-intersected-cleared", function () {
			sessionStorage.setItem("object", "");
		});
	}
});