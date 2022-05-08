window.AFRAME.registerComponent("campfire", {
	init: function () {
		const element = this.el;
		element.setAttribute("gltf-model", "assets/campfire.gltf");
	}
});