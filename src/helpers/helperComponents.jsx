import { AiFillEdit } from "react-icons/ai"
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im"

export const Text = ({ text, style, onClick }) => {
    return <div onClick={() => onClick()} className="text-item" style={style}>
        <div>
            {text}
        </div>
        <div>
            <AiFillEdit />
        </div>
    </div>
}

export const EditableText = ({ text, styleText, onClickText, onBlur, condition }) => {
    return <div>
        {condition ? <input maxLength="250" autoFocus onKeyDown={(e) => { e.key === 'Enter' && onBlur(e);}} onBlur={(e) => { onBlur(e); }} type='text'></input> :
            <Text style={styleText} onClick={(e) => { onClickText(e) }} text={text} />}
    </div>
}


export { AiFillEdit, ImCheckboxUnchecked, ImCheckboxChecked }