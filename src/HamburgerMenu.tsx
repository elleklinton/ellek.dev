import React, { CSSProperties, useEffect, useRef, useState } from 'react'
import './hamburger-menu.css'
import { getNavBarHeight } from './NavBar'

export function HamburgerMenu({
    isActive,
    toggleIcon,
}: {
    isActive: boolean
    toggleIcon: () => void
}) {
    const ref = useRef<HTMLDivElement>(null)
    const [marginRight, setMarginRight] = useState<number>(31.5)

    useEffect(() => {
        if (ref.current) {
            const selfHeight = ref.current.getBoundingClientRect().height
            const navBarHeight = getNavBarHeight()
            const topBottomPadding = (navBarHeight - selfHeight) / 2
            setMarginRight(topBottomPadding)
        }
    }, [ref.current, getNavBarHeight()])

    return (
        <div
            ref={ref}
            className={`hamburger-icon ${isActive ? 'active' : ''}`}
            onClick={toggleIcon}
            style={{ marginRight }}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
