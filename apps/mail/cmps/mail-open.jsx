import { utilService } from "../../../services/util.service.js";
import { LongTxt } from "./long-txt.jsx";

const { Fragment, useState } = React
const { Link } = ReactRouterDOM

export function MailOpen({ mail, onChangeStatus, onDeleteMail, onSetStared, setIsOpened }) {
    console.log(mail)
    const [isExpanded, setIsExpanded] = useState(false)
    const date = new Date(mail.sentAt)
    const month = utilService.getMonthName(date)
    const day = date.getDate()
    const txt = mail.body

    function starClicked(ev, val) {
        ev.stopPropagation()
        onSetStared(val, mail)
    }

    function openMail() {
        setIsOpened(false)
    }

    return (
        <div className="mail-open">
            <div className="expanded-tr-btns">
                <button className="fa fa-external-link" title="Enter mail"
                    onClick={() => openMail()}></button>

                {mail.isRead ?
                    <button className="fa fa-inbox" title="Mark as unread"
                        onClick={() => onChangeStatus(mail.id, 'isRead', false)}></button> :
                    <button className="fa fa-envelope" title="Mark as read"
                        onClick={() => onChangeStatus(mail.id, 'isRead', true)}></button>}

                <button className="fa fa-trash" title="Delete"
                    onClick={() => onDeleteMail(mail, 'trash')}></button>
            </div>
            <p>{mail.subject}</p>
            {mail.body}
            <br />
            <footer>
                {mail.from.fullname}
                {` <${mail.from.mail}> `}
            </footer>
        </div>

    )
}