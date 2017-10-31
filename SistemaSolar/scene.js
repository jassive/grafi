(function(){
let scene = new THREE.Scene(); //nuestra escena
const aspectRatio = window.innerWidth / window.innerHeight;
let camera = new THREE.PerspectiveCamera(75,aspectRatio,0.1,100); //nuestra 
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.render(scene,camera);

camera.position.z = 50;
camera.position.y = 5;

let mesh;

let loader = new THREE.TextureLoader();

loader.load('solq.jpg', function(texture){
    let geometry = new THREE.SphereGeometry(22,80,)
    let material = new THREE.MeshBasicMaterial({
        map:texture
    })
mesh = new THREE.Mesh(geometry,material);
mesh.position.y = 0;
mesh.position.x = -60;

scene.add(mesh);
})
loader.load('Mercurio.jpg', function(texture){
    let geometry = new THREE.SphereGeometry(3,50,)
    let material = new THREE.MeshBasicMaterial({
        map:texture
    })
mesh = new THREE.Mesh(geometry,material);
mesh.position.y = 5;
mesh.position.x = -25;

scene.add(mesh);
})
loader.load('Venus1.jpg', function(texture){
    let geometry = new THREE.SphereGeometry(3,50,)
    let material = new THREE.MeshBasicMaterial({
        map:texture
    })
mesh = new THREE.Mesh(geometry,material);
mesh.position.y = 10;
mesh.position.x = -13;
scene.add(mesh);
})
loader.load('Tierra.png', function(texture){
    let geometry = new THREE.SphereGeometry(3,50,)
    let material = new THREE.MeshBasicMaterial({
        map:texture
    })
mesh = new THREE.Mesh(geometry,material);
mesh.position.y = 15;
mesh.position.x = -2;
scene.add(mesh);
})
loader.load('Marte.jpg', function(texture){
    let geometry = new THREE.SphereGeometry(3,50,)
    let material = new THREE.MeshBasicMaterial({
        map:texture
    })
mesh = new THREE.Mesh(geometry,material);
mesh.position.y = 20;
mesh.position.x = 10;
scene.add(mesh);
})
loader.load('jupiter1.jpg', function(texture){
    let geometry = new THREE.SphereGeometry(5,50,)
    let material = new THREE.MeshBasicMaterial({
        map:texture
    })
mesh = new THREE.Mesh(geometry,material);
mesh.position.y = 4;
mesh.position.x = 25;
scene.add(mesh);
})
loader.load('saturno-1.jpg', function(texture){
    let geometry = new THREE.SphereGeometry(5,50,)
    let material = new THREE.MeshBasicMaterial({
        map:texture
    })
mesh = new THREE.Mesh(geometry,material);
mesh.position.y = 10;
mesh.position.x = 35;
scene.add(mesh);
})
loader.load('urano.jpg', function(texture){
    let geometry = new THREE.SphereGeometry(5,50,)
    let material = new THREE.MeshBasicMaterial({
        map:texture
    })
mesh = new THREE.Mesh(geometry,material);
mesh.position.y = 15;
mesh.position.x = 45;
scene.add(mesh);
})
loader.load('NeptunoV.jpg', function(texture){
    let geometry = new THREE.SphereGeometry(5,50,)
    let material = new THREE.MeshBasicMaterial({
        map:texture
    })
mesh = new THREE.Mesh(geometry,material);
mesh.position.y = 23;
mesh.position.x = 55;
scene.add(mesh);

})
loader.load('pluton.jpg', function(texture){
    let geometry = new THREE.SphereGeometry(1,50,)
    let material = new THREE.MeshBasicMaterial({
        map:texture
    })
mesh = new THREE.Mesh(geometry,material);
mesh.position.y = 35;
mesh.position.x = 75;
scene.add(mesh);

})


let geometry = new THREE.BoxGeometry(1,1,1,1);

let groundMaterial = new THREE.MeshPhongMaterial//creo el material 
({
    color: 0xffffff
});



let pointLight = new THREE.PointLight(0x404040);

pointLight.position.y = 80;


scene.add(new THREE.AmbientLight(0x404040));
scene.add(pointLight);



function loop(){ //muestre lo que tenemos 
    requestAnimationFrame(loop);
    mesh.rotation.y +=0.01;
    mesh.rotation.z +=0.01;
    mesh.rotation.x +=0.01;
    renderer.render(scene,camera);
}
loop();
//el primer numero es del tamaño del canvas (fov)
/*aspect:ancho y largo de la pantalla de la escena, el que ya existe 
near:cerca
fov:enfoque y profunidad de nuestra camara 
far:lejos*/
//rendere dibujar lo que se esta creando 
})();//clausura clausula