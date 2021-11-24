const getRace = async function(Season, Round){
    let response = await fetch(`https://ergast.com/api/f1/${Season}/${Round}.json`)
    let data = response.json()
    return data
}

const racerForm = document.getElementById('racerForm');

racerForm.addEventListener('submit', async (e) =>{
    e.preventDefault();
    let Season = e.target.Season.value;
    let Round = e.target.Round.value;
    let racerData = await getRace(Season, Round);

    let season = document.createElement('season');
    season.innerHTML = `<div class="container">Season: <br> ${racerData.MRData.RaceTable.season}</div><br><br> `;
    season.style.cssText = 'width:100%; height:100%;';
    document.body.append(season);

    let round = document.createElement('round');
    round.innerHTML = `<div class="container">Round: <br> ${racerData.MRData.RaceTable.round}</div><br><br> `;
    round.style.cssText = 'width:100%; height:100%;';
    document.body.append(round); 

    let raceName = document.createElement('raceName');
    raceName.innerHTML = `<div class="container">Race Name: <br>  ${racerData.MRData.RaceTable.Races[0].raceName}</div><br><br> `;
    raceName.style.cssText = 'width:100%; height:100%;';
    document.body.append(raceName);

    let date = document.createElement('date');
    date.innerHTML = `<div class="container">Date: <br> ${racerData.MRData.RaceTable.Races[0].date}</div><br><br> `;
    date.style.cssText = 'width:100%; height:100%;';
    document.body.append(date);

    let circuitName = document.createElement('circuitName');
    circuitName.innerHTML = `<div class="container">Circuit Name: <br> ${racerData.MRData.RaceTable.Races[0].Circuit.circuitName}</div><br><br> `;
    circuitName.style.cssText = 'width:100%; height:100%;';
    document.body.append(circuitName);

    let locality = document.createElement('locality');
    locality.innerHTML = `<div class="container">City: <br> ${racerData.MRData.RaceTable.Races[0].Circuit.Location.locality}</div><br><br> `;
    locality.style.cssText = 'width:100%; height:100%;';
    document.body.append(locality);

    let country = document.createElement('country');
    country.innerHTML = `<div class="container">Country: <br> ${racerData.MRData.RaceTable.Races[0].Circuit.Location.country}</div><br><br> `;
    country.style.cssText = 'width:100%; height:100%;';
    document.body.append(country);
    

})