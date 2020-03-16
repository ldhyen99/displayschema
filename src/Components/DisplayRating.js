import React, { Component } from 'react';


class ImportSchema extends Component {
    handleEditButtonRating = () => {
        this.props.changeEditRatingStatus()
        this.props.handleEditRating()
    }
    render() {
  
        return (
            <div className="schemeChild"> 
            <pre>
                <span>	&#123;</span> <br></br>

                <span>       "@type": "AggregateRating",</span><br/>
                <span>        "bestRating": "{this.props.fetchbestRating}",</span>
                <span> "ratingCount": "{this.props.fetchratingCount}",</span>
                <span>  "ratingValue": "{this.props.fetchratingValue}"&#125;,</span><br/>
                <span className="setWidth"> "image": "{this.props.fetchImage}",</span><br/>
                <span className="setWidth"> "name": "{this.props.fetchName}",</span><br/>
                <span className="setWidth"> "description": "{this.props.fetchDescription}"</span><br/>
                <span>   &#125;</span><br/>
            </pre>
                 <div className="btn-group" >
                             <div className="btn btn-warning edit" onClick={()=>this.handleEditButtonRating()}>
                                <i className="fa fa-edit">Sửa</i></div> 
                            </div>
       </div>
      
        );
    }
}

export default ImportSchema;