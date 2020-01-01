import { UIRouter } from '@uirouter/core';
import { StateTree } from '@uirouter/visualizer';
import { Injector, Injectable } from '@angular/core';

export function uiRouterConfigFn(router: UIRouter, injector: Injector) {
  // Configure the initial state
  router.urlService.rules.initial({ state: 'home' });
  StateTree.create(router, document.getElementById('statetree'), {
    width: 200,
    height: 100
  });
}
