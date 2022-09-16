let b = document.getElementById("carogame");
let bang = [];
let dulieu= "";
for (let i = 0; i<5; i++) {
    bang[i] = new Array(0, 0, 0, 0, 0);
}
    for (let i = 0; i<5; i++) {
        dulieu += "<br/>";
        for (let j = 0; j<5; j++){
            dulieu += bang[i][j] + "&nbsp;&nbsp;";
        }
}
dulieu += "<br/><br/><input type='button' value='Change value' onclick='changevalue()'>"
b.innerHTML = dulieu;
    function changevalue() {
        let positionA = prompt("Nhap A:");
        let positionB = prompt("Nhap B:");
        dulieu = "";
        bang[positionA][positionB] = "x";
        for (let i = 0; i < 5; i++) {
            dulieu += "<br/>";
            for (let j = 0; j < 5; j++) {
                dulieu += bang[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
            }
        }
        dulieu += "<br/><br/><input type='button' value='Change value' onclick='changevalue()'>"
        b.innerHTML = "<hr/>" + dulieu;
    }


