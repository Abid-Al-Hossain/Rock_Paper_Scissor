let userS=0
let compS=0
let choices=document.querySelectorAll(".choice")
let message=document.querySelector("#msg")
let user=document.querySelector("#user-score")
let compu=document.querySelector("#comp-score")
let youc=document.querySelector(".choice1 img")
let compc=document.querySelector(".choice2 img")


let comp=()=>{
    let op=["rock","paper","scissors"]
    let p=op[Math.floor(Math.random()*3)]
    compc.src=`./image/${p}.png`
    compc.style.animationName="ani2"
    compc.style.animationDuration=".3s"
    setTimeout(()=>{
        compc.style.animationName="none"
    },300)
    // compc.style.animationName="none"
    return p
}

let play=(cid)=>{
    let q=comp()
    console.log("Computer chose",q)
    if(q===cid){
        let str="Computer chose "+q+".It's a draw"
        message.innerText=str
        message.style.backgroundColor = "#b8860b"
    }
    else{
        if(q==="rock"){
            if(cid==="scissors"){
                message.innerText="Computer chose rock.You lost"
                compS++
                compu.innerText=compS
                message.style.backgroundColor = "red"
            }
            else{
                message.innerText="Computer chose rock.You won"
                userS++
                user.innerText=userS
                message.style.backgroundColor = "green"
            }
        }
        if(q==="paper"){
            if(cid==="rock"){
                message.innerText="Computer chose paper.You lost"
                compS++
                compu.innerText=compS
                message.style.backgroundColor = "red"
            }
            else{
                message.innerText="Computer chose paper.You won"
                userS++
                user.innerText=userS
                message.style.backgroundColor = "green"
            }
        }
        if(q==="scissors"){
            if(cid==="paper"){
                message.innerText="Computer chose scissors.You lost"
                compS++
                compu.innerText=compS
                message.style.backgroundColor = "red"
            }
            else{
                message.innerText="Computer chose scissors.You won"
                userS++
                user.innerText=userS
                message.style.backgroundColor = "green"
            }
        }
    }
    
}


choices.forEach((val)=>{
    val.addEventListener("click",()=>{
        let cid=val.getAttribute("id")
        youc.src=`./image/${cid}.png`
        let audio=new Audio(`sounds/${cid}.mp3`)
        audio.play()
        youc.style.animationName="ani2"
        youc.style.animationDuration=".3s"
        setTimeout(()=>{
            youc.style.animationName="none"
        },300)
        play(cid)
        // compc.style.animationName="none"
    })
})
document.addEventListener("keypress",(evt)=>{
    //console.log(evt.key)
    let keys=evt.key
    let cid
    if(keys=="r"){
        cid="rock"
        let audio=new Audio(`sounds/${cid}.mp3`)
        audio.play()
    }
    else if(keys=="p"){
        cid="paper"
        let audio=new Audio(`sounds/${cid}.mp3`)
        audio.play()
    }
    else if(keys=="s"){
        cid="scissors"
        let audio=new Audio(`sounds/${cid}.mp3`)
        audio.play()
    }else{
        cid="error"
        let audio=new Audio(`sounds/${cid}.mp3`)
        audio.play()
        setTimeout(()=>{
            alert("Invalid input")
        },10)

        return
    }  
    youc.src=`./image/${cid}.png`
    youc.style.animationName="ani2"
    youc.style.animationDuration=".3s"
    setTimeout(()=>{
        youc.style.animationName="none"
    },300)
    play(cid)
        // compc.style.animationName="none" 
})