import { MailPreview } from "./mail-preview.jsx";

export function MailList({ mails, onSetTrashMail }) {

    return (
        <table border="1" className="mail-list">
            <thead>
                <tr>
                    <th>sorting</th>
                </tr>
            </thead>
            <tbody>
                {mails.map(mail => <MailPreview key={mail.id} mail={mail} onSetTrashMail={onSetTrashMail} />)}
            </tbody>
        </table>
    )

}
