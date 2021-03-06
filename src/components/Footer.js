import React from "react";
import Twitter from "./assets/Twitter_Logo_Blue.svg";
import Facebook from "./assets/f_logo_RGB-White_144.png";
import Instagram from "./assets/glyph-logo_May2016.png";
import Twitch from "./assets/TwitchGlitchWhite.svg";
import Youtube from "./assets/yt_icon_mono_dark.png";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="container"></div>
      <footer>
        {/* Can add back in if more content needed in footer */}
        {/*
        <section className="ft-main">
          <div className="ft-main-item">Can put brand info in here etc</div>
          <div className="ft-main-item">Can put more info here dunno</div>
        </section> */}
        {/* Footer Main */}
        <section className="ft-social">
          <ul className="ft-social-list">
            <li>
              <a href="https://twitter.com/abbyjpee">
                <img
                  className="social-icon"
                  id="twitter"
                  src={Twitter}
                  alt="twitter"
                />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/abbypeeofficial">
                <img className="social-icon" src={Facebook} alt="facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.twitch.tv/abbyp">
                <img className="social-icon" src={Twitch} alt="twitch" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCHEEOe5SnxYau9puXKtqx5Q">
                <img className="social-icon" src={Youtube} alt="youtube" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/abbyjpee/">
                <img
                  className="social-icon"
                  id="invert"
                  src={Instagram}
                  alt="instagram"
                />
              </a>
            </li>
          </ul>
        </section>

        {/* Footer credits */}
        <section className="ft-credits">
          <ul className="ft-credits-list">
            <li>
              <a href="#Top">Top ^</a>
            </li>
            <li>
              <p>Website by Amelia Dominguez</p>
            </li>
          </ul>
        </section>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
