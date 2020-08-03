import {Component, default as React} from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import FormEdite from "./FormEdite";

class BoiteDialogue extends Component<Props, State> {

    constructor(props, context) {
        super(props, context);
        this.state = {
            open: false,
            data: {}
        };
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmitSimulateur = this.handleSubmitSimulateur.bind(this);
    }

    handleSubmitSimulateur(elementId, value) {
        console.log("state data: ", this.state.data);
        console.log("id and value: ", elementId, value);
        this.setState({
            data: {
                ...this.state.data,
                [elementId]: value
            }
        })
    }

    handleClickOpen() {
        this.setState({open: true});
    };

    handleClose() {
        this.props.functionHandle(this.state.data);
        this.setState({open: false});
    };

    render() {

        console.log(this.props.dataInit);

        return (
            <div>
                <Button onClick={this.handleClickOpen} className={this.props.styleBtn}>Lance Simulation</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Simulateur de production de l'energie Electrique</DialogTitle>
                    <DialogContent>
                        <FormEdite functionHandle={this.handleSubmitSimulateur}
                                   dataInit={this.props.dataInit}/>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Annuler
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Lancer la simulation
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default BoiteDialogue;
