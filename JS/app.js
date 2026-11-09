const photos = [
  {
    title: "Cantarella",
    game: "Wuthering Waves",
    framing: "Plano medio · exterior",
    category: "exterior",
    categoryLabel: "Exterior",
    image: "./images/cosplay-lila-exterior.jpg",
    alt: "Cosplayer con peluca lila y vestuario blanco y azul, retratada frente a vegetación desenfocada",
    reference: 1,
    description:
      "Cosplay de Cantarella, personaje de Wuthering Waves. El fondo de vegetación queda desenfocado y ayuda a centrar la atención en la peluca lila y el vestuario blanco y azul. Las manos enmarcan la parte inferior del retrato y hacen visible el diseño de las mangas.",
  },
  {
    title: "Nefer",
    game: "Genshin Impact",
    framing: "Plano medio · interior",
    category: "interior",
    categoryLabel: "Interior",
    image: "./images/cosplay-verde-interior.jpg",
    alt: "Cosplayer con peluca negra y vestuario oscuro con detalles verdes y dorados en un espacio interior",
    reference: 2,
    description:
      "Cosplay de Nefer, personaje de Genshin Impact. Los detalles verdes y dorados contrastan con el vestuario oscuro. Los puestos y colores que aparecen detrás aportan contexto de un espacio interior con elementos de exhibición.",
  },
  {
    title: "Mavuika",
    game: "Genshin Impact",
    framing: "Plano medio · exterior",
    category: "exterior",
    categoryLabel: "Exterior",
    image: "./images/cosplay-rojo-exterior.jpg",
    alt: "Cosplayer de peluca roja posando frente a rocas junto al agua",
    reference: 3,
    description:
      "Cosplay de Mavuika, personaje de Genshin Impact. El retrato se realizó al aire libre, junto a rocas y agua. El color rojo del cabello y el vestuario destaca frente a los tonos neutros del fondo.",
  },
  {
    title: "Zani",
    game: "Wuthering Waves",
    framing: "Primer plano · fondo neutro",
    category: "retrato",
    categoryLabel: "Retrato",
    image: "./images/cosplay-blanco-retrato.jpg",
    alt: "Cosplayer con peluca blanca, accesorios negros y dorados frente a una pared de concreto",
    reference: 4,
    description:
      "Cosplay de Zani, personaje de Wuthering Waves. El fondo de concreto tiene pocos elementos y mantiene la atención en el maquillaje, la peluca blanca y los accesorios negros. La mano cerca del rostro aporta un gesto al encuadre.",
  },
  {
    title: "Evelyn",
    game: "Zenless Zone Zero",
    framing: "Primer plano · espacio interior",
    category: "interior",
    categoryLabel: "Interior",
    image: "./images/cosplay-rubio-interior.jpg",
    alt: "Cosplayer de peluca rubia en un interior con objetos de exhibición al fondo",
    reference: 5,
    description:
      "Cosplay de Evelyn, personaje de Zenless Zone Zero. El encuadre cercano muestra el maquillaje y los detalles negros del vestuario. Al fondo se alcanzan a ver objetos de exhibición, que sitúan el retrato en un espacio interior.",
  },
];

const galleryGrid = document.getElementById("galleryGrid");
const galleryCount = document.getElementById("galleryCount");
const gallerySearch = document.getElementById("gallerySearch");
const filterButtons = document.querySelectorAll(".filter-button");
const photoDialog = document.getElementById("photoDialog");

let activeFilter = "todos";

function createPhotoCard(photo, index) {
  const article = document.createElement("article");
  article.className = "photo-card";
  article.dataset.category = photo.category;
  article.dataset.search =
    `${photo.title} ${photo.game} ${photo.framing} ${photo.description}`.toLocaleLowerCase("es");

  const button = document.createElement("button");
  button.className = "photo-card__open";
  button.type = "button";
  button.dataset.photoIndex = String(index);
  button.setAttribute("aria-label", `Ver detalles: ${photo.title}, ${photo.framing}`);

  const image = document.createElement("img");
  image.src = photo.image;
  image.alt = photo.alt;
  image.loading = "lazy";
  image.width = 900;
  image.height = 620;

  const copy = document.createElement("span");
  copy.className = "photo-card__copy";

  const category = document.createElement("span");
  category.className = "photo-card__category";
  category.textContent = photo.categoryLabel;

  const title = document.createElement("span");
  title.className = "photo-card__title";
  title.textContent = photo.title;

  const framing = document.createElement("span");
  framing.className = "photo-card__subtitle";
  framing.textContent = `${photo.game} · ${photo.framing}`;

  const reference = document.createElement("span");
  reference.className = "photo-card__reference";
  reference.textContent = `[${photo.reference}]`;
  reference.setAttribute("aria-label", `Referencia ${photo.reference}`);

  copy.append(category, title, framing);
  button.append(reference);
  button.prepend(image, copy);
  article.append(button);

  return article;
}

function renderGallery() {
  const cards = photos.map(createPhotoCard);
  galleryGrid.replaceChildren(...cards);
  updateGallery();
}

function updateGallery() {
  const query = gallerySearch.value.trim().toLocaleLowerCase("es");
  let visibleCount = 0;

  galleryGrid.querySelectorAll(".photo-card").forEach((card) => {
    const matchesCategory =
      activeFilter === "todos" || card.dataset.category === activeFilter;
    const matchesSearch = card.dataset.search.includes(query);
    card.hidden = !matchesCategory || !matchesSearch;
    visibleCount += Number(!card.hidden);
  });

  galleryCount.textContent =
    visibleCount === 1
      ? "1 fotografía"
      : `${visibleCount} fotografías`;

  let emptyMessage = galleryGrid.querySelector(".gallery-empty");
  if (visibleCount === 0 && !emptyMessage) {
    emptyMessage = document.createElement("p");
    emptyMessage.className = "gallery-empty notice";
    emptyMessage.textContent = "No encontramos fotografías con esa búsqueda.";
    galleryGrid.append(emptyMessage);
  } else if (visibleCount > 0) {
    emptyMessage?.remove();
  }
}

function showPhoto(photo) {
  document.getElementById("dialogImage").src = photo.image;
  document.getElementById("dialogImage").alt = photo.alt;
  document.getElementById("dialogCategory").textContent =
    `${photo.game} · ${photo.categoryLabel} · ${photo.framing}`;
  document.getElementById("dialogTitle").textContent = photo.title;
  document.getElementById("dialogDescription").textContent = photo.description;
  document.getElementById("dialogReference").href = `#ref-${photo.reference}`;
  document.getElementById("dialogReference").setAttribute(
    "aria-label",
    `Consultar referencia ${photo.reference} de ${photo.title}`,
  );
  photoDialog.showModal();
}

renderGallery();

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });
    updateGallery();
  });
});

gallerySearch.addEventListener("input", updateGallery);

galleryGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-photo-index]");
  if (!button) return;

  const photo = photos[Number(button.dataset.photoIndex)];
  if (photo) showPhoto(photo);
});

document.getElementById("dialogClose").addEventListener("click", () => {
  photoDialog.close();
});

document.getElementById("dialogReference").addEventListener("click", () => {
  photoDialog.close();
});

photoDialog.addEventListener("click", (event) => {
  if (event.target === photoDialog) photoDialog.close();
});
