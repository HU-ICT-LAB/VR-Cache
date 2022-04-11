
let time={ms:0, s:0, m:0};
let updatedMs = time.ms;
let updatedS = time.s;
let updatedM = time.m;

let isCounting=true;

window.AFRAME.registerComponent('timer', {

    init: function () {
        isCounting=true
    },

    updateTime (){
        if(updatedS === 60){
            updatedM++;
            updatedS = 0;
        }
        if(updatedMs === 100){
            updatedS++;
            updatedMs = 0;
        }
        updatedMs++;

        if (updatedS<10){
            time.s="0"+updatedS;
        }else {
            time.s=updatedS;
        }
        if (updatedM<10){
            time.m="0"+updatedM;
        }else{
            time.m=updatedM;
        }
        if (updatedMs<10){
            time.ms="0"+updatedMs;
        }else{
            time.ms=updatedMs;
        }

        this.el.emit('timeUpdated', {updatedTime: time}, true);
    },

    sleep(milliseconds) {
        let timeStart = new Date().getTime();
        while (true) {
            let elapsedTime = new Date().getTime() - timeStart;
            if (elapsedTime > milliseconds) {
            break;
            }
        }
    },

    stop (){
        isCounting=false;
    },

    tick(){
        if (isCounting===true){
            this.sleep(10);
            this.updateTime();
        }
    },
});