function mergeSortedArrays(a1, a2){
    const total = a1.length + a2.length;
    let arr = [];
    let a1Cursor = 0;
    let a2Cursor = 0;

    for (let i=0; i<total; i++){
        if(a1[a1Cursor] <= a2[a2Cursor] || a2Cursor == a2.length){
            arr.push(a1[a1Cursor]);
            a1Cursor += 1;
        } else {
            arr.push(a2[a2Cursor]);
            a2Cursor += 1;
        }
    }

    return arr;
}

mergeSortedArrays([0,3,4,31], [3,4,6,30]);