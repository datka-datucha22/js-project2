axios.get('https://covid-api.mmediagroup.fr/v1/cases').then((response) => {
    console.log(response.data);
    const propertyNames = Object.entries(response.data);
    console.log(propertyNames);

    for (let i = 0; i < propertyNames.length; i++) {
        // console.log(propertyNames[i]);
    }
    console.log(propertyNames[66][1].All);
    for (let i = 0; i < propertyNames.length; i++) {
        // console.log(propertyNames[i][1].All.location);
    }

    function eseni() {
        let geo = propertyNames[66][1].All
        for (let i = 0; i < propertyNames.length; i++) {
            let sel = document.getElementById('sel')
            let opt = document.createElement('option')
            let info = document.getElementById('info')
            let info1 = document.getElementById('info1')
            let info2 = document.getElementById('info2')
            let info3 = document.getElementById('info3')
            let info4 = document.getElementById('info4')
            let infos = document.querySelector('.infos')

            sel.appendChild(opt)
            opt.innerHTML = propertyNames[i][1].All.country
            opt.classList.add(i)
            let information = document.querySelector('.information')







        }
        console.log(geo);
        console.log(sel);

        sel.addEventListener('change', function () {
            let kk = document.getElementById('sel').value



            for (let i = 0; i < propertyNames.length; i++) {
                let button = document.querySelector('.button')

                if (propertyNames[i][0] == kk) {
                    info.innerHTML = 'country: ' + propertyNames[i][1].All.country;
                    button.style.display = 'flex'
                    info1.innerHTML = 'continent: ' + propertyNames[i][1].All.continent;
                    info2.innerHTML = 'deaths: ' + propertyNames[i][1].All.deaths;
                    info3.innerHTML = 'population: ' + propertyNames[i][1].All.population;
                    info4.innerHTML = 'continent: ' + propertyNames[i][1].All.continent;
                }


            }
        })
        let button = document.querySelector('.button')
        let button1 = document.querySelector('.button1')
        button.addEventListener('click', function () {
            for (let i = 0; i < propertyNames.length; i++) {
                let kk = document.getElementById('sel').value
                if (propertyNames[i][0] == kk) {
                    info.innerHTML = 'country: ' + propertyNames[i][1].All.country;
                    button.style.display = 'none'
                    info1.style.display = 'flex'
                    info2.style.display = 'flex'
                    info3.style.display = 'flex'
                    info4.style.display = 'flex'
                    button1.style.display = 'flex'
                }

            }

        })
        button1.addEventListener('click', function () {
            for (let i = 0; i < propertyNames.length; i++) {
                let kk = document.getElementById('sel').value
                if (propertyNames[i][0] == kk) {
                    info.innerHTML = 'country: ' + propertyNames[i][1].All.country;
                    button.style.display = 'none'
                    info1.style.display = 'none'
                    info2.style.display = 'none'
                    info3.style.display = 'none'
                    info4.style.display = 'none'
                    button1.style.display = 'none'
                }
            }

        })


    }
    eseni()
})