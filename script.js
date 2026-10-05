const USERNAME = 'Litgit010';
const repoGrid = document.querySelector('#repo-grid');
const repoCount = document.querySelector('#repo-count');
const languageColors = {JavaScript:'#f1e05a',TypeScript:'#3178c6',Python:'#3572a5',HTML:'#e34c26',CSS:'#563d7c',Jupyter:'#da5b0b',Java:'#b07219',C:'#555555',C++:'#f34b7d',Shell:'#89e051'};

function escapeHTML(value='') {
  return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}

function repoCard(repo, index) {
  const description = repo.description || 'An experiment in progress. Open the repository to explore the code and follow its development.';
  const language = repo.language || 'Open source';
  const stars = repo.stargazers_count ? `<span class="card-stars">✳ ${repo.stargazers_count}</span>` : '<span></span>';
  const dot = languageColors[language] || '#a89bea';
  return `<a class="repo-card" href="${escapeHTML(repo.html_url)}" target="_blank" rel="noreferrer" aria-label="${escapeHTML(repo.name)} on GitHub">
    <div class="card-top"><span>PROJECT / ${String(index + 1).padStart(2,'0')}</span><span class="card-orbit">↗</span></div>
    <h3>${escapeHTML(repo.name)}</h3><p>${escapeHTML(description)}</p>
    <div class="card-footer"><span class="repo-language"><i class="lang-dot" style="background:${dot}"></i>${escapeHTML(language)}</span>${stars}<span class="card-open">↗</span></div>
  </a>`;
}

async function loadRepositories() {
  try {
    const response = await fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`, {headers:{Accept:'application/vnd.github+json'}});
    if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
    const repos = (await response.json()).filter(repo => !repo.fork && !repo.archived).sort((a,b) => new Date(b.pushed_at) - new Date(a.pushed_at));
    if (!repos.length) throw new Error('No public repositories found');
    repoGrid.innerHTML = repos.map(repoCard).join('');
    repoCount.textContent = `${String(repos.length).padStart(2,'0')} PUBLIC PROJECT${repos.length === 1 ? '' : 'S'} · UPDATED LIVE`;
  } catch (error) {
    repoGrid.innerHTML = `<div class="loading-state">The archive could not connect right now. <a class="text-link" href="https://github.com/${USERNAME}?tab=repositories" target="_blank" rel="noreferrer">Browse projects on GitHub ↗</a></div>`;
    repoCount.textContent = 'LIVE ARCHIVE · GITHUB';
  }
}

loadRepositories();

const canvas = document.querySelector('.starfield');
const ctx = canvas.getContext('2d');
let stars = [];
function makeStars() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = innerWidth * dpr; canvas.height = innerHeight * dpr;
  ctx.setTransform(dpr,0,0,dpr,0,0);
  stars = Array.from({length:Math.min(140, Math.floor(innerWidth * innerHeight / 8500))}, () => ({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.1+.2,a:Math.random()*.55+.12,p:Math.random()*Math.PI*2}));
  drawStars();
}
function drawStars() {
  ctx.clearRect(0,0,innerWidth,innerHeight);
  for (const star of stars) {
    const alpha = star.a * (.75 + Math.sin(Date.now()/1700 + star.p)*.25);
    ctx.beginPath(); ctx.arc(star.x,star.y,star.r,0,Math.PI*2); ctx.fillStyle=`rgba(197,207,241,${alpha})`; ctx.fill();
  }
  requestAnimationFrame(drawStars);
}
makeStars();
addEventListener('resize', makeStars);
