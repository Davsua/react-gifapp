export const getGif = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=lnTVn6XYbPxklRMmOfK0gQsYtJJSAYRs`
    const answer = await fetch(url)
    const data = await answer.json()
    const dataArr = data.data

    const gifs = dataArr.map(img => {
        return {
            id: img?.id,
            title: img?.title,
            url: img.images?.downsized_medium.url
        }
    })


    return gifs
    
}