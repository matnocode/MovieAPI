import renderTile from "./RenderTile"
const searchMovieButton = () =>
{
    let input = document.querySelector("#inputText").value;
    //window.location.replace("../public/search.html");
    event.preventDefault();
    document.querySelector("main").innerHTML+=`<div class="container" style="text-align: center"><h3>Results</h3><hr></div>`

    renderTile(input);

}
export default searchMovieButton ;