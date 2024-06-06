//to get rendom images of dogs
let url2 = "https://dog.ceo/api/breeds/image/random";
let imgresult = document.querySelector("#imgresult");
let show = document.querySelector("#btn");

async function getimg(){
    try{
        let resu = await axios.get(url2);
    return resu.data.message;
    }
    catch(er){
        console.log("ERROR-",er)
    }
}

show.addEventListener("click",async() =>{
    console.log("img show");
    let img = await getimg();
    imgresult.setAttribute("src", img);
})

//to get rendom fats about cats

let url = "https://catfact.ninja/fact";
let result = document.querySelector("#result");
let btn = document.querySelector("button");

async function getfact(){
    try{
 let res = await axios.get(url);
  return res.data.fact;
    }
catch(e){
console.log("ERROR-",e);
}
}

btn.addEventListener("click",async() =>{
    console.log("button clicked");
    let fact = await getfact();
    result.innerText = fact;
})