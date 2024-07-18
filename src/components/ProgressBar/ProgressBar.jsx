// import React, { useState } from 'react'
// import "./ProgressBar.css"

// function ProgressBar() {
//     const [level, setLevel] = useState(0)
//     function increase() {
       
//     }
//   return (
//     <div>
//         <h1>Progress Bar</h1>
//         <div className='border'>
//             <div className='line'></div>    
//         </div>
//         <button  className='btn-i'>decrease</button>
//         <button className='btn-i'>increase</button>
//     </div>
//   )
// }

// export default ProgressBar
import React, { useState } from 'react';
import "./ProgressBar.css";

const ProgressBar = () => {
    const [level, setLevel] = useState(0);

    const increase = () => {
        setLevel(prevLevel => Math.min(prevLevel + 10, 100));
    };

    const decrease = () => {
        setLevel(prevLevel => Math.max(prevLevel - 10, 0));
    };

    return (
        <div className='progress-wr'>
            <h1 className='progress-title'>Progress Bar</h1>
            <div className='border'>
                <div className='line' style={{ width: `${level}%` }}></div>
            </div>
            <button className='btn-i' onClick={decrease}>decrease</button>
            <button className='btn-i' onClick={increase}>increase</button>
        </div>
    );
}

export default ProgressBar;
