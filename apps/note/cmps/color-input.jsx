const { useState } = React

export function ColorInput({ noteId, onSetNoteColor }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState('#B4FF9F');

    const colors = ['#B4FF9F', '#F9FFA4', '#FFD59E', '#FFA1A1'];

    function handleSelectColor(color) {
        setSelectedColor(color);
        onSetNoteColor(noteId, color);
        setIsOpen(false);
    }

    return (
        <div className="color-input">
            <div
                className="color-picker"
                onClick={() => setIsOpen(!isOpen)}
                style={{ backgroundColor: selectedColor }} />
            {isOpen && (
                <div className="color-palette">
                    {colors.map((color) => (
                        <div
                            className="color-palette-item"
                            key={color}
                            style={{ backgroundColor: color }}
                            onClick={() => handleSelectColor(color)} />
                    ))}
                </div>
            )}
        </div>
    );
}


