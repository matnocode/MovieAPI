import getTile from "./GetTile";

const renderTile = (searchTerm) =>
{
    let e;
    let row;
    if(document.querySelector(".tileContainer")===null)
    {
        e = document.createElement("div");
        e.className = "container tileContainer";
        //e.style = "transform: translate(0,20vh)";
        row = document.createElement("div"); row.className="row";
    }
    else
    {
        e = document.querySelector(".tileContainer");
        row = e.querySelector(".row");
    }


    //fix to get random
    getTile(searchTerm,row);//sets innned html
    e.appendChild(row)
    document.querySelector("main").appendChild(e);
}

export default renderTile;