document.getElementById('calculate').addEventListener("click",()=>{
    let mp = document.querySelector("#mp").value;
    let sp = document.querySelector("#sp").value;
    let dis = mp - sp;
    let disper = ((mp-sp) / mp) * 100;
    let res = document.querySelector("#res");
    res.innerHTML = `Discount is : ${dis} <br> Discount percentage is : ${disper}%`;
})