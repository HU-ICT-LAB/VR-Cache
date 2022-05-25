window.AFRAME.registerComponent("tree", {
	schema: {
		size: {type: "string"}
	},
	init: function () {
		const element = this.el;

		element.setAttribute("description", "name:boom;");
		element.setAttribute("geometry", "height: 30; radius: 3.33;");
		element.setAttribute("material", "opacity: 0.1;");
	}
});