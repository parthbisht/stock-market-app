import React, { useEffect,useState } from 'react'
import Stockrow from './stocktable'
import Cards from './cards'
function Home(props) {
  const company =['GOOG','AMZN','FB'];
  const [comp_arr,setCompData] = useState({});
  useEffect(() => {
    const compPromiseArr = [];
    const comp_new = {};
    company.forEach((com) => {
      const url=`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${com}&apikey=TW1NG6RDEZNPJ9PQ`
      compPromiseArr.push(fetch(url)
      .then((response) => response.json()));
      });
      Promise.all(compPromiseArr).then((data) =>{
        company.forEach((com,idx) =>{
          comp_new[com] = data[idx];
        });
        setCompData(comp_new);  
      })
  },[])
    return (
      <div className=" ">
             <div className="jumbotron">
                 <h1 className="display-4  d-flex justify-content-center">STOCK MARKET APP</h1>
                      <div className="container input-group mt-5" style={{width: '30rem'}}>
                          <input  type="text" className="form-control"  aria-label="Recipient's username" aria-describedby="basic-addon2" />
                             <div className="input-group-append" >
                                 <button className="btn btn-outline-secondary"  type="button">Search</button>
                             </div>
                      </div>   
             </div>
           
<br/>

    <Cards company={company} companyData={comp_arr}></Cards>
    <br/>
    <Stockrow company={company} companyData={comp_arr}></Stockrow>
      
      </div>
    );
  }
  
  export default Home;