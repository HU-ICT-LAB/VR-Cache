window.AFRAME.registerComponent("cache", {
	init() {
		this.el.setAttribute("static-body", null);
		this.el.setAttribute("position", "0.2 1 14.2");
		this.el.setAttribute("color", "#4CC3D9");
		this.el.setAttribute("width", "1");
		this.el.setAttribute("height", "1");
		this.el.setAttribute("depth", "1");
	}
});