function calculate()
{
	let kg = parseInt(document.getElementById("kg").value)
	let cm = parseInt(document.getElementById("cm").value)

	console.log(kg);
	console.log(cm);

	if (kg == 0 || cm == 0 || isNaN(kg) || isNaN(cm))
	{
		console.log("AAAAAAAAAAAAAAAAA");
		document.getElementById("bmi").innerHTML = "Invalid data"
		document.getElementById("cat").innerHTML = ""
		return
	}

	let m = cm / 100.0

	let bmi = kg / Math.pow(m, 2)

	let eredmeny = "Underweight"

	if (between(bmi, 18.5, 25.0))
		eredmeny = "Normal"
	if (between(bmi, 25.0, 30.0))
		eredmeny = "Chonker"
	if (between(bmi, 30.0, 35.0))
		eredmeny = "Mega chonker"
	if (bmi > 35.0)
		eredmeny = "Giga chonker"

	document.getElementById("bmi").innerHTML = `BMI: <b>${bmi.toFixed(2)}</b>`
	document.getElementById("cat").innerHTML = `Category: <b>${eredmeny}</b>`
}

function bmiclear()
{
	console.log("clear");
	document.getElementById("kg").value = ""
	document.getElementById("cm").value = ""
	document.getElementById("bmi").innerHTML = ""
	document.getElementById("cat").innerHTML = ""
}

function between(v, a, b)
{
	return v >= a && v < b
}