const key = "a1f2f12acc410769a91028bed6145e4a"
const id = "1531196b"

export async function fetchRecipes(filter) {
    const {query,limit} = filter;
    const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}&from=0&to=${limit}`;

    const response = await fetch(url)

    const data = await response.json;

    return data?.hits;

}
