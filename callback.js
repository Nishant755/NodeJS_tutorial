let callback=(a)=>{
    // setInterval(()=>{
    //     console.log("helllo i m  a call back");
    // });
    // console.log("hello i m here");
    setTimeout(()=>{
        let data="XYZ"
        console.log(data);
        a(data);
    },1000)

};

function name_1(params) {
    console.log("here");
}
callback(name_1);

// https://www.w3schools.com/js/js_callback.asp