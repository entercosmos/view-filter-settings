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
            },
            'hasNoneOf': {
                id: 'hasNoneOf',
                name: 'has none of'
            },
            'hasAnyOf': {
                id: 'hasAnyOf',
                name: 'has any of'
            },
            'hasAllOf': {
                id: 'hasAllOf',
                name: 'has all of'
            },
            'isAnyOf': {
                id: 'isAnyOf',
                name: 'is any of'
            },
            'isNoneOf': {
                id: 'isNoneOf',
                name: 'is none of'
            },
            'isWithin': {
                id: 'isWithin',
                name: 'is within'
            },
            'contains': {
                id: 'contains',
                name: 'contains'
            },
            'doesNotContain': {
                id: 'doesNotContain',
                name: 'does not contain'
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
            },
            'collaborator_!=': {
                id: 'collaborator_!=',
                fieldId: 'collaborator',
                operatorId: '!=',
                value: 'usr1'
            },
            'collaborator_=': {
                id: 'collaborator_=',
                fieldId: 'collaborator',
                operatorId: '=',
                value: 'col1'
            },
            'collaborator_isAnyOf': {
                id: 'collaborator_isAnyOf',
                fieldId: 'collaborator',
                operatorId: 'isAnyOf',
                value: ['col1', 'col2']
            },
            'collaborator_isNoneOf': {
                id: 'collaborator_isNoneOf',
                fieldId: 'collaborator',
                operatorId: 'isNoneOf',
                value: ['col1', 'col2']
            },
            'collaborator_isEmpty': {
                id: 'collaborator_isEmpty',
                fieldId: 'collaborator',
                operatorId: 'isEmpty',
                value: null
            },
            'collaborator_isNotEmpty': {
                id: 'collaborator_isNotEmpty',
                fieldId: 'collaborator',
                operatorId: 'isNotEmpty',
                value: ''
            },
            'createdCollaborator_!=': {
                id: 'createdCollaborator_!=',
                fieldId: 'createdCollaborator',
                operatorId: '!=',
                value: ''
            },
            'createdCollaborator_=': {
                id: 'createdCollaborator_=',
                fieldId: 'createdCollaborator',
                operatorId: '=',
                value: ''
            },
            'createdCollaborator_isAnyOf': {
                id: 'createdCollaborator_isAnyOf',
                fieldId: 'createdCollaborator',
                operatorId: 'isAnyOf',
                value: ''
            },
            'createdCollaborator_isNoneOf': {
                id: 'createdCollaborator_isNoneOf',
                fieldId: 'createdCollaborator',
                operatorId: 'isNoneOf',
                value: ''
            },
            'createdTime_=_exactDate': {
                id: 'createdTime_=_exactDate',
                fieldId: 'createdTime',
                operatorId: '=',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'createdTime_!=_exactDate': {
                id: 'createdTime_!=_exactDate',
                fieldId: 'createdTime',
                operatorId: '!=',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'createdTime_<_exactDate': {
                id: 'createdTime_<_exactDate',
                fieldId: 'createdTime',
                operatorId: '<',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'createdTime_<=_exactDate': {
                id: 'createdTime_<=_exactDate',
                fieldId: 'createdTime',
                operatorId: '<=',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'createdTime_>_exactDate': {
                id: 'createdTime_>_exactDate',
                fieldId: 'createdTime',
                operatorId: '>',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'createdTime_>=_exactDate': {
                id: 'createdTime_>=_exactDate',
                fieldId: 'createdTime',
                operatorId: '>=',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'createdTime_isWithin_nextWeek': {
                id: 'createdTime_isWithin_nextWeek',
                fieldId: 'createdTime',
                operatorId: 'isWithin',
                value: {
                    modeId: 'nextWeek'
                }
            },
            'date_=_exactDate': {
                id: 'date_=_exactDate',
                fieldId: 'date',
                operatorId: '=',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'date_!=_exactDate': {
                id: 'date_!=_exactDate',
                fieldId: 'date',
                operatorId: '!=',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'date_<_exactDate': {
                id: 'date_<_exactDate',
                fieldId: 'date',
                operatorId: '<',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'date_<=_exactDate': {
                id: 'date_<=_exactDate',
                fieldId: 'date',
                operatorId: '<=',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'date_>_exactDate': {
                id: 'date_>_exactDate',
                fieldId: 'date',
                operatorId: '>',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'date_>=_exactDate': {
                id: 'date_>=_exactDate',
                fieldId: 'date',
                operatorId: '>=',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'date_isEmpty': {
                id: 'date_isEmpty',
                fieldId: 'date',
                operatorId: 'isEmpty',
                value: null
            },
            'date_isNotEmpty': {
                id: 'date_isNotEmpty',
                fieldId: 'date',
                operatorId: 'isNotEmpty',
                value: null
            },
            'date_isWithin_nextWeek': {
                id: 'date_isWithin_nextWeek',
                fieldId: 'date',
                operatorId: 'isWithin',
                value: {
                    modeId: 'nextWeek'
                }
            },
            'linkToAnotherRecord_contains': {
                id: 'linkToAnotherRecord_contains',
                fieldId: 'linkToAnotherRecord',
                operatorId: 'contains',
                value: 'Luke Sky'
            },
            'linkToAnotherRecord_doesNotContain': {
                id: 'linkToAnotherRecord_doesNotContain',
                fieldId: 'linkToAnotherRecord',
                operatorId: 'doesNotContain',
                value: 'Luke Sky'
            },
            'longText_=': {
                id: 'longText_=',
                fieldId: 'longText',
                operatorId: '=',
                value: 'Lorem ipsum'
            },
            'longText_!=': {
                id: 'longText_!=',
                fieldId: 'longText',
                operatorId: '!=',
                value: 'Lorem ipsum'
            },
            'longText_contains': {
                id: 'longText_contains',
                fieldId: 'longText',
                operatorId: 'contains',
                value: 'Lorem'
            },
            'longText_doesNotContain': {
                id: 'longText_doesNotContain',
                fieldId: 'longText',
                operatorId: 'doesNotContain',
                value: 'Lorem'
            },
            'longText_isNotEmpty': {
                id: 'longText_isNotEmpty',
                fieldId: 'longText',
                operatorId: 'isNotEmpty',
                value: null
            },
            'longText_isEmpty': {
                id: 'longText_isEmpty',
                fieldId: 'longText',
                operatorId: 'isEmpty',
                value: null
            },
            'multipleCollaborator_=': {
                id: 'multipleCollaborator_=',
                fieldId: 'multipleCollaborator',
                operatorId: '=',
                value: ['col1', 'col2', 'col3']
            },
            'multipleCollaborator_hasAllOf': {
                id: 'multipleCollaborator_hasAllOf',
                fieldId: 'multipleCollaborator',
                operatorId: 'hasAllOf',
                value: ['col1', 'col2', 'col3']
            },
            'multipleCollaborator_hasAnyOf': {
                id: 'multipleCollaborator_hasAnyOf',
                fieldId: 'multipleCollaborator',
                operatorId: 'hasAnyOf',
                value: ['col1', 'col2', 'col3']
            },
            'multipleCollaborator_hasNoneOf': {
                id: 'multipleCollaborator_hasNoneOf',
                fieldId: 'multipleCollaborator',
                operatorId: 'hasNoneOf',
                value: ['col1', 'col2', 'col3']
            },
            'multipleCollaborator_isEmpty': {
                id: 'multipleCollaborator_isEmpty',
                fieldId: 'multipleCollaborator',
                operatorId: 'isEmpty',
                value: null
            },
            'multipleCollaborator_isNotEmpty': {
                id: 'multipleCollaborator_isNotEmpty',
                fieldId: 'multipleCollaborator',
                operatorId: 'isNotEmpty',
                value: null
            },
            'multipleSelect_=': {
                id: 'multipleSelect_=',
                fieldId: 'multipleSelect',
                operatorId: '=',
                value: ['opt1', 'opt2', 'opt3']
            },
            'multipleSelect_hasAllOf': {
                id: 'multipleSelect_hasAllOf',
                fieldId: 'multipleSelect',
                operatorId: 'hasAllOf',
                value: ['opt1', 'opt2', 'opt3']
            },
            'multipleSelect_hasAnyOf': {
                id: 'multipleSelect_hasAnyOf',
                fieldId: 'multipleSelect',
                operatorId: 'hasAnyOf',
                value: ['opt1', 'opt2', 'opt3']
            },
            'multipleSelect_hasNoneOf': {
                id: 'multipleSelect_hasNoneOf',
                fieldId: 'multipleSelect',
                operatorId: 'hasNoneOf',
                value: ['opt1', 'opt2', 'opt3']
            },
            'multipleSelect_isEmpty': {
                id: 'multipleSelect_isEmpty',
                fieldId: 'multipleSelect',
                operatorId: 'isEmpty',
                value: null
            },
            'multipleSelect_isNotEmpty': {
                id: 'multipleSelect_isNotEmpty',
                fieldId: 'multipleSelect',
                operatorId: 'isNotEmpty',
                value: null
            },
            'number_!=': {
                id: 'number_!=',
                fieldId: 'number',
                operatorId: '!=',
                value: 10
            },
            'number_<': {
                id: 'number_<',
                fieldId: 'number',
                operatorId: '<',
                value: 10
            },
            'number_<=': {
                id: 'number_<=',
                fieldId: 'number',
                operatorId: '<=',
                value: 10
            },
            'number_=': {
                id: 'number_=',
                fieldId: 'number',
                operatorId: '=',
                value: 10
            },
            'number_>': {
                id: 'number_>',
                fieldId: 'number',
                operatorId: '>',
                value: 10
            },
            'number_>=': {
                id: 'number_>=',
                fieldId: 'number',
                operatorId: '>=',
                value: 10
            },
            'number_isEmpty': {
                id: 'number_isEmpty',
                fieldId: 'number',
                operatorId: 'isEmpty',
                value: null
            },
            'number_isNotEmpty': {
                id: 'number_isNotEmpty',
                fieldId: 'number',
                operatorId: 'isNotEmpty',
                value: null
            },
            'singleLineText_!=': {
                id: 'singleLineText_!=',
                fieldId: 'singleLineText',
                operatorId: '!=',
                value: 'Luke Skywalker'
            },
            'singleLineText_contains': {
                id: 'singleLineText_contains',
                fieldId: 'singleLineText',
                operatorId: 'contains',
                value: 'Luke Skywalker'
            },
            'singleLineText_doesNotContain': {
                id: 'singleLineText_doesNotContain',
                fieldId: 'singleLineText',
                operatorId: 'doesNotContain',
                value: 'Luke Skywalker'
            },
            'singleLineText_=': {
                id: 'singleLineText_=',
                fieldId: 'singleLineText',
                operatorId: '=',
                value: 'Luke Skywalker'
            },
            'singleLineText_isEmpty': {
                id: 'singleLineText_isEmpty',
                fieldId: 'singleLineText',
                operatorId: 'isEmpty',
                value: null
            },
            'singleLineText_isNotEmpty': {
                id: 'singleLineText_isNotEmpty',
                fieldId: 'singleLineText',
                operatorId: 'isNotEmpty',
                value: null
            },
            'singleSelect_=': {
                id: 'singleSelect_=',
                fieldId: 'singleSelect',
                operatorId: '=',
                value: 'opt1'
            },
            'singleSelect_!=': {
                id: 'singleSelect_!=',
                fieldId: 'singleSelect',
                operatorId: '!=',
                value: 'opt1'
            },
            'singleSelect_isAnyOf': {
                id: 'singleSelect_isAnyOf',
                fieldId: 'singleSelect',
                operatorId: 'isAnyOf',
                value: ['opt1', 'opt2']
            },
            'singleSelect_isNoneOf': {
                id: 'singleSelect_isNoneOf',
                fieldId: 'singleSelect',
                operatorId: 'isNoneOf',
                value: ['opt1', 'opt2']
            },
            'singleSelect_isEmpty': {
                id: 'singleSelect_isEmpty',
                fieldId: 'singleSelect',
                operatorId: 'isEmpty',
                value: null
            },
            'singleSelect_isNotEmpty': {
                id: 'singleSelect_isNotEmpty',
                fieldId: 'singleSelect',
                operatorId: 'isNotEmpty',
                value: null
            },
            'updatedTime_=_exactDate': {
                id: 'updatedTime_=_exactDate',
                fieldId: 'updatedTime',
                operatorId: '=',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'updatedTime_!=_exactDate': {
                id: 'updatedTime_!=_exactDate',
                fieldId: 'updatedTime',
                operatorId: '!=',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'updatedTime_<_exactDate': {
                id: 'updatedTime_<_exactDate',
                fieldId: 'updatedTime',
                operatorId: '<',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'updatedTime_<=_exactDate': {
                id: 'updatedTime_<=_exactDate',
                fieldId: 'updatedTime',
                operatorId: '<=',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'updatedTime_>_exactDate': {
                id: 'updatedTime_>_exactDate',
                fieldId: 'updatedTime',
                operatorId: '>',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'updatedTime_>=_exactDate': {
                id: 'updatedTime_>=_exactDate',
                fieldId: 'updatedTime',
                operatorId: '>=',
                value: {
                    modeId: 'exactDate',
                    exactDate: '2018-12-10T00:00:00.000Z'
                }
            },
            'updatedTime_isEmpty': {
                id: 'updatedTime_isEmpty',
                fieldId: 'updatedTime',
                operatorId: 'isEmpty',
                value: null
            },
            'updatedTime_isNotEmpty': {
                id: 'updatedTime_isNotEmpty',
                fieldId: 'updatedTime',
                operatorId: 'isNotEmpty',
                value: null
            },
            'updatedTime_isWithin_nextWeek': {
                id: 'updatedTime_isWithin_nextWeek',
                fieldId: 'updatedTime',
                operatorId: 'isWithin',
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
                filters: [
                ]
            }
        },
    },
    fields: ['attachment', 'autonumber', 'checkbox', 'collaborator', 'createdCollaborator', 'createdTime', 'date', 'linkToAnotherRecord', 'longText', 'multipleCollaborator', 'multipleSelect', 'number', 'singleLineText', 'singleSelect', 'updatedTime'],
    operators: ['!=', '=', '<=', '<', '>', '>=', 'filename', 'filetype', 'isEmpty', 'isNotEmpty', 'hasNoneOf', 'hasAnyOf', 'hasAllOf', 'isAnyOf', 'isNoneOf', 'isWithin', 'contains', 'doesNotContain'],
})