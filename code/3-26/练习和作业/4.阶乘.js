let count = "";
for(let i=1;i<2;i++){
    for(let j=1;j<3;j++){
        for( let k=1;k<=j;k++){
            count += `${i} * ${j} * ${k} = ${i*j*k} `;
        console.log(count);
        }
    }
    count = "\n"
}