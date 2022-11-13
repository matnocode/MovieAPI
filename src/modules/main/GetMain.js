import searchMovieButton from "../SearchMovieButton";
const getMain = () =>
{
    return `  
  <div class="container d-flex justify-content-center">
      <img src="../content/images/logo.png" class="align-text-middle">
</div>
<div class="container input">
     <div class="row">
        <div class="col-12"><h2>Movie Search Engine</h2></div> 
        <div class="col-11">
        <input type="text" id="inputText">   
        </div>
        <div class="col-1">
            <button class="btn btn-secondary" type="submit" id="submitButton" onclick="searchMovieButton()">Search</button>
        </div>
    </div>
    
     
    
</div>
`;
}

export default  getMain;