import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useEffect } from 'react'
import Background from './sections/components/Background'
import './AppRouter.css'
import Button from './sections/components/Button'
import ROUTES from './routes'

function RedirectComponent({ to }: { to: string }) {
    useEffect(() => {
        window.location.href = to
    }, [to])

    return (
        <div>
            <Background
                overlayOpacity={0.8}
                style={{
                    top: '0',
                    height: '100%',
                    position: 'fixed',
                }}
                hasNavBar={false}
            />
            <div className="not-found-text-container">
                <h3>Redirecting...</h3>
                <p>
                    You are being redirected to <a href={to}>{to}</a>
                </p>
            </div>
        </div>
    )
}

function NotFound() {
    return (
        <div>
            <Background
                overlayOpacity={0.8}
                hasNavBar={false}
                style={{
                    top: '0',
                    height: '100%',
                    position: 'fixed',
                }}
            />
            <div className="not-found-text-container">
                <h3>404 Not Found!</h3>
                <p>The requested page was not found!</p>
                <br />
                <br />
                <Button
                    style={{ margin: 0 }}
                    onClick={() => {
                        window.location.href = '/'
                    }}
                >
                    Go Home
                </Button>
            </div>
        </div>
    )
}

function AppRouter({ children }: { children: any }) {
    return (
        <BrowserRouter>
            <Routes>
                {/* Base Routes */}
                <Route path="/" element={children} />
                <Route path="*" element={<NotFound />} />

                {Object.entries(ROUTES).map(([path, to]) => (
                    <Route
                        key={path}
                        path={path}
                        element={<RedirectComponent to={to} />}
                    />
                ))}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
