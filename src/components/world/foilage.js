window.AFRAME.registerComponent("foilage", {
	schema: {
		position: {type: "string", default: "0 0 0"},
		type: {type: "string"}
	},
	init: function () {
		const element = this.el;

		switch (this.data.type) {
		case "branch" :
			element.setAttribute("gltf-model", "assets/foilage-branch.gltf");
			break;
		case "grass1" :
			element.setAttribute("gltf-model", "assets/foilage-grass-1.gltf");
			break;
		case "grass2" :
			element.setAttribute("gltf-model", "assets/foilage-grass-2.gltf");
			break;
		case "shroom1" :
			element.setAttribute("gltf-model", "assets/foilage-shroom1.gltf");
			break;
		case "shroom2" :
			element.setAttribute("gltf-model", "assets/foilage-shroom2.gltf");
			break;
		default:
		}
		element.setAttribute("position", this.data.position);
	}
});