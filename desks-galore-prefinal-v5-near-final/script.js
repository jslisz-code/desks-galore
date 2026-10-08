/* =========================================================
   DESKS GALORE — V6 FINAL-CANDIDATE
   Live Shopify catalog + room merchandising + cart + modal
   ========================================================= */

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const STORE = "https://www.desksgalore.com";
const PHONE = "+12102230004";

const FEATURED_COLLECTIONS = [
  {
    name: "Ash Gray",
    label: "Traditional executive",
    image: "https://www.desksgalore.com/cdn/shop/products/ashgray_530x%402x.webp?v=1661878828",
    description: "A complete executive-office family with desks, storage, bookcases, hutches and files.",
    tags: ["Executive Desk", "Credenza", "Bookcases", "Files"]
  },
  {
    name: "Coffee",
    label: "Warm executive",
    image: "https://www.desksgalore.com/cdn/shop/files/I3184-300T_1_530x%402x.jpg?v=1744231284",
    description: "A rich Coffee-finish office family with executive desks and coordinating storage.",
    tags: ["Executive", "Secretary", "Storage", "Files"]
  },
  {
    name: "Robbinsdale Antique White",
    label: "Modern farmhouse",
    image: "https://www.desksgalore.com/cdn/shop/files/H742-34_530x%402x.webp?v=1766876793",
    description: "A lighter home-office family with desks and matching storage in Antique White.",
    tags: ["Home Office", "Writing Desk", "L-Shape", "Bookshelf"]
  },
  {
    name: "Grand Hacienda",
    label: "Rustic statement",
    image: "https://www.desksgalore.com/cdn/shop/files/image_7bce5e52-dda3-472f-92a1-647b066b8e05_1024x1024%402x.jpg?v=1762115288",
    description: "A rustic furniture family that bridges office, dining and accent pieces.",
    tags: ["Rustic", "Office", "Dining", "Storage"]
  }
];

const FALLBACK_PRODUCTS = [
  {
    id: "ash-executive",
    name: '68" Ash Gray Executive Desk',
    model: "7514",
    collection: "Ash Gray",
    room: "Office",
    category: "Executive Desk",
    condition: "New",
    finish: "Ash Gray",
    style: "Traditional",
    price: 1499.95,
    compareAt: 1799.95,
    available: true,
    image: "https://www.desksgalore.com/cdn/shop/products/ashgray_530x%402x.webp?v=1661878828",
    url: `${STORE}/products/ash-grey-68in-executive-desk`,
    description: "A substantial Ash Gray executive desk that anchors a coordinated office."
  },
  {
    id: "ash-credenza",
    name: '68" Ash Gray Credenza Desk',
    model: "7515",
    collection: "Ash Gray",
    room: "Storage",
    category: "Credenza / Cabinet",
    condition: "New",
    finish: "Ash Gray",
    style: "Traditional",
    price: 1399.95,
    compareAt: null,
    available: true,
    image: "https://www.desksgalore.com/cdn/shop/products/i224-317_530x%402x.jpg?v=1725049254",
    url: `${STORE}/products/ash-grey-credenza-desk-hutch-not-included`,
    description: "A matching Ash Gray credenza that adds coordinated storage and work surface."
  },
  {
    id: "ash-bookcase",
    name: '32" × 78" Ash Gray Open Bookcase',
    model: "7519",
    collection: "Ash Gray",
    room: "Storage",
    category: "Bookcase",
    condition: "New",
    finish: "Ash Gray",
    style: "Traditional",
    price: 799.95,
    compareAt: null,
    available: true,
    image: "https://www.desksgalore.com/cdn/shop/products/I224HOGRP3_7_530x%402x.jpg?v=1636058846",
    url: `${STORE}/products/ash-gray-open-bookcase`,
    description: "Vertical storage designed for the Ash Gray office family."
  },
  {
    id: "coffee-executive",
    name: '72" Coffee Executive Desk',
    model: "8663",
    collection: "Coffee",
    room: "Office",
    category: "Executive Desk",
    condition: "New",
    finish: "Coffee",
    style: "Traditional",
    price: 1899.95,
    compareAt: null,
    available: true,
    image: "https://www.desksgalore.com/cdn/shop/files/I3184-300T_1_530x%402x.jpg?v=1744231284",
    url: `${STORE}/products/72-jackson-executive-desk`,
    description: "A rich Coffee-finish executive desk with coordinating storage pieces."
  },
  {
    id: "coffee-bookcase",
    name: '34" × 77" Coffee Door Bookcase',
    model: "8665",
    collection: "Coffee",
    room: "Storage",
    category: "Bookcase",
    condition: "New",
    finish: "Coffee",
    style: "Traditional",
    price: 949.95,
    compareAt: null,
    available: true,
    image: "https://www.desksgalore.com/cdn/shop/files/I3184-332_1_530x%402x.jpg?v=1744232846",
    url: `${STORE}/products/34x-77-jackson-door-bookcase`,
    description: "A matching Coffee bookcase with adjustable shelves and cord access."
  },
  {
    id: "coffee-file",
    name: '45" Coffee Workstation Combo File',
    model: "8667",
    collection: "Coffee",
    room: "Storage",
    category: "File Cabinet",
    condition: "New",
    finish: "Coffee",
    style: "Traditional",
    price: 949.95,
    compareAt: null,
    available: true,
    image: "https://www.desksgalore.com/cdn/shop/files/I3184-378_1_530x%402x.jpg?v=1744235742",
    url: `${STORE}/products/jackson-workstation-combo-file`,
    description: "A coordinating Coffee file and workstation piece."
  },
  {
    id: "robbinsdale-desk",
    name: '60" Robbinsdale Antique White Writing Desk',
    model: "8848",
    collection: "Robbinsdale Antique White",
    room: "Office",
    category: "Writing / Computer Desk",
    condition: "New",
    finish: "Antique White",
    style: "Farmhouse",
    price: 479.95,
    compareAt: null,
    available: true,
    image: "https://www.desksgalore.com/cdn/shop/files/H742-34_530x%402x.webp?v=1766876793",
    url: `${STORE}/collections/robbinsdale-antique-white/products/8848-60-robbinsdale-antique-white-writing-desk-w-usb-port-419-95`,
    description: "A bright modern-farmhouse writing desk for a lighter home office."
  },
  {
    id: "used-adjustable",
    name: "Used Power Adjustable Desk",
    model: "Used Inventory",
    collection: "Used",
    room: "Office",
    category: "Adjustable Desk",
    condition: "Used",
    finish: "Neutral / White",
    style: "Contemporary",
    price: 199.98,
    compareAt: 399.95,
    available: true,
    image: "https://www.desksgalore.com/cdn/shop/files/image_5777ec81-7273-40e7-bc6b-0a6d04b1f5f8_2048x.jpg?v=1774972171",
    url: `${STORE}/collections/used-1`,
    description: "A one-of-a-kind used adjustable desk organized by function and condition."
  }
];

const KNOWN_COLLECTIONS = [
  "Robbinsdale Antique White", "Whitewash Hickory", "Country Two Tone",
  "Laminate American Espresso", "Laminate American Mahogany", "Laminate Autumn Walnut",
  "Laminate Artisan Grey", "Laminate American Dark Cherry", "Rustic Laredo",
  "Grand Hacienda", "Weathered Gray", "Brown Cherry", "French Oak", "Sloane Gray",
  "Gray Wash", "Aged Ivory", "Dark Gray", "Black 2 Tone", "Rustic Brown",
  "Rustic White", "Gramercy", "Wimberly", "Cabana", "Biscotti", "Regency",
  "Peppercorn", "Norcross", "Tuscan", "Coffee", "Ash Gray", "Pewter"
];

const COLLECTION_PRIORITY = {
  "Ash Gray": 300,
  "Coffee": 280,
  "Robbinsdale Antique White": 270,
  "Grand Hacienda": 260,
  "Dark Gray": 245,
  "Brown Cherry": 235,
  "Sloane Gray": 225,
  "Wimberly": 215,
  "Cabana": 205,
  "Country Two Tone": 190,
  "Pewter": 175,
  "Tuscan": 165,
  "Regency": 155
};

const CONFERENCE_FINISHES = [
  "Autumn Walnut",
  "American Mahogany",
  "American Dark Cherry",
  "American Espresso",
  "Artisan Grey"
];

let PRODUCTS = [];

const state = {
  route: "home",
  quickFilter: "all",
  room: "all",
  collection: "all",
  category: "all",
  finish: "all",
  condition: "all",
  conferenceShape: "all",
  conferenceSize: "all",
  conferenceFinish: "all",
  search: "",
  sort: "featured",
  catalogLoaded: false,
  catalogSource: "loading",
  catalogLimit: 48,
  lastCatalogSignature: "",
  currentProduct: null,
  cart: JSON.parse(localStorage.getItem("dg-v6-cart") || "[]")
};

function money(value) {
  const number = Number(value);

  if (!Number.isFinite(number)) {
    return "Call for pricing";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(number);
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function stripHtml(html = "") {
  const node = document.createElement("div");
  node.innerHTML = html;

  return (node.textContent || "")
    .replace(/\s+/g, " ")
    .trim();
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function detectCondition(title, tags = []) {
  const text = `${title} ${tags.join(" ")}`;

  return /(^|\s)R\d|\bused\b/i.test(text)
    ? "Used"
    : "New";
}

function detectCollection(title, tags = []) {
  const text = `${title} ${tags.join(" ")}`;

  const hit = [...KNOWN_COLLECTIONS]
    .sort((a, b) => b.length - a.length)
    .find(name =>
      text.toLowerCase().includes(name.toLowerCase())
    );

  if (hit) {
    return hit;
  }

  if (/robbinsdale/i.test(text)) {
    return "Robbinsdale Antique White";
  }

  if (/hacienda/i.test(text)) {
    return "Grand Hacienda";
  }

  if (/artisan grey|artisan gray|\bAGL\b/i.test(text)) {
    return "Laminate Artisan Grey";
  }

  if (/american mahogany|\bAML\b/i.test(text)) {
    return "Laminate American Mahogany";
  }

  if (/american espresso|\bAEL\b/i.test(text)) {
    return "Laminate American Espresso";
  }

  if (/autumn walnut|\bAWL\b/i.test(text)) {
    return "Laminate Autumn Walnut";
  }

  if (/american dark cherry|\bADC\b/i.test(text)) {
    return "Laminate American Dark Cherry";
  }

  return "Unassigned / Mix & Match";
}

function detectCategory(title = "") {
  const t = title.toLowerCase();

  if (/bookcase|bookshelf/.test(t)) {
    return "Bookcase";
  }

  if (/hutch/.test(t)) {
    return "Hutch";
  }

  if (/file cabinet|lateral file|vertical file|combo file|drawer file|mobile file|\bfile\b/.test(t)) {
    return "File Cabinet";
  }

  if (/credenza|storage cabinet|display cabinet|armoire/.test(t)) {
    return "Credenza / Cabinet";
  }

  if (/sofa|loveseat|love seat|sectional|recliner/.test(t)) {
    return "Sofa / Recliner";
  }

  if (/chair|barstool|bar stool|stool/.test(t)) {
    return "Chair";
  }

  if (/lamp|mirror|wall art|picture|decor|clock|rug|vase|sculpture/.test(t)) {
    return "Decor";
  }

  if (/conference/.test(t) && /table/.test(t)) {
    return "Conference Table";
  }

  if (/dining/.test(t) && /table|set/.test(t)) {
    return "Dining Table / Set";
  }

  if (/coffee table|end table|console table|occasional table|accent table|sofa table/.test(t)) {
    return "Living Table";
  }

  if (/reception/.test(t) && /desk/.test(t)) {
    return "Reception Desk";
  }

  if (/l[- ]?shape|l shaped/.test(t) && /desk/.test(t)) {
    return "L-Shaped Desk";
  }

  if (/adjustable|sit[- ]?stand|lift/.test(t) && /desk/.test(t)) {
    return "Adjustable Desk";
  }

  if (/executive/.test(t) && /desk/.test(t)) {
    return "Executive Desk";
  }

  if (/writing desk|secretary desk|computer desk/.test(t)) {
    return "Writing / Computer Desk";
  }

  if (/desk shell/.test(t)) {
    return "Desk Component";
  }

  if (/\bdesk\b/.test(t)) {
    return "Desk";
  }

  if (/conference/.test(t)) {
    return "Conference";
  }

  if (/dining/.test(t)) {
    return "Dining";
  }

  if (/\btable\b/.test(t)) {
    return "Table";
  }

  return "Other";
}

function detectRoom(title = "", category = "") {
  const t = title.toLowerCase();

  if (/dining|barstool|bar stool/.test(t)) {
    return "Dining";
  }

  if (/sofa|loveseat|love seat|sectional|recliner|coffee table|end table|console table|occasional/.test(t)) {
    return "Living";
  }

  if (/conference/.test(t)) {
    return "Conference";
  }

  if (category === "Decor") {
    return "Decor";
  }

  if (
    ["Bookcase", "Hutch", "File Cabinet", "Credenza / Cabinet"]
      .includes(category)
  ) {
    return "Storage";
  }

  if (category === "Chair") {
    if (
      /guest|office|desk|executive|task|drafting|reception|conference/.test(t)
    ) {
      return "Office";
    }

    return "Seating";
  }

  if (
    /desk|reception|workstation/.test(t) ||
    category.includes("Desk")
  ) {
    return "Office";
  }

  return "Other";
}

function detectStyle(title = "", collection = "") {
  const text = `${title} ${collection}`.toLowerCase();

  if (/mid century/.test(text)) {
    return "Mid-Century";
  }

  if (/rustic|hacienda|laredo|weathered/.test(text)) {
    return "Rustic";
  }

  if (/farmhouse|robbinsdale|country two tone/.test(text)) {
    return "Farmhouse";
  }

  if (/contemporary|modern/.test(text)) {
    return "Contemporary";
  }

  if (/industrial|metal/.test(text)) {
    return "Industrial";
  }

  if (/traditional|wing back|wingback|oxblood|tuscan|regency/.test(text)) {
    return "Traditional";
  }

  return "Transitional";
}

function detectFinish(title = "", collection = "") {
  const text = `${title} ${collection}`;

  const rules = [
    ["Antique White", /antique white/i],
    ["Whitewash", /whitewash|white wash/i],
    ["Ash Gray", /ash gray|ash grey/i],
    ["Sloane Gray", /sloane gray/i],
    ["Weathered Gray", /weathered gray|weathered grey/i],
    ["Dark Gray", /dark gray|dark grey/i],
    ["Artisan Grey", /artisan grey|artisan gray/i],
    ["Pewter", /pewter/i],
    ["American Dark Cherry", /american dark cherry/i],
    ["Brown Cherry", /brown cherry/i],
    ["Cherry", /cherry/i],
    ["Mahogany", /mahogany/i],
    ["Coffee", /\bcoffee\b/i],
    ["Espresso", /espresso/i],
    ["Biscotti", /biscotti/i],
    ["Peppercorn", /peppercorn/i],
    ["Tuscan", /tuscan/i],
    ["French Oak", /french oak/i],
    ["Oak", /\boak\b/i],
    ["Walnut", /walnut/i],
    ["Ivory", /ivory/i],
    ["Rustic Brown", /rustic brown/i],
    ["Rustic White", /rustic white/i],
    ["White", /\bwhite\b/i],
    ["Black", /\bblack\b/i],
    ["Natural / Light Wood", /natural|light wood|blonde/i]
  ];

  const hit = rules.find(([, regex]) =>
    regex.test(text)
  );

  if (hit) {
    return hit[0];
  }

  if (
    collection &&
    collection !== "Unassigned / Mix & Match"
  ) {
    return collection;
  }

  return "Mixed / Other";
}

function extractDimensions(title = "") {
  const match = String(title).match(
    /(\d+(?:\.\d+)?)\s*(?:["”]|in)?\s*[x×]\s*(\d+(?:\.\d+)?)\s*(?:["”]|in)?(?:\s*[x×]\s*(\d+(?:\.\d+)?)\s*(?:["”]|in)?)?/i
  );

  if (!match) {
    return "";
  }

  return match[3]
    ? `${match[1]}" × ${match[2]}" × ${match[3]}"`
    : `${match[1]}" × ${match[2]}"`;
}

function requiresQuote(title = "", price = 0) {
  return (
    Number(price) <= 0 ||
    /call\s*(?:store|for)|custom\s*size|pricing/i.test(
      String(title)
    )
  );
}

function cleanProductName(
  title = "",
  category = "Furniture",
  condition = "New"
) {
  let name = String(
    title || "Untitled product"
  );

  name = name.replace(
    /^#?[A-Z]{0,4}\d+[A-Z0-9/-]*\s+/i,
    ""
  );

  name = name.replace(
    /^\d+(?:\.\d+)?\s*(?:'|’|ft)\s+/i,
    ""
  );

  name = name.replace(
    /\$[\d,]+(?:\.\d{2})?/g,
    ""
  );

  name = name.replace(
    /\(\s*out of stock\s*\)/ig,
    ""
  );

  name = name.replace(
    /\(\s*floor model\s*\)/ig,
    ""
  );

  name = name.replace(
    /[-–—]\s*1\s*only\b/ig,
    ""
  );

  if (condition === "Used") {
    name = name.replace(
      /\bused\b/ig,
      ""
    );
  }

  name = name
    .replace(/\bLam\b/ig, "Laminate")
    .replace(/\bw\/\s*/ig, "with ");

  name = name
    .replace(/\s{2,}/g, " ")
    .replace(/\s*[-–—]\s*$/g, "")
    .trim();

  return name || category;
}

function chooseBestImage(
  images = [],
  category = "",
  title = ""
) {
  if (!images.length) {
    return "";
  }

  const tableLike = /Table|Desk/.test(category);

  const scored = images
    .map((img, index) => {
      const src = img?.src || "";
      const width = Number(img?.width || 0);
      const height = Number(img?.height || 0);

      const ratio =
        width && height
          ? width / height
          : 1;

      const area =
        width * height;

      const text =
        `${src} ${img?.alt || ""}`.toLowerCase();

      let score =
        Math.min(area / 100000, 20) -
        index * 0.25;

      if (
        /swatch|sample|finish[_ -]?sample|color[_ -]?chip/.test(text)
      ) {
        score -= 80;
      }

      if (
        tableLike &&
        ratio >= 1.2
      ) {
        score += 20;
      }

      if (
        tableLike &&
        ratio < 0.8
      ) {
        score -= 15;
      }

      if (
        category === "Conference Table" &&
        index > 0
      ) {
        score += 10;
      }

      if (
        category === "Conference Table" &&
        /swatch|sample|finish/.test(text)
      ) {
        score -= 55;
      }

      return {
        src,
        score
      };
    })
    .sort((a, b) =>
      b.score - a.score
    );

  return (
    scored[0]?.src ||
    images[0]?.src ||
    ""
  );
}

function normalizeProduct(raw) {
  const title =
    raw.title ||
    "Untitled product";

  const tags =
    Array.isArray(raw.tags)
      ? raw.tags
      : String(raw.tags || "")
          .split(",")
          .map(tag => tag.trim())
          .filter(Boolean);

  const condition =
    detectCondition(title, tags);

  const category =
    detectCategory(title);

  const collection =
    detectCollection(title, tags);

  const room =
    detectRoom(title, category);

  const finish =
    detectFinish(title, collection);

  const style =
    detectStyle(title, collection);

  const variants =
    raw.variants || [];

  const prices =
    variants
      .map(variant =>
        Number(variant.price)
      )
      .filter(Number.isFinite);

  const compares =
    variants
      .map(variant =>
        Number(
          variant.compare_at_price
        )
      )
      .filter(Number.isFinite);

  const price =
    prices.length
      ? Math.min(...prices)
      : 0;

  const compareAt =
    compares.length
      ? Math.max(...compares)
      : null;

  const available =
    variants.some(
      variant =>
        variant.available !== false
    );

  const image =
    chooseBestImage(
      raw.images || [],
      category,
      title
    ) ||
    raw.image?.src ||
    "";

  return {
    id: String(raw.id),
    nameRaw: title,
    name: cleanProductName(
      title,
      category,
      condition
    ),

    model:
      (
        title.match(
          /^#?([A-Z]*\d+(?:\/\d+)?)/i
        ) || [, ""]
      )[1] || "",

    collection,
    room,
    category,
    condition,
    finish,
    style,
    price,

    compareAt:
      Number.isFinite(compareAt) &&
      compareAt > price
        ? compareAt
        : null,

    available,

    quoteRequired:
      requiresQuote(
        title,
        price
      ),

    dimensions:
      extractDimensions(title),

    image,

    url:
      raw.handle
        ? `${STORE}/products/${raw.handle}`
        : `${STORE}/collections/all`,

    description:
      stripHtml(
        raw.body_html || ""
      ) ||
      `${condition} ${category.toLowerCase()} from Desks Galore.`,

    tags
  };
}

async function fetchCatalogPage(page) {
  const response =
    await fetch(
      `${STORE}/products.json?limit=250&page=${page}`,
      {
        method: "GET",
        mode: "cors",
        credentials: "omit",
        headers: {
          Accept: "application/json"
        }
      }
    );

  if (!response.ok) {
    throw new Error(
      `Catalog request failed (${response.status})`
    );
  }

  const data =
    await response.json();

  return Array.isArray(data.products)
    ? data.products
    : [];
}

async function loadCatalog() {
  const collected = [];

  try {
    for (
      let page = 1;
      page <= 12;
      page += 1
    ) {
      const products =
        await fetchCatalogPage(page);

      if (!products.length) {
        break;
      }

      collected.push(...products);

      if (products.length < 250) {
        break;
      }
    }

    if (!collected.length) {
      throw new Error(
        "No products returned"
      );
    }

    const deduped = [
      ...new Map(
        collected.map(product => [
          String(product.id),
          product
        ])
      ).values()
    ];

    PRODUCTS =
      deduped.map(normalizeProduct);

    state.catalogSource = "live";

    $("#catalogSourceLabel").textContent =
      "loaded live from Desks Galore";

    $("#catalogSourceLabel").className =
      "catalog-source-live";

    $("#catalogNote").innerHTML =
      `<strong>Live catalog active:</strong> ${PRODUCTS.length.toLocaleString()} currently published products loaded from the public Desks Galore storefront and reorganized by our merchandising rules.`;
  } catch (error) {
    console.warn(
      "Live catalog unavailable, using curated fallback.",
      error
    );

    PRODUCTS =
      FALLBACK_PRODUCTS.map(
        product => ({
          ...product,
          nameRaw: product.name,

          quoteRequired:
            requiresQuote(
              product.name,
              product.price
            ),

          dimensions:
            extractDimensions(
              product.name
            )
        })
      );

    state.catalogSource =
      "fallback";

    $("#catalogSourceLabel").textContent =
      "shown from the curated fallback set";

    $("#catalogSourceLabel").className =
      "catalog-source-fallback";

    $("#catalogNote").innerHTML =
      `<strong>Live catalog could not be reached from this local browser session.</strong> The curated real-product fallback is displayed instead.`;
  } finally {
    state.catalogLoaded = true;

    $("#catalogLoading")
      .classList
      .add("hidden");

    $("#liveProductCount").textContent =
      PRODUCTS.length.toLocaleString();

    buildFilters();
    renderHomeMerchandising();
    renderCollectionsPage();
    renderCatalog();
    renderCart();
  }
}

function buildFilters() {
  const makeOptions =
    (values, label) =>
      `<option value="all">${label}</option>` +
      values
        .map(
          value =>
            `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`
        )
        .join("");

  $("#roomFilter").innerHTML =
    makeOptions(
      unique(
        PRODUCTS.map(
          product =>
            product.room
        )
      )
        .filter(
          value =>
            value !== "Other"
        )
        .sort(),

      "All rooms"
    );

  $("#collectionFilter").innerHTML =
    makeOptions(
      unique(
        PRODUCTS.map(
          product =>
            product.collection
        )
      )
        .filter(
          value =>
            value !==
            "Unassigned / Mix & Match"
        )
        .sort(),

      "All collections"
    );

  $("#categoryFilter").innerHTML =
    makeOptions(
      unique(
        PRODUCTS.map(
          product =>
            product.category
        )
      )
        .filter(
          value =>
            value !== "Other"
        )
        .sort(),

      "All furniture types"
    );

  $("#finishFilter").innerHTML =
    makeOptions(
      unique(
        PRODUCTS.map(
          product =>
            product.finish
        )
      )
        .filter(
          value =>
            value !==
            "Mixed / Other"
        )
        .sort(),

      "All finishes / families"
    );
}

function featuredScore(product) {
  let score =
    product.available === false
      ? -220
      : 95;

  score +=
    product.condition === "New"
      ? 28
      : -4;

  if (
    product.collection !==
    "Unassigned / Mix & Match"
  ) {
    score += 24;
  }

  const weights = {
    "Executive Desk": 34,
    "L-Shaped Desk": 32,
    "Desk": 28,
    "Writing / Computer Desk": 27,
    "Adjustable Desk": 25,
    "Conference Table": 30,
    "Dining Table / Set": 28,
    "Credenza / Cabinet": 24,
    "Bookcase": 22,
    "Hutch": 20,
    "File Cabinet": 19,
    "Chair": 16,
    "Sofa / Recliner": 22,
    "Living Table": 18,
    "Decor": 8
  };

  score +=
    weights[product.category] ||
    0;

  if (
    state.quickFilter ===
      "Office" &&
    /Desk/.test(
      product.category
    )
  ) {
    score += 28;
  }

  if (
    state.quickFilter ===
      "Conference" &&
    product.category ===
      "Conference Table"
  ) {
    score += 40;
  }

  if (
    state.quickFilter ===
      "Used" &&
    product.condition ===
      "Used"
  ) {
    score += 80;
  }

  return score;
}

function conferenceShape(product) {
  const text =
    `${product.nameRaw || product.name} ${product.name}`
      .toLowerCase();

  if (
    /boat shape|boat[- ]?shape/.test(text)
  ) {
    return "Boat Shape";
  }

  if (/racetrack/.test(text)) {
    return "Racetrack";
  }

  if (/rectang/.test(text)) {
    return "Rectangular";
  }

  if (/round/.test(text)) {
    return "Round";
  }

  return "Other";
}

function conferenceFeet(product) {
  const text =
    product.nameRaw ||
    product.name;

  const foot =
    text.match(
      /(\d+(?:\.\d+)?)\s*(?:'|’|ft)\b/i
    );

  if (foot) {
    return Number(foot[1]);
  }

  const inch =
    text.match(
      /\b(72|96|120|144)\s*(?:["”]|in)\b/i
    );

  return inch
    ? Math.round(
        Number(inch[1]) / 12
      )
    : null;
}

function conferenceVisibleProduct(product) {
  return !new Set([
    "7588",
    "7997",
    "6573",
    "6574"
  ]).has(
    String(
      product.model || ""
    )
  );
}

function conferenceScore(product) {
  let score =
    featuredScore(product);

  if (
    [
      "592",
      "594",
      "596",
      "7585",
      "536"
    ].includes(
      String(
        product.model || ""
      )
    )
  ) {
    score += 120;
  }

  if (product.quoteRequired) {
    score -= 25;
  }

  if (
    conferenceShape(product) !==
    "Other"
  ) {
    score += 12;
  }

  return score;
}

function conferenceRecommendedTables() {
  return PRODUCTS
    .filter(
      product =>
        (
          product.category ===
            "Conference Table" ||
          product.room ===
            "Conference"
        ) &&
        product.available !==
          false &&
        conferenceVisibleProduct(
          product
        )
    )
    .sort(
      (a, b) =>
        conferenceScore(b) -
        conferenceScore(a)
    )
    .slice(0, 4);
}

function conferenceRecommendedChairs() {
  const preferred =
    /\b(conference|guest|office|desk|task|executive|manager|mesh|reception)\b/i;

  const excluded =
    /\b(dining|bar\s*stool|barstool|counter\s*stool|hacienda|cabana|farmhouse|kitchen|patio|rocker|recliner)\b/i;

  return PRODUCTS
    .filter(
      product =>
        product.category ===
          "Chair" &&
        product.available !==
          false &&
        product.condition ===
          "New"
    )
    .filter(product => {
      const text =
        `${product.nameRaw || product.name} ${product.collection || ""} ${product.room || ""}`;

      return (
        !excluded.test(text) &&
        (
          product.room ===
            "Office" ||
          preferred.test(text)
        )
      );
    })
    .sort((a, b) => {
      const score = product => {
        const text =
          (
            product.nameRaw ||
            product.name
          ).toLowerCase();

        let value =
          featuredScore(product);

        if (
          /conference|guest|reception/.test(text)
        ) {
          value += 80;
        }

        if (
          /mesh|task/.test(text)
        ) {
          value += 62;
        }

        if (
          /executive|desk chair|office chair/.test(text)
        ) {
          value += 42;
        }

        return value;
      };

      return (
        score(b) -
        score(a)
      );
    })
    .slice(0, 4);
}

function getFilteredProducts() {
  let items =
    PRODUCTS.filter(product => {
      if (
        state.quickFilter ===
          "Office" &&
        !(
          product.room ===
            "Office" ||
          [
            "Storage",
            "Seating"
          ].includes(
            product.room
          )
        )
      ) {
        return false;
      }

      if (
        state.quickFilter ===
          "Conference" &&
        !(
          product.room ===
            "Conference" ||
          product.category ===
            "Conference Table"
        )
      ) {
        return false;
      }

      if (
        state.quickFilter ===
          "Living" &&
        product.room !==
          "Living"
      ) {
        return false;
      }

      if (
        state.quickFilter ===
          "Dining" &&
        product.room !==
          "Dining"
      ) {
        return false;
      }

      if (
        state.quickFilter ===
          "Storage" &&
        product.room !==
          "Storage"
      ) {
        return false;
      }

      if (
        state.quickFilter ===
          "Seating" &&
        product.category !==
          "Chair"
      ) {
        return false;
      }

      if (
        state.quickFilter ===
          "Used" &&
        product.condition !==
          "Used"
      ) {
        return false;
      }

      if (
        state.room !== "all" &&
        product.room !==
          state.room
      ) {
        return false;
      }

      if (
        state.collection !==
          "all" &&
        product.collection !==
          state.collection
      ) {
        return false;
      }

      if (
        state.category !==
          "all" &&
        product.category !==
          state.category
      ) {
        return false;
      }

      if (
        state.finish !==
          "all" &&
        product.finish !==
          state.finish
      ) {
        return false;
      }

      if (
        state.condition !==
          "all" &&
        product.condition !==
          state.condition
      ) {
        return false;
      }

      if (
        state.quickFilter ===
        "Conference"
      ) {
        if (
          !conferenceVisibleProduct(
            product
          )
        ) {
          return false;
        }

        if (
          state.conferenceShape !==
            "all" &&
          conferenceShape(
            product
          ) !==
            state.conferenceShape
        ) {
          return false;
        }

        const feet =
          conferenceFeet(product);

        if (
          state.conferenceSize !==
          "all"
        ) {
          if (
            state.conferenceSize ===
            "custom"
          ) {
            if (
              !product.quoteRequired &&
              !(
                feet &&
                feet >= 12
              )
            ) {
              return false;
            }
          } else if (
            feet !==
            Number(
              state.conferenceSize
            )
          ) {
            return false;
          }
        }
      }

      if (state.search) {
        const haystack =
          `${product.name} ${product.nameRaw || ""} ${product.collection} ${product.finish} ${product.category} ${product.model}`
            .toLowerCase();

        if (
          !haystack.includes(
            state.search.toLowerCase()
          )
        ) {
          return false;
        }
      }

      return true;
    });

  if (
    state.sort ===
    "price-low"
  ) {
    items.sort(
      (a, b) =>
        a.price - b.price
    );
  } else if (
    state.sort ===
    "price-high"
  ) {
    items.sort(
      (a, b) =>
        b.price - a.price
    );
  } else if (
    state.sort === "name"
  ) {
    items.sort(
      (a, b) =>
        a.name.localeCompare(
          b.name
        )
    );
  } else if (
    state.quickFilter ===
    "Conference"
  ) {
    items.sort(
      (a, b) =>
        conferenceScore(b) -
        conferenceScore(a)
    );
  } else {
    items.sort(
      (a, b) =>
        featuredScore(b) -
        featuredScore(a)
    );
  }

  return items;
}

function priceLabel(product) {
  if (
    product.quoteRequired
  ) {
    return `<span class="quote-price">Call for pricing</span>`;
  }

  const sale =
    product.compareAt &&
    product.compareAt >
      product.price;

  return `${
    sale
      ? `<s>${money(
          product.compareAt
        )}</s>`
      : ""
  }${money(product.price)}`;
}

function productCard(product) {
  const sale =
    product.compareAt &&
    product.compareAt >
      product.price &&
    !product.quoteRequired;

  const limited =
    product.condition ===
      "Used" &&
    /\b1\s*only\b|\bone\s*only\b/i.test(
      product.nameRaw || ""
    );

  const specs = [
    product.dimensions,

    product.model
      ? `Model ${product.model}`
      : ""
  ].filter(Boolean);

  return `
    <article class="product-card ${product.available === false ? "out-of-stock-card" : ""}">
      <div class="product-card-media ${product.image ? "" : "image-missing"}">
        <img
          src="${escapeHtml(product.image)}"
          alt="${escapeHtml(product.name)}"
          loading="lazy"
        >

        <div class="product-card-badges">
          ${
            product.condition === "Used"
              ? `<span class="used-badge">Used</span>`
              : ""
          }

          ${
            limited
              ? `<span class="product-badge-availability">1 available</span>`
              : ""
          }

          ${
            sale
              ? `<span class="sale-badge">Sale</span>`
              : ""
          }

          ${
            product.available === false
              ? `<span>Out of stock</span>`
              : ""
          }

          ${
            product.collection !== "Unassigned / Mix & Match"
              ? `<span>${escapeHtml(product.collection)}</span>`
              : ""
          }
        </div>

        <button
          class="quick-view-button ${product.quoteRequired ? "quote-button" : ""}"
          data-product-open="${escapeHtml(product.id)}"
        >
          ${
            product.quoteRequired
              ? "View pricing details"
              : "Quick view"
          }
        </button>
      </div>

      <div class="product-card-body">
        <div class="product-card-kicker">
          <span>${escapeHtml(product.category)}</span>
          <span>${escapeHtml(product.finish)}</span>
        </div>

        <h3>${escapeHtml(product.name)}</h3>

        ${
          specs.length
            ? `
              <div class="product-card-specs">
                ${specs
                  .map(
                    spec =>
                      `<span>${escapeHtml(spec)}</span>`
                  )
                  .join("")}
              </div>
            `
            : ""
        }

        <div class="product-price">
          ${priceLabel(product)}
        </div>

        <div class="collection-pill-row">
          <span>${escapeHtml(product.room)}</span>
          <span>${escapeHtml(product.style)}</span>

          ${
            product.condition === "Used" &&
            !limited
              ? `<span>Used inventory</span>`
              : ""
          }
        </div>
      </div>
    </article>
  `;
}

function renderConferenceMerchandising() {
  const container =
    $("#conferenceMerchandising");

  if (
    state.quickFilter !==
    "Conference"
  ) {
    container.classList.remove(
      "visible"
    );

    container.innerHTML = "";

    return;
  }

  const tables =
    conferenceRecommendedTables();

  const chairs =
    conferenceRecommendedChairs();

  const miniCard =
    (product, label) => `
      <button
        class="conference-mini-card"
        data-product-open="${escapeHtml(product.id)}"
      >
        <img
          src="${escapeHtml(product.image)}"
          alt="${escapeHtml(product.name)}"
          loading="lazy"
        >

        <span class="conference-mini-card__body">
          <span>${escapeHtml(label)}</span>

          <strong>${escapeHtml(product.name)}</strong>

          <small>
            ${
              product.quoteRequired
                ? "Call for pricing"
                : money(product.price)
            }
          </small>
        </span>
      </button>
    `;

  container.innerHTML = `
    <div class="conference-builder">
      <div class="conference-builder__intro">
        <div>
          <span class="eyebrow">
            BUILD A CONFERENCE ROOM
          </span>

          <h3>
            Start with the table.
            Finish the room.
          </h3>
        </div>

        <p>
          Choose the shape and size that fits the meeting space,
          then coordinate the finish and seating instead of digging
          through unrelated inventory.
        </p>
      </div>

      <div class="conference-step">
        <div class="conference-step__heading">
          <span class="conference-step__number">
            1
          </span>

          <strong>
            Choose a table shape
          </strong>
        </div>

        <div class="conference-shape-grid">
          ${
            [
              [
                "all",
                "All Conference Tables",
                "Browse every conference-table shape"
              ],
              [
                "Racetrack",
                "Racetrack",
                "Classic rounded meeting-table profile"
              ],
              [
                "Rectangular",
                "Rectangular",
                "Clean commercial conference-room layout"
              ],
              [
                "Boat Shape",
                "Boat Shape",
                "Large custom meeting and boardroom tables"
              ]
            ]
              .map(
                ([value, label, copy]) => `
                  <button
                    class="conference-shape-card ${state.conferenceShape === value ? "active" : ""}"
                    data-conference-shape="${value}"
                  >
                    <strong>${label}</strong>
                    <span>${copy}</span>
                  </button>
                `
              )
              .join("")
          }
        </div>
      </div>

      <div class="conference-step">
        <div class="conference-step__heading">
          <span class="conference-step__number">
            2
          </span>

          <strong>
            Choose the room scale
          </strong>
        </div>

        <div class="conference-size-row">
          ${
            [
              ["all", "All sizes"],
              ["6", "6'"],
              ["8", "8'"],
              ["10", "10'"],
              ["12", "12'"],
              ["custom", "12'–30' custom"]
            ]
              .map(
                ([value, label]) => `
                  <button
                    class="conference-size-button ${state.conferenceSize === value ? "active" : ""}"
                    data-conference-size="${value}"
                  >
                    ${label}
                  </button>
                `
              )
              .join("")
          }
        </div>
      </div>

      <div class="conference-step">
        <div class="conference-step__heading">
          <span class="conference-step__number">
            3
          </span>

          <strong>
            Choose a laminate finish
          </strong>
        </div>

        <div class="conference-finish-row">
          <button
            class="conference-finish-button ${state.conferenceFinish === "all" ? "active" : ""}"
            data-conference-finish="all"
          >
            Any finish
          </button>

          ${
            CONFERENCE_FINISHES
              .map(
                finish => `
                  <button
                    class="conference-finish-button ${state.conferenceFinish === finish ? "active" : ""}"
                    data-conference-finish="${finish}"
                  >
                    ${finish}
                  </button>
                `
              )
              .join("")
          }
        </div>

        <p class="conference-finish-note">
          Finish swatches belong here as choices,
          not as the hero image of the furniture card.
        </p>
      </div>

      <div class="conference-step">
        <div class="conference-step__heading">
          <span class="conference-step__number">
            4
          </span>

          <strong>
            Complete the conference room
          </strong>
        </div>

        <div class="conference-recommended">
          <div class="conference-recommended__tables">
            <p class="conference-recommended__title">
              Featured conference tables
            </p>

            <div class="conference-mini-grid">
              ${
                tables
                  .map(
                    product =>
                      miniCard(
                        product,
                        conferenceShape(product)
                      )
                  )
                  .join("")
              }
            </div>
          </div>

          <div class="conference-recommended__chairs">
            <p class="conference-recommended__title">
              Recommended office + conference seating
            </p>

            <div class="conference-mini-grid">
              ${
                chairs
                  .map(
                    product =>
                      miniCard(
                        product,
                        "Seating"
                      )
                  )
                  .join("")
              }
            </div>
          </div>
        </div>

        <p class="conference-room-note">
          Need a larger boardroom or a custom 12'–30' configuration?
          Call the San Antonio showroom at (210) 223-0004 for sizing
          and pricing help.
        </p>
      </div>
    </div>
  `;

  container.classList.add(
    "visible"
  );

  $$(
    "[data-conference-shape]",
    container
  ).forEach(
    button =>
      button.addEventListener(
        "click",
        () => {
          state.conferenceShape =
            button.dataset.conferenceShape;

          renderCatalog();
        }
      )
  );

  $$(
    "[data-conference-size]",
    container
  ).forEach(
    button =>
      button.addEventListener(
        "click",
        () => {
          state.conferenceSize =
            button.dataset.conferenceSize;

          renderCatalog();
        }
      )
  );

  $$(
    "[data-conference-finish]",
    container
  ).forEach(
    button =>
      button.addEventListener(
        "click",
        () => {
          state.conferenceFinish =
            button.dataset.conferenceFinish;

          renderCatalog();
        }
      )
  );

  $$(
    "[data-product-open]",
    container
  ).forEach(
    button =>
      button.addEventListener(
        "click",
        () =>
          openProduct(
            button.dataset.productOpen
          )
      )
  );
}

function renderMerchandisingClusters(items) {
  const container =
    $("#merchandisingClusters");

  if (
    state.quickFilter === "Conference" ||
    state.collection !== "all" ||
    state.search
  ) {
    container.classList.remove(
      "visible"
    );

    container.innerHTML = "";

    return;
  }

  const groups =
    new Map();

  items
    .filter(
      product =>
        product.available !== false &&
        product.collection !==
          "Unassigned / Mix & Match"
    )
    .forEach(product => {
      if (
        !groups.has(
          product.collection
        )
      ) {
        groups.set(
          product.collection,
          []
        );
      }

      groups
        .get(product.collection)
        .push(product);
    });

  const clusters =
    [...groups.entries()]
      .filter(
        ([, products]) =>
          products.length >= 2
      )
      .map(
        ([name, products]) => {
          const categories =
            unique(
              products.map(
                product =>
                  product.category
              )
            );

          const hasDesk =
            products.some(
              product =>
                /Desk/.test(
                  product.category
                )
            );

          const hasStorage =
            products.some(
              product =>
                [
                  "Credenza / Cabinet",
                  "Bookcase",
                  "File Cabinet",
                  "Hutch"
                ].includes(
                  product.category
                )
            );

          return {
            name,
            products,
            categories,

            score:
              (
                COLLECTION_PRIORITY[
                  name
                ] || 0
              ) +
              products.length * 4 +
              categories.length * 4 +
              (
                hasDesk &&
                hasStorage
                  ? 45
                  : 0
              )
          };
        }
      )
      .sort(
        (a, b) =>
          b.score - a.score
      )
      .slice(0, 4);

  if (!clusters.length) {
    container.classList.remove(
      "visible"
    );

    container.innerHTML = "";

    return;
  }

  container.innerHTML = `
    <div class="merchandising-clusters__heading">
      <h3>
        Shop matching furniture families
      </h3>

      <p>
        Start with one piece,
        then keep the finish and room coordinated.
      </p>
    </div>

    <div class="collection-cluster-grid">
      ${
        clusters
          .map(cluster => {
            const hero =
              [...cluster.products]
                .sort(
                  (a, b) =>
                    featuredScore(b) -
                    featuredScore(a)
                )[0];

            const title =
              state.quickFilter ===
              "Office"
                ? `Build the ${cluster.name} Office`
                : cluster.name;

            return `
              <button
                class="collection-cluster-card"
                data-cluster="${escapeHtml(cluster.name)}"
              >
                <img
                  src="${escapeHtml(hero.image)}"
                  alt="${escapeHtml(cluster.name)}"
                  loading="lazy"
                >

                <span class="collection-cluster-card__body">
                  <span>
                    Build the room
                  </span>

                  <strong>
                    ${escapeHtml(title)}
                  </strong>

                  <small>
                    ${cluster.products.length} matching pieces ·
                    ${escapeHtml(
                      cluster.categories
                        .slice(0, 4)
                        .join(" · ")
                    )}
                  </small>
                </span>
              </button>
            `;
          })
          .join("")
      }
    </div>
  `;

  container.classList.add(
    "visible"
  );

  $$(
    "[data-cluster]",
    container
  ).forEach(
    button =>
      button.addEventListener(
        "click",
        () => {
          state.collection =
            button.dataset.cluster;

          $("#collectionFilter").value =
            state.collection;

          renderCatalog();
        }
      )
  );
}

function catalogSignature() {
  return JSON.stringify({
    quickFilter:
      state.quickFilter,

    room:
      state.room,

    collection:
      state.collection,

    category:
      state.category,

    finish:
      state.finish,

    condition:
      state.condition,

    conferenceShape:
      state.conferenceShape,

    conferenceSize:
      state.conferenceSize,

    conferenceFinish:
      state.conferenceFinish,

    search:
      state.search,

    sort:
      state.sort
  });
}

function renderCatalog() {
  if (!state.catalogLoaded) {
    return;
  }

  const signature =
    catalogSignature();

  if (
    signature !==
    state.lastCatalogSignature
  ) {
    state.catalogLimit = 48;

    state.lastCatalogSignature =
      signature;
  }

  const items =
    getFilteredProducts();

  const visible =
    items.slice(
      0,
      state.catalogLimit
    );

  $("#catalogCount").textContent =
    items.length.toLocaleString();

  renderConferenceMerchandising();
  renderMerchandisingClusters(items);

  $("#productGrid").innerHTML =
    visible.length
      ? visible
          .map(productCard)
          .join("")
      : `
        <div
          class="prototype-note"
          style="grid-column:1/-1"
        >
          <strong>No match.</strong>
          Try clearing one or more filters.
        </div>
      `;

  $$(
    "[data-product-open]",
    $("#productGrid")
  ).forEach(
    button =>
      button.addEventListener(
        "click",
        () =>
          openProduct(
            button.dataset.productOpen
          )
      )
  );

  const pagination =
    $("#catalogPagination");

  if (
    !items.length ||
    visible.length >=
      items.length
  ) {
    pagination.hidden = true;
  } else {
    pagination.hidden = false;

    $("#catalogShowing").textContent =
      `Showing ${visible.length.toLocaleString()} of ${items.length.toLocaleString()} products`;

    $("#loadMoreProducts").textContent =
      `Load ${Math.min(
        48,
        items.length -
          visible.length
      )} more`;
  }
}

function renderHomeMerchandising() {
  const ash =
    PRODUCTS
      .filter(
        product =>
          product.collection ===
            "Ash Gray" &&
          product.available !==
            false
      )
      .sort(
        (a, b) =>
          featuredScore(b) -
          featuredScore(a)
      )
      .slice(0, 3);

  const ashFallback =
    FALLBACK_PRODUCTS
      .filter(
        product =>
          product.collection ===
          "Ash Gray"
      )
      .slice(0, 3);

  const ashItems =
    ash.length >= 3
      ? ash
      : ashFallback;

  $("#ashBundleProducts").innerHTML =
    ashItems
      .map(
        product => `
          <article class="bundle-product">
            <img
              src="${escapeHtml(product.image)}"
              alt="${escapeHtml(product.name)}"
            >

            <div class="bundle-product-body">
              <span>
                ${escapeHtml(product.category)}
              </span>

              <strong>
                ${escapeHtml(product.name)}
              </strong>

              <b>
                ${money(product.price)}
              </b>
            </div>
          </article>
        `
      )
      .join("");

  const total =
    ashItems.reduce(
      (sum, product) =>
        sum +
        Number(
          product.price || 0
        ),
      0
    );

  if (total) {
    $("#ashBundleTotal").textContent =
      money(total);
  }

  const coffee =
    PRODUCTS
      .filter(
        product =>
          product.collection ===
            "Coffee" &&
          product.available !==
            false
      )
      .sort(
        (a, b) =>
          featuredScore(b) -
          featuredScore(a)
      )
      .slice(0, 4);

  const coffeeItems =
    coffee.length
      ? coffee
      : FALLBACK_PRODUCTS.filter(
          product =>
            product.collection ===
            "Coffee"
        );

  $("#coffeeShowcase").innerHTML =
    coffeeItems
      .slice(0, 4)
      .map(
        product => `
          <article class="dark-product-card">
            <img
              src="${escapeHtml(product.image)}"
              alt="${escapeHtml(product.name)}"
            >

            <div class="dark-product-body">
              <span>
                ${escapeHtml(product.category)}
              </span>

              <strong>
                ${escapeHtml(product.name)}
              </strong>

              <b>
                ${money(product.price)}
              </b>

              <br>

              <button
                class="link-button"
                data-product-open="${escapeHtml(product.id)}"
              >
                Quick view →
              </button>
            </div>
          </article>
        `
      )
      .join("");

  $$(
    "[data-product-open]",
    $("#coffeeShowcase")
  ).forEach(
    button =>
      button.addEventListener(
        "click",
        () =>
          openProduct(
            button.dataset.productOpen
          )
      )
  );
}

function renderCollectionsPage() {
  const container =
    $("#collectionPageGrid");

  container.innerHTML =
    FEATURED_COLLECTIONS
      .map(collection => {
        const count =
          PRODUCTS.filter(
            product =>
              product.collection ===
              collection.name
          ).length;

        return `
          <article class="collection-page-card">
            <div class="collection-page-card-image">
              <img
                src="${collection.image}"
                alt="${escapeHtml(collection.name)}"
              >
            </div>

            <div class="collection-page-card-body">
              <span class="micro-label">
                ${escapeHtml(
                  collection.label.toUpperCase()
                )}
              </span>

              <h3>
                ${escapeHtml(collection.name)}
              </h3>

              <p>
                ${escapeHtml(collection.description)}
              </p>

              <div class="collection-meta">
                ${
                  collection.tags
                    .map(
                      tag =>
                        `<span>${escapeHtml(tag)}</span>`
                    )
                    .join("")
                }

                ${
                  count
                    ? `<span>${count} live pieces</span>`
                    : ""
                }
              </div>

              <button
                class="btn btn-red"
                data-collection-button="${escapeHtml(collection.name)}"
              >
                Shop ${escapeHtml(collection.name)}
              </button>
            </div>
          </article>
        `;
      })
      .join("");

  bindCollectionButtons(
    container
  );
}

function getRelatedProducts(product) {
  return PRODUCTS
    .filter(
      candidate =>
        candidate.id !==
          product.id &&
        candidate.available !==
          false
    )
    .map(candidate => {
      let score = 0;

      if (
        candidate.collection ===
          product.collection &&
        product.collection !==
          "Unassigned / Mix & Match"
      ) {
        score += 10;
      }

      if (
        candidate.finish ===
        product.finish
      ) {
        score += 5;
      }

      if (
        candidate.room ===
        product.room
      ) {
        score += 3;
      }

      if (
        candidate.style ===
        product.style
      ) {
        score += 2;
      }

      if (
        candidate.category !==
        product.category
      ) {
        score += 3;
      }

      return {
        candidate,
        score
      };
    })
    .filter(
      item =>
        item.score >= 5
    )
    .sort(
      (a, b) =>
        b.score - a.score
    )
    .slice(0, 5)
    .map(
      item =>
        item.candidate
    );
}

function openProduct(id) {
  const product =
    PRODUCTS.find(
      product =>
        String(product.id) ===
        String(id)
    ) ||
    FALLBACK_PRODUCTS.find(
      product =>
        String(product.id) ===
        String(id)
    );

  if (!product) {
    return;
  }

  state.currentProduct =
    product;

  $("#productModalImage").src =
    product.image || "";

  $("#productModalImage").alt =
    product.name;

  $("#productModalCollection").textContent =
    product.collection !==
      "Unassigned / Mix & Match"
      ? product.collection
      : product.category;

  $("#productModalTitle").textContent =
    product.name;

  $("#productModalSubtitle").textContent =
    [
      product.dimensions,
      product.category
    ]
      .filter(Boolean)
      .join(" · ");

  $("#productModalPrice").innerHTML =
    priceLabel(product);

  $("#productModalDescription").textContent =
    product.description ||
    "Furniture from Desks Galore.";

  $("#productModalModel").textContent =
    product.model ||
    "See listing";

  $("#productModalFinish").textContent =
    product.finish;

  $("#productModalRoom").textContent =
    product.room;

  $("#productModalCondition").textContent =
    product.condition;

  $("#modalOriginalLink").href =
    product.url ||
    STORE;

  const addButton =
    $("#modalAddToCart");

  if (product.quoteRequired) {
    addButton.textContent =
      "Call showroom for pricing";

    addButton.dataset.mode =
      "call";
  } else if (
    product.available === false
  ) {
    addButton.textContent =
      "Currently out of stock";

    addButton.dataset.mode =
      "disabled";
  } else {
    addButton.textContent =
      "Add to cart";

    addButton.dataset.mode =
      "cart";
  }

  const related =
    getRelatedProducts(
      product
    );

  $("#productModalPairs").innerHTML =
    related.length
      ? related
          .map(
            item => `
              <button
                class="pair-button"
                data-product-open="${escapeHtml(item.id)}"
              >
                ${escapeHtml(item.name)}
              </button>
            `
          )
          .join("")
      : `
        <span
          style="color:var(--muted);font-size:.75rem"
        >
          Ask the showroom about matching pieces.
        </span>
      `;

  $$(
    "[data-product-open]",
    $("#productModalPairs")
  ).forEach(
    button =>
      button.addEventListener(
        "click",
        () =>
          openProduct(
            button.dataset.productOpen
          )
      )
  );

  $("#productModal")
    .classList
    .add("open");

  $("#productModal")
    .setAttribute(
      "aria-hidden",
      "false"
    );

  document.body
    .classList
    .add("no-scroll");
}

function closeProduct() {
  $("#productModal")
    .classList
    .remove("open");

  $("#productModal")
    .setAttribute(
      "aria-hidden",
      "true"
    );

  document.body
    .classList
    .remove("no-scroll");
}

function saveCart() {
  localStorage.setItem(
    "dg-v6-cart",
    JSON.stringify(
      state.cart
    )
  );
}

function addToCart(product) {
  if (
    !product ||
    product.quoteRequired ||
    product.available === false
  ) {
    return;
  }

  const existing =
    state.cart.find(
      item =>
        String(item.id) ===
        String(product.id)
    );

  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1
    });
  }

  saveCart();
  renderCart();

  toast(
    `${product.name} added to cart`
  );
}

function renderCart() {
  const count =
    state.cart.reduce(
      (sum, item) =>
        sum + item.qty,
      0
    );

  const total =
    state.cart.reduce(
      (sum, item) =>
        sum +
        item.price *
          item.qty,
      0
    );

  $("#cartCount").textContent =
    count;

  $("#cartTotal").textContent =
    money(total);

  $("#cartItems").innerHTML =
    state.cart.length
      ? state.cart
          .map(
            item => `
              <article class="cart-item">
                <img
                  src="${escapeHtml(item.image)}"
                  alt="${escapeHtml(item.name)}"
                >

                <div>
                  <strong>
                    ${escapeHtml(item.name)}
                  </strong>

                  <small>
                    Qty ${item.qty}
                  </small>
                </div>

                <div class="cart-item-right">
                  <b>
                    ${money(
                      item.price *
                      item.qty
                    )}
                  </b>

                  <button
                    data-remove-cart="${escapeHtml(item.id)}"
                  >
                    Remove
                  </button>
                </div>
              </article>
            `
          )
          .join("")
      : `
        <div class="cart-empty">
          <strong>
            Your cart is empty.
          </strong>

          <p>
            Build a room by adding coordinated pieces.
          </p>
        </div>
      `;

  $$(
    "[data-remove-cart]",
    $("#cartItems")
  ).forEach(
    button =>
      button.addEventListener(
        "click",
        () => {
          state.cart =
            state.cart.filter(
              item =>
                String(item.id) !==
                String(
                  button.dataset.removeCart
                )
            );

          saveCart();
          renderCart();
        }
      )
  );
}

function openCart() {
  $("#cartDrawer")
    .classList
    .add("open");

  $("#cartDrawer")
    .setAttribute(
      "aria-hidden",
      "false"
    );

  document.body
    .classList
    .add("no-scroll");
}

function closeCart() {
  $("#cartDrawer")
    .classList
    .remove("open");

  $("#cartDrawer")
    .setAttribute(
      "aria-hidden",
      "true"
    );

  document.body
    .classList
    .remove("no-scroll");
}

function toast(message) {
  const element =
    $("#toast");

  element.textContent =
    message;

  element.classList.add(
    "show"
  );

  clearTimeout(
    toast.timer
  );

  toast.timer =
    setTimeout(
      () =>
        element.classList.remove(
          "show"
        ),
      1800
    );
}

function resetCatalogFilters() {
  state.quickFilter = "all";
  state.room = "all";
  state.collection = "all";
  state.category = "all";
  state.finish = "all";
  state.condition = "all";
  state.conferenceShape = "all";
  state.conferenceSize = "all";
  state.conferenceFinish = "all";
  state.search = "";
  state.sort = "featured";

  $$(".filter-chip").forEach(
    chip =>
      chip.classList.toggle(
        "active",
        chip.dataset.filter ===
          "all"
      )
  );

  $("#roomFilter").value =
    "all";

  $("#collectionFilter").value =
    "all";

  $("#categoryFilter").value =
    "all";

  $("#finishFilter").value =
    "all";

  $("#conditionFilter").value =
    "all";

  $("#catalogSearch").value =
    "";

  $("#catalogSort").value =
    "featured";

  renderCatalog();
}

function setRoute(
  route,
  pushHash = true
) {
  const valid = [
    "home",
    "collections",
    "shop",
    "used",
    "about",
    "contact"
  ];

  const next =
    valid.includes(route)
      ? route
      : "home";

  state.route =
    next;

  $$(".page").forEach(
    page =>
      page.classList.toggle(
        "active",
        page.dataset.page ===
          next
      )
  );

  $$(
    "[data-route-link]"
  ).forEach(
    link =>
      link.classList.toggle(
        "active",
        link.dataset.routeLink ===
          next
      )
  );

  if (
    pushHash &&
    location.hash !==
      `#${next}`
  ) {
    history.pushState(
      null,
      "",
      `#${next}`
    );
  }

  $("#mainNav")
    .classList
    .remove("open");

  $("#mobileNavButton")
    .setAttribute(
      "aria-expanded",
      "false"
    );

  $("#globalSearchPanel")
    .classList
    .remove("open");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  if (next === "shop") {
    renderCatalog();
  }
}

function routeFromHash() {
  setRoute(
    location.hash.replace(
      "#",
      ""
    ) || "home",
    false
  );
}

function shopWith(
  overrides = {}
) {
  state.quickFilter = "all";
  state.room = "all";
  state.collection = "all";
  state.category = "all";
  state.finish = "all";
  state.condition = "all";
  state.search = "";

  Object.assign(
    state,
    overrides
  );

  setRoute("shop");
  syncFilterUI();
  renderCatalog();
}

function syncFilterUI() {
  $$(".filter-chip").forEach(
    chip =>
      chip.classList.toggle(
        "active",
        chip.dataset.filter ===
          state.quickFilter
      )
  );

  $("#roomFilter").value =
    state.room;

  $("#collectionFilter").value =
    state.collection;

  $("#categoryFilter").value =
    state.category;

  $("#finishFilter").value =
    state.finish;

  $("#conditionFilter").value =
    state.condition;

  $("#catalogSearch").value =
    state.search;
}

function bindCollectionButtons(
  root = document
) {
  $$(
    "[data-collection-button]",
    root
  ).forEach(
    button =>
      button.addEventListener(
        "click",
        () => {
          const wanted =
            button.dataset.collectionButton;

          const exact =
            unique(
              PRODUCTS.map(
                product =>
                  product.collection
              )
            ).find(
              name =>
                name === wanted ||
                name
                  .toLowerCase()
                  .includes(
                    wanted.toLowerCase()
                  )
            );

          shopWith({
            collection:
              exact || wanted
          });
        }
      )
  );
}

function bindStaticNavigation() {
  $$(
    "[data-route-link]"
  ).forEach(
    link =>
      link.addEventListener(
        "click",
        event => {
          event.preventDefault();

          setRoute(
            link.dataset.routeLink
          );
        }
      )
  );

  bindCollectionButtons(
    document
  );

  $$(
    "[data-room-button]"
  ).forEach(
    button =>
      button.addEventListener(
        "click",
        () => {
          if (
            button.dataset.roomButton ===
            "Conference"
          ) {
            shopWith({
              quickFilter:
                "Conference"
            });
          } else {
            shopWith({
              quickFilter:
                "Office"
            });
          }
        }
      )
  );

  $$(
    "[data-category-button]"
  ).forEach(
    button =>
      button.addEventListener(
        "click",
        () => {
          if (
            button.dataset.categoryButton ===
            "Storage"
          ) {
            shopWith({
              quickFilter:
                "Storage"
            });
          } else {
            shopWith({
              category:
                button.dataset.categoryButton
            });
          }
        }
      )
  );

  $$(
    "[data-condition-button]"
  ).forEach(
    button =>
      button.addEventListener(
        "click",
        () =>
          shopWith({
            quickFilter:
              "Used",
            condition:
              "Used"
          })
      )
  );

  $$(
    "[data-used-type]"
  ).forEach(
    button =>
      button.addEventListener(
        "click",
        () => {
          const type =
            button.dataset.usedType;

          shopWith({
            quickFilter:
              "Used",

            condition:
              "Used",

            category:
              type === "Chair"
                ? "Chair"
                : "all",

            search:
              type === "Storage"
                ? "file"
                : type === "Table"
                  ? "table"
                  : type === "Desk"
                    ? "desk"
                    : ""
          });
        }
      )
  );
}

function bindCatalogControls() {
  $$(".filter-chip").forEach(
    button =>
      button.addEventListener(
        "click",
        () => {
          state.quickFilter =
            button.dataset.filter;

          state.room =
            "all";

          state.collection =
            "all";

          state.category =
            "all";

          state.finish =
            "all";

          state.condition =
            state.quickFilter ===
              "Used"
              ? "Used"
              : "all";

          state.conferenceShape =
            "all";

          state.conferenceSize =
            "all";

          state.conferenceFinish =
            "all";

          state.search =
            "";

          $("#catalogSearch").value =
            "";

          syncFilterUI();
          renderCatalog();
        }
      )
  );

  $("#roomFilter")
    .addEventListener(
      "change",
      event => {
        state.room =
          event.target.value;

        renderCatalog();
      }
    );

  $("#collectionFilter")
    .addEventListener(
      "change",
      event => {
        state.collection =
          event.target.value;

        renderCatalog();
      }
    );

  $("#categoryFilter")
    .addEventListener(
      "change",
      event => {
        state.category =
          event.target.value;

        renderCatalog();
      }
    );

  $("#finishFilter")
    .addEventListener(
      "change",
      event => {
        state.finish =
          event.target.value;

        renderCatalog();
      }
    );

  $("#conditionFilter")
    .addEventListener(
      "change",
      event => {
        state.condition =
          event.target.value;

        renderCatalog();
      }
    );

  $("#catalogSort")
    .addEventListener(
      "change",
      event => {
        state.sort =
          event.target.value;

        renderCatalog();
      }
    );

  $("#catalogSearch")
    .addEventListener(
      "input",
      event => {
        state.search =
          event.target.value.trim();

        renderCatalog();
      }
    );

  $("#resetCatalog")
    .addEventListener(
      "click",
      resetCatalogFilters
    );

  $("#loadMoreProducts")
    .addEventListener(
      "click",
      () => {
        state.catalogLimit +=
          48;

        renderCatalog();
      }
    );
}

function bindHeaderAndPanels() {
  $("#mobileNavButton")
    .addEventListener(
      "click",
      () => {
        const open =
          $("#mainNav")
            .classList
            .toggle("open");

        $("#mobileNavButton")
          .setAttribute(
            "aria-expanded",
            String(open)
          );
      }
    );

  $("#searchButton")
    .addEventListener(
      "click",
      () => {
        $("#globalSearchPanel")
          .classList
          .toggle("open");

        setTimeout(
          () =>
            $("#globalSearchInput")
              .focus(),
          50
        );
      }
    );

  const submitGlobalSearch =
    () => {
      const value =
        $("#globalSearchInput")
          .value
          .trim();

      shopWith({
        search: value
      });
    };

  $("#globalSearchSubmit")
    .addEventListener(
      "click",
      submitGlobalSearch
    );

  $("#globalSearchInput")
    .addEventListener(
      "keydown",
      event => {
        if (
          event.key ===
          "Enter"
        ) {
          submitGlobalSearch();
        }
      }
    );

  $("#cartButton")
    .addEventListener(
      "click",
      openCart
    );

  $$(
    "[data-close-cart]"
  ).forEach(
    element =>
      element.addEventListener(
        "click",
        closeCart
      )
  );

  $$(
    "[data-close-product]"
  ).forEach(
    element =>
      element.addEventListener(
        "click",
        closeProduct
      )
  );

  $("#modalAddToCart")
    .addEventListener(
      "click",
      () => {
        if (
          !state.currentProduct
        ) {
          return;
        }

        const mode =
          $("#modalAddToCart")
            .dataset
            .mode;

        if (mode === "call") {
          window.location.href =
            `tel:${PHONE}`;

          return;
        }

        if (
          mode === "disabled"
        ) {
          return;
        }

        addToCart(
          state.currentProduct
        );
      }
    );

  $("#checkoutButton")
    .addEventListener(
      "click",
      () =>
        toast(
          "Shopify checkout will be connected during production integration."
        )
    );

  $("#contactForm")
    .addEventListener(
      "submit",
      event => {
        event.preventDefault();

        $("#contactFormNote")
          .textContent =
          "Thanks! This preview form is working locally. The final launch will connect it to the client's live contact endpoint.";

        toast(
          "Inquiry captured in the preview"
        );
      }
    );

  document.addEventListener(
    "keydown",
    event => {
      if (
        event.key ===
        "Escape"
      ) {
        closeProduct();
        closeCart();

        $("#globalSearchPanel")
          .classList
          .remove("open");
      }
    }
  );

  document.addEventListener(
    "error",
    event => {
      const target =
        event.target;

      if (
        !(
          target instanceof
          HTMLImageElement
        )
      ) {
        return;
      }

      if (
        !target.closest(
          ".product-card, .conference-mini-card, .collection-cluster-card"
        )
      ) {
        return;
      }

      target.style.display =
        "none";

      target.setAttribute(
        "aria-hidden",
        "true"
      );

      target
        .parentElement
        ?.classList
        .add(
          "image-missing"
        );
    },
    true
  );
}

function bindBundleButton() {
  $("#addAshBundle")
    .addEventListener(
      "click",
      () => {
        const ash =
          PRODUCTS
            .filter(
              product =>
                product.collection ===
                  "Ash Gray" &&
                product.available !==
                  false &&
                !product.quoteRequired
            )
            .sort(
              (a, b) =>
                featuredScore(b) -
                featuredScore(a)
            )
            .slice(0, 3);

        const products =
          ash.length
            ? ash
            : FALLBACK_PRODUCTS.filter(
                product =>
                  product.collection ===
                  "Ash Gray"
              );

        products.forEach(
          addToCart
        );

        openCart();
      }
    );
}

function initialize() {
  $("#year").textContent =
    new Date().getFullYear();

  bindStaticNavigation();
  bindCatalogControls();
  bindHeaderAndPanels();
  bindBundleButton();

  window.addEventListener(
    "hashchange",
    routeFromHash
  );

  routeFromHash();
  renderCart();
  loadCatalog();
}

initialize();