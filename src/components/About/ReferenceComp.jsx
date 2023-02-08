// Import Modules
import React, { useState } from 'react'
// Import Components

// Import CSS
import "./ReferenceComp.css";
// Import Icons

// Import Files
import referenceData from '../../backend/db/references.json'

// Export About Function
export default function ReferenceComp() {
    console.log(referenceData)
    // Return Div for About Container
    return (
        <>
            <div className="ReferenceComp-container">
                <div className="ReferenceComp-Header-container">
                    <div className="ReferenceComp-Header">
                        ReferenceComp
                    </div>
                    <div className="ReferenceComp-ContentHolder">
                        TESTING
                    </div>
                </div>
            </div>
        </>
    );
}