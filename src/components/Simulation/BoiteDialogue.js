import {Component, default as React} from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import FormEdite from "./FormEdite";
import {styles} from "./muiStyles";
import {withStyles} from "@material-ui/core";

type Props = {
  classes: any
}

class BoiteDialogue extends Component<Props, State> {
  constructor (props, context) {
    super(props, context);
    this.state = {
      "open": false,
      "data": {}
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmitSimulateur = this.handleSubmitSimulateur.bind(this);
  }

  handleSubmitSimulateur (elementId, value) {
    const data = this.state.data;
    data[elementId] = value;
    this.setState({data});
  }

  handleClickOpen () {
    this.setState({"open": true});
  }

  handleClose () {
    this.props.functionHandle(this.state.data);
    this.setState({"open": false});
  }

  render () {
    const {classes} = this.props;
    return (
      <div>
        <Button
          className={this.props.styleBtn}
          onClick={this.handleClickOpen}
        >Lancer Simulation</Button>
        <Dialog
            maxWidth='lg'
          aria-labelledby="form-dialog-title"
          onClose={this.handleClose}
          open={this.state.open}
        >
          <DialogTitle className={classes.modalTitle} id="form-dialog-title">Simulateur de production de l'energie Electrique</DialogTitle>
          <DialogContent>
            <FormEdite
              dataInit={this.props.dataInit}
              functionHandle={this.handleSubmitSimulateur}
            />

          </DialogContent>
          <DialogActions className={classes.modalFooter}>
            <Button
              className={"textPrimary"}
              color="default"
              onClick={this.handleClose}
              variant="contained"
            >
              Annuler
            </Button>
            <Button
              color="primary"
              onClick={this.handleClose}
              variant="contained"
            >
              Lancer la simulation
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(BoiteDialogue);
