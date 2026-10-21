/**
 * This code is just to read the json file. Don't worry about it. We will see it in detail in next sectioins
 * Write your own code in the procesarJSON function
 */

/**
 * Este código es solo para leeer el archivo json. No os preocupéis por él, lo veremos y lo analizaremos en próximos capítulos
 * Escribir vuestro código en la función procesarJSON
 */

fetch("./data/heroes.json")
  .then((response) => {
    return response.json();
  })
  .then((jsondata) => {
    console.log(jsondata);
    renderCards(jsondata);
  })
  .catch((e) => {
    console.log(e);
  });

// the main element, where we are going to insert the cards
const main = document.querySelector("main");

// we remove the example accordion, because we create our own
main.innerHTML = "";

// the row that will contain all the cards
const heroesRow = document.createElement("div");
heroesRow.className = "row g-3 p-3";
main.append(heroesRow);

function renderCards(jsondata) {
  for (let char of jsondata.data.results) {
    const col = document.createElement("div");
    col.className = "col-12 col-md-6 col-lg-4";

    const card = document.createElement("div");
    card.className = "card h-100";

    const img = document.createElement("img");
    img.className = "card-img-top";
    img.src = char.thumbnail.path + "." + char.thumbnail.extension;
    img.alt = char.name;

    const body = document.createElement("div");
    body.className = "card-body";

    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = char.name;

    const description = document.createElement("p");
    description.className = "card-text";
    description.textContent = char.description;

    body.append(title);
    body.append(description);
    // accordion with comics, series, stories and events
    const accordion = document.createElement("div");
    accordion.className = "accordion accordion-flush";
    accordion.id = "accordion" + char.id;
    createItem(accordion, char.id, "comics", char.comics.items);
    createItem(accordion, char.id, "series", char.series.items);
    createItem(accordion, char.id, "stories", char.stories.items);
    createItem(accordion, char.id, "events", char.events.items);

    card.append(img);
    card.append(body);
    card.append(accordion);
    col.append(card);
    heroesRow.append(col);
  }
}

// creates one item of the accordion, the ids use the id of the hero so they are unique
function createItem(accordion, heroId, name, items) {
  const panelId = "collapse" + name + heroId;

  const item = document.createElement("div");
  item.className = "accordion-item";

  const header = document.createElement("h2");
  header.className = "accordion-header";

  const button = document.createElement("button");
  button.className = "accordion-button collapsed";
  button.type = "button";
  button.setAttribute("data-bs-toggle", "collapse");
  button.setAttribute("data-bs-target", "#" + panelId);
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-controls", panelId);
  button.textContent = name;

  const panel = document.createElement("div");
  panel.id = panelId;
  panel.className = "accordion-collapse collapse";

  const panelBody = document.createElement("div");
  panelBody.className = "accordion-body";

  const ul = document.createElement("ul");
  for (let element of items) {
    const li = document.createElement("li");
    li.textContent = element.name;
    ul.append(li);
  }

  panelBody.append(ul);
  panel.append(panelBody);
  header.append(button);
  item.append(header);
  item.append(panel);
  accordion.append(item);
}
