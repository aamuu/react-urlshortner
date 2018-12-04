import React, {Component} from "react";

class Header extends Component {
    render() {
        return (
            <div>
                <h2> URL Shortening Application</h2>
                ** By default URL's are valid for the current day only <br/>
                ** Enter URL in format http://www.google.com
            </div>
        );
    }
}

export default Header;
