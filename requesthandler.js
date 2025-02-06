const fs = require('fs');
const main_view = fs.readFileSync('./main.html', 'UTF-8');
const FirstProject_view = fs.readFileSync('./FirstProject.html', 'UTF-8');
const SecondProject_view = fs.readFileSync('./SecondProject.html', 'UTF-8');
const ThirdProject_view = fs.readFileSync('./ThirdProject.html', 'UTF-8');



function main(response) {
    console.log('main');

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(main_view);
    response.end();    
}

// First
function FirstProject(response) {
    console.log('FirstProject');
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(FirstProject_view);
    response.end();    
}

// Second
function SecondProject(response) {
    console.log('SecondProject');

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(SecondProject_view);
    response.end();    
}

//Third
function ThirdProject(response) {
    console.log('ThirdProject');

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(ThirdProject_view);
    response.end();    
}

function map(response){
    fs.readFile('./img/map.png', function(err, data){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
    })
}

function trip(response){
    fs.readFile('./img/trip.jpg', function(err, data){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
    })
}

function blackRacket(response){
    fs.readFile('./img/pinball.jpg', function(err, data){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
    })
}

function main_css(response){
    fs.readFile('./main.css', function(err, data){
        response.writeHead(200, {'Content-Type': 'text/css'});
        response.write(data);
        response.end();
    })
}


let handle = {};
handle['/'] = main;
handle['/main.css'] = main_css;
handle['/FirstProject'] = FirstProject;
handle['/SecondProject'] = SecondProject;
handle['/ThirdProject'] = ThirdProject;
// image directory
handle['/img/map.png'] = map;
handle['/img/trip.jpg'] = trip;
handle['/img/pinball.jpg'] = blackRacket;

exports.handle = handle;

