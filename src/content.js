const Content= ({data, location, setNewLocation, ChangeLocation})=>{
    return(
        <div id='content'>
            <div>
                {location}
                <ul>
                    <li>{data.location}</li>
                    <li>{data.max}</li>
                    <li>{data.min}</li>
                    <li>{data.humidity}</li>
                </ul>
            </div>
            <form onSubmit={(e)=>{ChangeLocation(e)}}>
                <ul>
                    <li>
                        <label htmlFor="nextLocation">Change Location</label>
                    </li>
                    <li>
                        <input type="text" name="nextLocation" id="nextLocation"
                            onChange={(e) => {setNewLocation(e.target.value)}}
                        />
                    </li>
                    <li>
                        <button type="submit">Render</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default Content;