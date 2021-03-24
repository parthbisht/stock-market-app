import React, { Component } from 'react'

export default class cards extends Component {

    constructor(props) {
        super(props)
        this.state ={
          data: {}
        }
      }
   
renderCard = (com) => {
    const comp_data = this.props.companyData[com];
    if(!comp_data) return;
    return (
        <div className="card col-4" style={{width: '18rem'}} key={com}>
         <div className="card-body">
            <h5 className="card-title">{comp_data["Name"]}</h5>
         </div>
             <ul className="list-group list-group-flush">
             <li className="list-group-item">Symbol: {comp_data["Symbol"]}</li>
             <li className="list-group-item">Market: {comp_data["MarketCapitalization"]}</li>
             <li className="list-group-item">Price: {comp_data["AnalystTargetPrice"]}</li>
             </ul>

</div>
    );
}

    render(){
    return (
      <div className="App">
              <div className="container">
                  <div className="row">
                    {this.props.company.map(this.renderCard)}
                  </div>
                </div>
        </div>
    );
    }  
}
  