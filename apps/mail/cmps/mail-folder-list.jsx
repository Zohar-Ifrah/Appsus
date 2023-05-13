const { Link, Outlet } = ReactRouterDOM

export function MailFolderList({ onSetFilter, unreadCount, setIsComposed }) {

    return (
        <div className="mail-folder-list">
            <button onClick={() => setIsComposed(true)} className="mail-compose-btn">🖊️ compose </button>

            <button onClick={() => onSetFilter({ status: 'inbox' })}><span><i className="icon-inbox">
            </i>  <span className="inbox-txt">Inbox</span></span><span>{unreadCount}</span> </button>

            {/* <button onClick={() => onSetFilter({ status: 'starred' })}><span><i className="icon-star-empty">
            </i>  Starred</span></button> */}

            <button onClick={() => onSetFilter({ status: 'sent' })}><span>{<img className='sent-img'
                src="../assets/img/sent.svg" alt="" />} <span className="sent-txt">Sent</span></span></button>

            <button onClick={() => onSetFilter({ status: 'draft' })}><span><i className="icon-file-alt">
            </i>  <span className="draft-txt">Draft</span></span></button>

            <button onClick={() => onSetFilter({ status: 'trash' })}><span><i className="icon-trash">
            </i> <span className="inbox-txt">Trash</span></span></button>

            <button onClick={() => onSetFilter({ status: 'all' })}>All Mail</button>
            <section>
                <Outlet />
            </section>
        </div>
    )
}