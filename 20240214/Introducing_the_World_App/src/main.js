import { World } from './World/World.js';

function main() {

    // Get a reference to the container element
    const container = document.querySelector('#scene-container');
    
    const showButton = document.querySelector('#showButton');

    // 1. Create an instance of the World app
    const world = new World(container);


    showButton.addEventListener("click", () => { world.render() });
    
}

main();
