import {Vector3D} from "../utils/vector3d";

window.AFRAME.registerComponent("input-handler", {
	init() {
		this.el.addEventListener("abuttondown", this.interact);
	},

	interact() {
		if (this.checkDistance()) {
			document.getElementById("cache").object3D.position.x = 10;
		}
	},

	/**
	 * Checks if the player is in distance of the cache
	 */
	checkDistance() {
		const playerPosition = document.querySelector("[camera]").object3D.position;
		const cachePosition = document.getElementById("cache").object3D.position;

		const result = new Vector3D(
			cachePosition.x - playerPosition.x,
			cachePosition.y - playerPosition.y,
			cachePosition.z - playerPosition.z
		);

		return result.magnitude() <= 5;
	}
});
