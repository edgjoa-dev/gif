
export const getGifApi = (category) => {

    const getGif = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI (category)}&limit=18&api_key=UjitCkik1WP7j8rB3dcfR8tMNNVVvN4M`;
        const res = await fetch(url)
        const data = await res.json()

        console.log(data)
        return data;
    }
    return getGif();

}
