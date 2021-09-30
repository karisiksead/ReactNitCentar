import React from "react";

const Header = ()=>{

let brojac=0;

const mojaFunc = ()=>{
    brojac+=1;
    console.log("Izvrsenje f-je:", brojac);
}

    return(
        <div className="heder-body">
            <ul>
                <li>PAGE1</li>
                <li>PAGE2</li>
                <li>PAGE3</li>
                <li>PAGE4</li>
                <li>PAGE5</li>
            </ul>
            <button onClick={mojaFunc}>Test</button>
        </div>
    );
};