window.AFRAME.registerComponent("input-handler", {
	init() {

		this.el.addEventListener("abuttondown", this.print);
	},

	print: function () {
		console.log("AAAAAAAAAAAAAAA");
	}
});
