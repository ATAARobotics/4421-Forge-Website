import React from 'react'
import './Sponsors.css'
import SponsorCard from './SponsorCard.js'
import Peloton from '../assests/Sponsors/peloton.png'
import Embark from '../assests/Sponsors/embark.svg'
import AnalyticEngineering from '../assests/Sponsors/analytic-engineering.png'
import Brandt from '../assests/Sponsors/brandt.svg'
import Brentwood from '../assests/Sponsors/brentwood.png'
import Hatch from '../assests/Sponsors/hatch.png'
import Launchcode from '../assests/Sponsors/launchcode.svg'
import MIRAI from '../assests/Sponsors/mirai.svg'
import MRL from '../assests/Sponsors/mrl.png'
import Shing from '../assests/Sponsors/shing.png'
import SignatureSeismic from '../assests/Sponsors/signature-seismic.jpg'
import SurerusMurphy from '../assests/Sponsors/surerus-murphy.png'
import Telus from '../assests/Sponsors/telus.png'
import Tetranex from '../assests/Sponsors/tetranex.jpg'
import ValentineVolvo from '../assests/Sponsors/valentine-volvo.svg'

const Sponsors = () => {
  return (
    <div>
      <h1>Sponsors</h1>
      <div className="Sponsors">
        <SponsorCard
            ImgSrc={Peloton}
            SponsorName='Peleton'
            SponsorLink='https://www.peloton.com/'
        />

        <SponsorCard 
          ImgSrc={Embark}
          SponsorName='Embark'
          SponsorLink='https://embarktrucks.com'
        />

        <SponsorCard
            ImgSrc={AnalyticEngineering}
            SponsorName='Analytic Engineering'
            SponsorLink='https://analyticengineering.ca/'
        />

        <SponsorCard 
          ImgSrc={Brandt}
          SponsorName='Brandt'
          SponsorLink='#'
        />

        <SponsorCard
            ImgSrc={Brentwood}
            SponsorName='Brentwood'
            SponsorLink='#'
        />

        <SponsorCard
            ImgSrc={Hatch}
            SponsorName='Hatch'
            SponsorLink='https://www.hatch.com/'
        />

        <SponsorCard 
          ImgSrc={Launchcode}
          SponsorName='Launchcode'
          SponsorLink='https://lc.dev/'
        />

        <SponsorCard
            ImgSrc={MIRAI}
            SponsorName='MIRAI'
            SponsorLink='https://miraisecurity.com/'
        />

        <SponsorCard
            ImgSrc={MRL}
            SponsorName='MRL'
            SponsorLink='https://www.mrlsolutions.com/'
        />

        <SponsorCard 
          ImgSrc={Shing}
          SponsorName='Shing'
          SponsorLink='https://shingdigital.com/'
        />

        <SponsorCard
            ImgSrc={SignatureSeismic}
            SponsorName='Signature Seismic'
            SponsorLink='https://www.signatureseismic.com/'
        />

        <SponsorCard
            ImgSrc={SurerusMurphy}
            SponsorName='Surerus Murphy'
            SponsorLink='https://www.surerus-murphy.com/'
        />

        <SponsorCard 
          ImgSrc={Telus}
          SponsorName='Telus'
          SponsorLink='https://www.telus.com/en/'
        />

        <SponsorCard
            ImgSrc={Tetranex}
            SponsorName='Tetranex'
            SponsorLink='https://www.tetranex.com/'
        />

        <SponsorCard
            ImgSrc={ValentineVolvo}
            SponsorName='Valentine Volvo'
            SponsorLink='https://www.valentinevolvo.com/'
        />
      </div>
    </div>
    
  )
}

export default Sponsors