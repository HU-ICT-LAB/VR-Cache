window.AFRAME.registerComponent("tree", {
	schema: {
		size: {type: "string"}
	},
	init: function () {
		const element = document.createElement("a-entity");
		const hitbox = this.el;

		element.setAttribute("position", hitbox.getAttribute("position"));
		hitbox.removeAttribute("position");
		hitbox.appendChild(element);

		switch (this.data.size) {
		case "m" :
			element.setAttribute("gltf-model", "assets/tree-M.gltf");
			break;
		case "l" :
			element.setAttribute("gltf-model", "assets/tree-L.gltf");
			break;
		default:
		}

		hitbox.setAttribute("static-body", "shape:mesh");
	}
});