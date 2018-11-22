const fetch = require('isomorphic-fetch');
/**
 * Let us get some images!
 */
const getSomeImages = function getSomeImages(count, callback) {
  return fetch('https://picsum.photos/list')
    .then(response => response.json())
    .then(photos => callback(photos.slice(0, count)))
}

module.exports = getSomeImages;
