const readline = require('readline-sync');
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
var top = 10,bott = 0,now = 3,Target;
var floor = ["B2","B1","1","2","3","4","5"];
const repeatedGreetings = async () => {
while(true){
    Target=readline.question("目前在"+ floor[now] + "F,請問要去哪樓?");
    Target=Target.toUpperCase();
    Target=floor.indexOf(Target);
    if(Target<0){
        console.log("Wrong,輸入"+floor.toString()+"樓層");
        continue;
    }
    if(Target == now){
        console.log("Leave");
        break;
    }
    else{
        if(Target < now){
            console.log("電梯已下樓");
            do{
                now--;
                await sleep(1000)
                console.log("電梯" +floor[now]+ "樓到了");
            }
            while(Target < now);
            console.log("到達"+floor[now]+"樓");
        }
        else{
            console.log("電梯已上樓");
            do{
                now ++;
                await sleep(1000);
                console.log("電梯" +floor[now]+ "樓到了");
            }
            while(Target > now);
            console.log("到達"+floor[now]+"樓");
        }
    }
}
}
repeatedGreetings()