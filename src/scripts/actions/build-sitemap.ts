import fs from 'fs'
import path from 'path'

import NAVBAR_SECTIONS, { PROJECT_SECTIONS } from '../../navbar-sections'

console.log('[Post Build][Sitemap] Building sitemap...')

const domain = 'https://www.ellek.dev'
const currentDate = new Date().toISOString().split('T')[0]

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`

for (const section of NAVBAR_SECTIONS) {
    xml += `  <url>\n`
    xml += `    <loc>${domain}${
        section === 'home' ? '' : '/' + section
    }</loc>\n`
    xml += `    <lastmod>${currentDate}</lastmod>\n`
    xml += `    <changefreq>weekly</changefreq>\n`
    xml += `  </url>\n`

    if (section === 'projects') {
        for (const project of PROJECT_SECTIONS) {
            xml += `  <url>\n`
            xml += `    <loc>${domain}/projects/${project}</loc>\n`
            xml += `    <lastmod>${currentDate}</lastmod>\n`
            xml += `    <changefreq>weekly</changefreq>\n`
            xml += `  </url>\n`
        }
    }
}

xml += `</urlset>`

fs.writeFileSync(path.join(__dirname, '../../../public/sitemap.xml'), xml)
console.log('[Post Build][Sitemap] Sitemap built!')
