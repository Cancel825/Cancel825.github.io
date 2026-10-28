// ===== EDIT YOUR CONTENT HERE =====
const projects = [
  { title: "Project One", year: "2026", desc: "One sentence on what it is and what you did.", url: "https://github.com/your-username/project-one" },
  { title: "Project Two", year: "2025", desc: "One sentence on what it is and what you did.", url: "https://github.com/your-username/project-two" },
  { title: "Project Three", year: "2024", desc: "One sentence on what it is and what you did.", url: "https://github.com/your-username/project-three" }
];
const skills = ["HTML", "CSS", "JavaScript", "Lua", "Git"];
// ==================================

const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text) n.textContent = text;
  return n;
};

const list = document.getElementById("projects");
projects.forEach(p => {
  const li = el("li");
  const a = el("a");
  a.href = p.url;
  a.append(el("span", "title", p.title), el("span", "year", p.year), el("span", "desc", p.desc));
  li.append(a);
  list.append(li);
});

const skillList = document.getElementById("skills");
skills.forEach(s => skillList.append(el("li", "", s)));

document.getElementById("year").textContent = new Date().getFullYear();
