document.getElementById("btn").onclick = function (){
     let value = document.getElementById("inp").value;
     const strArr = value.split(",");
        if(checkIfvalid(strArr) == true){
            
            let hexArr = parseToHex(parseToInt(strArr));
            let convertedHexString = "#"+hexArr[0]+hexArr[1]+hexArr[2];
            console.log(convertedHexString);
            document.getElementById('converted').innerText=convertedHexString;

        }
       //calculation();




};

function checkIfvalid(arr) {
   
    console.log(arr);
    if (arr.length == 3 ){
        for(let i =0 ; i <3 ; i++){
            if(isNaN(arr[i])){
                console.log(arr[i]);
                alert("It appears that you try to hack me , please enter only numeric values!");
                return false;
            }
        }  return true;
    } else{
        alert("too many numbers! Please write three numbers , spearated by a comma !");
        return false;
    }

}

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

function parseToHex(arr){
    let hexArr=[];
    arr.forEach(function (number , index){
        hexArr[index]=Number(number).toString(16).padStart(2,'0');
    })
    return hexArr;
}