import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useEffect } from 'react'
import Background from './sections/components/Background'
import './AppRouter.css'
import Button from './sections/components/Button'

function RedirectComponent({ to }: { to: string }) {
    useEffect(() => {
        window.location.href = to
    }, [to])

    return (
        <div>
            <Background
                overlayOpacity={0.6}
                style={{
                    marginTop: 'calc(var(--navbar-height) * -1)',
                    height: 'calc(100% + var(--navbar-height))',
                    position: 'fixed',
                }}
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
                overlayOpacity={0.6}
                style={{
                    marginTop: 'calc(var(--navbar-height) * -1)',
                    height: 'calc(100% + var(--navbar-height))',
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

                {/* Pied Poker */}
                <Route
                    path="pied-poker/notebook"
                    element={
                        <RedirectComponent to="https://colab.research.google.com/drive/1sLgDZRGmRojkJUEcHwz9o1j9ZN2j4l0p?usp=sharing" />
                    }
                />
                <Route
                    path="pied-poker/colab-notebook"
                    element={
                        <RedirectComponent to="https://colab.research.google.com/drive/1sLgDZRGmRojkJUEcHwz9o1j9ZN2j4l0p?usp=sharing" />
                    }
                />
                <Route
                    path="pied-poker/github"
                    element={
                        <RedirectComponent to="https://github.com/elleklinton/PiedPoker" />
                    }
                />
                <Route
                    path="pied-poker/pypi"
                    element={
                        <RedirectComponent to="https://pypi.org/project/pied-poker/" />
                    }
                />

                {/* Baus */}
                <Route
                    path="baus"
                    element={<RedirectComponent to="https://baus.cc" />}
                />
                <Route
                    path="baus/app-store"
                    element={
                        <RedirectComponent to="https://apps.apple.com/us/app/baus-playlist-maker/id1479934963" />
                    }
                />

                {/* Authentic8r */}
                <Route
                    path="authentic8r/app-store"
                    element={
                        <RedirectComponent to="https://apps.apple.com/us/app/authentic8r-by-altro-ai/id1397219993" />
                    }
                />

                {/* Resume */}
                <Route
                    path="resources/resume.pdf"
                    element={<RedirectComponent to="/resume.pdf" />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
