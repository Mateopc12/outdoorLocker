angular.module('outdoorLockerMdl')
.component("totalCounter", {
    bindings: {
        totalLeft: '<',
        totalRight: '<',
        totalRightSatellite: '<',
        totalLeftSatellite: '<'
    },
    controllerAs: "totalCounterCtrl",
    controller: [function() {}],
    templateUrl: "components/totalCounterCmp/totalCounterCmp.html"
})