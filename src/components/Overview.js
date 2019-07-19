import React, { Component } from 'react';

class Overview extends Component {
    render() {
        return (
            <div className="Overview">
                    <h1>Media Tech Program Overview</h1>
                    <p>The NBCUniversal MediaTech Program is an experience like no other. We offer a diverse range of opportunities that provide a unique experience across our iconic portfolio of brands. Through unparalleled access to the best in the business, hands-on training and one-of-a-kind networking events, our interns and associates have the chance to influence change. They shape the way we do things. Here you can contribute as content creators, problem solvers & innovators. Here you can learn the power and possibilities of media and technology. Here you can go far.</p>
                    <button className="btn apply" href="/" >
                        Apply Now <i className="far fa-arrow-right"></i>
                    </button>
            </div>      
        );
    }
}

export default Overview;