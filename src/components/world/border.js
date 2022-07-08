window.AFRAME.registerComponent("border", {
	intersect: false,
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
			this.intersect = true;
		});
		this.el.addEventListener("raycaster-intersected-cleared", function () {
			sessionStorage.setItem("object", "");
			this.intersect = false;
		});
		setInterval(this.vibrate.bind(this), 50);
	},

	vibrate: function () {
		if (this.intersect) {
			document.getElementById("right").components.haptics.pulse(1, 50);
		}
	}
});