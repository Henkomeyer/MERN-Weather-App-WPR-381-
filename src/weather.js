import Footer from './footer.js';
import './index.css';

function Weather({data, ChangeMetric, metric}){
    return(
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
                <h3>{data.description}</h3>
            </div>
                <button onClick={()=>{ChangeMetric()}}>{metric}</button>
        </div>
    );
};

function ChangeIcon({data, ChangeMetric, metric})
{
    switch(data.description) 
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
                <h3>{data.description}</h3>
            </div>
                <button onClick={()=>{ChangeMetric()}}>{metric}</button>
                <Footer/>
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
                <h3>{data.description}</h3>
            </div>
                <button onClick={()=>{ChangeMetric()}}>{metric}</button>
                <Footer/>
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
                <h3>{data.description}</h3>
            </div>
                <button onClick={()=>{ChangeMetric()}}>{metric}</button>
                <Footer/>
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
                <h3>{data.description}</h3>
            </div>
                <button onClick={()=>{ChangeMetric()}}>{metric}</button>
                <Footer/>
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
                <h3>{data.description}</h3>
            </div>
                <button onClick={()=>{ChangeMetric()}}>{metric}</button>
                <Footer/>
        </div>
        );
    };  
};
export default Weather