const Filter = ({tags,add}) => {
    return (
        <div className="filter">
            <form action="">
                <legend>
                    <div className="tecnologia">
                        <label htmlFor='all'>all</label>
                        <input type="radio" onClick={add} value='all' name="language" id='all' />
                     </div>
                    {
                        tags.map(tag => (
                            <div key={tag} className="tecnologia">
                                <label htmlFor={tag}>{tag}</label>
                                <input type="radio" onClick={add} value={tag} name="language" id={tag} />
                            </div>
                        ) )
                    }
                </legend>
            </form>
        </div>
    )
}

export default Filter