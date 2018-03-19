var pic = document.getElementById("vimage");
var btn = document.getElementById("switch");

var norway = [14, 14, 11];
var japan = [4, 5, 4];

var count = true;

var drawMedals = function(g, s, b) {
    var gold = document.createElementNS(
	"http://www.w3.org/2000/svg",
	"circle"
    );
    gold.setAttribute("fill", "yellow");
    gold.setAttribute("r", 10 * g);
    gold.setAttribute("cx", pic.getAttribute("width") / 2);
    gold.setAttribute("cy", pic.getAttribute("height") * (1 / 3));
    gold.setAttribute("stroke", "black");
    var silver = document.createElementNS(
	"http://www.w3.org/2000/svg",
	"circle"
    );
    silver.setAttribute("fill", "grey");
    silver.setAttribute("r", 10 * s);
    silver.setAttribute("cx", pic.getAttribute("width") * (1 / 5));
    silver.setAttribute("cy", pic.getAttribute("height") / 2);
    silver.setAttribute("stroke", "black");
    var bronze = document.createElementNS(
	"http://www.w3.org/2000/svg",
	"circle"
    );
    bronze.setAttribute("fill", "brown");
    bronze.setAttribute("r", 10 * b);
    bronze.setAttribute("cx", pic.getAttribute("width") * (4 / 5));
    bronze.setAttribute("cy", pic.getAttribute("height") / 2);
    bronze.setAttribute("stroke", "black");
    pic.appendChild(gold);
    pic.appendChild(silver);
    pic.appendChild(bronze);
};

var change = function() {
    if (count) { //norway
	var p = d3.select("svg")
		.selectAll("circle")
		.data(norway)
		.attr("r", function(d){return 5 * d;});
	document.getElementById("country").innerHTML = "Country: Norway";
    }
    else {
	var p = d3.select("svg")
		.selectAll("circle")
		.data(japan)
		.attr("r", function(d){return 5 * d;});
	document.getElementById("country").innerHTML = "Country: Japan";
    }
    count = !count;
};

drawMedals(0, 0, 0);
btn.addEventListener("click", change);
