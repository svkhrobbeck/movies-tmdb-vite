export const renderPagination = (page, total, el, query, texts, url = "/?") => {
  el.innerHTML = "";
  const prevPage = page === 1 ? total : page - 1;

  const nextPage = page === total ? 1 : page + 1;
  const slice1 = page === 1 ? page - 1 : page === 2 ? page - 2 : page - 3;

  const pages = Array.from({ length: total }, (_, idx) => idx + 1);
  const slicedPages = pages.slice(slice1, page + 2);

  let html = `<li class="page-item">
                <a class="page-link" href="${url}${query}=${prevPage}">${texts.prev}</a>
              </li>`;

  // 1th page
  if (page > 3) {
    html += `
    <li class="page-item">
      <a class="page-link" href="${url}${query}=1">1</a>
    </li>
    `;
  }

  // 1st dots
  if (page > 3) {
    html += `
    <li class="page-item">
      <a class="page-link">...</a>
    </li>
    `;
  }

  // forEach pages
  slicedPages.forEach(pg => {
    const isActive = pg === page;

    html += `
            <li class="page-item ${isActive ? "active" : ""}">
              <a class="page-link" href="${url}${query}=${pg}">${pg}</a>
            </li>`;
  });

  // 2nd dots
  if (page < total - 2) {
    html += `
      <li class="page-item">
        <a class="page-link">...</a>
      </li>
    `;
  }

  // last page
  if (page < total - 2) {
    html += `
      <li class="page-item">
        <a class="page-link" href="${url}${query}=${total}">${total}</a>
      </li>
    `;
  }

  // next page
  html += `
    <li class="page-item">
      <a class="page-link" href="${url}${query}=${nextPage}">${texts.next}</a>
    </li>
  `;

  el.innerHTML = html;
};

// const pages = new Array(total).fill("").map((_, idx) => idx + 1)
