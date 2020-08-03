// @flow

import * as React from "react";
import Grid from "@material-ui/core/Grid";
// Import STDigital from "../../../image/STDigital.png";

import "./style.scss";


const Footer = () => (

  <div className="footer">
    <Grid
      container
      spacing={2}
    >
      <Grid
        item
        xs
      >
        <div className="footer__txt1">&copy; 2019 All rights reserved</div>
      </Grid>
      <Grid
        item
        xs
      >
        <div className="footer__txt2">Powered by OCP</div>
      </Grid>
      <Grid
        item
        xs
      >
        <div className="footer__txt3">
          <img
            className="footer__txt3__img"
            // Src={STDigital}
          />
        </div>
      </Grid>

    </Grid>
  </div>
);

export default Footer;
