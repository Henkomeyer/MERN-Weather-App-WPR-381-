import Footer from './footer.js';
import './index.css';

function Weather({data, ChangeMetric, metric}){
    let description = "sunny"
    if(data.description){
        description = data.description
    }
        switch(description) 
        {
            case 'sunny': return(
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
                        <div id="weather-icon"></div>
                    </div>
                    <div id="description">
                        <h3>{description}</h3>
                    </div>
                        <button onClick={()=>{ChangeMetric()}}>{metric}</button>
                </div>
            
            );
            case 'cloudy': return(
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
                    <div id="weather-icon"></div>
                </div>
                <div id="description">
                    <h3>{description}</h3>
                </div>
                    <button onClick={()=>{ChangeMetric()}}>{metric}</button>
            </div>
            );
            case 'snowy': return(
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
                    <div id="weather-icon"></div>
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
                    <div id="weather-icon"></div>
                </div>
                <div id="description">
                    <h3>{description}</h3>
                </div>
                    <button onClick={()=>{ChangeMetric()}}>{metric}</button>
            </div>
            );
            case 'stormy': return(
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
                    <div id="weather-icon"></div>
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
                        <div id="weather-icon">ICON</div>
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
