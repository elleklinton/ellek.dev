import './LinkedIcon.css'

function LinkedIcon({
    image,
    link,
    hoverText,
}: {
    image: string
    link: string
    hoverText: string
}) {
    return (
        <a
            className="project-link-button"
            target="_blank"
            rel="noopener noreferrer"
            title={hoverText}
            href={link}
        >
            <img src={image} className="project-link-button-image" />
        </a>
    )
}

export default LinkedIcon
