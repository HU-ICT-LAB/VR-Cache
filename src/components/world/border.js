window.AFRAME.registerComponent("border", {
	init: function () {
		const element = this.el;
		element.setAttribute("material", "opacity: 0;");
		element.setAttribute("width", "100");
		element.setAttribute("height", "20");
		element.setAttribute("depth", "1");
		element.setAttribute("static-body", null);
		element.setAttribute("Class", "interactable");

		this.el.addEventListener("raycaster-intersected", function () {
			sessionStorage.setItem("object", "wereldborder");
		});

		this.el.addEventListener("raycaster-intersected-cleared", function () {
			sessionStorage.setItem("object", "");
		});
	}
});