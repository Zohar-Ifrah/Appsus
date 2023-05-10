import { MailCompose } from "./mail-compose.jsx";

export function MailFolderList({ mails }) {

    return (
        <div className="mail-folder-list">
            <MailCompose />
            <button>Inbox</button>
            <button>Starred</button>
            <button>Sent</button>
            <button>Draft</button>
            <button>Trash</button>
        </div>
    )
}