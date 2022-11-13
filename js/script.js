const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

//question 1
const cat = {
  complain: function meow(catMeow) {
    return "meow!";
  },
};
console.log(cat.catSound);

//question 2
const heading = document.querySelector("h3");

heading.textContent = "Updated heading";

//question 3

heading.style.fontSize = "2em";

//question 4

heading.classList.add("subheading");

//question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  const colorP = paragraphs[i];
  colorP.style.color = "red";
}

//question 6

const resultContainer = document.querySelector(".results");

resultContainer.innerHTML += `<p>New paragraph</p>`;

//question 7

function lists(list) {
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    console.log(list);
  }
}

lists(cats);

//question 8
const catContainer = document.querySelector(".cat-container");
console.log(catContainer);

function createCats(cats) {
  for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
    let html = "";

    let ageUnknown = "Age unknown";

    if (!cats[i].age) {
      ageUnknown = cats[i].age;
    }

    html =
      html +
      `<div> 
          <h5>${cats[i].name}</h5>
          <p> ${cats[i].age} </p>
      </div>`;
    return html;
  }
}

const newHtml = createCats(cats);

catContainer.innerHTML = newHtml;
