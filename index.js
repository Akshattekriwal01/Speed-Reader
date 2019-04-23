let text = document.getElementById("text");
let s = "Organisms of many species are specialized into male and female varieties, each known as a sex.[1][2] Sexual reproduction involves the combining and mixing of genetic traits: specialized cells known as gametes combine to form offspring that inherit traits from each parent. The gametes produced by an organism define its sex: males produce small gametes (e.g. spermatozoa, or sperm, in animals; pollen in seed plants) while females produce large gametes (ova, or egg cells). Individual organisms which produce both male and female gametes are termed hermaphroditic.[2] Gametes can be identical in form and function (known as isogamy), but, in many cases, an asymmetry has evolved such that two different types of gametes (heterogametes) exist (known as anisogamy)."
s = s.split(' ');
let i = 0;
let g ;
let play = () => {    
     g = setInterval(()=> {
        if (i<s.length)
        text.innerText = s[i]
        console.log(i);
        i++;
        if(i==s.length){
         clearInterval(g);
        console.log("yoo");
        }
    },180) 
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
//hello();