import React, { Component } from 'react';



class About extends Component {
    render() {
        return (
           <div>
               <h4 classNam='wrapper' style={{textAlign: "left"}}>
                Welcome to Colorado Outdoors. 
                </h4>

                <p classNam='wrapper' style={{textAlign: "left"}}>
                An app by <a href="https://www.linkedin.com/in/christoph-gruener">Christoph Gruener</a> to explore the many Outdoor Adventures our beautiful state of Colorado has to offer. 
                This app was created as the 5th and final project for the Flatiron School's Software Developer curriculum. If you have questions about Flatiron or the Software Dev curriculum, please visit <a href="https://www.flatironschool.com"></a> 
                
                The information compiled for this app is sourced from two different APIs. 
                </p>

                <p classNam='wrapper' style={{textAlign: "left"}}>
                    <ul>    
                        <li><a href="https://www.Recreation.gov">Recreation.gov</a></li>
                        <li><a href="https://www.nps.gov">The National Park Service</a></li>
                    </ul>
        
                </p>

                <p classNam='wrapper' style={{textAlign: "left"}}>
                The frontend for the app was created with React and enhanced using Redux middleware to make async calls to a Rails/Postgresql backend. 
                If you are interested in the source code for this page, please visit the <a href="https://github.com/ChrstphGrnr/ColoradoOutdoors">Github</a> repository for it. 
                </p>

                <p classNam='wrapper' style={{textAlign: "left"}}>
            
                The search bar works with the names of the individual Attractions. Please be aware, the search IS case sensitive. Searching for "Rio" will render different results than searching for "rio"
                    If have suggestions or ideas, please feel free to reach out on my Github or LinkedIn page!
                </p>
            </div>

        );
    }
}

export default About;
