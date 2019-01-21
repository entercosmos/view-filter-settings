import {fromJS} from 'immutable'

export default fromJS({
    cache: {
        operatorsById: {
            '!=': {
                id: '!=',
                name: '!='
            },
            '<': {
                id: '<',
                name: '<'
            },
            '<=': {
                id: '<=',
                name: '<='
            },
            '=': {
                id: '=',
                name: '='
            },
            '>': {
                id: '>',
                name: '>'
            },
            '>=': {
                id: '>=',
                name: '>='
            },
            'filename': {
                id: 'filename',
                name: 'filename'
            },
            'filetype': {
                id: 'filetype',
                name: 'filetype'
            },
            'isNotEmpty': {
                id: 'isNotEmpty',
                name: 'is not empty'
            },
            'isEmpty': {
                id: 'isEmpty',
                name: 'is empty'
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
                operatorId: '!=',
                value: 2
            },
            'autonumber_<': {
                id: 'autonumber_<',
                fieldId: 'autonumber',
                operatorId: '<',
                value: 2
            },
            'autonumber_<=': {
                id: 'autonumber_<=',
                fieldId: 'autonumber',
                operatorId: '<=',
                value: 2
            },
            'autonumber_=': {
                id: 'autonumber_=',
                fieldId: 'autonumber',
                operatorId: '=',
                value: 2
            },
            'autonumber_>': {
                id: 'autonumber_>',
                fieldId: 'autonumber',
                operatorId: '>',
                value: 2
            },
            'autonumber_>=': {
                id: 'autonumber_>=',
                fieldId: 'autonumber',
                operatorId: '>=',
                value: 2
            },
            'attachment_filename': {
                id: 'attachment_filename',
                fieldId: 'attachment',
                operatorId: 'filename',
                value: 'image_1.jpeg'
            },
            'attachment_filetype': {
                id: 'attachment_filetype',
                fieldId: 'attachment',
                operatorId: 'filetype',
                value: 'image/jpeg'
            },
            'attachment_isEmpty': {
                id: 'attachment_isEmpty',
                fieldId: 'attachment',
                operatorId: 'isEmpty',
                value: null
            },
            'attachment_isNotEmpty': {
                id: 'attachment_isNotEmpty',
                fieldId: 'attachment',
                operatorId: 'isNotEmpty',
                value: null
            },
            'checkbox_=': {
                id: 'checkbox_=',
                fieldId: 'checkbox',
                operatorId: '=',
                value: null
            }
        },
        viewsById: {
            'viw1': {
                id: 'viw1',
                filters: [
                    'attachment_filename',
                    'attachment_filetype',
                    'attachment_isNotEmpty',
                    'attachment_isEmpty',
                    'autonumber_!=',
                    'autonumber_<',
                    'autonumber_<=',
                    'autonumber_=',
                    'autonumber_>',
                    'autonumber_>=',
                    'checkbox_=',
                ]
            }
        },
    },
    fields: ['attachment', 'autonumber', 'checkbox', 'collaborator', 'createdCollaborator', 'createdTime', 'date', 'linkToAnotherRecord', 'longText', 'multipleCollaborator', 'multipleSelect', 'number', 'singleLineText', 'singleSelect', 'updatedTime'],
    operators: ['!=', '=', '<=', '<', '>', '>=', 'filename', 'filetype', 'isEmpty', 'isNotEmpty'],
})