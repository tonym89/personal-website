import React, {Component} from 'react';
import PortfolioCard from './portfolioCard'
import '../App.css';

export default class Portfolio extends Component {
  render() {
    return (
      <div>
          <div className="page-section " style={{backgroundColor: '#F9F9F9', color: "#fff", width: '100vw' }}>
            <h1 className="portfolio-heading" id="portfolio">Portfolio</h1>
            <p className="portfolio-subheading" style={{textAlign: 'center', marginBottom:"40px"}}>A selection of my work</p>
              <div className="container" >
              <div className="row justify-content-center">
                  <div className="justify-content-center">
                    <PortfolioCard title="Coin Outlet" description="Cryptocurrency brokerage" image="coinOutlet.png"/>
                  </div>
                  <div className="justify-content-center">
                    <PortfolioCard title="Poker Dex" description="Results Tracking Mobile App" image="pokerDex.png"/>
                  </div>
                  <div className="justify-content-center">
                    <PortfolioCard title="Adrenabid" description="Lowest Unique Bid Auctionplace" image="adrenabid.png"/>
                  </div>
                  <div className="justify-content-center">
                    <PortfolioCard title="Tony McShane" description="Personal Website" image="tonyMcShane.png"/>
                  </div>
              </div>
              </div>
          </div>
        </div>
    )
  };
};
