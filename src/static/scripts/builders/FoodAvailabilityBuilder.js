(function(lunch) {
    function FoodAvailabilityBuilder() {
    }
    FoodAvailabilityBuilder.prototype.groupByDate = function(rawAvailability) {
        var gruppedAvailability;

            gruppedAvailability = _.groupBy(rawAvailability, function(availability) {
                return availability.availableDate;
            });
        return gruppedAvailability;
    };
    FoodAvailabilityBuilder.prototype.groupByType = function(rawAvailability) {
        var gruppedAvailability;

            gruppedAvailability = _.groupBy(rawAvailability, function(availability) {
                return availability.food.type;
            });
        return gruppedAvailability;
    };

    lunch.FoodAvailabilityBuilder = FoodAvailabilityBuilder;
})(lunch);
