var variable = [];
var globalEqual = 0;

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

function testingForNumbers() {
    if (variable[0] > 9) {
        $('#entry').addClass('left');
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

        if (variable.length < 1) {
            variable = [];
            variable[0] = "9";
            $('#answer').text(variable[0]);
            testingForNumbers();
        } else if (variable.length === 1) {
            variable[0] += "9";
            $('#answer').text(variable[0]);
            testingForNumbers();
          console.log(variable[0]);
        } else if (variable.length === 2) {
            variable[2] = "9";
            $('#answer').text(variable[0]);
            testingForNumbers();
        } else if (variable.length > 2) {
            variable[2] += "9";
            $('#answer').text(variable[0]);
            testingForNumbers();
        }
    };

    eight.onclick = function () {
        variable[0] = eight.value;
        $('#answer').text(eight.value);
    };

    seven.onclick = function () {
        variable[0] = seven.value;
        $('#answer').text(seven.value);
    };

    six.onclick = function () {
        variable[0] = six.value;
        $('#answer').text(six.value);
    };

    five.onclick = function () {
        variable[0] = five.value;
        $('#answer').text(five.value);
    };

    four.onclick = function () {
        variable[0] = four.value;
        $('#answer').text(four.value);
    };

    three.onclick = function () {
        variable[0] = three.value;
        $('#answer').text(three.value);
    };

    two.onclick = function () {
        variable[0] = two.value;
        $('#answer').text(two.value);
    };

    one.onclick = function () {
        variable[0] = one.value;
        $('#answer').text(one.value);
    };

    zero.onclick = function () {
        variable[0] = zero.value;
        $('#answer').text(zero.value);
    };

    divide.onclick = function () {
        if (variable.length === 1) {
            variable[1] = divide.value;
            $('#answer').text(divide.value);
        }
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
        variable = [];
        globalEqual = 0;
        variable[0] = zero.value;
        $('#answer').text(0);
    };

    ce.onclick = function () {
        variable = [];
        globalEqual = 0;
        variable[0] = zero.value;
        $('#answer').text(0);
    }
};
