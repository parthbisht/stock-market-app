import React, { Component } from 'react'
export default class stocktable extends Component {

  constructor(props) {
    super(props)
    this.state ={
      data: {}
    }
  }

  componentDidMount(){

  

 
  }
  renderCard = (com) => {
    const comp_data = this.props.companyData[com];
    if(!comp_data) return;
    return (
    <tr key={com}>
    <td>{comp_data["Name"]}</td>
    <td>{comp_data["Symbol"]}</td>
    <td>{comp_data["MarketCapitalization"]}</td>
    <td>{comp_data["AnalystTargetPrice"]}</td>

    <td><button type="button" class="btn btn-info">Save Data</button></td>
    </tr>
        );
    }

  render(){
    return (
      <div className="container">
                       <table className=" table">
        <thead className="thead-light">
          <tr>
            <th scope="col">Company Name</th>
            <th scope="col">Stock Symbol</th>
            <th scope="col">Market Capital</th>
            <th scope="col">Current price</th>
            <th></th>

          </tr>
        </thead>
        <tbody>
        {this.props.company.map(this.renderCard)}
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#">Previous</a></li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">Next</a></li>
        </ul>
      </nav>
        </div>
    );
    }
  }
  
