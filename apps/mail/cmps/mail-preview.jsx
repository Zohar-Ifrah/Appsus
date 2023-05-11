import { utilService } from "../../../services/util.service.js";

const { Fragment, useState } = React
const { Link } = ReactRouterDOM

export function MailPreview({ mail, onSetTrashMail }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const date = new Date(mail.sentAt)
    const month = utilService.getMonthName(date)
    const day = date.getDate()

    return <Fragment>
        <tr onClick={() => setIsExpanded(prevIsExpanded => !prevIsExpanded)}>

            <td>{mail.from.fullname}</td>
            <td>{mail.subject}</td>
            <td>{mail.body}</td>
            <td>{month + ' ' + day}</td>

        </tr>
        {
            isExpanded && <tr>
                <td colSpan="4">
                    {mail.subject}{' '}
                    {mail.body}
                    <button title="Enter mail">{'▢'}</button>
                    <button title="Mark as read">{'✉️'}</button>
                    <button title="Delete" onClick={() => onSetTrashMail(mail.id)}>{'🗑'}</button>
                    <br />
                    {mail.from.fullname}
                    {` <${mail.from.mail}> `}
                    <br />
                    some words to fill the area just a bit to make it look bigger ty for reading!!
                </td>
            </tr>
        }
    </Fragment >
}
