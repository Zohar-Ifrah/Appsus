const { useState } = React

export function MailSearch({ filterBy, onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    function handleChange({ target }) {
        const field = target.name
        const value = target.value
        setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, [field]: value }))
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        console.log(filterByToEdit)
        onSetFilter(filterByToEdit)
    }

    const { body } = filterByToEdit
    return (
        // <form onSubmit={onSubmitFilter} onChange={(e) => handleChange(e)} className="mail-search">
        //     <label htmlFor="body">search:</label>
        //     <input value={body} type="search" name="body" id="body" placeholder={` Search mail`} />
        // </form>
        <h1>hi</h1>
    )
}

