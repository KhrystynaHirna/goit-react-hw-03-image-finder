
const API_KEY = "25789368-636c5d004c25f97cc91a0f5f4";
const per_page = 12;
const parameters = 'image_type=photo&orientation=horizontal';
const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}&${parameters}&per_page=${per_page}`;

export function ImagesService(input, page) {
  return fetch(`${BASE_URL}&q=${input}&page=${page}`)
    .then(response => response.json())
    .then(data =>
      data.hits.reduce(
        (acc, key) => [
          ...acc,
          {
            id: key.id,
            webformatURL: key.webformatURL,
            largeImageURL: key.largeImageURL,
          },
        ],
        []
      )
    );
}