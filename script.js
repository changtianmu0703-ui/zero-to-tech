/* ==========================================================
   林间空地 · script.js
   所有文章都放在 POSTS 数组里：想新增文章，
   只需往数组再加一个对象，列表、筛选、翻页全部自动生效。
   ========================================================== */

const POSTS = [
  {
    slug: 'walden-reread',
    date: '2026.11.02',
    tag: '读书',
    title: '重读《瓦尔登湖》：把孤独过成一种资源',
    excerpt: '十年后第三次翻开这本书，我终于看懂了梭罗在湖边算的那笔账——他省下的从来不是钱，而是注意力本身。',
    body: `
      <p>第一次读《瓦尔登湖》是在高中，语文老师让我们摘抄好词好句，我在笔记本上抄了满满三页湖水的颜色。第二次是在大学宿舍，读到一半就放下了，那时只觉得一个人跑到森林里数松针，未免太过矫情。前几天整理书架，它又掉到我脚边——于是我花了两个晚上，把它从头到尾重读了一遍。</p>
      <p>这次我终于读懂了开篇那笔著名的账。梭罗列出木屋的造价：木板二十八美元多一点，加上钉子、铁件、油漆，统共不过六十来块。他得意地说，剑桥的学生毕业后住的房子比这贵出百倍，却并没有因此更聪明或更自由。他省下的从来不是钱，而是为了偿付这些钱而必须出卖的时间。用今天的话说：他用低廉的生活成本，赎回了自己的注意力。</p>
      <blockquote>我到林中去，是因为我希望谨慎地生活，只面对生活的基本事实，看看我是否学得到生活要教育我的东西。——梭罗</blockquote>
      <h2>孤独是资源，不是惩罚</h2>
      <p>我们这代人习惯把独处看成一种待填补的空隙：电梯里要刷短视频，等菜的间隙要回消息，连走路都要听点什么。独处一旦出现，就像房间里的静区，必须立刻用声音填满。而梭罗把独处描述成一种近乎奢侈的资源——"我从未找到比独处更好的伴侣"。他把一个人坐在湖边的下午，过得比任何一场聚会都丰盛。</p>
      <p>受这本书鼓动，我给自己立了一个小规矩：每周三晚上关掉手机两小时，不安排任何"有意义"的事，读书、发呆、写点没人看的字都行。坚持两个多月，我发现那两小时的产出，常常超过其余所有碎片时间加起来的总和。原来孤独从不亏欠我们，是我们一直欠它一个坐下来的机会。</p>
      <p>湖还在那里。下次焦虑的时候，不妨也去自己的瓦尔登湖坐一坐。</p>`
  },
  {
    slug: 'midnight-noodles',
    date: '2026.10.18',
    tag: '生活',
    title: '深夜厨房笔记：一碗葱油拌面的方法论',
    excerpt: '晚上十一点半的厨房，一口小锅，两根葱。熬夜的仪式感，一半是面给的，一半是那一声"滋啦"给的。',
    body: `
      <p>深夜做饭和白天做饭是完全不同的两件事。白天是任务，深夜是仪式。晚上十一点半，客厅的灯已经关了，只留厨房一盏小灯，一口小锅，两根葱，一小碟生抽。这时候做的面，味道未必最好，但一定是当天吃得很认真的一餐。</p>
      <p>葱油拌面的全部秘密在于"耐心"两个字。冷油下锅，葱白先入，最小火，让油温慢慢地、慢慢地升上去。急了火一大，葱就焦，油就苦，前功尽弃。要等到葱段在锅里从挺立到蜷曲、从翠绿到金黄，厨房里浮起那种有点像爆米花又更温柔的香气，才算是熬到位了。整个过程大约八分钟，一分钟都省不得。</p>
      <p>碗底先倒两勺生抽，加一点点糖和几滴香醋。面煮到八分硬就捞，带着一点热气泼进酱油里。最后一步，也是最戏剧化的一步：把滚烫的葱油当头浇下——"滋啦"一声，酱香被彻底激出来。这一声，是深夜厨房最好听的音效。</p>
      <p>吃到第二碗的时候我忽然想到，很多事其实都和熬葱油一个道理：火候不到的时候，着急和加大火力都只会让事情变苦。能做的只是把火调小一点，再等一等。面会熟，油会香，事情会过去。</p>`
  },
  {
    slug: 'benefits-of-slow',
    date: '2026.09.30',
    tag: '随想',
    title: '关于慢下来的种种好处',
    excerpt: '慢不是效率的反面，而是一种筛选机制：走得慢一点，才知道哪些路值得快。',
    body: `
      <p>不知道从什么时候开始，"快"成了一种默认的美德。回复要快，成长要快，甚至休息都要"高效地休息"。我一度也是效率崇拜的信徒，手机里装着三个待办事项应用，日程表精确到半小时。直到某个周日下午，我发现自己躺在沙发上同时刷着两个社交软件，却想不起来上一个小时看了什么——那一刻我意识到，快到某个程度之后，速度本身会吃掉意义。</p>
      <p>慢下来之后我才发现，慢不是懒，而是一种筛选机制。散步的时候，因为走得慢，念头才能完整地长出来：上周我在两次晚饭后的散步里，想明白了一件拖了半年的事该怎么开口，删掉了硬盘里四十多 GB 的"以后可能有用"的文件，还把一本读到一半就搁置的书重新捡了起来。这些事没有一件是"高效"状态下完成的。</p>
      <p>当然，慢也有它的代价：同样一小时，散步能做的事显然不如对着电脑多。但这笔账不能只算产出。慢下来的那部分时间，像屋子里的留白——它不产出任何东西，却让所有产出的东西有了形状。</p>
      <p>如果你也觉得日子过得像被按了倍速，不妨从最小的一件事试起：把通勤中的一段路改用走路。就当是给生活留一条不赶时间的缝。</p>`
  },
  {
    slug: 'digital-minimalism',
    date: '2026.09.12',
    tag: '工具',
    title: '我的数字极简清单：2026 秋季版',
    excerpt: '每半年做一次的"数字大扫除"。这次的原则只有三条：看不见的先删、拿不准的先封存、离不开的再优化。',
    body: `
      <p>我有每半年做一次"数字大扫除"的习惯，就像换季整理衣柜。今年秋天这一次做得格外彻底，把方法和结果记在这里，也算给半年后的自己留一份对照。</p>
      <h2>三条原则</h2>
      <ul>
        <li><strong>看不见的先删</strong>：所有超过半年没打开过的文件、聊天记录和应用，直接删掉，不犹豫。"以后可能有用"是数字囤积最大的谎言。</li>
        <li><strong>拿不准的先封存</strong>：删不动又用不上的，统一挪进一个叫"冷宫"的文件夹，三个月后再看，仍然想不起来的就放心删。</li>
        <li><strong>离不开的再优化</strong>：真正每天都要用的少数几个工具，才值得花时间研究用法和快捷键。</li>
      </ul>
      <p>执行下来的结果比想象中惊人：手机首屏从五页减到一页，卸载了十一个应用，退出了二十多个"潜水"群组，退订了所有让我感到压力的邮件列表。屏幕使用时间从日均五小时左右，降到了一个半小时上下。</p>
      <p>最大的收获不是省下的时间，而是那种"一切都在掌控之中"的清爽感。数字生活的整洁和屋子的整洁一样——不是目的，而是让注意力能够安放下来的前提。</p>`
  },
  {
    slug: 'before-thirty',
    date: '2026.08.25',
    tag: '随想',
    title: '写在三十岁来临之前',
    excerpt: '还有四十天满三十岁。二十几岁教会我的事，以及想对三十岁说的三句话。',
    body: `
      <p>再过四十天，我就三十岁了。倒不是在意这个数字本身，而是它像旅途中的一个驿站，天然适合停下来清点行囊。于是有了这篇略显私人的文字。</p>
      <p>回头看，二十几岁教给我的事，大多不是在学校里学的：是被拒绝过几次之后才明白，"不"并没有想象中那么可怕；是搬过三次家之后才懂得，一个人真正的安全感来自能力，而不来自地址；是经历过几段关系的开始与结束之后才学会，真诚是成本最低、收益最高的相处方式。</p>
      <blockquote>所谓成熟，大概就是把一句"来不及了"，慢慢改写成"刚好来得及"。</blockquote>
      <p>对三十岁，我不立宏大的目标，只许三个朴素的愿望：身体上，希望还能一口气爬六层楼不喘；心智上，希望遇到蠢事时先深呼吸而不是先生气；生活上，希望继续保持深夜煮面的兴致——一个人也能把日子过得热气腾腾，这大概是我能想到的、对生活最实在的热爱。</p>`
  }
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
  return `${MONTH_ZH[now.getMonth()]}月 · 共${zhNum(POSTS.length)}篇文章 · 最近更新 ${POSTS[0].date}`;
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
  const len  = plain(p.body).length;
  const mins = Math.max(1, Math.round(len / 400));
  const prev = POSTS[i + 1];   // 数组按新到旧排列：+1 是更早一篇
  const next = POSTS[i - 1];   // -1 是更新一篇

  $('#post-meta').innerHTML =
    `<span class="entry-tag">${p.tag}</span><span> · </span><time>${p.date}</time>`;
  $('#post-title').textContent = p.title;
  $('#post-stats').textContent = `全文约 ${zhNum(len)} 字 · 阅读约 ${mins} 分钟`;
  $('#post-body').innerHTML = p.body;
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
window.addEventListener('hashchange', router);

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
$('#dateline').textContent = dateline();
router();
