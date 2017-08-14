angular.module('outdoorLockerMdl')
.component("instructions", {
    controllerAs: "instructionsCtrl",
    controller: ['JSON_RULES', '$translate', function(JSON_RULES, $translate) {
        this.$onInit = () => {
            this.rules = JSON_RULES.rulesType;
            this.rules.map(rule => {
                rule.finalDescription = $translate.instant(rule.descriptionCode);
            });
        }
    }],
    templateUrl: "components/instructionsCmp/instructionsCmp.html"
});