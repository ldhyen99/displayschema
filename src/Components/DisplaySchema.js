import React, { Component } from 'react';

class DisplaySchema extends Component {

    handleDeleteButton = (idFAQ) => {
        this.props.handleDeleteButton(idFAQ)
    }
    
    handleEditButton = () => {
        this.props.changeEditUserStatus()
        this.props.handleEditFAQ()
    }
    render() {
        
        return (
            <div className="schemeChild"> 
            <pre>
                <span>	,&#123;</span> <br></br>

                <span>       "@type": "Question",</span><br/>
                <span>           "name": "{this.props.fetchName}",</span><br/>
                <span>           "acceptedAnswer": </span><span>&#123;</span><br/>
                <span>            "@type": "Answer",</span><br/>
                <span className="setWidth">       "text": "{this.props.fetchText}"</span><br/>
                <span>           &#125;</span><br/>
                <span>   &#125;</span><br/>
            </pre>
                 <div className="btn-group">
                             <div className="btn btn-warning edit" onClick={() => this.handleEditButton()}>
                                <i className="fa fa-edit">Edit</i></div> 
                            <div className="btn btn-danger delete">
                                <i className="fa fa-delete" onClick={(idFAQ)=>this.handleDeleteButton(this.props.fetchId)}>Delete</i></div>
        </div>
       </div>
        );
    }
}

export default DisplaySchema;