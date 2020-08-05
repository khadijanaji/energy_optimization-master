/* eslint-disable max-len, flowtype/no-types-missing-file-annotation, react/jsx-sort-props, react/prefer-stateless-function, func-names, react/no-unused-state, react/destructuring-assignment, react/no-set-state */

import * as React from "react";
import {Component} from "react";
import "./style.scss";
import {withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import background from "./../../img/energymanagementhomescreen.png";
import {styles} from "./muiStyles";
import BoiteDialogue from "./BoiteDialogue";

type Props = {
  classes: any
}
type State = {
  optimized: boolean,
  current_debit_bp_hrs: number,
  current_debit_bp_total: number,
  current_debit_hp_gta: number,
  current_debit_hp_recu: number,
  current_debit_mp: number,
  current_debit_mp_jph: number,
  current_debit_soutirage_bp: number,
  current_debit_soutirage_mp: number,
  current_ouverture_pv004: number,
  current_ouverture_pv024: number,
  current_ouverture_pv044: number,
  current_pe: number,
  current_pression_vide: number,
  diff_pe: number,
  index: number,
  kept_current: boolean,
  max_debit_soutirage_bp: number,
  max_debit_soutirage_mp: number,
  optimal_debit_hp_gta: number,
  optimal_debit_pv004: number,
  optimal_debit_pv004_dessurchauf: number,
  optimal_debit_pv024: number,
  optimal_debit_pv024_dessurchauf: number,
  optimal_debit_pv044: number,
  optimal_debit_soutirage_bp: number,
  optimal_debit_soutirage_mp: number,
  optimal_ouverture_pv004: number,
  optimal_ouverture_pv024: number,
  optimal_ouverture_pv044: number,
  optimal_pe: number,
  predicted_pe: number
}

/*
 *Calls the optimize method
 */
const callOptimizeAPI = function () {
  return fetch("/api/JFC_1/optimize");
};

class Simulation extends Component<Props, State> {
  constructor () {
    super();
    this.state = {
      "optimized": false,
      "current_debit_bp_hrs": 0,
      "current_debit_bp_total": 0,
      "current_debit_dap_mp_sorti": 0,
      "current_debit_dap_mp": 0,
      "current_debit_hp_gta": 0,
      "current_debit_hp_recu": 0,
      "current_debit_mp": 0,
      "current_debit_mp_jph": 0,
      "current_debit_mp_total": 0,
      "current_debit_pap": 0,
      "current_debit_soutirage_bp": 0,
      "current_debit_soutirage_mp": 0,
      "current_ouverture_pv004": 0,
      "current_debit_pv004_dessurchauf": 0,
      "current_debit_pv024_dessurchauf": 0,
      "current_ouverture_pv024": 0,
      "current_ouverture_pv044": 0,
      "current_debit_pv_044": 0,
      "current_pe": 0,
      "current_pression_vide": 0,
      "diff_pe": 0,
      "index": 0,
      "kept_current": false,
      "max_debit_soutirage_bp": 0,
      "max_debit_soutirage_mp": 0,
      "optimal_debit_hp_gta": 0,
      "optimal_debit_pv004": 0,
      "optimal_debit_pv004_dessurchauf": 0,
      "optimal_debit_pv024": 0.0,
      "optimal_debit_pv024_dessurchauf": 0.0,
      "optimal_debit_pv044": 0.0,
      "optimal_debit_soutirage_bp": 0,
      "optimal_debit_soutirage_mp": 0,
      "optimal_ouverture_pv004": 0.0,
      "optimal_ouverture_pv024": 0.0,
      "optimal_ouverture_pv044": 0.0,
      "optimal_pe": 0,
      "predicted_pe": 0
    };
    this.handleStartOptimisation = this.handleStartOptimisation.bind(this);
    this.handleSubmitSimulateur = this.handleSubmitSimulateur.bind(this);
  }

  componentDidMount () {
  }

  handleSubmitSimulateur (data) {
    console.log("data received ");
    console.log("data : ", data);
    this.setState({...data});
  }

  callOptimizeAPI: Function;

  handleStartOptimisation: Function;

  handleStartOptimisation () {
    this.setState({"optimized": true});
  }


  render () {
    const {classes} = this.props;


    const data = [
      this.state.current_ouverture_pv004,
      this.state.current_ouverture_pv024,
      this.state.current_ouverture_pv044,
      this.state.current_debit_soutirage_bp,
      this.state.current_debit_soutirage_mp
    ];

    return (
      <React.Fragment>

        <div className="header">
          <span
            className="header__text"
          >Simulateur Production Energie Electrique - JFC1
          </span>

          <BoiteDialogue
            styleBtn={classes.startOptimisationBtn}
            functionHandle={this.handleSubmitSimulateur}
            dataInit={data}
          />

          <Button
            onClick={this.handleStartOptimisation}
            className={classes.startOptimisationBtn}
          >Lancer l'optimisation
          </Button>
        </div>
        <div className="grid-container">
          <img
            className="grid-background"
            src={background}
          />
          <div
            className="item1 current_debit_hp_recu"
          ><p className="item1__text">Débit Actuel: <b>{this.state.current_debit_hp_recu} T/h</b></p>
          </div>
          <div
            className="item2 current_pe"
          ><p className="item2__text">Enérgie Actuelle: <b>{this.state.current_pe} MW</b></p>
            {this.state.optimized
              ? <p className="item2__optimized">Enérgie Optimale: <b>{this.state.optimal_pe} MW</b></p>
              : null}
          </div>
          <div
            className="item3 current_debit_mp_total"
          ><p className="item4__text">Débit Actuel: <b>{this.state.current_debit_mp_total} T/h</b></p>
          </div>
          <div
            className="item4 current_debit_bp_total"
          ><p className="item4__text">Débit Actuel: <b>{this.state.current_debit_bp_total} T/h</b></p>
          </div>
          <div
            className="item10 current_debit_hp_gta"
          ><p className="rectangle item10__text">{this.state.current_debit_hp_gta} T/h</p>
          </div>
          {this.state.optimized
            ? <div
              className="item10 item10__optimized optimal_debit_hp_gta"
            ><p className="optimal_value item10__text">{this.state.optimal_debit_hp_gta} T/h</p>
            </div>
            : null}
          <div
            className="item11 current_debit_pv004"
          ><p className="rectangle item10__text">{this.state.current_debit_pv004} T/h</p>
          </div>
          <div
            className="item12 current_debit_pv024"
          ><p className="rectangle item10__text">{this.state.current_debit_pv024} T/h</p>
          </div>
          <div
            className="item13 current_debit_soutirage_mp"
          ><p className="rectangle item10__text">{this.state.current_debit_soutirage_mp} T/h</p>
          </div>
          {this.state.optimized
            ? <div
              className="item13__optimized optimal_debit_soutirage_mp"
            >
              <p className="outlined_optimal_value item10__text">{this.state.optimal_debit_soutirage_mp} T/h</p>
            </div>
            : null}
          <div
            className="item14 current_debit_pv004_dessurchauf"
          ><p className="rectangle item10__text">{this.state.current_debit_pv004_dessurchauf} T/h</p>
          </div>
          <div
            className="item15 current_debit_pv024_dessurchauf"
          ><p className="rectangle item10__text">{this.state.current_debit_pv024_dessurchauf} T/h</p>
          </div>
          <div
            className="item16 current_debit_soutirage_bp"
          ><p className="rectangle item10__text">{this.state.current_debit_soutirage_bp} T/h</p>
          </div>
          {this.state.optimized
            ? <div
              className="item16__optimized optimal_debit_soutirage_bp"
            >
              <p className="outlined_optimal_value item10__text">{this.state.optimal_debit_soutirage_bp} T/h</p>
            </div>
            : null}
          <div
            className="item17 current_debit_mp_jph"
          ><p className="rectangle item10__text">{this.state.current_debit_mp_jph} T/h</p>
          </div>
          <div
            className="item18 current_debit_dap_mp"
          ><p className="rectangle item10__text">{this.state.current_debit_dap_mp} T/h</p>
          </div>
          <div
            className="item19 current_debit_pap"
          ><p className="rectangle item10__text">{this.state.current_debit_pap} T/h</p>
          </div>
          <div
            className="item20 current_debit_bp_hrs"
          ><p className="rectangle item10__text">{this.state.current_debit_bp_hrs} T/h</p>
          </div>
          <div
            className="valveopening1 current_ouverture_pv004"
          ><p className="outlined_rectangle valveopening1__text">{this.state.current_ouverture_pv004}%</p>
          </div>
          {this.state.optimized
            ? <div
              className="valveopening1 valveopening1__optimized optimal_ouverture_pv004"
            >
              <p className="outlined_optimal_value valveopening1__text">{this.state.optimal_ouverture_pv004}%</p>
            </div>
            : null}
          <div
            className="valveopening2 optimal_ouverture_pv024"
          ><p className="outlined_rectangle valveopening1__text">{this.state.current_ouverture_pv024}%</p>
          </div>
          {this.state.optimized
            ? <div
              className="valveopening2 valveopening2__optimized optimal_ouverture_pv024"
            >
              <p className="outlined_optimal_value valveopening1__text">{this.state.optimal_ouverture_pv024}%</p>
            </div>
            : null}
          <div
            className="valveopening3 current_ouverture_pv044"
          ><p className="outlined_rectangle valveopening1__text">{this.state.current_ouverture_pv044}%</p>
          </div>
          {this.state.optimized
            ? <div
              className="valveopening3 valveopening3__optimized optimal_ouverture_pv044"
            >
              <p className="outlined_optimal_value valveopening1__text">{this.state.optimal_ouverture_pv044}%</p>
            </div>
            : null}
        </div>

      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Simulation);
