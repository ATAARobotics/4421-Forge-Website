import {Link} from 'react-router-dom';

function SponsorCard(props) {
    return(
        <div class="SponsorCard">
            <div>
                <Link to={props.SponsorLink} target="_blank" class="SponsorLink">
                    <img src={require(props.ImgSrc)} alt={props.SponsorName} class="SponsorImg" />
                </Link>
            </div>
        </div>
    );
}

export default SponsorCard;
// ImgSrc, SponsorName, SponsorLink