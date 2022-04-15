window.AFRAME.registerComponent("rock", {
	schema: {
		position: {type: "string", default: "0 0 0"},
		size: {type: "string"}
	},
	init: function () {
		const element = this.el;

		switch (this.data.size) {
		case "m" :
			element.setAttribute("gltf-model", "assets/rock-M.gltf");
			break;
		case "l" :
			element.setAttribute("gltf-model", "assets/rock-L.gltf");
			break;
		default:
		}
		element.setAttribute("position", this.data.position);

		element.setAttribute("static-body", "shape:mesh");
	}
});