const express = require('express')
const app = express();
var users = [{
	name: "john",
	kidneys: [{
		healthy: false
	}]
}];

app.use(express.json());

app.get('/', function (req, res) {
	const johnk = users[0].kidneys;
	const numberofKidneys = johnk.length;
	let numberofHealthyK = 0;
	for(let i=0; i<johnk.length; i++){
		if(johnk[i].healthy){
		numberofKidneys +=1;
	}
}
const numberofUnHealthyK = numberofKidneys-numberofKidneys;
res.json({
	numberofKidneys,
	numberofHealthyK,
	numberofUnHealthyK
})	
})

app.post('/', function (req, res) {
	
	const isHealthy = req.body.isHealthy;
	users[0].kidneys.push({
		healthy: isHealthy
	})
	res.json({
		msg: "Done"
	})
  })

app.put('/', function (req, res) {
	for(let i=0; i<users[0].kidneys.length; i++){
		users[0].kidneys[i].healthy = true;
	}
	res.json({});
})

app.delete('/', function (req, res) {
	if(isoneUnhealthyK()){
		const newKidneys = [];
		for(let i=0; i<users[0].kidneys.length; i++){
			if(users[0].kidneys[i].healthy){
			newKidneys.push({
				healthy: true
			})
		}
	}
	users[0].kidneys = newKidneys;
	res.json({msg: "done"})
	}else{
		res.status(411).json({
			msg: "no bad kidneys"
		});
	}
})
  
  
app.listen(3000)

