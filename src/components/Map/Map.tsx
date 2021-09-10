import React from 'react';

import { Container } from './style';

const Map: React.FC = () => {
    return (
        <Container >
            <iframe className='maps' scrolling="no" id="gmap_canvas" src="https://maps.google.com/maps?width=1100&amp;height=400&amp;hl=en&amp;q=R.%20Rafael%20Uch%C3%B4a,%2090%20e%20-%20Massaranduba%20Salvador+(Instituto%20Educar)&amp;t=&amp;z=21&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

            <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=c1494bafa5405e9c68f1e4d0fac7a6fc50ae02b0'></script>
        </Container>
    )
}

export default Map;