import { MailPreview } from "./mail-preview.jsx"

export function MailList({ mails, onChangeStatus, onDeleteMail, onSetStared }) {
    return (
        <div className="mail-list-container">
            <table className="mail-list">
                <tbody>
                    {mails.map(mail => (
                        <MailPreview key={mail.id} mail={mail} onChangeStatus={onChangeStatus}
                            onDeleteMail={onDeleteMail} onSetStared={onSetStared} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}