// Simple Calculator prototype 1 (one operation per time)

"use strict"; //it's not realy important in this one (function way is the best)

var num = document.getElementsByClassName("numbers"),
    out = document.getElementById("output"),
    eql = document.getElementsByClassName("eql-mark"),
    cMark = document.getElementsByClassName("c-mark"),
    mark = document.getElementsByClassName("mark"),
    oldValue,
    newValue,
    v;

    /* click on ( + , - ,* , / ) to save oldvalue , clear the output
     and Determine the value of V to start the operation*/
mark[0].onclick = function () {
    oldValue = parseFloat(out.textContent);
    v = "plus";
    out.textContent = " ";
};

mark[1].onclick = function () {
    oldValue = parseFloat(out.textContent);
    v = "min";
    out.textContent = " ";
};

mark[2].onclick = function () {
    oldValue = parseFloat(out.textContent);
    v = "power";
    out.textContent = " ";
};

mark[3].onclick = function () {
    oldValue = parseFloat(out.textContent);
    v = "dev";
    out.textContent = " ";
};

//save the newValue then the operation (get v then do)

eql[0].onclick = function () {
    newValue = parseFloat(out.textContent);
   
    if (v === "plus") {
        out.textContent = oldValue + newValue;
    } else if (v === "min") {
        out.textContent = oldValue - newValue;
    } else if (v === "power") {
        out.textContent = oldValue * newValue;
    } else if (v === "dev") {
        out.textContent = oldValue / newValue;
    }
    
};

// clear the output
cMark[0].onclick = function () { out.textContent = " "; };

// click to type the number

num[0].onclick = function () { out.textContent += 1; };

num[1].onclick = function () { out.textContent += 2; };

num[2].onclick = function () { out.textContent += 3; };

num[3].onclick = function () { out.textContent += 4; };

num[4].onclick = function () { out.textContent += 5; };

num[5].onclick = function () { out.textContent += 6; };

num[6].onclick = function () { out.textContent += 7; };

num[7].onclick = function () { out.textContent += 8; };

num[8].onclick = function () { out.textContent += 9; };

num[9].onclick = function () { out.textContent += 0; };

num[10].onclick = function () { out.textContent += "."; };



