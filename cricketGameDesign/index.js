var insertSomething = function () {
    var c = 0;
    for (var j = 1; j <= 10; j++) {
        for (var i = 0; i < 6; i++) {
            var scores = [0, 1, 2, 3, 4, 6];
            var random = Math.floor(Math.random() * scores.length);
            var row = document.getElementsByTagName("tr")[j];
            var x = row.cells[i + 1];
            x.innerHTML = "" + scores[random];
            c += scores[random];
            if (scores[random] == 0) {
                x = row.cells[7];
                x.innerHTML = "" + c;
                break;
            }
        }
        if ("" + c !== 0) {
            var x = row.cells[7];
            x.innerHTML = "" + c;
        }
        c = 0;
    }
    team1();
};
var insertSecondPhase = function () {
    var c = 0;
    for (var j = 1; j <= 10; j++) {
        for (var i = 0; i < 6; i++) {
            var scores = [0, 1, 2, 3, 4, 6];
            var random = Math.floor(Math.random() * scores.length);
            var row = document.getElementsByTagName("tr")[j + 11];
            var x = row.cells[i + 1];
            x.innerHTML = "" + scores[random];
            c += scores[random];
            if (scores[random] == 0) {
                x = row.cells[7];
                x.innerHTML = "" + c;
                break;
            }
        }
        if ("" + c !== 0) {
            var x = row.cells[7];
            x.innerHTML = "" + c;
        }
        c = 0;
    }
    team2();
};
var teaM1, teaM2;
var team1 = function () {
    c = 0;
    for (var i = 1; i <= 10; i++) {
        var row = document.getElementsByTagName("tr")[i];
        c += +row.cells[7].innerHTML;
    }
    var a = document.getElementById('ts1');
    a.innerHTML = c;
    teaM1 = c;
};
var team2 = function () {
    c = 0;
    for (var i = 1; i <= 10; i++) {
        var row = document.getElementsByTagName("tr")[i + 11];
        c += +row.cells[7].innerHTML;
    }
    var a = document.getElementById('ts2');
    a.innerHTML = c;
    teaM2 = c;
};
var matchWinners = function () {
    var winner = document.getElementById("MW");
    if (teaM1 > teaM2) {
        winner.innerHTML = " TEAM 1";
        var b = document.getElementById('MOM3');
        b.innerHTML = "TEAM 1";
        manOfMatch();
    }
    else {
        winner.innerHTML = " TEAM 2";
        var b = document.getElementById('MOM3');
        b.innerHTML = "TEAM 2";
        manOfMatch2();
    }
};
var manOfMatch = function () {
    var a = [];
    for (var i = 0; i < 10; i++) {
        var row = document.getElementsByTagName("tr")[i + 1];
        a[i] = +row.cells[7].innerHTML;
    }
    console.log(a);
    var maxx = a.indexOf(Math.max.apply(Math, a));
    var maxx2 = Math.max.apply(Math, a);
    console.log(maxx2);
    var b = document.getElementById('MOM1');
    b.innerHTML = "Player" + (maxx + 1);
    var c = document.getElementById("MOM2");
    c.innerHTML = "Score :" + maxx2;
};
var manOfMatch2 = function () {
    var a = [];
    for (var i = 0; i < 10; i++) {
        var row = document.getElementsByTagName("tr")[i + 12];
        a[i] = +row.cells[7].innerHTML;
    }
    console.log(a);
    var maxx = a.indexOf(Math.max.apply(Math, a));
    var maxx2 = Math.max.apply(Math, a);
    console.log(maxx2);
    var b = document.getElementById('MOM1');
    b.innerHTML = "Player" + (maxx + 1);
    var c = document.getElementById("MOM2");
    c.innerHTML = "Score :" + maxx2;
};
