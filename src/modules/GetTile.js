import searchMovie from "./SearchMovie";
const getTile = (searchTerm, element) =>
{
    let response;

    let title;
    let description ;
    let year ;
    let poster;
    let rating ;

    searchMovie(searchTerm).then(result =>response=result).then(() =>
    {
        console.log(response);
        title = response.Title;
        description = response.Plot;
        year = response.Year;
        poster = response.Poster;
        rating = response.imdbRating;
        let strElement = `
     <hr>
      <img src=${poster} width="50%" height="50%">    
        <small>IMDb Rating: ${rating}</small>  
        <h4>${title}</h4>
        <p>${year}</p>
        <small>${description}</small>`;
        let chld = document.createElement("div");
        chld.className = "col-sm-6 col-lg-4 tile";
        chld.innerHTML = strElement;
        element.appendChild(chld);

    });

}

export default getTile;