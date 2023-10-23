var lCode=[]
function setup() {
	lCode=
["blo",1000,309,
"blo",1040,309,
"blo",1080,309,
"blo",1120,309,
"blo",1160,269,
"blo",1160,309,
"blo",1200,309,
"blo",1200,269,
"blo",1240,269,
"blo",1240,309,
"blo",1280,269,
"blo",1280,309,
"blo",1360,269,
"blo",1440,269,
"blo",1400,269,
"blo",1320,269,
"spi",1320,229,
"spi",1360,229,
"blo",1320,309,
"blo",1360,309,
"blo",1400,309,
"blo",1440,309,
"blo",1400,229,
"blo",1440,229,
"blo",1480,229,
"blo",1520,229,
"blo",1560,229,
"blo",1680,229,
"blo",1640,229,
"blo",1600,229,
"blo",1720,229,
"blo",1760,229,
"blo",1800,229,
"blo",1880,229,
"blo",1840,229,
"spi",1720,189,
"spi",1760,189,
"blo",1800,189,
"blo",1840,189,
"blo",1880,189,
"blo",2040,229,
"blo",2200,189,
"blo",2360,269,
"spi",1920,309,
"spi",1960,309,
"spi",2000,309,
"spi",1880,309,
"spi",2040,309,
"spi",2080,309,
"spi",2120,309,
"spi",2160,309,
"spi",2200,309,
"spi",2240,309,
"spi",2280,309,
"spi",2320,309,
"spi",2800,309,
"blo",3120,309,
"blo",3160,309,
"blo",3280,309,
"blo",3320,309,
"blo",3360,309,
"blo",3400,309,
"spi",3200,309,
"spi",3240,309,
"spi",3080,309,
"blo",3520,269,
"blo",3920,189,
"blo",3960,189,
"blo",4000,189,
"blo",4040,189,
"blo",4080,189,
"blo",4120,229,
"blo",4160,229,
"blo",4200,229,
"blo",4240,229,
"blo",4400,229,
"blo",4440,229,
"blo",4480,229,
"blo",4520,229,
"spi",4240,309,
"spi",4280,309,
"spi",4320,309,
"spi",4360,309,
"spi",4400,309,
"spi",4960,309,
"spi",5000,309,
"blo",5280,309,
"blo",5320,269,
"blo",5240,309,
"blo",5200,309,
"blo",5360,269,
"blo",5400,269,
"blo",5440,269,
"blo",5480,269,
"blo",5520,269,
"blo",5560,269,
"spi",5600,309,
"spi",5640,309,
"spi",5760,309,
"spi",5800,309,
"blo",3840,189,
"blo",3880,189,
"blo",3760,189,
"blo",3680,229,
"blo",3640,229,
"blo",3800,189,]
	
//	print(lCode)
	//lCode=getItem("saveLevelCode")
	createCanvas(700,450);
	
	for(let i=0;i<lCode.length;i+=1){
		if(lCode[i]=="spi"){blocks.push(new spike(lCode[i+1],lCode[i+2]))}
		if(lCode[i]=="blo"){blocks.push(new block(lCode[i+1],lCode[i+2]))}
		//print('"'+lCode[i].id+'",'+lCode[i].x+","+lCode[i].y+",")
	}
	background(100);
	player={
		x:75,
		y:height-100,
		yVel:0,
		dead:false,
		air:false,
		rot:0,
		xR:0,
		jumpst:0,
		c:0,
		speed:12,
		move:function(){			
			if(!this.dead){this.xR+=(player.speed)}
			if(frameCount>1){this.y+=this.yVel}else{this.y+=this.yVel}
										stroke(0);
										
			if(this.y>height-99){this.y-=this.yVel;this.yVel=0;this.air=false;}else{}this.yVel+=1.3
				 while(this.y>height-99){this.y-=0.1}
			// if(this.yVel<0.2&&this.yVel>-0.2){
			// 	this.yVel-=0
			// 	 }
										if(this.dead){home=1;this.dead=false;this.y=height-100;placeOY=round(placeOY/40);placeO=round(placeO/40);player.xR=0;
																	this.yVel=0;
											this.c+= 1*60/frameRate()
											if(this.c>60){
		player.dead=false;
			}}else{this.c=0}
									 },
		show:function(){					
				 
			// if(this.yVel<0.2&&this.yVel>-0.2){
			// 	this.yVel-=0
			// 	 }
					if(this.air){	this.rot+=8}else{if(this.rot>round(this.rot/90)*90+40){this.rot-=38}else{
																					if(this.rot<round(this.rot/90)*90-40){this.rot+=38}else{this.rot=round(this.rot/90)*90}}
																					}

			if(keyIsDown(32)||mouseIsPressed||keyIsDown(38)){if(this.air==false){this.yVel=-13.3;this.air=true}}
			if(!this.dead){
			translate(75,this.y)
										angleMode(DEGREES)
			rotate(this.rot)
			rectMode(CENTER)
			fill(0,0,125)
			noStroke();
			rect(0,0,40)
		}
		}
	}
	home = 0
}
var player
var home=0
var lCode=[]
function ground(){
fill(0,0,0)
										rectMode(CORNER)
										stroke(255)
		strokeWeight(1)
	if(home==1){
rect(-10,height-100+20+2,width+10,placeOY+150)
rect(-10,height-100+20+2,width+20,placeOY+150)}else{
rect(-10,height-100+20+2,width+10,150)
rect(-10,height-100+20+2,width+20,150)}

}
var camY=0

function draw() {
	if(home==10){
	background(0);
		fill(255)
		noStroke();
		textAlign(CENTER,CENTER);
		textSize(50)
		text("You beat the level!",width/2,height/2)
	}
	if(home==0){
		push()
		//print(player.xR)
		
		if(player.xR>9000){home=10}
		
		if(-player.y+height-100>height-100){
		if(camY>-player.y+height-100+3){camY-=3}else{
																					if(camY<-player.y+height-100-3){camY+=3}else{camY=-player.y+height-100}}}else{if(camY>-player.y+height-100+3){camY-=player.yVel+30}}
		translate(0,camY)
	background(23,23,70)
ground()
	player.air=true
	noStroke()
		player.move()
	noStroke()
	//bGrid()
						//eGrid()

noStroke()
	for(let i=0;i<blocks.length;i++){
		blocks[i].show()
	}	for(let i=0;i<sMoves.length;i++){
		sMoves[i].show()
		if(sMoves[i].x<-100){sMoves.splice(i,1);i--}
	}push()
	player.show()
	pop()
// 	if(!player.dead){
// 	if(frameCount%(24+4)==0){
// 	blocks.push(new block(width+100,height-90-40-random(150-40)))
// }	if(frameCount%25==0){
// 	sMoves.push(new gS())
// }if(frameCount%(32*3+round(random(45)/8)*8)==9){
// 	blocks.push(new spike(width+100,height-90-40))
// }}
// 	if(frameCount>2){
// 		if(!player.dead){
// 				player.xR+=(11.2 *40)/getFrameRate();

// 		}else{		}
		
//}
		pop()
		time=0;
}
	if(home==1){
	time=0;player.dead=false;home=0
		
// 			background(23,23,70)
// 		push()
// 				translate(0,-placeOY)

// ground()
// 		pop()
// 	noStroke()
// 				eGrid()

		
// 	noStroke()
// 	//bGrid()
// 		noStroke()	
// 		push()
// 		translate(-placeO,-placeOY)
// 	for(let i=0;i<blocks.length;i++){
	
// 		blocks[i].show()
// 	}	
// 		pop()
		
// 	for(let i=0;i<sMoves.length;i++){
// 		sMoves[i].show()
// 		if(sMoves[i].x<100){sMoves.splice(i,1);i--}
// 	}push()
	
// if(keyIsDown(82)){home=0;}
// if(keyIsDown(37)){placeO-=10}
// if(keyIsDown(39)){placeO+=10}
// if(keyIsDown(40)){placeOY-=-10}
// if(keyIsDown(38)){placeOY+=-10}
// 		if(frameCount%30==0){
// 		lCode=[]
// 			for(let i=0;i<blocks.length;i++){
// 			lCode.push({x:blocks[i].x,y:blocks[i].y-40,id:blocks[i].id})
// 			}				//storeItem("saveLevelCode",lCode)
		

// 		}
	}
}
var time=0;
var pst=0
var placeO=0
var placeOY=0
var blocks=[]
var mode="block"
var modes=["block","spike","del"]
function mouseDragged(){
placeB()
}function mousePressed(){
placeB()
}
function placeB(){
	if(home == 1){

	if(mouseIsPressed){
				if(mode=="block"){
		blocks.push(new block(mouseX+placeO,mouseY-40+placeOY))}
				if(mode=="spike"){
				blocks.push(new spike(mouseX+placeO,mouseY-40+placeOY))
				}	if(mode=="del"){
					for(let i=0;i<blocks.length;i++){
						if(blocks[i].x>mouseX-20+placeO&&blocks[i].x<mouseX+20+placeO&&blocks[i].y>mouseY-20+placeOY&&blocks[i].y<mouseY+20+placeOY){blocks.splice(i,1);i--}
					}
									 
				}
		}}
}
function keyPressed(){
	if(key>0&&key<=modes.length){
		mode=modes[key-1]
	}
	if(key==9){home=1}
}
function block(x,y){
this.x=round(x/40)*40
	this.y=round(y/40)*40+29
	this.id="blo"
	this.xh=round(x/40)*40
	this.show=function(){
if(!player.dead&&home==0){
	this.x-=(player.speed/1.4)}	
		if(home==1||player.dead){this.x=this.xh;
		}
		fill(0,0,0)
		rectMode(CENTER)
		stroke(255)
		strokeWeight(1)
		rect(this.x,this.y,40)
		rect(this.x,this.y,40)
		rect(this.x,this.y,40)
		rect(this.x,this.y,40)
		noStroke();
					if(player.y>this.y-39&&player.y<this.y+20&&player.x>this.x-39&&player.x<this.x+39){player.y-=player.yVel;player.yVel=0;player.air=false;}

					if(player.y>this.y-25&&player.y<this.y+35&&player.x>this.x-39&&player.x<this.x+39){player.dead=true}

							 while(player.y>this.y-39&&player.y<this.y+20&&player.x>this.x-39&&player.x<this.x+39){player.y-=0.1}

	}
}
var sMoves=[]
function spike(x,y){
this.x=round(x/40)*40
this.x2=round(x/40)*40
	this.id="spi"
	this.y=round(y/40)*40+29
	this.show=function(){
		if(!player.dead&&home==0){
	this.x-=player.speed/1.4 }
		if(home==1||player.dead){this.x=this.x2;
		}
		fill(0,0,0)
		rectMode(CENTER)
		stroke(255)
		strokeWeight(1 )
		triangle(this.x-20,this.y+20,this.x+20,this.y+20,this.x,this.y-20)
		triangle(this.x-20,this.y+20,this.x+20,this.y+20,this.x,this.y-20)
		noStroke()
					if(player.y>this.y-39&&player.y<this.y+39&&player.x>this.x-25&&player.x<this.x+25){player.dead=true}

	
	}
}
function bGrid(){
	stroke(0,0,125,120)
	for(let i=0+(-player.xR/10%120)-150;i<width+(-player.xR/10%120)+150;i+=120){
		strokeWeight(2)
	line(i,0,i,height-100)
	}for(let i=0+(-player.xR%120)-150;i<width+(-player.xR%120)+150;i+=120){
		strokeWeight(2)
	line(i,height-100,i,height)
	}
}
function gS(){
this.x=width+100
	this.y=height-50+10+(170/4)+10
	this.s=170
	this.f=color(0,0,100)

	this.show=function(){
		if(!player.dead){
		this.x-=(11.2 *40)/getFrameRate();} // 40 fps cap
		rectMode(CENTER)
		fill(this.f)
		noStroke()
		rect(this.x,this.y,this.s,this.s,15)
		
	}
}
function eGrid(){

		stroke(0,0,0)
	for(let i=0+(-placeOY%40)-100+20+(round(player.y/40)*40)-40-40-40-40-40-40-40-40;i<height+(-placeOY%40)+100+20+(round(player.y/40)*40)-40-40-40-40-40-40-40-40;i+=40){
		strokeWeight(2)
	line(0,i+20-10,width,i+20-10)
	}for(let i=0+(-placeO%40)+(-player.xR%40)-100+20;i<width+(-placeO%40)+(-player.xR%40)+100+20;i+=40){
		strokeWeight(2)
	line(i+20,0+(round(player.y/40)*40)-40-40-40-40-40-40-40-40,i+20,height+(round(player.y/40)*40)-40-40-40-40-40-40-40-40)
	}
}
