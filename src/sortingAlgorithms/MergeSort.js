export function getMergeSortAnimations(array){
    const animations = [];
    const auxArray = array.slice();
    mergeSort(array, 0 , array.length-1, auxArray, animations);
    return animations;
}

function mergeSort(mainArr, start, end, auxArray, animations){
    if(start >= end){
        return;
    }
    const middleIndex = Math.floor((start+end)/2);
    mergeSort(auxArray, start, middleIndex,mainArr, animations);
    mergeSort(auxArray,middleIndex+1,end,mainArr,animations);
    mergeHelper(auxArray,start,middleIndex,end,mainArr,animations);
    
}

function mergeHelper(mainArr, leftIndex, middleIndex, rightEnd, auxArray, animations){
    let leftEnd = middleIndex;
    let rightStart = middleIndex + 1;
    
    let left = leftIndex;
    let tempLeft = leftIndex;
    let right = rightStart

    while(left <= leftEnd && right <= rightEnd){
        if(auxArray[left] <= auxArray[right]){
            animations.push([tempLeft,right,"green"]);
            animations.push([tempLeft, auxArray[left]]);
            animations.push([tempLeft,right,"pink"]);
            mainArr[tempLeft++] = auxArray[left++];
        }
        else{
            animations.push([tempLeft, right,"red"]);
            animations.push([tempLeft, auxArray[right]]);
            animations.push([tempLeft, right,"green"]);
            animations.push([tempLeft, right,"pink"]);
            mainArr[tempLeft++] = auxArray[right++];
        }
    }
    while(left <= leftEnd){
        animations.push([left,left,"green"]);
        animations.push([tempLeft, auxArray[left]]);
        animations.push([left,left, "pink"]);
        mainArr[tempLeft++] = auxArray[left++];
    }
    while(right <= rightEnd){
        animations.push([right,right,"green"]);
        animations.push([tempLeft, auxArray[right]]);
        animations.push([right,right, "pink"]);
        mainArr[tempLeft++] = auxArray[right++];
    }
}