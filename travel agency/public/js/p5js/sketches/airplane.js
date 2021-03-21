
var airplane_sketch = function(sketch){
    const animation_container=document.querySelector('#airplane-animation-container');
    //global variables
    var window_height=150;
    var window_width=1690;
    var plane_img;
    var speed_x=2;
    var speed_y=0.5;
    var dir=-1;

    class airplane{
    
        constructor(img){
            this.img=img;
            this.x=-20;
            this.y=window_height/2;
            this.visible=1;
        }
        show(){
            sketch.imageMode(sketch.CENTER);
            this.img.resize(200,100);
            sketch.image(this.img,this.x,this.y);
        }
        update_position(){
            this.x+=speed_x;
            this.y+=dir*speed_y;
            if(this.x>window_width+50){
            this.x=-20;
            }
            if(this.y<50){
            dir=1;
            }
            else if(this.y>(window_height-50)){
            dir=-1;
            }
        }
    }
    sketch.setup = function() {
        let canvas=sketch.createCanvas(window_width,window_height);
        canvas.parent(animation_container);
        canvas.elt.style.display="block";
    }
    sketch.preload= function(){
        plane_img= sketch.loadImage("./public/img/airplane.png");
        plane1 = new airplane(plane_img);
    }
    sketch.draw= function() {
        sketch.background(0,0,0,0);
        sketch.clear();
        plane1.show();
        plane1.update_position();
    }
}

var airplaneSketch=new p5(airplane_sketch);