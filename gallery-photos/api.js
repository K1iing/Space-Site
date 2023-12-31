const apiKey = '1oeE1Bc2u3fXwCH9gP08bI5cVczT6JQCJ80Da9ay';
const randomImageUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=5`;

async function fetchRandomImages() {
  try {
    const response = await fetch(randomImageUrl);
    const data = await response.json();

    const items = document.querySelectorAll('.item');
    if (data && data.length > 0) {
      data.forEach((image, index) => {
        if (image.media_type === 'image') {
          items[index].style.backgroundImage = `url('${image.url}')`;
          items[index].title = image.title;
        } else {
          console.log(`No image available for item ${index + 1}.`);
        }
      });
    } else {
      console.log('No random images available.');
    }
  } catch (error) {
    console.error('Error fetching random images:', error);
  }
}

window.onload = fetchRandomImages;
