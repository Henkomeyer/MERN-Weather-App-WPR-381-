import "./index.css";
import Loading from "./loading";
import Weather from "./weather";
import Error from "./error";

function Content({data, setNewZipcode, ChangeLocation, isLoading, error, ChangeMetric, metric, setCountrycode, countryCode}){
    return(
        <div id="content">
            <div id="container">
                {!isLoading&&!error&&<Weather data = {data} ChangeMetric={ChangeMetric} metric={metric}/>}
                {!isLoading&&error&&<Error error = {error}/>}
                {isLoading&&<Loading/>}
            </div>
            <form onSubmit={(e)=>{ChangeLocation(e)}}>
                <ul>
                    <li>
                        <label htmlFor="zipCode">Zip Code</label>
                    </li>
                    <li>
                        <input type="number" id="zipCode" name="zipCode" min="1" max="99950"
                        onChange={(e) => {setNewZipcode(e.target.value)}}/>
                        <input type="text" name='countryCode' id='countryCode' value={countryCode}
                            onChange={(e) => {setCountrycode(e.target.value)}}/>
                        <button type="submit">Search</button>
                    </li>
                </ul>
            </form>            
        </div>
    )
}

export default Content;