const mongoose = require('mongoose');
const bomSchema = new mongoose.Schema({
    itemSequence: {
        type: Number,
        default: 1

    },
    operationSequence: {
        type: Number,
        default: 1

    },
    itemcode: {
        type: String,
        default: ''
    },
    itemDescription: {
        type: String,
        default: ''
    },
    UOM: {
        type: String,
        default: ''

    },
    itemQuantity: {
        type: Number,
        default: 1

    },
    size: {
        type: String,
        default: ''

    },
    Suplier: {
        type: String,
        default: ''

    },
    garmentCost: {
        type: Number,
        default: 1

    },
    Rate: {
        type: Number,
        default: 1
    },
    Comments: {
        type: String,
        default: ''
    }
});

const bomOrderSchema = new mongoose.Schema({
    finishItemCode: {
        type: String,
        default: ''
    },
    finishItemDescription: {
        type: String,
        default: ''

    },
    finishUOM: {
        type: String,
        default: ''
    },
    StandardMinutes: {
        type: Number,
        default: 1
    },
    CustomerName: {
        type: String,
        default: ''
    },
    style: {
        type: String,
        default: ''
    },
    BomDate: {
        type: String,

        default: Date.now
    },
    ExchangeRate: {
        type: Number,
        default: 1
    },
    DateExchangeRate: {
        type: String,
        default: ''
    },
    Customization: {
        type: String,
        default: ''
    },
    companyEmail: {
        type: String,
        default: ''
    },
    UID: {
        type: String,
        default: ''

    },
    BOM: [
        bomSchema
    ],
    Extras: [

    ]

});

const bomorderModel = mongoose.model('BOM', bomOrderSchema);
module.exports = bomorderModel;