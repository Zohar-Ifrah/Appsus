const { useEffect, useState } = React

import { MailFolderList } from "../cmps/mail-folder-list.jsx"
import { MailList } from "../cmps/mail-list.jsx"
import { MailLogo } from "../cmps/mail-logo.jsx"
import { MailSearch } from "../cmps/mail-search.jsx"
import { mailService } from "../services/mail.service.js"

export function MailIndex() {
    const [mails, setMails] = useState([])
    const [filterBy, setFilterBy] = useState({status: 'inbox'})

    useEffect(() => {
        loadMails()
    }, [filterBy,])

    function loadMails() {
        mailService.query(filterBy).then(setMails)
    }

    // function onRemoveMail(mailId) { // to set to only remove from trash
    //     mailService.remove(mailId).then(() => {
    //         const updatedMails = mails.filter(mail => mail.id !== mailId)
    //         setMails(updatedMails)
    //     })
    //     console.log('remove mail')
    // }

    // change the mail *status* to *trash* and update mails with setMails
    function onSetTrashMail(id) { 
        const updatedMail = mails.find(mail => mail.id === id)
        updatedMail.status = 'trash'
        mailService.save(updatedMail).then(() => {
            const updatedMails = mails.filter(mail => mail.id !== id)
            updatedMails.push(updatedMail)
            setMails(updatedMails)
            loadMails()
        })
        console.log('Conversation moved to Trash.') // to be user msg
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
                    <MailFolderList onSetFilter={onSetFilter}/>
                    <MailList mails={mails} onSetTrashMail={onSetTrashMail} />
                    </div>
                </React.Fragment>}
            </div>
        </section>
    )
}
