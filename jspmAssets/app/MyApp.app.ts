///<reference path="../../typings/index.d.ts"/>
///<reference path="../customTypings/customTypings.d.ts"/>

// Top level page config
import 'bootstrap';
import 'core-js';
import 'jquery';
import 'angular';
import 'angular-ui-router';
import { bootstrap } from 'ng-forward';

// Component config
import angular from 'angular';
import { Component, StateConfig, Inject } from 'ng-forward';

import './Style/Styles.scss';

import template from './MyApp.app.html!ng-template';

@Component({
    selector: 'my-app',
    templateUrl: template.templateUrl
})
@Inject('$scope', '$element')
export class MyApp {
    public constructor(
        private $scope: angular.IScope,
        private $element: angular.IAugmentedJQuery
    ) { }
}

bootstrap(MyApp, []);