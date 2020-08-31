export const getGif = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&api_key=NiEeCjvs9SWVHvL8DPScewOAJD6LoVeD`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifInfo = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
    return gifInfo;
}