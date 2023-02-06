import CardProyect from "./CardProyect"
import Filter from "./Filter"
const Component = ({data}) => {
    const proyects = data.map(proyect => proyect.frontmatter)
    return (
        <div>
            <Filter  />
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