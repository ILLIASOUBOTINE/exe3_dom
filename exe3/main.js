const titre = document.querySelector("#carre");
console.dir(titre);

function update() {
    let item = this.event.target;
    if (item.name === "color") {
        titre.style.backgroundColor = `rgb(${item.value}, ${item.value}, ${item.value})`;
        titre.style.color = `rgb(${255 - item.value}, ${255 - item.value}, ${255 -item.value})`;
    }

    if (item.name === "padding") {
        titre.style.padding = `${item.value}px`;
    }

    if (item.name === "height") {
        titre.style.height = `${item.value}px`;
    }

    if (item.name === "width") {
        titre.style.width = `${item.value}px`;
    }

    if (item.name === "radius") {
        titre.style.borderRadius = `${item.value}px`;
    }

    if (item.name === "rotation") {
        titre.style.transform = `rotate(${item.value}deg)`;
    }

    

}




