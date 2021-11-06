"use strict";


const DomElement = function (selector,height,width,bg,fontSize) {
        this.selector = selector,
        this.height = height,
        this.width = width,
        this.bg = bg,
        this.fontSize = fontSize

}


DomElement.prototype.generateElement = function(){

    if(this.selector[0] === '.') {
        const div =document.createElement("div");
        div.className  = this.selector.slice(1)
        div.textContent = "Привет, я div"

        div.style.cssText = ` height: ${this.height}px;
        width: ${this.width}px;
        background: ${this.bg};
        fontSize: ${this.fontSize}px;
        `

        document.body.append(div);
    }
    else if (this.selector[0] ==="#") {
        const p= document.createElement("p");
        p.setAttribute("id", this.selector.slice(1));
        p.textContent = "Привет, я параграф"

        p.style.cssText = ` height: ${this.height}px;
        width: ${this.width}px;
        background: ${this.bg};
        fontSize: ${this.fontSize}px;
        `

        document.body.append(p);
    }

}

const newDiv = new DomElement (".block", 100, 100, "red", 10 );
const newP = new  DomElement ("#one", 100, 100, "green", 10 );

newDiv.generateElement();
newP.generateElement();

