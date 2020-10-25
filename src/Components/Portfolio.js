import React, { Component } from 'react';
import placeholder from "../assets/img/placeholder.png"
class Portfolio extends Component {
  render() {

    if(this.props.data){
        var works = this.props.data.works.map(function(work){
        var projectImage = work.image ? 'images/portfolio/'+work.image : 'images/'+placeholder;
        return <div key={work.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={work.url} title={work.title} target="_blank"  rel="noopener noreferrer">
               <img alt={work.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{work.title}</h5>
                     <p>{work.category}</p>
                  </div>
                </div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">
      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Works</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {works}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
