var a=[];
for(i=0; i<=100; i++){
    a.push(i);
}

a.forEach(function(element){
    if(element%10==0)
    console.log(element);
})