import React, { useState } from "react";
import Toggle from '../Toggle';
import CustomDatePicker from '../DatePicker';
import Button from "../Button";

import './Form.scss';

const Form = () => {

    const [state, setState] = useState({value:''});

    const handleChange = (e) => {
        setState({value: e.target.value});
    }

    const handleSubmit = (e) => {
        console.log('Отправленное имя: ' + state.value);
        e.preventDefault();
    }

    const handleFormReset = () => {
        setState({state});
    }

    return (
        <form onReset={handleFormReset} onSubmit={handleSubmit} className="form">
            <div className="form-row d-flex">
                <div className="form-col">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={state.value} onChange={handleChange} className="form-control" name="title" placeholder="Title" />
                </div>
                <div className="form-col">
                    <label htmlFor="url">RELEASE DATE</label>
                    <CustomDatePicker />
                </div>
            </div>
            <div className="form-row d-flex">
                <div className="form-col">
                    <label htmlFor="url">Movie url</label>
                    <input type="text" className="form-control" id="url" placeholder="https://" />
                </div>
                <div className="form-col">
                    <label htmlFor="rating">RATING</label>
                    <input type="text" className="form-control" id="rating" placeholder="7.8" />
                </div>
            </div>
            <div className="form-row d-flex">
                <div className="form-col">
                    <label>genre</label>
                    <Toggle />
                </div>
                <div className="form-col">
                    <label htmlFor="runtime">RUNTIME</label>
                    <input type="text" className="form-control" id="runtime" placeholder="minutes" />
                </div>
            </div>
            <div className="form-row">
                <div className="form-col">
                    <label htmlFor="overview">OVERVIEW</label>
                    <textarea className="form-control" id="overview" placeholder="Movie description" />
                </div>
            </div>
            <div className="btns-row d-flex justify-content-end">
            <Button 
                color="TRANSPARENT"
                type="reset"
              >Reset</Button>
              <Button 
                color="PRIMARY"
                type="submit"
              >Submit</Button>
            </div>
        </form>
    );
}

export default Form;