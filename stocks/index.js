const express = require('express');
const fs = require('fs');
const app = express();

function UpdateHistory(){
	let reserve = (Number)(fs.readFileSync('reserve','utf-8'));
	var pcoinsAround = 0;
	for (var i = 0; i < fs.readFileSync('data','utf-8').split('\n').length; i++){
		pcoinsAround+= (Number)(fs.readFileSync('data','utf-8').split('\n')[i].split(":")[1]);
	}
	fs.writeFileSync('history', fs.readFileSync('history','utf-8') +"\n" +String(reserve/pcoinsAround));
}


class Person
{
	constructor(a,b,c){

		this.name = String(a);
		this.balance = Number(b);
		this.password = String(c);
	}
}
app.get('/give/:name1/:am/:password' , function(req, res)
{
	for (var i = 0; i <fs.readFileSync('data','utf-8').split('\n').length; i++)
	{
		if(fs.readFileSync('data','utf-8').split('\n')[i].split(':')[0] == req.params.name1 && Number(req.params.amount) >=0)
		{
			for(var j = 0; j < fs.readFileSync('data','utf-8').split('\n').length; j++)
			{
				if(fs.readFileSync('data','utf-8').split('\n')[j].split(':')[3] == req.params.password)
				{
					var ppl = Person[fs.readFileSync('data','utf-8').split('\n').length];
					for (var k = 0; k < fs.readFileSync('data','utf-8').split('\n').length; k++)
					{
						let a = Person(
							fs.readFileSync('data','utf-8').split('\n')[k].split(':')[0],
							fs.readFileSync('data','utf-8').split('\n')[k].split(':')[1],
							fs.readFileSync('data','utf-8').split('\n')[k].split(':')[2]
						);
						ppl.push(
							a
						);
					}
					ppl[j].amount -= Number(req.params.amount);
					ppl[i].amount += Number(req.params.amount);
					var out = "";
					for (var s = 0; s < ppl.length; s++) {
						out += s==0 ? "" : "\n";
						out += ppl[s].name + ":" + String(ppl[s].amount) + ":" + ppl[s].password;
					}
					fs.writeFileSync('data',out);
				}
			}
		}
		else{
			for(var j = 0; j < fs.readFileSync('history','utf-8').split('\n').length; j++)
			{
				if(fs.readFileSync('history','utf-8').split('\n')[j].split(':')[3] == req.params.password)
				{
					
				}
			}
		}
	}
})
app.get('/',function(req, res) {
	UpdateHistory();

	var yValues = '[';

	for (var i = 0; i <fs.readFileSync('history','utf-8').split('\n').length ; i++) 
	{
		yValues += String(i) + (i ==fs.readFileSync('history','utf-8').split('\n').length - 1 ? "":',');
	}


	var xValues = "[";

	for (var i = 0; i <fs.readFileSync('history','utf-8').split('\n').length ; i++) 
	{
		xValues +=(fs.readFileSync('history','utf-8').split('\n')[i]) +  (i ==fs.readFileSync('history','utf-8').split('\n').length - 1 ? "":',');
	}

	yValues += ']';
	xValues += ']';

	res.send(`
	<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
	
	<div styles="width: 90%; height:90%;">
	<canvas id="myChart" width="1400" height="700"></canvas>
	
	</div>
	<script>
	
	var xValues = ${String(yValues)};
	var yValues = ${String(xValues)};

	new Chart("myChart", {
	  type: "line",
	  data: {
		labels: xValues,
		datasets: [{
			lineTension: 0.5,
			borderColor: "rgba(255,0,0,1)",
			fill: true,
		  data: yValues
		}]
	  },
	  options: {
		bezierCurve : true
	  }
	}); 

	</script>

	`);
});
app.listen(80,function() {console.log('susu')});