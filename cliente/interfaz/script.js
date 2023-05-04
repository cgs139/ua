const timeRange = document.getElementById('time');
const timeValue = document.getElementById('time-value');
timeRange.addEventListener('input', () => {
	timeValue.textContent = `${timeRange.value} minutos`;
});

const temperatureRange = document.getElementById('temperature');
const temperatureValue = document.getElementById('temperature-value');
temperatureRange.addEventListener('input', () => {
	temperatureValue.textContent = `${temperatureRange.value} ºC`;
});