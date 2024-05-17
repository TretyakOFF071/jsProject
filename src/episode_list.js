document.addEventListener('DOMContentLoaded',()=>{


    async function getEpisodes(){
        const response = await fetch('https://swapi.dev/api/films/');
        const data = await response.json();
        createFilms(data.results);
    }

    function createFilms(data) {
        const filmsDiv = document.getElementById('filmsDiv');
        filmsDiv.classList.add('filmsDiv')
        filmsDiv.innerHTML = '';
        const romanNumbers = {1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI'}
        for (const film of data){
            const filmCard = document.createElement('div')
            filmCard.classList.add('filmCard')
            const cardImgDiv = document.createElement('div');
            cardImgDiv.setAttribute('style', 'margin: 0 auto; width: 100%; height: 600px; border: none; border-radius: 25px; background-color: grey;')
            const cardBottom = document.createElement('div');
            cardBottom.setAttribute('style', 'margin: 0 auto; text-align: center;')
            const cardBottomTitle = document.createElement('h3');
            cardBottomTitle.setAttribute('style', 'font-size: 30px; color: white')
            cardBottomTitle.textContent = `${romanNumbers[film.episode_id]}. ${film.title}`
            let episodeId = null

            const imgIV = document.createElement('img')
            imgIV.classList.add('img')
            imgIV.src = '/src/img/IV.jpg' 

            const imgV = document.createElement('img')
            imgV.classList.add('img')
            imgV.src = '/src/img/V.jpg'

            const imgVI = document.createElement('img')
            imgVI.classList.add('img')
            imgVI.src = '/src/img/VI.jpg'

            const imgI = document.createElement('img')
            imgI.classList.add('img')
            imgI.src = '/src/img/I.jpg'

            const imgII = document.createElement('img')
            imgII.classList.add('img')
            imgII.src = '/src/img/II.jpg'    
            
            const imgIII = document.createElement('img')
            imgIII.classList.add('img')
            imgIII.src = '/src/img/III.jpg'
            
            switch(film.episode_id){
                case 4:
                    episodeId = 1;
                    cardImgDiv.append(imgIV)
                    break;
                case 5: 
                    episodeId = 2;
                    cardImgDiv.append(imgV)
                    break;
                case 6:
                    episodeId = 3;
                    cardImgDiv.append(imgVI)
                    break;
                case 1:
                    episodeId = 4;
                    cardImgDiv.append(imgI)
                    break
                case 2:
                    episodeId = 5;
                    cardImgDiv.append(imgII)
                    break;
                case 3:
                    episodeId = 6;
                    cardImgDiv.append(imgIII)
                    break;
            }

            // cardBottomTitle.href = `/detail.html?episodeId=${episodeId}`
            filmCard.addEventListener('click', ()=>{
                window.location.href = `/detail.html?episodeId=${episodeId}`
            })
            cardBottom.append(cardBottomTitle)
            filmCard.append(cardImgDiv, cardBottom)
            filmsDiv.append(filmCard)
        }

    }


    function createDom() {
        const h1 = document.createElement('h1');
        h1.setAttribute('style', 'font-size: 45px')
        const headDiv = document.createElement('div');
        headDiv.setAttribute('style', 'margin: 0 auto; margin-bottom: 50px; text-align: center; color: white; background-color: black')
        headDiv.append(h1);
        h1.textContent = 'Films';
        document.body.append(headDiv);

        const filmsDiv = document.createElement('div');
        filmsDiv.innerHTML = 'Loading...';
        filmsDiv.setAttribute('style', 'margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: space-between');
        filmsDiv.setAttribute('id', 'filmsDiv');
        document.body.append(filmsDiv);
    }

    createDom();
    getEpisodes();

})