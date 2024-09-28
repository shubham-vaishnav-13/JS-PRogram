document.getElementById("decresebtn").onclick = function(){
    let vat = document.getElementById("watch").textContent;
    vat = Number(vat);
    vat--;
    document.getElementById("watch").textContent = vat ;
}

document.getElementById("restbtn").onclick = function(){

    document.getElementById("watch").textContent = 0 ;
}

document.getElementById("incresebtn").onclick = function(){
    let vat = document.getElementById("watch").textContent;
    vat = Number(vat);
    vat++;
    document.getElementById("watch").textContent = vat ;
}