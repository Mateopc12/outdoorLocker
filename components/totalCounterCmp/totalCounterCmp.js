angular.module('outdoorLockerMdl')
.component("totalCounter", {
    bindings: {
        totalLeft: '<',
        totalRight: '<'
    },
    controllerAs: "totalCounterCtrl",
    controller: ['$translate', function($translate) {
        this.changeLanguage = function(key) {
          $translate.use(key);
        }

        this.$onInit = () => {
        }

        this.buttonRight = (event) => {
            this.totalRight = (event.isAdding) ? this.totalRight + event.cuantityPerUnit : this.totalRight - event.cuantityPerUnit;
        }

        this.buttonLeft = (event) => {
            this.totalLeft = (event.isAdding) ? this.totalLeft + event.cuantityPerUnit : this.totalLeft - event.cuantityPerUnit;
        }
    }],
    templateUrl: "components/totalCounterCmp/totalCounterCmp.html"
})