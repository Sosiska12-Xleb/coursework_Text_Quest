import readlineSync from 'readline-sync'
import fs from "fs"

const about = () => {
    const content = fs.readFileSync('../../assets/aboutProject.txt', 'utf-8')
    console.log(content)
}

export {about}