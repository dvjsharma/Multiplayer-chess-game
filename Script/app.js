ColorCodes={
    light: "#ffce9e",
    dark: "#d18b47",
};

let turn="w";

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
cells[1].innerHTML=`<img class="img knight_b"src="img-src/knight_b.png" alt=""></img>`;
cells[2].innerHTML=`<img class="img bishop_b"src="img-src/bishop_b.png" alt=""></img>`;
cells[3].innerHTML=`<img class="img queen_b"src="img-src/queen_b.png" alt=""></img>`;
cells[4].innerHTML=`<img class="img king_b"src="img-src/king_b.png" alt=""></img>`;
cells[5].innerHTML=`<img class="img bishop_b"src="img-src/bishop_b.png" alt=""></img>`;
cells[6].innerHTML=`<img class="img knight_b"src="img-src/knight_b.png" alt=""></img>`;
cells[7].innerHTML=`<img class="img rook_b"src="img-src/rook_b.png" alt=""></img>`;


for(let i=8; i<16; i++){
    cells[i].innerHTML=`<img class="img pawn_b"src="img-src/pawn_b.png" alt=""></img>`;
}
for(let i=48; i<56; i++){
    cells[i].innerHTML=`<img class="img pawn_w"src="img-src/pawn_w.png" alt=""></img>`;
}

cells[34].innerHTML=`<img class="img rook_w"src="img-src/rook_w.png" alt=""></img>`;
cells[57].innerHTML=`<img class="img knight_w"src="img-src/knight_w.png" alt=""></img>`;
cells[58].innerHTML=`<img class="img bishop_w"src="img-src/bishop_w.png" alt=""></img>`;
cells[59].innerHTML=`<img class="img queen_w"src="img-src/queen_w.png" alt=""></img>`;
cells[60].innerHTML=`<img class="img king_w"src="img-src/king_w.png" alt=""></img>`;
cells[61].innerHTML=`<img class="img bishop_w"src="img-src/bishop_w.png" alt=""></img>`;
cells[62].innerHTML=`<img class="img knight_w"src="img-src/knight_w.png" alt=""></img>`;
cells[44].innerHTML=`<img class="img rook_w"src="img-src/rook_w.png" alt=""></img>`;

//general behaviour for all functions
function behaviour(r,c, nums){
    const id=r+c;
    const inner=document.getElementById(`${id}`).innerHTML;
    const container=document.getElementsByClassName("container");
    container[0].addEventListener('click',(e)=>{
        if(e.target.parentNode.id===id){
            behaviour(r,c);
            return;
        }
        // console.log(e.target);
        // console.log(nums);
        if(nums.includes(e.target)) {
            e.target.innerHTML=`${inner}`;
            document.getElementById(`${id}`).innerHTML=``;
            for(let i=0; i<nums.length; i++){
                nums[i].classList.remove("kill", "active");
            }
        } 
        else{
            for(let i=0; i<nums.length; i++){
                nums[i].classList.remove("kill", "active");
            }
        }
    });
}
//class and logic add function 
function datalistner(div, coloro){
    if(div.innerHTML.length!==0){                               //%change this to 0 later
        let temp=div.children[0].classList[1].length
        let color=div.children[0].classList[1][temp-1];
        if(coloro==="w"){
            if(color==="w"){
                return [false, div];
            }
            else{
                div.classList.add("kill");
                return [false, div];
            }
        }
        else if(coloro==="b"){
            if(color==="b"){
                return [false, div];
            }
            else{
                div.classList.add("kill");
                return [false, div];
            }
        }
    }
    else{
        div.classList.add("active");
        return [true, div];
    }
}
//color and key function
function data(r,c){
    let Div=document.getElementById(`${r}${c}`);
    return Div;
}


//defining behaviours
function rook(string,coloro){
    let nums=[];
    let r= parseInt(string[0]), c=parseInt(string[1]);
    //for +y
    for(let i=r-1; i>=0; i--){
        let div=data(i,c);
        let flag=datalistner(div, coloro);
        if(flag[0]===false){
            if(flag[1].classList[1]==="kill"){
                nums.push(flag[1]);
            }
            break;
        }
        else{
        nums.push(flag[1]);
        }
    }
    // for -y
    for(let i=r+1; i<8; i++){
        let div=data(i,c);
        let flag=datalistner(div, coloro);
        if(flag[0]===false){
            if(flag[1].classList[1]==="kill"){
                nums.push(flag[1]);
            }
            break;
        }
        else{
            nums.push(flag[1]);
        }
    }
    // //for +x
    for(let i=c+1; i<8; i++){
        let div=data(r,i);
        let flag=datalistner(div, coloro);
        if(flag[0]===false){
            if(flag[1].classList[1]==="kill"){
                nums.push(flag[1]);
            }
            break;
        }
        else{
            nums.push(flag[1]);
        }
    }
    // //for -x
    for(let i=c-1; i>=0; i--){
        let div=data(r,i);
        let flag=datalistner(div, coloro);
        if(flag[0]===false){
            if(flag[1].classList[1]==="kill"){
                nums.push(flag[1]);
            }
            break;
        }
        else{
            nums.push(flag[1]);
        }
    }
    behaviour(String(r),String(c), nums);
}







for(let i=0; i<cells.length; i++){
    cells[i].addEventListener('click',(e)=>{
        let temp=e.target.classList;
        let color=temp[1][temp[1].length-1]
        let key=temp[1].slice(0, temp[1].length-2);
        if(e.target.classList[0]!=="img" || (turn==="w" && color==="b") || (turn==="b" && color==="w")){
            return;
        }
        // console.log(color);
        // console.log(key);
        if((color==='b' && turn==="white") || (color==='w' && turn==="black")){
            alert("it's not your turn :)");
            return;
        }

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