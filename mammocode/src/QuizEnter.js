import React, { Component } from 'react';
import './App.css';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';


export default class QuizEnter extends Component {

    constructor(props) {
        super(props);
            this.state = {
                age: 25,
                biosex: -1,
                famhist: -1,
            }
        }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };


    render () {
        return (
        <div>
            <form>
                <InputLabel htmlFor="age-native-simple">What is your birthday? </InputLabel>
                <TextField
                    id="date"
                    type="date"
                    defaultValue="1990-01-01"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onChange={this.handleChange('age')}
                >
                </TextField>
                <br/>
                <InputLabel>What is your sex? </InputLabel>
                <NativeSelect
                    value={this.state.biosex}
                    onChange={this.handleChange('biosex')}
                    input={
                        <Input name="biosex" id="biosex-helper" />
                    }
                >
                    <option value={-1}/>
                    <option value={0}>Female</option>
                    <option value={1}>Male</option>
                    <option value={2}>Transgender Female</option>
                    <option value={3}>Transgender Male</option>
                </NativeSelect>
                <br />
                <InputLabel>Do you have a family history of breast cancer? </InputLabel>
                <NativeSelect
                    value={this.state.famhist}
                    onChange={this.handleChange('famhist')}
                    input={
                        <Input name="famhist" id="famhist-helper" />
                    }
                >   
                    <option value={-1}/>
                    <option value={0}>Yes</option>
                    <option value={1}>No</option>
                    <option value={2}>I'm not sure</option>
                </NativeSelect>
                <br />
                <Button style={{float: 'right'}}>Next</Button>
            </form>
        </div>
        )

    }
}