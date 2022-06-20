import {Vector3D} from "./../utils/vector3d";

const DISTANCE_TO_INTERACT = 5;
const DISTANCE_TO_HEAR = 10;

/**
 * Component to check interactions with the cache
 */
window.AFRAME.registerComponent("cache-interaction", {
	inDistance: false,
	inSoundDistance: false,
	inSoundDistanceTriggered: false,
	inDistanceEvent: false,

	/**
	 * Gets called every frame
	 */
	tick() {
		this.checkDistance();
		this.handleEvents();
		this.handleSound();
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
		this.inSoundDistance = result.magnitude() <= DISTANCE_TO_HEAR;
	},

	/**
	 * Handle all the events that are being emitted by this component
	 */
	handleEvents() {
		// If the cache is in range and the event hasn't emitted yet before the cache went out of range
		if (this.inDistance && !this.inDistanceEvent) {
			this.el.emit("enteredCacheRange");
			this.inDistanceEvent = true;
		} else if (!this.inDistance) {
			this.inDistanceEvent = false;
		}
	},

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