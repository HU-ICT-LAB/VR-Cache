import {Vector3D} from "../../../../utils/vector3d";

window.AFRAME.registerComponent("keyboard-input-handler", {
	init() {
		document.addEventListener("keydown", this.interact);
	},

	interact: function (e) {
		if (e.key === "e") {
			const playerPosition = document.querySelector("[camera]").object3D.position;
			const cachePosition = document.getElementById("cache").object3D.position;

			const result = new Vector3D(
				cachePosition.x - playerPosition.x,
				cachePosition.y - playerPosition.y,
				cachePosition.z - playerPosition.z
			);

			if (result.magnitude() <= 3) {
				window.location.href = "./succes.html";
			}
		}
	}
});
