let val = (document.querySelector('.calories div:nth-child(3)').innerText);
let val_split = val.split(' ');
let val_num = parseInt(val_split[1], 10);

var xValues = ["Today's Calories", "Remaining Calories"];
var yValues = [val_num, 2000 - val_num];
var barColors = [
  "#6366f1",
  "#4438ca",
];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues,
			borderWidth:0,
    },
							{
								weight: 5
							}]
  },
	options:{
		plugins:{
			legend: false
		}
	}
});

for (i = 2; i < 7; i++) {

	let val = document.querySelector(
		".exercise-table tr:nth-child(" + i + ") td:nth-child(2)"
	);

	let length = val.innerText.substring(0, 2);

		val.innerHTML = '<div style="background-image:linear-gradient(to right,#410f70,#4D4DFF);color:#fff;width:'+(length/2)+'vw;font-weight:700; text-align:center;user-select: none;margin-right:20px;">'+length+' min</div>';	
}
