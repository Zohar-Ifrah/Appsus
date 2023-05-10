const { Fragment, useState } = React
const { Link } = ReactRouterDOM

export function MailPreview({ mail }) {
    const [isExpanded, setIsExpanded] = useState(false)

    return <Fragment>
        <tr onClick={() => setIsExpanded(prevIsExpanded => !prevIsExpanded)}>

            <td>{mail.from.fullname}</td>
            <td>{mail.subject}</td>
            <td>{mail.body}</td>
            <td>{mail.sentAt}</td>

        </tr>
        {
            isExpanded && <tr>
                <td colSpan="4">
                    {mail.subject}{' '}
                    {mail.body}
                    <button title="Enter mail">{'▢'}</button>
                    <button title="Mark as read">{'✉️'}</button>
                    <button title="Delete">{'🗑'}</button>
                    <br />
                    {mail.from.fullname}
                    {` <${mail.from.mail}> `}
                    <br />
                    some words to fill the area just a bit to make it look bigger ty for reading!!
                </td>
            </tr>
        }
    </Fragment >
}
