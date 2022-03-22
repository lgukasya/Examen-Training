async function petition(any){
    console.log(any);
    await fetch(`/sql/${any}`, {
        method: 'get',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => { createTable(data) })
}

function createTable(data){

    var table = document.getElementById('table');

    table.innerHTML = '';

    var tr, td1, td2, td3, td4;

    data.forEach(element => {
        tr = document.createElement('tr');
        td1 = document.createElement('td');
        td2 = document.createElement('td');
        td3 = document.createElement('td');
        td4 = document.createElement('td');

        td1.innerHTML = element.pais;
        td2.innerHTML = element.segell;
        td4.innerHTML = element.tema;
        td3.innerHTML = element.year;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        table.append(tr);
    });
}

var input = document.getElementById('input_year');

input.onkeyup = e => { petition(input.value); }