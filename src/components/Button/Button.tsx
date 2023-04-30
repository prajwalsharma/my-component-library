const buttonStyles: React.CSSProperties = {
    padding: '8px',
    backgroundColor: 'teal',
    color: 'white',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer'
}

export const Button = ({...props}) => <button style={buttonStyles}>{props.children}</button>