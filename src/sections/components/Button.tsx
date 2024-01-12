import './button.css'
import { CSSProperties } from 'react'

function Button({
    children,
    style,
    onClick,
}: {
    children?: any
    style?: CSSProperties
    onClick?: () => void
}) {
    return (
        <div className="button" style={style} onClick={onClick}>
            {children}
        </div>
    )
}

export default Button
