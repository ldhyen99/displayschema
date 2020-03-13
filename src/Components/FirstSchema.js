import React, { Component } from 'react';

class FirstSchema extends Component {
   
    handleEditButton = () => {
        this.props.changeEditUserStatus()
        this.props.handleEditFAQ()
    }
    render() {
        return (
            <div>
                <span>	&#123;</span> <br></br>

                <span>       "@type": "Question",</span><br/>
                <span>           "name": "{this.props.fetchName}",</span><br/>
                <span>           "acceptedAnswer": </span><span>&#123;</span><br/>
                <span>            "@type": "Answer",</span><br/>
                <span className="setWidth">       "text": "{this.props.fetchText}"</span><br/>
                <span>           &#125;</span><br/>
                <span>   &#125;</span><br/>
                <div className="btn btn-warning edit" onClick={() => this.handleEditButton()} >
                <i className="fa fa-edit">Edit</i>
                </div> 
                
        
                            </div>
                        );
                    }
}

export default FirstSchema;