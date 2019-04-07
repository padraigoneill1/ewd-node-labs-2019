import React, { Component } from 'react';

export default class Form extends Component {
    state = { title: '', link: ''};

    handleTitleChange = (e) =>  this.setState({title: e.target.value});
    handleLinkChange = (e) => this.setState({link: e.target.value});

    handleSubmit = (e) => {
        e.preventDefault();
        let title = this.state.title.trim();
        let link = this.state.link.trim();
        if (!title) {
            return;
        }
        this.props.handleAdd(title,link);
        this.setState({title: '', link: ''});
    }

    render() {
        return (
           
        <form style={{marginTop: '30px'}}>
           <h3>Add a news item</h3>
           <div className="form-group">
              <input type="text"
                className="form-control"
                value={this.state.title}
                placeholder="Title" onChange={this.handleTitleChange}></input>
           </div>
           <div className="form-group">
               <input type="text"
                 className="form-control"
                 value={this.state.link}
                placeholder="Link" onChange={this.handleLinkChange}></input>
           </div>
           <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Add</button>
        </form>
        
        
        );
    }
}
