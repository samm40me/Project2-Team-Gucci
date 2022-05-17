const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let shelterTempSchema = new Schema({
date: {
	type: Number
},
year: {
	type: Number
},
month: {
	type: Number
},         
shelterType: {
    type: String
},
shelterName: {
    type: String
},
organization: {
    type: String
},
capacity: {
    type: Number
},
overnight: {
    type: Number
}
}, {
        collection: 'shelter'    
})

module.exports = mongoose.model('Shelter', shelterTempSchema)
