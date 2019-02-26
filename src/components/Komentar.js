import React, {Component} from 'react';

export default class Komentar extends Component {
    state = {
        obrisano: false
    }

  obrisi = () => {
      this.setState({
          obrisano: true
      })
  }

    render() {
        if (this.state.obrisano) return null;
        return (
            <div>
            <p>
            {this.props.ime}: "<i>{this.props.utisak}</i>"
             <button onClick={this.obrisi}>x</button>
             </p>           
        </div>
        )
    }
    
}