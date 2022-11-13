const searchMovie = (input) =>
{
    let type = "t";
    if(input[0]==="t" && input[1]==="t")
    {
        //imdb id
        type="i";
    }
    let url = "http://www.omdbapi.com/?apikey=f99c5c6a&";

    let result;
    return fetch(`${url}${type}=${input}`).then((response) => response.json());
}
export default searchMovie;