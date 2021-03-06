import {Vector3D} from "../../../../utils/vector3d";

window.AFRAME.registerComponent("vibration", {
	pressed: false,
	init() {
		this.el.addEventListener("gripdown", () => {
			this.pressed = true;
		});
		this.el.addEventListener("gripup", () => {
			this.pressed = false;
		});
		setInterval(this.sonar.bind(this), 1500);
	},
	sonar() {
		let pulse;
		if (this.pressed) {
			const cachePosition = document.getElementById("rig").object3D.position;
			const playerPosition = document.getElementById("cache").object3D.position;

			const result = new Vector3D(
				cachePosition.x - playerPosition.x,
				cachePosition.y - playerPosition.y,
				cachePosition.z - playerPosition.z
			);

			pulse = 1300 - result.magnitude() * 65;
			if (pulse > 0) {
				this.el.components.haptics.pulse(0.5, pulse);
			}
		}
	}
});