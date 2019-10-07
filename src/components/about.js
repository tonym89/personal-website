import React, {Component} from 'react';
import '../App.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="page-section">
            <h1 className="portfolio-heading" id="about">About</h1>
            <p className="section-content">Hi, I’m Tony!  I am a London-based software engineer originally from Scotland.  My current focus is on the Javascript ecosystem and in particular React/React Native. I love building things and have taken both web and native mobile applications all the way from conception to production.  If you are looking for a freelancer, have an opportunity in React/React Native or simply want to taunt me about the Scotland football team's latest defeat, get in touch {' '}
            <a href="#contact" className="link">here</a>.</p>
            <br />
            <p className="section-content">I am proficient in the following technologies and am always striving to improve and expand my knowledge and skillset.</p>
            <br />
            <div className="container" >
            <div className="row justify-content-center">

                <div class="img-with-text">
                    <img src="images/javascript.png" alt="Javascript" width='75px'className="coding-icon" />
                    <p>Javascript</p>
                </div>

                <div class="img-with-text">
                    <img src="images/reactJs.png" alt="React" width='75px' className="coding-icon"/>
                    <p>React</p>
                </div>

                <div class="img-with-text">
                    <img src="images/reactNative.png" alt="React Native" width='75px'/>
                    <p>React Native</p>
                </div>

                <div class="img-with-text">
                    <img src="images/redux.png" alt="Redux" width='75px'/>
                    <p>Redux</p>
                </div>

                <div class="img-with-text">
                    <img src="images/node.png" alt="Node" width='75px'/>
                    <p>Node.js</p>
                </div>
                <div class="img-with-text">
                    <img src="images/rubyOnRails.png" alt="Ruby on Rails" width='75px'/>
                    <p>Ruby on Rails</p>
                </div>
                <div class="img-with-text">
                    <img src="images/html5.png" alt="HTML" width='75px'/>
                    <p>HTML/CSS</p>
                </div>
                <div class="img-with-text">
                    <img src="images/sql.svg" alt="SQL" width='75px'/>
                    <p>SQL</p>
                </div>
                <div class="img-with-text">
                    <img src="images/firebase.png" alt="Firebase" width='75px'/>
                    <p>Firebase</p>
                </div>
            </div>
            </div>

          </div>
        </div>
      </div>
    )
  };
};
