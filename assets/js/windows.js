let highestZ = 1;
window.onload = () => {
    const wins = document.querySelectorAll('.window');
    const vw = window.innerWidth;
    const vh = window.innerHeight;
  
    wins.forEach(win => {
      const w = win.offsetWidth;
      const h = win.offsetHeight;
      const maxLeft = Math.max(vw - w - 20, 0);
      const maxTop  = Math.max(vh - h - 20, 0);
  
      // position initiale aléatoire, stockée en dataset
      const x0 = Math.random() * maxLeft;
      const y0 = Math.random() * maxTop;
      win.dataset.x = x0;
      win.dataset.y = y0;
      win.style.transform = `translate(${x0}px, ${y0}px)`;
  
      // close-button
      win.querySelector('.close-btn').addEventListener('click', () => {
        win.style.display = 'none';
      });
  
      // on empêche le drag html5 sur toute la fenêtre
      win.addEventListener('dragstart', e => e.preventDefault());
      win.addEventListener('mousedown', () => {
        highestZ++;
        win.style.zIndex = highestZ;
      });
      
      // --- drag & drop en transform ---
      const titlebar = win.querySelector('.titlebar');
      let isDragging = false;
      let offsetX = 0, offsetY = 0;
  
      titlebar.addEventListener('mousedown', e => {
        e.preventDefault();
        document.body.style.userSelect = 'none';
      
        // 1. bring to front
        highestZ++;
        win.style.zIndex = highestZ;
      
        // 2. start dragging
        isDragging = true;
        const curX = parseFloat(win.dataset.x);
        const curY = parseFloat(win.dataset.y);
        offsetX = e.clientX - curX;
        offsetY = e.clientY - curY;
      });
      
  
      document.addEventListener('mousemove', e => {
        if (!isDragging) return;
        e.preventDefault();
  
        // nouveau x/y calculé
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        // clamp pour rester à l’écran
        x = Math.max(0, Math.min(x, vw - w));
        y = Math.max(0, Math.min(y, vh - h));
  
        win.style.transform = `translate(${x}px, ${y}px)`;
        win.dataset.x = x;
        win.dataset.y = y;
      });
  
      document.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        document.body.style.userSelect = '';

      });
      // --- fin transform drag ---
    });
  };
  