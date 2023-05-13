const { useEffect, useState } = React

import { DropdownFilter } from "../cmps/dropdown-filter.jsx"
import { DropdownSort } from "../cmps/dropdown-sort.jsx"
import { MailCompose } from "../cmps/mail-compose.jsx"
import { MailFolderList } from "../cmps/mail-folder-list.jsx"
import { MailList } from "../cmps/mail-list.jsx"
import { MailLogo } from "../cmps/mail-logo.jsx"
import { MailSearch } from "../cmps/mail-search.jsx"
import { mailService } from "../services/mail.service.js"

export function MailIndex() {
    const [mails, setMails] = useState([])
    const [filterBy, setFilterBy] = useState({ status: 'inbox' })
    const [sortBy, setSortBy] = useState()
    const [unreadCount, setUnreadCount] = useState()
    const [isComposed, setIsComposed] = useState(false)

    useEffect(() => {
        loadMails()
    }, [filterBy, isComposed, sortBy])

    function loadMails() {
        mailService.query(filterBy, sortBy).then(({ mails, unreadCount }) => {
            setMails(mails)
            setUnreadCount(unreadCount)
        })
    }

    function onSetComposed(val) {
        setIsComposed(val) //why not render??
        // loadMails()        //why not render??
    }

    function onDeleteMail(mail, val) {
        const mailToDel = { ...mail }
        const updateMails = mails.slice()
        const idx = mails.findIndex(mail => mail.id === mailToDel.id)

        if (mail.status === 'trash') { // PERMENET Delete
            mailService.save(mailToDel).then(() => { // to update service
                updateMails.splice(idx, 1)
                setMails(updateMails) // to update DOM  >>> why dont update to dom right away?
                // loadMails() // to update DOM         >>> why dont update to dom right away?
                console.log('Conversation moved to Trash.') // to be user msg
            })
        } else { // move to trash 
            mailToDel.status = 'trash'
            mailService.save(mailToDel).then(() => { // to update service
                updateMails.splice(idx, 1, mailToDel)
                setMails(updateMails) // to update DOM
            })
        }
    }

    // change the mail field (status/isRead) to value (status :inbox/trash.. isRead: true/false )
    //>>> update mails with setMails >>> sends user msg
    function onChangeStatus(id, field, val) {

        const mailToUpdate = mails.find(mail => mail.id === id)
        mailToUpdate[field] = val

        mailService.save(mailToUpdate).then(() => { // to update service
            const updateMails = mails.slice()
            const idx = mails.findIndex(mail => mail.id === id)

            updateMails.splice(idx, 1, mailToUpdate)
            setMails(updateMails) // to update DOM
        })
    }
    function onSetStared(val, mail) {
        const mailToUpdate = { ...mail }
        mailToUpdate.isStar = val
        mailService.save(mailToUpdate).then(() => { // to update service
            const updateMails = mails.slice()
            const idx = mails.findIndex(mail => mail.id === mailToUpdate.id)
            updateMails.splice(idx, 1, mailToUpdate)
            setMails(updateMails) // to update DOM
        })
    }

    function onSetFilter(filterBy) {
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, ...filterBy }))
    }

    function onSetSort(sortBy) {
        setSortBy(prevSortBy => ({ ...prevSortBy, ...sortBy }))
    }

    console.log('render mail-index')
    return (
        <section className="mails-page main-layout">
            <div className="mails-index" >
                {<React.Fragment>
                    <div className='mail-head'>
                        <MailLogo />
                        <MailSearch filterBy={filterBy} onSetFilter={onSetFilter} />
                    </div>

                    <div className="dropdown-btns">
                        <DropdownFilter onSetFilter={onSetFilter} />
                        <DropdownSort onSetSort={onSetSort} />
                    </div>

                    <div className="mail-lists">
                        <MailFolderList onSetFilter={onSetFilter} unreadCount={unreadCount} setIsComposed={setIsComposed} />
                        <MailList mails={mails} onChangeStatus={onChangeStatus} onDeleteMail={onDeleteMail} onSetStared={onSetStared} />
                    </div>
                </React.Fragment>}
                {isComposed && <MailCompose onSetComposed={onSetComposed} />}
            </div>
        </section>
    )
}
