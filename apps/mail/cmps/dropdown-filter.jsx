export function DropdownFilter({ onSetFilter }) {

    function setFilter(val) {
        switch (val) {
            case 'none':
                val = true
                onSetFilter({ isRead: undefined, isStar: undefined })
                break
            case 'read':
                val = true
                onSetFilter({ isRead: true, isStar: undefined })
                break
            case 'unread':
                val = false
                onSetFilter({ isRead: false, isStar: undefined })
                break
            case 'starred':
                val = true
                onSetFilter({ isStar: true, isRead: undefined })
                break
            case 'unstarred':
                val = false
                onSetFilter({ isStar: false, isRead: undefined})
                break
            default:
                break
        }
    }

    return (
        <select className="dropdown-filter" name="category" title="Filter by"
            onChange={(ev) => { setFilter(ev.target.value) }}>
            <option value="none">None</option>
            <option value="read">Read</option>
            <option value="unread">Unread</option>
            <option value="starred">Starred</option>
            <option value="unstarred">Unstarred</option>
        </select>
    )
}