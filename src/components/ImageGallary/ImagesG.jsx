
import { Fragment, useState } from "react";
import "./ImagesG.css";

function ImagesG() {
    const [handleImages, setHandleImages] = useState("https://picsum.photos/id/10/830/400");
    
    function handleClick() {
        setHandleImages("https://picsum.photos/id/11/830/400");
    }
    function handleClick1() {
        setHandleImages("https://picsum.photos/id/10/830/400");
    }
    function handleClick2() {
        setHandleImages("https://picsum.photos/id/12/830/400");
    }
    function handleClick3() {
        setHandleImages("https://picsum.photos/id/13/830/400");
    }

    return (
        <div className="img-wr">
        <h1>Image Gallary</h1>
            <div className="Gall-wr">
                <img onClick={handleClick1} src="https://picsum.photos/id/10/200/200" alt="" />
                <img onClick={handleClick} src="https://picsum.photos/id/11/200/200" alt="" />
                <img onClick={handleClick2} src="https://picsum.photos/id/12/200/200" alt="" />
                <img onClick={handleClick3} src="https://picsum.photos/id/13/200/200" alt="" />
            </div>
            <img className="imss" src={handleImages} alt="" />
        </div>
    );
}

export default ImagesG;
