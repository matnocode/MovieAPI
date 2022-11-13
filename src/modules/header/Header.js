import getHeader from "./GetHeader";

const RenderHeader = () =>
{
    let element = document.createElement("header");
    element.innerHTML = getHeader();
    document.querySelector("main").appendChild(element);
}

export  default  RenderHeader;