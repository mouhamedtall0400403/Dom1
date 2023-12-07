var box= document.getElementsByClassName("un")
for(let i=0;i<box.length;i++){
    let prixU=box[i].children[2].children[1]
    let totalU=box[i].children[3].children[1]
    let bntP=box[i].children[4]
    let total=box[i].children[5]
    let bntM=box[i].children[6] 
    let like=box[i].children[7].children[0]
    let delet=box[i].children[7].children[1]
    let qty=parseInt(totalU.innerText)
    let prixUni=parseInt(prixU.innerText)
    bntP.addEventListener('click',function(){
        qty++;
        total.innerText=qty;
        totalU.innerText=prixUni*qty
        somme()
    })
    console.log(bntP)
    bntM.addEventListener('click',function(){
        if (qty>0){
            qty-- 
        }
        total.innerText=qty;
        totalU.innerText=prixUni*qty
        somme()
    })
    console.log(bntM) 

    like. addEventListener('click',function(){
        if (like.style .color=="red"){
            like .style .color ="black"
        }
        else{
            like .style .color ="red"
        }
    })
    let supp=box[i]
if(supp){
    delet.addEventListener("click",function(){
        supp.remove() 
    })
}
 
}
let total=document.getElementById("totalunit")
function somme(){
    let sum=0;
    let tota1=document.getElementsByClassName("total")
    for (let i=0;i<tota1.length;i++){
        let prixtotalunit=parseInt(tota1[i].innerText)
        console.log(prixtotalunit);
        sum=sum+prixtotalunit
    }
    total.innerHTML=sum
}