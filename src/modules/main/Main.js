import getMain from "./GetMain";

const RenderMain = () =>
{
    let element = document.createElement("header");
    element.innerHTML = getMain();
    document.querySelector("main").appendChild(element);
}

export  default  RenderMain;