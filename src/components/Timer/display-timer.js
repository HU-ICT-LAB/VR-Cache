
window.AFRAME.registerComponent('displaytimer',{

    init: function () {
        let text = document.createElement('a-text');
        text.setAttribute('value','00'+":"+'00'+":"+'00');
        text.setAttribute('font','https://cdn.aframe.io/fonts/Monoid.fnt')
        this.el.appendChild(text);
        this.el.sceneEl.addEventListener('timeUpdated', function (event) {
            text.setAttribute('value',event.detail.updatedTime.m+":"+event.detail.updatedTime.s+":"+event.detail.updatedTime.ms);
        });
    },
});