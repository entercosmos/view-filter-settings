import TextEditor from './TextEditor'
import FileTypeEditor from './FileTypeEditor'
import AutonumberEditor from './AutonumberEditor'
import NumberEditor from './NumberEditor'
import CheckboxEditor from './CheckboxEditor'
import CollaboratorEditor from './CollaboratorEditor'
import MultipleCollaboratorEditor from './MultipleCollaboratorEditor'
import DateEditor from './DateEditor'
import MultipleSelectEditor from './MultipleSelectEditor'
import SingleSelectEditor from './SingleSelectEditor'

export default {
    text: TextEditor,
    filetype: FileTypeEditor,
    autonumber: AutonumberEditor,
    number: NumberEditor,
    checkbox: CheckboxEditor,
    collaborator: CollaboratorEditor,
    multipleCollaborator: MultipleCollaboratorEditor,
    date: DateEditor,
    multipleSelect: MultipleSelectEditor,
    singleSelect: SingleSelectEditor
}