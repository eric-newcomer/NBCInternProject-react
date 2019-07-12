import React, { Component } from 'react';

class Overview extends Component {
    render() {
        return (
            <div className="Overview">
                    <h1>Media Tech Program Overview</h1>
                    <p>This will be a description of the Media Tech Program. lorem ipsum dolor blah blah blah</p>
                    <button className="btn apply" href="/" >
                        Apply Now <i class="material-icons">arrow_forward</i>
                    </button>
            </div>      
        );
    }
}

export default Overview;