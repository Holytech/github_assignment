import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <div className="container mt-5 text-danger">
            <h1>Oops! An error occured</h1>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
