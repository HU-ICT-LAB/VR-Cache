window.AFRAME.registerComponent("input-handler", {
	init() {
		this.el.addEventListener("abuttondown", this.test);
	},

	test: function () {
		document.getElementById("cache").object3D.position.x = 10;
	}
});
