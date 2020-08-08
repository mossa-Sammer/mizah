import React from 'react';
import SineWaves from 'sine-waves';
import _ from 'lodash';

import './style.css';

class SineWave extends React.Component {
  width = 300;

  height = 300;

  amplitude = 30;

  speed = 3;

  //  Linear
  // SineIn
  // SineOut
  // SineIsnOut

  ease = 'SineIn';

  waves = [
    {
      timeModifer: 3,
      lineWidth: 1,
      amplitude: this.amplitude,
      wavelength: 100,
      segmentLength: 1,
      strokeStyle: 'rgba(255, 255, 255, 0.3333)',
    },
    {
      timeModifer: 2,
      lineWidth: 1,
      amplitude: -this.amplitude / 2,
      wavelength: 100,
      segmentLength: 1,
      strokeStyle: 'rgba(255, 255, 255, 0.3333)',
    },
    {
      timeModifer: 2,
      lineWidth: 1,
      amplitude: -this.amplitude,
      wavelength: 100,
      segmentLength: 1,
      strokeStyle: 'rgba(255, 255, 255, 0.3333)',
    },
  ];

  componentDidMount() {
    const c = document.getElementById('left-waves');
    const ctx = c.getContext('2d');
    ctx.beginPath();
    ctx.rect(20, 20, 150, 100);
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fill();
    console.log('qqq', c);

    const { speed, width, height, ease, waves } = this;
    const bottomWaves = new SineWaves({
      el: document.getElementById('bottom-waves'),
      speed,
      width,
      height,
      ease,
      waves: _.clone(waves, true),
      rotate: 0,
      resizeEvent() {
        let gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        let index = -1;
        let { length } = this.waves;
        while (++index < length) {
          this.waves[index].strokeStyle = gradient;
        }

        // Clean Up
        index = void 0;
        length = void 0;
        gradient = void 0;
      },
    });

    const topWaves = new SineWaves({
      el: document.getElementById('top-waves'),
      speed: -speed,
      width,
      height,
      ease,
      waves: _.clone(waves, true),
      rotate: 0,
      resizeEvent() {
        let gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        let index = -1;
        let { length } = this.waves;
        while (++index < length) {
          this.waves[index].strokeStyle = gradient;
        }

        // Clean Up
        index = void 0;
        length = void 0;
        gradient = void 0;
      },
    });
    const leftWaves = new SineWaves({
      el: document.getElementById('left-waves'),

      speed,
      width: height,
      height: width,
      ease,
      waves: _.clone(waves, true),
      rotate: 90,
      resizeEvent() {
        let gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        let index = -1;
        let { length } = this.waves;
        while (++index < length) {
          this.waves[index].strokeStyle = gradient;
        }

        // Clean Up
        index = void 0;
        length = void 0;
        gradient = void 0;
      },
    });

    const rightWaves = new SineWaves({
      el: document.getElementById('right-waves'),

      speed: -speed,
      width: height,
      height: width,
      ease,
      waves: _.clone(waves, true),
      rotate: 90,
      resizeEvent() {
        let gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
        gradient.addColorStop(0, 'rgba(255, 0, 0, 1)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        this.ctx.fillStyle = 'green';
        let index = -1;
        let { length } = this.waves;
        this.fillStyle = '#888888';
        this.ctx.rect(10, 10, 150, 100);
        this.ctx.fill();
        while (++index < length) {
          this.waves[index].strokeStyle = gradient;
        }

        // Clean Up
        index = void 0;
        length = void 0;
        gradient = void 0;
      },
    });
  }

  render() {
    return (
      <>
        <div id="box">
          <div id="child" />
          <canvas className="wave" id="top-waves" />
          <canvas className="wave" id="left-waves" />
          <canvas className="wave" id="bottom-waves" />
          <canvas className="wave" id="right-waves" />
        </div>
      </>
    );
  }
}

export default SineWave;
