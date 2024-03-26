// 1)resolve
// 2)reject
// 3)fulfil

// let p=new Promise((resolve,reject)=>{
//     let  a=5;
//     if(a>0){
//         resolve();
//     }else{
//         reject();
//     }
// })
// .then(()=>console.log("promise is resolved"))
// .catch(()=>console.log("promise is rejected"));

// fulfilled: Action related to the promise succeeded
// rejected: Action related to the promise failed
// pending: Promise is still pending i.e. not fulfilled or rejected yet


// as function
let checkPositive=(val)=>{
    return new Promise((resolve, reject) => {
        if (val > 0) {
            resolve(); 
        }else{
            reject();
        } 
    })
};

checkPositive(10)
.then((x)=>{
    console.log("kuch bhi"+x);
})
.catch(()=>{console.log("error hai");
})

