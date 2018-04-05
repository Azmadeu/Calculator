var variable = [];
var invisibleVar = [];
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

function testingForNumbers() {
    if (variable[0] > 9 && variable[0] <= 99) {
        $('#answer').addClass('left2');
    } else if (variable[0] >= 99 && variable[0] <= 999) {
        $('#answer').removeClass('left2');
        $('#answer').addClass('left3');
    } else if (variable[0] >= 999 && variable[0] <= 9999) {
        $('#answer').removeClass('left3');
        $('#answer').addClass('left4');
    } else if (variable[0] >= 9999 && variable[0] <= 99999) {
        $('#answer').removeClass('left4');
        $('#answer').addClass('left5');
    } else if (variable[0] >= 99999 && variable[0] <= 999999) {
        $('#answer').removeClass('left5');
        $('#answer').addClass('left6');
    } else if (variable[0] >= 999999 && variable[0] <= 9999999) {
        $('#answer').removeClass('left6');
        $('#answer').addClass('left7');
    } else if (variable[0] >= 9999999 && variable[0] <= 99999999) {
        $('#answer').removeClass('left7');
        $('#answer').addClass('left8');
    } else if (variable[0] >= 99999999 && variable[0] <= 999999999) {
        $('#answer').removeClass('left8');
        $('#answer').addClass('left9');
    } else if (variable[0] >= 999999999 && variable[0] <= 9999999999) {
        $('#answer').removeClass('left9');
        $('#answer').addClass('left10');
    } else if (variable[0] >= 9999999999 && variable[0] <= 99999999999) {
        $('#answer').removeClass('left10');
        $('#answer').addClass('left11');
    } else if (variable[0] >= 99999999999 && variable[0] <= 999999999999) {
        $('#answer').removeClass('left11');
        $('#answer').addClass('left12');
    } else if (variable[0] >= 999999999999 && variable[0] <= 9999999999999) {
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
    console.log(divide.value);
    console.log(variable);

    nine.onclick = function () {
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
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length > 2) {
                variable[2] += "9";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            }
        }
    };

    eight.onclick = function () {
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
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length > 2) {
                variable[2] += "8";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            }
        }
    };

    seven.onclick = function () {
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
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length > 2) {
                variable[2] += "7";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            }
        }
    };

    six.onclick = function () {
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
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length > 2) {
                variable[2] += "6";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            }
        }
    };

    five.onclick = function () {
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
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length > 2) {
                variable[2] += "5";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            }
        }
    };

    four.onclick = function () {
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
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length > 2) {
                variable[2] += "4";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            }
        }
    };

    three.onclick = function () {
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
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length > 2) {
                variable[2] += "3";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            }
        }
    };

    two.onclick = function () {
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
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length > 2) {
                variable[2] += "2";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            }
        }
    };

    one.onclick = function () {
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
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length > 2) {
                variable[2] += "1";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            }
        }
    };

    zero.onclick = function () {
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
                $('#answer').text(variable[0]);
                testingForNumbers();
            } else if (variable.length > 2) {
                variable[2] += "0";
                variable[2] = parseInt(variable[2]);
                $('#answer').text(variable[0]);
                testingForNumbers();
            }
        }
    };

    divide.onclick = function () {
        variable[1] = "/";
        variable[0] += variable[1];
        $('#answer').text(variable[0]);
        console.log(variable);
    };

    plus.onclick = function () {
        if (variable.length === 1) {
            variable[1] = plus.value;
            $('#answer').text(plus.value);
        }
    };

    minus.onclick = function () {
        if (variable.length === 1) {
            variable[1] = minus.value;
            $('#answer').text(minus.value);
        }
    };

    x.onclick = function () {
        if (variable.length === 1) {
            variable[1] = x.value;
            $('#answer').text(x.value);
        }
    };

    tochka.onclick = function () {
        $('#answer').text(tochka.value);
    };

    equal.onclick = function () {
        if (variable[1] == "*") {
            globalEqual = getProduct(variable[0], variable[2]);
        } else if (variable[1] == "-") {
            globalEqual = getDifference(variable[0], variable[2]);
        } else if (variable[1] == "+") {
            globalEqual = getSum(variable[0], variable[2]);
        } else if (variable[1] == "/") {
            globalEqual = getQuotient(variable[0], variable[2])
        }
    };

    ac.onclick = function () {
        removeClasses();
        variable = [];
        globalEqual = 0;
        variable[0] = zero.value;
        $('#answer').text(0);
    };

    ce.onclick = function () {
        removeClasses();
        variable = [];
        globalEqual = 0;
        variable[0] = zero.value;
        $('#answer').text(0);
    }
};
