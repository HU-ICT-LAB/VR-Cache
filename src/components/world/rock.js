window.AFRAME.registerComponent("rock", {
	schema: {
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

		element.setAttribute("static-body", "shape:mesh");
	}
});