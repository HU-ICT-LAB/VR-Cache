import {Vector3D} from "../../../../utils/vector3d";

let pressed = true;
window.AFRAME.registerComponent("vibration", {
	init() {
		this.el.addEventListener("triggerdown", this.sonar.bind(this));
		this.el.addEventListener("triggerup", this.sonarStop.bind(this));
	},
	sonar() {
		const cachePosition = document.getElementById("rig").object3D.position;
		const playerPosition = document.getElementById("cache").object3D.position;

		const result = new Vector3D(
			cachePosition.x - playerPosition.x,
			cachePosition.y - playerPosition.y,
			cachePosition.z - playerPosition.z
		);

		this.el.components.haptics.pulse(0.5, result.magnitude() * 250);
		if (pressed) {
			setTimeout(this.sonar(), result.magnitude() * 251);
		}
	},
	sonarStop() {
		pressed = false;
	}
});