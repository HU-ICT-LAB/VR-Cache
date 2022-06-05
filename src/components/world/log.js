window.AFRAME.registerComponent("log", {
	init: function () {
		const element = this.el;

		element.setAttribute("geometry", "height: 6; radius: 1.5;");
		element.setAttribute("material", "opacity: 0.1;");

		this.el.addEventListener("raycaster-intersected", function () {
			document.getElementById("kleineBoomstamSound").components.sound.playSound();
		});
	}
});