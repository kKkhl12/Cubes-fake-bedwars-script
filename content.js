const menuButton = document.createElement('button');
menuButton.id = 'pekora-menu-toggle';
menuButton.innerText = '☰';
document.body.appendChild(menuButton);

const menu = document.createElement('div');
menu.id = 'pekora-menu';
menu.className = 'pekora-extension-menu';
menu.innerHTML = `
  <div class="pekora-menu-content">
    <div class="pekora-menu-tabs">
      <button class="pekora-tab active" data-tab="home">Home</button>
      <button class="pekora-tab" data-tab="games">Games</button>
      <button class="pekora-tab" data-tab="favorites">Favorites</button>
      <button class="pekora-tab" data-tab="recent">Recent</button>
      <button class="pekora-tab" data-tab="tools">Tools</button>
      <button class="pekora-tab" data-tab="background">Background</button>
      <button class="pekora-tab" data-tab="css">Custom CSS</button>
      <button class="pekora-tab" data-tab="donations">Donations</button>
      <button class="pekora-menu-close" title="Close">&times;</button>
    </div>
    <div class="pekora-tab-content" id="pekora-tab-home">
      <h2>Pekora Revival</h2>
      <div id="pekora-account-info"></div>
      <button id="pekora-download-btn" style="width:100%;margin-bottom:10px;">Download Launcher</button>
      <button id="pekora-owner-btn" style="width:100%;margin-bottom:10px;">Owner Profile</button>
      <button id="pekora-darkmode-btn" style="width:100%;">Toggle Dark Mode</button>
      <div style="margin-top:10px;">
        <button id="pekora-notify-btn" style="width:100%;">Test Notification</button>
      </div>
    </div>
    <div class="pekora-tab-content" id="pekora-tab-games" style="display:none;">
      <h2>Games</h2>
      <button id="pekora-search-btn" style="width:100%;margin-bottom:10px;">Quick Search</button>
      <button id="pekora-random-btn" style="width:100%;margin-bottom:10px;">Random Game</button>
      <button id="pekora-top-btn" style="width:100%;">Go to Top</button>
      <div id="pekora-search-box" style="display:none;margin-top:10px;">
        <input type="text" id="pekora-search-input" placeholder="Search games..." style="width:80%;padding:6px;">
        <button id="pekora-search-go">Go</button>
      </div>
      <div style="margin-top:10px;">
        <a href="https://www.pekora.zip/games" target="_blank">All Games</a>
      </div>
    </div>
    <div class="pekora-tab-content" id="pekora-tab-favorites" style="display:none;">
      <h2>Favorites</h2>
      <ul id="pekora-favorites-list"></ul>
    </div>
    <div class="pekora-tab-content" id="pekora-tab-recent" style="display:none;">
      <h2>Recently Visited</h2>
      <ul id="pekora-recent-list"></ul>
    </div>
    <div class="pekora-tab-content" id="pekora-tab-tools" style="display:none;">
      <h2>Game Tools</h2>
      <div id="pekora-game-tools"></div>
    </div>
    <div class="pekora-tab-content" id="pekora-tab-background" style="display:none;">
      <h2>Custom Background</h2>
      <label>Theme Preset:
        <select id="pekora-bg-theme">
          <option value="">Custom</option>
          <option value="classic">Classic</option>
          <option value="night">Night</option>
          <option value="pekora">Pekora Blue</option>
        </select>
      </label><br>
      <label>Image URL: <input type="text" id="pekora-bg-url" placeholder="Paste image URL here" style="width:80%;"></label><br>
      <label>Or Upload: <input type="file" id="pekora-bg-upload" accept="image/*"></label><br>
      <label>Blur: <input type="range" id="pekora-bg-blur" min="0" max="20" value="8"> <span id="pekora-bg-blur-val">8</span>px</label><br>
      <label>Opacity: <input type="range" id="pekora-bg-opacity" min="0" max="100" value="60"> <span id="pekora-bg-opacity-val">60</span>%</label><br>
      <button id="pekora-bg-apply" style="margin-top:10px;">Apply</button>
      <button id="pekora-bg-clear" style="margin-top:10px;">Clear</button>
    </div>
    <div class="pekora-tab-content" id="pekora-tab-css" style="display:none;">
      <h2>Custom CSS</h2>
      <textarea id="pekora-css-editor" style="width:100%;height:80px;"></textarea><br>
      <button id="pekora-css-apply" style="margin-top:10px;">Apply CSS</button>
    </div>
    <div class="pekora-tab-content" id="pekora-tab-donations" style="display:none;">
      <h2>Donations</h2>
      <ul style="list-style:none;padding:0;">
        <li><a href="https://www.pekora.zip/catalog/143123/10-DONO" target="_blank" style="display:inline-block;margin:6px 0;padding:8px 16px;background:#ffb6c1;color:#333;border-radius:8px;text-decoration:none;font-weight:bold;">10 Robux</a></li>
        <li><a href="https://www.pekora.zip/catalog/143125/20-DONO" target="_blank" style="display:inline-block;margin:6px 0;padding:8px 16px;background:#ffb6c1;color:#333;border-radius:8px;text-decoration:none;font-weight:bold;">20 Robux</a></li>
        <li><a href="https://www.pekora.zip/catalog/143126/50-DONO" target="_blank" style="display:inline-block;margin:6px 0;padding:8px 16px;background:#ffb6c1;color:#333;border-radius:8px;text-decoration:none;font-weight:bold;">50 Robux</a></li>
        <li><a href="https://www.pekora.zip/catalog/143127/100-DONO" target="_blank" style="display:inline-block;margin:6px 0;padding:8px 16px;background:#ffb6c1;color:#333;border-radius:8px;text-decoration:none;font-weight:bold;">100 Robux</a></li>
        <li><a href="https://www.pekora.zip/catalog/143128/200-DONO" target="_blank" style="display:inline-block;margin:6px 0;padding:8px 16px;background:#ffb6c1;color:#333;border-radius:8px;text-decoration:none;font-weight:bold;">200 Robux</a></li>
        <li><a href="https://www.pekora.zip/catalog/143131/500-DONO" target="_blank" style="display:inline-block;margin:6px 0;padding:8px 16px;background:#ffb6c1;color:#333;border-radius:8px;text-decoration:none;font-weight:bold;">500 Robux</a></li>
        <li><a href="https://www.pekora.zip/catalog/143132/1000-DONO" target="_blank" style="display:inline-block;margin:6px 0;padding:8px 16px;background:#ffb6c1;color:#333;border-radius:8px;text-decoration:none;font-weight:bold;">1000 Robux</a></li>
      </ul>
      <p style="margin-top:12px;font-size:0.95em;color:#666;">Thank you for supporting me!</p>
    </div>
  </div>
`;
menu.style.display = 'none';
document.body.appendChild(menu);

const blurOverlay = document.createElement('div');
blurOverlay.id = 'pekora-blur-overlay';
blurOverlay.style.display = 'none';
document.body.appendChild(blurOverlay);

const bgImgDiv = document.createElement('div');
bgImgDiv.id = 'pekora-bg-img';
document.body.prepend(bgImgDiv);

const bgBlurDiv = document.createElement('div');
bgBlurDiv.id = 'pekora-bg-blur';
document.body.prepend(bgBlurDiv);

const snowCanvas = document.createElement('canvas');
snowCanvas.id = 'pekora-snow-canvas';
document.body.appendChild(snowCanvas);

function showMenu() {
  menu.style.display = 'flex';
  blurOverlay.style.display = 'block';
  snowCanvas.style.display = 'block';
  setTimeout(() => {
    menu.classList.add('show');
    blurOverlay.classList.add('show');
    snowCanvas.classList.add('show');
  }, 10);
}
function hideMenu() {
  menu.classList.remove('show');
  blurOverlay.classList.remove('show');
  snowCanvas.classList.remove('show');
  setTimeout(() => {
    menu.style.display = 'none';
    blurOverlay.style.display = 'none';
    snowCanvas.style.display = 'none';
  }, 300);
}
menuButton.addEventListener('click', showMenu);
menu.querySelector('.pekora-menu-close').addEventListener('click', hideMenu);

const tabs = menu.querySelectorAll('.pekora-tab');
const tabContents = menu.querySelectorAll('.pekora-tab-content');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    tabContents.forEach(tc => tc.style.display = 'none');
    menu.querySelector(`#pekora-tab-${tab.dataset.tab}`).style.display = 'block';
    if(tab.dataset.tab === "tools") loadGameTools();
    if(tab.dataset.tab === "favorites") renderFavorites();
    if(tab.dataset.tab === "recent") renderRecent();
  });
});

const darkModeStyle = document.createElement('style');
darkModeStyle.id = 'pekora-darkmode-style';
darkModeStyle.textContent = `
  html, body {
    background: #181818 !important;
    color: #f1f1f1 !important;
  }
  body *:not(.pekora-extension-menu):not(.pekora-extension-menu *):not(#pekora-blur-overlay):not(#pekora-snow-canvas):not(#pekora-bg-img):not(#pekora-bg-blur) {
    background-color: transparent !important;
    color: #f1f1f1 !important;
    border-color: #333 !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }
  a:not(.pekora-extension-menu *), a *:not(.pekora-extension-menu *) {
    color: #ffb6c1 !important;
  }
`;
function toggleDarkMode() {
  if (document.getElementById('pekora-darkmode-style')) {
    document.getElementById('pekora-darkmode-style').remove();
  } else {
    document.head.appendChild(darkModeStyle);
  }
}

function renderAccountInfo() {
  let info = '';

  const user = document.querySelector('a[href*="/users/"][class*="avatar"], .navbar .dropdown-toggle, .user-info, .username');
  if (user) {
    const name = user.innerText || user.textContent;
    const avatar = user.querySelector('img')?.src;
    info = avatar ? `<img src="${avatar}" style="width:32px;height:32px;border-radius:50%;vertical-align:middle;margin-right:8px;">` : '';
    info += `<b>${name}</b>`;
  } else {
    info = 'Not logged in';
  }
  document.getElementById('pekora-account-info').innerHTML = info;
}
renderAccountInfo();

menu.addEventListener('click', function(e) {
  if (e.target && e.target.id === 'pekora-darkmode-btn') toggleDarkMode();
  if (e.target && e.target.id === 'pekora-download-btn') window.open('https://www.pekora.zip/download', '_blank');
  if (e.target && e.target.id === 'pekora-owner-btn') window.open('https://www.pekora.zip/users/16121/profile', '_blank');
  if (e.target && e.target.id === 'pekora-notify-btn') {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    } else {
      new Notification("Pekora Extension", { body: "This is a test notification!" });
    }
  }
});

menu.addEventListener('click', function(e) {
  if (e.target && e.target.id === 'pekora-search-btn') {
    const box = document.getElementById('pekora-search-box');
    box.style.display = box.style.display === 'none' ? 'block' : 'none';
  }
  if (e.target && e.target.id === 'pekora-search-go') {
    const val = document.getElementById('pekora-search-input').value;
    if (val) {
      const siteSearch = document.querySelector('input[type="search"], input[placeholder*="search"], input[placeholder*="Search"]');
      if (siteSearch) {
        siteSearch.value = val;
        siteSearch.dispatchEvent(new Event('input', { bubbles: true }));
        siteSearch.focus();
        hideMenu();
      } else {
        window.location.href = `/games?search=${encodeURIComponent(val)}`;
      }
    }
  }
  if (e.target && e.target.id === 'pekora-random-btn') {
    fetch('https://www.pekora.zip/games')
      .then(r => r.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const links = Array.from(doc.querySelectorAll('a')).filter(a => a.href && a.href.includes('/games/'));
        if (links.length > 0) {
          const randomLink = links[Math.floor(Math.random() * links.length)];
          window.open(randomLink.href, '_blank');
        } else {
          window.open('https://www.pekora.zip/games', '_blank');
        }
      })
      .catch(() => window.open('https://www.pekora.zip/games', '_blank'));
  }
  if (e.target && e.target.id === 'pekora-top-btn') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    hideMenu();
  }
});

function getFavorites() {
  return JSON.parse(localStorage.getItem('pekora-favorites') || '[]');
}
function setFavorites(favs) {
  localStorage.setItem('pekora-favorites', JSON.stringify(favs));
}
function renderFavorites() {
  const list = document.getElementById('pekora-favorites-list');
  const favs = getFavorites();
  list.innerHTML = favs.length ? favs.map(f => `<li><a href="/games/${f.id}" target="_blank">${f.title}</a> <button data-favid="${f.id}" class="pekora-fav-remove">Remove</button></li>`).join('') : '<i>No favorites yet.</i>';
  list.querySelectorAll('.pekora-fav-remove').forEach(btn => {
    btn.onclick = () => {
      setFavorites(getFavorites().filter(f => f.id !== btn.dataset.favid));
      renderFavorites();
    };
  });
}

function addRecentGame(gameId, title) {
  let recent = JSON.parse(localStorage.getItem('pekora-recent') || '[]');
  recent = recent.filter(g => g.id !== gameId);
  recent.unshift({id: gameId, title});
  if (recent.length > 10) recent = recent.slice(0, 10);
  localStorage.setItem('pekora-recent', JSON.stringify(recent));
}
function renderRecent() {
  const list = document.getElementById('pekora-recent-list');
  const recent = JSON.parse(localStorage.getItem('pekora-recent') || '[]');
  list.innerHTML = recent.length ? recent.map(f => `<li><a href="/games/${f.id}" target="_blank">${f.title}</a></li>`).join('') : '<i>No recent games.</i>';
}

if (window.location.pathname.startsWith('/games/')) {
  const gameId = window.location.pathname.match(/\/games\/(\d+)/)?.[1];
  const title = document.querySelector('h1')?.innerText || 'Unknown Game';
  addRecentGame(gameId, title);

  const favBtn = document.createElement('button');
  favBtn.textContent = '⭐ Favorite';
  favBtn.style = 'position:fixed;top:80px;right:30px;z-index:9999;font-size:1.2em;';
  document.body.appendChild(favBtn);

  let favorites = getFavorites();
  if (favorites.some(f => f.id === gameId)) favBtn.textContent = '★ Favorited';

  favBtn.onclick = () => {
    favorites = getFavorites();
    if (favorites.some(f => f.id === gameId)) {
      favorites = favorites.filter(f => f.id !== gameId);
      favBtn.textContent = '⭐ Favorite';
    } else {
      favorites.push({id: gameId, title});
      favBtn.textContent = '★ Favorited';
    }
    setFavorites(favorites);
  };

  setTimeout(() => {
    const statsDiv = document.createElement('div');
    statsDiv.id = 'pekora-game-stats';
    statsDiv.style = 'position:fixed;top:140px;right:30px;z-index:9999;background:rgba(0,0,0,0.7);color:#fff;padding:10px 18px;border-radius:12px;font-size:1em;';

    let stats = '';
    const players = document.querySelector('.players, .player-count, [data-players]')?.innerText;
    const visits = document.querySelector('.visits, .visit-count, [data-visits]')?.innerText;
    const likes = document.querySelector('.likes, .like-count, [data-likes]')?.innerText;
    if (players) stats += `Players: ${players}<br>`;
    if (visits) stats += `Visits: ${visits}<br>`;
    if (likes) stats += `Likes: ${likes}<br>`;
    statsDiv.innerHTML = stats || '<i>No stats found.</i>';
    document.body.appendChild(statsDiv);
  }, 1000);
}

function loadGameTools() {
  const toolsDiv = document.getElementById('pekora-game-tools');
  toolsDiv.innerHTML = '';
  if (window.location.pathname.startsWith('/games/')) {
    const title = document.querySelector('h1') ? document.querySelector('h1').innerText : '';
    const creator = document.querySelector('a[href*="/users/"]') ? document.querySelector('a[href*="/users/"]').innerText : '';
    const playBtn = document.querySelector('a[href*="launch"]') || document.querySelector('button:contains("Play")');
    const gameIdMatch = window.location.pathname.match(/\/games\/(\d+)/);
    const gameId = gameIdMatch ? gameIdMatch[1] : null;

    toolsDiv.innerHTML = `
      <b>Game Title:</b> ${title ? title : 'Unknown'}<br>
      <b>Creator:</b> ${creator ? creator : 'Unknown'}<br>
      <b>Game ID:</b> ${gameId ? gameId : 'Unknown'}<br>
      <button id="pekora-play-btn" style="width:100%;margin-top:10px;">Play Game</button>
      <button id="pekora-copy-link-btn" style="width:100%;margin-top:10px;">Copy Game Link</button>
      <button id="pekora-visit-creator-btn" style="width:100%;margin-top:10px;">Visit Creator</button>
      <button id="pekora-copy-id-btn" style="width:100%;margin-top:10px;">Copy Game ID</button>
      <button id="pekora-copy-creator-btn" style="width:100%;margin-top:10px;">Copy Creator Name</button>
      <button id="pekora-open-newtab-btn" style="width:100%;margin-top:10px;">Open in New Tab</button>
    `;

    document.getElementById('pekora-play-btn').onclick = function() {
      if (playBtn && playBtn.href) {
        window.open(playBtn.href, '_blank');
      } else {
        alert('Play button not found.');
      }
    };
    document.getElementById('pekora-copy-link-btn').onclick = function() {
      navigator.clipboard.writeText(window.location.href);
      alert('Game link copied!');
    };
    document.getElementById('pekora-visit-creator-btn').onclick = function() {
      const creatorLink = document.querySelector('a[href*="/users/"]');
      if (creatorLink) {
        window.open(creatorLink.href, '_blank');
      } else {
        alert('Creator link not found.');
      }
    };
    document.getElementById('pekora-copy-id-btn').onclick = function() {
      navigator.clipboard.writeText(gameId || '');
      alert('Game ID copied!');
    };
    document.getElementById('pekora-copy-creator-btn').onclick = function() {
      navigator.clipboard.writeText(creator || '');
      alert('Creator name copied!');
    };
    document.getElementById('pekora-open-newtab-btn').onclick = function() {
      window.open(window.location.href, '_blank');
    };
  } else {
    toolsDiv.innerHTML = `<i>Open a game page to use these tools!</i>`;
  }
}

const themePresets = {
  classic: {
    url: '',
    blur: 0,
    opacity: 100
  },
  night: {
    url: '',
    blur: 8,
    opacity: 80
  },
  pekora: {
    url: 'https://cdn.discordapp.com/attachments/112222222222222222/112222222222222222/pekora-blue-bg.png', 
    blur: 6,
    opacity: 70
  }
};
document.getElementById('pekora-bg-theme').addEventListener('change', function() {
  const val = this.value;
  if (themePresets[val]) {
    document.getElementById('pekora-bg-url').value = themePresets[val].url;
    document.getElementById('pekora-bg-blur').value = themePresets[val].blur;
    document.getElementById('pekora-bg-blur-val').innerText = themePresets[val].blur;
    document.getElementById('pekora-bg-opacity').value = themePresets[val].opacity;
    document.getElementById('pekora-bg-opacity-val').innerText = themePresets[val].opacity;
  }
});

function setCustomBackground(url, blur, opacity) {
  bgImgDiv.style.backgroundImage = url ? `url('${url}')` : 'none';
  bgImgDiv.style.opacity = opacity / 100;
  bgImgDiv.style.display = url ? 'block' : 'none';
  bgBlurDiv.style.backdropFilter = `blur(${blur}px)`;
  bgBlurDiv.style.webkitBackdropFilter = `blur(${blur}px)`;
  bgBlurDiv.style.opacity = blur > 0 ? 1 : 0;
  bgBlurDiv.style.display = blur > 0 ? 'block' : 'none';

  localStorage.setItem('pekora-bg-url', url || '');
  localStorage.setItem('pekora-bg-blur', blur);
  localStorage.setItem('pekora-bg-opacity', opacity);
}
function clearCustomBackground() {
  setCustomBackground('', 0, 100);
  document.getElementById('pekora-bg-url').value = '';
  localStorage.removeItem('pekora-bg-url');
  localStorage.removeItem('pekora-bg-blur');
  localStorage.removeItem('pekora-bg-opacity');
}
window.addEventListener('DOMContentLoaded', () => {
  const url = localStorage.getItem('pekora-bg-url') || '';
  const blur = localStorage.getItem('pekora-bg-blur') || 8;
  const opacity = localStorage.getItem('pekora-bg-opacity') || 60;
  setCustomBackground(url, blur, opacity);
  if (url) document.getElementById('pekora-bg-url').value = url;
});
document.getElementById('pekora-bg-upload').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(ev) {
    document.getElementById('pekora-bg-url').value = ev.target.result;
  };
  reader.readAsDataURL(file);
});
menu.addEventListener('input', function(e) {
  if (e.target && e.target.id === 'pekora-bg-blur') {
    document.getElementById('pekora-bg-blur-val').innerText = e.target.value;
  }
  if (e.target && e.target.id === 'pekora-bg-opacity') {
    document.getElementById('pekora-bg-opacity-val').innerText = e.target.value;
  }
});
menu.addEventListener('click', function(e) {
  if (e.target && e.target.id === 'pekora-bg-apply') {
    const url = document.getElementById('pekora-bg-url').value;
    const blur = document.getElementById('pekora-bg-blur').value;
    const opacity = document.getElementById('pekora-bg-opacity').value;
    if (url) setCustomBackground(url, blur, opacity);
    else alert('Please enter an image URL or upload an image.');
  }
  if (e.target && e.target.id === 'pekora-bg-clear') {
    clearCustomBackground();
  }
});

const customCssStyle = document.createElement('style');
customCssStyle.id = 'pekora-custom-css-style';
document.head.appendChild(customCssStyle);
document.getElementById('pekora-css-editor').value = localStorage.getItem('pekora-custom-css') || '';
document.getElementById('pekora-css-apply').onclick = function() {
  const css = document.getElementById('pekora-css-editor').value;
  customCssStyle.textContent = css;
  localStorage.setItem('pekora-custom-css', css);
};

function startSnow() {
  const canvas = snowCanvas;
  const ctx = canvas.getContext('2d');
  let width = window.innerWidth;
  let height = window.innerHeight;
  let snowflakes = [];
  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }
  window.addEventListener('resize', resize);
  resize();
  function createSnowflake() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1,
      speed: Math.random() * 1 + 0.5,
      opacity: Math.random() * 0.5 + 0.5
    };
  }
  function drawSnowflakes() {
    ctx.clearRect(0, 0, width, height);
    for (let flake of snowflakes) {
      ctx.save();
      ctx.globalAlpha = flake.opacity;
      ctx.beginPath();
      ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,0.8)';
      ctx.shadowColor = '#fff';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.restore();
    }
  }
  function updateSnowflakes() {
    for (let flake of snowflakes) {
      flake.y += flake.speed;
      if (flake.y > height) {
        flake.x = Math.random() * width;
        flake.y = -flake.radius;
      }
    }
  }
  function loop() {
    drawSnowflakes();
    updateSnowflakes();
    requestAnimationFrame(loop);
  }
  snowflakes = Array.from({length: 80}, createSnowflake);
  loop();
}
startSnow();

document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.shiftKey && e.code === 'KeyP') showMenu();
  if (e.ctrlKey && e.shiftKey && e.code === 'KeyD') toggleDarkMode();
  if (e.ctrlKey && e.shiftKey && e.code === 'KeyT') window.scrollTo({ top: 0, behavior: 'smooth' });
});

function hidePekoraAds() {

  document.querySelectorAll('.adImage-0-2-72').forEach(img => img.style.display = 'none');

  document.querySelectorAll('img[src*="thumbnails"]').forEach(img => {
    if (img.src.includes('dbb02d9e6fcf069821c00497f0807645104cd4e97e80500d4d278f87f6005ed3.png')) {
      img.style.display = 'none';
    }
  });
}
menu.addEventListener('click', function(e) {

  if (e.target && e.target.id === 'pekora-hide-ads-btn') {
    hidePekoraAds();
  }
});

// MADE BY HEXERISS