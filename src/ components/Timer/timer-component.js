import "aframe"
import React, {useState} from 'react';
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


AFRAME.registerComponent('timer', {

    init: function () {
        console.log('Hello, World!');
    },

    start () {
        this.begin();
        status=1;
        interv=setInterval(this.begin, 100000)
    },

    begin (){
        if(updatedS === 60){
            updatedM++;
            updatedS = 0;
        }
        if(updatedMs === 100){
            updatedS++;
            updatedMs = 0;
        }
        updatedMs++;

        time.ms=updatedMs;
        time.s=updatedS;
        time.m=updatedM;
        timeShown=time.m+":"+time.s+":"+time.ms;
    },

    stop (){
        clearInterval(interv);
        status=2;
    },

    tick(){
        console.log(timeShown);
        this.start();
    }

});