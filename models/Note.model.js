var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberNameValidator = [
  function(val) {
    return (val.length > 0 && val != '(Select Name)');
  },
  // custom error Text
  'Select a valid member Name.'
];

var NoteSchema = new Schema({
  memberName: {
    type: String,
    validate: memberNameValidator
  },
  project: {
    type: String,
    require: true
  },
  workYesterday: {
    type: String,
    required: true
  },
  workToday: {
    type: String,
    require: true
  },
  impediment: {
    type: String,
    required: true,
    default: 'none'
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Note', NoteSchema);