const { Link, Outlet } = ReactRouterDOM

export function MailFolderList({ onSetFilter, unreadCount }) {

    return (
        <div className="mail-folder-list">
            <Link to="/mail/compose"><button className="mail-compose-btn">🖊️ compose </button></Link>
            <button onClick={() => onSetFilter({ status: 'inbox' })}><span><i className="icon-inbox"></i>  Inbox</span><span>{unreadCount}</span> </button>
            <button onClick={() => onSetFilter({ status: 'starred' })}><span><i className="icon-star-empty"></i>  Starred</span></button>
            <button onClick={() => onSetFilter({ status: 'sent' })}><span>{ <img className='sent-img' src="../assets/img/sent.svg" alt="" /> }Sent</span></button>
            <button onClick={() => onSetFilter({ status: 'draft' })}><span><i className="icon-file-alt"></i>  Draft</span></button>
            <button onClick={() => onSetFilter({ status: 'trash' })}><span><i className="icon-trash"></i> Trash</span></button>
            <button onClick={() => onSetFilter({ status: 'all' })}>All Mail</button>
            <section>
                <Outlet />
            </section>
        </div>
    )
}