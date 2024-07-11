/* eslint-disable react/prop-types */
const Button = ({ style, handleClick, children, stylePlus }) => {
    return (
        <button type="submit" className={`${style}`} style={stylePlus} onClick={handleClick}>{children}</button>
    )
}

export default Button;