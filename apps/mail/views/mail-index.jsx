const { Link } = ReactRouterDOM
const { useEffect, useState } = React

import { MailFolderList } from "../cmps/mail-folder-list.jsx"
import { MailList } from "../cmps/mail-list.jsx"
import { MailLogo } from "../cmps/mail-logo.jsx"
import { MailSearch } from "../cmps/mail-search.jsx"
import { mailService } from "../services/mail.service.js"


export function MailIndex() {

    const [mails, setMails] = useState([])
    // const [selectedMail, setSelectedMail] = useState(null)
    // const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())

    useEffect(() => {
        console.log('first load mail-index')
        loadMails()
    }, [])

    function loadMails() {
        mailService.query().then(setMails)
        // mailService.query().then(setMails)
    }

    function onRemoveMail(mailId) {
        // mailService.remove(mailId).then(() => {
        //     const updatedMails = mails.filter(mail => mail.id !== mailId)
        //     setMails(updatedMails)
        // })
        console.log('remove mail')
    }

    // function onSetFilter(filterBy) {
    //     setFilterBy(prevFilterBy => ({ ...prevFilterBy, ...filterBy }))
    // }

    // function onSelectmail(mail) {
    //     // setSelectedMail(mail)
    //     // setFilterBy(mailService.getDefaultFilter)

    // }

    console.log('render mail-index')
    return (
        <section className="mails-page main-layout">
            <div className="mails-index" >
                {/* {!selectedMail && <React.Fragment> */}
                {<React.Fragment>
                    {/* <MailFilter onSetFilter={onSetFilter} filterBy={filterBy} />
                    <div className="add-mail">
                    <Link to="/mail/edit"><button className="add-mail-btn">Add mail</button></Link>
                    <Link to="/mail/google-add"><button className="add-mail-btn">Add Google mail</button></Link>
                    </div> */}
                    <MailLogo />
                    <MailSearch />
                    <div className="mail-lists">
                    <MailFolderList />
                    <MailList mails={mails} onRemoveMail={onRemoveMail} />
                    </div>
                </React.Fragment>}
            </div>
            {/* {selectedMail && <MailDetails onBack={() => setSelectedMail(null)} mail={selectedMail} />} */}
        </section>
    )
}
