// let callback=(a)=>{
//     setTimeout(()=>{
//         let data="XYZ"
//         console.log(data);
//         a(data);
//     },1000)
// };

// function name_1(params) {
//     console.log("here");
// }
// callback(name_1);

// https://www.w3schools.com/js/js_callback.asp



// without setTimeout

let add = (x, y, cb) => {
    let result= x + y;
    cb(result);
};

// let a=(add)=>{
//     console.log('Addition of Two number is' +' '+add);
// };

add(5,6,(x)=>{
    console.log("Addtion of two number" +" "+x);
});

// es-5
// api-----()=>{10min-----data bhohot impt hai woh data mere liye }

// api-------->()=>{1min but condition kya meri mai upar wali api ka data yaha use karunga aagar data muze nai mila toh mai kuch kam ka nai}

// ()=>{10 min isske liye nodejs rukega nai aur next line execute karega}


// drawback(callback hell)
// ()=>{
//     ()=>{
//         ()=>{
//             ()=>{
//               ()=>{

//               }
//             }
//         }    
//     }
// }

// yellow-10MI
// pink--2MIDIInput
// blue-1min