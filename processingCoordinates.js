const geolib = require('geolib');

esports.processingCoordinates = function(objectPositions, currendPosition, radius) {
    var objectsInRadius = [];
    
    for (var i = 0; i < objectPositions.cars.length; i++) {
        var carCoordinate = {
            latitude: positions.cars[i].lat,
            longitude: positions.cars[i].lon,
        }

        var objectDistance = geolib.getDistance(currendPosition, carCoordinate);

        if (objectDistance <= radius) {
            objectsInRadius.push({ id: positions.cars[i].id, carDistance: objectDistance });
            console.log('Das Ziel ist in der erwarteten Entfernugn = ' + objectDistance);
        }
    }

    objectsInRadius.sort(function(a,b) {
        return a.carDistance - b.carDistance;
    });

    return objectsInRadius;


}