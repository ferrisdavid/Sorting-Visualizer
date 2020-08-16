export function getBubbleSortAnimations(array){
    let animations = [];
    for(let i = 0; i < array.length - 1;i++ ){
        for(let j =0; j < array.length-1-i;j++){
            animations.push([j,j+1,"green"]);
            if(array[j] > array[j+1]){
                animations.push([j,j+1,"red"]);
                animations.push([j,array[j+1]]);
                animations.push([j+1,array[j]]);
                animations.push([j,j+1,"green"]);
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
            animations.push([j,j+1,"pink"]);
             

            
        }
    }
    return animations;
}
