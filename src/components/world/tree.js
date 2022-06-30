window.AFRAME.registerComponent("tree", {
	schema: {
		size: {type: "string"}
	},
	init: function () {
		const element = this.el;

		element.setAttribute("geometry", "height: 30; radius: 3.33;");
		element.setAttribute("material", "opacity: 0;");

		this.el.addEventListener("raycaster-intersected", function () {
			sessionStorage.setItem("object", "boom");
		});

		this.el.addEventListener("raycaster-intersected-cleared", function () {
			sessionStorage.setItem("object", "");
		});
	}
});