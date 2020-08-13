import React, {useState} from 'react';
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

function createData(name, measure, min, max, idValue) {
    id += 1;
    return {id, name, measure, min, max, idValue};
}

const bigInt = 1000000;

const rows = [
    createData('debit actuel HP', "T/h", 0, bigInt, "current_debit_hp_recu"),
    createData('ouverture pv004', "%", 0, 100, "current_ouverture_pv004"),
    createData('ouverture pv024', "%", 0, 100, "current_ouverture_pv024"),
    createData('ouverture pv044', "%", 0, 100, "current_ouverture_pv044"),
    createData('current debit mp jph', "T/h", -bigInt, bigInt, "current_debit_mp_jph"),
    createData('current debit mp dap', "T/h", 0, bigInt, "current_debit_dap_mp"),
    createData('current debit bp pap', "T/h", 0, bigInt, "current_debit_pap"),
    createData('current debit bp hrs', "T/h", 0, bigInt, "current_debit_bp_hrs"),
];

function SimpleTable(props) {
    const {classes} = props;
    const stateInit = {
        "current_debit_hp_recu": "",
        "current_ouverture_pv004": "",
        "current_ouverture_pv024": "",
        "current_ouverture_pv044": "",
        "current_debit_mp_jph": "",
        "current_debit_dap_mp": "",
        "current_debit_pap": "",
        "current_debit_bp_hrs": "",
    }

    const [state, setState] = useState(stateInit);

    const changeData = (event) => {
        let element = event.target;
        let name = element.name;
        let value = +element.value;
        let max = +element.max;
        let min = +element.min;
        setState(prev => {
            console.log(prev);
            if (value < min || value > max) {
                console.log(`${value}<${min} or ${value}>${max}`)
                return prev;
            }
            props.functionHandle(name, value);
            return {
                ...prev, [name]: value
            }
        });

        /*        if (value >= min) {
                    if (value < max) {
                        props.functionHandle(name, value);
                        console.log('successfully update');
                    }else{
                        console.log("failed update ", ` ${value} not less than ${max}`);
                    }
                } else {
                    console.log("failed update ", ` ${value} not great than ${min}`);
                }*/


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
                                <Input type="number"
                                       name={row.idValue} id={row.idValue}
                                       placeholder="saisir une valeur"
                                       className={"formControl"}
                                       style={{width: '150px'}}
                                       onChange={changeData}
                                       inputProps={{'max': row.max, 'min': row.min}}
                                       value={state[row.idValue]}


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
