const exp = [
  {
    id: 1,
    company: "Accenture Australia",
    time: "Nov 2021 - Now",
    position: "Frontend Developer",
  },

  {
    id: 2,
    company: "code.id",
    time: "Nov 2021 - Now",
    position: "Frontend Developer",
  },
];

const skills = [
  { id: 1, name: "TypeScript" },
  { id: 2, name: "React" },
  { id: 3, name: "React Hooks" },
  { id: 4, name: "Redux" },
  { id: 5, name: "Tailwinds" },
  { id: 6, name: "Material UI" },
];

const expContainer = document.getElementById("experience");
const skillsContainer = document.getElementById("skills");

for (const items of exp) {
  const textCompany = document.createElement("h1");
  textCompany.innerHTML = items.company;
  const textTime = document.createElement("h2");
  textTime.innerHTML = items.time;
  const textPosition = document.createElement("p");
  textPosition.innerHTML = items.position;
  const listContainer = document.createElement("li");
  listContainer.append(textCompany, textTime, textPosition);
  //   textContainer.classList.add("container");
  //   textContainer.append(textName);
  expContainer.append(listContainer);
}

for (const items of skills) {
  const textName = document.createElement("li");
  textName.innerHTML = items.name;
  //   textContainer.classList.add("container");
  //   textContainer.append(textName);
  skillsContainer.append(textName);
}
