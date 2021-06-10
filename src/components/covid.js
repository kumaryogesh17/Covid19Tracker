import React, {useEffect,useState} from 'react'

const Covid = () => {

  const [data, setData] = useState([]);
   const getCovidData = async() => {
       try{
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise[0]);
        setData(actualData.statewise[0]);
       } catch(err){
         console.log(err);
       }
        
   }


  useEffect(() => {
    getCovidData();
   
  }, []);

  return (
    <>
    <section>
      <h1>Covid 19 Tracker</h1>
      <h2>Fetching Data from ( https://api.covid19india.org )</h2>

      <ul>
        <li className ="card">
            <div className="card_main">
              <div className="card_inner">
                <p className="card_name"> <span> </span>Country</p>
                <p className="total_small_card">India</p>
              </div>
            </div>
        </li>
        <li className ="card" >
            <div className="card_main">
              <div className="card_inner">
                <p className="card_name"> <span>Total</span>Recovered</p>
                <p className="total_small_card">{data.recovered}</p>
              </div>
            </div>
        </li>
        <li className ="card">
            <div className="card_main">
              <div className="card_inner">
                <p className="card_name"> <span>Total</span>ConfirmedCases</p>
                <p className="total_small_card">{data.confirmed}</p>
              </div>
            </div>
        </li>
        <li className ="card">
            <div className="card_main">
              <div className="card_inner">
                <p className="card_name"> <span>Total</span>Death</p>
                <p className="total_small_card">{data.deaths}</p>
              </div>
            </div>
        </li>
        <li className ="card">
            <div className="card_main">
              <div className="card_inner">
                <p className="card_name"> <span>Total</span>ActiveCase</p>
                <p className="total_small_card">{data.active}</p>
              </div>
            </div>
        </li>
        <li className ="card">
            <div className="card_main">
              <div className="card_inner">
                <p className="card_name"> <span>Last</span>Updated</p>
                <p className="total_small_card">{data.lastupdatedtime}</p>
              </div>
            </div>
        </li>
      </ul>
      </section>
    </>
  )
}

export default Covid
