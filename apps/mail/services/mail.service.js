import { storageService } from "../../../services/async-storage.service.js"
import { storage } from "../../../services/storage.service.js"

export const mailService = {
    query,
    get,
    remove,
    save,
    getEmptyFields,
    getUser
}
const MAIL_KEY = 'mailsDB'

const loggedinUser = {
    mail: 'zoharYuval@Appsus.com',
    fullname: 'Zohar Yuval'
}

const demoData = [
    {
        id: 'e114',
        subject: 'Reminder: Meeting Tomorrow',
        body: 'Just a friendly reminder that we have a meeting scheduled for tomorrow at 10am. Looking forward to seeing you there!',
        isRead: true,
        sentAt: 1551133930594,
        removedAt: null,
        from: {
            mail: 'sarah.smith@abc.com',
            fullname: 'Sarah Smith'
        },
        to: 'zoharYuval@appsus.com',
        status: 'inbox',
        isStar: false
    },
    {
        id: 'e115',
        subject: 'Project Update',
        body: 'Hi Zohar, just wanted to give you a quick update on the project. Everything is going smoothly and we\'re on track to hit our targets.Let me know if you have any questions!',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: {
            mail: 'john.doe@xyz.com',
            fullname: 'John Doe'
        },
        to: 'zoharYuval@appsus.com',
        status: 'inbox',
        isStar: true
    },
    {
        id: 'e116',
        subject: 'Invitation to a Networking Event',
        body: 'Hi Zohar, I wanted to extend an invitation to a networking event next week. There will be a lot of great professionals attending, and I think it would be a great opportunity for you to make some new connections. Let me know if you\'re interested!',
        isRead: true,
        sentAt: 1551133930594,
        removedAt: null,
        from: {
            mail: 'jane.doe@abc.com',
            fullname: 'Jane Doe'
        },
        to: 'zoharYuval@appsus.com',
        status: 'inbox',
        isStar: true
    },
    {
        id: 'e117',
        subject: 'Invoice #1234',
        body: 'Hi Zohar, just wanted to send over the invoice for this month. Please let me know if you have any questions or concerns. Thanks!',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: {
            mail: 'accounting@xyz.com',
            fullname: 'Accounting Department'
        },
        to: 'zoharYuval@appsus.com',
        status: 'inbox',
        isStar: false
    },
    {
        id: 'e118',
        subject: 'Feedback Request',
        body: 'Hi Zohar, I hope this email finds you well. We wanted to request your feedback on our recent product launch. Please take a moment to fill out this survey and let us know your thoughts. Thanks!',
        isRead: true,
        sentAt: 1551133930594,
        removedAt: null,
        from: {
            mail: 'feedback@abc.com',
            fullname: 'Feedback Team'
        },
        to: 'zoharYuval@appsus.com',
        status: 'inbox',
        isStar: true
    },
    {
        id: 'e120',
        subject: 'Meeting reminder',
        body: 'Hi there, just a friendly reminder that we have a meeting scheduled for tomorrow at 10 am in room 101. Looking forward to seeing you there.',
        isRead: true,
        sentAt: 1632115200000,
        removedAt: 1632115200000,
        from: {
            mail: 'jane.doe@example.com',
            fullname: 'Jane Doe'
        },
        to: 'john.smith@example.com',
        status: 'trash',
        isStar: false
    },
    {
        id: 'e121',
        subject: 'Re: Your invoice',
        body: 'Hello, thank you for submitting your invoice. We have reviewed it and will process the payment within the next 3-5 business days. If you have any questions or concerns, please don\'t hesitate to reach out to us.',
        isRead: false,
        sentAt: 1628745600000,
        removedAt: 1631270400000,
        from: {
            mail: 'accounting@company.com',
            fullname: 'Accounting Department'
        },
        to: 'jane.doe@example.com',
        status: 'trash',
        isStar: false
    },
    {
        id: 'e122',
        subject: 'Thanks for your order',
        body: 'Dear customer, thank you for your recent order. Your package is on its way and should arrive within the next 2-3 business days. If you have any questions or concerns, please don\'t hesitate to contact us.',
        isRead: false,
        sentAt: 1631270400000,
        removedAt: 1628745600000,
        from: {
            mail: 'sales@company.com',
            fullname: 'Sales Department'
        },
        to: 'jane.doe@example.com',
        status: 'trash',
        isStar: false
    },
    {
        id: 'e123',
        subject: 'Invitation to our event',
        body: 'Hi there, we would like to invite you to our annual charity event on June 1st at 7 pm. There will be food, drinks, and entertainment, and all proceeds will go to a good cause. We hope to see you there!',
        isRead: true,
        sentAt: 1621836000000,
        removedAt: null,
        from: {
            mail: 'events@company.com',
            fullname: 'Events Team'
        },
        to: 'jane.doe@example.com',
        status: 'trash',
        isStar: false
    },
    {
        id: 'e124',
        subject: 'Request for proposal',
        body: 'Dear Jane, we are interested in your company\'s services and would like to request a proposal for our upcoming project.Please let us know if you are available for a call to discuss further details.',
        isRead: false,
        sentAt: 1628640000000,
        removedAt: 1628973600000,
        from: {
            mail: 'bob.smith@client.com',
            fullname: 'Bob Smith'
        },
        to: 'jane.doe@example.com',
        status: 'trash',
        isStar: false
    },
    {
        id: 'e125',
        subject: 'Interested in your company',
        body: 'Dear Yuval, we are interested in your company\'s services and would like to request a proposal for our upcoming project.Please let us know if you are available for a call to discuss further details.',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: loggedinUser,
        to: 'kirbi@assus.com',
        status: 'sent',
        isStar: true
    },
    {
        id: 'e126',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: loggedinUser,
        to: 'guri@assus.com',
        status: 'sent',
        isStar: true
    },
    {
        id: 'e127',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: 1551133930594,
        from: loggedinUser,
        to: 'clud@assus.com',
        status: 'sent',
        isStar: false
    },
    {
        id: 'e128',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: loggedinUser,
        to: 'assus@assus.com',
        status: 'draft',
        isStar: false
    },
    {
        id: 'e129',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: loggedinUser,
        to: 'harry@Appsus.com',
        status: 'sent',
        isStar: true
    },
    {
        id: 'e130',
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
        status: 'draft',
        isStar: false
    },
    {
        id: 'e131',
        subject: 'Lets meet!',
        body: 'Would love to catch up sometimes we can go to the river and have a nice time',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: {
            mail: 'Shuki@pu.com',
            fullname: 'Shuki puk'
        },
        to: 'zoharYuval@appsus.com',
        status: 'draft',
        isStar: true
    },
    {
        id: 'e132',
        subject: 'Hi there!',
        body: 'We can go to the river and have a nice time, Would love to catch up sometimes!',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: {
            mail: 'Shuki@pu.com',
            fullname: 'Shuki puk'
        },
        to: 'zoharYuval@appsus.com',
        status: 'draft',
        isStar: true
    },
    {
        id: 'e133',
        subject: 'Lets meet!',
        body: 'Would love to catch up sometimes we can go to the river and have a nice time',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: {
            mail: 'Muki@pu.com',
            fullname: 'Muki muk'
        },
        to: 'zoharYuval@appsus.com',
        status: 'draft',
        isStar: true
    },
    {
        id: 'e134',
        subject: 'How are you?',
        body: 'Would love to have a nice time and catch up sometimes we can go to the river!',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: {
            mail: 'Yuki@pu.com',
            fullname: 'Yuki puk'
        },
        to: 'zoharYuval@appsus.com',
        status: 'draft',
        isStar: false
    },
    {
        id: 'e135',
        subject: 'Reminder: Meeting Tomorrow',
        body: 'Just a friendly reminder that we have a meeting scheduled for tomorrow at 10am. Looking forward to seeing you there!',
        isRead: true,
        sentAt: 1551133930594,
        removedAt: null,
        from: loggedinUser,
        to: 'sarah.smith@abc.com',
        status: 'sent',
        isStar: false
    },
    {
        id: 'e136',
        subject: 'Project Update',
        body: 'Hi Zohar, just wanted to give you a quick update on the project. Everything is going smoothly and we\'re on track to hit our targets.Let me know if you have any questions!',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: {
            mail: 'john.doe@xyz.com',
            fullname: 'John Doe'
        },
        to: 'zoharYuval@appsus.com',
        status: 'draft',
        isStar: true
    },
    {
        id: 'e137',
        subject: 'Invitation to a Networking Event',
        body: 'Hi Zohar, I wanted to extend an invitation to a networking event next week. There will be a lot of great professionals attending, and I think it would be a great opportunity for you to make some new connections. Let me know if you\'re interested!',
        isRead: true,
        sentAt: 1551133930594,
        removedAt: null,
        from: {
            mail: 'jane.doe@abc.com',
            fullname: 'Jane Doe'
        },
        to: 'zoharYuval@appsus.com',
        status: 'draft',
        isStar: true
    },
    {
        id: 'e138',
        subject: 'Invoice #1234',
        body: 'Hi Zohar, just wanted to send over the invoice for this month. Please let me know if you have any questions or concerns. Thanks!',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: {
            mail: 'accounting@xyz.com',
            fullname: 'Accounting Department'
        },
        to: 'zoharYuval@appsus.com',
        status: 'draft',
        isStar: false
    },
    {
        id: 'e139',
        subject: 'Feedback Request',
        body: 'Hi Zohar, I hope this email finds you well. We wanted to request your feedback on our recent product launch. Please take a moment to fill out this survey and let us know your thoughts. Thanks!',
        isRead: true,
        sentAt: 1551133930594,
        removedAt: null,
        from: loggedinUser,
        to: 'feedback@abc.com',
        status: 'sent',
        isStar: true
    },
    {
        id: 'e140',
        subject: 'Meeting reminder',
        body: 'Hi there, just a friendly reminder that we have a meeting scheduled for tomorrow at 10 am in room 101. Looking forward to seeing you there.',
        isRead: true,
        sentAt: 1632115200000,
        removedAt: 1632115200000,
        from: loggedinUser,
        to: 'jane.doe@example.com',
        status: 'sent',
        isStar: false
    },
    {
        id: 'e141',
        subject: 'Re: Your invoice',
        body: 'Hello, thank you for submitting your invoice. We have reviewed it and will process the payment within the next 3-5 business days. If you have any questions or concerns, please don\'t hesitate to reach out to us.',
        isRead: false,
        sentAt: 1628745600000,
        removedAt: 1631270400000,
        from: {
            mail: 'accounting@company.com',
            fullname: 'Accounting Department'
        },
        to: 'jane.doe@example.com',
        status: 'draft',
        isStar: false
    },
    {
        id: 'e142',
        subject: 'Thanks for your order',
        body: 'Dear customer, thank you for your recent order. Your package is on its way and should arrive within the next 2-3 business days. If you have any questions or concerns, please don\'t hesitate to contact us.',
        isRead: false,
        sentAt: 1631270400000,
        removedAt: 1628745600000,
        from: {
            mail: 'sales@company.com',
            fullname: 'Sales Department'
        },
        to: 'jane.doe@example.com',
        status: 'draft',
        isStar: false
    },
    {
        id: 'e143',
        subject: 'Invitation to our event',
        body: 'Hi there, we would like to invite you to our annual charity event on June 1st at 7 pm. There will be food, drinks, and entertainment, and all proceeds will go to a good cause. We hope to see you there!',
        isRead: true,
        sentAt: 1621836000000,
        removedAt: null,
        from: {
            mail: 'events@company.com',
            fullname: 'Events Team'
        },
        to: 'jane.doe@example.com',
        status: 'sent',
        isStar: false
    },
    {
        id: 'e144',
        subject: 'Request for proposal',
        body: 'Dear Jane, we are interested in your company\'s services and would like to request a proposal for our upcoming project.Please let us know if you are available for a call to discuss further details.',
        isRead: false,
        sentAt: 1628640000000,
        removedAt: 1628973600000,
        from: loggedinUser,
        to: 'jane.doe@example.com',
        status: 'sent',
        isStar: false
    }
]

//first load of DB
_createMails()

function query(filterBy = {}, sortBy = {}) {
    return storageService.query(MAIL_KEY)
        .then(mails => {
            const unreadCount = mails.reduce((count, mail) => {
                if (mail.status !== 'trash' && !mail.isRead && mail.to === 'zoharYuval@appsus.com') count++
                return count
            }, 0)

            if (filterBy.status) {
                if (filterBy.status !== 'all')
                    mails = _filterMails(mails, filterBy.status)
            }
            
            // render only mails that contains the *body* input that the user search
            if (filterBy.body) {
                const regExp = new RegExp(filterBy.body)
                mails = mails.filter(mail => regExp.test(mail.body) || regExp.test(mail.subject))
                console.log(mails)
            }

            // render mails that **read / not read / all** if default (thats way !== undefined)
            if (filterBy.isRead !== undefined) {
                if (filterBy.isRead) mails = mails.filter(mail => mail.isRead) // isRead = true
                else mails = mails.filter(mail => !mail.isRead) // isRead = fasle
            }

            if (filterBy.isStar !== undefined) {
                if (filterBy.isStar) mails = mails.filter(mail => mail.isStar) // isStar = true
                else mails = mails.filter(mail => !mail.isStar) // isStar = fasle
            }

            // Sortting:
            //sort by title:
            console.log(sortBy)
            if (sortBy.subject) {
                mails.sort((a, b) => a.subject.localeCompare(b.subject))
            }

            //sort by date:
            if (sortBy.sentAt) {
                mails.sort((a, b) => a.sentAt - b.sentAt)
            }

            //sort by mail:
            if (sortBy.address) {
                mails.sort((a, b) => a.to.localeCompare(b.to))
            }


            return { mails, unreadCount }
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

function getUser() {
    return loggedinUser
}