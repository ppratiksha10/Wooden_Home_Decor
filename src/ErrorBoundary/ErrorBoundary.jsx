import * as React from "react";

class ErrorBoundary extends React.Component
{
    /* Constructor initialiize state */
    constructor(props)
    {
        super(props)
        this.state={hasError:false};
    }
    /* getDrivedStateFromError (Detect error) */

    static getDerivedStateFromError(error)
    {
        return{ hasError:true}
    }
    /* componentDidCatch */
    componentDidCatch(error,errorInfo)
    {
        console.log("Eroor", error);
    }
    /* UI renderning */
    render()
    {
        if(this.state.hasError)
        {
            return<h1>Something went WRONG</h1>
        }
        return this.props.children;
    }
}
export default ErrorBoundary;