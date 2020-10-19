let me = {
    Email: "hotmail@gmail.se",
    Name: "Walter",
    Age:16,
}
let x = Math.random()


let alsoMe = {
    Email: "hotmail@gmail.se",
    Name: "Walter",
    Age:16,
}

function isSameUser(me, alsoMe){
return me.Email === alsoMe.Email

//    if (me.Email === alsoMe.Email)
//    {return true}
//    else { return false}
}
console.log(isSameUser(me, alsoMe))