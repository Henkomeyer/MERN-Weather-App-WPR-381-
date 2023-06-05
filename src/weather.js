import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Weather({data, ChangeMetric, metric}){
    let description = "sunny"
    if(data.description){
        description = data.description
    }
        switch(description) 
        {
            case 'clear sky': return(
                <div id="weather">
                    <div id="location">
                        <h2 id="location">{data.location}</h2>
                    </div>
                    <div id="maxTemp">
                        <h3>{(metric === 'C')?Math.round(parseFloat(data.maxTemp)-275, 2):Math.round((parseFloat(data.maxTemp)-275)* 1.8 + 32, 2)}{metric}</h3>
                    </div>
                    <div id = "minTemp">
                        <h3>{(metric === 'C')?Math.round(parseFloat(data.minTemp)-275, 2):Math.round((parseFloat(data.minTemp)-275)* 1.8 + 32, 2)}{metric}</h3>
                    </div>
                    <div id="icon">
                        <div id="weather-icon" ><FontAwesomeIcon icon="fa-light fa-sun" /></div>
                    </div>
                    <div id="description">
                        <h3>{description}</h3>
                    </div>
                        <button onClick={()=>{ChangeMetric()}}>{metric}</button>
                </div>
            
            );
            case 'scattered clouds': return(
                <div id="weather">
                <div id="location">
                    <h2 id="location">{data.location}</h2>
                </div>
                <div id="maxTemp">
                    <h3>{(metric === 'C')?Math.round(parseFloat(data.maxTemp)-275, 2):Math.round((parseFloat(data.maxTemp)-275)* 1.8 + 32, 2)}{metric}</h3>
                </div>
                <div id = "minTemp">
                    <h3>{(metric === 'C')?Math.round(parseFloat(data.minTemp)-275, 2):Math.round((parseFloat(data.minTemp)-275)* 1.8 + 32, 2)}{metric}</h3>
                </div>
                <div id="icon">
                    <div id="weather-icon" ><FontAwesomeIcon icon="fa-regular fa-clouds" /></div>
                </div>
                <div id="description">
                    <h3>{description}</h3>
                </div>
                    <button onClick={()=>{ChangeMetric()}}>{metric}</button>
            </div>
            );
            case 'snow': return(
                <div id="weather">
                <div id="location">
                    <h2 id="location">{data.location}</h2>
                </div>
                <div id="maxTemp">
                    <h3>{(metric === 'C')?Math.round(parseFloat(data.maxTemp)-275, 2):Math.round((parseFloat(data.maxTemp)-275)* 1.8 + 32, 2)}{metric}</h3>
                </div>
                <div id = "minTemp">
                    <h3>{(metric === 'C')?Math.round(parseFloat(data.minTemp)-275, 2):Math.round((parseFloat(data.minTemp)-275)* 1.8 + 32, 2)}{metric}</h3>
                </div>
                <div id="icon">
                    <div id="weather-icon" ><FontAwesomeIcon icon="fa-thin fa-snowflake" /></div>
                </div>
                <div id="description">
                    <h3>{description}</h3>
                </div>
                    <button onClick={()=>{ChangeMetric()}}>{metric}</button>
            </div>
            );
            case 'supermoon': return(
                <div id="weather">
                <div id="location">
                    <h2 id="location">{data.location}</h2>
                </div>
                <div id="maxTemp">
                    <h3>{(metric === 'C')?Math.round(parseFloat(data.maxTemp)-275, 2):Math.round((parseFloat(data.maxTemp)-275)* 1.8 + 32, 2)}{metric}</h3>
                </div>
                <div id = "minTemp">
                    <h3>{(metric === 'C')?Math.round(parseFloat(data.minTemp)-275, 2):Math.round((parseFloat(data.minTemp)-275)* 1.8 + 32, 2)}{metric}</h3>
                </div>
                <div id="icon">
                    <div id="weather-icon" ><FontAwesomeIcon icon="fa-thin fa-moon-stars" /></div>
                </div>
                <div id="description">
                    <h3>{description}</h3>
                </div>
                    <button onClick={()=>{ChangeMetric()}}>{metric}</button>
            </div>
            );
            case 'rain': return(
                <div id="weather">
                <div id="location">
                    <h2 id="location">{data.location}</h2>
                </div>
                <div id="maxTemp">
                    <h3>{(metric === 'C')?Math.round(parseFloat(data.maxTemp)-275, 2):Math.round((parseFloat(data.maxTemp)-275)* 1.8 + 32, 2)}{metric}</h3>
                </div>
                <div id = "minTemp">
                    <h3>{(metric === 'C')?Math.round(parseFloat(data.minTemp)-275, 2):Math.round((parseFloat(data.minTemp)-275)* 1.8 + 32, 2)}{metric}</h3>
                </div>
                <div id="icon">
                    <div id="weather-icon"><FontAwesomeIcon icon="fa-thin fa-cloud-rain" /></div>
                </div>
                <div id="description">
                    <h3>{description}</h3>
                </div>
                    <button onClick={()=>{ChangeMetric()}}>{metric}</button>
            </div>
            );
            case 'mist': return(
                <div id="weather">
                <div id="location">
                    <h2 id="location">{data.location}</h2>
                </div>
                <div id="maxTemp">
                    <h3>{(metric === 'C')?Math.round(parseFloat(data.maxTemp)-275, 2):Math.round((parseFloat(data.maxTemp)-275)* 1.8 + 32, 2)}{metric}</h3>
                </div>
                <div id = "minTemp">
                    <h3>{(metric === 'C')?Math.round(parseFloat(data.minTemp)-275, 2):Math.round((parseFloat(data.minTemp)-275)* 1.8 + 32, 2)}{metric}</h3>
                </div>
                <div id="icon">
                    <div id="weather-icon"><FontAwesomeIcon icon="fa-thin fa-cloud-fog" /></div>
                </div>
                <div id="description">
                    <h3>{description}</h3>
                </div>
                    <button onClick={()=>{ChangeMetric()}}>{metric}</button>
            </div>
            );
            case 'storm': return(
                <div id="weather">
                <div id="location">
                    <h2 id="location">{data.location}</h2>
                </div>
                <div id="maxTemp">
                    <h3>{(metric === 'C')?Math.round(parseFloat(data.maxTemp)-275, 2):Math.round((parseFloat(data.maxTemp)-275)* 1.8 + 32, 2)}{metric}</h3>
                </div>
                <div id = "minTemp">
                    <h3>{(metric === 'C')?Math.round(parseFloat(data.minTemp)-275, 2):Math.round((parseFloat(data.minTemp)-275)* 1.8 + 32, 2)}{metric}</h3>
                </div>
                <div id="icon">
                    <div id="weather-icon"><FontAwesomeIcon icon="fa-light fa-cloud-bolt" /></div>
                </div>
                <div id="description">
                    <h3>{description}</h3>
                </div>
                    <button onClick={()=>{ChangeMetric()}}>{metric}</button>
            </div>
            );
            default: return(
                <div id="weather">
                    <div id="location">
                        <h2 id="location">{data.location}</h2>
                    </div>
                    <div id="maxTemp">
                        <h5>max</h5>
                        <h3>{(metric === 'C°')?Math.round(parseFloat(data.maxTemp)-275, 2):Math.round((parseFloat(data.maxTemp)-275)* 1.8 + 32, 2)}{metric}</h3>
                    </div>
                    <div id = "minTemp">
                        <h5>min</h5>
                        <h3>{(metric === 'C°')?Math.round(parseFloat(data.minTemp)-275, 2):Math.round((parseFloat(data.minTemp)-275)* 1.8 + 32, 2)}{metric}</h3>
                    </div>
                    <div id="icon">
                        <div id="weather-icon"><FontAwesomeIcon icon="fa-regular fa-cloud-sun" /></div>
                    </div>
                    <div id="description">
                        <h3>{description}</h3>
                    </div>
                        <button onClick={()=>{ChangeMetric()}}>{(metric==='C°')?'F°':'C°'}</button>
                </div>
            );
        };  
    };
export default Weather
