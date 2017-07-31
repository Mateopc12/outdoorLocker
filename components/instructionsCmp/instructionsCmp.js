angular.module('outdoorLockerMdl')
.component("instructions", {
    controllerAs: "instructionsCtrl",
    controller: ['JSON_RULES', function(JSON_RULES) {
        this.$onInit = () => {
            this.rules = JSON_RULES.rulesType;
        }
    }],
    templateUrl: "components/instructionsCmp/instructionsCmp.html"
});