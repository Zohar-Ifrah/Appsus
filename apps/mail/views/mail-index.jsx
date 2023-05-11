const { useEffect, useState } = React

import { MailCompose } from "../cmps/mail-compose.jsx"
import { MailFolderList } from "../cmps/mail-folder-list.jsx"
import { MailList } from "../cmps/mail-list.jsx"
import { MailLogo } from "../cmps/mail-logo.jsx"
import { MailSearch } from "../cmps/mail-search.jsx"
import { mailService } from "../services/mail.service.js"

export function MailIndex() {
    const [mails, setMails] = useState([])
    const [filterBy, setFilterBy] = useState({ status: 'inbox' })
    const [unreadCount, setUnreadCount] = useState()
    const [isComposed, setIsComposed] = useState(false)
    useEffect(() => {
        loadMails()
    }, [filterBy,])

    function loadMails() {
        mailService.query(filterBy).then(mails => {
            setMails(mails)
            const unreadCount = mails.reduce((count, mail) => {
                if (!mail.isRead) count++
                return count
            }, 0)
            setUnreadCount(unreadCount)
            console.log(unreadCount)
        })
    }

    // change the mail field (status/isRead) to value (status :inbox/trash.. isRead: true/false )
    //>>> update mails with setMails >>> sends user msg
    function onChangeSettings(id, field, val) {

        const mailToUpdate = mails.find(mail => mail.id === id)
        mailToUpdate[field] = val 

        mailService.save(mailToUpdate).then(() => { // to update service
            const updateMails = mails.slice()
            const idx = mails.findIndex(mail => mail.id === id)

            updateMails.splice(idx, 1, mailToUpdate)
            setMails(updateMails) // to update DOM
            
            if (val === 'trash'){ //if trash also update count
                loadMails()
                console.log('Conversation moved to Trash.') // to be user msg
            }
        })
    }

    function onSetFilter(filterBy) {
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, ...filterBy }))
    }

    console.log('render mail-index')
    return (
        <section className="mails-page main-layout">
            <div className="mails-index" >
                {<React.Fragment>
                    <MailLogo />
                    <MailSearch />
                    <div className="mail-lists">
                        <MailFolderList onSetFilter={onSetFilter} unreadCount={unreadCount} />
                        <MailList mails={mails} onChangeSettings={onChangeSettings} />
                    </div>
                </React.Fragment>}
                {isComposed && <MailCompose />}
            </div>
        </section>
    )
}
