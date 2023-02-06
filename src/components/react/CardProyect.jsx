import './CardProyect.css'
const CardProyect = (props) => {
    return (
        <article className="card_proyect">
            <img 
                className="card_proyect__image" 
                width="100" 
                src={props.image.url}
                alt={props.image.alt}
                title={props.image.alt} />
            <h3 className="card_proyect__title">{props.title}</h3>
            <div className="card_proyect__details">
                <p className="card_proyect__title-detail">Tecnologias:</p>
                <div className="card_proyect__tools">
                    {
                        props.tools.map(tool => <span key={tool} className="card_proyect__tool">{tool}</span>)
                    }
                </div>
            </div>
            <a href={`https://www.${props.link}`} className="button button--primary">Ir al proyecto</a>
    </article>
    )
}

export default CardProyect