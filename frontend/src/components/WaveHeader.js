import React from 'react';
import Svg, { Path } from 'react-native-svg'


const WaveHeader = () => {
    return (
        <Svg width="100%" height="100%" viewBox='130 0 360 220'  >
            <Path fill="#0099ff" fill-opacity="1" d="M0,224L60,202.7C120,181,240,139,360,112C480,85,600,75,720,101.3C840,128,960,192,1080,213.3C1200,235,1320,213,1380,202.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" style="--darkreader-inline-fill:#007acc;" data-darkreader-inline-fill=""></Path>
        </Svg>
    )
}

export default WaveHeader;