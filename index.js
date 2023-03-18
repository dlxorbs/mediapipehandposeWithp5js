// detection 이라는 Array를 변수로 제작
  let detections = [];

    const videoElement = document.getElementById('video');


// gotHands의 results값을 detections의 Array에 추가
    function gotHands(results) {
        detections = results;
        console.log(detections);
      }

// 미디어파이프(구글 머신러닝임)의 코드를 이용하여 미디어 파이프의 양손인식을 가져옴
    const hands = new Hands({locateFile: (file) => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
    }});
//핸드의 옵션은 각각 1. 손갯수 2.모델 복잡성(정확성 느낌인데 안건드는게 나을듯) 3.몰라 4.몰라
    hands.setOptions({
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.8,
      minTrackingConfidence: 0.5
    });
// 그 손인식하는것을 onResult를 통해서 gotHands값으로
    hands.onResults(gotHands);

// 여기는 일단 비디오 설정
    const camera = new Camera(videoElement, {
      onFrame: async () => {
        await hands.send({image: videoElement});
      },
      width: 640,
      height: 480
    });
    camera.start();
