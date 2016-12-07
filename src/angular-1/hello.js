var module = angular.module('todoApp', []);
module.directive('ng1Hello', function() {
  return {
    scope: { title: '=' },
    template: 'ng1[Hello, {{title}}!]'
  };
});


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
