import "./button.css";

const Button = ({text, onClick, tabindex}) => {
    return (
        <button className='custom-button' onClick={onClick} tabindex={tabindex}>{text}</button>
    );
}

export default Button;