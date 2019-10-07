import React, {Component} from 'react';
import '../App.css';

export default class PortfolioCard extends Component {
  render() {
    return (

        <div className="blog-card spring-fever" style={{backgroundImage: `url(images/${this.props.image})`,}}>
            <div class="gradient-overlay"></div>
            <div class="color-overlay"></div>
            <div className="card-info" id="card-info">
              <h3 className="project-title">
                {this.props.title}
              </h3>
              <p className="project-description">{this.props.description}</p>
            </div>
        </div>
        )
      };
    };
