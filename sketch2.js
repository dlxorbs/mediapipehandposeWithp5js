let canvas;

let arrIRIS = []; 
// p5js를 사용할 수 잇도록 일단 제작이된것 p5js와 다르게 p.이라고 쓰고 제작해야됨 
let sketch = function(p) {
    p.setup = function() {
    canvas =  p.createCanvas(1280, 720, p.WEBGL);
    };
  
    p.draw = function() {
      p.clear();
      p.translate(-(p.width)/2 , -p.height/2)

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
      if (detections.multiFaceLandmarks) { 
//x,y,z 변수를 지정해준 뒤 x의 값을 각각의 keypoint값으로 변환
    
        let lx  = 0;
        let ly  = 0;
        let lz  = 0;
        let rx  = 0;
        let ry  = 0;
        let rz  = 0;
        let rrex = 0;
        let rrey = 0;
        let rrez = 0;
        let rlex = 0;
        let rley = 0;
        let rlez = 0;
        let irisrx = 0;
        let irisry = 0;
        let irisrz = 0;
        let irislx = 0;
        let irisly = 0;
        let irislz = 0;
        for(let i = 0; i <  detections.multiFaceLandmarks.length; i++){
  
            for(let j = 0; j < FACEMESH_LEFT_IRIS.length; j++){
//홍채에 변수를 지정해줌 --> 반복문을 통해 총 4개의 점을 잡아줄 수 있게 제직
              const keynum= FACEMESH_LEFT_IRIS[j][0];

              const keypoints =detections.multiFaceLandmarks[0]
              // const x = keypoints[keynum].x*p.width
              // const y = keypoints[keynum].y*p.height
              // const z = keypoints[keynum].z
            
              lx = lx + keypoints[keynum].x
              ly = ly + keypoints[keynum].y
              lz = lz + keypoints[keynum].z

            }
            let LeftirisX = (lx/4)*p.width;
            let LeftirisY = (ly/4)*p.height;
            let LeftirisZ = lz/4;
            p.point(LeftirisX, LeftirisY, LeftirisZ)
            // console.log()

            for(let j = 0; j < FACEMESH_RIGHT_IRIS.length; j++){
              //홍채에 변수를 지정해줌 --> 반복문을 통해 총 4개의 점을 잡아줄 수 있게 제직
                            const keynum= FACEMESH_RIGHT_IRIS[j][0];
              
                            
                            const keypoints =detections.multiFaceLandmarks[0];
                          
                            // console.log(keynum)
                            rx = rx + keypoints[keynum].x;
                            ry = ry + keypoints[keynum].y;
                            rz = rz + keypoints[keynum].z;
                            
                           irisrx = keypoints[471].x*p.width
                           irisry = keypoints[471].y*p.height
                           irisrz = keypoints[471].z

                           irislx = keypoints[469].x*p.width
                           irisly = keypoints[469].y*p.height
                           irislz = keypoints[469].z
              }
              let RightirisX = (rx/4)*p.width;
              let RightirisY = (ry/4)*p.height;
              let RightirisZ = rz/4;
              p.point(irisrx, irisry)
              p.point(RightirisX, RightirisY, RightirisZ)
 
              for(let j = 0; j < FACEMESH_RIGHT_EYE.length; j++){
                //홍채에 변수를 지정해줌 --> 반복문을 통해 총 4개의 점을 잡아줄 수 있게 제직
                const keypoints =detections.multiFaceLandmarks[0];

                rrex = keypoints[133].x*p.width
                rrey = keypoints[133].y*p.height
                rrez = keypoints[133].z


                rlex = keypoints[33].x*p.width
                rley = keypoints[33].y*p.height
                rlez = keypoints[33].z

                }

                const irisradius = p.dist(irislx, irisly,irislz ,irisrx, irisry,irisrz )

                const eyewidth = p.dist(rrex, rrey , rrez, rlex, rley, rlez);

                const Irisloc = p.dist(RightirisX, RightirisY, RightirisZ, rlex, rley, rlez);

                const eyetrack = (Irisloc/(eyewidth))*p.width;
                console.log(eyetrack)
                p.point(eyetrack , 100)
 
        }
  
        
        
      }
    };
  }

    


//여기에는 손의 위치를 각각 숫자로 줌 피그마에 정리된 손 번호 있음



  //p5js를 실행시키는 함수
  
  let myp5 = new p5(sketch);
  

  










