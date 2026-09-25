const fallbackItinerary = [
  { id: "day-01", date: "10 / 01", day: "DAY 01", title: "故宫博物院 · 下午预约", area: "东城区", places: ["故宫博物院"], weather: "☀️ 10–22°C", tags: ["下午预约", "步行约 8 km", "提前准备证件"], route: ["京东总部附近", "前门 / 东城区午餐", "故宫博物院", "景山公园", "返回住宿地"], timeline: [{ time: "10:30", title: "从京东总部前往前门", desc: "先用午餐和周边散步调节节奏，避开预约入场前的赶路压力。" }, { time: "13:30", title: "故宫博物院 · 下午预约入场", desc: "建议提前 20–30 分钟到达，携带身份证和预约信息，按官方入场时间进入故宫。" }, { time: "15:30", title: "故宫中轴线缓步游览", desc: "优先看太和殿、中和殿、乾清宫与御花园，注意休息和拍照节奏。" }, { time: "18:00", title: "景山公园 / 回程休整", desc: "在景山公园俯瞰故宫后返回住宿地，保留充足休息时间。" }], food: "推荐：前门周边老北京菜、炸酱面、面食和轻食咖啡；预约后可以直接在景区附近吃午餐。", backup: "若当天预约临时调整，可切换为景山公园 + 北海公园的轻量方案，不建议临时硬抢入场。" },
  { id: "day-02", date: "10 / 02", day: "DAY 02", title: "皇家园林 · 颐和园慢游", area: "海淀区", places: ["颐和园"], weather: "🌤️ 9–21°C", tags: ["完整一天", "步行约 9 km", "建议穿舒适鞋"], route: ["京东总部附近", "颐和园东宫门", "昆明湖畔", "返回住宿地"], timeline: [{ time: "06:30", title: "提早出发前往颐和园", desc: "地铁换乘或打车，单程时间较长，建议准备水和早餐。" }, { time: "08:30", title: "颐和园 · 东宫门入园", desc: "长廊、排云殿、佛香阁、昆明湖依次游览。" }, { time: "12:30", title: "园内或北宫门附近午餐", desc: "建议提前准备轻食，景区内选择以实际营业为准。" }, { time: "17:00", title: "沿昆明湖收尾并返程", desc: "日落前离园，避开晚高峰。" }], food: "推荐：海淀西苑方向简餐、咖啡和烤鸭。", backup: "雨天备用：调整为室内博物馆，颐和园顺延。" },
  { id: "day-03", date: "10 / 03", day: "DAY 03", title: "故宫中轴线", area: "东城区", places: ["故宫博物院", "景山公园"], weather: "☀️ 10–23°C", tags: ["预约重点", "步行约 8 km", "适合早起"], route: ["京东总部附近", "故宫午门", "故宫神武门", "景山公园", "返回住宿地"], timeline: [{ time: "06:30", title: "出发前往故宫午门", desc: "务必提前确认预约与证件要求，安检时间较长。" }, { time: "08:30", title: "故宫博物院 · 中轴线", desc: "午门—太和殿—中和殿—乾清宫—御花园，按开放路线游览。" }, { time: "13:00", title: "故宫周边午餐", desc: "建议错峰用餐，预留体力给下午的景山。" }, { time: "15:00", title: "景山公园 · 万春亭", desc: "登高俯瞰故宫全景，停留约 1–1.5 小时。" }], food: "推荐：故宫北门外、景山西街方向的北京菜和小吃。", backup: "故宫预约未成功时，不要现场排队碰运气，可改为景山 + 北海。" },
  { id: "day-04", date: "10 / 04", day: "DAY 04", title: "胡同与湖岸", area: "西城区 / 东城区", places: ["什刹海", "北海公园"], weather: "🌤️ 11–23°C", tags: ["慢游日", "步行约 7 km", "可晚一点出发"], route: ["京东总部附近", "什刹海", "烟袋斜街", "北海公园", "返回住宿地"], timeline: [{ time: "08:00", title: "出发前往什刹海", desc: "地铁到什刹海或鼓楼一带，步行感受胡同街区。" }, { time: "09:30", title: "什刹海 · 后海水岸", desc: "沿银锭桥、烟袋斜街慢走，适合拍照和早餐。" }, { time: "13:00", title: "什刹海周边午餐", desc: "铜锅涮肉、北京小吃、咖啡均可作为选择。" }, { time: "14:30", title: "北海公园 · 白塔与湖畔", desc: "从北门或东门方向进入，按当天开放入口调整。" }], food: "推荐：什刹海铜锅涮肉、老北京小吃、后海咖啡馆。", backup: "雨天备用：恭王府或室内胡同文化展览。" },
  { id: "day-05", date: "10 / 05", day: "DAY 05", title: "国家记忆 · 博物馆半日", area: "东城区", places: ["中国国家博物馆"], weather: "☁️ 10–21°C", tags: ["预约重点", "室内为主", "步行约 4 km"], route: ["京东总部附近", "国家博物馆", "天安门片区", "返回住宿地"], timeline: [{ time: "07:00", title: "出发前往国家博物馆", desc: "提前确认预约、证件与安检要求，建议预留排队时间。" }, { time: "09:00", title: "中国国家博物馆", desc: "建议提前规划重点展厅，完整参观约 3–5 小时。" }, { time: "13:30", title: "博物馆周边午餐", desc: "选择东单、前门方向简餐，避免临时走太远。" }, { time: "16:30", title: "天安门片区散步后返程", desc: "根据体力安排，不额外强行增加景点。" }], food: "推荐：前门小吃、东单餐厅或简餐。", backup: "预约未成功时，可改为城市街区散步，不建议临时进入管控区域。" },
  { id: "day-06", date: "10 / 06", day: "DAY 06", title: "圆明园秋色", area: "海淀区", places: ["圆明园"], weather: "🌤️ 9–20°C", tags: ["面积较大", "步行约 8 km", "适合拍照"], route: ["京东总部附近", "圆明园南门", "西洋楼遗址", "返回住宿地"], timeline: [{ time: "07:00", title: "出发前往圆明园", desc: "地铁换乘或打车，建议从南门进入。" }, { time: "08:30", title: "圆明园 · 西洋楼遗址", desc: "遗址区与湖区分段游览，注意园区面积和步行距离。" }, { time: "12:30", title: "圆明园周边午餐", desc: "清华园或五道口方向餐饮选择较多。" }, { time: "16:30", title: "秋色收尾并返回", desc: "保留一天结束前的休息时间。" }], food: "推荐：五道口面馆、简餐、咖啡和地方菜。", backup: "雨天备用：清华艺术博物馆或海淀室内场馆。" },
  { id: "day-07", date: "10 / 07", day: "DAY 07", title: "雍和宫与收尾胡同", area: "东城区", places: ["雍和宫"], weather: "☀️ 9–20°C", tags: ["轻量行程", "步行约 4 km", "预留返程时间"], route: ["京东总部附近", "雍和宫", "国子监街区", "返程 / 住宿地"], timeline: [{ time: "07:30", title: "出发前往雍和宫", desc: "根据返程时间灵活调整，优先确认开放与预约要求。" }, { time: "09:00", title: "雍和宫", desc: "中轴线慢游，注意文明参观与现场秩序。" }, { time: "11:30", title: "国子监与五道营胡同", desc: "作为轻量补充，适合午餐和买伴手礼。" }, { time: "15:00", title: "返程缓冲", desc: "不再安排远距离景点，为退房或返程留出余量。" }], food: "推荐：五道营胡同咖啡、面馆和小型餐馆。", backup: "如需提前返程，雍和宫可作为唯一保留景点。" }
];

const fallbackAttractions = [
  ["01", "天坛公园", "城市公园", "东城区", "祈年殿、丹陛桥、圜丘坛组成一条清晰的皇家祭天轴线。", "2.5–3.5 小时", "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?auto=format&fit=crop&w=900&q=80", ["提前看官方开放时间，国庆期间容易出现排队。", "适合从祈年殿沿丹陛桥一路慢走到圜丘坛。", "中午前后阳光更强，带帽子和水很重要。"], [{ shop: "天坛北门小馆", cuisine: "北京菜", signature: "香酥鸡 / 蒸饺", price: "¥35–75 / 人" }, { shop: "东城面食铺", cuisine: "面食", signature: "炸酱面 / 烧饼", price: "¥20–48 / 人" }, { shop: "天坛咖啡坊", cuisine: "轻食 / 咖啡", signature: "拿铁 / 三明治", price: "¥25–55 / 人" }]],
  ["02", "颐和园", "皇家园林", "海淀区", "长廊、昆明湖与佛香阁，把一天时间交给园林的层次和风。", "4–6 小时", "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=900&q=80", ["建议从东宫门进入，先走长廊再到昆明湖，节奏更适合慢游。", "冬季到秋季景色适合散步，拍照优先在湖岸和桥梁处。", "园区很大，最好把重点景点和休息点提前规划。"], [{ shop: "颐和园北门餐馆", cuisine: "北京菜", signature: "京酱肉丝 / 白切鸡", price: "¥50–120 / 人" }, { shop: "西苑面馆", cuisine: "面食", signature: "炸酱面 / 手擀面", price: "¥25–60 / 人" }, { shop: "昆明湖咖啡", cuisine: "轻食", signature: "法棍 / 奶酪三明治", price: "¥30–65 / 人" }]],
  ["03", "故宫博物院", "博物馆 / 古迹", "东城区", "沿中轴线进入紫禁城，国庆期间预约、安检和体力都要提前规划。", "4–5 小时", "https://images.unsplash.com/photo-1580250497591-112f2f40a3f4?auto=format&fit=crop&w=900&q=80", ["适合选择下午预约入场，避开早晨客流高峰。", "先看太和殿与中轴线，再不必强赶每一个殿宇，留空间休息。", "建议把景山公园作为故宫之后的收尾，视角最适合俯瞰宫城。"], [{ shop: "前门老北京餐厅", cuisine: "北京菜", signature: "烤鸭 / 煎饼果子", price: "¥68–180 / 人" }, { shop: "东城区小食铺", cuisine: "小吃", signature: "驴打滚 / 炸酱面", price: "¥20–50 / 人" }, { shop: "故宫南门咖啡", cuisine: "轻食 / 咖啡", signature: "拿铁 / 经典三明治", price: "¥28–60 / 人" }]],
  ["04", "什刹海", "湖泊 / 胡同", "西城区", "后海、银锭桥与烟袋斜街，适合慢走、吃小吃和看北京的生活感。", "2–3 小时", "https://images.unsplash.com/photo-1537531383496-f4749b803f7f?auto=format&fit=crop&w=900&q=80", ["可从后海沿岸慢走，途中穿插胡同和小店，适合拍照。", "适合选择傍晚时段看水岸和灯光，氛围更轻松。", "不必一口气走满整片水岸，适当停留更有节奏。"], [{ shop: "后海老店", cuisine: "京味小吃", signature: "涮肉 / 炸鸡", price: "¥45–90 / 人" }, { shop: "烟袋斜街餐馆", cuisine: "北京菜 / 小炒", signature: "京酱肉丝 / 小炒黄牛肉", price: "¥60–140 / 人" }, { shop: "南锣咖啡馆", cuisine: "咖啡 / 轻食", signature: "拿铁 / 鸡蛋三明治", price: "¥25–60 / 人" }]],
  ["05", "景山公园", "城市公园", "东城区", "万春亭是俯瞰故宫中轴线的经典视角，适合作为故宫后的收尾。", "1–1.5 小时", "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80", ["登高视角非常适合拍摄故宫全景，推荐在晴朗时段。", "适合作为故宫结束前的停顿，不建议安排过多后续活动。", "可以和北海公园安排成一日轻松走动路线。"], [{ shop: "景山西街小店", cuisine: "北京菜", signature: "锅包肉 / 炸酱面", price: "¥38–90 / 人" }, { shop: "故宫北门面馆", cuisine: "面食", signature: "宝塔饼 / 手擀面", price: "¥20–55 / 人" }, { shop: "景山咖啡屋", cuisine: "咖啡", signature: "香草拿铁 / 奶油蛋糕", price: "¥30–70 / 人" }]],
  ["06", "北海公园", "城市公园", "西城区", "白塔、湖面与古树构成安静的皇家园林片段，适合下午慢游。", "2–3 小时", "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=900&q=80", ["北海更适合清淡走动，不需要一次性打卡所有区域。", "从白塔和湖区看景色最舒服，拍照比路线更重要。", "建议安排在下午，雨后空气会更舒适。"], [{ shop: "北海食堂", cuisine: "京味小炒", signature: "宫保鸡丁 / 青椒土豆丝", price: "¥45–95 / 人" }, { shop: "西城区清真餐厅", cuisine: "清真菜", signature: "牛羊肉 / 扁豆煲", price: "¥55–120 / 人" }, { shop: "湖畔咖啡", cuisine: "咖啡 / 轻食", signature: "拿铁 / 鸡蛋沙拉三明治", price: "¥28–65 / 人" }]],
  ["07", "中国国家博物馆", "博物馆", "东城区", "适合把半天时间交给展厅。预约、证件与安检是国庆重点。", "3–5 小时", "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=900&q=80", ["建议提前筛选 2–3 个展厅，而不是一口气跑全馆。", "门票和预约机制严格，证件和电子票必须准备齐。", "适合安排在上午或中午，下午空间较大。"], [{ shop: "东单简餐", cuisine: "中式快餐", signature: "黄焖鸡 / 排骨饭", price: "¥35–75 / 人" }, { shop: "天安门口小馆", cuisine: "鲁菜 / 京菜", signature: "鱼香肉丝 / 酸辣汤", price: "¥50–100 / 人" }, { shop: "前门咖啡", cuisine: "咖啡 / 轻食", signature: "拿铁 / 热狗面包", price: "¥26–58 / 人" }]],
  ["08", "圆明园", "遗址公园", "海淀区", "遗址、湖区与秋色交织，园区很大，建议预留完整半天。", "3–5 小时", "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80", ["适合按西洋楼遗址和湖区分段走，避免盲目穿行。", "如果体力一般，建议重视景观点而不是追全园。", "秋色和遗址氛围很强，拍照时使用长焦最舒服。"], [{ shop: "五道口面房", cuisine: "面食", signature: "炸酱面 / 拌面", price: "¥25–60 / 人" }, { shop: "清华周边餐厅", cuisine: "中式快餐", signature: "宫保鸡丁 / 口水鸡", price: "¥45–90 / 人" }, { shop: "海淀咖啡店", cuisine: "咖啡 / 甜品", signature: "曼特宁 / 蛋糕", price: "¥28–65 / 人" }]],
  ["09", "雍和宫", "宗教古迹", "东城区", "以中轴线为主线参观，搭配国子监和五道营街区更从容。", "1.5–2 小时", "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80", ["适合在轻量行程中安排，节奏更稳。", "最佳体验在安静时段，避免大批游客挤入。", "结合国子监和胡同散步，适合收尾的半天。"], [{ shop: "五道营胡同餐馆", cuisine: "京味小店", signature: "炸酱面 / 凉菜", price: "¥35–80 / 人" }, { shop: "国子监咖啡", cuisine: "咖啡 / 轻食", signature: "招牌拿铁 / 奶油吐司", price: "¥28–65 / 人" }, { shop: "雍和宫周边快餐", cuisine: "面食 / 小炒", signature: "牛肉面 / 青菜豆腐", price: "¥25–60 / 人" }]]
].map(([number, name, category, area, description, duration, image, guide, foodRank]) => ({ number, name, category, area, description, duration, image, guide, foodRank }));

let itinerary = [...fallbackItinerary];
let attractions = [...fallbackAttractions];

async function loadTravelData() {
  try {
    const response = await fetch("./travel-data.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Failed to load travel data");
    const data = await response.json();
    itinerary = Array.isArray(data.itinerary) && data.itinerary.length ? data.itinerary : fallbackItinerary;
    attractions = Array.isArray(data.attractions) && data.attractions.length ? data.attractions : fallbackAttractions;
  } catch (error) {
    itinerary = [...fallbackItinerary];
    attractions = [...fallbackAttractions];
  }

  renderItinerary();
  renderAttractions();
  updateProgress();
}

const itineraryList = document.querySelector("#itineraryList");
const attractionGrid = document.querySelector("#attractionGrid");
const progressText = document.querySelector("#progressText");
const completed = new Set(JSON.parse(localStorage.getItem("bj-trip-completed") || "[]"));

function renderItinerary() {
  itineraryList.innerHTML = itinerary.map((day, index) => `
    <article class="day-card ${index === 0 ? "open" : ""}" data-day="${day.id}">
      <div class="day-summary" role="button" tabindex="0" aria-expanded="${index === 0}">
        <span class="day-number">${day.day}</span>
        <div class="day-main"><span class="day-date">${day.date}</span><div><h3 class="day-title">${day.title}</h3><span class="day-places">${day.places.join(" + ")} · ${day.area}</span></div></div>
        <div class="day-side"><div class="day-weather"><span>${day.weather}</span><small>参考天气</small></div><span class="chevron">＋</span></div>
      </div>
      <div class="day-details">
        <div class="day-tags">${day.tags.map((tag, i) => `<span class="tag ${i === day.tags.length - 1 ? "alert" : ""}">${tag}</span>`).join("")}</div>
        <div class="route-line">${day.route.map((stop, i) => `<div class="route-stop"><time>${i === 0 ? "出发" : i === day.route.length - 1 ? "返回" : "途中"}</time><strong>${stop}</strong><small>${i === 0 ? "京东总部附近" : i === day.route.length - 1 ? "结束当日行程" : "步行 / 地铁"}</small></div>`).join("")}</div>
        <div class="timeline">${day.timeline.map(item => `<div class="timeline-item"><time class="timeline-time">${item.time}</time><span class="timeline-node"></span><div class="timeline-content"><h4>${item.title}</h4><p>${item.desc}</p>${item.title.includes("景点") || item.title.includes("公园") || item.title.includes("博物馆") || item.title.includes("雍和宫") ? `<a class="map-link" target="_blank" rel="noreferrer" href="https://ditu.amap.com/search?query=${encodeURIComponent(item.title.split(" · ")[0])}">打开地图 ↗</a>` : ""}</div></div>`).join("")}</div>
        <div class="day-bottom"><div class="mini-card"><h5>周边美食</h5><p>${day.food}</p></div><div class="mini-card"><h5>天气 / 备用方案</h5><p>${day.backup}</p></div></div>
        <button class="done-button ${day.places.every(p => completed.has(p)) ? "done" : ""}" data-places='${JSON.stringify(day.places)}' type="button">${day.places.every(p => completed.has(p)) ? "✓ 本日景点已完成" : "○ 标记本日景点已完成"}</button>
      </div>
    </article>`).join("");
  itineraryList.querySelectorAll(".day-summary").forEach(summary => {
    const toggle = () => { const card = summary.closest(".day-card"); const open = card.classList.toggle("open"); summary.setAttribute("aria-expanded", String(open)); };
    summary.addEventListener("click", toggle); summary.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
  });
  itineraryList.querySelectorAll(".done-button").forEach(button => button.addEventListener("click", () => { JSON.parse(button.dataset.places).forEach(place => completed.has(place) ? completed.delete(place) : completed.add(place)); localStorage.setItem("bj-trip-completed", JSON.stringify([...completed])); renderItinerary(); updateProgress(); }));
}

function renderAttractions() { attractionGrid.innerHTML = attractions.map(item => `<article class="attraction-card"><div class="attraction-photo" style="background-image:url('${item.image}')"><span class="attraction-number">${item.number}</span></div><div class="attraction-content"><h3>${item.name}</h3><div class="attraction-meta"><span>${item.category}</span><span>·</span><span>${item.area}</span></div><p class="attraction-description">${item.description}</p><div class="fact-row"><span class="fact">游览 ${item.duration}</span><span class="fact">预约以官方为准</span></div><div class="attraction-guide"><h4>游玩攻略</h4><ul>${item.guide.map(point => `<li>${point}</li>`).join("")}</ul></div><div class="attraction-food"><h4>附近美食榜</h4><div class="food-rank">${item.foodRank.map(food => `<div class="food-item"><div class="food-top"><strong>${food.shop}</strong><span>${food.cuisine}</span></div><p>${food.signature}</p><em>${food.price}</em></div>`).join("")}</div></div><div class="attraction-footer"><a target="_blank" rel="noreferrer" href="https://ditu.amap.com/search?query=${encodeURIComponent(item.name)}">查看地图 ↗</a><span>数据参考小红书公开笔记</span></div></div></article>`).join(""); }
function updateProgress() { const total = attractions.length; progressText.textContent = `${completed.size} / ${total} 个景点已完成`; }
document.querySelector("#expandAll").addEventListener("click", () => document.querySelectorAll(".day-card").forEach(card => { card.classList.add("open"); card.querySelector(".day-summary").setAttribute("aria-expanded", "true"); }));
document.querySelector("#collapseAll").addEventListener("click", () => document.querySelectorAll(".day-card").forEach(card => { card.classList.remove("open"); card.querySelector(".day-summary").setAttribute("aria-expanded", "false"); }));
document.querySelector("#themeToggle").addEventListener("click", () => { document.body.classList.toggle("dark"); localStorage.setItem("bj-trip-theme", document.body.classList.contains("dark") ? "dark" : "light"); });
if (localStorage.getItem("bj-trip-theme") === "dark") document.body.classList.add("dark");
renderItinerary(); renderAttractions(); updateProgress();
