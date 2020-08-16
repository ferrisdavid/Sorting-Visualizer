export function getQuickSortAnimations(array){
    let animations=[];
    QuickSort(array,0, array.length-1,animations);
    return animations;
}

function QuickSort(array,leftIndex, rightIndex, animations){
    if(leftIndex >= rightIndex){
        return;
    }
    let pivot = array[Math.floor((leftIndex+rightIndex)/2)];
    let pivotIndex = Math.floor((leftIndex+rightIndex)/2);
    let splitIndex = split(array, leftIndex, rightIndex, pivot, pivotIndex, animations);
    QuickSort(array, leftIndex, splitIndex-1, animations);
    QuickSort(array, splitIndex, rightIndex,animations);
}
//Work On
function split(array, left, right, pivot, pivotInd, animations){
    animations.push([pivotInd,"yellow"]);
    while(left <= right){
        //Maybe push animation at start
        animations.push([left,"green"]);
        animations.push([right,"green"]);
        while(array[left] < pivot){
            animations.push([left,"green"]);
            animations.push([left,"pink"]);
            left++;
            if(array[left] >= pivot){
                animations.push([left,"green"]);
            }
        }
        while(array[right] > pivot){
            animations.push([right,"green"]);
            animations.push([right,"pink"]);
            right--;
            if(array[right] <= pivot){
                animations.push([right,"green"]);
            }
        }
        if(left<=right){
            animations.push([left,right,"red"]);
            animations.push([left,array[right]]);
            animations.push([right,array[left]]);
            animations.push([left,right,"green"]);
            swap(array,left,right);
            animations.push([left,right,"pink"]);
            if(left === pivotInd || right === pivotInd){
                animations.push([pivotInd,"yellow"]);
            }
            left++;
            right--;
        }
        else{
            animations.push([left,right,"green"]);
            animations.push([left,right,"pink"]);
        }
    }
    animations.push([pivotInd,"pink"]);
    return left;
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
