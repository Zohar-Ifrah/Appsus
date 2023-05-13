import { mailService } from "../services/mail.service.js"

const { useState } = React
const { useNavigate } = ReactRouterDOM

export function MailCompose({ onSetComposed }) {
    const [fieldInfo, setFieldInfo] = useState(mailService.getEmptyFields())
    const navigate = useNavigate()

    function handleChange({ target }) {
        const field = target.name
        const value = target.value
        setFieldInfo(prevFieldInfo => ({ ...prevFieldInfo, [field]: value }))
    }

    function onSentMail(ev) {
        ev.preventDefault()
        const user = mailService.getUser()
        const mail = fieldInfo
        if (fieldInfo.from === user.mail) {
            mail.from = user
            mail.status = 'sent'
        }
        else {
            mail.from = { mail: fieldInfo.from, fullname: fieldInfo.from.split('@')[0] }
            mail.status = 'inbox'
        }
        mail.isRead = false
        mail.sentAt = Date.now()
        mail.removedAt = null
        mailService.save(mail)
        onSetComposed(false)
    }

    const { from, to, subject, body } = fieldInfo
    return (
        <form onSubmit={onSentMail} className="compose-form">

            <h1>New Message <button onClick={() => onSetComposed(false)}>x</button></h1>


            <input type="email" name="from" onChange={handleChange} value={from} placeholder="From" />


            <input type="email" name="to" onChange={handleChange} value={to} placeholder="To" />


            <input type="text" name="subject" onChange={handleChange} value={subject} placeholder="Subject" required />


            <textarea name="body" onChange={handleChange} value={body} required></textarea>

            <button type="submit">Send</button>
        </form>
    )
}
