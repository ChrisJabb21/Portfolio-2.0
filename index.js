import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import * as serviceWorker from './serviceWorker';


function Footer({ children })
{
    return (
        <div>
            <div style = {phantomStyle} />
            <div style={footerStyle}>{children}</div>
        </div>
    )
}

const phantomStyle = {
    display: "block",
    padding: "20px", 
    height: "60px",
    width: "100%"
};

const footerStyle = {
    backgroundColor: "yellow",
    fontSize: "20px",
    color: "white",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%"
};

ReactDOM.render(
<div>
<Main />


{/* // TODO make a Footer for the website to show address and number */}


</div>,
document.getElementById('root'

));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
