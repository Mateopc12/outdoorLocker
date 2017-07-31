angular.module('outdoorLockerMdl')
.component("conditions", {
    bindings: {
        rulesStatus: '<',
        finalCabinetSelected: '='
    },
    controllerAs: "conditionsCtrl",
    controller: ['$rootScope', 'JSON_RULES', function($rootScope, JSON_RULES) {
        this.$onInit = () => {
            this.mainCabinets = JSON_RULES.mainCabinetType;
        }

        this.changeFinalCabinet = (cabinet) => {
            if (this.finalCabinetSelected !== cabinet) {
                this.finalCabinetSelected = cabinet; 
                $rootScope.$broadcast("resetValues");
            }
        }

        this.isFailureRule = () => {
            return !this.rulesStatus.map(rule => rule.status).includes(true);
        }
    }],
    templateUrl: "components/conditionsCmp/conditionsCmp.html"
});