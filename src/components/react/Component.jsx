import { useState } from "react"
import CardProyect from "./CardProyect"
import Filter from "./Filter"
const Component = ({data, tags}) => {
    const proyectsData = data.map(proyect => proyect.frontmatter)
    const [proyects,setProyect] = useState(proyectsData)

    function filter(e) {
        const tag = e.target.value
        if (tag === 'all'){
            setProyect(proyectsData)
            return
        }
        console.log(tag)
        const newProyects = proyects.filter( proyect => {
            const tags = proyect.tools
            const isInclude = tags.some( a => a===tag)
            return isInclude 
        })
        setProyect(newProyects)
    }
    return (
        <div>
            <Filter tags={tags} add={filter} />
            {
                proyects.map((proyect,i) => (
                    <CardProyect
                        key={i}
                        title={proyect.title}
                        tools={proyect.tools}
                        link={proyect.link}
                        image={proyect.image}
                    />
                ))
            }
        </div>
    )
    }
 

export default Component