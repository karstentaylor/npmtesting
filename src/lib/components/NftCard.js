import React, { Component } from "react";


export default class NftCard extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h1 className="card-name">{this.props.name}</h1>
                    <div className="card-text">
                        <p className="card-info">{this.props.info}</p>
                    </div>
                </div>
                <img className="card-image" src={this.props.image} alt="Logo" />
            </div>
        );
    }
}