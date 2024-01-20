// script.js 파일

// 버튼 요소를 선택합니다.
var generateButton = document.getElementById('generateBtn');

// 이미지를 표시할 컨테이너 요소를 선택합니다.
var gridContainer = document.getElementById('gridContainer');

// 이미지 개수를 추적하는 변수입니다.
var imageCount = 0;

// 이미지 만들기 버튼에 클릭 이벤트 리스너를 추가합니다.
generateButton.addEventListener('click', function() {
  // 이미지가 30개 이상인 경우 확인 메시지를 띄웁니다.
  if (imageCount >= 30) {
    var userResponse = confirm('이미지가 30개 이상입니다. 모든 사진을 지우시겠습니까?');
    if (userResponse) {
      // 사용자가 '확인'을 누르면 이미지들을 초기화합니다.
      gridContainer.innerHTML = '';
      imageCount = 0; // 이미지 카운트를 초기화합니다.
      return;
    } else {
      // 사용자가 '취소'를 누르면 이미지 추가를 중단합니다.
      return; // 함수 실행을 여기서 중단합니다.
    }
  }

  // 새로운 이미지 요소를 생성합니다.
  var newImage = new Image(500, 500);

  // 이미지 URL을 설정합니다.
  newImage.src = 'https://picsum.photos/500?random=' + Math.floor(Math.random() * 1000);

  // 이미지 로드 완료 후 gridContainer에 추가합니다.
  newImage.onload = function() {
    gridContainer.appendChild(newImage);
    imageCount++; // 이미지 카운트를 증가시킵니다.
  };
});