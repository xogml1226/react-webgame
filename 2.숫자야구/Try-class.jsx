import React, { PureComponent } from 'react';

class Try extends PureComponent {
    
     state = {
        result: this.props.result,
    };

    render() {
        const { tryInfo } = this.props
        return (
            <li>
                <div>{ tryInfo.try }</div>
                <div>{ tryInfo.result }</div>
            </li>
        );
    }
}

export default Try;