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
    console.log(projects)
    return (
        <>
            <div className="PortfolioComp-container">
                    <div className='PortfolioComp-RefHolder'>
                        {projects.map((item, index) => {
                            return (
                                <div className='PortfolioComp-ContentHolder' key={index}>
                                    <h3 className='PortHead'>
                                        <a href={item.github} target="_blank">
                                            {item.title}
                                        </a>
                                    </h3>
                                    <image src={item.img}></image>
                                    <p>{item.description}</p>

                                </div>                              
                            )
                            }
                        )}
                    </div>
            </div>
        </>
    );
}