export function NoteTodos({ note }) {

    return (
        <React.Fragment>

            <div contentEditable="true" suppressContentEditableWarning={true}>{note.info.title}</div>
            <h1>{note.info.title}</h1>

        </React.Fragment>
    );
}

// {
//     id: 'n103',
//     type: 'NoteTodos',
//     isPinned: false,
//     info: {
//         title: 'Get my stuff together',
//         todos: [
//             { txt: 'Driving license', doneAt: null },
//             { txt: 'Coding power', doneAt: 187111111 }
//         ]