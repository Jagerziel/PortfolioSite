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
                                    <h3>{item.title}</h3>
                                    <p>IMAGE</p>
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