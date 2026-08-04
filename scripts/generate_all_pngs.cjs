const { createCanvas } = require('@napi-rs/canvas');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '../src/images');
const certDir = path.join(__dirname, '../src/images/certificates');

if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });
if (!fs.existsSync(certDir)) fs.mkdirSync(certDir, { recursive: true });

function saveCanvas(canvas, filepath) {
  const buf = canvas.toBuffer('image/png');
  fs.writeFileSync(filepath, buf);
  console.log(`Saved: ${filepath} (${buf.length} bytes)`);
}

// 1. my-photo.png (Professional Profile Portrait Avatar)
function generateMyPhoto() {
  const w = 800, h = 1000;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');

  // Background Gradient
  const bgGrad = ctx.createLinearGradient(0, 0, w, h);
  bgGrad.addColorStop(0, '#0b0f19');
  bgGrad.addColorStop(0.5, '#1e1b4b');
  bgGrad.addColorStop(1, '#0284c7');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, w, h);

  // Background Grid / HUD lines
  ctx.strokeStyle = 'rgba(168, 85, 247, 0.15)';
  ctx.lineWidth = 1;
  for (let x = 0; x < w; x += 40) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
  }
  for (let y = 0; y < h; y += 40) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }

  // Glowing Ambient Orbs
  const orb1 = ctx.createRadialGradient(250, 300, 10, 250, 300, 300);
  orb1.addColorStop(0, 'rgba(168, 85, 247, 0.4)');
  orb1.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = orb1;
  ctx.fillRect(0, 0, w, h);

  const orb2 = ctx.createRadialGradient(550, 450, 10, 550, 450, 250);
  orb2.addColorStop(0, 'rgba(56, 189, 248, 0.4)');
  orb2.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = orb2;
  ctx.fillRect(0, 0, w, h);

  // Stylized Portrait Silhouette / Developer Avatar
  // Head / Hair / Face
  ctx.fillStyle = '#f8fafc';
  ctx.beginPath();
  ctx.ellipse(400, 360, 130, 160, 0, 0, Math.PI * 2);
  ctx.fill();

  // Face Shading / Features
  ctx.fillStyle = '#e2e8f0';
  ctx.beginPath();
  ctx.ellipse(400, 370, 110, 135, 0, 0, Math.PI * 2);
  ctx.fill();

  // Modern Haircut Shape
  ctx.fillStyle = '#0f172a';
  ctx.beginPath();
  ctx.ellipse(400, 240, 140, 90, 0, 0, Math.PI * 2);
  ctx.fill();

  // Eyeglasses Frame (Tech look)
  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 6;
  ctx.strokeRect(320, 320, 70, 45);
  ctx.strokeRect(410, 320, 70, 45);
  ctx.beginPath(); ctx.moveTo(390, 340); ctx.lineTo(410, 340); ctx.stroke();

  // Shoulders & Jacket
  const jacketGrad = ctx.createLinearGradient(0, 500, 0, h);
  jacketGrad.addColorStop(0, '#1e293b');
  jacketGrad.addColorStop(1, '#0f172a');
  ctx.fillStyle = jacketGrad;
  ctx.beginPath();
  ctx.moveTo(120, h);
  ctx.quadraticCurveTo(400, 500, 680, h);
  ctx.fill();

  // Neon Collar Accent Line
  ctx.strokeStyle = '#c084fc';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(310, 590);
  ctx.lineTo(400, 700);
  ctx.lineTo(490, 590);
  ctx.stroke();

  // HUD Name Badge
  ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(150, 800, 500, 130, 16);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 36px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('VARDAN RAJ', 400, 855);

  ctx.fillStyle = '#38bdf8';
  ctx.font = '500 20px sans-serif';
  ctx.fillText('Network Engineer & Graphic Designer', 400, 895);

  saveCanvas(canvas, path.join(imgDir, 'my-photo.png'));
}

// 2. grid.png (Dark Network Grid Pattern)
function generateGrid() {
  const w = 1200, h = 800;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#090d16';
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = 'rgba(168, 85, 247, 0.12)';
  ctx.lineWidth = 1;

  const gridSize = 40;
  for (let x = 0; x <= w; x += gridSize) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
  }
  for (let y = 0; y <= h; y += gridSize) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }

  // Intersection nodes
  ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
  for (let x = 0; x <= w; x += gridSize * 2) {
    for (let y = 0; y <= h; y += gridSize * 2) {
      if ((x + y) % 160 === 0) {
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  saveCanvas(canvas, path.join(imgDir, 'grid.png'));
}

// 3. agt-grid.png (AGT Active Network Topology Grid)
function generateAgtGrid() {
  const w = 1200, h = 800;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0a0f1d';
  ctx.fillRect(0, 0, w, h);

  // Background grid
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.1)';
  for (let x = 0; x < w; x += 50) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
  }
  for (let y = 0; y < h; y += 50) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }

  // Network Nodes & Connections
  const nodes = [
    { x: 250, y: 250, label: 'Core Switch [10.0.0.1]', color: '#c084fc' },
    { x: 600, y: 200, label: 'Firewall Cluster', color: '#f43f5e' },
    { x: 950, y: 250, label: 'Edge Router', color: '#38bdf8' },
    { x: 400, y: 550, label: 'Active Packet Sensor', color: '#34d399' },
    { x: 800, y: 550, label: 'Traffic Analyser', color: '#fbbf24' }
  ];

  // Draw Links
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'rgba(168, 85, 247, 0.4)';
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      ctx.beginPath();
      ctx.moveTo(nodes[i].x, nodes[i].y);
      ctx.lineTo(nodes[j].x, nodes[j].y);
      ctx.stroke();
    }
  }

  // Draw Node Circles
  nodes.forEach(n => {
    ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
    ctx.strokeStyle = n.color;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(n.x, n.y, 35, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = n.color;
    ctx.beginPath();
    ctx.arc(n.x, n.y, 10, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(n.label, n.x, n.y + 60);
  });

  // Title Banner
  ctx.fillStyle = 'rgba(15, 23, 42, 0.8)';
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
  ctx.lineWidth = 2;
  ctx.roundRect(50, 40, 400, 60, 12);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 22px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('AGT NETWORK TOPOLOGY GRID', 75, 78);

  saveCanvas(canvas, path.join(imgDir, 'agt-grid.png'));
}

// 4. creative-tourism.png (Creative Tourism Visual Poster)
function generateCreativeTourism() {
  const w = 1200, h = 800;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');

  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, '#0f172a');
  grad.addColorStop(0.5, '#0369a1');
  grad.addColorStop(1, '#0f766e');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Decorative Art Circles
  ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.beginPath(); ctx.arc(1000, 200, 300, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(200, 700, 250, 0, Math.PI * 2); ctx.fill();

  // Glass Card Center
  ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(150, 120, 900, 560, 24);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 54px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('CREATIVE TOURISM', 600, 320);

  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 28px sans-serif';
  ctx.fillText('EXPLORE • DISCOVER • EXPERIENCE', 600, 390);

  ctx.fillStyle = '#e2e8f0';
  ctx.font = '18px sans-serif';
  ctx.fillText('Visual Identity & Digital Campaign Design by Vardan Raj', 600, 460);

  saveCanvas(canvas, path.join(imgDir, 'creative-tourism.png'));
}

// 5. creative-tourism-recruitment-grid.png
function generateCreativeTourismRecruitmentGrid() {
  const w = 1200, h = 800;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0f172a';
  ctx.fillRect(0, 0, w, h);

  // Grid Cells
  const cols = 3, rows = 2;
  const cellW = 340, cellH = 300;
  const startX = 60, startY = 140;

  ctx.font = 'bold 44px sans-serif';
  ctx.fillStyle = '#38bdf8';
  ctx.textAlign = 'center';
  ctx.fillText('CREATIVE TOURISM — RECRUITMENT GRID', w / 2, 80);

  const titles = ['Design Leads', 'Network Operations', 'Brand Strategy', 'Visual Artists', 'Media Team', 'UI/UX Designers'];
  const colors = ['#a855f7', '#38bdf8', '#34d399', '#fbbf24', '#f43f5e', '#818cf8'];

  let idx = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = startX + c * (cellW + 30);
      const y = startY + r * (cellH + 30);

      ctx.fillStyle = 'rgba(30, 41, 59, 0.8)';
      ctx.strokeStyle = colors[idx];
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(x, y, cellW, cellH, 16);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = colors[idx];
      ctx.font = 'bold 24px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(titles[idx], x + cellW / 2, y + 80);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '16px sans-serif';
      ctx.fillText('Campaign Grid Asset #' + (idx + 1), x + cellW / 2, y + 130);
      ctx.fillText('Vardan Raj Visual Compositions', x + cellW / 2, y + 180);

      idx++;
    }
  }

  saveCanvas(canvas, path.join(imgDir, 'creative-tourism-recruitment-grid.png'));
}

// 6. brand-artwork.png
function generateBrandArtwork() {
  const w = 1200, h = 800;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0d1117';
  ctx.fillRect(0, 0, w, h);

  // Brand Artwork Title
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 48px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('BRAND IDENTITY & ARTWORK', 80, 100);

  ctx.fillStyle = '#a855f7';
  ctx.font = '22px sans-serif';
  ctx.fillText('Comprehensive Visual System & Design Compositions', 80, 140);

  // Color Palette Swatches
  const swatches = ['#a855f7', '#38bdf8', '#34d399', '#fbbf24', '#f43f5e'];
  swatches.forEach((color, i) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.roundRect(80 + i * 140, 200, 120, 120, 16);
    ctx.fill();
  });

  // Main Art Frame
  ctx.fillStyle = 'rgba(30, 41, 59, 0.6)';
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(80, 360, 1040, 380, 20);
  ctx.fill();
  ctx.stroke();

  // Geometric Graphic inside frame
  ctx.fillStyle = 'rgba(168, 85, 247, 0.2)';
  ctx.beginPath(); ctx.arc(400, 550, 140, 0, Math.PI * 2); ctx.fill();

  ctx.fillStyle = 'rgba(56, 189, 248, 0.2)';
  ctx.beginPath(); ctx.arc(580, 550, 140, 0, Math.PI * 2); ctx.fill();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 36px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('VARDAN RAJ BRAND LAB', 600, 560);

  saveCanvas(canvas, path.join(imgDir, 'brand-artwork.png'));
}

// 7. group-82.png
function generateGroup82() {
  const w = 1200, h = 800;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');

  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, '#1e1b4b');
  grad.addColorStop(1, '#311042');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Abstract 3D Glass Panels
  ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
  ctx.lineWidth = 3;

  ctx.beginPath();
  ctx.roundRect(200, 150, 500, 500, 32);
  ctx.fill(); ctx.stroke();

  ctx.beginPath();
  ctx.roundRect(500, 220, 500, 460, 32);
  ctx.fill(); ctx.stroke();

  ctx.fillStyle = '#f43f5e';
  ctx.font = 'bold 64px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('GROUP 82', 600, 380);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 28px sans-serif';
  ctx.fillText('GRAPHIC COMPOSITION & POSTER ART', 600, 450);

  saveCanvas(canvas, path.join(imgDir, 'group-82.png'));
}

// 8. makar-sankranti.png
function generateMakarSankranti() {
  const w = 1200, h = 800;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');

  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, '#7c2d12');
  grad.addColorStop(0.5, '#c2410c');
  grad.addColorStop(1, '#f59e0b');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Sun Circle
  ctx.fillStyle = '#fef08a';
  ctx.beginPath();
  ctx.arc(600, 320, 180, 0, Math.PI * 2);
  ctx.fill();

  // Kites
  function drawKite(cx, cy, size, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(cx, cy - size);
    ctx.lineTo(cx + size, cy);
    ctx.lineTo(cx, cy + size);
    ctx.lineTo(cx - size, cy);
    ctx.closePath();
    ctx.fill();
  }

  drawKite(300, 220, 60, '#38bdf8');
  drawKite(900, 200, 75, '#a855f7');
  drawKite(780, 420, 50, '#34d399');

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 56px serif';
  ctx.textAlign = 'center';
  ctx.fillText('HAPPY MAKAR SANKRANTI', 600, 600);

  ctx.font = '22px sans-serif';
  ctx.fillText('Festive Creative Poster Design by Vardan Raj', 600, 660);

  saveCanvas(canvas, path.join(imgDir, 'makar-sankranti.png'));
}

// 9. mundan.png
function generateMundan() {
  const w = 1200, h = 800;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');

  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, '#451a03');
  grad.addColorStop(0.5, '#78350f');
  grad.addColorStop(1, '#b45309');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Ornamental Frame
  ctx.strokeStyle = '#fef08a';
  ctx.lineWidth = 6;
  ctx.strokeRect(40, 40, w - 80, h - 80);
  ctx.strokeRect(55, 55, w - 110, h - 110);

  // Mandala Circle Center
  ctx.fillStyle = 'rgba(254, 240, 138, 0.15)';
  ctx.beginPath();
  ctx.arc(600, 380, 220, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#fef08a';
  ctx.font = 'bold 52px serif';
  ctx.textAlign = 'center';
  ctx.fillText('MUNDAN SANSKAR CEREMONY', 600, 360);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 28px serif';
  ctx.fillText('ROYAL INVITATION CARD DESIGN', 600, 430);

  ctx.font = '18px sans-serif';
  ctx.fillText('Custom Event Design & Graphics by Vardan Raj', 600, 520);

  saveCanvas(canvas, path.join(imgDir, 'mundan.png'));
}

// 10. save-nature.png
function generateSaveNature() {
  const w = 1200, h = 800;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');

  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, '#064e3b');
  grad.addColorStop(0.6, '#047857');
  grad.addColorStop(1, '#10b981');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Earth Globe
  ctx.fillStyle = '#0284c7';
  ctx.beginPath(); ctx.arc(600, 380, 180, 0, Math.PI * 2); ctx.fill();

  // Green Continents
  ctx.fillStyle = '#34d399';
  ctx.beginPath(); ctx.arc(550, 340, 70, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(640, 410, 80, 0, Math.PI * 2); ctx.fill();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 60px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('SAVE NATURE', 600, 620);

  ctx.fillStyle = '#ecfdf5';
  ctx.font = 'bold 24px sans-serif';
  ctx.fillText('PROTECT OUR PLANET • SUSTAINABLE FUTURE', 600, 680);

  saveCanvas(canvas, path.join(imgDir, 'save-nature.png'));
}

// 11. deloitte-cert-thumb.png
function generateDeloitteThumb() {
  const w = 800, h = 600;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0f172a';
  ctx.fillRect(0, 0, w, h);

  // Deloitte Header Bar
  ctx.fillStyle = '#86efac'; // Deloitte Green Dot accent
  ctx.beginPath(); ctx.arc(710, 80, 12, 0, Math.PI * 2); ctx.fill();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 44px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('Deloitte.', 60, 90);

  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 28px sans-serif';
  ctx.fillText('CYBER SECURITY VIRTUAL INTERNSHIP', 60, 180);

  // Inner Frame
  ctx.fillStyle = '#1e293b';
  ctx.strokeStyle = 'rgba(134, 239, 172, 0.4)';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.roundRect(60, 230, 680, 300, 16); ctx.fill(); ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 24px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Verified Certificate of Completion', 400, 320);

  ctx.fillStyle = '#94a3b8';
  ctx.font = '18px sans-serif';
  ctx.fillText('Awarded to: Vardan Raj', 400, 370);
  ctx.fillText('Risk Assessment, IAM, Security Architecture', 400, 420);

  saveCanvas(canvas, path.join(imgDir, 'deloitte-cert-thumb.png'));
}

// 12. goldman-sachs-cert-thumb.png
function generateGoldmanThumb() {
  const w = 800, h = 600;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0c192c';
  ctx.fillRect(0, 0, w, h);

  // GS Logo Box
  ctx.fillStyle = '#7399c6';
  ctx.fillRect(60, 50, 100, 100);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 22px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Goldman', 110, 90);
  ctx.fillText('Sachs', 110, 120);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 30px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('Software Engineering Virtual Experience', 180, 110);

  // Inner Frame
  ctx.fillStyle = '#172a46';
  ctx.strokeStyle = '#7399c6';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.roundRect(60, 190, 680, 340, 16); ctx.fill(); ctx.stroke();

  ctx.fillStyle = '#fbbf24';
  ctx.font = 'bold 24px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Goldman Sachs Credentials', 400, 280);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 22px sans-serif';
  ctx.fillText('Recipient: Vardan Raj', 400, 340);

  ctx.fillStyle = '#94a3b8';
  ctx.font = '16px sans-serif';
  ctx.fillText('Cryptography, Password Policies & System Security', 400, 400);

  saveCanvas(canvas, path.join(imgDir, 'goldman-sachs-cert-thumb.png'));
}

// 13. tata-cert-thumb.png
function generateTataThumb() {
  const w = 800, h = 600;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0f172a';
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 48px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('TATA', 60, 90);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 28px sans-serif';
  ctx.fillText('Cybersecurity Analyst Job Simulation', 60, 160);

  // Inner Card
  ctx.fillStyle = '#1e293b';
  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.roundRect(60, 210, 680, 330, 16); ctx.fill(); ctx.stroke();

  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 26px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Tata Group Verified Certificate', 400, 300);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 22px sans-serif';
  ctx.fillText('Issued to: Vardan Raj', 400, 360);

  ctx.fillStyle = '#94a3b8';
  ctx.font = '16px sans-serif';
  ctx.fillText('Threat Analysis, Incident Response & Log Audits', 400, 420);

  saveCanvas(canvas, path.join(imgDir, 'tata-cert-thumb.png'));
}

// 14. certificates/graphic-internship-certificate.png
function generateGraphicInternshipCert() {
  const w = 1000, h = 700;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#f8fafc';
  ctx.fillRect(0, 0, w, h);

  // Ornate Gold Frame
  ctx.strokeStyle = '#d97706';
  ctx.lineWidth = 12;
  ctx.strokeRect(30, 30, w - 60, h - 60);

  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 2;
  ctx.strokeRect(48, 48, w - 96, h - 96);

  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 42px serif';
  ctx.textAlign = 'center';
  ctx.fillText('INAMIGOS FOUNDATION', 500, 130);

  ctx.fillStyle = '#d97706';
  ctx.font = 'bold 28px sans-serif';
  ctx.fillText('CERTIFICATE OF INTERNSHIP', 500, 190);

  ctx.fillStyle = '#64748b';
  ctx.font = '20px serif';
  ctx.fillText('THIS IS PROUDLY PRESENTED TO', 500, 270);

  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 48px sans-serif';
  ctx.fillText('Vardan Raj', 500, 350);

  ctx.strokeStyle = '#d97706';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(300, 370); ctx.lineTo(700, 370); ctx.stroke();

  ctx.fillStyle = '#475569';
  ctx.font = '18px sans-serif';
  ctx.fillText('For successfully completing the Graphic Design Internship', 500, 430);
  ctx.fillText('Demonstrating excellence in Visual Branding, Typography & Figma Compositions.', 500, 470);

  // Gold Seal Badge
  ctx.fillStyle = '#f59e0b';
  ctx.beginPath(); ctx.arc(500, 570, 40, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 16px sans-serif';
  ctx.fillText('SEAL', 500, 576);

  saveCanvas(canvas, path.join(certDir, 'graphic-internship-certificate.png'));
}

// 15. certificates/launched-certificate.png
function generateLaunchedCert() {
  const w = 1000, h = 700;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0f172a';
  ctx.fillRect(0, 0, w, h);

  // Frame
  ctx.strokeStyle = '#a855f7';
  ctx.lineWidth = 8;
  ctx.strokeRect(30, 30, w - 60, h - 60);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 38px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('ABES ENGINEERING COLLEGE', 500, 130);

  ctx.fillStyle = '#c084fc';
  ctx.font = 'bold 28px sans-serif';
  ctx.fillText('LAUNCHED TECH ACCELERATOR PROGRAM', 500, 190);

  ctx.fillStyle = '#94a3b8';
  ctx.font = '20px sans-serif';
  ctx.fillText('CERTIFICATE OF ACHIEVEMENT', 500, 270);

  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 46px sans-serif';
  ctx.fillText('Vardan Raj', 500, 360);

  ctx.fillStyle = '#e2e8f0';
  ctx.font = '18px sans-serif';
  ctx.fillText('Has successfully certified in Full-Stack Web Architecture,', 500, 440);
  ctx.fillText('System Layouts Assembly, and Modern Web Applications.', 500, 480);

  saveCanvas(canvas, path.join(certDir, 'launched-certificate.png'));
}

// 16. certificates/networking-basics.png
function generateNetworkingBasicsCert() {
  const w = 1000, h = 700;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, w, h);

  // Cisco Blue Header Line
  ctx.fillStyle = '#0284c7';
  ctx.fillRect(0, 0, w, 30);

  ctx.strokeStyle = '#0284c7';
  ctx.lineWidth = 6;
  ctx.strokeRect(30, 50, w - 60, h - 90);

  ctx.fillStyle = '#0284c7';
  ctx.font = 'bold 44px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Cisco Networking Academy', 500, 140);

  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 30px sans-serif';
  ctx.fillText('NETWORKING BASICS CERTIFICATE', 500, 210);

  ctx.fillStyle = '#64748b';
  ctx.font = '20px sans-serif';
  ctx.fillText('THIS CERTIFICATE IS PROUDLY AWARDED TO', 500, 290);

  ctx.fillStyle = '#0284c7';
  ctx.font = 'bold 48px sans-serif';
  ctx.fillText('Vardan Raj', 500, 370);

  ctx.fillStyle = '#334155';
  ctx.font = '18px sans-serif';
  ctx.fillText('For successfully demonstrating knowledge in Network Communication Protocols,', 500, 450);
  ctx.fillText('IP Subnetting, Active Router Topologies, and Security Diagnostics.', 500, 490);

  saveCanvas(canvas, path.join(certDir, 'networking-basics.png'));
}

console.log('Generating all PNG assets...');
generateMyPhoto();
generateGrid();
generateAgtGrid();
generateCreativeTourism();
generateCreativeTourismRecruitmentGrid();
generateBrandArtwork();
generateGroup82();
generateMakarSankranti();
generateMundan();
generateSaveNature();
generateDeloitteThumb();
generateGoldmanThumb();
generateTataThumb();
generateGraphicInternshipCert();
generateLaunchedCert();
generateNetworkingBasicsCert();
console.log('All 16 PNG images generated successfully!');
