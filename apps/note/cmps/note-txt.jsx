export function NoteTxt({note}) {
    return (
        <div>

            <h1 contentEditable={true} suppressContentEditableWarning={true}>{note.info.txt}</h1>
        </div>
    );
}
