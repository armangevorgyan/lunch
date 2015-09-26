(function(lunch) {
    function FoodChoiceBuilder() {
    }
    FoodChoiceBuilder.prototype.buildGruppedChoises = function(rawChoices) {
        var gruppedChoices = _.groupBy(rawChoices, function(choice) {
            return choice.foodAvailability.availableDate
        });
        return gruppedChoices;
    };
    lunch.FoodChoiceBuilder = FoodChoiceBuilder;
})(lunch);
