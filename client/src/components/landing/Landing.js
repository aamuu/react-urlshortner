import React, {Component} from "react";
import {createShortUrl} from "../../Shortner";
import "./Landing.css";
import constants from "../../config/keys";

class Landing extends Component {
    constructor() {
        super();
        this.state = {
            showShortenUrl: false,
            shortenUrl: "",
            originalUrl: "",
            baseUrl: "",
            urlCode: "",
            clickSubmit: true,
            showError: false,
            apiError: "",
            showApiError: false,
            showLoading: false,
            exShortUrl: constants.baseUrl
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    handleSubmit() {

        this.setState({clickSubmit: true, showApiError: false});
        if (this.state.clickSubmit && this.state.originalUrl) {
            this.setState({showLoading: true, showShortenUrl: false});
            let reqObj = {
                originalUrl: this.state.originalUrl,
                shortBaseUrl: constants.baseUrl
            };


            createShortUrl(reqObj)
                .then(json => {
                    setTimeout(() => {
                        this.setState({
                            showLoading: false,
                            showShortenUrl: true,
                            shortenUrl: json.data.shortUrl,
                            urlCode: json.data.urlCode
                        });
                    }, 0);
                })
                .catch(error => {
                    console.log(error);
                    this.setState({
                        showLoading: false,
                        showApiError: true,
                        apiError: "Server Error"
                    });
                });
        } else {
            this.setState({showError: true});
        }

        this.state.originalUrl = '';
    }

    render() {
        const UrlCode = this.state.urlCode;
        return (
            <div className="landing">
                <div>
                    <h5>Enter a Link to shorten it!</h5>
                </div>
                <div>
                </div>
                <input
                    name="originalUrl"
                    placeholder="enter your link here"
                    className="form-control"
                    value={this.state.originalUrl}
                    onChange={this.handleUserInput.bind(this)}
                />

                {this.state.showError && (
                    <div className="formError">Original Links are required</div>
                )}


                <button className="btn btn-primary mt-3" type="submit"
                        onClick={this.handleSubmit}
                        name="action">Submit
                </button>


                {this.state.showApiError && (
                    <div className="shorten-error">{this.state.apiError}</div>
                )}
                {this.state.showShortenUrl && (
                    <div className="shorten-title">
                        Short URL is: {' '}
                        <a target="_blank" href={this.state.shortenUrl}>
                            {this.state.shortenUrl}
                        </a>
                        <p>
                            To Access: {' '}
                            <a target="_blank" href={'http://localhost:5000/api/item/' + UrlCode}>
                                Access Link
                            </a>
                        </p>
                    </div>
                )}
            </div>
        );
    }
}

export default Landing;
