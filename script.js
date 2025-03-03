// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);

// เมื่อ DOM โหลดเสร็จ ให้เพิ่ม event listener สำหรับปุ่ม toggle Hotspot
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggle-hotspots');
  let hotspotsVisible = true; // เริ่มต้นให้ Hotspot แสดงอยู่

  toggleBtn.addEventListener('click', () => {
    hotspotsVisible = !hotspotsVisible;
    const hotspots = document.querySelectorAll('.Hotspot');
    hotspots.forEach(hotspot => {
      hotspot.style.display = hotspotsVisible ? 'block' : 'none';
    });
  });
});
