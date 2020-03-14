const circle_on_click = (sketch) => {
	sketch.setup = () => {
		sketch.createCanvas(800,600);
		sketch.background(0);
		sketch.strokeWeight(3);
		sketch.stroke(255);
		sketch.noFill();
	};

	sketch.mouseClicked = () => {
		sketch.ellipse(sketch.mouseX, sketch.mouseY, 50, 50);
	};
};

const circle_on_move = (sketch) => {
	sketch.setup = () => {
		sketch.createCanvas(800,600);
		sketch.background(0);
		sketch.strokeWeight(1);
		sketch.stroke(255);
		sketch.noFill();
		sketch.frameRate(5);
	};

	sketch.mouseMoved = () => {
		sketch.ellipse(sketch.mouseX, sketch.mouseY, 50, 50);
	};
};

const fading_circle_on_move = (sketch) => {
	sketch.setup = () => {
		sketch.createCanvas(800,600);
		sketch.background(0);
		sketch.strokeWeight(1);
		sketch.stroke(255);
		sketch.noFill();
	};
	
	sketch.draw = () => {
		sketch.background(0,0,0,10);
	};

	sketch.mouseMoved = () => {
		sketch.ellipse(sketch.mouseX, sketch.mouseY, 50, 50);
	};
};

const changing_shape = (sketch) => {
	sketch.setup = () => {
		sketch.createCanvas(800,600);
		sketch.background(0);
		sketch.strokeWeight(3);
		sketch.stroke(255);
		sketch.noFill();
	};
	
	sketch.draw = () => {
		sketch.background(0);
		if(sketch.mouseY < sketch.height/2) {
			sketch.rect(sketch.width/2-50, sketch.height/2-50, 100, 100);
		} else {
			sketch.ellipse(sketch.width/2, sketch.height/2, 100, 100);
		}
	};
};

const changing_shape_and_size = (sketch) => {
	sketch.setup = () => {
		sketch.createCanvas(800,600);
		sketch.background(0);
		sketch.strokeWeight(3);
		sketch.stroke(255);
		sketch.noFill();
	};
	
	sketch.draw = () => {
		sketch.background(0);
		let size = sketch.mouseX;
		if(sketch.mouseY < sketch.height/2) {
			sketch.rect(sketch.width/2-size/2, sketch.height/2-size/2, size, size);
		} else {
			sketch.ellipse(sketch.width/2, sketch.height/2, size, size);
		}
	};
};

const changing_shape_and_size_and_color = (sketch) => {
	let t = 0;
	sketch.setup = () => {
		sketch.createCanvas(800,600);
		sketch.background(0);
		sketch.strokeWeight(3);
		sketch.stroke(255);
		sketch.noFill();
	};
	
	sketch.draw = () => {
		sketch.background(0);
		sketch.fill(0,t%256,0);
		let size = sketch.mouseX;
		if(sketch.mouseY < sketch.height/2) {
			sketch.rect(sketch.width/2-size/2, sketch.height/2-size/2, size, size);
		} else {
			sketch.ellipse(sketch.width/2, sketch.height/2, size, size);
		}
		t++;
	};
};

const changing_shape_and_size_and_color_with_click = (sketch) => {
	let t = 0;
	let color_scale = 0;
	sketch.setup = () => {
		sketch.createCanvas(800,600);
		sketch.background(0);
		sketch.strokeWeight(3);
		sketch.stroke(255);
		sketch.noFill();
	};
	
	sketch.draw = () => {
		sketch.background(0);
		if(color_scale == 0) {
			sketch.fill(t%256,0,0);
		} else if(color_scale == 1) {
			sketch.fill(0,t%256,0);
		} else {
			sketch.fill(0,0,t%256);
		}
		let size = sketch.mouseX;
		if(sketch.mouseY < sketch.height/2) {
			sketch.rect(sketch.width/2-size/2, sketch.height/2-size/2, size, size);
		} else {
			sketch.ellipse(sketch.width/2, sketch.height/2, size, size);
		}
		t++;
	};
	
	sketch.mouseClicked = () => {
		color_scale = (color_scale+1)%3;
	};
};

const complex_shape = (sketch) => {
	sketch.setup = () => {
		sketch.createCanvas(800,600);
		sketch.strokeWeight(3);
		sketch.stroke(255);
		sketch.noFill();
		sketch.background(0);
		sketch.drawAShape(sketch.width/2, sketch.height/2);
	};
	
	sketch.drawAShape = (x,y) => {
		sketch.ellipse(x,y,100,100);
		sketch.ellipse(x,y,100,50);
		sketch.ellipse(x,y,50,100);
		sketch.ellipse(x,y,50,50);
	};
};

const multiple_complex_shape = (sketch) => {
	sketch.setup = () => {
		sketch.createCanvas(800,600);
		sketch.strokeWeight(3);
		sketch.stroke(255);
		sketch.noFill();
	};
	
	sketch.draw = () => {
		sketch.background(0);
		sketch.drawAShape(sketch.width/2,sketch.height/2);
		sketch.drawAShape(3*sketch.width/4,sketch.height/4);
		sketch.drawAShape(3*sketch.width/4,3*sketch.height/4);
		sketch.drawAShape(sketch.width/4,3*sketch.height/4);
		sketch.drawAShape(sketch.width/4,sketch.height/4);
		sketch.drawAShape(sketch.mouseX, sketch.mouseY);
	}
	
	sketch.drawAShape = (x,y) => {
		sketch.ellipse(x,y,100,100);
		sketch.ellipse(x,y,100,50);
		sketch.ellipse(x,y,50,100);
		sketch.ellipse(x,y,50,50);
	};
};

const multiple_complex_shape_multiple_size = (sketch) => {
	sketch.setup = () => {
		sketch.createCanvas(800,600);
		sketch.strokeWeight(3);
		sketch.stroke(255);
		sketch.noFill();
	};
	
	sketch.draw = () => {
		sketch.background(0);
		sketch.drawAShape(sketch.width/2,sketch.height/2,200);
		sketch.drawAShape(3*sketch.width/4,sketch.height/4,100);
		sketch.drawAShape(3*sketch.width/4,3*sketch.height/4,100);
		sketch.drawAShape(sketch.width/4,3*sketch.height/4,100);
		sketch.drawAShape(sketch.width/4,sketch.height/4,100);
		sketch.drawAShape(sketch.mouseX, sketch.mouseY,50);
	}
	
	sketch.drawAShape = (x,y,size) => {
		sketch.ellipse(x,y,size,size);
		sketch.ellipse(x,y,size,size/2);
		sketch.ellipse(x,y,size/2,size);
		sketch.ellipse(x,y,size/2,size/2);
	};
};

const random_white = (sketch) => {
	sketch.setup = () => {
		sketch.createCanvas(800,600);
		sketch.background(0);
		sketch.strokeWeight(3);
		sketch.stroke(255);
	};

	sketch.draw = () => {
		for(var i = 0 ; i < 500 ; i++) {
			var x = Math.random() * sketch.width;
			var y = Math.random() * sketch.height;
			sketch.point(x,y);
		}
	};
};

const random_random = (sketch) => {
	sketch.setup = () => {
		sketch.createCanvas(800,600);
		sketch.background(0);
		sketch.strokeWeight(3);
	};

	sketch.draw = () => {
		for(var i = 0 ; i < 500 ; i++) {
			var x = Math.random() * sketch.width;
			var y = Math.random() * sketch.height;
			sketch.stroke(Math.random()*255, Math.random()*255, Math.random()*255);
			sketch.point(x,y);
		}
	};
};

const organized_random_v1 = (sketch) => {
	sketch.setup = () => {
		sketch.createCanvas(800,600);
		sketch.background(0);
		sketch.strokeWeight(3);
	};

	sketch.draw = () => {
		for(var i = 0 ; i < 500 ; i++) {
			var x = Math.random() * sketch.width;
			var y = Math.random() * sketch.height;
			sketch.stroke(x*255/sketch.width, 0, 255);
			sketch.point(x,y);
		}
	};
};

const organized_random_v2 = (sketch) => {
	sketch.setup = () => {
		sketch.createCanvas(800,600);
		sketch.background(0);
		sketch.strokeWeight(3);
	};

	sketch.draw = () => {
		for(var i = 0 ; i < 500 ; i++) {
			var x = Math.random() * sketch.width;
			var y = Math.random() * sketch.height;
			sketch.stroke(x*255/sketch.width, 0, y*255/sketch.height);
			sketch.point(x,y);
		}
	};
};

const cylinder = (sketch) => {
	let x = 0;
	
	sketch.setup = () => {
		sketch.createCanvas(800,600);
		sketch.stroke(255,0,0);
		sketch.strokeWeight(30);
	};

	sketch.draw = () => {
		sketch.background(0,0,255);
		sketch.point(x, sketch.height/2);
		x = (x+5)%sketch.width;
	};
};

const world_tour = (sketch) => {
	let x = 0;
	let y = 0;
	
	sketch.setup = () => {
		sketch.createCanvas(800,600);
		sketch.stroke(255,0,0);
		sketch.strokeWeight(30);
	};

	sketch.draw = () => {
		sketch.background(0,0,255);
		sketch.point(x,y);
		x = (x+5)%sketch.width;
		y = (y+5)%sketch.height;
	};
};

const bouncing = (sketch) => {
	let x = 0;
	let dx = 5;
	
	sketch.setup = () => {
		sketch.createCanvas(800,600);
		sketch.stroke(255,0,0);
		sketch.strokeWeight(30);
	};

	sketch.draw = () => {
		sketch.background(0,0,255);
		sketch.point(x,sketch.height/2);
		x+=dx;
		if(x < 0 || x > sketch.width) {
			dx = -dx;
		}
	};
};

const bouncing_2D = (sketch) => {
	let x = 0;
	let dx = 5;
	let y = 0;
	let dy = 3;
	
	sketch.setup = () => {
		sketch.createCanvas(800,600);
		sketch.stroke(255,0,0);
		sketch.strokeWeight(30);
	};

	sketch.draw = () => {
		sketch.background(0,0,255);
		sketch.point(x,y);
		x+=dx;
		if(x < 0 || x > sketch.width) {
			dx = -dx;
		}
		y+=dy;
		if(y < 0 || y > sketch.height) {
			dy = -dy;
		}
	};
};

const bouncing_2D_with_friction = (sketch) => {
	let x = 0;
	let dx = 10;
	let y = 0;
	let dy = 6;
	
	sketch.setup = () => {
		sketch.createCanvas(800,600);
		sketch.stroke(255,0,0);
		sketch.strokeWeight(30);
	};

	sketch.draw = () => {
		sketch.background(0,0,255);
		sketch.point(x,y);
		x+=dx;
		if(x <= 0 || x >= sketch.width) {
			dx = -dx;
		}
		y+=dy;
		if(y <= 0 || y >= sketch.height) {
			dy = -dy;
		}
		dx *= 0.995;
		dy *= 0.995;
	};
	
	sketch.mouseClicked = () => {
		dx *= 5;
		dy *= 5;
	}
};




const square_line = (sketch) => {
	sketch.setup = () => {
		sketch.createCanvas(800,600);
		sketch.background(255);
		sketch.fill(0);
	};

	sketch.draw = () => {
		for(var j = 0 ; j < 10 ; j++) {
			sketch.rect(100+50*j, 100, 40, 40);
		}
	};
};

const square_grid = (sketch) => {
	sketch.setup = () => {
		sketch.createCanvas(800,600);
		sketch.background(255);
		sketch.fill(0);
	};

	sketch.draw = () => {
		for(var i = 0 ; i < 7 ; i++) {
			for(var j = 0 ; j < 10 ; j++) {
				sketch.rect(100+50*j, 100+50*i, 40, 40);
			}
		}
	};
};

const moving_square_grid_horizontal = (sketch) => {
	let t=0;
	
	sketch.setup = () => {
		sketch.createCanvas(800,600);
		sketch.fill(0);
	};

	sketch.draw = () => {
		sketch.background(255);
		for(var i = 0 ; i < 7 ; i++) {
			for(var j = 0 ; j < 10 ; j++) {
				let offset = Math.abs((t+j)%50-25);
				sketch.rect(100+50*j + offset, 100+50*i, 40, 40);
			}
		}
		t+=0.5;
	};
};

const moving_square_grid_diagonal = (sketch) => {
	let t=0;
	
	sketch.setup = () => {
		sketch.createCanvas(800,600);
		sketch.fill(0);
	};

	sketch.draw = () => {
		sketch.background(255);
		for(var i = 0 ; i < 7 ; i++) {
			for(var j = 0 ; j < 10 ; j++) {
				let offset_x = Math.abs((t+j)%50-25);
				let offset_y = Math.abs((t+i)%20-10);
				sketch.rect(100+50*j + offset_x, 100+50*i + offset_y, 40, 40);
			}
		}
		t+=0.5;
	};
};


