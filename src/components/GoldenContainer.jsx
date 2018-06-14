import React from 'react';

import GoldenRatioThreeCellLayout from './layouts/GoldenRatioThreeCellLayout'
import './GoldenContainer.css'

class GoldenContainer extends React.Component {
    render() {
        return <div className ='golden-container'>
          <div className="golden-frame">
            <GoldenRatioThreeCellLayout />
          </div>
        </div>
    }
}

export default GoldenContainer
