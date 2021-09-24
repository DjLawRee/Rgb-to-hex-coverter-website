document.getElementById("btn").onclick = function (){
     let value = document.getElementById("inp").value;
     const strArr = value.split(",");
        if(checkIfvalid(strArr)){
            
            let hexArr = parseToHex(parseToInt(strArr));
            let convertedHexString = "#"+hexArr[0]+hexArr[1]+hexArr[2];
            document.getElementById('converted').innerText=convertedHexString;

        }
};

function checkIfvalid(arr) {
    let msg = " Please write three numbers , spearated by a comma !";
    if (arr.length == 3 ){
        for(let i =0 ; i <3 ; i++){
            if(!isNumber(arr[i])){
                alert(msg);
                return false;
            }
        }  
        return true;         
    } else {
        alert(msg);
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

function isNumber(num){
    let answer = /^\d+$/.test(num);
    return answer;
}