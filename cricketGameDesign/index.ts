let insertSomething=()=>{
    let c=0;
for(let j=1;j<=10;j++){
    for(let i=0;i<6;i++){
            const scores=[0,1,2,3,4,6];   
            let random =   Math.floor(Math.random() * scores.length);
            var row = document.getElementsByTagName("tr")[j];
            var x = row.cells[i+1];
            x.innerHTML=`${scores[random]}`;
            c+=scores[random];

                if(scores[random]==0){
                    x=row.cells[7];
                    x.innerHTML=`${c}`;
                    break;
                } 
            
            }
      if(`${c}`!==0) {     
    var x = row.cells[7];
    x.innerHTML=`${c}`;}
    c=0;
}
team1();
}

let insertSecondPhase=()=>{
    let c=0;
for(let j=1;j<=10;j++){
    for(let i=0;i<6;i++){
            const scores=[0,1,2,3,4,6];   
            let random =   Math.floor(Math.random() * scores.length);
            var row = document.getElementsByTagName("tr")[j+11];
            var x = row.cells[i+1];
            x.innerHTML=`${scores[random]}`;
            c+=scores[random];

                if(scores[random]==0){
                    x=row.cells[7];
                    x.innerHTML=`${c}`;
                    break;
                } 
            
            }
      if(`${c}`!==0) {     
    var x = row.cells[7];
    x.innerHTML=`${c}`;}
    c=0;
}
team2();
} 
let teaM1,teaM2;
let team1=()=>{
    c=0;
    for(let i=1;i<=10;i++){
        var row = document.getElementsByTagName("tr")[i];
        c+= +row.cells[7].innerHTML;
    }
    let a=document.getElementById('ts1')
    a.innerHTML=c;
    teaM1=c;
}

let team2=()=>{
    c=0;
    for(let i=1;i<=10;i++){
        var row = document.getElementsByTagName("tr")[i+11];
        c+= +row.cells[7].innerHTML;
    }
    let a=document.getElementById('ts2')
    a.innerHTML=c;
    teaM2=c;
}



let matchWinners=()=>{
    let winner= document.getElementById("MW");
    if(teaM1>teaM2){
       
       winner.innerHTML= " TEAM 1";
       let b=document.getElementById('MOM3')
       b.innerHTML="TEAM 1";
       manOfMatch();
    }
    else{
        winner.innerHTML= " TEAM 2";
        let b=document.getElementById('MOM3')
       b.innerHTML="TEAM 2";
        manOfMatch2();
    }
    
}

let manOfMatch=()=>{
    let a=[];
    for(let i=0;i<10;i++){
        let row=document.getElementsByTagName("tr")[i+1];
        a[i]= +row.cells[7].innerHTML;
        

    }
    console.log(a);
    let maxx = a.indexOf(Math.max(...a));
    let maxx2=Math.max(...a);
    console.log(maxx2);
    let b=document.getElementById('MOM1')
    b.innerHTML="Player"+ (maxx+1);
    let c= document.getElementById("MOM2");
    c.innerHTML="Score :" + maxx2;
}

let manOfMatch2=()=>{
    let a=[];

    for(let i=0;i<10;i++){
        let row=document.getElementsByTagName("tr")[i+12];
        a[i]= +row.cells[7].innerHTML;
        

    }
    console.log(a);
    let maxx = a.indexOf(Math.max(...a));
    let maxx2=Math.max(...a);
    console.log(maxx2);
    let b=document.getElementById('MOM1')
    b.innerHTML="Player"+ (maxx+1);

    let c= document.getElementById("MOM2");
    c.innerHTML="Score :" + maxx2;
}