/* ============================================================
   GALAXY.JS — starfield + shooting stars on <canvas>
   Pure visual effect, no need to touch this for customization
  (edit config.js instead).
   ============================================================ */

(function () {
  const canvas = document.getElementById('galaxy-canvas');
  const ctx = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let w, h, dpr;
  let stars = [];
  let shootingStars = [];

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildStars();
  }

  function buildStars() {
    const count = Math.min(420, Math.floor((w * h) / 4800));
    stars = new Array(count).fill(0).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.3 + 0.25,
      baseAlpha: Math.random() * 0.6 + 0.25,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      phase: Math.random() * Math.PI * 2,
      hue: Math.random() < 0.15 ? 'violet' : (Math.random() < 0.3 ? 'cyan' : 'white')
    }));
  }

  function starColor(hue, alpha) {
    if (hue === 'violet') return `rgba(190, 150, 255, ${alpha})`;
    if (hue === 'cyan') return `rgba(150, 220, 255, ${alpha})`;
    return `rgba(255, 255, 255, ${alpha})`;
  }

  function spawnShootingStar() {
    const startX = Math.random() * w * 0.85 + w * 0.05;
    const startY = Math.random() * h * 0.38 - h * 0.08;
    const angle = Math.PI / 6 + Math.random() * 0.45;
    const speed = Math.random() * 5 + 8;
    shootingStars.push({
      x: startX,
      y: startY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 0,
      maxLife: Math.random() * 35 + 55,
      len: Math.random() * 110 + 80
    });
  }

  let t = 0;
  let nextShootingStarAt = 35;

  function maybeSpawnShootingStar() {
    if (t < nextShootingStarAt) return;
    if (shootingStars.length < 2) spawnShootingStar();
    nextShootingStarAt = t + 100 + Math.floor(Math.random() * 220);
  }

  function tick() {
    t += 1;
    ctx.clearRect(0, 0, w, h);

    // stars
    for (const s of stars) {
      const tw = reduceMotion ? 0 : Math.sin(t * s.twinkleSpeed + s.phase) * 0.35;
      const alpha = Math.max(0.05, Math.min(1, s.baseAlpha + tw));
      ctx.beginPath();
      ctx.fillStyle = starColor(s.hue, alpha);
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }

    // shooting stars
    maybeSpawnShootingStar();
    shootingStars = shootingStars.filter(sh => sh.life < sh.maxLife);
    for (const sh of shootingStars) {
      sh.life += 1;
      sh.x += sh.vx;
      sh.y += sh.vy;
      const progress = sh.life / sh.maxLife;
      const alpha = progress < 0.15 ? progress / 0.15 : 1 - (progress - 0.15) / 0.85;
      const tailX = sh.x - Math.cos(Math.atan2(sh.vy, sh.vx)) * sh.len;
      const tailY = sh.y - Math.sin(Math.atan2(sh.vy, sh.vx)) * sh.len;

      const grad = ctx.createLinearGradient(sh.x, sh.y, tailX, tailY);
      grad.addColorStop(0, `rgba(255, 255, 255, ${Math.max(0, alpha)})`);
      grad.addColorStop(0.4, `rgba(180, 200, 255, ${Math.max(0, alpha) * 0.5})`);
      grad.addColorStop(1, 'rgba(180, 200, 255, 0)');

      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(sh.x, sh.y);
      ctx.lineTo(tailX, tailY);
      ctx.stroke();

      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, alpha)})`;
      ctx.arc(sh.x, sh.y, 1.4, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(tick);
  }

  window.addEventListener('resize', resize);
  resize();
  tick();
})();
