import { Button } from "./Composition";

export const PartiallyApply = (Component, partialProps) => {
    return (props) => {
        return <Component {...partialProps} {...props}/>;
    };
};

export const AlertButton = PartiallyApply(Button, { color: 'red'});
export const SuccessButton = PartiallyApply(Button, { color: 'green', size: 'medium'});