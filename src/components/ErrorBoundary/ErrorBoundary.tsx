import React, {Component, ErrorInfo} from 'react';
import {Link} from "react-router-dom";

interface IProps {
    children: React.ReactElement;
}

class ErrorBoundary extends Component<IProps> {
    state = {hasError: false}

    static getDerivedStateFromError() {
        return {hasError: true}
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log(error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>
                        An error occur <br/>
                        <Link to={"/"}>Click here</Link> to back to home page
                    </h2>
                </div>
            );
        }
        return this.props.children
    }
}

export default ErrorBoundary;