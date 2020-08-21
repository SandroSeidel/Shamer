console.log('AAAAAAASKJDNSKADJNKSANDKJ')

async function getJoke(tag) {
    const response = await fetch('https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=' + String(tag)); 

    const data = await response.json();
    console.log(data);
}

getJoke('racist');  



