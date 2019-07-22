import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

class Faqs extends Component {
    render() {
        return (
            <div className="Faqs" id="FAQs">
                <h1>FAQs</h1>
                <Collapsible trigger="Start here" className="Collapse">
                    <p>This is the collapsible content. It can be any element or React component you like.</p>
                    <p>It can even be another Collapsible component. Check out the next section!</p>
                </Collapsible>
                <h2><strong>Who should apply for internship positions?</strong></h2>
                <h3>Rising juniors and rising seniors, who are currently enrolled at an accredited college/university and legally eligible to work in the U.S. may apply.</h3>

                <h2><strong>Who should apply for associate positions?</strong></h2>
                <h3>If you are a recent graduate of a college/university and are legally eligible to work in the U.S., you may apply.</h3>

                <h2><strong>Are interns provided with housing?</strong></h2>
                <h3>Interns are responsible for securing their own housing. However, the Campus team will provide suggestions where students can search for housing opportunities.</h3>

                <h2><strong>What “non-work" opportunities are there?</strong></h2>
                <h3>Throughout the internship there are various planned events for interns to network and receive mentoring. For example, the NBCU TECHWomen Speed Mentoring event which allows MediaTech’s female interns to receive advice and talk to women in technology fields throughout the company.</h3>

                <h2><strong>What opportunities are there after the intern program?</strong></h2>
                <h3>The intern program provides many contacts and allows students to grow their network. It also serves as a direct line into our associates program. Interns are able to apply and interview for the associates program while completing their internship.</h3>

                <h2><strong>What is the difference between the Intern and Associate’s program?</strong></h2>
                <h3>Interns are currently enrolled college students while Associates are recent graduates. The associates program is also rotational and 2 years long while the intern program is only 10 weeks in one location. The associates program is an early career development path that leads to a job at NBCU.</h3>
            </div>
        );
    }
}

export default Faqs;