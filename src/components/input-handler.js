import {Vector3D} from "../utils/vector3d";

window.AFRAME.registerComponent("input-handler", {
	init() {
		this.el.addEventListener("abuttondown", this.interact);
	},

	interact: function () {
		const playerPosition = document.getElementById("rig").object3D.position;
		const cachePosition = document.getElementById("cache").object3D.position;

		const result = new Vector3D(
			cachePosition.x - playerPosition.x,
			cachePosition.y - playerPosition.y,
			cachePosition.z - playerPosition.z
		);

		if (result.magnitude() <= 5) {
			document.getElementById("cache").object3D.position.x = 10;
		}
	}
});
