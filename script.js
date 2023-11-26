const horoscopeButton = document.getElementById('horoscopeButton');
const horoscopeContainer = document.getElementById('horoscopeContainer');

horoscopeButton.addEventListener('click', async function () {
    const period = document.getElementById('periodSelector').value;
    const zodiacSign = document.getElementById('zodiacSelector').value;

    const url = `https://daily-horoscope-api.p.rapidapi.com/api/Daily-Horoscope-English/?zodiacSign=${zodiacSign}&timePeriod=${period}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd6972a0a9fmsh2d6a027290b136ap1e17a2jsn16b8f77e5ddc',
            'X-RapidAPI-Host': 'daily-horoscope-api.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        if (result.status) {
            horoscopeContainer.innerHTML = result.prediction;
        } else {
            horoscopeContainer.innerHTML = 'Не удалось получить гороскоп';
        }
    } catch (error) {
        console.error(error);
        horoscopeContainer.innerHTML = 'Произошла ошибка';
    }
});