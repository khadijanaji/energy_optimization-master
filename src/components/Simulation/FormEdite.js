import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Input from '@material-ui/core/Input';


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 500,
    },
});

let id = 0;

function createData(name, measure, idValue) {
    id += 1;
    return {id, name, measure, idValue};
}

const rows = [
    createData('debit actuel HP', "T/h", "current_debit_hp_recu"),
    createData('ouverture pv004', "%", "current_ouverture_pv004"),
    createData('ouverture pv024', "%", "current_ouverture_pv024"),
    createData('ouverture pv044', "%", "current_ouverture_pv044"),
    createData('current debit mp jph', "T/h", "current_debit_mp_jph"),
    createData('current debit mp dap', "T/h", "current_debit_dap_mp"),
    createData('current debit bp pap', "T/h", "current_debit_pap"),
    createData('current debit bp hrs', "T/h", "current_debit_bp_hrs"),
];

function SimpleTable(props) {
    const {classes} = props;


    const changeData = (event) => {
        const element = event.target;
        const name = element.name;
        const value = element.value;
        props.functionHandle(name, value);
    }

    return (

        <Table>
            <TableHead>

                <TableRow>
                    <TableCell></TableCell>
                    <TableCell numeric>Valeur Actuelle</TableCell>
                    <TableCell numeric>Entrer une valeur</TableCell>
                </TableRow>

            </TableHead>
            <TableBody>
                {rows.map(row => {
                    return (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                <label htmlFor={row.idValue}>
                                    {row.name}
                                </label>
                            </TableCell>
                            <TableCell numeric>{props.dataInit[row.id - 1]} {row.measure}</TableCell>
                            <TableCell numeric>
                                <Input type="number" name={row.idValue} id={row.idValue}
                                       placeholder="saisir une valeur"
                                       className={"formControl"}
                                       onChange={changeData}
                                />
                            </TableCell>
                        </TableRow>

                    );
                })}

            </TableBody>
        </Table>

    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
