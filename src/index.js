var raw_data = Papa.parse("1548655200,1\n1548914400,1\n1549519200,1\n1549605600,1\n1549864800,1\n1550210400,1\n1550469600,2\n1550556000,12\n1550642400,6\n1550728800,1\n1551160800,2\n1551420000,1\n1551938400,2\n1552024800,2\n1553662800,2\n1555304400,1\n1555563600,1\n1555909200,1\n1561006800,1\n1562043600,1\n1564030800,1\n1565067600,2\n1567746000,2\n1568178000,2\n1568264400,3\n1568350800,1\n1568610000,1\n1569301200,1\n1569387600,3\n1569474000,2\n1569560400,2\n1569819600,2\n1569906000,5\n1569992400,2\n1570078800,1\n1570165200,5\n1570424400,3\n1570510800,3\n1570683600,1\n1571029200,1\n1571115600,2\n1571202000,1\n1571634000,1\n1571893200,2\n1571979600,1\n1572411600,2\n1572498000,1\n1572584400,1\n1572847200,1\n1572933600,2\n1573020000,1\n1573538400,1\n1573797600,1\n1574143200,1\n1574229600,1\n1575525600,1").data;

var data = {};

for (var i = 0; i < raw_data.length; i++) {
	data[raw_data[i][0]] = parseInt(raw_data[i][1]);
}

var cal = new CalHeatMap();  

cal.init({  
    domain: "month",  
    subDomain: "day",  
    cellSize: 40,  
    itemName: ["event", "events"],  
    data: data,  
    subDomainTextFormat: "%d",  
    range: 3,  
    displayLegend: true,  
	  legend: [1, 2, 3, 4],
    domainMargin: 15,  
    animationDuration: 100,  
    domainDynamicDimension: false,  
    start: new Date(2018, 12, 1),  
    end: new Date(2019, 12, 31),  
    scale: [1, 1, 1],  
    previousSelector: "#heatmap-previous",  
    nextSelector: "#heatmap-next",  
	  subDomain: "x_day",
	  label:{
			height: 20
		}
}); 