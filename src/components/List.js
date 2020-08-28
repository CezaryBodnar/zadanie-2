
import React, { Component } from 'react'
import axios from 'axios'

export class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
    }

    componentDidMount() {
        axios.get('parking')
            .then(response => {
                this.setState({ items: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const items = this.state.items
        var miejsca = 0
        console.log(items)
        return (
            <div>
                <h2>Zadanie 2.1</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nazwa parkingu</th>
                            <th>Ilość wolnych miejsc</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, index) => {
                                return (<tr key={index}>
                                    <th className="color">{item.name}</th>
                                    {Object.entries(item.places).map(([klucz, wartosc], index) => {
                                        if (wartosc === false) {
                                            miejsca++
                                        } else {
                                            return
                                        }
                                    })}
                                    <th className="color" key={index}>{miejsca}</th>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}


export default List




