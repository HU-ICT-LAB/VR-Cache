window.AFRAME.registerComponent("tree", {
	schema: {
		position: {type: "string", default: "0 0 0"},
		size: {type: "string"}
	},
	init: function () {
		const element = document.createElement("a-entity");
		const hitbox = this.el;

		switch (this.data.size) {
		case "m" :
			element.setAttribute("gltf-model", "assets/tree-M.gltf");
			break;
		case "l" :
			element.setAttribute("gltf-model", "assets/tree-L.gltf");
			break;
		case "s" :
			element.setAttribute("gltf-model", "assets/log-M.gltf");
			break;
		default:
		}
		element.setAttribute("position", this.data.position);

		hitbox.setAttribute("static-body", "shape:mesh");
		hitbox.appendChild(element);
	}
});