import {
  method,
  projMethod
} from './_base'

const milestoneId = '678'

module.exports = {
  apiName: 'milestones',
  methods: {
    'getAll': method,
    'get': projMethod(milestoneId)
  },
  fluids: [
    'forProject'
  ]
}
