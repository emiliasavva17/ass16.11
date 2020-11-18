'use strict';
const $ = function (foo) {
    return document.getElementById(foo);
}
const roll = function (foo) {
    return Math.floor(Math.random() * foo) + 1;
}

let diceinfo=[];







const rollm = function () {

    let count1=0;
    let count2=0;
    let count3=0;
    let count4=0;
    let count5=0;
    let count6=0;
    let sum=0;
    let dicedivs = document.getElementsByClassName('die')
    for (let i = 0; i < NOOFDICE; ++i) {
        let r = roll(6);                // freeze?
        dicedivs[i].innerHTML = r;
        diceinfo[i]=r;
        if (diceinfo[i]==1)
        {
           count1++;
           
        }
        if(r==2)
        {
          count2++;
        }
        if(r==3)
        {
           count3++;
        }
        if(r==4)
        {
            count4++;
        }
        if(r==5)
        {
            count5++;
        }
        if(r==6)
        {
            count6++;
        }
                                        // record the play?
    }
    sum=count1*5+count2*10+count3*15+count4*20+count5*25+count6*30;
    $('p1').innerHTML=count1*5;
    $('p2').innerHTML=count2*10;
    $('p3').innerHTML=count3*15;
    $('p4').innerHTML=count4*20;
    $('p5').innerHTML=count5*25;
    $('p6').innerHTML=count6*30;
    $("sum").innerHTML=sum;
    console.log(count1);

}


const play = function (e) {
    rollm();
};

const makeDie = function () {
    let die = document.createElement('div');
    die.setAttribute('class', 'die');
    return die;
};







const makeButton = function (text, handler) {
    let btn = document.createElement('button');
    let txt = document.createTextNode(text);
    btn.appendChild(txt);
    btn.addEventListener('click', play);
    return btn;
};

const NOOFDICE = 5;
const PLAYS = 3;
let btn;

const doThis = function () {
    for (let i = 0; i < NOOFDICE; ++i) {
        $('diceCup').appendChild(makeDie());
    }


    btn = makeButton('Roll');
    $('main').appendChild(btn);
    $('cpryear').innerHTML = `&copy; nml ${new Date().getFullYear()}`;
    play();
}

window.addEventListener('load', doThis);
