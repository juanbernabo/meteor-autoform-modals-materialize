Package.describe({
  name: 'gildaspk:autoform-modals-materialize',
  summary: "Create, update and delete collections with materialize modals",
  version: "0.0.5",
  git: "https://github.com/djhi/meteor-autoform-modals-materialize",
});

Package.on_use(function (api) {

api.versionsFrom('METEOR@1.0');


 api.use([
 	'jquery',
 	'templating',
 	'less',
 	'session',
 	'coffeescript',
 	'ui',
 	'aldeed:autoform@5.1.1',
 	'raix:handlebar-helpers@0.2.4',
 	'mpowaga:string-template@0.1.0',
 ], 'client');

 api.add_files('lib/client/modals.html', 'client');
 api.add_files('lib/client/modals.coffee', 'client');
 api.add_files('lib/client/modals.less', 'client');

});
