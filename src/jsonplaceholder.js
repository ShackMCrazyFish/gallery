export function getPhoto(){
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response => response.json())
        .then(json => {return json});
}