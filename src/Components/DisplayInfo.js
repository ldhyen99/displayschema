import React, { Component } from 'react';

class DisplayInfo extends Component {
    
    render() {   
           
        return (
                <pre>
                    <span>&lt;h3&gt;</span>
                    {this.props.fetchName}
                    <span>&lt;/h3&gt;</span> <br/>
                    <span>&lt;ul&gt;</span> <br/>
                    <span className="setWidth" >&lt;li&gt;{this.props.fetchText}</span> 
                    <span>&lt;/li&gt;</span> <br/>
                    <span>&lt;/ul&gt;</span> <br/>
                   

              </pre>
             
              
        );
    }
}

export default DisplayInfo;