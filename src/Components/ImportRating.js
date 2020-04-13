import React, { Component } from 'react';
import DisplayRating from './DisplayRating';


class ImportRating extends Component {
     
    // handleEditButton = () => {
    //     this.props.handleEditFAQ()
    //     this.props.changeEditUserStatus()
    // }
    
    displayFirstData = () => this.props.dataRating.map((value,index) => (
        <DisplayRating 
        handleEditRating={(faq) => this.props.handleEditRating(value)}
        changeEditRatingStatus={() => this.props.changeEditRatingStatus()}
            key = {index}
            fetchidRating = {value.idRating}
            fetchbestRating = {value.bestRating}
            fetchratingCount = {value.ratingCount}
            fetchratingValue = {value.ratingValue}
            fetchImage = {value.image}
            fetchName = {value.name}
            fetchDescription = {value.description}
            
        />
      )) 
    
      
    render() {
  
        return (
                <div className="col-12 ">
                    <header className="header-markup">
                    <h1>Schema Rating</h1>
                    </header>
                    {/* {this.displayEditForm()} */}

                <div className="form-group inside border border-primary bg-dark" >
                <pre>
                    <span>&lt;script type="application/ld+json"&gt;</span> <br/>
                    <span>&#123;</span> <br></br>
                    <span>    "@context": "https://schema.org",</span> <br/>
                    <span>    "@type": "CreativeWorkSeries",</span> <br/>
                    <span>    "aggregateRating":</span>
                    {this.displayFirstData()}
                   
                    <br/><span>&#125;</span><br/>
                    <span>&lt;/script&gt;</span><br/>
              </pre>
             
              </div>
        </div>
              
          
        );
    }
}

export default ImportRating;
