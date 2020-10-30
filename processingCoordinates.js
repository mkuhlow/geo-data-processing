const geolib = require('geolib');

exports.processingCoordinates = function(objectPositions, currendPosition, radius) {
    var objectsInRadius = [];

    for (var i = 0; i < objectPositions.cars.length; i++) {

        var carCoordinate = {
            latitude: objectPositions.cars[i].coordinates.lat,
            longitude: objectPositions.cars[i].coordinates.lon,
        }

        var objectDistance = geolib.getDistance(currendPosition, carCoordinate);

        if (objectDistance <= radius) {
            objectsInRadius.push({ id: objectPositions.cars[i].id, carDistance: objectDistance });
        }
    }

    objectsInRadius.sort(function(a,b) {
        return a.carDistance - b.carDistance;
    });

    return objectsInRadius;


}