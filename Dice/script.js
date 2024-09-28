document.getElementById("btndice").onclick = function() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    document.getElementById("cnt").style.display = "block";
    document.getElementById('cnt').innerHTML = '';

    let img = document.createElement('img'); 

    switch (randomNumber) {
        case 1:
            img.src = '../images/one.png'; 
            break;
        case 2:
            img.src = '../images/two.png';
            break;
        case 3:
            img.src = '../images/three.png';
            break;
        case 4:
            img.src = '../images/four.png';
            break;
        case 5:
            img.src = '../images/five.png';
            break;
        case 6:
            img.src = '../images/six.png';
            break;
    }
    
    document.getElementById('cnt').appendChild(img);
};
