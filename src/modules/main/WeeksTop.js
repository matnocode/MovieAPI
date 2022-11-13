import renderTile from "../RenderTile.js";


const RenderWeeksTop = () =>
{
    let row = document.createElement("div"); row.className="row";
    //fix to get random
    renderTile("Home+Alone",row);//sets innned html
    renderTile("John+Wick",row);//sets innned html
    renderTile("A Christmas Carol",row);//sets innned html

}

export default RenderWeeksTop;