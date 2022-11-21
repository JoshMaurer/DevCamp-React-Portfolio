// this is what this looks like

import React, { Component } from "react";

export default class ClassComponent extends Component {
// constructor and super only if you have a state
    constructor(props) {
        super(props);
    }
// most code will be written here above render
    render() {

        return(
//and referanced here
//must have a min of one div to hold contents. everything else will need to be INSIDE of that div
//each component file should be either its own page or part of a page
            <div>
                <div>
                    Regular Class Componenet
                </div>
                <h2>with Constructot and Super</h2>    
            </div>

        )

    }
    
}