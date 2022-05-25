window.AFRAME.registerComponent("log", {
	init: function () {
		const element = document.createElement("a-entity");
		const hitbox = this.el;

		element.setAttribute("position", hitbox.getAttribute("position"));
		hitbox.removeAttribute("position");
		element.setAttribute("rotation", hitbox.getAttribute("rotation"));
		hitbox.removeAttribute("rotation");
		element.setAttribute("scale", hitbox.getAttribute("scale"));
		hitbox.removeAttribute("scale");
		hitbox.appendChild(element);

		element.setAttribute("description", "name:boomstam;");
		element.setAttribute("gltf-model", "assets/log-M.gltf");
	}
});