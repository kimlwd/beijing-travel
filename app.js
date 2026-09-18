const itinerary = [
  { id: "day-01", date: "10 / 01", day: "DAY 01", title: "天坛与东城初见", area: "东城区", places: ["天坛公园"], weather: "☀️ 10–22°C", tags: ["建议早起", "步行约 6 km", "预约以官方公告为准"], route: ["京东总部附近", "天坛公园", "天坛附近午餐", "返回住宿地"], timeline: [{ time: "07:00", title: "从京东总部 1 号园区附近出发", desc: "地铁 / 打车，国庆期间预留 70–90 分钟。" }, { time: "08:30", title: "天坛公园 · 祈年殿与圜丘坛", desc: "建议先游览祈年殿，再沿丹陛桥前往圜丘坛，约 3 小时。" }, { time: "12:00", title: "天坛附近午餐", desc: "北京菜、面食或东单方向简餐，避开景区正门高峰。" }, { time: "18:30", title: "回到住宿地", desc: "保留早晚休息时间，第一天不排过多景点。" }], food: "推荐：北京菜、炸酱面、卤煮。国庆期间可能排队。", backup: "雨天备用：东城区室内展览或咖啡馆。" },
  { id: "day-02", date: "10 / 02", day: "DAY 02", title: "皇家园林颐和园", area: "海淀区", places: ["颐和园"], weather: "🌤️ 9–21°C", tags: ["完整一天", "步行约 9 km", "建议穿舒适鞋"], route: ["京东总部附近", "颐和园东宫门", "昆明湖畔", "返回住宿地"], timeline: [{ time: "06:30", title: "提早出发前往颐和园", desc: "地铁换乘或打车，单程时间较长，建议准备水和早餐。" }, { time: "08:30", title: "颐和园 · 东宫门入园", desc: "长廊、排云殿、佛香阁、昆明湖依次游览。" }, { time: "12:30", title: "园内或北宫门附近午餐", desc: "建议提前准备轻食，景区内选择以实际营业为准。" }, { time: "17:00", title: "沿昆明湖收尾并返程", desc: "日落前离园，避开晚高峰。" }], food: "推荐：海淀西苑方向简餐、咖啡和烤鸭。", backup: "雨天备用：调整为室内博物馆，颐和园顺延。" },
  { id: "day-03", date: "10 / 03", day: "DAY 03", title: "故宫中轴线", area: "东城区", places: ["故宫博物院", "景山公园"], weather: "☀️ 10–23°C", tags: ["预约重点", "步行约 8 km", "适合早起"], route: ["京东总部附近", "故宫午门", "故宫神武门", "景山公园", "返回住宿地"], timeline: [{ time: "06:30", title: "出发前往故宫午门", desc: "务必提前确认预约与证件要求，安检时间较长。" }, { time: "08:30", title: "故宫博物院 · 中轴线", desc: "午门—太和殿—中和殿—乾清宫—御花园，按开放路线游览。" }, { time: "13:00", title: "故宫周边午餐", desc: "建议错峰用餐，预留体力给下午的景山。" }, { time: "15:00", title: "景山公园 · 万春亭", desc: "登高俯瞰故宫全景，停留约 1–1.5 小时。" }], food: "推荐：故宫北门外、景山西街方向的北京菜和小吃。", backup: "故宫预约未成功时，不要现场排队碰运气，可改为景山 + 北海。" },
  { id: "day-04", date: "10 / 04", day: "DAY 04", title: "胡同与湖岸", area: "西城区 / 东城区", places: ["什刹海", "北海公园"], weather: "🌤️ 11–23°C", tags: ["慢游日", "步行约 7 km", "可晚一点出发"], route: ["京东总部附近", "什刹海", "烟袋斜街", "北海公园", "返回住宿地"], timeline: [{ time: "08:00", title: "出发前往什刹海", desc: "地铁到什刹海或鼓楼一带，步行感受胡同街区。" }, { time: "09:30", title: "什刹海 · 后海水岸", desc: "沿银锭桥、烟袋斜街慢走，适合拍照和早餐。" }, { time: "13:00", title: "什刹海周边午餐", desc: "铜锅涮肉、北京小吃、咖啡均可作为选择。" }, { time: "14:30", title: "北海公园 · 白塔与湖畔", desc: "从北门或东门方向进入，按当天开放入口调整。" }], food: "推荐：什刹海铜锅涮肉、老北京小吃、后海咖啡馆。", backup: "雨天备用：恭王府或室内胡同文化展览。" },
  { id: "day-05", date: "10 / 05", day: "DAY 05", title: "国家记忆", area: "东城区", places: ["中国国家博物馆"], weather: "☁️ 10–21°C", tags: ["预约重点", "室内为主", "步行约 4 km"], route: ["京东总部附近", "国家博物馆", "天安门片区", "返回住宿地"], timeline: [{ time: "07:00", title: "出发前往国家博物馆", desc: "提前确认预约、证件与安检要求，建议预留排队时间。" }, { time: "09:00", title: "中国国家博物馆", desc: "建议提前规划重点展厅，完整参观约 3–5 小时。" }, { time: "13:30", title: "博物馆周边午餐", desc: "选择东单、前门方向简餐，避免临时走太远。" }, { time: "16:30", title: "天安门片区散步后返程", desc: "根据体力安排，不额外强行增加景点。" }], food: "推荐：前门小吃、东单餐厅或简餐。", backup: "预约未成功时，可改为城市街区散步，不建议临时进入管控区域。" },
  { id: "day-06", date: "10 / 06", day: "DAY 06", title: "圆明园秋色", area: "海淀区", places: ["圆明园"], weather: "🌤️ 9–20°C", tags: ["面积较大", "步行约 8 km", "适合拍照"], route: ["京东总部附近", "圆明园南门", "西洋楼遗址", "返回住宿地"], timeline: [{ time: "07:00", title: "出发前往圆明园", desc: "地铁换乘或打车，建议从南门进入。" }, { time: "08:30", title: "圆明园 · 西洋楼遗址", desc: "遗址区与湖区分段游览，注意园区面积和步行距离。" }, { time: "12:30", title: "圆明园周边午餐", desc: "清华园或五道口方向餐饮选择较多。" }, { time: "16:30", title: "秋色收尾并返回", desc: "保留一天结束前的休息时间。" }], food: "推荐：五道口面馆、简餐、咖啡和地方菜。", backup: "雨天备用：清华艺术博物馆或海淀室内场馆。" },
  { id: "day-07", date: "10 / 07", day: "DAY 07", title: "雍和宫与返程缓冲", area: "东城区", places: ["雍和宫"], weather: "☀️ 9–20°C", tags: ["轻量行程", "步行约 4 km", "预留返程时间"], route: ["京东总部附近", "雍和宫", "国子监街区", "返程 / 住宿地"], timeline: [{ time: "07:30", title: "出发前往雍和宫", desc: "根据返程时间灵活调整，优先确认开放与预约要求。" }, { time: "09:00", title: "雍和宫", desc: "中轴线慢游，注意文明参观与现场秩序。" }, { time: "11:30", title: "国子监与五道营胡同", desc: "作为轻量补充，适合午餐和买伴手礼。" }, { time: "15:00", title: "返程缓冲", desc: "不再安排远距离景点，为退房或返程留出余量。" }], food: "推荐：五道营胡同咖啡、面馆和小型餐馆。", backup: "如需提前返程，雍和宫可作为唯一保留景点。" }
];

const attractions = [
  ["01", "天坛公园", "城市公园", "东城区", "祈年殿、丹陛桥、圜丘坛组成一条清晰的皇家祭天轴线。", "2.5–3.5 小时", "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?auto=format&fit=crop&w=900&q=80"],
  ["02", "颐和园", "皇家园林", "海淀区", "长廊、昆明湖与佛香阁，把一天时间交给园林的层次和风。", "4–6 小时", "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=900&q=80"],
  ["03", "故宫博物院", "博物馆 / 古迹", "东城区", "沿中轴线进入紫禁城，国庆期间预约、安检和体力都要提前规划。", "4–5 小时", "https://images.unsplash.com/photo-1580250497591-112f2f40a3f4?auto=format&fit=crop&w=900&q=80"],
  ["04", "什刹海", "湖泊 / 胡同", "西城区", "后海、银锭桥与烟袋斜街，适合慢走、吃小吃和看北京的生活感。", "2–3 小时", "https://images.unsplash.com/photo-1537531383496-f4749b803f7f?auto=format&fit=crop&w=900&q=80"],
  ["05", "景山公园", "城市公园", "东城区", "万春亭是俯瞰故宫中轴线的经典视角，适合作为故宫后的收尾。", "1–1.5 小时", "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80"],
  ["06", "北海公园", "城市公园", "西城区", "白塔、湖面与古树构成安静的皇家园林片段，适合下午慢游。", "2–3 小时", "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=900&q=80"],
  ["07", "中国国家博物馆", "博物馆", "东城区", "适合把半天时间交给展厅。预约、证件与安检是国庆重点。", "3–5 小时", "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=900&q=80"],
  ["08", "圆明园", "遗址公园", "海淀区", "遗址、湖区与秋色交织，园区很大，建议预留完整半天。", "3–5 小时", "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80"],
  ["09", "雍和宫", "宗教古迹", "东城区", "以中轴线为主线参观，搭配国子监和五道营街区更从容。", "1.5–2 小时", "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80"]
].map(([number, name, category, area, description, duration, image]) => ({ number, name, category, area, description, duration, image }));

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

function renderAttractions() { attractionGrid.innerHTML = attractions.map(item => `<article class="attraction-card"><div class="attraction-photo" style="background-image:url('${item.image}')"><span class="attraction-number">${item.number}</span></div><div class="attraction-content"><h3>${item.name}</h3><div class="attraction-meta"><span>${item.category}</span><span>·</span><span>${item.area}</span></div><p class="attraction-description">${item.description}</p><div class="fact-row"><span class="fact">游览 ${item.duration}</span><span class="fact">预约以官方为准</span></div><div class="attraction-footer"><a target="_blank" rel="noreferrer" href="https://ditu.amap.com/search?query=${encodeURIComponent(item.name)}">查看地图 ↗</a><span>官方信息待确认</span></div></div></article>`).join(""); }
function updateProgress() { const total = attractions.length; progressText.textContent = `${completed.size} / ${total} 个景点已完成`; }
document.querySelector("#expandAll").addEventListener("click", () => document.querySelectorAll(".day-card").forEach(card => { card.classList.add("open"); card.querySelector(".day-summary").setAttribute("aria-expanded", "true"); }));
document.querySelector("#collapseAll").addEventListener("click", () => document.querySelectorAll(".day-card").forEach(card => { card.classList.remove("open"); card.querySelector(".day-summary").setAttribute("aria-expanded", "false"); }));
document.querySelector("#themeToggle").addEventListener("click", () => { document.body.classList.toggle("dark"); localStorage.setItem("bj-trip-theme", document.body.classList.contains("dark") ? "dark" : "light"); });
if (localStorage.getItem("bj-trip-theme") === "dark") document.body.classList.add("dark");
renderItinerary(); renderAttractions(); updateProgress();
