/* ==========================================================
   林间空地 · script.js
   文章从 posts/*.md 加载，支持 YAML frontmatter。
   ========================================================== */

let POSTS = [];

const SLUGS = [
  'walden-reread',
  'midnight-noodles',
  'benefits-of-slow',
  'digital-minimalism',
  'before-thirty'
  'bh'
];

/* ---------- 小工具 ---------- */
const $ = s => document.querySelector(s);

const plain = html => html.replace(/<[^>]+>/g, '');       // 去掉标签，用于统计字数

function zhNum(n){                                        // 数字转汉字（够用到 99）
  const d = '零一二三四五六七八九';
  if (n <= 10) return n === 10 ? '十' : d[n];
  if (n < 20)  return '十' + d[n % 10];
  const t = Math.floor(n / 10);
  return d[t] + '十' + (n % 10 ? d[n % 10] : '');
}

const MONTH_ZH = ['一','二','三','四','五','六','七','八','九','十','十一','十二'];

function dateline(){                                      // 刊头下的动态日期行
  const now = new Date();
  const latest = POSTS.length > 0 ? POSTS[0].date : '-';
  return `${MONTH_ZH[now.getMonth()]}月 · 共${zhNum(POSTS.length)}篇文章 · 最近更新 ${latest}`;
}

/* ---------- frontmatter + 加载 ---------- */
function parseFrontmatter(text) {
  const match = text.trim().match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { body: text.trim() };
  const body = match[2].trim();
  const meta = {};
  match[1].split(/\r?\n/).forEach(line => {
    const idx = line.indexOf(':');
    if (idx > 0) meta[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
  });
  return { ...meta, body };
}

function assemblePost(text, fallbackSlug) {
  const { body, ...meta } = parseFrontmatter(text);
  return {
    slug: meta.slug || fallbackSlug,
    date: meta.date || '',
    tag: meta.tag || '',
    title: meta.title || '',
    excerpt: meta.excerpt || '',
    body
  };
}

async function loadPosts() {
  const results = await Promise.all(
    SLUGS.map(async slug => {
      try {
        const res = await fetch(`posts/${slug}.md`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const text = await res.text();
        return assemblePost(text, slug);
      } catch (err) {
        console.error(`加载文章失败: ${slug}`, err);
        return null;
      }
    })
  );
  POSTS = results.filter(Boolean).sort((a, b) => b.date.localeCompare(a.date));
}

/* ---------- 列表视图 ---------- */
let currentTag = '全部';

function renderFilter(){
  const tags = ['全部', ...new Set(POSTS.map(p => p.tag))];
  $('#filter').innerHTML = tags.map(t =>
    `<button data-tag="${t}" class="${t === currentTag ? 'active' : ''}">${t}</button>`
  ).join('');
}

function renderList(){
  const list = currentTag === '全部' ? POSTS : POSTS.filter(p => p.tag === currentTag);
  $('#entry-list').innerHTML = list.map((p, i) => {
    const featured = currentTag === '全部' && i === 0;    // 最新一篇作为"本期特写"
    return `
    <article class="entry${featured ? ' featured' : ''}" data-slug="${p.slug}"
             tabindex="0" role="link" aria-label="${p.title}" style="--i:${i}">
      <div class="entry-head">
        <span class="entry-no">${String(i + 1).padStart(2, '0')}</span>
        <time>${p.date}</time>
        <span class="entry-tag">${p.tag}</span>
        ${featured ? '<span class="entry-mark">本期特写</span>' : ''}
      </div>
      <h2 class="entry-title">${p.title}</h2>
      <p class="entry-excerpt">${p.excerpt}</p>
      <span class="entry-more">阅读全文<span class="arrow">→</span></span>
    </article>`;
  }).join('');
}

/* ---------- 阅读视图 ---------- */
function renderPost(slug){
  const i = POSTS.findIndex(p => p.slug === slug);
  if (i < 0) return false;
  const p = POSTS[i];
  const html = marked.parse(p.body);
  const len  = plain(html).length;
  const mins = Math.max(1, Math.round(len / 400));
  const prev = POSTS[i + 1];   // 数组按新到旧排列：+1 是更早一篇
  const next = POSTS[i - 1];   // -1 是更新一篇

  $('#post-meta').innerHTML =
    `<span class="entry-tag">${p.tag}</span><span> · </span><time>${p.date}</time>`;
  $('#post-title').textContent = p.title;
  $('#post-stats').textContent = `全文约 ${zhNum(len)} 字 · 阅读约 ${mins} 分钟`;
  $('#post-body').innerHTML = html;
  $('#pager').innerHTML = `
    <a class="pager-item prev" ${prev ? `href="#/post/${prev.slug}"` : 'hidden'}>
      <span class="pager-dir">← 更早一篇</span>
      <span class="pager-title">${prev ? prev.title : ''}</span>
    </a>
    <a class="pager-item next" ${next ? `href="#/post/${next.slug}"` : 'hidden'}>
      <span class="pager-dir">更新一篇 →</span>
      <span class="pager-title">${next ? next.title : ''}</span>
    </a>`;
  return true;
}

/* ---------- 视图切换 ---------- */
function show(view){
  const list   = $('#list-view');
  const post   = $('#post-view');
  const target = view === 'post' ? post : list;
  const other  = view === 'post' ? list : post;
  other.hidden = true;
  target.hidden = false;
  target.classList.remove('view-enter');   // 强制重放入场动画
  void target.offsetWidth;
  target.classList.add('view-enter');
  window.scrollTo(0, 0);
  updateProgress();
}

/* ---------- 极简 hash 路由（浏览器前进/后退可用） ---------- */
function router(){
  const m = location.hash.match(/^#\/post\/(.+)$/);
  if (m && renderPost(m[1])) show('post');
  else { renderFilter(); renderList(); show('list'); }
}

/* ---------- 阅读进度条 ---------- */
function updateProgress(){
  if ($('#post-view').hidden) { $('#progress').style.transform = 'scaleX(0)'; return; }
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const r = max > 0 ? window.scrollY / max : 0;
  $('#progress').style.transform = `scaleX(${Math.min(1, Math.max(0, r))})`;
}
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(() => { updateProgress(); ticking = false; });
  }
});

/* ---------- 事件绑定 ---------- */
// 目录：整块可点击，键盘回车 / 空格同样可触发
$('#entry-list').addEventListener('click', e => {
  const el = e.target.closest('.entry');
  if (el) location.hash = `#/post/${el.dataset.slug}`;
});
$('#entry-list').addEventListener('keydown', e => {
  const el = e.target.closest('.entry');
  if (el && (e.key === 'Enter' || e.key === ' ')) {
    e.preventDefault();
    location.hash = `#/post/${el.dataset.slug}`;
  }
});
// 标签筛选（事件委托）
$('#filter').addEventListener('click', e => {
  const btn = e.target.closest('button');
  if (!btn) return;
  currentTag = btn.dataset.tag;
  renderFilter();
  renderList();
});
// 导航"关于"：平滑滚动到页脚
$('#nav-about').addEventListener('click', e => {
  e.preventDefault();
  $('#about').scrollIntoView({ behavior: 'smooth' });
});

/* ---------- 启动 ---------- */
async function init() {
  try {
    await loadPosts();
    if (POSTS.length === 0) throw new Error('无文章');
  } catch (err) {
    console.error(err);
    $('#dateline').textContent = '加载失败';
    $('#entry-list').innerHTML = '<p style="text-align:center;color:var(--ink-soft);padding:40px 0;">文章加载失败，请检查网络连接后刷新。</p>';
    return;
  }
  $('#dateline').textContent = dateline();
  window.addEventListener('hashchange', router);
  router();
}

init();
