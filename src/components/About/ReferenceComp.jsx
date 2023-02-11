// Import Modules
import React, { useState } from 'react'

// Import Components

// Import CSS
import "./ReferenceComp.css";

// Import Files
import { references } from '../../backend/db/dataExports.js';

// Export About Function
export default function ReferenceComp() {
    console.log(references)

    // console.log(referenceData)
    // Return Div for About Container
    return (
        <>
            <div className="ReferenceComp-container">
                    <div className="ReferenceComp-Header">
                        ReferenceComp
                    </div>
                    <div className='ReferenceComp-RefHolder'>
                        {references.map((item, index) => {
                            return (
                                <div className='ReferenceComp-ContentHolder' key={index}>
                                    {item.name}
                                </div>                              
                            )
                            }
                        )}
                    </div>
            </div>
        </>
    );
}