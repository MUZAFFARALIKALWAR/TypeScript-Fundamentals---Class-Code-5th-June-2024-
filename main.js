// // //const enum
// // const enum fuel{
// //   PETROL = 270,
// //   DIESEL = 300,
// // }
// // // console.log(fuel[0]);// error
// //  console.log(fuel.DIESEL);// ok
// //  // calss works //Menu tikka beef boti
// //  const enum Menu{
// //     tikka = 200,
// //     beef = 120,
// //     boti = 150,
// //  }
// //  console.log(Menu.tikka);
// //  console.log(Menu.beef);
// //  console.log(Menu.boti);
// // // REST PARAMETER  / type array
// // function Wallet(color:string,...other:string[]){
// //    console.log(color,other.join(" "));// use jion method convert oject to string 
// // }
// // Wallet("red","currency","cnic","atm card")
// // // class works 
// // function fileupload(file1:string,...file2:string[]){
// //    console.log(file1,file2.join(" "));
// // }
// // fileupload("fileone","file2","file3")
// // // optional parameter 
// // function Form1(name:string,feedback?:string){
// //    console.log(name);
// // }
// // Form1("Muzaffar_Ali",)
// // // optional parameter  example 2
// // function Form2(name:string,feedback?:string){
// //    console.log(name,feedback);
// // }
// // Form2("Muzaffar_Ali",)//output=> Muzaffar_Ali  undefine
// // Form2("Muzaffar_Ali","Good class")//output=> Muzaffar_Ali  Good class
// // // optional parameter with interface and object 
// // interface Product{
// //    name:string,
// //    price?:number
// // } 
// // let product:Product = {
// //    name:"Bread",
// // }
// // console.log(product);
// //Narrowing
// let age :string | number 
// age = "twenty"
// if(typeof age === "number"){
//    // console.log(age.toFixed(2));
// }else{
//    console.log(age.toLocaleUpperCase());
// }
// //ANY AND UNKNOWN
// let valu:any
//  valu = 223 // ok
//  valu = "khan" // ok
//  valu = true // ok
//  valu = {} // ok
//  valu = ()=>{} // ok
//  valu = undefined // ok
//  valu = null // ok
//  //unknown
// let valu1:unknown
//  valu1 = 223 // ok
//  valu1 = "khan" // ok
//  valu1 = true // ok
//  valu1 = {} // ok
//  valu1 = ()=>{} // ok
//  valu1 = undefined // ok
//  valu1 = null // ok
//  /*type "unknown" is compatible  with any and unknown*/
//  valu = valu1 //ok
// valu1 = valu //ok
// // unkonwn not compatible to string ,number and other types 
// // let valu2:string = valu1 // error
// // let valu3:number = valu1 // error
// // let valu4:boolean = valu1 // error
// // let valu5:Array<string> = valu1 // error
// // Create a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements using a "for" loop.
//   this code export other file
export function sumArray1(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += number[i];
    }
    return sum;
}
//Narrowing with export other file
export function test(a) {
    if (typeof a === "string") {
        console.log(a.toLocaleUpperCase());
    }
    else {
        console.log(a.toFixed(2));
    }
}
