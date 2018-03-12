import React, { Component } from 'react';
import './Home.css';
import { Parallax } from 'react-scroll-parallax';

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="section section1">
          <p>GARETH LOWRIE.</p>
        </div>
        <Parallax
          className="custom-class"
          offsetXMax={-20}
          offsetXMin={0}
          slowerScrollRate
          tag="figure"
          styleInner={{"backgroundColor": "grey"}}
          styleOuter={{"backgroundColor": "black"}}
        >
          <div className="section section2">

          </div>
        </Parallax>

        <Parallax
          className="custom-class"
          offsetXMax={20}
          offsetXMin={0}
          slowerScrollRate
          tag="figure"
          styleInner={{"backgroundColor": "pink"}}
          styleOuter={{"backgroundColor": "black"}}
        >
          <div className="section section3">

          </div>
        </Parallax>

        <Parallax
          className="custom-class"
          offsetXMax={-20}
          offsetXMin={0}
          slowerScrollRate
          tag="figure"
          styleInner={{"backgroundColor": "lightblue"}}
          styleOuter={{"backgroundColor": "black"}}
        >
          <div className="section section4">

          </div>
        </Parallax>
        <div className="section section5">
          
        </div>
      </div>
    );
  }
}

export default Home;
