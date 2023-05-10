import { storageService } from "../../../services/async-storage.service.js"

export const mailService = {
    query,
    get,
    remove,
    save
    // getEmptymail,
    // getDefaultFilter,
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
        to: 'zoharYuval@Appsus.com'
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
        to: 'momo@momo.com'
    },
    {
        id: 'e103',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: 1551133930594,
        from: {
            mail: 'momo@momo.com',
            fullname: 'momo mo'
        },
        to: 'zoharYuval@appsus.com'
    },
    {
        id: 'e104',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: 1551133930594,
        from: {
            mail: 'puki@pu.com',
            fullname: 'puki pu'
        },
        to: 'zoharYuval@appsus.com'
    },
    {
        id: 'e105',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: 1551133930594,
        from: loggedinUser,
        to: 'assus@assus.com'
    }
]


function query(filterBy = {}) {
    return storageService.query(MAIL_KEY)
        .then(mails => {
            if (!mails || mails.length === 0) mails = demoData
            return mails
        })

    // .then(mails => {
    //     // render only mails that contains the *TXT*
    //     if (filterBy.txt) {
    //         const regExp = new RegExp(filterBy.txt, 'i')
    //         mails = mails.filter(mail => regExp.test(mail.title))
    //     }

    //     // render only mails that *LOWER* price then Max-Price
    //     if (filterBy.maxPrice) {
    //         mails = mails.filter(mail => mail.listPrice.amount <= filterBy.maxPrice)
    //     }

    //     // render only mails that on *SALE*
    //     if (filterBy.isOnSale) {
    //         mails = mails.filter(mail => mail.listPrice.isOnSale)
    //     }
    //     return mails
    // })
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

