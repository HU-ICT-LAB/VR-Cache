/**
 * Component to show a timer UI
 */
window.AFRAME.registerComponent("display-timer", {
	init: function () {
		const text = document.createElement("a-text");

		text.setAttribute("value", "00" + ":" + "00");
		text.setAttribute("font", "https://cdn.aframe.io/fonts/Monoid.fnt");
		text.setAttribute("color", "#000000");
		this.el.appendChild(text);

		const component = this;
		this.el.sceneEl.addEventListener("timeUpdated", function (event) {
			text.setAttribute("value", component.makeNumberTwoDigits(event.detail.updatedTime.m) + ":" + component.makeNumberTwoDigits(event.detail.updatedTime.s));
		});
	},

	/**
	 * Put a 0 in front of a number if it is less than 10
	 * @param number
	 * @returns {*}
	 */
	makeNumberTwoDigits(number) {
		return (number < 10 ? "0" : "") + number;
	}
});