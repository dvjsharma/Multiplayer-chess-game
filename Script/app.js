ColorCodes={
    light: "#ffce9e",
    dark: "#d18b47",
};
//  to add alternate colors to the chess board
let cells=document.getElementsByClassName("cell");
let c=0;
let flag=true;
for(let i=0; i<cells.length; i++){
    if(flag===true){
        cells[i].style.backgroundColor=`${ColorCodes.light}`;
        flag=false;
        c++;
    }
    else{
        cells[i].style.backgroundColor=`${ColorCodes.dark}`;
        flag=true;
        c++;
    }
    if(c%8===0){
        flag=(!flag);
        c=0;
    }
}  
//adding intial images
const images={
    rook: {f:"rook_b",s:"rook_w"},
    knight: {f:"knight_b",s:"knight_w"},
    bishop: {f:"bishop_b",s:"bishop_w"},
    queen: {f:"queen_b",s:"queen_w"},
    king: {f:"king_b",s:"king_w"},
    pawn: {f:"pawn_b",s:"pawn_w"},
}
cells[0].innerHTML=`<img class="img rook_b"src="img-src/rook_b.png" alt=""></img>`;
// cells[0].classList.add("");
cells[1].innerHTML=`<img class="img knight_b"src="img-src/knight_b.png" alt=""></img>`;
// cells[1].classList.add("");
cells[2].innerHTML=`<img class="img bishop_b"src="img-src/bishop_b.png" alt=""></img>`;
// cells[2].classList.add("");
cells[3].innerHTML=`<img class="img queen_b"src="img-src/queen_b.png" alt=""></img>`;
// cells[3].classList.add("");
cells[4].innerHTML=`<img class="img king_b"src="img-src/king_b.png" alt=""></img>`;
// cells[4].classList.add("");
cells[5].innerHTML=`<img class="img bishop_b"src="img-src/bishop_b.png" alt=""></img>`;
// cells[5].classList.add("bishop_b");
cells[6].innerHTML=`<img class="img knight_b"src="img-src/knight_b.png" alt=""></img>`;
// cells[6].classList.add("knight_b");
cells[7].innerHTML=`<img class="img rook_b"src="img-src/rook_b.png" alt=""></img>`;
// cells[7].classList.add("rook_b");


for(let i=8; i<16; i++){
    cells[i].innerHTML=`<img class="img pawn_b"src="img-src/pawn_b.png" alt=""></img>`;
}
for(let i=48; i<56; i++){
    cells[i].innerHTML=`<img class="img pawn_w"src="img-src/pawn_w.png" alt=""></img>`;
}

cells[56].innerHTML=`<img class="img rook_w"src="img-src/rook_w.png" alt=""></img> <p></p>`;
// cells[56].innerText="76";
cells[57].innerHTML=`<img class="img knight_w"src="img-src/knight_w.png" alt=""></img>`;
// cells[57].classList.add("");
cells[58].innerHTML=`<img class="img bishop_w"src="img-src/bishop_w.png" alt=""></img>`;
// cells[58].classList.add("");
cells[59].innerHTML=`<img class="img queen_w"src="img-src/queen_w.png" alt=""></img>`;
// cells[59].classList.add("");
cells[60].innerHTML=`<img class="img king_w"src="img-src/king_w.png" alt=""></img>`;
// cells[60].classList.add("");
cells[61].innerHTML=`<img class="img bishop_w"src="img-src/bishop_w.png" alt=""></img>`;
// cells[61].classList.add("");
cells[62].innerHTML=`<img class="img knight_w"src="img-src/knight_w.png" alt=""></img>`;
// cells[62].classList.add("");
cells[63].innerHTML=`<img class="img rook_w"src="img-src/rook_w.png" alt=""></img>`;
// cells[63].classList.add("");

//defining behaviours
function rook(){

}








let turn="white";
for(let i=0; i<cells.length; i++){
    cells[i].addEventListener('click',(e)=>{
        if(e.target.classList[0]!=="img"){
            return;
        }
        let temp=e.target.classList;
        let color=temp[1][temp[1].length-1]
        let key=temp[1].slice(0, temp[1].length-2);
        // console.log(color);
        // console.log(key);
        if((color==='b' && turn==="white") || (color==='w' && turn==="black")){
            alert("it's not your turn :)");
            return;
        }

        if(turn==="white") turn="black";
        else turn="white";

        if(key==="rook"){
            // console.log(e.target.parentNode.id);
            rook(e.target.parentNode.id, color);
        }
        else if(key==="knight"){
            // console.log(e.target.parentNode.id);
            knight(e.target.parentNode.id, color);
        }
        else if(key==="bishop"){
            // console.log(e.target.parentNode.id);
            bishop(e.target.parentNode.id, color);
        }
        else if(key==="king"){
            // console.log(e.target.parentNode.id);
            king(e.target.parentNode.id, color);
        }
        else if(key==="queen"){
            // console.log(e.target.parentNode.id);
            queen(e.target.parentNode.id, color);
        }
        else if(key==="pawn"){
            // console.log(e.target.parentNode.id);
            pawn(e.target.parentNode.id, color);
        }
    })
}