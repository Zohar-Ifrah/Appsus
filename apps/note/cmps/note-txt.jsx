export function NoteTxt({note}) {
    return (
        <div width="200px" height="50px">
            <span>{note.info.txt}</span>
            <span contentEditable={true} suppressContentEditableWarning={true}></span>
        </div>
    );
}
