ColorCodes={
    light: "#ffce9e",
    dark: "#d18b47",
};
let cells=document.getElementsByClassName("cell");
let c=0;
let flag=true;
for(let i=0; i<cells.length; i++){
    if(flag===true){
        cells[i].style.backgroundColor=`${ColorCodes.light}`;
        flag=false;
        c++;
    }
    else if(flag===false){
        cells[i].style.backgroundColor=`${ColorCodes.dark}`;
        flag=true;
        c++;
    }
    if(c%8===0){
        if(flag===true){
            flag=false;
        }
        else{
            flag=true;
        }
        c=0;
    }
}