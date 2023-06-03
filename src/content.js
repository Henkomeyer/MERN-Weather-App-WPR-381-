import "./index.css";
import Loading from "./loading";
import Weather from "./weather";
import Error from "./error";

function Content({data, setNewLocation, ChangeLocation, isLoading, error, ChangeMetric, metric}){
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
                        <label htmlFor="nextLocation">Search Location</label>
                    </li>
                    <li>
                        <input type="text" name="nextLocation" id="nextLocation" placeholder="Enter Latitude & Longitude"
                            onChange={(e) => {setNewLocation(e.target.value)}}
                        />
                        <button type="submit">Search</button>
                    </li>
                </ul>
            </form>            
        </div>
    )
}

export default Content;