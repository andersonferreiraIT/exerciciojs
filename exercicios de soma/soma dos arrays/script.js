var array1 = [1, 2, 3];

var array2 = [4, 4, 4];



function somaDasArrays(arr1, arr2){
    var soma1 = 0

    var soma2 = 0
    for (var i = 0; i < arr1.length; i++){
        var calculo1 = arr1[i];
        soma1 += calculo1;
    }

    for (var i = 0; i < arr2.length; i++){
        var calculo2 = arr2[i];
        soma2 += calculo2;
    }

    return soma1 + soma2;

}

document.write(somaDasArrays (array1, array2));