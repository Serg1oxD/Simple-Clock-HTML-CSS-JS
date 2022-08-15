const addZeros = n =>{
	if(n.toString().lenght < 2) return "0".concat(n);
	return n;
}

const updateTime = () =>{
	const time = new Date();

	let hours = addZeros(time.getHours());
	let minutes = addZeros(time.getMinutes());
	let seconds = addZeros(time.getSeconds());

	document.querySelector(".hour").textContent = hours;
	document.querySelector(".minute").textContent = minutes;
	document.querySelector(".second").textContent = seconds;
}

updateTime();
setInterval(updateTime, 1000);