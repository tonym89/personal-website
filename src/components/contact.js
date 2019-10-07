import React, {Component} from 'react';
import axios from 'axios';
import '../App.css';

export default class Contact extends Component {

  render() {
    return (
      <div>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Acme Web Design</title>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />
      </head>
        <div className="container">
          <div className="page-section" >
            <h1 className="portfolio-heading" id="contact">Contact</h1>



                <div class="contact-form">
                <form action="https://mailthis.to/tonymcshane89@gmail.com"
                method="POST">
                    <p>
                      <input type="text" name="name" placeholder="NAME"/>
                    </p>
                    <p>
                      <input type="email" name="_replyto" placeholder="EMAIL"/>
                    </p>
                    <p class="full">
                      <textarea type="message" name="message" placeholder="MESSAGE"rows="3"></textarea>

                    </p>

                    <p class="full">
                      <input type="submit" value="SEND" />
                    </p>

                    </form>

                </div>



          </div>
        </div>
      </div>
    )
  };
};
