var p =[],i;
for(i=0;i<52;i++){
    switch(parseInt(i/13)){
        case 0:
            p.push("H"+(parseInt(i%13)+1));
            break;
        case 1:
            p.push("B"+(parseInt(i%13)+1));
            break;
        case 2:
            p.push("L"+(parseInt(i%13)+1));
            break;
        case 3:
            p.push("M"+(parseInt(i%13)+1));
            break;
    }
}
console.log(p.toString());
var p1=[];p2=[];p3=[];p4=[];
function compare(a,b){
    return Math.random()-0.5;
}
p.sort(compare);
for(let i=0;i<p.length;i++){
    var r = Math.floor(Math.random() * p.length);
    console.log(p[r]);
    p1.push(p[r]);
    p.splice(r,1);
    var r = Math.floor(Math.random() * p.length);
    console.log(p[r]);
    p2.push(p[r]);
    p.splice(r,1);
    var r = Math.floor(Math.random() * p.length);
    console.log(p[r]);
    p3.push(p[r]);
    p.splice(r,1);
    var r = Math.floor(Math.random() * p.length);
    console.log(p[r]);
    p4.push(p[r]);
    p.splice(r,1);
}
p1.sort()
p1.reverse()
console.log("Player1: " + p1);
p2.sort()
p2.reverse()
console.log("Player2: " + p2);
p3.sort()
p3.reverse()
console.log("Player3: " + p3);
p4.sort()
p4.reverse()
console.log("Player4: " + p4);