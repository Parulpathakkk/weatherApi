const input = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");

async function getData(cityName) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=a0d0e1fe18534cd299e184038242705&q=${cityName}&aqi=yes`
  );
  return await promise.json();
}

searchBtn.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value);
  console.log(result.location.name);
  cityName.innerHTML = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
  cityTime.innerText = result.location.localtime;
  cityTemp.innerText = `${result.current.temp_c} degree celsius`;
});
