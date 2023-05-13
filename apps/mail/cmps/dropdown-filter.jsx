export function DropdownFilter({ onSetFilter }) {

    function setFilter(val) {
        switch (val) {
            case 'none':
                onSetFilter({ isRead: undefined, isStar: undefined })
                break
            case 'read':
                onSetFilter({ isRead: true, isStar: undefined })
                break
            case 'unread':
                onSetFilter({ isRead: false, isStar: undefined })
                break
            case 'starred':
                onSetFilter({ isStar: true, isRead: undefined })
                break
            case 'unstarred':
                onSetFilter({ isStar: false, isRead: undefined })
                break
            default:
                break
        }
    }

    return (
        <select className="dropdown-filter" title="Filter by"
            onChange={(ev) => { setFilter(ev.target.value) }}>
            <option value="none">None</option>
            <option value="read">Read</option>
            <option value="unread">Unread</option>
            <option value="starred">Starred</option>
            <option value="unstarred">Unstarred</option>
        </select>
    )
}