import './animated-wave.css'

export function AnimatedWave({ fontSize }: { fontSize: string }) {
    return (
        <div className="wave-emoji" style={{ fontSize }}>
            👋
        </div>
    )
}
