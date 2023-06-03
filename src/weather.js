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
    )
}

export default Weather