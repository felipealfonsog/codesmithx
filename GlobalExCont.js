function copyArrayAndManipulate(array, instructions) {
    var output = [];
    for (var i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
    }
    return output;
    }
    
    function multiplyBy2(input) {
    return input * 2;
    }
    
    var result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);

    