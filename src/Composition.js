export const Button = ({size, color, text, ...props}) => {
 return (
     <button style={{
         padding: size === 'large' ? '32px' : '16px',
         fontSize: size === 'large' ? '32px' : '16px', 
         backgroundColor: color
     }} {...props}>{text}</button>
 );
};

export const GreenButton = (props) => {
    return <Button color='green' {...props} />;
};

export const DangerButton = (props) => {
    return <Button color='red' size='large' {...props} />;
};