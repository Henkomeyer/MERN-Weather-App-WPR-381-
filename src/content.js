import "./index.css";


function Content({data, location, setNewLocation, ChangeLocation}){
    return(
        <div id="content">
            <div id="temperature">
                <h2 id="location">{data.location}</h2>
                <h3>{data.max}</h3>
                <h3>{data.min}</h3>
                <h3>{data.humidity}</h3>
            </div>
            <div id="description">
                <ul>
                    <li>{data.temperature}</li>
                    <li>{data.description}</li>
                </ul>
            </div>
            <div id="weather-icon"></div>
  
            <form onSubmit={(e)=>{ChangeLocation(e)}}>
                <ul>
                    <li>
                        <label htmlFor="nextLocation">Search Location</label>
                    </li>
                    <li>
                        <input type="text" name="nextLocation" id="nextLocation"
                            onChange={(e) => {setNewLocation(e.target.value)}}
                        />
                        <button type="submit">Search</button>
                    </li>
                </ul>
            </form>
  
            <div id="unit-toggle">
                <input type="radio" id="celsius" name="unit" checked onChange={()=>{console.log('change metric')}}/>
                <label htmlFor="celsius">Celsius</label>
                <input type="radio" id="fahrenheit" name="unit"/>
                <label htmlFor="fahrenheit">Fahrenheit</label>
            </div>
            
        </div>
    )
}

export default Content;