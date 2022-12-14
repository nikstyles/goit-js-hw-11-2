export function galerryMarkup({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
  <div class="photo-card">
      <a class="photo-link" href="${largeImageURL}">
        <div class="thumb">
          <img
            class="photo"
            src="${webformatURL}"
            alt="${tags}"
            loading="lazy"
          />
        </div>
        <ul class="info">
          <li class="info-item">
            <b>Likes</b>
            <span>${likes}</span>
          </li>
          <li class="info-item">
            <b>Views</b>
            <span>${views}</span>
          </li>
          <li class="info-item">
            <b>Comments</b>
            <span>${comments}</span>
          </li>
          <li class="info-item">
            <b>Downloads</b>
            <span>${downloads}</span>
          </li>
        </ul>
      </a>
    </div>`;
}
