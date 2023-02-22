// Import Modules
import React, { useState } from 'react'

// Import Components

// Import CSS
import "./ReferenceComp.css";


// Import Files
import { references } from '../../backend/db/dataExports.js';

// Export ReferenceComp Function
export default function ReferenceComp() {
    // Return Div for ReferenceComp Container
    return (
        <>
            <div className="ReferenceComp-container">
                    <div className="ReferenceComp-Header">
                    </div>
                    <div className='ReferenceComp-RefHolder'>
                        {references.map((item, index) => {
                            return (
                                <div className='ReferenceComp-ContentHolder' key={index}>
                                    {/* <img src='../../../public/images/QuoteLeftIcon.png' alt="" className='quotes'></img> */}
                                    <p className='reference'>{item.reference}</p>
                                    <p>{`${item.name} - ${item.title}`}</p>
                                </div>                              
                            )
                            }
                        )}
                    </div>
            </div>
        </>
    );
}