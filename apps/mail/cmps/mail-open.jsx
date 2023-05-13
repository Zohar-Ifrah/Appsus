import { utilService } from "../../../services/util.service.js";
const { useState } = React

export function MailOpen({ mail, onChangeStatus, onDeleteMail, onSetStared, setIsOpened }) {

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