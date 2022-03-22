let json;

async function petition(){
    await fetch('/v/segells', {
        method: 'get',
        cache: 'no-cache',
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        json = data;
        call();
    })
}

function createTematiques(ciutat){
    let select = document.getElementById('tematiques');
    let option;

    select.innerHTML = '';

    json.segells.forEach(el => {
        if(el.comunitat === ciutat){
            for (let i = 0; i < el.tematica.length; i++) {
                console.log(el.tematica[i]);
                option = document.createElement('option');
                option.value = el.tematica[i];
                option.innerHTML = el.tematica[i];
                select.appendChild(option);
            }

            return;
        }
    });
}

async function createCiutats(){
    let select = document.getElementById('ciutats');
    let option;

    select.innerHTML = '';

    json.segells.forEach(el => {
        option = document.createElement('option');
        option.value = el.comunitat;
        option.innerHTML = el.comunitat;
        select.appendChild(option);
    });
}

function call(){
    createCiutats();
}

// Start
petition();


var ciutat_select = document.getElementById('ciutats');

ciutat_select.onchange = e => { createTematiques(e.target.value); }





