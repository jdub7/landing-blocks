import { Sema } from 'async-sema'
import url from 'url'
import capture from 'capture-website'
import { demosPaths } from '../constants'
// capture-website --type jpeg http://localhost:3000/docs  --output screen.jpg --overwrite --scale-factor 0.5 --width 1200 --height 1400

const semaphore = new Sema(10)

async function main({ paths }: { paths: typeof demosPaths }) {
    const promises = paths.map(async ({ urlPath, imagePath }) => {
        try {
            await semaphore.acquire()
            const output = `public/${imagePath}`
            const uri = new url.URL(
                urlPath,
                'http://localhost:3000/',
            ).toString()

            console.log(`screenshotting '${uri}' to '${output}'`)
            const res = await capture.file(uri, output, {
                width: 1200,
                height: 1400,
                scaleFactor: 0.5,
                overwrite: true,
                type: 'jpeg',
                delay: 5,
            })
        } finally {
            await semaphore.release()
        }
    })
    await Promise.all(promises)
}

main({
    paths: demosPaths,
}).catch(console.error)
