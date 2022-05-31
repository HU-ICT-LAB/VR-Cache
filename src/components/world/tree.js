window.AFRAME.registerComponent("tree", {
	schema: {
		size: {type: "string"}
	},
	init: function () {
		const element = this.el;

		element.setAttribute("geometry", "height: 30; radius: 3.33;");
		element.setAttribute("material", "opacity: 0.1;");

		this.el.addEventListener("raycaster-intersected", function () {
			document.getElementById("boomSound").components.sound.playSound();
		});
	}
});