import { utilService } from "../../../services/util.service.js";
import { LongTxt } from "./long-txt.jsx";

const { Fragment, useState } = React
const { Link } = ReactRouterDOM

export function MailPreview({ mail, onChangeStatus, onDeleteMail, onSetStared }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const date = new Date(mail.sentAt)
    const month = utilService.getMonthName(date)
    const day = date.getDate()
    const txt = mail.body

    function starClicked(ev, val) {
        ev.stopPropagation()  // why not working???
        onSetStared(val, mail)
    }

    return (

        <React.Fragment>
            <tr className={`${mail.isRead ? 'white' : ''}`} onClick={() => setIsExpanded(prevIsExpanded => !prevIsExpanded)}>

                <td>
                    {mail.isStar ?
                        <button className="star-btn" title="Not starred"
                            onClick={() => starClicked(event, false)}>⭐</button> :
                        <button className="star-btn" title="Not starred" onClick={() => starClicked(event, true)}>
                            <img className='sent-img' src="../assets/img/star.svg" alt="" /></button>}
                    {mail.from.fullname}
                </td>
                <td>{mail.subject}</td>
                <td><LongTxt txt={mail.body} length={50} /></td>
                {/* <td>{mail.body}</td> */}
                {/* <td>{console.log(txt)}</td> */}
                <td>{month + ' ' + day}</td>

            </tr>
            {
                isExpanded && <tr className="expanded-tr">
                    <td colSpan="4">
                        {mail.subject}
                        {mail.body}


                        <button className="fa fa-external-link" title="Enter mail"></button>

                        {mail.isRead ?
                            <button className="fa fa-inbox" title="Mark as unread"
                                onClick={() => onChangeStatus(mail.id, 'isRead', false)}></button> :
                            <button className="fa fa-envelope" title="Mark as read"
                                onClick={() => onChangeStatus(mail.id, 'isRead', true)}></button>}

                        <button className="fa fa-trash" title="Delete"
                            onClick={() => onDeleteMail(mail, 'trash')}></button>
                        <br />
                        {mail.from.fullname}
                        {` <${mail.from.mail}> `}
                        <br />
                        some words to fill the area just a bit to make it look bigger ty for reading!!
                    </td>
                </tr>

            }
        </React.Fragment>
    )
}

