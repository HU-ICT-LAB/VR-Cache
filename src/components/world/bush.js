window.AFRAME.registerComponent("bush", {
	schema: {
		size: {type: "string"}
	},
	init: function () {
		const element = this.el;

		switch (this.data.size) {
		case "m" :
			element.setAttribute("gltf-model", "assets/bush-M.gltf");
			break;
		case "l" :
			element.setAttribute("gltf-model", "assets/bush-L.gltf");
			break;
		default:
		}

		element.setAttribute("static-body", "shape:mesh");
	}
});