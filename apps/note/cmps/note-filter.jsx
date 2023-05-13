const { useState, useEffect } = React

export function NoteFilter({ filterBy, onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)
  
    useEffect(() => {
      onSetFilter(filterByToEdit)
    }, [filterByToEdit])
  
    function handleChange({ target }) {
      const field = target.name
      const value = target.value
      setFilterByToEdit((prevFilterBy) => ({ ...prevFilterBy, [field]: value }))
    }
  
    function onSubmitFilter(ev) {
      ev.preventDefault()
      onSetFilter(filterByToEdit)
    }
  
    const { txt, type } = filterByToEdit
    return (
      <section className="note-filter">
        <h2>Filter notes by type</h2>
  
        <form onSubmit={onSubmitFilter}>
          <label htmlFor="type">Type:</label>
          <select
            value={type}
            onChange={handleChange}
            name="type"
            id="type"
            placeholder="By Type"
          >
            <option value="">All</option>
            <option value="NoteImg">Image</option>
            <option value="NoteTodos">Todo</option>
            <option value="NoteVideo">Video</option>
            <option value="NoteAudio">Audio</option>
            <option value="NoteAudio">Pinned</option>
          </select>
        </form>
      </section>
    )
  }