import {Vector3D} from "./../utils/vector3d";

const DISTANCE_TO_HEAR = 10;

/**
 * Component to check interactions with the cache
 */
window.AFRAME.registerComponent("cache-sound", {
	inSoundDistance: false,
	inSoundDistanceTriggered: false,

	/**
	 * Gets called every frame
	 */
	tick() {
		this.checkDistance();
		this.handleSound();
	},

	/**
	 * Checks if the player is in distance of the cache
	 */
	checkDistance() {
		const playerPosition = document.getElementById("rig").object3D.position;
		const cachePosition = document.getElementById("cache").object3D.position;

		const result = new Vector3D(
			cachePosition.x - playerPosition.x,
			cachePosition.y - playerPosition.y,
			cachePosition.z - playerPosition.z
		);

		this.inSoundDistance = result.magnitude() <= DISTANCE_TO_HEAR;
	},

	/**
	 * Handle all the events that are being emitted by this component
	 */

	handleSound() {
		if (this.inSoundDistance && !this.inSoundDistanceTriggered) {
			document.querySelector("#cache").components.sound.playSound();
			this.inSoundDistanceTriggered = true;
		} else if (!this.inSoundDistance) {
			document.querySelector("#cache").components.sound.stopSound();
			this.inSoundDistanceTriggered = false;
		}
	}
});