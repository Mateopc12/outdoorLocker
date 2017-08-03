angular.module('outdoorLockerMdl')
.component("centralApp", {
    controllerAs: "centralAppCtrl",
    controller: ['$window', '$translate', 'TRANSLATE_CODES', function($window, $translate, TRANSLATE_CODES) {
        this.$onInit = () => {
            let computer_language = $window.navigator.language || $window.navigator.userLanguage;
            if (TRANSLATE_CODES.indexOf(computer_language) !== -1) {
                $translate.use(computer_language);
            }
            this.finalCabinetSelected = undefined;
        }
    }],
    templateUrl: "components/centralAppCmp/centralAppCmp.html"
});