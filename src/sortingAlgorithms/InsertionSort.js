export function getInsertionSortAnimations(array){
    let animations = [];
    InsertionSort(array, animations);
    return animations;
}

function InsertionSort(arr, animations){
    for(let i =1; i < arr.length; i++){
        let value = arr[i];
        let j = i-1;
        while(j >= 0 && arr[j] > value){
            animations.push([j,j+1,"red"]);
            animations.push([j+1,arr[j]]);
            animations.push([j,j+1,"green"]);
            animations.push([j,j+1,"pink"]);
            arr[j+1] = arr[j];   
            j--;
        }

        if(j>=0){
            animations.push([j,j+1,"red"]);
            animations.push([j+1,value]);
            animations.push([j,j+1,"green"]);
            animations.push([j,j+1,"pink"]);
        }
        animations.push([j+1,value]);
        arr[j+1] = value;    
    }
}