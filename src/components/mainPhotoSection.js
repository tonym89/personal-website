import React, {Component} from 'react';
import '../App.css';

export default class MainPhotoSection extends Component {
  render() {
    return (
        <div className="MainPhotoSection" style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundImage: 'url(images/darkenedSepia.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: "100vh",
          justifyContent: 'center',
          textAlign: 'center',

        }} >

          <h1 className="Name">Tony McShane</h1>
          <h2 style={{textAlign: 'center',
                      verticalAlign: 'middle',
                      fontSize: 16,
                      fontWeight: 400,
                      letterSpacing: '0.3em',
                      position: 'relative',
                      opacity: .75,
                      textTransform: 'uppercase',
                      marginBottom: 40
          }}>
            Software Developer
          </h2>
          <div style={{flexDirection: 'row'}}>
            <a href="#about" className="Btn">About</a>
            <a href="#contact" className="Btn">Contact</a>
          </div>
        </div>

    )
  }
};
