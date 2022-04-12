const time = {s: 0, m: 0};
let interval;
window.AFRAME.registerComponent("timer", {
    init: function () {
        interval = setInterval(this.updateTime,
            1000);
    },

    updateTime() {
        if (time.s === 60) {
            time.m++;
            time.s = 0;
        }
        time.s++;
        document.getElementById("timer").emit("timeUpdated", {updatedTime: time}, true);
    },

    stop() {
        clearInterval(interval);
    }
});