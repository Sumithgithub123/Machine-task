export async function getWheather(showBoundary) {
  try {
    const res = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=10&lon=76.5&appid=365ac845a0a267389a36ff44bc7f1526"
    );
    const data = await res.json();
    return data;
  } catch (e) {
    return showBoundary(e);
  }
}
