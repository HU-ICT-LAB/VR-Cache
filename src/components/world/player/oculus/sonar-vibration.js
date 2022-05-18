import {Vector3D} from "../../../../utils/vector3d";

window.AFRAME.registerComponent("vibration", {
	schema: {
		duration: {type: "int", default: 200},
		value: {type: "number", default: 0.5}
	},
	init() {
		this.el.addEventListener("triggerdown", this.sonar);
	},
	sonar: function() {
		const cachePosition = this.el.object3D.position;
		const playerPosition = document.getElementById("right").object3D.position;

		const result = new Vector3D(
			cachePosition.x - playerPosition.x,
			cachePosition.y - playerPosition.y,
			cachePosition.z - playerPosition.z
		);

		const pulse = this.duration - result.magnitude() * 10;

		this.el.components.haptics.pulse(0.5, pulse);
	}
});