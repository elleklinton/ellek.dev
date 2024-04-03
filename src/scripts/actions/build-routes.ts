import REDIRECT_ROUTES from '../../redirect-routes'
import fs from 'fs'
import path from 'path'

import NAVBAR_SECTIONS, { PROJECT_SECTIONS } from '../../navbar-sections'

function ensureDirectoryExists(dirPath: string): void {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true })
    }
}

function copyFileTo(
    source: string,
    targetDir: string,
    destinationFilename = 'index.html'
): void {
    const destination = path.join(targetDir, destinationFilename)
    ensureDirectoryExists(targetDir)
    fs.copyFileSync(source, destination)
    console.log(`[Post Build][Routes] Copied ${source} to ${destination}`)
}

console.log('[Post Build][Routes] Building routes...')

const sourcePath = path.join(__dirname, '../../..', 'build', 'index.html')

// Copy to 404.html
copyFileTo(sourcePath, path.join(__dirname, '../../..', 'build'), '404.html')

// Copy section routes
NAVBAR_SECTIONS.filter((section) => section !== 'home').forEach((section) => {
    copyFileTo(sourcePath, path.join(__dirname, '../../..', 'build', section))
})

// Copy projects routes
PROJECT_SECTIONS.forEach((section) => {
    copyFileTo(
        sourcePath,
        path.join(__dirname, '../../..', 'build', 'projects', section)
    )
})

// Copy other routes
Object.keys(REDIRECT_ROUTES).forEach((route_path) => {
    copyFileTo(
        sourcePath,
        path.join(__dirname, '../../..', 'build', route_path)
    )
})
