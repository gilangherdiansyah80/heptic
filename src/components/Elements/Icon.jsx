/* eslint-disable react/prop-types */
const Icon = ({ style, handleIcon }) => {
    return (
        <i className={`${style}`} onClick={handleIcon}></i>
    )
}

export default Icon;