document.addEventListener('DOMContentLoaded',()=>{
    const params = new URLSearchParams(location.search);
    const episodeId = params.get('episodeId');

    async function getEpisode(){
        const response = await fetch(`https://swapi.dev/api/films/${episodeId}`);
        const data = await response.json();
        createInfo(data)
        getPlanets(data.planets)
    }

    async function createInfo(data){
        
        const mainDiv = document.createElement('div');
        mainDiv.classList.add('mainDiv');
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('imgDiv');
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('infoDiv')
        const titleDiv = document.createElement('div')
        titleDiv.classList.add('titleDiv')
        const titleName = document.createElement('h1');
        const titleEpisode = document.createElement('h1');
        titleName.classList.add('title')
        titleEpisode.classList.add('title')
        const romanNumbers = {1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI'}
    
        titleName.textContent = `Star Wars: ${data.title}`;
        titleEpisode.textContent = `(Episode ${romanNumbers[data.episode_id]})`

        const date = document.createElement('p');
        date.classList.add('info')
        date.textContent = `Release date: ${data.release_date}`;

        const director = document.createElement('p');
        director.classList.add('info')
        director.textContent = `Director: ${data.director}`;

        const producer = document.createElement('p');
        producer.classList.add('info')
        producer.textContent = `Producer: ${data.producer}`

        const opening = document.createElement('p');
        opening.classList.add('info')
        opening.textContent = data.opening_crawl

        const imgIV = document.createElement('img')
        imgIV.classList.add('img')
        imgIV.src = '/src/img/IVdetail.jpeg' 

        const imgV = document.createElement('img')
        imgV.classList.add('img')
        imgV.src = '/src/img/Vdetail.jpeg'

        const imgVI = document.createElement('img')
        imgVI.classList.add('img')
        imgVI.src = '/src/img/VIdetail.jpeg'

        const imgI = document.createElement('img')
        imgI.classList.add('img')
        imgI.src = '/src/img/Idetail.jpeg'

        const imgII = document.createElement('img')
        imgII.classList.add('img')
        imgII.src = '/src/img/IIdetail.jpeg'    
        
        const imgIII = document.createElement('img')
        imgIII.classList.add('img')
        imgIII.src = '/src/img/IIIdetail.jpeg'

        const cadrDiv = document.createElement('div');
        cadrDiv.classList.add('cadrDiv');

        const imgIcadr = document.createElement('img');
        imgIcadr.classList.add('img');
        imgIcadr.src = '/src/img/Icadr.jpg'

        const imgIIcadr = document.createElement('img');
        imgIIcadr.classList.add('img');
        imgIIcadr.src = '/src/img/IIcadr.jpg'

        const imgIIIcadr = document.createElement('img');
        imgIIIcadr.classList.add('img');
        imgIIIcadr.src = '/src/img/IIIcadr.jpg'

        const imgIVcadr = document.createElement('img');
        imgIVcadr.classList.add('img');
        imgIVcadr.src = '/src/img/IVcadr.jpg'

        const imgVcadr = document.createElement('img');
        imgVcadr.classList.add('img');
        imgVcadr.src = '/src/img/Vcadr.jpg'

        const imgVIcadr = document.createElement('img');
        imgVIcadr.classList.add('img');
        imgVIcadr.src = '/src/img/VIcadr.jpg'
        
        
        switch(data.episode_id){
            case 4:
                imgDiv.append(imgIV)
                cadrDiv.append(imgIVcadr)
                break;
            case 5: 
                imgDiv.append(imgV)
                cadrDiv.append(imgVcadr)
                break;
            case 6:
                imgDiv.append(imgVI)
                cadrDiv.append(imgVIcadr)
                break;
            case 1:
                imgDiv.append(imgI)
                cadrDiv.append(imgIcadr)
                break
            case 2:
                imgDiv.append(imgII)
                cadrDiv.append(imgIIcadr)
                break;
            case 3:
                imgDiv.append(imgIII)
                cadrDiv.append(imgIIIcadr)
                break;
        }
        

        titleDiv.append(titleName, titleEpisode)
        infoDiv.append(titleDiv)
        infoDiv.append(date)
        infoDiv.append(director)
        infoDiv.append(producer)
        infoDiv.append(opening)
        infoDiv.append(cadrDiv)

        mainDiv.append(imgDiv, infoDiv)
        document.body.append(mainDiv)
    }
    
    async function getPlanets(planetsData){
        let planetsInfo = []
        for (const planet of planetsData){
            const response = await fetch(planet)
            const data = await response.json()
            planetsInfo.push(data)
        }
        createPlanets(planetsInfo)

    }

    function createPlanets(planetsInfo){
        const planetsContainer = document.createElement('div')
        planetsContainer.classList.add('planetsContainer')
        const planetsTitle = document.createElement('h2')
        planetsTitle.classList.add('title')
        planetsTitle.textContent = 'Planets' 
        document.body.append(planetsTitle)
        for (planet of planetsInfo){
            const planetDiv = document.createElement('div');
            planetDiv.classList.add('planetDiv')
            const namePlanet = document.createElement('h3');
            namePlanet.classList.add('planetTitle')
            namePlanet.textContent = planet.name

            const diameterPlanet = document.createElement('p')
            diameterPlanet.classList.add('planetText')
            diameterPlanet.textContent = `Diameter: ${planet.diameter}`

            const climatePlanet = document.createElement('p')
            climatePlanet.classList.add('planetText')
            climatePlanet.textContent = `Climate: ${planet.climate}`

            const terrainPlanet = document.createElement('p');
            terrainPlanet.classList.add('planetText')
            terrainPlanet.textContent = `Terrain: ${planet.terrain}`

            const populationPlanet = document.createElement('p')
            populationPlanet.classList.add('planetText')
            populationPlanet.textContent = `Population: ${planet.population}`
            
            
            planetDiv.append(namePlanet, diameterPlanet, climatePlanet, terrainPlanet, populationPlanet)
            planetsContainer.append(planetDiv)
            document.body.append(planetsContainer)
        }   
        
      
    }
    getEpisode()
})