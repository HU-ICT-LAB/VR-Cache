window.AFRAME.registerComponent("campfire", {
	init: function () {
		const element = this.el;
		element.setAttribute("gltf-model", "assets/campfire.gltf");
		element.setAttribute("static-body", "shape:mesh");
	}
});