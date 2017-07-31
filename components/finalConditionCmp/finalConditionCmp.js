angular.module('outdoorLockerMdl')
.component("finalCondition", {
    bindings: {
        rulesStatus: '<'
    },
    controllerAs: "finalConditionCtrl",
    controller: [function() {
        this.isFailureRule = () => {
            return !this.rulesStatus.map(rule => rule.status).includes(true);
        }
    }],
    templateUrl: "components/finalConditionCmp/finalConditionCmp.html"
});