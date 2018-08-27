import { NUMBER, STRING, DATE, LABEL } from 'constants/value-types'
export default [
  {
    label: 'Issue Number',
    type: NUMBER,
    name: 'number'
  }, {
    label: 'Title',
    type: STRING,
    name: 'title'
  }, {
    label: 'Created at',
    type: DATE,
    name: 'created_at'
  }, {
    label: 'Updated at',
    type: DATE,
    name: 'updated_at'
  }, {
    label: 'Labels',
    type: LABEL,
    name: 'labels'
  }, {
    label: 'State',
    type: STRING,
    name: 'state'
  },
]


