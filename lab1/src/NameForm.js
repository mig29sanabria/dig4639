import React, { Component } from 'react';

class NameForm extends React.Component {
      name = "UserName";
      constructor(props) {
        super(props);
        this.state = {value: '', nameAvailable: false};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
        this.name = event.target.value;
      }

      handleSubmit(event) {
        this.setState({nameAvailable: true});
        event.preventDefault();
      }

      render() {
        return ( <div>
          {(this.state.nameAvailable)?<p>Hello!</p>:<form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>}
           </div>
        );
      }
    }
    export default NameForm;
