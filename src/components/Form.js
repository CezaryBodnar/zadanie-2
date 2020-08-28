import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        const name = this.state.name
        axios(`parking/${name}`, {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'content-type': 'application/json',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                'x-auth-login': 'CezaryBodnar',
                'x-auth-token': '6fee3b56-d8f0-4d68-a4da-3378970237da'
            },
            body: {
                "1": true,
                "2": true,
                "3": false,
                "4": true,
                "5": false,
                "6": false,
                "7": true,
                "8": false
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => {
                console.log(error.response)
            })
    }
    render() {
        const { name } = this.state
        return (
            <div>
                <h2>Zadanie 2.2</h2>
                <form onSubmit={this.submitHandler}>
                    <input placeholder="Nazwa parkingu ..." value={name} name="name" onChange={this.changeHandler}></input>
                    <button type="submit">Wyślij</button>
                </form>
            </div>
        )
    }
}

export default Form




