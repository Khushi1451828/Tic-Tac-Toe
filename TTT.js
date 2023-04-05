let turn=" X";
let music1 =new Audio("click.mp3");
let music2=new Audio("win.mp3");
let gameover=false;
const tochangeturn=()=>{
    return turn===" X"?" O":" X";
}
const checkwin=()=>
{
let boxtext=document.getElementsByClassName("element1");
let wins=[
    [0,1,2,5,5,0],
    [3,4,5,5,15,0],
    [6,7,8,5,25,0],
    [0,3,6,-5,15,90],
    [1,4,7,5,15,90],
    [2,5,8,15,15,90],
    [0,4,8,5,15,45],
    [2,4,6,5,15,135],
]
wins.forEach(ele=>{
    if((boxtext[ele[0]].innerText===boxtext[ele[1]].innerText)&&(boxtext[ele[2]].innerText===boxtext[ele[1]].innerText)&&(boxtext[ele[0]].innerText!==''))
   { document.querySelector(".info1").innerText=boxtext[ele[0]].innerText+" WON 🥳";
    gameover=true;
    music2.play();
    document.querySelector(".img").getElementsByTagName('img')[0].style.width="200px";
    document.querySelector(".line").style.width="20vw";
    document.querySelector(".line").style.transform=`translate(${ele[3]}vw,${ele[4]}vw)rotate(${ele[5]}deg)`;
}

})
}
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let e=element.querySelector(".element1");
    element.addEventListener('click',()=>{
    if(e.innerText===''){
        e.innerText=turn;
        turn=tochangeturn();
        music1.play();
        checkwin();
        if(!gameover){
        document.getElementsByClassName("info1")[0].innerText="Turn for  "+ turn;
        }
    }
    })
})
reset.addEventListener('click',()=>{
    let boxt=document.querySelectorAll(".element1");
    Array.from(boxt).forEach(element=>{
        element.innerText=" ";
    });
    // turn="X";
    gameover=false;
    document.querySelector(".line").style.width="0vw";
    document.getElementsByClassName("info1")[0].innerText="Turn for  "+ turn;
    document.querySelector(".img").getElementsByTagName('img')[0].style.width="0px";
})