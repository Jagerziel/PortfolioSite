// Import Modules
import React from 'react'
// Import Components

// Import CSS
import "./PortfolioComp.css";

// Import Files
import { projects } from '../../backend/db/dataExports.js';

// Export ReferenceComp Function
export default function PortfolioComp() {
    // Return Div for PortfolioComp Container
    // console.log(projects)
    function Demo (item) {
        if (item.deploy !== "Null") {
            return <a href={item.deploy} target="_blank" className='PortfolioComp-Button'>Demo </a>
        }
    }
    return (
        <>
            <div className="PortfolioComp-container">
                    <div className='PortfolioComp-RefHolder'>
                        {projects.map((item, index) => {
                            return (
                                <div className='PortfolioComp-ContentHolder' key={index}>
                                    <h3 className='PortHead'>
                                            {item.title}
                                    </h3>
                                    <img src={require("" + item.img)} alt="An Image" className='projImages'/>
                                    <p className='portDesc'>{item.description}</p>
                                    <div className='PortfolioComp-ButtonHolder'>
                                        <a href={item.github} target="_blank" className='PortfolioComp-Button'>Github</a>
                                        {Demo(item)}
                                    </div>
                                </div>                              
                            )
                            }
                        )}
                    </div>
            </div>
        </>
    );
}