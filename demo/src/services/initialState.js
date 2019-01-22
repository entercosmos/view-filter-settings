import {fromJS} from 'immutable'

export default fromJS({
    cache: {
        operatorsById: {
            'attachment_filename': {
                id: 'attachment_filename',
                name: 'filename',
                editorId: 'text',
                defaultValue: null
            },
            'attachment_filetype': {
                id: 'attachment_filetype',
                name: 'filetype',
                editorId: 'filetype',
                defaultValue: 'image/jpeg'
            },
            'attachment_isNotEmpty': {
                id: 'attachment_isNotEmpty',
                name: 'is not empty',
                defaultValue: null
            },
            'attachment_isEmpty': {
                id: 'attachment_isEmpty',
                name: 'is empty',
                defaultValue: null
            },
            'autonumber_!=': {
                id: 'autonumber_!=',
                name: '!=',
                editorId: 'number',
                defaultValue: null
            },
            'autonumber_<': {
                id: 'autonumber_<',
                name: '<',
                editorId: 'number',
                defaultValue: null
            },
            'autonumber_<=': {
                id: 'autonumber_<=',
                name: '<=',
                editorId: 'number',
                defaultValue: null
            },
            'autonumber_=': {
                id: 'autonumber_=',
                name: '=',
                editorId: 'number',
                defaultValue: null
            },
            'autonumber_>': {
                id: 'autonumber_>',
                name: '>',
                editorId: 'number',
                defaultValue: null
            },
            'autonumber_>=': {
                id: 'autonumber_>=',
                name: '>=',
                editorId: 'number',
                defaultValue: null
            },
            'checkbox_=': {
                id: 'checkbox_=',
                name: 'is',
                editorId: 'checkbox',
                defaultValue: false
            },
            'collaborator_=': {
                id: 'collaborator_=',
                name: 'is',
                editorId: 'collaborator',
                defaultValue: null
            },
            'collaborator_!=': {
                id: 'collaborator_!=',
                name: 'is not',
                editorId: 'collaborator',
                defaultValue: null
            },
            'collaborator_isAnyOf': {
                id: 'collaborator_isAnyOf',
                name: 'is any of',
                editorId: 'multipleCollaborator',
                defaultValue: []
            },
            'collaborator_isNoneOf': {
                id: 'collaborator_isNoneOf',
                name: 'is none of',
                editorId: 'multipleCollaborator',
                defaultValue: []
            },
            'collaborator_isEmpty': {
                id: 'collaborator_isEmpty',
                name: 'is empty',
                editorId: null,
                defaultValue: null
            },
            'collaborator_isNotEmpty': {
                id: 'collaborator_isNotEmpty',
                name: 'is not empty',
                editorId: null,
                defaultValue: null
            },
            'createdCollaborator_=': {
                id: 'createdCollaborator_=',
                name: 'is',
                editorId: 'collaborator',
                defaultValue: null
            },
            'createdCollaborator_!=': {
                id: 'createdCollaborator_!=',
                name: 'is not',
                editorId: 'collaborator',
                defaultValue: null
            },
            'createdCollaborator_isAnyOf': {
                id: 'createdCollaborator_isAnyOf',
                name: 'is any of',
                editorId: 'multipleCollaborator',
                defaultValue: []
            },
            'createdCollaborator_isNoneOf': {
                id: 'createdCollaborator_isNoneOf',
                name: 'is none of',
                editorId: 'multipleCollaborator',
                defaultValue: []
            },
            'createdTime_=': {
                id: 'createdTime_=',
                name: 'is',
                editorId: 'date',
                defaultValue: {
                    modeId: 'exactDate',
                    exactDate: null
                }
            },
            'createdTime_!=': {
                id: 'createdTime_!=',
                name: 'is not',
                editorId: 'date',
                defaultValue: {
                    modeId: 'exactDate',
                    exactDate: null
                }
            },
            'createdTime_isWithin': {
                id: 'createdTime_isWithin',
                name: 'is within',
                editorId: 'date',
                defaultValue: {
                    modeId: 'exactDate',
                    exactDate: null
                }
            },
            'createdTime_<': {
                id: 'createdTime_<',
                name: 'is before',
                editorId: 'date',
                defaultValue: {
                    modeId: 'exactDate',
                    exactDate: null
                }
            },
            'createdTime_>': {
                id: 'createdTime_>',
                name: 'is after',
                editorId: 'date',
                defaultValue: {
                    modeId: 'exactDate',
                    exactDate: null
                }
            },
            'createdTime_>=': {
                id: 'createdTime_>=',
                name: 'is on or after',
                editorId: 'date',
                defaultValue: {
                    modeId: 'exactDate',
                    exactDate: null
                }
            },
            'createdTime_<=': {
                id: 'createdTime_<=',
                name: 'is on or before',
                editorId: 'date',
                defaultValue: {
                    modeId: 'exactDate',
                    exactDate: null
                }
            },
            'date_=': {
                id: 'date_=',
                name: 'is',
                editorId: 'date',
                defaultValue: {
                    modeId: 'exactDate',
                    exactDate: null
                }
            },
            'date_!=': {
                id: 'date_!=',
                name: 'is not',
                editorId: 'date',
                defaultValue: {
                    modeId: 'exactDate',
                    exactDate: null
                }
            },
            'date_isWithin': {
                id: 'date_isWithin',
                name: 'is within',
                editorId: 'date',
                defaultValue: {
                    modeId: 'exactDate',
                    exactDate: null
                }
            },
            'date_<': {
                id: 'date_<',
                name: 'is before',
                editorId: 'date',
                defaultValue: {
                    modeId: 'exactDate',
                    exactDate: null
                }
            },
            'date_>': {
                id: 'date_>',
                name: 'is after',
                editorId: 'date',
                defaultValue: {
                    modeId: 'exactDate',
                    exactDate: null
                }
            },
            'date_>=': {
                id: 'date_>=',
                name: 'is on or after',
                editorId: 'date',
                defaultValue: {
                    modeId: 'exactDate',
                    exactDate: null
                }
            },
            'date_<=': {
                id: 'date_<=',
                name: 'is on or before',
                editorId: 'date',
                defaultValue: {
                    modeId: 'exactDate',
                    exactDate: null
                }
            },
            'date_isEmpty': {
                id: 'date_isEmpty',
                name: 'is empty',
                editorId: null
            },
            'date_isNotEmpty': {
                id: 'date_isNotEmpty',
                name: 'is not empty',
                editorId: null
            },
            'longText_contains': {
                id: 'longText_contains',
                name: 'contains',
                editorId: 'text',
                defaultValue: null
            },
            'longText_doesNotContain': {
                id: 'longText_doesNotContain',
                name: 'does not contain',
                editorId: 'text',
                defaultValue: null
            },
            'longText_=': {
                id: 'longText_=',
                name: 'is',
                editorId: 'text',
                defaultValue: null
            },
            'longText_!=': {
                id: 'longText_!=',
                name: 'is not',
                editorId: 'text',
                defaultValue: null
            },
            'longText_isEmpty': {
                id: 'longText_isEmpty',
                name: 'is empty',
                editorId: null,
                defaultValue: null
            },
            'longText_isNotEmpty': {
                id: 'longText_isNotEmpty',
                name: 'is not empty',
                editorId: null,
                defaultValue: null
            },
            'linkToAnotherRecord_contains': {
                id: 'linkToAnotherRecord_contains',
                name: 'contains',
                editorId: 'text',
                defaultValue: null
            },
            'linkToAnotherRecord_doesNotContain': {
                id: 'linkToAnotherRecord_doesNotContain',
                name: 'does not contain',
                editorId: 'text',
                defaultValue: null
            },
            'linkToAnotherRecord_isEmpty': {
                id: 'linkToAnotherRecord_isEmpty',
                name: 'is empty',
                editorId: null,
                defaultValue: null
            },
            'linkToAnotherRecord_isNotEmpty': {
                id: 'linkToAnotherRecord_isNotEmpty',
                name: 'is not empty',
                editorId: null,
                defaultValue: null
            },
            'multipleCollaborator_hasAnyOf': {
                id: 'multipleCollaborator_hasAnyOf',
                name: 'has any of',
                editorId: 'multipleCollaborator',
                defaultValue: []
            },
            'multipleCollaborator_hasAllOf': {
                id: 'multipleCollaborator_hasAllOf',
                name: 'has all of',
                editorId: 'multipleCollaborator',
                defaultValue: []
            },
            'multipleCollaborator_=': {
                id: 'multipleCollaborator_=',
                name: 'is',
                editorId: 'multipleCollaborator',
                defaultValue: []
            },
            'multipleCollaborator_hasNoneOf': {
                id: 'multipleCollaborator_hasNoneOf',
                name: 'has none of',
                editorId: 'multipleCollaborator',
                defaultValue: []
            },
            'multipleCollaborator_isEmpty': {
                id: 'multipleCollaborator_isEmpty',
                name: 'is empty',
                editorId: null,
                defaultValue: null
            },
            'multipleCollaborator_isNotEmpty': {
                id: 'multipleCollaborator_isNotEmpty',
                name: 'is not empty',
                editorId: null,
                defaultValue: null
            },
            'multipleSelect_hasAnyOf': {
                id: 'multipleSelect_hasAnyOf',
                name: 'has any of',
                editorId: 'multipleSelect',
                defaultValue: []
            },
            'multipleSelect_hasAllOf': {
                id: 'multipleSelect_hasAllOf',
                name: 'has all of',
                editorId: 'multipleSelect',
                defaultValue: []
            },
            'multipleSelect_=': {
                id: 'multipleSelect_=',
                name: 'is',
                editorId: 'multipleSelect',
                defaultValue: []
            },
            'multipleSelect_hasNoneOf': {
                id: 'multipleSelect_hasNoneOf',
                name: 'has none of',
                editorId: 'multipleSelect',
                defaultValue: []
            },
            'multipleSelect_isEmpty': {
                id: 'multipleSelect_isEmpty',
                name: 'is empty',
                editorId: null,
                defaultValue: null
            },
            'multipleSelect_isNotEmpty': {
                id: 'multipleSelect_isNotEmpty',
                name: 'is not empty',
                editorId: null,
                defaultValue: null
            },
            'number_=': {
                id: 'number_=',
                name: '=',
                editorId: 'number',
                defaultValue: null
            },
            'number_<': {
                id: 'number_<',
                name: '<',
                editorId: 'number',
                defaultValue: null
            },
            'number_<=': {
                id: 'number_<=',
                name: '<=',
                editorId: 'number',
                defaultValue: null
            },
            'number_!=': {
                id: 'number_!=',
                name: '!=',
                editorId: 'number',
                defaultValue: null
            },
            'number_>': {
                id: 'number_>',
                name: '>',
                editorId: 'number',
                defaultValue: null
            },
            'number_>=': {
                id: 'number_>=',
                name: '>=',
                editorId: 'number',
                defaultValue: null
            },
            'number_isEmpty': {
                id: 'number_isEmpty',
                name: 'is empty',
                editorId: null,
                defaultValue: null
            },
            'number_isNotEmpty': {
                id: 'number_isNotEmpty',
                name: 'is not empty',
                editorId: null,
                defaultValue: null
            },
            'singleLineText_contains': {
                id: 'singleLineText_contains',
                name: 'contains',
                editorId: 'text',
                defaultValue: null
            },
            'singleLineText_doesNotContain': {
                id: 'singleLineText_doesNotContain',
                name: 'doesNotContain',
                editorId: 'text',
                defaultValue: null
            },
            'singleLineText_=': {
                id: 'singleLineText_=',
                name: '=',
                editorId: 'text',
                defaultValue: null
            },
            'singleLineText_!=': {
                id: 'singleLineText_!=',
                name: '!=',
                editorId: 'text',
                defaultValue: null
            },
            'singleLineText_isEmpty': {
                id: 'singleLineText_isEmpty',
                name: 'is empty',
                editorId: null,
                defaultValue: null
            },
            'singleLineText_isNotEmpty': {
                id: 'singleLineText_isNotEmpty',
                name: 'is not emptuy',
                editorId: null,
                defaultValue: null
            },
            'singleSelect_=': {
                id: 'singleSelect_=',
                name: 'is',
                editorId: 'singleSelect',
                defaultValue: null
            },
            'singleSelect_!=': {
                id: 'singleSelect_!=',
                name: 'is not',
                editorId: 'singleSelect',
                defaultValue: null
            },
            'singleSelect_isAnyOf': {
                id: 'singleSelect_isAnyOf',
                name: 'is any of',
                editorId: 'multipleSelect',
                defaultValue: null
            },
            'singleSelect_isNoneOf': {
                id: 'singleSelect_isNoneOf',
                name: 'is none of',
                editorId: 'multipleSelect',
                defaultValue: null
            },
            'singleSelect_isEmpty': {
                id: 'singleSelect_isEmpty',
                name: 'is empty',
                editorId: null,
                defaultValue: null
            },
            'singleSelect_isNotEmpty': {
                id: 'singleSelect_isNotEmpty',
                name: 'is not empty',
                editorId: null,
                defaultValue: null
            },
            'updatedTime_=': {
                id: 'updatedTime_=',
                name: 'is',
                editorId: 'date',
                defaultValue: {
                    modeId: 'exactDate',
                    exactDate: null
                }
            },
            'updatedTime_!=': {
                id: 'updatedTime_!=',
                name: 'is not',
                editorId: 'date',
                defaultValue: {
                    modeId: 'exactDate',
                    exactDate: null
                }
            },
            'updatedTime_isWithin': {
                id: 'updatedTime_isWithin',
                name: 'is within',
                editorId: 'date',
                defaultValue: {
                    modeId: 'exactDate',
                    exactDate: null
                }
            },
            'updatedTime_<': {
                id: 'updatedTime_<',
                name: 'is before',
                editorId: 'date',
                defaultValue: {
                    modeId: 'exactDate',
                    exactDate: null
                }
            },
            'updatedTime_>': {
                id: 'updatedTime_>',
                name: 'is after',
                editorId: 'date',
                defaultValue: {
                    modeId: 'exactDate',
                    exactDate: null
                }
            },
            'updatedTime_>=': {
                id: 'updatedTime_>=',
                name: 'is on or after',
                editorId: 'date',
                defaultValue: {
                    modeId: 'exactDate',
                    exactDate: null
                }
            },
            'updatedTime_<=': {
                id: 'updatedTime_<=',
                name: 'is on or before',
                editorId: 'date',
                defaultValue: {
                    modeId: 'exactDate',
                    exactDate: null
                }
            },
            'updatedTime_isEmpty': {
                id: 'updatedTime_isEmpty',
                name: 'is empty',
                editorId: null,
                defaultValue: null
            },
            'updatedTime_isNotEmpty': {
                id: 'updatedTime_isNotEmpty',
                name: 'is not empty',
                editorId: null,
                defaultValue: null
            }
        },
        fieldTypesById: {
            'autonumber': {
                id: 'autonumber',
                name: 'Autonumber',
                operators: [
                    'autonumber_=',
                    'autonumber_<',
                    'autonumber_<=',
                    'autonumber_!=',
                    'autonumber_>',
                    'autonumber_>='
                ]
            },
            'attachment': {
                id: 'attachment',
                name: 'Attachments',
                operators: [
                    'attachment_filename',
                    'attachment_filetype',
                    'attachment_isEmpty',
                    'attachment_isNotEmpty'
                ]
            },
            'checkbox': {
                id: 'checkbox',
                name: 'Checkbox',
                operators: [
                    'checkbox_='
                ]
            },
            'collaborator': {
                id: 'collaborator',
                name: 'Collaborator',
                operators: [
                    'collaborator_=',
                    'collaborator_!=',
                    'collaborator_isAnyOf',
                    'collaborator_isNoneOf',
                    'collaborator_isEmpty',
                    'collaborator_isNotEmpty'
                ]
            },
            'createdCollaborator': {
                id: 'createdCollaborator',
                name: 'Created collaborator',
                operators: [
                    'createdCollaborator_=',
                    'createdCollaborator_!=',
                    'createdCollaborator_isAnyOf',
                    'createdCollaborator_isNoneOf',
                ]
            },
            'createdTime': {
                id: 'createdTime',
                name: 'Created time',
                operators: [
                    'createdTime_=',
                    'createdTime_!=',
                    'createdTime_isWithin',
                    'createdTime_<',
                    'createdTime_>',
                    'createdTime_>=',
                    'createdTime_<='
                ]
            },
            'date': {
                id: 'date',
                name: 'Date',
                operators: [
                    'date_=',
                    'date_!=',
                    'date_isWithin',
                    'date_<',
                    'date_>',
                    'date_>=',
                    'date_<=',
                    'date_isEmpty',
                    'date_isNotEmpty'
                ]
            },
            'longText': {
                id: 'longText',
                name: 'Long text',
                operators: [
                    'longText_contains',
                    'longText_doesNotContain',
                    'longText_=',
                    'longText_!=',
                    'longText_isEmpty',
                    'longText_isNotEmpty',
                ]
            },
            'linkToAnotherRecord': {
                id: 'linkToAnotherRecord',
                name: 'Link to another record',
                operators: [
                    'linkToAnotherRecord_contains',
                    'linkToAnotherRecord_doesNotContain',
                    'linkToAnotherRecord_isEmpty',
                    'linkToAnotherRecord_isNotEmpty'
                ]
            },
            'multipleCollaborator': {
                id: 'multipleCollaborator',
                name: 'Multiple collaborator',
                operators: [
                    'multipleCollaborator_hasAnyOf',
                    'multipleCollaborator_hasAllOf',
                    'multipleCollaborator_=',
                    'multipleCollaborator_hasNoneOf',
                    'multipleCollaborator_isEmpty',
                    'multipleCollaborator_isNotEmpty'
                ]
            },
            'multipleSelect': {
                id: 'multipleSelect',
                name: 'Multiple select',
                operators: [
                    'multipleSelect_hasAnyOf',
                    'multipleSelect_hasAllOf',
                    'multipleSelect_=',
                    'multipleSelect_hasNoneOf',
                    'multipleSelect_isEmpty',
                    'multipleSelect_isNotEmpty'
                ]
            },
            'number': {
                id: 'number',
                name: 'Number',
                operators: [
                    'number_=',
                    'number_<',
                    'number_<=',
                    'number_!=',
                    'number_>',
                    'number_>=',
                    'number_isEmpty',
                    'number_isNotEmpty'
                ]
            },
            'singleLineText': {
                id: 'singleLineText',
                name: 'Single line text',
                operators: [
                    'singleLineText_contains',
                    'singleLineText_doesNotContain',
                    'singleLineText_=',
                    'singleLineText_!=',
                    'singleLineText_isEmpty',
                    'singleLineText_isNotEmpty'
                ]
            },
            'singleSelect': {
                id: 'singleSelect',
                name: 'Single select',
                operators: [
                    'singleSelect_=',
                    'singleSelect_!=',
                    'singleSelect_isAnyOf',
                    'singleSelect_isNoneOf',
                    'singleSelect_isEmpty',
                    'singleSelect_isNotEmpty'
                ]
            },
            'updatedTime': {
                id: 'updatedTime',
                name: 'Updated time',
                operators: [
                    'updatedTime_=',
                    'updatedTime_!=',
                    'updatedTime_isWithin',
                    'updatedTime_<',
                    'updatedTime_>',
                    'updatedTime_>=',
                    'updatedTime_<=',
                    'updatedTime_isEmpty',
                    'updatedTime_isNotEmpty',
                ]
            }
        },
        fieldsById: {
            'autonumber': {
                id: 'autonumber',
                typeId: 'autonumber',
                name: 'Autonumber'
            },
            'attachment': {
                id: 'attachment',
                typeId: 'attachment',
                name: 'Attachments'
            },
            'checkbox': {
                id: 'checkbox',
                typeId: 'checkbox',
                name: 'Checkbox'
            },
            'collaborator': {
                id: 'collaborator',
                typeId: 'collaborator',
                name: 'Collaborator'
            },
            'createdCollaborator': {
                id: 'createdCollaborator',
                typeId: 'createdCollaborator',
                name: 'Created collaborator'
            },
            'createdTime': {
                id: 'createdTime',
                typeId: 'createdTime',
                name: 'Created time'
            },
            'date': {
                id: 'date',
                typeId: 'date',
                name: 'Date'
            },
            'longText': {
                id: 'longText',
                typeId: 'longText',
                name: 'Long text'
            },
            'linkToAnotherRecord': {
                id: 'linkToAnotherRecord',
                typeId: 'linkToAnotherRecord',
                name: 'Link to another record'
            },
            'multipleCollaborator': {
                id: 'multipleCollaborator',
                typeId: 'multipleCollaborator',
                name: 'Multiple collaborator'
            },
            'multipleSelect': {
                id: 'multipleSelect',
                typeId: 'multipleSelect',
                name: 'Multiple select'
            },
            'number': {
                id: 'number',
                typeId: 'number',
                name: 'Number'
            },
            'singleLineText': {
                id: 'singleLineText',
                typeId: 'singleLineText',
                name: 'Single line text'
            },
            'singleSelect': {
                id: 'singleSelect',
                typeId: 'singleSelect',
                name: 'Single select'
            },
            'updatedTime': {
                id: 'updatedTime',
                typeId: 'updatedTime',
                name: 'Updated time'
            }
        },
        filtersById: {
            'autonumber_!=': {
                id: 'autonumber_!=',
                fieldId: 'autonumber',
                operatorId: 'autonumber_!=',
                value: 2
            },
            'autonumber_<': {
                id: 'autonumber_<',
                fieldId: 'autonumber',
                operatorId: 'autonumber_<',
                value: 2
            },
            'autonumber_<=': {
                id: 'autonumber_<=',
                fieldId: 'autonumber',
                operatorId: 'autonumber_<=',
                value: 2
            },
            'autonumber_=': {
                id: 'autonumber_=',
                fieldId: 'autonumber',
                operatorId: 'autonumber_=',
                value: 2
            },
            'autonumber_>': {
                id: 'autonumber_>',
                fieldId: 'autonumber',
                operatorId: 'autonumber_>',
                value: 2
            },
            'autonumber_>=': {
                id: 'autonumber_>=',
                fieldId: 'autonumber',
                operatorId: 'autonumber_>=',
                value: 2
            },
            'attachment_filename': {
                id: 'attachment_filename',
                fieldId: 'attachment',
                operatorId: 'attachment_filename',
                value: 'image_1.jpeg'
            },
            'attachment_filetype': {
                id: 'attachment_filetype',
                fieldId: 'attachment',
                operatorId: 'attachment_filetype',
                value: 'image/jpeg'
            },
            'attachment_isEmpty': {
                id: 'attachment_isEmpty',
                fieldId: 'attachment',
                operatorId: 'attachment_isEmpty',
                value: null
            },
            'attachment_isNotEmpty': {
                id: 'attachment_isNotEmpty',
                fieldId: 'attachment',
                operatorId: 'attachment_isNotEmpty',
                value: null
            },
            'checkbox_=': {
                id: 'checkbox_=',
                fieldId: 'checkbox',
                operatorId: 'checkbox_=',
                value: null
            },
            'collaborator_!=': {
                id: 'collaborator_!=',
                fieldId: 'collaborator',
                operatorId: 'collaborator_!=',
                value: 'col1'
            },
            'collaborator_=': {
                id: 'collaborator_=',
                fieldId: 'collaborator',
                operatorId: 'collaborator_=',
                value: 'col1'
            },
            'collaborator_isAnyOf': {
                id: 'collaborator_isAnyOf',
                fieldId: 'collaborator',
                operatorId: 'collaborator_isAnyOf',
                value: ['col1', 'col2']
            },
            'collaborator_isNoneOf': {
                id: 'collaborator_isNoneOf',
                fieldId: 'collaborator',
                operatorId: 'collaborator_isNoneOf',
                value: ['col1', 'col2']
            },
            'collaborator_isEmpty': {
                id: 'collaborator_isEmpty',
                fieldId: 'collaborator',
                operatorId: 'collaborator_isEmpty',
                value: null
            },
            'collaborator_isNotEmpty': {
                id: 'collaborator_isNotEmpty',
                fieldId: 'collaborator',
                operatorId: 'collaborator_isNotEmpty',
                value: null
            },
            'createdCollaborator_!=': {
                id: 'createdCollaborator_!=',
                fieldId: 'createdCollaborator',
                operatorId: 'createdCollaborator_!=',
                value: 'col1'
            },
            'createdCollaborator_=': {
                id: 'createdCollaborator_=',
                fieldId: 'createdCollaborator',
                operatorId: 'createdCollaborator_=',
                value: 'col2'
            },
            'createdCollaborator_isAnyOf': {
                id: 'createdCollaborator_isAnyOf',
                fieldId: 'createdCollaborator',
                operatorId: 'createdCollaborator_isAnyOf',
                value: ['col1', 'col2']
            },
            'createdCollaborator_isNoneOf': {
                id: 'createdCollaborator_isNoneOf',
                fieldId: 'createdCollaborator',
                operatorId: 'createdCollaborator_isNoneOf',
                value: ['col1', 'col2']
            },
            'createdTime_=_exactDate': {
                id: 'createdTime_=_exactDate',
                fieldId: 'createdTime',
                operatorId: 'createdTime_=',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'createdTime_!=_exactDate': {
                id: 'createdTime_!=_exactDate',
                fieldId: 'createdTime',
                operatorId: 'createdTime_!=',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'createdTime_<_exactDate': {
                id: 'createdTime_<_exactDate',
                fieldId: 'createdTime',
                operatorId: 'createdTime_<',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'createdTime_<=_exactDate': {
                id: 'createdTime_<=_exactDate',
                fieldId: 'createdTime',
                operatorId: 'createdTime_<=',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'createdTime_>_exactDate': {
                id: 'createdTime_>_exactDate',
                fieldId: 'createdTime',
                operatorId: 'createdTime_>',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'createdTime_>=_exactDate': {
                id: 'createdTime_>=_exactDate',
                fieldId: 'createdTime',
                operatorId: 'createdTime_>=',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'createdTime_isWithin_nextWeek': {
                id: 'createdTime_isWithin_nextWeek',
                fieldId: 'createdTime',
                operatorId: 'createdTime_isWithin',
                value: {
                    modeId: 'nextWeek'
                }
            },
            'date_=_exactDate': {
                id: 'date_=_exactDate',
                fieldId: 'date',
                operatorId: 'date_=',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'date_!=_exactDate': {
                id: 'date_!=_exactDate',
                fieldId: 'date',
                operatorId: 'date_!=',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'date_<_exactDate': {
                id: 'date_<_exactDate',
                fieldId: 'date',
                operatorId: 'date_<',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'date_<=_exactDate': {
                id: 'date_<=_exactDate',
                fieldId: 'date',
                operatorId: 'date_<=',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'date_>_exactDate': {
                id: 'date_>_exactDate',
                fieldId: 'date',
                operatorId: 'date_>',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'date_>=_exactDate': {
                id: 'date_>=_exactDate',
                fieldId: 'date',
                operatorId: 'date_>=',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'date_isEmpty': {
                id: 'date_isEmpty',
                fieldId: 'date',
                operatorId: 'date_isEmpty',
                value: null
            },
            'date_isNotEmpty': {
                id: 'date_isNotEmpty',
                fieldId: 'date',
                operatorId: 'date_isNotEmpty',
                value: null
            },
            'date_isWithin_nextWeek': {
                id: 'date_isWithin_nextWeek',
                fieldId: 'date',
                operatorId: 'date_isWithin',
                value: {
                    modeId: 'nextWeek'
                }
            },
            'linkToAnotherRecord_contains': {
                id: 'linkToAnotherRecord_contains',
                fieldId: 'linkToAnotherRecord',
                operatorId: 'linkToAnotherRecord_contains',
                value: 'Luke Sky'
            },
            'linkToAnotherRecord_doesNotContain': {
                id: 'linkToAnotherRecord_doesNotContain',
                fieldId: 'linkToAnotherRecord',
                operatorId: 'linkToAnotherRecord_doesNotContain',
                value: 'Luke Sky'
            },
            'longText_=': {
                id: 'longText_=',
                fieldId: 'longText',
                operatorId: 'longText_=',
                value: 'Lorem ipsum'
            },
            'longText_!=': {
                id: 'longText_!=',
                fieldId: 'longText',
                operatorId: 'longText_!=',
                value: 'Lorem ipsum'
            },
            'longText_contains': {
                id: 'longText_contains',
                fieldId: 'longText',
                operatorId: 'longText_contains',
                value: 'Lorem'
            },
            'longText_doesNotContain': {
                id: 'longText_doesNotContain',
                fieldId: 'longText',
                operatorId: 'longText_doesNotContain',
                value: 'Lorem'
            },
            'longText_isNotEmpty': {
                id: 'longText_isNotEmpty',
                fieldId: 'longText',
                operatorId: 'longText_isNotEmpty',
                value: null
            },
            'longText_isEmpty': {
                id: 'longText_isEmpty',
                fieldId: 'longText',
                operatorId: 'longText_isEmpty',
                value: null
            },
            'multipleCollaborator_=': {
                id: 'multipleCollaborator_=',
                fieldId: 'multipleCollaborator',
                operatorId: 'multipleCollaborator_=',
                value: ['col1', 'col2', 'col3']
            },
            'multipleCollaborator_hasAllOf': {
                id: 'multipleCollaborator_hasAllOf',
                fieldId: 'multipleCollaborator',
                operatorId: 'multipleCollaborator_hasAllOf',
                value: ['col1', 'col2', 'col3']
            },
            'multipleCollaborator_hasAnyOf': {
                id: 'multipleCollaborator_hasAnyOf',
                fieldId: 'multipleCollaborator',
                operatorId: 'multipleCollaborator_hasAnyOf',
                value: ['col1', 'col2', 'col3']
            },
            'multipleCollaborator_hasNoneOf': {
                id: 'multipleCollaborator_hasNoneOf',
                fieldId: 'multipleCollaborator',
                operatorId: 'multipleCollaborator_hasNoneOf',
                value: ['col1', 'col2', 'col3']
            },
            'multipleCollaborator_isEmpty': {
                id: 'multipleCollaborator_isEmpty',
                fieldId: 'multipleCollaborator',
                operatorId: 'multipleCollaborator_isEmpty',
                value: null
            },
            'multipleCollaborator_isNotEmpty': {
                id: 'multipleCollaborator_isNotEmpty',
                fieldId: 'multipleCollaborator',
                operatorId: 'multipleCollaborator_isNotEmpty',
                value: null
            },
            'multipleSelect_=': {
                id: 'multipleSelect_=',
                fieldId: 'multipleSelect',
                operatorId: 'multipleSelect_=',
                value: ['opt1', 'opt2', 'opt3']
            },
            'multipleSelect_hasAllOf': {
                id: 'multipleSelect_hasAllOf',
                fieldId: 'multipleSelect',
                operatorId: 'multipleSelect_hasAllOf',
                value: ['opt1', 'opt2', 'opt3']
            },
            'multipleSelect_hasAnyOf': {
                id: 'multipleSelect_hasAnyOf',
                fieldId: 'multipleSelect',
                operatorId: 'multipleSelect_hasAnyOf',
                value: ['opt1', 'opt2', 'opt3']
            },
            'multipleSelect_hasNoneOf': {
                id: 'multipleSelect_hasNoneOf',
                fieldId: 'multipleSelect',
                operatorId: 'multipleSelect_hasNoneOf',
                value: ['opt1', 'opt2', 'opt3']
            },
            'multipleSelect_isEmpty': {
                id: 'multipleSelect_isEmpty',
                fieldId: 'multipleSelect',
                operatorId: 'multipleSelect_isEmpty',
                value: null
            },
            'multipleSelect_isNotEmpty': {
                id: 'multipleSelect_isNotEmpty',
                fieldId: 'multipleSelect',
                operatorId: 'multipleSelect_isNotEmpty',
                value: null
            },
            'number_!=': {
                id: 'number_!=',
                fieldId: 'number',
                operatorId: 'number_!=',
                value: 10
            },
            'number_<': {
                id: 'number_<',
                fieldId: 'number',
                operatorId: 'number_<',
                value: 10
            },
            'number_<=': {
                id: 'number_<=',
                fieldId: 'number',
                operatorId: 'number_<=',
                value: 10
            },
            'number_=': {
                id: 'number_=',
                fieldId: 'number',
                operatorId: 'number_=',
                value: 10
            },
            'number_>': {
                id: 'number_>',
                fieldId: 'number',
                operatorId: 'number_>',
                value: 10
            },
            'number_>=': {
                id: 'number_>=',
                fieldId: 'number',
                operatorId: 'number_>=',
                value: 10
            },
            'number_isEmpty': {
                id: 'number_isEmpty',
                fieldId: 'number',
                operatorId: 'number_isEmpty',
                value: null
            },
            'number_isNotEmpty': {
                id: 'number_isNotEmpty',
                fieldId: 'number',
                operatorId: 'number_isNotEmpty',
                value: null
            },
            'singleLineText_!=': {
                id: 'singleLineText_!=',
                fieldId: 'singleLineText',
                operatorId: 'singleLineText_!=',
                value: 'Luke Skywalker'
            },
            'singleLineText_contains': {
                id: 'singleLineText_contains',
                fieldId: 'singleLineText',
                operatorId: 'singleLineText_contains',
                value: 'Luke Skywalker'
            },
            'singleLineText_doesNotContain': {
                id: 'singleLineText_doesNotContain',
                fieldId: 'singleLineText',
                operatorId: 'singleLineText_doesNotContain',
                value: 'Luke Skywalker'
            },
            'singleLineText_=': {
                id: 'singleLineText_=',
                fieldId: 'singleLineText',
                operatorId: 'singleLineText_=',
                value: 'Luke Skywalker'
            },
            'singleLineText_isEmpty': {
                id: 'singleLineText_isEmpty',
                fieldId: 'singleLineText',
                operatorId: 'singleLineText_isEmpty',
                value: null
            },
            'singleLineText_isNotEmpty': {
                id: 'singleLineText_isNotEmpty',
                fieldId: 'singleLineText',
                operatorId: 'singleLineText_isNotEmpty',
                value: null
            },
            'singleSelect_=': {
                id: 'singleSelect_=',
                fieldId: 'singleSelect',
                operatorId: 'singleSelect_=',
                value: 'opt1'
            },
            'singleSelect_!=': {
                id: 'singleSelect_!=',
                fieldId: 'singleSelect',
                operatorId: 'singleSelect_!=',
                value: 'opt1'
            },
            'singleSelect_isAnyOf': {
                id: 'singleSelect_isAnyOf',
                fieldId: 'singleSelect',
                operatorId: 'singleSelect_isAnyOf',
                value: ['opt1', 'opt2']
            },
            'singleSelect_isNoneOf': {
                id: 'singleSelect_isNoneOf',
                fieldId: 'singleSelect',
                operatorId: 'singleSelect_isNoneOf',
                value: ['opt1', 'opt2']
            },
            'singleSelect_isEmpty': {
                id: 'singleSelect_isEmpty',
                fieldId: 'singleSelect',
                operatorId: 'singleSelect_isEmpty',
                value: null
            },
            'singleSelect_isNotEmpty': {
                id: 'singleSelect_isNotEmpty',
                fieldId: 'singleSelect',
                operatorId: 'singleSelect_isNotEmpty',
                value: null
            },
            'updatedTime_=_exactDate': {
                id: 'updatedTime_=_exactDate',
                fieldId: 'updatedTime',
                operatorId: 'updatedTime_=',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'updatedTime_!=_exactDate': {
                id: 'updatedTime_!=_exactDate',
                fieldId: 'updatedTime',
                operatorId: 'updatedTime_!=',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'updatedTime_<_exactDate': {
                id: 'updatedTime_<_exactDate',
                fieldId: 'updatedTime',
                operatorId: 'updatedTime_<',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'updatedTime_<=_exactDate': {
                id: 'updatedTime_<=_exactDate',
                fieldId: 'updatedTime',
                operatorId: 'updatedTime_<=',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'updatedTime_>_exactDate': {
                id: 'updatedTime_>_exactDate',
                fieldId: 'updatedTime',
                operatorId: 'updatedTime_>',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'updatedTime_>=_exactDate': {
                id: 'updatedTime_>=_exactDate',
                fieldId: 'updatedTime',
                operatorId: 'updatedTime_>=',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'updatedTime_isEmpty': {
                id: 'updatedTime_isEmpty',
                fieldId: 'updatedTime',
                operatorId: 'updatedTime_isEmpty',
                value: null
            },
            'updatedTime_isNotEmpty': {
                id: 'updatedTime_isNotEmpty',
                fieldId: 'updatedTime',
                operatorId: 'updatedTime_isNotEmpty',
                value: null
            },
            'updatedTime_isWithin_nextWeek': {
                id: 'updatedTime_isWithin_nextWeek',
                fieldId: 'updatedTime',
                operatorId: 'updatedTime_isWithin',
                value: {
                    modeId: 'nextWeek'
                }
            }
        },
        viewsById: {
            'attachment': {
                id: 'attachment',
                filters: [
                    'attachment_filename',
                    'attachment_filetype',
                    'attachment_isNotEmpty',
                    'attachment_isEmpty'
                ]
            },
            'autonumber': {
                id: 'autonumber',
                filters: [
                    'autonumber_!=',
                    'autonumber_<',
                    'autonumber_<=',
                    'autonumber_=',
                    'autonumber_>',
                    'autonumber_>=',
                ]
            },
            'checkbox': {
                id: 'checkbox',
                filters: [
                    'checkbox_=',
                ]
            },
            'collaborator': {
                id: 'collaborator',
                filters: [
                    'collaborator_!=',
                    'collaborator_=',
                    'collaborator_isAnyOf',
                    'collaborator_isNoneOf',
                    'collaborator_isEmpty',
                    'collaborator_isNotEmpty',
                ]
            },
            'createdCollaborator': {
                id: 'createdCollaborator',
                filters: [
                    'createdCollaborator_!=',
                    'createdCollaborator_=',
                    'createdCollaborator_isAnyOf',
                    'createdCollaborator_isNoneOf',
                ]
            },
            'createdTime': {
                id: 'createdTime',
                filters: [
                    'createdTime_=_exactDate',
                    'createdTime_!=_exactDate',
                    'createdTime_<_exactDate',
                    'createdTime_<=_exactDate',
                    'createdTime_>_exactDate',
                    'createdTime_>=_exactDate',
                    'createdTime_isWithin_nextWeek',
                ]
            },
            'date': {
                id: 'date',
                filters: [

                    'date_=_exactDate',
                    'date_!=_exactDate',
                    'date_<_exactDate',
                    'date_<=_exactDate',
                    'date_>_exactDate',
                    'date_>=_exactDate',
                    'date_isEmpty',
                    'date_isNotEmpty',
                    'date_isWithin_nextWeek',

                ]
            },
            'linkToAnotherRecord': {
                id: 'linkToAnotherRecord',
                filters: [

                    'linkToAnotherRecord_contains',
                    'linkToAnotherRecord_doesNotContain',

                ]
            },
            'longText': {
                id: 'longText',
                filters: [

                    'longText_=',
                    'longText_!=',
                    'longText_contains',
                    'longText_doesNotContain',
                    'longText_isNotEmpty',
                    'longText_isEmpty',
                ]
            },
            'multipleCollaborator': {
                id: 'multipleCollaborator',
                filters: [

                    'multipleCollaborator_=',
                    'multipleCollaborator_hasAllOf',
                    'multipleCollaborator_hasAnyOf',
                    'multipleCollaborator_hasNoneOf',
                    'multipleCollaborator_isEmpty',
                    'multipleCollaborator_isNotEmpty',

                ]
            },
            'multipleSelect': {
                id: 'multipleSelect',
                filters: [

                    'multipleSelect_=',
                    'multipleSelect_hasAllOf',
                    'multipleSelect_hasAnyOf',
                    'multipleSelect_hasNoneOf',
                    'multipleSelect_isEmpty',
                    'multipleSelect_isNotEmpty',

                ]
            },
            'number': {
                id: 'number',
                filters: [

                    'number_!=',
                    'number_<',
                    'number_<=',
                    'number_=',
                    'number_>',
                    'number_>=',
                    'number_isEmpty',
                    'number_isNotEmpty',

                ]
            },
            'singleLineText': {
                id: 'singleLineText',
                filters: [
                    'singleLineText_!=',
                    'singleLineText_contains',
                    'singleLineText_doesNotContain',
                    'singleLineText_=',
                    'singleLineText_isEmpty',
                    'singleLineText_isNotEmpty',

                ]
            },
            'singleSelect': {
                id: 'singleSelect',
                filters: [

                    'singleSelect_=',
                    'singleSelect_!=',
                    'singleSelect_isAnyOf',
                    'singleSelect_isNoneOf',
                    'singleSelect_isEmpty',
                    'singleSelect_isNotEmpty',

                ]
            },
            'updatedTime': {
                id: 'updatedTime',
                filters: [

                    'updatedTime_=_exactDate',
                    'updatedTime_!=_exactDate',
                    'updatedTime_<_exactDate',
                    'updatedTime_<=_exactDate',
                    'updatedTime_>_exactDate',
                    'updatedTime_>=_exactDate',
                    'updatedTime_isEmpty',
                    'updatedTime_isNotEmpty',
                    'updatedTime_isWithin_nextWeek'
                ]
            },
            'empty': {
                id: 'empty',
                filters: []
            }
        },
    },
    fields: ['attachment', 'autonumber', 'checkbox', 'collaborator', 'createdCollaborator', 'createdTime', 'date', 'linkToAnotherRecord', 'longText', 'multipleCollaborator', 'multipleSelect', 'number', 'singleLineText', 'singleSelect', 'updatedTime'],
})