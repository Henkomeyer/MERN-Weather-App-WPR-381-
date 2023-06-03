
function Footer({data}) {
    switch (data.description) 
    {
        case 'sunny':
            return
        (<footer>
        <h1>Remember to wear sunscreen.</h1>
        </footer>)
        case 'stormy':
            return
        (<footer>
        <h1>Take an umbrella!</h1>
        </footer>)
        case 'cloudy':
            return
        (<footer>
        <h1>Perhaps take a jacket.</h1>
        </footer>)
        case 'snowy':
            return
        (<footer>
        <h1>Wear something warm.</h1>
        </footer>)
        case 'superoon': 
        return
        (<footer>
        <h1>Be on the lookout for wearwolves!</h1>
        </footer>)
        default: 
        return
        (<footer>
            <h1>Take a look at the weather.</h1>
        </footer>)
    
    };
}

export default Footer;