import React, { Component } from 'react';

import '../styles/error-not-found.css';

class ErrorNotFound extends Component {
    render() {
        return (
            <div className="ErrorNotFound">
                La page n'a pas pu être trouvée.
            </div>
        );
    };
}

export default ErrorNotFound;