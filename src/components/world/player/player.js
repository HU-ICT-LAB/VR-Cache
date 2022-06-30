window.AFRAME.registerComponent("player", {
	schema: {
		device: {type: "string"},
		visual: {type: "string"}
	},
	init: function () {
		const element = this.el;
		const displaytimer = document.createElement("a-entity");
		const timer = document.createElement("a-entity");

		displaytimer.setAttribute("display-timer", null);
		displaytimer.setAttribute("position", "1 0.72 -1");
		timer.setAttribute("timer", null);
		timer.setAttribute("position", "0 0 -1");
		timer.setAttribute("id", "timer");

		let visual = "";

		if (sessionStorage.getItem("gamemode") === "blind") {
			visual = "<a-plane id=\"hud\" overlay rotation=\"0 0 0\" position=\"0 0 -0.1\" width=\"1\" height=\"1\" color=\"black\" shadow></a-plane>";
		}
		if (sessionStorage.getItem("gamemode") === "tunnel") {
			visual = "<a-image src='assets/tunnel.png' id=\"hud\" overlay rotation=\"0 0 0\" position=\"0 0 -0.25\"></a-image>";
		}

		switch (this.data.device) {
		case "pc" :
			element.innerHTML =
                    "<a-entity id=\"camera\" position=\"0 1.6 0\">\n" +
                    "     <a-entity camera keyboard-input-handler kinematic-body look-controls wasd-controls pause-component>\n" +
                    "         <a-entity position=\"1 0.72 -1\" display-timer></a-entity>\n" +
                    "         <a-entity position=\"0 0 -1\" id=\"timer\" timer></a-entity>\n" +
                    "     </a-entity>\n" +
                    "</a-entity>";
			break;
		case "oculus" :
			element.innerHTML =
				"            <a-entity display-timer></a-entity>\n" +
				"            <a-entity id=\"timer\" timer></a-entity>\n" +
				"<a-entity id=\"rig\" kinematic-body=\"shape:mesh\">\n" +
				"    <a-entity id=\"camera\" position=\"0 0 0\">\n" +
				"        <a-entity camera look-controls cache-interaction pause-component>"+ visual +"</a-entity>\n" +
				"    </a-entity>\n" +
				"    <a-entity id=\"left\" haptics vibration oculus-touch-controls=\"hand: left\" ></a-entity>\n" +
				"    <a-entity id=\"right\" haptics vibration oculus-touch-controls=\"hand: right\" laser-controls raycaster=\"lineColor: red; lineOpacity: 0.5; far: 1.6; objects: .interactable\" oculus-input-handler player-sound cache-sound oculus-thumbstick-controls=\"acceleration: 20\"></a-entity>\n" +
				"</a-entity>";
			break;
		case "mobile" :
			element.innerHTML =
                "<a-entity id=\"camera\" position=\"0 0 0\">\n" +
                "     <a-entity camera kinematic-body universal-controls cache-interaction pause-component>\n" +
                "         <a-entity position=\"1 0.72 -1\" display-timer></a-entity>\n" +
                "         <a-entity position=\"0 0 -1\" id=\"timer\" timer></a-entity>\n" +
                "     </a-entity>\n" +
                "</a-entity>";
			break;
		default:

		}
	}
})
;