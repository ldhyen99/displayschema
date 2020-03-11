import React, { Component } from 'react';
import DisplaySchema from './DisplaySchema';


class ImportSchema extends Component {
    displayData = () => this.props.dataFAQProps.map((value,key) => (
        <DisplaySchema 
        handleDeleteButton={(idFAQ) => this.props.handleDeleteButton(idFAQ)}
            key ={key}
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
                    <span>&#123;</span> <br/>
                    {this.displayData()}
                  
                    <span>&#125;</span> 
                    <span>&#93;</span><br/>
                    <span>&#125;</span><br/>
                    <span>&lt;/script&gt;</span><br/>
              </pre>
              </div>
        </div>
        
        );
    }
}

export default ImportSchema;