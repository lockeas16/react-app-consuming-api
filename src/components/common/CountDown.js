import React from 'react';

const CountDown = ({date="2019-05-24T01:22:37+00:00"}) => (
  <div id="homeCountDown" className="uk-grid-small uk-child-width-auto" uk-grid="true" uk-countdown={`date: ${date}`}>
    <div>
        <div className="uk-countdown-number uk-countdown-days"></div>
        <div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Days</div>
    </div>
    <div className="uk-countdown-separator">:</div>
    <div>
        <div className="uk-countdown-number uk-countdown-hours"></div>
        <div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Hours</div>
    </div>
    <div className="uk-countdown-separator">:</div>
    <div>
        <div className="uk-countdown-number uk-countdown-minutes"></div>
        <div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Minutes</div>
    </div>
    <div className="uk-countdown-separator">:</div>
    <div>
        <div className="uk-countdown-number uk-countdown-seconds"></div>
        <div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Seconds</div>
    </div>
  </div>
);

export default CountDown;