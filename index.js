var variable = [];
var arrayLength = [];
var globalEqual = 0;
var counter = 0;

function getSum(a, b) {
    return a + b;
}

function getQuotient(a, b) {
    return a / b;
}

function getDifference(a, b) {
    return a - b;
}

function getProduct(a, b) {
    return a * b;
}

function removeClasses() {
    $('#answer').removeClass('left2');
    $('#answer').removeClass('left3');
    $('#answer').removeClass('left4');
    $('#answer').removeClass('left5');
    $('#answer').removeClass('left6');
    $('#answer').removeClass('left7');
    $('#answer').removeClass('left8');
    $('#answer').removeClass('left9');
    $('#answer').removeClass('left10');
    $('#answer').removeClass('left11');
    $('#answer').removeClass('left12');
    $('#answer').removeClass('left13');
}

function testingForEqual() {
    if (globalEqual !== 0) {
        variable = [];
        counter = 0;
        arrayLength = [];
        variable[0] = globalEqual;
        removeClasses();
    }
}

function testingForNumbersInGlobalEqual() {
    arrayLength = [];
    globalEqual = globalEqual.toString();
    arrayLength = globalEqual.split('');

    if (arrayLength.length === 2) {
        $('#answer').addClass('left2');
    } else if (arrayLength.length === 3) {
        $('#answer').addClass('left3');
    } else if (arrayLength.length === 4) {
        $('#answer').addClass('left4');
    } else if (arrayLength.length === 5) {
        $('#answer').addClass('left5');
    } else if (arrayLength.length === 6) {
        $('#answer').addClass('left6');
    } else if (arrayLength.length === 7) {
        $('#answer').addClass('left7');
    } else if (arrayLength.length === 8) {
        $('#answer').addClass('left8');
    } else if (arrayLength.length === 9) {
        $('#answer').addClass('left9');
    } else if (arrayLength.length === 10) {
        $('#answer').addClass('left10');
    } else if (arrayLength.length=== 11) {
        $('#answer').addClass('left11');
    } else if (arrayLength.length === 12) {
        $('#answer').addClass('left12');
    } else if (arrayLength.length > 13) {
        $('#answer').addClass('left6');
        $('#answer').text("ERROR!");
    }
    globalEqual = parseInt(globalEqual);
}

function testingForNumbers() {
    arrayLength = [];
    variable[0] = variable.toString();
    arrayLength = variable[0].split('');

    if (arrayLength.length === 2) {
        $('#answer').addClass('left2');
    } else if (arrayLength.length === 3) {
        $('#answer').addClass('left3');
    } else if (arrayLength.length === 4) {
        $('#answer').addClass('left4');
    } else if (arrayLength.length === 5) {
        $('#answer').addClass('left5');
    } else if (arrayLength.length === 6) {
        $('#answer').addClass('left6');
    } else if (arrayLength.length === 7) {
        $('#answer').addClass('left7');
    } else if (arrayLength.length === 8) {
        $('#answer').addClass('left8');
    } else if (arrayLength.length === 9) {
        $('#answer').addClass('left9');
    } else if (arrayLength.length === 10) {
        $('#answer').addClass('left10');
    } else if (arrayLength.length=== 11) {
        $('#answer').addClass('left11');
    } else if (arrayLength.length === 12) {
        $('#answer').addClass('left12');
    } else if (arrayLength.length > 13) {
        $('#answer').addClass('left6');
        $('#answer').text("ERROR!");
    }
    variable[0] = parseInt(variable[0]);
}

function testingForNumbersVar2() {
    if (variable[2] > 9 && variable[2] <= 99) {
        $('#answer').addClass('left2');
    } else if (variable[2] >= 99 && variable[2] <= 999) {
        $('#answer').removeClass('left2');
        $('#answer').addClass('left3');
    } else if (variable[2] >= 999 && variable[2] <= 9999) {
        $('#answer').removeClass('left3');
        $('#answer').addClass('left4');
    } else if (variable[2] >= 9999 && variable[2] <= 99999) {
        $('#answer').removeClass('left4');
        $('#answer').addClass('left5');
    } else if (variable[2] >= 99999 && variable[2] <= 999999) {
        $('#answer').removeClass('left5');
        $('#answer').addClass('left6');
    } else if (variable[2] >= 999999 && variable[2] <= 9999999) {
        $('#answer').removeClass('left6');
        $('#answer').addClass('left7');
    } else if (variable[2] >= 9999999 && variable[2] <= 99999999) {
        $('#answer').removeClass('left7');
        $('#answer').addClass('left8');
    } else if (variable[2] >= 99999999 && variable[2] <= 999999999) {
        $('#answer').removeClass('left8');
        $('#answer').addClass('left9');
    } else if (variable[2] >= 999999999 && variable[2] <= 9999999999) {
        $('#answer').removeClass('left9');
        $('#answer').addClass('left10');
    } else if (variable[2] >= 9999999999 && variable[2] <= 99999999999) {
        $('#answer').removeClass('left10');
        $('#answer').addClass('left11');
    } else if (variable[2] >= 99999999999 && variable[2] <= 999999999999) {
        $('#answer').removeClass('left11');
        $('#answer').addClass('left12');
    } else if (variable[2] >= 999999999999 && variable[2] <= 9999999999999) {
        $('#answer').removeClass('left12');
        $('#answer').addClass('left13');
    }
}




window.onload = function () {
    var ac = $('button')[0];
    var ce = $('button')[1];
    var divide = $('button')[2];
    var x = $('button')[3];
    var seven = $('button')[4];
    var eight = $('button')[5];
    var nine = $('button')[6];
    var minus = $('button')[7];
    var four = $('button')[8];
    var five = $('button')[9];
    var six = $('button')[10];
    var plus = $('button')[11];
    var one = $('button')[12];
    var two = $('button')[13];
    var three = $('button')[14];
    var zero = $('button')[15];
    var tochka = $('button')[16];
    var equal = $('button')[17];

    nine.onclick = function () {
        testingForEqual();
        counter += 1;

        if (counter < 13) {
            if (variable.length < 1) {
                variable = [];
                variable[0] = nine.value;
                variable[0] = parseInt(variable[0]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length === 1) {
                variable[0] += "9";
                variable[0] = parseInt(variable[0]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length === 2) {
                variable[2] = "9";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[2]);
                testingForNumbersVar2();
            } else if (variable.length > 2) {
                variable[2] += "9";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[2]);
                testingForNumbersVar2();
            }
        }
    };

    eight.onclick = function () {
        testingForEqual();
        counter += 1;

        if (counter < 13) {
            if (variable.length < 1) {
                variable = [];
                variable[0] = eight.value;
                variable[0] = parseInt(variable[0]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length === 1) {
                variable[0] += "8";
                variable[0] = parseInt(variable[0]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length === 2) {
                variable[2] = "8";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[2]);
                testingForNumbersVar2();
            } else if (variable.length > 2) {
                variable[2] += "8";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[2]);
                testingForNumbersVar2();
            }
        }
    };

    seven.onclick = function () {
        testingForEqual();
        counter += 1;

        if (counter < 13) {
            if (variable.length < 1) {
                variable = [];
                variable[0] = seven.value;
                variable[0] = parseInt(variable[0]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length === 1) {
                variable[0] += "7";
                variable[0] = parseInt(variable[0]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length === 2) {
                variable[2] = "7";
                variable[2] = parseInt(variable[2])
                $('#answer').text(variable[2]);
                testingForNumbersVar2();
            } else if (variable.length > 2) {
                variable[2] += "7";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[2]);
                testingForNumbersVar2();
            }
        }
    };

    six.onclick = function () {
        testingForEqual();
        counter += 1;

        if (counter < 13) {
            if (variable.length < 1) {
                variable = [];
                variable[0] = six.value;
                variable[0] = parseInt(variable[0]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length === 1) {
                variable[0] += "6";
                variable[0] = parseInt(variable[0]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length === 2) {
                variable[2] = "6";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[2]);
                testingForNumbersVar2();
            } else if (variable.length > 2) {
                variable[2] += "6";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[2]);
                testingForNumbersVar2();
            }
        }
    };

    five.onclick = function () {
        testingForEqual();
        counter += 1;

        if (counter < 13) {
            if (variable.length < 1) {
                variable = [];
                variable[0] = five.value;
                variable[0] = parseInt(variable[0]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length === 1) {
                variable[0] += "5";
                variable[0] = parseInt(variable[0]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length === 2) {
                variable[2] = "5";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[2]);
                testingForNumbersVar2();
            } else if (variable.length > 2) {
                variable[2] += "5";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[2]);
                testingForNumbersVar2();
            }
        }
    };

    four.onclick = function () {
        testingForEqual();
        counter += 1;

        if (counter < 13) {
            if (variable.length < 1) {
                variable = [];
                variable[0] = four.value;
                variable[0] = parseInt(variable[0]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length === 1) {
                variable[0] += "4";
                variable[0] = parseInt(variable[0]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length === 2) {
                variable[2] = "4";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[2]);
                testingForNumbersVar2();
            } else if (variable.length > 2) {
                variable[2] += "4";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[2]);
                testingForNumbersVar2();
            }
        }
    };

    three.onclick = function () {
        testingForEqual();
        counter += 1;

        if (counter < 13) {
            if (variable.length < 1) {
                variable = [];
                variable[0] = three.value;
                variable[0] = parseInt(variable[0]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length === 1) {
                variable[0] += "3";
                variable[0] = parseInt(variable[0]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length === 2) {
                variable[2] = "3";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[2]);
                testingForNumbersVar2();
            } else if (variable.length > 2) {
                variable[2] += "3";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[2]);
                testingForNumbersVar2();
            }
        }
    };

    two.onclick = function () {
        testingForEqual();
        counter += 1;

        if (counter < 13) {
            if (variable.length < 1) {
                variable = [];
                variable[0] = two.value;
                variable[0] = parseInt(variable[0]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length === 1) {
                variable[0] += "2";
                variable[0] = parseInt(variable[0]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length === 2) {
                variable[2] = "2";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[2]);
                testingForNumbersVar2();
            } else if (variable.length > 2) {
                variable[2] += "2";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[2]);
                testingForNumbersVar2();
            }
        }
    };

    one.onclick = function () {
        testingForEqual();
        counter += 1;

        if (counter < 13) {
            if (variable.length < 1) {
                variable = [];
                variable[0] = one.value;
                variable[0] = parseInt(variable[0]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length === 1) {
                variable[0] += "1";
                variable[0] = parseInt(variable[0]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length === 2) {
                variable[2] = "1";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[2]);
                testingForNumbersVar2();
            } else if (variable.length > 2) {
                variable[2] += "1";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[2]);
                testingForNumbersVar2();
            }
        }
    };

    zero.onclick = function () {
        testingForEqual();
        counter += 1;
        if (counter < 13) {
            if (variable.length < 1) {
                variable = [];
                variable[0] = zero.value;
                variable[0] = parseInt(variable[0]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length === 1) {
                variable[0] += "0";
                variable[0] = parseInt(variable[0]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length === 2) {
                variable[2] = "0";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[2]);
                testingForNumbersVar2();
            } else if (variable.length > 2) {
                variable[2] += "0";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[2]);
                testingForNumbersVar2();
            }
        }
    };

    divide.onclick = function () {
        if (!variable[1]) {
            counter = 0;
            removeClasses();
            variable[1] = "/";
            $('#answer').text(variable[1]);
            console.log(variable);
        }
    };

    plus.onclick = function () {
        if (!variable[1]) {
            removeClasses();
            variable[1] = "+";
            $('#answer').text(variable[1]);
        } else if (globalEqual !== 0){
            removeClasses();
            variable = [];
            variable[0] = globalEqual;
            variable[1] = "+";
            $('#answer').text(variable[1]);
        }
    };

    minus.onclick = function () {
        if (!variable[1]) {
            removeClasses();
            variable[1] = "-";
            $('#answer').text(variable[1]);
        }
    };

    x.onclick = function () {
        if (!variable[1]) {
            removeClasses();
            variable[1] = "*";
            $('#answer').text(variable[1]);
        }
    };

    tochka.onclick = function () {
        var count = 0;
        count++;

        if (count < 2) {
            if (variable.length === 1) {
                variable[0] += ",";
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length === 2) {
                variable[2] = ",";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[2]);
                testingForNumbersVar2();
            } else if (variable.length > 2) {
                variable[2] += ",";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[2]);
                testingForNumbersVar2();
            }
        }
    };

    equal.onclick = function () {
        arrayLength = [];

        if (variable[1] === "*") {
            removeClasses();
            globalEqual = getProduct(variable[0], variable[2]);
            $('#answer').text(globalEqual);
            console.log(variable);
            globalEqual = globalEqual.toString();
            arrayLength = globalEqual.split('');
            console.log(arrayLength);
            testingForNumbersInGlobalEqual();
            globalEqual = parseInt(globalEqual);
        } else if (variable[1] === "-") {
            removeClasses();
            globalEqual = getDifference(variable[0], variable[2]);
            $('#answer').text(globalEqual);
            testingForNumbersInGlobalEqual();
            console.log(variable);
        } else if (variable[1] === "+") {
            removeClasses();
            globalEqual = getSum(variable[0], variable[2]);
            $('#answer').text(globalEqual);
            testingForNumbersInGlobalEqual();
            console.log(variable);
        } else if (variable[1] === "/") {
            removeClasses();
            globalEqual = getQuotient(variable[0], variable[2]);
            $('#answer').text(globalEqual);
            testingForNumbersInGlobalEqual();
            console.log(variable);
        }
    };

    ac.onclick = function () {
        removeClasses();
        variable = [];
        globalEqual = 0;
        counter = 0;
        arrayLength = [];
        variable[0] = zero.value;
        $('#answer').text(0);
    };

    ce.onclick = function () {
        if (variable[0] < 10) {
            variable[0] = 0;
            removeClasses();
            $('#answer').text("0");
        } else if (variable[2] < 10) {
            variable[2] = 0;
            removeClasses();
            $('#answer').text("0");
        } else if (variable[2]) {
            arrayLength = [];
            variable[2] = variable[2].toString();
            arrayLength = variable[2].split('');
            arrayLength.pop();
            variable[2] = arrayLength.join('');
            variable[2] = parseInt(variable[2]);
            removeClasses();
            testingForNumbersVar2();
            $('#answer').text(variable[2]);
        } else if (variable[0]) {
            arrayLength = [];
            variable[0] = variable[0].toString();
            arrayLength = variable[0].split('');
            arrayLength.pop();
            variable[0] = arrayLength.join('');
            variable[0] = parseInt(variable[0]);
            removeClasses();
            testingForNumbers();
            $('#answer').text(variable[0]);
        }
    }
};