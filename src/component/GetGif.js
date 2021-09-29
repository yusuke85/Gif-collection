const apiKey = `ox1M9tYYEne9gNQFrzuWhQeo4W1x2P3r&q`



export default function GetGif({ keyword = 'jerry' } = {}) {
  
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=&offset=0&rating=g&lang=en`

  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const { data } = response
      const gifs = data.map(image => {
        const { images, title, id } = image
        const { url } = images.downsized_medium
        return { title, id, url }
      })
      return gifs
    })
}
    // setGifs(gifs)