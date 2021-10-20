var porke =[],i;
for(i=0;i<52;i++){
    switch(parseInt(i/13)){
        case 0:
            porke.push("r"+(parseInt(i%13)+1)+" ");
            break;
        case 1:
            porke.push("b"+(parseInt(i%13)+1)+" ");
            break;
        case 2:
            porke.push("l"+(parseInt(i%13)+1)+" ");
            break;
        case 3:
            porke.push("f"+(parseInt(i%13)+1)+" ");
            break;
    }
}
console.log(porke.toString());
var porke1=[];porke2=[];porke3=[];porke4=[];
function compare(a,b){
    return Math.random()-0.5;
}
function compare2(a,b){
    if(b.charCodeAt(2) == a.charCodeAt(2)){
    }
    else{
        return b.charCodeAt(2) - a.charCodeAt(2);
    }
}
function compare3(a,b){
    if(b.charCodeAt(0) == a.charCodeAt(0)){
    }
    else{
        return b.charCodeAt(0) - a.charCodeAt(0);
    }
}
function compare1(a,b){
    if(b.charCodeAt(1) == a.charCodeAt(1)){
    }
    else{
        return b.charCodeAt(1) - a.charCodeAt(1);
    }
}
porke.sort(compare1);
porke.sort(compare2);
porke.sort(compare3);

for(let i=0;i<porke.length;i++){
    var r = Math.floor(Math.random() * porke.length);
    console.log(porke[r]);
    porke1.push(porke[r]);
    porke.splice(r,1);
    var r = Math.floor(Math.random() * porke.length);
    console.log(porke[r]);
    porke2.push(porke[r]);
    porke.splice(r,1);
    var r = Math.floor(Math.random() * porke.length);
    console.log(porke[r]);
    porke3.push(porke[r]);
    porke.splice(r,1);
    var r = Math.floor(Math.random() * porke.length);
    console.log(porke[r]);
    porke4.push(porke[r]);
    porke.splice(r,1);
}
porke1.sort(compare1);porke1.sort(compare2);porke1.sort(compare3);
porke2.sort(compare1);porke2.sort(compare2);porke2.sort(compare3);
porke3.sort(compare1);porke3.sort(compare2);porke3.sort(compare3);
porke4.sort(compare1);porke4.sort(compare2);porke4.sort(compare3);
console.log("Player1: " + porke1);
console.log("Player2: " + porke2);
console.log("Player3: " + porke3);
console.log("Player4: " + porke4);