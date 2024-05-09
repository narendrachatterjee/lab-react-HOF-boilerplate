import React, { Component } from "react";

class HigherOrderComponent extends Component {
    constructor() {
        super()
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }
    renderItems = () => {
        let data = this.state.userData;
        let mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                    </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    renderByUserType = () => {
        let data = this.state.userData;
        let datafilter = data.filter((item) => (item.user_type == "Designer"));
        let datamap = datafilter.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return datamap;
    };

    renderByLetter = () => {
        let data = this.state.userData;
        let datafilter = data.filter((item) => (item.name[0] == "J"));
        let datamap = datafilter.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ))
        return datamap;
    }
    
    renderByAge = () => {
        let data = this.state.userData;
        let datafilter = data.filter((item) => (item.age > 28 && item.age <= 50));
        let datamap = datafilter.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ))
        return datamap;
    }

    renderSum = () => {
        let data = this.state.userData;
        let datafilter = data.filter((item) => (item.user_type == "Designer"));
        let datamap = datafilter.reduce((accumulator, item) => accumulator + item.years, 0)
        return datamap;
    }
    

        
    render() {
        return (
        <>
        
            <h1>Display all items</h1>
            <div className="display-box">
            <ul>{this.renderItems()} </ul>
            </div>

            <h1>Display based on UserType</h1>
            <div className="display-box">
            <ul>{this.renderByUserType()}</ul>
            </div>

            <h1>Filter all data starting with J</h1>
            <div className="display-box">
            <ul>{this.renderByLetter()}</ul>
            </div>

            <h1>Filter all data based on age greater than 28 and age less than or equal to 50</h1>
            <div className="display-box">
            <ul>{this.renderByAge()}</ul>
            </div>

            <h1>Find the total experience years of the designers</h1>
            <div className="display-box">
            {this.renderSum()}
            </div>
        </>
        )
    }
}

export default HigherOrderComponent