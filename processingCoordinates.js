const geolib = require('geolib');

exports.processingCoordinates = function(objectPositions, currendPosition, radius) {
    var objectsInRadius = [];
    console.log('________________________');
    console.log(Object.keys(objectPositions));
    const keys = Object.keys(objectPositions);
    console.log('________________________');
    console.log(objectPositions);
    for (var i = 0; i < objectPositions.cars.length; i++) {
        console.log(objectPositions.cars[i]);
        console.log(objectPositions.cars[i].coordinates.lat);
        console.log(objectPositions.cars[i].coordinates.lon);
console.log(currendPosition);
        var carCoordinate = {
            latitude: objectPositions.cars[i].coordinates.lat,
            longitude: objectPositions.cars[i].coordinates.lon,
        }

        var objectDistance = geolib.getDistance(currendPosition, carCoordinate);

        if (objectDistance <= radius) {
            objectsInRadius.push({ id: objectPositions.cars[i].id, carDistance: objectDistance });
            console.log('Das Ziel ist in der erwarteten Entfernugn = ' + objectDistance);
        }

    }

    objectsInRadius.sort(function(a,b) {
        return a.carDistance - b.carDistance;
    });

    return objectsInRadius;


}