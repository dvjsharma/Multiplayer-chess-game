ColorCodes={
    light: "#ffce9e",
    dark: "#d18b47",
};

//initial global calls
let turn="w";
let cells=document.getElementsByClassName("cell");
let flagg=true;
let fr=null, fc=null, fnums=[];
let pawncall=false;
let pawncontrol=false;

//for setting the alternate chessboard color schema
function ColorSetup(){
    //  to add alternate colors to the chess board
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
}
//obj to access the images anytime
const images={
    rook: {f:"rook_b",s:"rook_w"},
    knight: {f:"knight_b",s:"knight_w"},
    bishop: {f:"bishop_b",s:"bishop_w"},
    queen: {f:"queen_b",s:"queen_w"},
    king: {f:"king_b",s:"king_w"},
    pawn: {f:"pawn_b",s:"pawn_w"},
}
//to set-up all the keys to initial values
function InitialBuild(){
    cells[34].innerHTML=`<img class="img rook_b"src="img-src/rook_b.png" alt=""></img>`;
    cells[1].innerHTML=`<img class="img knight_b"src="img-src/knight_b.png" alt=""></img>`;
    cells[44].innerHTML=`<img class="img bishop_b"src="img-src/bishop_b.png" alt=""></img>`;
    cells[3].innerHTML=`<img class="img queen_b"src="img-src/queen_b.png" alt=""></img>`;
    cells[24].innerHTML=`<img class="img king_b"src="img-src/king_b.png" alt=""></img>`;
    cells[5].innerHTML=`<img class="img bishop_b"src="img-src/bishop_b.png" alt=""></img>`;
    cells[6].innerHTML=`<img class="img knight_b"src="img-src/knight_b.png" alt=""></img>`;
    cells[7].innerHTML=`<img class="img rook_b"src="img-src/rook_b.png" alt=""></img>`;


    for(let i=8; i<16; i++){
        cells[i].innerHTML=`<img class="img pawn_b" id="first" src="img-src/pawn_b.png" alt=""></img>`;
    }
    for(let i=48; i<56; i++){
        cells[i].innerHTML=`<img class="img pawn_w" id="first" src="img-src/pawn_w.png" alt=""></img>`;
    }

    cells[56].innerHTML=`<img class="img rook_w"src="img-src/rook_w.png" alt=""></img>`;
    cells[57].innerHTML=`<img class="img knight_w"src="img-src/knight_w.png" alt=""></img>`;
    cells[58].innerHTML=`<img class="img bishop_w"src="img-src/bishop_w.png" alt=""></img>`;
    cells[59].innerHTML=`<img class="img queen_w"src="img-src/queen_w.png" alt=""></img>`;
    cells[60].innerHTML=`<img class="img king_w"src="img-src/king_w.png" alt=""></img>`;
    cells[61].innerHTML=`<img class="img bishop_w"src="img-src/bishop_w.png" alt=""></img>`;
    cells[62].innerHTML=`<img class="img knight_w"src="img-src/knight_w.png" alt=""></img>`;
    cells[63].innerHTML=`<img class="img rook_w"src="img-src/rook_w.png" alt=""></img>`;
}
//class and logic add function 
function datalistner(div, coloro){
    if(div.innerHTML.length!==0){                               //%change this to 0 later
        let temp=div.children[0].classList[1].length
        let color=div.children[0].classList[1][temp-1];
        if(coloro==="w"){
            if(pawncall===false){
                if(color==="w"){
                    return [false, div];
                }
                else{
                    div.classList.add("kill");
                    return [false, div];
                }
            }
            else{
                if(color==="w"){
                    return [false, div];
                }
                else{
                    return [false, div];
                }
            }
        }
        else if(coloro==="b"){
            if(pawncall===false){
                if(color==="b"){
                    return [false, div];
                }
                else{
                    div.classList.add("kill");
                    return [false, div];
                }
            }
            else{
                if(color==="w"){
                    return [false, div];
                }
                else{
                    return [false, div];
                }
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
// //optimisation for knight
// function knightcall(rc,cc,coloro){
//     let nums=[];
//     if(rc>=0 && rc<=7 && cc<=7 && cc>=0){
//         let div=data(rc,cc);
//         let flag=datalistner(div, coloro);
//         if(flag[0]===false){
//             if(flag[1].classList[1]==="kill"){
//                 nums.push(flag[1]);
//             }
//         }
//         else{
//         nums.push(flag[1]);
//         }
//     }
//     return nums;
// }


//defining functions for each key
function rook(string,coloro,f){
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
    if(f===false){
    fr=String(r); fc=String(c); fnums=nums;
    }
    else{
        fr=String(r); fc=String(c);
        for(let p=0; p<nums.length; p++){
            fnums.push(nums[p]);
        }
    }
}

function knight(string,coloro){
    let nums=[];
    let r= parseInt(string[0]), c=parseInt(string[1]);
    let rc=r, cc=c;
    //for +y
    rc-=2; cc++;
    if(rc>=0 && rc<=7 && cc<=7 && cc>=0){
        let div=data(rc,cc);
        let flag=datalistner(div, coloro);
        if(flag[0]===false){
            if(flag[1].classList[1]==="kill"){
                nums.push(flag[1]);
            }
        }
        else{
        nums.push(flag[1]);
        }
    }
    cc-=2; 
    if(rc>=0 && rc<=7 && cc<=7 && cc>=0){
        let div=data(rc,cc);
        let flag=datalistner(div, coloro);
        if(flag[0]===false){
            if(flag[1].classList[1]==="kill"){
                nums.push(flag[1]);
            }
        }
        else{
        nums.push(flag[1]);
        }
    }
    rc++, cc--;
    if(rc>=0 && rc<=7 && cc<=7 && cc>=0){
        let div=data(rc,cc);
        let flag=datalistner(div, coloro);
        if(flag[0]===false){
            if(flag[1].classList[1]==="kill"){
                nums.push(flag[1]);
            }
        }
        else{
        nums.push(flag[1]);
        }
    }
    cc+=4;
    if(rc>=0 && rc<=7 && cc<=7 && cc>=0){
        let div=data(rc,cc);
        let flag=datalistner(div, coloro);
        if(flag[0]===false){
            if(flag[1].classList[1]==="kill"){
                nums.push(flag[1]);
            }
        }
        else{
        nums.push(flag[1]);
        }
    }
    rc+=2;
    if(rc>=0 && rc<=7 && cc<=7 && cc>=0){
        let div=data(rc,cc);
        let flag=datalistner(div, coloro);
        if(flag[0]===false){
            if(flag[1].classList[1]==="kill"){
                nums.push(flag[1]);
            }
        }
        else{
        nums.push(flag[1]);
        }
    }
    cc-=4;
    if(rc>=0 && rc<=7 && cc<=7 && cc>=0){
        let div=data(rc,cc);
        let flag=datalistner(div, coloro);
        if(flag[0]===false){
            if(flag[1].classList[1]==="kill"){
                nums.push(flag[1]);
            }
        }
        else{
        nums.push(flag[1]);
        }
    }
    rc++, cc++;
    if(rc>=0 && rc<=7 && cc<=7 && cc>=0){
        let div=data(rc,cc);
        let flag=datalistner(div, coloro);
        if(flag[0]===false){
            if(flag[1].classList[1]==="kill"){
                nums.push(flag[1]);
            }
        }
        else{
        nums.push(flag[1]);
        }
    }
    cc+=2;if(rc>=0 && rc<=7 && cc<=7 && cc>=0){
        let div=data(rc,cc);
        let flag=datalistner(div, coloro);
        if(flag[0]===false){
            if(flag[1].classList[1]==="kill"){
                nums.push(flag[1]);
            }
        }
        else{
        nums.push(flag[1]);
        }
    }
    fr=String(r); fc=String(c); fnums=nums;
}

function bishop(string, coloro,f){
    let nums=[];
    let r= parseInt(string[0]), c=parseInt(string[1]);
    //for +x,+y
    for(let i=r-1, j=c+1; i>=0 && i<=7 && j<=7 && j>=0 ; i--, j++){
        let div=data(i,j);
        let flag=datalistner(div, coloro);
        if(flag[0]===false){
            if(flag[1].classList[1]==="kill"){
                nums.push(flag[1]);
                break;
            }
            else{
                break;
            }
        }
        else{
        nums.push(flag[1]);
        }
    }
    //for -x, +y
    for(let i=r-1, j=c-1; i>=0 && i<=7 && j<=7 && j>=0 ; i--, j--){
        let div=data(i,j);
        let flag=datalistner(div, coloro);
        if(flag[0]===false){
            if(flag[1].classList[1]==="kill"){
                nums.push(flag[1]);
                break;
            }
            else{
                break;
            }
        }
        else{
        nums.push(flag[1]);
        }
    }
    //for -x -y
    for(let i=r+1, j=c-1; i>=0 && i<=7 && j<=7 && j>=0 ; i++, j--){
        let div=data(i,j);
        let flag=datalistner(div, coloro);
        if(flag[0]===false){
            if(flag[1].classList[1]==="kill"){
                nums.push(flag[1]);
                break;
            }
            else{
                break;
            }
        }
        else{
        nums.push(flag[1]);
        }
    }
    //for +x -y
    for(let i=r+1, j=c+1; i>=0 && i<=7 && j<=7 && j>=0 ; i++, j++){
        let div=data(i,j);
        let flag=datalistner(div, coloro);
        if(flag[0]===false){
            if(flag[1].classList[1]==="kill"){
                nums.push(flag[1]);
                break;
            }
            else{
                break;
            }
        }
        else{
        nums.push(flag[1]);
        }
    }
    if(f===false){
        fr=String(r); fc=String(c); fnums=nums;
        }
    else{
        fr=String(r); fc=String(c);
        for(let p=0; p<nums.length; p++){
            fnums.push(nums[p]);
        }
    }
}

function queen(string, coloro){
    rook(string, coloro, true);
    bishop(string, coloro, true);
}

function pawn(string, coloro){
    pawncall=true;
    let nums=[];
    let r= parseInt(string[0]), c=parseInt(string[1]);
    if(coloro==="w"){
        //+y just above
        let div=data(r-1,c);
        let flag=datalistner(div, coloro);
        if(flag[0]===true){
            nums.push(flag[1]);

            //taking care of the first move
            // pawncontrol=true;
            // let haha=data(r,c);
            // if(haha.childNodes[0].id==="first"){
            //     if(r-2<=7 && r-2>=0 && c<=7 && c>=0){
            //         let div4=data(r-2,c);
            //         pawncall=false;
            //         let flag4=datalistner(div4, coloro);
            //             if(flag4[0]===true){
            //                 nums.push(flag4[1]);
            //             }
            //         pawncall=true;
                    
            //     }
            // }
        }
        //hybrid kill function
        if(r-1<=7 && r-1>=0 && c-1<=7 && c-1>=0){
            let div1=data(r-1, c-1);
            if(div1.innerHTML.length!==0){
                pawncall=false;
                let flag1=datalistner(div1, coloro);
                if(flag1[0]===false){
                    nums.push(flag1[1]);
                }
                pawncall=true;
            }
        }
        if(r-1<=7 && r-1>=0 && c+1<=7 && c+1>=0){
            let div2=data(r-1, c+1);
            if(div2.innerHTML.length!==0){
                pawncall=false;
                let flag2=datalistner(div2, coloro);
                if(flag2[0]===false){
                    nums.push(flag2[1]);
                }
                pawncall=true;
            }
        }
    }
    else{
        //-y just above
        let div=data(r+1,c);
        let flag=datalistner(div, coloro);
        if(flag[0]===true){
            nums.push(flag[1]);
        }
        //hybrid kill function
        if(r+1<=7 && r+1>=0 && c-1<=7 && c-1>=0){
            let div1=data(r+1, c-1);
            if(div1.innerHTML.length!==0){
                pawncall=false;
                let flag1=datalistner(div1, coloro);
                if(flag1[0]===false){
                    nums.push(flag1[1]);
                }
                pawncall=true;
            }
        }
        if(r+1<=7 && r+1>=0 && c+1<=7 && c+1>=0){
            let div2=data(r+1, c+1);
            if(div2.innerHTML.length!==0){
                pawncall=false;
                let flag2=datalistner(div2, coloro);
                if(flag2[0]===false){
                    nums.push(flag2[1]);
                }
                pawncall=true;
            }
        }
    }
    pawncall=false;
    fr=String(r); fc=String(c); fnums=nums;
}

function king(string, coloro){
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
        break;
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
        break;
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
        break;
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
        break;
    }
     //for +x,+y
     for(let i=r-1, j=c+1; i>=0 && i<=7 && j<=7 && j>=0 ; i--, j++){
        let div=data(i,j);
        let flag=datalistner(div, coloro);
        if(flag[0]===false){
            if(flag[1].classList[1]==="kill"){
                nums.push(flag[1]);
                break;
            }
            else{
                break;
            }
        }
        else{
        nums.push(flag[1]);
        }
        break;
    }
    //for -x, +y
    for(let i=r-1, j=c-1; i>=0 && i<=7 && j<=7 && j>=0 ; i--, j--){
        let div=data(i,j);
        let flag=datalistner(div, coloro);
        if(flag[0]===false){
            if(flag[1].classList[1]==="kill"){
                nums.push(flag[1]);
                break;
            }
            else{
                break;
            }
        }
        else{
        nums.push(flag[1]);
        }
        break;
    }
    //for -x -y
    for(let i=r+1, j=c-1; i>=0 && i<=7 && j<=7 && j>=0 ; i++, j--){
        let div=data(i,j);
        let flag=datalistner(div, coloro);
        if(flag[0]===false){
            if(flag[1].classList[1]==="kill"){
                nums.push(flag[1]);
                break;
            }
            else{
                break;
            }
        }
        else{
        nums.push(flag[1]);
        }
        break;
    }
    //for +x -y
    for(let i=r+1, j=c+1; i>=0 && i<=7 && j<=7 && j>=0 ; i++, j++){
        let div=data(i,j);
        let flag=datalistner(div, coloro);
        if(flag[0]===false){
            if(flag[1].classList[1]==="kill"){
                nums.push(flag[1]);
                break;
            }
            else{
                break;
            }
        }
        else{
        nums.push(flag[1]);
        }
        break;
    }
    fr=String(r); fc=String(c); fnums=nums;
}

const Click=(e)=>{
    //handeling the first click event ie the user selects a key to show possible outcomes
    if(flagg===true){
        let temp=e.target.classList;
        let color=temp[1][temp[1].length-1]
        let key=temp[1].slice(0, temp[1].length-2);
        if(e.target.classList[0]!=="img"){
            return;
        }
        if((turn==="w" && color==="b") || (turn==="b" && color==="w")){
            alert("Not your turn :)");
            return;
        }
        flagg=false;
        // console.log(color);
        // console.log(key);
        if(key==="rook"){        
            rook(e.target.parentNode.id, color,false);
        }
        else if(key==="knight"){
            knight(e.target.parentNode.id, color);
        }
        else if(key==="bishop"){
            bishop(e.target.parentNode.id, color,false);
        }
        else if(key==="king"){
            king(e.target.parentNode.id, color);
        }
        else if(key==="queen"){
            queen(e.target.parentNode.id, color);
        }
        else if(key==="pawn"){
            pawn(e.target.parentNode.id, color);
        }
    }
    //handeling the other event when the user has all the possibilities highlighted and now wants to make move
    else{

        flagg=true;
        const id=fr+fc;
        const inner=document.getElementById(`${id}`).innerHTML;

        if(e.target.parentNode.id!==""){ //handeling all the cases when the user clicked on a div haveing image
            if(e.target.parentNode.id===id || !fnums.includes(e.target.parentNode)){ //means the image is either key itself or the user clicked on another IMAGE not being heighlighted
                for(let i=0; i<fnums.length; i++){
                    fnums[i].classList.remove("kill", "active");
                }
            }
            else if(e.target.parentNode.classList[1]==="kill"){ //means user has initiated the kill move
                e.target.parentNode.innerHTML=`${inner}`;
                document.getElementById(`${id}`).innerHTML=``;
                for(let i=0; i<fnums.length; i++){
                    fnums[i].classList.remove("kill", "active");
                }
                // if(pawncontrol===true){
                //     let haha=data(parseInt(fr)-(parseInt(fr)-parseInt(e.target.id[0])),parseInt(fc));   //extension for pawn function
                //     if(haha.childNodes[0].id==="first"){
                //         haha.childNodes[0].id="second";
                //     }
                //     pawncontrol=false;
                // }

                if(turn==="w") turn="b";
                else turn="w";
            }
        }
        else{  //handeling all cases when the user has clicked on a div having no image it may be in fnums or may not be
            // console.log(e.target);
            if(fnums.includes(e.target)){ //case when user wishes to migrate    
                e.target.innerHTML=`${inner}`;
                document.getElementById(`${id}`).innerHTML=``;
                for(let i=0; i<fnums.length; i++){
                    fnums[i].classList.remove("kill", "active");
                }

                // if(pawncontrol===true){
                //     let haha=data(parseInt(fr)-(parseInt(fr)-parseInt(e.target.id[0])),parseInt(fc));   //extension for pawn function
                //     if(haha.childNodes[0].id==="first"){
                //         haha.childNodes[0].id="second";
                //     }
                //     pawncontrol=false;
                // }

                if(turn==="w") turn="b";
                else turn="w";
            } 
            else{ //when user clicked on a div not inside nums and want to revert
                for(let i=0; i<fnums.length; i++){
                    fnums[i].classList.remove("kill", "active");
                }
            }
        }
    }
}
// calling all setup functions on reload/restart
ColorSetup();
InitialBuild();

//adding the first and global event listner to the whole chess board
for(let i=0; i<cells.length; i++){
    cells[i].addEventListener("click",Click)
}