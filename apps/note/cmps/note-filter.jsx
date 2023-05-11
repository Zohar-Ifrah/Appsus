const { useState, useEffect } = React

export function NoteFilter({ filterBy, onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)


    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        const field = target.name
        const value = target.value
        setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, [field]: value }))

    
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit);
    }

    const { txt, type } = filterByToEdit
    return (
        <section className="note-filter">
            <h2>Filter Our Notes</h2>

            <form onSubmit={onSubmitFilter}>
                <label htmlFor="txt">Search:</label>
                <input value={txt} onChange={handleChange} name="txt" id="txt" type="text" placeholder="text search" />

                <label htmlFor="type">TYPE:</label>
                <input value={type} onChange={handleChange} type="type" name="type" id="type" placeholder="By Type" />
                {/* <label htmlFor="isPinned"></label>
                <input value={isPinned} type="checkbox" id="isPinned" name="isPinned" onChange={handleChange} /> */}
               
            </form>

        </section>
    )
}