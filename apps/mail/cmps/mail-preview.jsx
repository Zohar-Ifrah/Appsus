import { utilService } from "../../../services/util.service.js";
import { LongTxt } from "./long-txt.jsx";
import { MailOpen } from "./mail-open.jsx";

const { useState } = React

export function MailPreview({ mail, onChangeStatus, onDeleteMail, onSetStared }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isOpened, setIsOpened] = useState(false)
    const date = new Date(mail.sentAt)
    const month = utilService.getMonthName(date)
    const day = date.getDate()
    const txt = mail.body

    function starClicked(ev, val) {
        ev.stopPropagation()  // why not working?
        onSetStared(val, mail)
    }

    function openMail() {
        setIsOpened(true)
    }

    return (

        <React.Fragment>
            <tr className={`${mail.isRead ? 'white' : ''}`} onClick={() => setIsExpanded(prevIsExpanded => !prevIsExpanded)}>

                <td>
                    {mail.isStar ?
                        <button className="star-btn" title="Not starred"
                            onClick={() => starClicked(event, false)}>⭐</button> :
                        <button className="star-btn" title="Not starred" onClick={() => starClicked(event, true)}>
                            <img className='sent-img' src="./assets/img/star.svg" alt="" /></button>}
                    {mail.from.fullname}
                </td>
                <td>{mail.subject}</td>
                <td><LongTxt txt={mail.body} length={40} /></td>
                <td>{month + ' ' + day}</td>

            </tr>
            {
                isExpanded && <tr className="expanded-tr">
                    <td colSpan="4">
                        <span>{mail.subject}</span>
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
                        <span>{mail.body}</span>
                        <br />
                        <span>
                            {mail.from.fullname}
                            {` <${mail.from.mail}> `}
                        </span>
                    </td>
                </tr>

            }
            {isOpened && <MailOpen mail={mail} onChangeStatus={onChangeStatus}
                onDeleteMail={onDeleteMail} onSetStared={onSetStared} setIsOpened={setIsOpened} />}
        </React.Fragment>
    )
}

