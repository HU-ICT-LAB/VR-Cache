import {Vector3D} from "./../utils/vector3d";

const DISTANCE_TO_INTERACT = 5;

/**
 * Component to check interactions with the cache
 */
window.AFRAME.registerComponent("cache-interaction", {
	inDistance: false,

	/**
	 * Gets called every frame
	 */
	tick() {
		this.checkDistance();

		if (this.inDistance) {
			document.getElementById("cache").setAttribute("color", "#d9ff00");
		} else {
			document.getElementById("cache").setAttribute("color", "#4CC3D9");
		}
	},

	/**
	 * Checks if the player is in distance of the cache
	 */
	checkDistance() {
		const playerPosition = this.el.object3D.position;
		const cachePosition = document.getElementById("cache").object3D.position;

		const result = new Vector3D(
			cachePosition.x - playerPosition.x,
			cachePosition.y - playerPosition.y,
			cachePosition.z - playerPosition.z
		);

		this.inDistance = result.magnitude() <= DISTANCE_TO_INTERACT;
	}
});