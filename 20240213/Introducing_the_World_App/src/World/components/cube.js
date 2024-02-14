import { RingGeometry, Mesh, MeshBasicMaterial } from 'three';

function createCube() {
    const geometry = new RingGeometry;

    const material = new MeshBasicMaterial();

    const cube = new Mesh(geometry, material);

    cube.position.set(0, 2, 0);

    return cube;
}

export { createCube };