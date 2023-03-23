
let detections = [];
const videoElement = document.getElementById('video');


// gotHands의 results값을 detections의 Array에 추가
function goteyes(results) {
    detections = results;

}

// 미디어파이프(구글 머신러닝임)의 코드를 이용하여 미디어 파이프의 양손인식을 가져옴
const faceMesh = new FaceMesh({locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
  }});
//핸드의 옵션은 각각 1. 손갯수 2.모델 복잡성(정확성 느낌인데 안건드는게 나을듯) 3.몰라 4.몰라
faceMesh.setOptions({
    maxNumFaces: 1,
    refineLandmarks: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
  });
  
// 그 손인식하는것을 onResult를 통해서 gotHands값으로
faceMesh.onResults(goteyes);

// 여기는 일단 비디오 설정
const camera = new Camera(videoElement, {
    onFrame: async () => {
      await faceMesh.send({image: videoElement});
    },
    width: 1280,
    height: 720
  });
camera.start();






