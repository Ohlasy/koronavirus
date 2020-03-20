async function getData() {
  const dataUrl =
    "https://api.apify.com/v2/key-value-stores/K373S4uCFR9W1K8ei/records/LATEST?disableRedirect=true";
  const response = await fetch(dataUrl);
  return await response.json();
}

async function getStats() {
  const container = document.getElementById("stats");
  container.innerText = "Stahuji aktuální statistiky…";
  try {
    const data = await getData();
    const tested = data.totalTested;
    const infected = data.infected;
    const cured = data.recovered;
    const jmk = data.infectedByRegion.find(e => e.name === "Jihomoravský kraj")
      .value;
    const fmt = new Intl.NumberFormat("cs-CZ").format;
    container.innerHTML = `
        Aktuální statistiky za celou ČR: Testovaných případů ${fmt(tested)},
        nakažených ${fmt(data.infected)} (z toho JMK: ${jmk}), uzdravených
        ${fmt(cured)}.

    `;
  } catch (err) {
    console.error(err);
    container.innerText =
      "Aktuální statistiky se nepodařilo načíst, zkuste to prosím později.";
  }
}

window.onload = getStats;
