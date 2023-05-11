const { Link, Outlet } = ReactRouterDOM

export function MailFolderList({ onSetFilter }) {

    return (
        <div className="mail-folder-list">
            <Link to="/mail/compose"><button className="mail-compose-btn">compose</button></Link>
            <button onClick={() => onSetFilter({ status: 'inbox' })}>Inbox</button>
            <button onClick={() => onSetFilter({ status: 'starred' })}>Starred</button>
            <button onClick={() => onSetFilter({ status: 'sent' })}>Sent</button>
            <button onClick={() => onSetFilter({ status: 'draft' })}>Draft</button>
            <button onClick={() => onSetFilter({ status: 'trash' })}>Trash</button>
            <button onClick={() => onSetFilter({ status: 'all' })}>All Mail</button>
            <section>
                <Outlet />
            </section>
        </div>
    )
}