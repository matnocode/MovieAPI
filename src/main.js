import RenderMain from "./modules/main/Main";
import searchMovieButton from "./modules/SearchMovieButton";

RenderMain();
document.querySelector(".input").querySelector("button").onclick = searchMovieButton;