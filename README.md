# Rgb to hex converter tool/website #
Well hello there , dear Sourcery Academy person! (I'm terribly sorry , that i don't know your name yet , but I'm really looking forward to meeting you! )</br>
So this is my crappy attempt for getting a few extra points before the admission test , take a look! 

# How it works #

As I'm still pretty new to JavaScript , please take it easy on me!

As you can see here , program triggers when the "convert!" button is clicked :
```JavaScript
document.getElementById("btn").onclick = function (){
     let value = document.getElementById("inp").value;
     const strArr = value.split(",");
        if(checkIfvalid(strArr) == true){
            
            let hexArr = parseToHex(parseToInt(strArr));
            let convertedHexString = "#"+hexArr[0]+hexArr[1]+hexArr[2];
            document.getElementById('converted').innerText=convertedHexString;

        }
};
```
After creating string array from input field value , check if it valid numeric input with checkIfValid function : 
```JavaScript
function checkIfvalid(arr) {
   
    console.log(arr);
    if (arr.length == 3 ){
        for(let i =0 ; i <3 ; i++){
            if(isNaN(arr[i])){
                
                alert("It appears that you try to hack me , please enter only numeric values!");
                return false;
            }
            else if(arr[i]==""){
                alert("It appears that you left an empty spot ! Please write three numbers , spearated by a comma !");
                return false;
            }
        }  return true;
            
    } else if(arr.length>3){
        alert("too many values! Please write three numbers , spearated by a comma !");
        return false;
    } else (arr.length<3) ;
        alert("not enoguh values! Please write three numbers , spearated by a comma !");
        return false;
    

}
``` 
I tried to be fancy with forEach method , but it didn't work right the first time ( It flashed the alert for every non-numeric item in array , maybe because my stupid butt didn't try to add break; after the return , idk..) </br></br>
Well then , if input passes the check , then it's converted to integer array here : 
```JavaScript
function parseToInt(arr){
    
    let intArr =[];
    arr.forEach(function(number , index){
        intArr[index]=parseInt(number);
        if(intArr[index] >255){
            intArr[index] = 255;
        } else if(intArr[index] < 0 ){
            intArr[index] = 0;
        }
    })
    return intArr;
}
```
As you can see, I don't realy trust the user here either , so I made a check to make sure that values are in valid RGB range : if value is out of bounds , I change them to the closest  valid value - either 255 if value is greater than 255 , or 0 if value is negative.</br></br>
So we are almost done , just let me show you how i convert simple integers to hexadecimal values with parseToHex method : 
```JavaScript
function parseToHex(arr){
    let hexArr=[];
    arr.forEach(function (number , index){
        hexArr[index]=Number(number).toString(16).padStart(2,'0');
    })
    return hexArr;
}
```
Nothing fancy , just simple native toString(16) method, with additional padStart method so we can have nice double digit hexadecimal value.
</br></br>

Aaaand finaly , I format the hex array to propper color value , and pass it to the html element : 
```JavaScript
let convertedHexString = "#"+hexArr[0]+hexArr[1]+hexArr[2];
            document.getElementById('converted').innerText=convertedHexString;
```

# Can you see it in action right now ?  #

Absolutely ! Just follow this link here : [Rgb to hex converter!](https://rgbtohexconverter.netlify.app/)

# Thank you very much for Your valued time ! #