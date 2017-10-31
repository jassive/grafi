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
    
    loader.load('2.jpg', function(texture){
        let geometry = new THREE.SphereGeometry(20,80,)
        let material = new THREE.MeshBasicMaterial({
            map:texture
        })
    mesh = new THREE.Mesh(geometry,material);
    mesh.position.y = 0;
    mesh.position.x = 25;
    scene.add(mesh);
    })
    loader.load('4.png', function(texture){
        let geometry = new THREE.CylinderGeometry(10,10,20,5,5,false);
        let material = new THREE.MeshBasicMaterial({
            map:texture
        })
    mesh = new THREE.Mesh(geometry,material);
    mesh.position.y = 0;
    mesh.position.x = -55;
    scene.add(mesh);
    })
    loader.load('1.png', function(texture){
        let geometry = new THREE.CircleGeometry(10,80,)
        let material = new THREE.MeshBasicMaterial({
            map:texture
        })
    mesh = new THREE.Mesh(geometry,material);
    mesh.position.y = 0;
    mesh.position.x = -25;
    scene.add(mesh);
    })
    loader.load('3.jpg', function(texture){
        let geometry = new THREE.CubeGeometry(10,10,10)
        let material = new THREE.MeshBasicMaterial({
            map:texture
        })
    mesh = new THREE.Mesh(geometry,material);
    mesh.position.y = 20;
    mesh.position.x = 5;
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