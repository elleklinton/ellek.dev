import ROUTES from '../routes'
import fs from 'fs'
import path from 'path'

function ensureDirectoryExists(dirPath: string): void {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true })
    }
}

function copyFileToDirectories(source: string, targetDir: string): void {
    const destination = path.join(targetDir, 'index.html')
    ensureDirectoryExists(targetDir)
    fs.copyFileSync(source, destination)
    console.log(`[routes] Copied ${source} to ${destination}`)
}

const sourcePath = path.join(__dirname, '../..', 'build', 'index.html')

Object.keys(ROUTES).forEach((route_path) => {
    copyFileToDirectories(
        sourcePath,
        path.join(__dirname, '../..', 'build', route_path)
    )
})
