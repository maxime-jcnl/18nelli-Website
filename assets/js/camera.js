const video = document.getElementById('camera');
video.setAttribute('autoplay', '');
video.setAttribute('playsinline', '');

navigator.mediaDevices.getUserMedia({ video: true, audio: false })
  .then(function(stream) {
    const video = document.getElementById('camera');
    video.srcObject = stream;
  })
  .catch(function(error) {
    console.error('Erreur accès caméra :', error);
  });
