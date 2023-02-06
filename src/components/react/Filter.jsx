const Filter = () => {
    return (
        <div className="filter">
            <form action="">
                <legend>
                    <label htmlFor="html">HTML</label>
                    <input type="checkbox" name="HTML" id="html" />
                    <hr />
                    <label htmlFor="css">CSS</label><input type="checkbox" name="css" id="css" />
                    <hr />
                    <label htmlFor="javascript">Javascript</label><input type="checkbox" name="Javascript" id="javascript" />
                    <hr />
                </legend>
            </form>
        </div>
    )
}

export default Filter