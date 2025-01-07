const button = document.getElementById('no');
const rightpos = ["200px","1500px","350px","850px","1350px"]
const toppos = ["300px","300px","700px","100px","700px"]
let i = 0;

button.addEventListener('mouseover', () => {
    if(i == 5){
        i = 0;
    }
    button.style.position = 'absolute';
    button.style.right = rightpos[i];
    button.style.top = toppos[i];
    i++
});

function yayMsg(){
    const hide = document.getElementById('buttons');
    hide.style.display = "none";
    document.getElementById("message").innerHTML = "Yayyy!!! ❤️";
    document.getElementById("question").innerHTML = "See you soonest my loveee!!! ❤️"
    document.getElementById("q2").innerHTML = "I love you sooo muchhh!!! ❤️😙"
    document.getElementById("uwu").src = "cat.gif"
}