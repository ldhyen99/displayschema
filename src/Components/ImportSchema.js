import React, { Component } from 'react';
import DisplaySchema from './DisplaySchema';
import FirstSchema from './FirstSchema';


class ImportSchema extends Component {
   

    handleEditButton = () => {
        this.props.handleEditFAQ()
        this.props.changeEditUserStatus()
    }
    displayData = () => this.props.dataFAQProps.map((value,index) => (
        <DisplaySchema 
        handleEditFAQ={(faq) => this.props.handleEditFAQ(value)}
        changeEditUserStatus={() => this.props.changeEditUserStatus()}
        handleDeleteButton={(idFAQ) => this.props.handleDeleteButton(idFAQ)}
            key = {index}
            fetchId = {value.faqId}
            fetchName = {value.name}
            fetchText = {value.text}
            
        />
      )) 
    displayFirstData = () => this.props.handleFirstSchema.map((value,index) => (
        <FirstSchema 
        handleEditFAQ={(faq) => this.props.handleEditFAQ(value)}
        changeEditUserStatus={() => this.props.changeEditUserStatus()}
        handleDeleteButton={(idFAQ) => this.props.handleDeleteButton(idFAQ)}
            key = {index}
            fetchId = {value.faqId}
            fetchName = {value.name}
            fetchText = {value.text}
            
        />
      )) 
    
   
    render() {
        return (
            <div className="col-9 inside" >
                <div className="form-group">
                <pre>
                    <span>&lt;script type="application/ld+json"&gt;</span> <br/>
                    <span>	&#123;</span> <br></br>
                    <span>    "@context": "https://schema.org",</span> <br/>
                    <span>    "@type": "FAQPage",</span> <br/>
                    <span>    "mainEntity":</span>
                    <span> &#91;</span> 

                    {/* <span>	&#123;</span> <br></br>

                <span>       "@type": "Question",</span><br/>
                <span>           "name": "{this.props.fetchName}",</span><br/>
                <span>           "acceptedAnswer": </span><span>&#123;</span><br/>
                <span>            "@type": "Answer",</span><br/>
                <span className="setWidth">       "text": "{this.props.fetchText}"</span><br/>
                <span>           &#125;</span><br/>
                <span>   &#125;</span><br/>
                <div className="btn btn-warning edit" onClick={() => this.handleEditButton()} >
                <i className="fa fa-edit">Edit</i>
                </div>  */}
                {this.displayFirstData()}
                {this.displayData()}

                    <span>&#93;</span>
                    <span>&#125;</span><br/>
                    <span>&lt;/script&gt;</span><br/>
              </pre>
             
              </div>
        </div>
        
        );
    }
}

export default ImportSchema;