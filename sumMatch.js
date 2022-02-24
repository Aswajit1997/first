var arr = ""
let newArray=[]

function findSum(arr, value) {
    var flag=0;
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == value) {
                newArray.push(arr[i],arr[j])
                flag =flag+1 
            }
        }
    }
    if(flag>0){
        console.log(newArray)
    }
    else
        console.log('No matching found')
}
findSum([1, 2, 4, 6, 7], 9)
findSum([1, 2, 4, 6, 7], 65)

