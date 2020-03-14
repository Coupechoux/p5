let fish;
let fishs = [];
let bubbles = [];
let time = 0;
let acc_time = 100;
let acc_angle_time = 1000;

function setup() {
	createCanvas(window.innerWidth-10, window.innerHeight-10);
	for(let i = 0 ; i < 10 ; i++) {
		let fish = {
			"pos": createVector(Math.random()*width, Math.random()*height),
			"speed": Math.random(),
			"acc": Math.random()-0.5,
			"reverse": Math.random()<0.5?true:false,
			"angle": Math.random()*2*Math.PI,
			"speed_angle": Math.random()/100-0.005,
			"acc_angle": Math.random()/100-0.005,
			"size": 10+Math.random()*50,
			"color": color(Math.random()*100+155,Math.random()*50,Math.random()*50)
		};
		fishs.push(fish);
	}
	for(let i = 0 ; i < 100 ; i++) {
		let bubble = {
			"pos":createVector(Math.random()*width, Math.random()*height),
			"size":Math.random()*10+10,
			"color":color(Math.random()*100, Math.random()*100, Math.random()*55+200, 100)
		};
		bubbles.push(bubble);
	}
}

function draw() {
	background(50,50,255);
	draw_bubbles();
	draw_fishs();
	move_all();
	time+=1;
}

function draw_fishs() {
	for(let i = 0 ; i < fishs.length ; i++) {
		draw_modulo_fish(fishs[i]);
	}
}

function draw_modulo_fish(fish) {
	for(let x = -1; x<=1 ; x++) {
		for(let y = -1; y<=1 ; y++) {
			push();
			draw_origin_fish(fish, fish["pos"].x+x*width, fish["pos"].y+y*height);
			pop();
		}
	}
}

function draw_origin_fish(fish,tx,ty){
	let mult = (fish["reverse"]?-1:1);
	push();
	translate(tx,ty);
	rotate(fish["angle"]);
	fill(fish["color"]);
	stroke(fish["color"]);
	let size = fish["size"];
	triangle(-size*mult,-size/2,-size*mult,size/2,0,0);
	ellipse(size/2*mult,0,2*size,size);
	stroke(0);
	fill(0);
	let eye_pos = createVector(size*mult, -size/5);
	circle(eye_pos.x, eye_pos.y, size/6);
	stroke(255);
	fill(255);
	let rotated_eye_pos = eye_pos.copy();
	rotated_eye_pos.rotate(fish["angle"]);
	let direction = createVector(mouseX,mouseY).sub(tx,ty).sub(rotated_eye_pos).rotate(-fish["angle"]);
	direction.normalize();
	direction.mult(size/30);
	circle(eye_pos.x+direction.x, eye_pos.y+direction.y, size/24);
	pop();
}

function draw_bubbles() {
	for(let i = 0 ; i < bubbles.length ; i++) {
		let bubble = bubbles[i];
		stroke(bubble["color"]);
		fill(bubble["color"]);
		circle(bubble["pos"].x, bubble["pos"].y, bubble["size"]);
	}
}

function move_all() {
	for(let i = 0 ; i < bubbles.length ; i++) {
		let bubble = bubbles[i];
		if(bubble["pos"].y < bubble["size"]) {
			bubble["pos"] = createVector(Math.random()*width, height+bubble["size"]);
		} else {
			bubble["pos"].add(Math.random()-0.5, -1);
		}
	}
	for(let i = 0 ; i < fishs.length ; i++) {
		let fish = fishs[i];
		let forward = createVector(cos(fish["angle"]), sin(fish["angle"])).mult(fish["speed"]);
		if(fish["reverse"]) {
			forward.mult(-1);
		}
		fish["pos"].add(forward);
		if(fish["pos"].x >= width) {
			fish["pos"].x = 0;
		}
		if(fish["pos"].x < 0) {
			fish["pos"].x = width-1;
		}
		if(fish["pos"].y >= height) {
			fish["pos"].y = 0;
		}
		if(fish["pos"].y < 0) {
			fish["pos"].y = height-1;
		}
		fish["speed"] += fish["acc"];
		if(fish["speed"]<=0) {
			fish["speed"]=-fish["speed"];
			fish["acc"]=-fish["acc"];
			fish["reverse"]=!fish["reverse"];
		}
		if(fish["speed"]>2) {
			fish["speed"]=2;
			fish["acc"]=0;
		}
		if(time%acc_time==0) {
			fish["acc"]=Math.random()/10-0.05;
		}
		fish["angle"]+=fish["speed_angle"];
		fish["speed_angle"]+=fish["acc_angle"];
		if(fish["speed_angle"]>0.005) {
			fish["speed_angle"] = 0.005;
			fish["acc_angle"]=0;
		}
		if(fish["speed_angle"]<-0.005) {
			fish["speed_angle"] = -0.005;
			fish["acc_angle"]=0;
		}
		if(time%acc_angle_time == 0) {
			fish["acc_angle"] = Math.random()/100-0.005;
		}
	}
}
