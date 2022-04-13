window.AFRAME.registerComponent("displaytimer", {

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
    makeNumberTwoDigits(number) {
        return (number < 10 ? "0" : "") + number;
    }
});