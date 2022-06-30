window.AFRAME.registerComponent("log", {
	init: function () {
		const element = this.el;

		element.setAttribute("geometry", "height: 6; radius: 1.5;");
		element.setAttribute("material", "opacity: 0;");

		this.el.addEventListener("raycaster-intersected", function () {
			sessionStorage.setItem("object", "kleineBoomstam");
		});

		this.el.addEventListener("raycaster-intersected-cleared", function () {
			sessionStorage.setItem("object", "");
		});
	}
});