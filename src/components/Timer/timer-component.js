// import "aframe"
// import React, {useState} from 'react';
//const [interv, setInterv] = useState();
//const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
//const [status,setStatus]= useState(0);

let interv;

let time={ms:0, s:0, m:0};
let updatedMs = time.ms;
let updatedS = time.s;
let updatedM = time.m;

let status=0;

let timeShown;

let text;


window.AFRAME.registerComponent('timer', {

    // schema:{
    //     time: {
    //         ms:{type: "int", default: 0},
    //         s:{type: "int", default: 0},
    //         m:{type: "int", default: 0}},
    //     status: {type: "int", default: 1}
    // },

    init: function () {
        text = document.createElement('a-text');
        text.setAttribute('value',time.m+":"+time.s+":"+time.ms);
        text.setAttribute('font','https://cdn.aframe.io/fonts/Monoid.fnt')
        this.el.appendChild(text);
        status=1

    },

    start () {
        this.updateTime();
        interv=setInterval(this.updateTime, 100000)
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

        // if (updatedS===10){
        //     this.stop()
        // }

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

        text.setAttribute('value',time.m+":"+time.s+":"+time.ms);
        timeShown=time.m+":"+time.s+":"+time.ms;
    },

    stop (){
        status=2;
    },

    tick(){
        if (status===1){
            console.log(timeShown);
            this.start();
        }
    },

});
