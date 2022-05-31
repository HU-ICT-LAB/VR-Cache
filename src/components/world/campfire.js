window.AFRAME.registerComponent("campfire", {
	init: function () {
		const element = this.el;

		element.setAttribute("geometry", "height: 5.06; radiusBottom: 4.30; radiusTop: 1.56");
		element.setAttribute("material", "opacity: 0.1;");

		this.el.addEventListener("raycaster-intersected", function () {
			document.getElementById("kampvuurSound").components.sound.playSound();
		});
	}
});