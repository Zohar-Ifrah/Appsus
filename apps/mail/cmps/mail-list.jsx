import { MailPreview } from "./mail-preview.jsx";

export function MailList({ mails, onChangeSettings }) {

    return (
        <table border="1" className="mail-list">
            <thead>
                <tr>
                    <td>
                    <button>date</button>
                    <button>subject</button>
                    <button>all</button>
                    </td>
                </tr>
            </thead>
            <tbody>
                {mails.map(mail => <MailPreview key={mail.id} mail={mail} onChangeSettings={onChangeSettings} />)}
            </tbody>
        </table>
    )

}
