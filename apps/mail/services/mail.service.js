import { storageService } from "../../../services/async-storage.service.js"
import { storage } from "../../../services/storage.service.js"

export const mailService = {
    query,
    get,
    remove,
    save,
    getEmptyFields,
    getUser
    // getEmptymail,

    // updateReview,
    // getNextmailId,
    // getPrevmailId,
    // googlmailsQuery
}
const MAIL_KEY = 'mailsDB'

const loggedinUser = {
    mail: 'zoharYuval@Appsus.com',
    fullname: 'Zohar Yuval'
}

const demoData = [
    {
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: {
            mail: 'Popo@popo.com',
            fullname: 'Popo Po'
        },
        to: 'zoharYuval@Appsus.com',
        status: 'inbox'
    },
    {
        id: 'e102',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: true,
        sentAt: 1551133930594,
        removedAt: null,
        from: loggedinUser
        ,
        to: 'momo@momo.com',
        status: 'sent'
    },
    {
        id: 'e103',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: {
            mail: 'momo@momo.com',
            fullname: 'momo mo'
        },
        to: 'zoharYuval@appsus.com',
        status: 'inbox'
    },
    {
        id: 'e104',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: {
            mail: 'puki@pu.com',
            fullname: 'puki pu'
        },
        to: 'zoharYuval@appsus.com',
        status: 'inbox'
    },
    {
        id: 'e105',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: loggedinUser,
        to: 'assus@assus.com',
        status: 'sent'
    },
    {
        id: 'e106',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: 1551133930594,
        from: loggedinUser,
        to: 'assus@assus.com',
        status: 'trash'
    },
    {
        id: 'e107',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: loggedinUser,
        to: 'assus@assus.com',
        status: 'draft'
    }
]

//first load of DB
_createMails()

function query(filterBy = {}) {
    return storageService.query(MAIL_KEY)
        .then(mails => {

            // render only mails that contains the *TXT* input
            if (filterBy.txt) {
                console.log(filterBy.txt)
                const regExp = new RegExp(filterBy.txt, 'i')
                mails = mails.filter(mail => regExp.test(mail.body)) //|| regExp.test(mail.subject)
            }

            
            if (filterBy.status) {
                if (filterBy.status === 'all') return mails
                mails = _filterMails(mails, filterBy.status)
            }
            return mails
        })
}

// return mail from DB by id
function get(mailId) {
    return storageService.get(MAIL_KEY, mailId)
}

// remove mail from DB by id
function remove(mailId) {
    return storageService.remove(MAIL_KEY, mailId)
}

// (edit / add a new) mail, by id
function save(mail) {
    if (mail.id) {
        return storageService.put(MAIL_KEY, mail) // edit mail
    } else {
        return storageService.post(MAIL_KEY, mail) // new mail
    }
}

function getEmptyFields() {
    const filterBy = {
        from: '',
        to: '',
        subject: '',
        body: ''
    }
    return filterBy
}

function _createMails() {
    let mails = storage.loadFromStorage(MAIL_KEY) || demoData
    if (mails.length === 0) mails = demoData
    storage.saveToStorage(MAIL_KEY, mails)
}

function _filterMails(mails, filter) {
    mails = mails.filter(mail => mail.status === filter)
    return mails
}

function getUser(){
    return loggedinUser
}