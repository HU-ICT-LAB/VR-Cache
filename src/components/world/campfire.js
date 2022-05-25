window.AFRAME.registerComponent("campfire", {
	init: function () {
		const element = this.el;

		element.setAttribute("description", "name:kampvuur;");
		element.setAttribute("geometry", "height: 5.06; radiusBottom: 4.30; radiusTop: 1.56");
		element.setAttribute("material", "opacity: 0.1;");
	}
});