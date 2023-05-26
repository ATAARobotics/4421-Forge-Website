import {Link} from 'react-router-dom';
import './Sponsors.css'

function SponsorCard(props) {

    return(
        <div class="SponsorCard">
            <Link to={props.SponsorLink} target={props.SponsorLink === '#' ? '_self' : '_blank'}>
                <img src={props.ImgSrc} alt={props.SponsorName} class="SponsorImg" />
            </Link>
        </div>
    );
}

export default SponsorCard;

// ImgSrc, SponsorName, SponsorLink