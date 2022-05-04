let abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let sum = [];
for(let i=0; i<abc.length; i++){
    sum += abc[i+=1] + " " + abc[i-1] + " "
}

    console.log(sum);