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
            console.log(data);
            var app = document.getElementById('app');
            app.innerHTML = JSON.stringify(data);
        });
}

petition();


