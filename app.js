'use strict';

// Declare app level module which depends on views, and components
angular.module('outdoorLockerMdl', [
  'pascalprecht.translate' 
])
.constant("JSON_RULES", JSON_RULES_OBJECT)
.constant("TRANSLATE_CODES", ['en-US', 'es'])
.config(['$translateProvider', 
function($translateProvider, JSON_TRANSLATIONS_EN, JSON_TRANSLATIONS_ES) {

  $translateProvider.translations('en-US', JSON_TRANSLATIONS_EN_OBJECT);

  $translateProvider.translations('es', JSON_TRANSLATIONS_ES_OBJECT);

  $translateProvider.preferredLanguage('en-US');
}]);
