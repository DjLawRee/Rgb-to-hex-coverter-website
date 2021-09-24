document.getElementById("btn").onclick = function (){
     let value = document.getElementById("inp").value;
     const strArr = value.split(",");
        if(checkIfvalid(strArr) == true){
            
            let hexArr = parseToHex(parseToInt(strArr));
            let convertedHexString = "#"+hexArr[0]+hexArr[1]+hexArr[2];
            document.getElementById('converted').innerText=convertedHexString;

        }
};

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