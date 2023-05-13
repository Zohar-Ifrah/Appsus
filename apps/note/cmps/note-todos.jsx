export function NoteTodos({ note }) {
    console.log(note.info.todos[0].txt);
    return (
        <React.Fragment>
            <h1>Plans:</h1>
            <h3>{note.info.title}</h3>

            <p contentEditable>{note.info.todos[0].txt}
             <span>{note.info.todos[0].doneAt? ' Done' : ' Need to do'}</span>
             </p>
            <p contentEditable>{note.info.todos[1].txt}
            <span>{note.info.todos[1].doneAt? ' Done' : ' Need to do'}</span>
                </p>


        </React.Fragment>
    );
}
