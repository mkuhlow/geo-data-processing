const { expect } = require('chai');
var pC = require('../processingCoordinates.js');


var testJSONDaten = {
    cars: [{
        id: "001", 
        coordinates: {
            lat: "52.274725",
            lon: "10.509138"
        }
    },
    {
        id: "002",
        coordinates: {
            lat: "52.274623",
            lon: "10.509194"
        }
    },
    {
        id: "003",
        coordinates: {
            lat: "52.266513",
            lon: "10.520032"
        }
    },
    {
        id: "004",
        coordinates: {
            lat: "52.265940",
            lon: "10.526730"
        }
    }

    ]
}

var testCoordinatesJson = {
    name: 'cars',
    elements: ['id','lat','lon'],
    cars: [{
        id: "001",
        lat: "52.2735309",
        lon: "10.5076558"
    },
    {
        id: "002",
        lat: "52.2735000",
        lon: "10.5076558"
    },
    {
        id: "003",
        lat: "52.2735000",
        lon: "10.5076000"
    },
    {
        id: "004",
        lat: "52.2735300",
        lon: "10.5076550"
    },
    {
        id: "005",
        lat: "52.2735300",
        lon: "10.5076500"
    }
    ]
};

const simpleCoordinates = [
    {
        id: "001",
        x: "52.2735300",
        y: "10.5076500"
    },
    {
        id: "002",
        x: "52.2735300",
        y: "10.5076500"
    },
    {
        id: "003",
        x: "52.2735300",
        y: "10.5076500"
    },
]

getSimpleCoordinates = function(numberOfElements) {
    var coordinates = [];

    for(var i = 0; i<=numberOfElements; i++){
        var defaultCoordinate = {
            id: i,
            x: "52." + i * 255,
            y : "10." + i * 255
        }
        coordinates.push(defaultCoordinate);
    }

    return coordinates;
}

describe('test processing Coordinates', function () {
    it('should get a coordinate', function () {
        var coordinate = { "latitude": "52.2735300", "longitude": "10.5076500" };
        output = pC.processingCoordinates(testJSONDaten, coordinate, '3000');
        var testoutput = { "carID": "3", "x": "123", "y": "34322" };
        expect(output, testoutput);
    });
});

describe('test processing Coordinates', function () {
    it('should get many Entries', function () {
        var coordinate = { "latitude": "52.2735300", "longitude": "10.5076500" };
        const randomCoordinates = getSimpleCoordinates(43);
        output = pC.processingCoordinates(testJSONDaten, coordinate, '3000');
        var testoutput = { "carID": "3", "x": "123", "y": "34322" };
        expect(output, testoutput);
    });
});