let text = document.getElementById("text");
let s = "Organisms of many species are specialized into male and female varieties, each known as a sex.[1][2] Sexual reproduction involves the combining and mixing of genetic traits: specialized cells known as gametes combine to form offspring that inherit traits from each parent. The gametes produced by an organism define its sex: males produce small gametes (e.g. spermatozoa, or sperm, in animals; pollen in seed plants) while females produce large gametes (ova, or egg cells). Individual organisms which produce both male and female gametes are termed hermaphroditic.[2] Gametes can be identical in form and function (known as isogamy), but, in many cases, an asymmetry has evolved such that two different types of gametes (heterogametes) exist (known as anisogamy)."
s = s.split(' ');
let i = 0;
let g ;
let speed = 180
let updateProgress = (x)=>{
    document.getElementsByClassName("progress-bar")[0].setAttribute("style", "width: "+x/(s.length/100)+"%");

}
let play = () => {    
     g = setInterval(()=> {
        if (i<s.length)
        text.innerText = s[i]
        i++;
        updateProgress(i);
        if(i==s.length){
         clearInterval(g);
         document.getElementsByClassName("controller")[0].innerText = "Restart"
         i =0 ;
         if(num%2 == 1){
             num++;
         }
        }
    },speed) 
};
let pause = ()=>{
    clearInterval(g);
}
let num = 0;
let control = ()=> {
    if(num%2 ==0){
        document.getElementsByClassName("controller")[0].innerText = "Pause"
        num++ ;       
        play();

    }
    else{
        document.getElementsByClassName("controller")[0].innerText = "Play"
        num++ ;
        pause();
    }

}
//10 word back funciton
let back = ()=>{
    if(i>10)
    i = i-10;
    updateProgress(i);

}
// 10 word forward functio\
let forward = ()=>{
    if(i<s.length-11)
    i = i+10;
    updateProgress(i);

}

// click on a position in the scrollbar
document.getElementsByClassName('progress')[0].addEventListener('click', function (e) {
    var x = e.pageX - this.offsetLeft, // or e.offsetX (less support, though)
        y = e.pageY - this.offsetTop,  // or e.offsetY
        clickedValue = x * this.max / this.offsetWidth;
    x= x/window.innerWidth*100
    i = Math.floor(x/100*(s.length));
    updateProgress(i);
});

//click on the bar to change the speed
document.getElementById("speed").addEventListener('click', function (e) {
    var x = e.pageX - this.offsetLeft, // or e.offsetX (less support, though)
        y = e.pageY - this.offsetTop,  // or e.offsetY
        clickedValue = x * this.max / this.offsetWidth;
    console.log(x, y);
    console.log(window.innerWidth);
    x= x/window.innerWidth*100
    console.log(x, y);
    //i = Math.floor(x/100*(s.length));
});

//hello();