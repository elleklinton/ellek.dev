import Button from '../components/Button'
import { scrollTo } from '../../NavBar'

type TExpandProjectButton = {
    isExpanded: boolean
    setIsExpanded: (isExpanded: boolean) => void
    projectId: string
}

export function ExpandProjectButton({
    isExpanded,
    setIsExpanded,
    projectId,
}: TExpandProjectButton) {
    return (
        <Button
            onClick={() => {
                if (!isExpanded) {
                    setIsExpanded(true)
                } else {
                    setIsExpanded(false)
                    scrollTo(projectId)
                }
            }}
            style={{ marginTop: 10 }}
        >
            {isExpanded ? 'Show Less' : 'Show More'}
        </Button>
    )
}
