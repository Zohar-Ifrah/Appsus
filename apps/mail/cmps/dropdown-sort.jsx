export function DropdownSort({ onSetSort }) {

    function setSort(val) {
        switch (val) {
            case 'none':
                onSetSort({ subject: null, sentAt: null, address: null })
                break
            case 'date':
                onSetSort({ sentAt: true, subject: null, address: null })
                break
            case 'title':
                onSetSort({ subject: true, sentAt: null, address: null })
                break
            case 'mail':
                onSetSort({ address: true, subject: null, sentAt: null, })
                break
            default:
                break
        }
    }

    return (
        <select className="dropdown-sort" title="Sort by"
            onChange={(ev) => { setSort(ev.target.value) }}>
            <option value="none">None</option>
            <option value="date">Date</option>
            <option value="title">Title</option>
            <option value="mail">Mail</option>
        </select>
    )
}