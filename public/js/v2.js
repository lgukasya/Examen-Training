async function petition(){
    await fetch('/v/segells', {
        method: 'get',
        cache: 'no-cache',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => { createTematiques(data); });
}

function createTematiques(data){
    var select = document.getElementById('tematiques');
    var option;

    data.segells.forEach(el => {
        for (let i = 0; i < el.tematica.length; i++) {
            option = document.createElement('option');
            option.value = el.tematica[i];
            option.innerHTML = el.tematica[i];
            select.appendChild(option);
        }
    });
}

petition();


