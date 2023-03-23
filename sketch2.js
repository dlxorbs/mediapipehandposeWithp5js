let canvas;
// p5js를 사용할 수 잇도록 일단 제작이된것 p5js와 다르게 p.이라고 쓰고 제작해야됨 
let sketch = function(p) {
    p.setup = function() {
    canvas =  p.createCanvas(1280, 720, p.WEBGL);
    };
  
    p.draw = function() {
      p.clear();
      p.translate(-(p.width)/2 , -p.height/2)
      console.log(FACEMESH_LEFT_IRIS)
//detection이 undefined가 아닐때
      if(detections != undefined){
        //detections.multiHandLandmarks가 undefined가 아닐때
        if(detections.multiFaceLandmarks != undefined){
          //draweyes라는 함수를 실행시켜라
          p.draweyes();
        }
      }
    };
//draweyes라는 함수는 아래의 내용과 같다
    p.draweyes = function(){
      
      p.stroke(0 , 255 , 0)
      p.strokeWeight(10)


//여기에는 손의 위치를 각각 숫자로 줌 피그마에 정리된 손 번호 있음


    }
  };

  //p5js를 실행시키는 함수
  
  let myp5 = new p5(sketch);
  

  










