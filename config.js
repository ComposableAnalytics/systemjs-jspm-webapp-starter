System.config({
  defaultJSExtensions: true,
  transpiler: "ts",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "static/build/main.js": [
      "jspmAssets/app/MyApp.app.ts",
      "jspmAssets/app/MyApp.app.html!npm:plugin-ng-template@0.1.1.js",
      "github:angular/bower-angular@1.6.4.js",
      "npm:jquery@2.2.4.js",
      "npm:jquery@2.2.4/dist/jquery.js",
      "github:angular/bower-angular@1.6.4/angular.js",
      "jspmAssets/app/Style/Styles.scss",
      "npm:ng-forward@0.0.1-alpha.12.js",
      "npm:reflect-metadata@0.1.10.js",
      "npm:reflect-metadata@0.1.10/Reflect.js",
      "npm:ng-forward@0.0.1-alpha.12/index.js",
      "npm:ng-forward@0.0.1-alpha.12/cjs/index.js",
      "npm:ng-forward@0.0.1-alpha.12/cjs/util/jqlite-extensions.js",
      "npm:ng-forward@0.0.1-alpha.12/cjs/util/get-injectable-name.js",
      "npm:ng-forward@0.0.1-alpha.12/cjs/classes/opaque-token.js",
      "npm:ng-forward@0.0.1-alpha.12/cjs/decorators/injectable.js",
      "npm:ng-forward@0.0.1-alpha.12/cjs/util/decorator-factory.js",
      "npm:ng-forward@0.0.1-alpha.12/cjs/writers.js",
      "npm:ng-forward@0.0.1-alpha.12/cjs/classes/metastore.js",
      "npm:ng-forward@0.0.1-alpha.12/cjs/classes/module.js",
      "npm:ng-forward@0.0.1-alpha.12/cjs/bundle.js",
      "npm:ng-forward@0.0.1-alpha.12/cjs/util/group-modules-providers.js",
      "npm:ng-forward@0.0.1-alpha.12/cjs/classes/provider.js",
      "npm:ng-forward@0.0.1-alpha.12/cjs/decorators/providers.js",
      "npm:ng-forward@0.0.1-alpha.12/cjs/decorators/inject.js",
      "npm:ng-forward@0.0.1-alpha.12/cjs/decorators/component.js",
      "npm:ng-forward@0.0.1-alpha.12/cjs/util/helpers.js",
      "npm:ng-forward@0.0.1-alpha.12/cjs/events/events.js",
      "npm:ng-forward@0.0.1-alpha.12/cjs/util/parse-selector.js",
      "npm:ng-forward@0.0.1-alpha.12/cjs/decorators/directive.js",
      "npm:ng-forward@0.0.1-alpha.12/cjs/util/directive-controller.js",
      "npm:ng-forward@0.0.1-alpha.12/cjs/properties/outputs-builder.js",
      "npm:ng-forward@0.0.1-alpha.12/cjs/util/custom-event.js",
      "npm:ng-forward@0.0.1-alpha.12/cjs/events/event-emitter.js",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/Subject.js",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/subjects/SubjectSubscription.js",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/Subscriber.js",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/Subscription.js",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/util/tryOrOnError.js",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/util/throwError.js",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/util/noop.js",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/Observable.js",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/util/Symbol_observable.js",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/util/root.js",
      "npm:ng-forward@0.0.1-alpha.12/cjs/properties/inputs-builder.js",
      "npm:ng-forward@0.0.1-alpha.12/cjs/decorators/input-output.js",
      "npm:ng-forward@0.0.1-alpha.12/cjs/properties/parse-property-map.js",
      "npm:ng-forward@0.0.1-alpha.12/cjs/bootstrap.js",
      "npm:ng-forward@0.0.1-alpha.12/cjs/decorators/state-config.js",
      "npm:ng-forward@0.0.1-alpha.12/cjs/decorators/pipe.js",
      "github:angular-ui/angular-ui-router-bower@1.0.4.js",
      "github:angular-ui/angular-ui-router-bower@1.0.4/release/angular-ui-router.js",
      "npm:core-js@2.4.1.js",
      "npm:core-js@2.4.1/index.js",
      "npm:core-js@2.4.1/modules/_core.js",
      "npm:core-js@2.4.1/modules/core.string.unescape-html.js",
      "npm:core-js@2.4.1/modules/_replacer.js",
      "npm:core-js@2.4.1/modules/_export.js",
      "npm:core-js@2.4.1/modules/_ctx.js",
      "npm:core-js@2.4.1/modules/_a-function.js",
      "npm:core-js@2.4.1/modules/_redefine.js",
      "npm:core-js@2.4.1/modules/_uid.js",
      "npm:core-js@2.4.1/modules/_has.js",
      "npm:core-js@2.4.1/modules/_hide.js",
      "npm:core-js@2.4.1/modules/_descriptors.js",
      "npm:core-js@2.4.1/modules/_fails.js",
      "npm:core-js@2.4.1/modules/_property-desc.js",
      "npm:core-js@2.4.1/modules/_object-dp.js",
      "npm:core-js@2.4.1/modules/_to-primitive.js",
      "npm:core-js@2.4.1/modules/_is-object.js",
      "npm:core-js@2.4.1/modules/_ie8-dom-define.js",
      "npm:core-js@2.4.1/modules/_dom-create.js",
      "npm:core-js@2.4.1/modules/_global.js",
      "npm:core-js@2.4.1/modules/_an-object.js",
      "npm:core-js@2.4.1/modules/core.string.escape-html.js",
      "npm:core-js@2.4.1/modules/core.regexp.escape.js",
      "npm:core-js@2.4.1/modules/core.number.iterator.js",
      "npm:core-js@2.4.1/modules/_iter-define.js",
      "npm:core-js@2.4.1/modules/_wks.js",
      "npm:core-js@2.4.1/modules/_shared.js",
      "npm:core-js@2.4.1/modules/_object-gpo.js",
      "npm:core-js@2.4.1/modules/_shared-key.js",
      "npm:core-js@2.4.1/modules/_to-object.js",
      "npm:core-js@2.4.1/modules/_defined.js",
      "npm:core-js@2.4.1/modules/_set-to-string-tag.js",
      "npm:core-js@2.4.1/modules/_iter-create.js",
      "npm:core-js@2.4.1/modules/_object-create.js",
      "npm:core-js@2.4.1/modules/_html.js",
      "npm:core-js@2.4.1/modules/_enum-bug-keys.js",
      "npm:core-js@2.4.1/modules/_object-dps.js",
      "npm:core-js@2.4.1/modules/_object-keys.js",
      "npm:core-js@2.4.1/modules/_object-keys-internal.js",
      "npm:core-js@2.4.1/modules/_array-includes.js",
      "npm:core-js@2.4.1/modules/_to-index.js",
      "npm:core-js@2.4.1/modules/_to-integer.js",
      "npm:core-js@2.4.1/modules/_to-length.js",
      "npm:core-js@2.4.1/modules/_to-iobject.js",
      "npm:core-js@2.4.1/modules/_iobject.js",
      "npm:core-js@2.4.1/modules/_cof.js",
      "npm:core-js@2.4.1/modules/_iterators.js",
      "npm:core-js@2.4.1/modules/_library.js",
      "npm:core-js@2.4.1/modules/core.object.make.js",
      "npm:core-js@2.4.1/modules/_object-define.js",
      "npm:core-js@2.4.1/modules/_own-keys.js",
      "npm:core-js@2.4.1/modules/_object-gops.js",
      "npm:core-js@2.4.1/modules/_object-gopn.js",
      "npm:core-js@2.4.1/modules/_object-gopd.js",
      "npm:core-js@2.4.1/modules/_object-pie.js",
      "npm:core-js@2.4.1/modules/core.object.define.js",
      "npm:core-js@2.4.1/modules/core.object.classof.js",
      "npm:core-js@2.4.1/modules/_classof.js",
      "npm:core-js@2.4.1/modules/core.object.is-object.js",
      "npm:core-js@2.4.1/modules/core.function.part.js",
      "npm:core-js@2.4.1/modules/_partial.js",
      "npm:core-js@2.4.1/modules/_invoke.js",
      "npm:core-js@2.4.1/modules/_path.js",
      "npm:core-js@2.4.1/modules/core.delay.js",
      "npm:core-js@2.4.1/modules/core.is-iterable.js",
      "npm:core-js@2.4.1/modules/core.get-iterator.js",
      "npm:core-js@2.4.1/modules/core.get-iterator-method.js",
      "npm:core-js@2.4.1/modules/core.dict.js",
      "npm:core-js@2.4.1/modules/_iter-step.js",
      "npm:core-js@2.4.1/modules/_for-of.js",
      "npm:core-js@2.4.1/modules/_is-array-iter.js",
      "npm:core-js@2.4.1/modules/_iter-call.js",
      "npm:core-js@2.4.1/modules/_keyof.js",
      "npm:core-js@2.4.1/modules/_object-assign.js",
      "npm:core-js@2.4.1/shim.js",
      "npm:core-js@2.4.1/modules/web.dom.iterable.js",
      "npm:core-js@2.4.1/modules/es6.array.iterator.js",
      "npm:core-js@2.4.1/modules/_add-to-unscopables.js",
      "npm:core-js@2.4.1/modules/web.immediate.js",
      "npm:core-js@2.4.1/modules/_task.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:process@0.11.10.js",
      "npm:process@0.11.10/browser.js",
      "npm:core-js@2.4.1/modules/web.timers.js",
      "npm:core-js@2.4.1/modules/es7.observable.js",
      "npm:core-js@2.4.1/modules/_set-species.js",
      "npm:core-js@2.4.1/modules/_redefine-all.js",
      "npm:core-js@2.4.1/modules/_an-instance.js",
      "npm:core-js@2.4.1/modules/_microtask.js",
      "npm:core-js@2.4.1/modules/es7.asap.js",
      "npm:core-js@2.4.1/modules/es7.reflect.metadata.js",
      "npm:core-js@2.4.1/modules/_metadata.js",
      "npm:core-js@2.4.1/modules/es6.weak-map.js",
      "npm:core-js@2.4.1/modules/_collection.js",
      "npm:core-js@2.4.1/modules/_inherit-if-required.js",
      "npm:core-js@2.4.1/modules/_set-proto.js",
      "npm:core-js@2.4.1/modules/_iter-detect.js",
      "npm:core-js@2.4.1/modules/_meta.js",
      "npm:core-js@2.4.1/modules/_collection-weak.js",
      "npm:core-js@2.4.1/modules/_array-methods.js",
      "npm:core-js@2.4.1/modules/_array-species-create.js",
      "npm:core-js@2.4.1/modules/_array-species-constructor.js",
      "npm:core-js@2.4.1/modules/_is-array.js",
      "npm:core-js@2.4.1/modules/es6.map.js",
      "npm:core-js@2.4.1/modules/_collection-strong.js",
      "npm:core-js@2.4.1/modules/es7.reflect.has-own-metadata.js",
      "npm:core-js@2.4.1/modules/es7.reflect.has-metadata.js",
      "npm:core-js@2.4.1/modules/es7.reflect.get-own-metadata-keys.js",
      "npm:core-js@2.4.1/modules/es7.reflect.get-own-metadata.js",
      "npm:core-js@2.4.1/modules/es7.reflect.get-metadata-keys.js",
      "npm:core-js@2.4.1/modules/_array-from-iterable.js",
      "npm:core-js@2.4.1/modules/es6.set.js",
      "npm:core-js@2.4.1/modules/es7.reflect.get-metadata.js",
      "npm:core-js@2.4.1/modules/es7.reflect.delete-metadata.js",
      "npm:core-js@2.4.1/modules/es7.reflect.define-metadata.js",
      "npm:core-js@2.4.1/modules/es7.math.umulh.js",
      "npm:core-js@2.4.1/modules/es7.math.imulh.js",
      "npm:core-js@2.4.1/modules/es7.math.isubh.js",
      "npm:core-js@2.4.1/modules/es7.math.iaddh.js",
      "npm:core-js@2.4.1/modules/es7.error.is-error.js",
      "npm:core-js@2.4.1/modules/es7.system.global.js",
      "npm:core-js@2.4.1/modules/es7.set.to-json.js",
      "npm:core-js@2.4.1/modules/_collection-to-json.js",
      "npm:core-js@2.4.1/modules/es7.map.to-json.js",
      "npm:core-js@2.4.1/modules/es7.object.lookup-setter.js",
      "npm:core-js@2.4.1/modules/_object-forced-pam.js",
      "npm:core-js@2.4.1/modules/es7.object.lookup-getter.js",
      "npm:core-js@2.4.1/modules/es7.object.define-setter.js",
      "npm:core-js@2.4.1/modules/es7.object.define-getter.js",
      "npm:core-js@2.4.1/modules/es7.object.entries.js",
      "npm:core-js@2.4.1/modules/_object-to-array.js",
      "npm:core-js@2.4.1/modules/es7.object.values.js",
      "npm:core-js@2.4.1/modules/es7.object.get-own-property-descriptors.js",
      "npm:core-js@2.4.1/modules/_create-property.js",
      "npm:core-js@2.4.1/modules/es7.symbol.observable.js",
      "npm:core-js@2.4.1/modules/_wks-define.js",
      "npm:core-js@2.4.1/modules/_wks-ext.js",
      "npm:core-js@2.4.1/modules/es7.symbol.async-iterator.js",
      "npm:core-js@2.4.1/modules/es7.string.match-all.js",
      "npm:core-js@2.4.1/modules/_flags.js",
      "npm:core-js@2.4.1/modules/_is-regexp.js",
      "npm:core-js@2.4.1/modules/es7.string.trim-right.js",
      "npm:core-js@2.4.1/modules/_string-trim.js",
      "npm:core-js@2.4.1/modules/_string-ws.js",
      "npm:core-js@2.4.1/modules/es7.string.trim-left.js",
      "npm:core-js@2.4.1/modules/es7.string.pad-end.js",
      "npm:core-js@2.4.1/modules/_string-pad.js",
      "npm:core-js@2.4.1/modules/_string-repeat.js",
      "npm:core-js@2.4.1/modules/es7.string.pad-start.js",
      "npm:core-js@2.4.1/modules/es7.string.at.js",
      "npm:core-js@2.4.1/modules/_string-at.js",
      "npm:core-js@2.4.1/modules/es7.array.includes.js",
      "npm:core-js@2.4.1/modules/es6.reflect.set-prototype-of.js",
      "npm:core-js@2.4.1/modules/es6.reflect.set.js",
      "npm:core-js@2.4.1/modules/es6.reflect.prevent-extensions.js",
      "npm:core-js@2.4.1/modules/es6.reflect.own-keys.js",
      "npm:core-js@2.4.1/modules/es6.reflect.is-extensible.js",
      "npm:core-js@2.4.1/modules/es6.reflect.has.js",
      "npm:core-js@2.4.1/modules/es6.reflect.get-prototype-of.js",
      "npm:core-js@2.4.1/modules/es6.reflect.get-own-property-descriptor.js",
      "npm:core-js@2.4.1/modules/es6.reflect.get.js",
      "npm:core-js@2.4.1/modules/es6.reflect.enumerate.js",
      "npm:core-js@2.4.1/modules/es6.reflect.delete-property.js",
      "npm:core-js@2.4.1/modules/es6.reflect.define-property.js",
      "npm:core-js@2.4.1/modules/es6.reflect.construct.js",
      "npm:core-js@2.4.1/modules/_bind.js",
      "npm:core-js@2.4.1/modules/es6.reflect.apply.js",
      "npm:core-js@2.4.1/modules/es6.typed.float64-array.js",
      "npm:core-js@2.4.1/modules/_typed-array.js",
      "npm:core-js@2.4.1/modules/_array-copy-within.js",
      "npm:core-js@2.4.1/modules/_array-fill.js",
      "npm:core-js@2.4.1/modules/_species-constructor.js",
      "npm:core-js@2.4.1/modules/_same-value.js",
      "npm:core-js@2.4.1/modules/_typed-buffer.js",
      "npm:core-js@2.4.1/modules/_typed.js",
      "npm:core-js@2.4.1/modules/es6.typed.float32-array.js",
      "npm:core-js@2.4.1/modules/es6.typed.uint32-array.js",
      "npm:core-js@2.4.1/modules/es6.typed.int32-array.js",
      "npm:core-js@2.4.1/modules/es6.typed.uint16-array.js",
      "npm:core-js@2.4.1/modules/es6.typed.int16-array.js",
      "npm:core-js@2.4.1/modules/es6.typed.uint8-clamped-array.js",
      "npm:core-js@2.4.1/modules/es6.typed.uint8-array.js",
      "npm:core-js@2.4.1/modules/es6.typed.int8-array.js",
      "npm:core-js@2.4.1/modules/es6.typed.data-view.js",
      "npm:core-js@2.4.1/modules/es6.typed.array-buffer.js",
      "npm:core-js@2.4.1/modules/es6.weak-set.js",
      "npm:core-js@2.4.1/modules/es6.promise.js",
      "npm:core-js@2.4.1/modules/es6.regexp.split.js",
      "npm:core-js@2.4.1/modules/_fix-re-wks.js",
      "npm:core-js@2.4.1/modules/es6.regexp.search.js",
      "npm:core-js@2.4.1/modules/es6.regexp.replace.js",
      "npm:core-js@2.4.1/modules/es6.regexp.match.js",
      "npm:core-js@2.4.1/modules/es6.regexp.flags.js",
      "npm:core-js@2.4.1/modules/es6.regexp.to-string.js",
      "npm:core-js@2.4.1/modules/es6.regexp.constructor.js",
      "npm:core-js@2.4.1/modules/es6.array.species.js",
      "npm:core-js@2.4.1/modules/es6.array.find-index.js",
      "npm:core-js@2.4.1/modules/es6.array.find.js",
      "npm:core-js@2.4.1/modules/es6.array.fill.js",
      "npm:core-js@2.4.1/modules/es6.array.copy-within.js",
      "npm:core-js@2.4.1/modules/es6.array.last-index-of.js",
      "npm:core-js@2.4.1/modules/_strict-method.js",
      "npm:core-js@2.4.1/modules/es6.array.index-of.js",
      "npm:core-js@2.4.1/modules/es6.array.reduce-right.js",
      "npm:core-js@2.4.1/modules/_array-reduce.js",
      "npm:core-js@2.4.1/modules/es6.array.reduce.js",
      "npm:core-js@2.4.1/modules/es6.array.every.js",
      "npm:core-js@2.4.1/modules/es6.array.some.js",
      "npm:core-js@2.4.1/modules/es6.array.filter.js",
      "npm:core-js@2.4.1/modules/es6.array.map.js",
      "npm:core-js@2.4.1/modules/es6.array.for-each.js",
      "npm:core-js@2.4.1/modules/es6.array.sort.js",
      "npm:core-js@2.4.1/modules/es6.array.slice.js",
      "npm:core-js@2.4.1/modules/es6.array.join.js",
      "npm:core-js@2.4.1/modules/es6.array.of.js",
      "npm:core-js@2.4.1/modules/es6.array.from.js",
      "npm:core-js@2.4.1/modules/es6.array.is-array.js",
      "npm:core-js@2.4.1/modules/es6.date.to-primitive.js",
      "npm:core-js@2.4.1/modules/_date-to-primitive.js",
      "npm:core-js@2.4.1/modules/es6.date.to-string.js",
      "npm:core-js@2.4.1/modules/es6.date.to-iso-string.js",
      "npm:core-js@2.4.1/modules/es6.date.to-json.js",
      "npm:core-js@2.4.1/modules/es6.date.now.js",
      "npm:core-js@2.4.1/modules/es6.string.sup.js",
      "npm:core-js@2.4.1/modules/_string-html.js",
      "npm:core-js@2.4.1/modules/es6.string.sub.js",
      "npm:core-js@2.4.1/modules/es6.string.strike.js",
      "npm:core-js@2.4.1/modules/es6.string.small.js",
      "npm:core-js@2.4.1/modules/es6.string.link.js",
      "npm:core-js@2.4.1/modules/es6.string.italics.js",
      "npm:core-js@2.4.1/modules/es6.string.fontsize.js",
      "npm:core-js@2.4.1/modules/es6.string.fontcolor.js",
      "npm:core-js@2.4.1/modules/es6.string.fixed.js",
      "npm:core-js@2.4.1/modules/es6.string.bold.js",
      "npm:core-js@2.4.1/modules/es6.string.blink.js",
      "npm:core-js@2.4.1/modules/es6.string.big.js",
      "npm:core-js@2.4.1/modules/es6.string.anchor.js",
      "npm:core-js@2.4.1/modules/es6.string.starts-with.js",
      "npm:core-js@2.4.1/modules/_fails-is-regexp.js",
      "npm:core-js@2.4.1/modules/_string-context.js",
      "npm:core-js@2.4.1/modules/es6.string.repeat.js",
      "npm:core-js@2.4.1/modules/es6.string.includes.js",
      "npm:core-js@2.4.1/modules/es6.string.ends-with.js",
      "npm:core-js@2.4.1/modules/es6.string.code-point-at.js",
      "npm:core-js@2.4.1/modules/es6.string.iterator.js",
      "npm:core-js@2.4.1/modules/es6.string.trim.js",
      "npm:core-js@2.4.1/modules/es6.string.raw.js",
      "npm:core-js@2.4.1/modules/es6.string.from-code-point.js",
      "npm:core-js@2.4.1/modules/es6.math.trunc.js",
      "npm:core-js@2.4.1/modules/es6.math.tanh.js",
      "npm:core-js@2.4.1/modules/_math-expm1.js",
      "npm:core-js@2.4.1/modules/es6.math.sinh.js",
      "npm:core-js@2.4.1/modules/es6.math.sign.js",
      "npm:core-js@2.4.1/modules/_math-sign.js",
      "npm:core-js@2.4.1/modules/es6.math.log2.js",
      "npm:core-js@2.4.1/modules/es6.math.log1p.js",
      "npm:core-js@2.4.1/modules/_math-log1p.js",
      "npm:core-js@2.4.1/modules/es6.math.log10.js",
      "npm:core-js@2.4.1/modules/es6.math.imul.js",
      "npm:core-js@2.4.1/modules/es6.math.hypot.js",
      "npm:core-js@2.4.1/modules/es6.math.fround.js",
      "npm:core-js@2.4.1/modules/es6.math.expm1.js",
      "npm:core-js@2.4.1/modules/es6.math.cosh.js",
      "npm:core-js@2.4.1/modules/es6.math.clz32.js",
      "npm:core-js@2.4.1/modules/es6.math.cbrt.js",
      "npm:core-js@2.4.1/modules/es6.math.atanh.js",
      "npm:core-js@2.4.1/modules/es6.math.asinh.js",
      "npm:core-js@2.4.1/modules/es6.math.acosh.js",
      "npm:core-js@2.4.1/modules/es6.number.parse-int.js",
      "npm:core-js@2.4.1/modules/_parse-int.js",
      "npm:core-js@2.4.1/modules/es6.number.parse-float.js",
      "npm:core-js@2.4.1/modules/_parse-float.js",
      "npm:core-js@2.4.1/modules/es6.number.min-safe-integer.js",
      "npm:core-js@2.4.1/modules/es6.number.max-safe-integer.js",
      "npm:core-js@2.4.1/modules/es6.number.is-safe-integer.js",
      "npm:core-js@2.4.1/modules/_is-integer.js",
      "npm:core-js@2.4.1/modules/es6.number.is-nan.js",
      "npm:core-js@2.4.1/modules/es6.number.is-integer.js",
      "npm:core-js@2.4.1/modules/es6.number.is-finite.js",
      "npm:core-js@2.4.1/modules/es6.number.epsilon.js",
      "npm:core-js@2.4.1/modules/es6.number.to-precision.js",
      "npm:core-js@2.4.1/modules/_a-number-value.js",
      "npm:core-js@2.4.1/modules/es6.number.to-fixed.js",
      "npm:core-js@2.4.1/modules/es6.number.constructor.js",
      "npm:core-js@2.4.1/modules/es6.parse-float.js",
      "npm:core-js@2.4.1/modules/es6.parse-int.js",
      "npm:core-js@2.4.1/modules/es6.function.has-instance.js",
      "npm:core-js@2.4.1/modules/es6.function.name.js",
      "npm:core-js@2.4.1/modules/es6.function.bind.js",
      "npm:core-js@2.4.1/modules/es6.object.to-string.js",
      "npm:core-js@2.4.1/modules/es6.object.set-prototype-of.js",
      "npm:core-js@2.4.1/modules/es6.object.is.js",
      "npm:core-js@2.4.1/modules/es6.object.assign.js",
      "npm:core-js@2.4.1/modules/es6.object.is-extensible.js",
      "npm:core-js@2.4.1/modules/_object-sap.js",
      "npm:core-js@2.4.1/modules/es6.object.is-sealed.js",
      "npm:core-js@2.4.1/modules/es6.object.is-frozen.js",
      "npm:core-js@2.4.1/modules/es6.object.prevent-extensions.js",
      "npm:core-js@2.4.1/modules/es6.object.seal.js",
      "npm:core-js@2.4.1/modules/es6.object.freeze.js",
      "npm:core-js@2.4.1/modules/es6.object.get-own-property-names.js",
      "npm:core-js@2.4.1/modules/_object-gopn-ext.js",
      "npm:core-js@2.4.1/modules/es6.object.keys.js",
      "npm:core-js@2.4.1/modules/es6.object.get-prototype-of.js",
      "npm:core-js@2.4.1/modules/es6.object.get-own-property-descriptor.js",
      "npm:core-js@2.4.1/modules/es6.object.define-properties.js",
      "npm:core-js@2.4.1/modules/es6.object.define-property.js",
      "npm:core-js@2.4.1/modules/es6.object.create.js",
      "npm:core-js@2.4.1/modules/es6.symbol.js",
      "npm:core-js@2.4.1/modules/_enum-keys.js",
      "github:twbs/bootstrap-sass@3.3.6.js",
      "github:twbs/bootstrap-sass@3.3.6/assets/javascripts/bootstrap.js"
    ]
  },

  map: {
    "angular": "github:angular/bower-angular@1.6.4",
    "angular-ui-router": "github:angular-ui/angular-ui-router-bower@1.0.4",
    "bootstrap": "github:twbs/bootstrap-sass@3.3.6",
    "core-js": "npm:core-js@2.4.1",
    "font-awesome": "npm:font-awesome@4.7.0",
    "fs": "github:jspm/nodelibs-fs@0.1.2",
    "jquery": "npm:jquery@2.2.4",
    "ng-forward": "npm:ng-forward@0.0.1-alpha.12",
    "ng-template": "npm:plugin-ng-template@0.1.1",
    "path": "github:jspm/nodelibs-path@0.2.3",
    "process": "github:jspm/nodelibs-process@0.1.2",
    "sass": "github:dougludlow/plugin-sass@0.6.0",
    "scss": "github:dougludlow/plugin-sass@0.6.0",
    "ts": "github:frankwallis/plugin-typescript@7.0.6",
    "ts-runtime": "npm:babel-runtime@5.8.38",
    "typescript": "npm:typescript@2.3.4",
    "url": "github:jspm/nodelibs-url@0.1.0",
    "github:dougludlow/plugin-sass@0.6.0": {
      "autoprefixer": "npm:autoprefixer@6.7.7",
      "css-asset-copier": "npm:css-asset-copier@1.0.2",
      "css-url-rewriter-ex": "npm:css-url-rewriter-ex@1.0.6",
      "postcss": "npm:postcss@5.2.17",
      "reqwest": "github:ded/reqwest@2.0.5",
      "sass.js": "npm:sass.js@0.9.13"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.0.6"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:@reactivex/rxjs@5.0.0-alpha.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.9.1": {
      "bn.js": "npm:bn.js@4.11.7",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:autoprefixer@6.7.7": {
      "browserslist": "npm:browserslist@1.7.7",
      "caniuse-db": "npm:caniuse-db@1.0.30000692",
      "normalize-range": "npm:normalize-range@0.1.2",
      "num2fraction": "npm:num2fraction@1.2.2",
      "postcss": "npm:postcss@5.2.17",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-runtime@6.23.0": {
      "core-js": "npm:core-js@2.4.1",
      "regenerator-runtime": "npm:regenerator-runtime@0.10.5"
    },
    "npm:bn.js@4.11.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:brace-expansion@1.1.8": {
      "balanced-match": "npm:balanced-match@1.0.0",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.3",
      "create-hash": "npm:create-hash@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.7",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.5"
    },
    "npm:browserify-sign@4.0.4": {
      "bn.js": "npm:bn.js@4.11.7",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "create-hmac": "npm:create-hmac@1.1.6",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.4.0",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserslist@1.7.7": {
      "caniuse-db": "npm:caniuse-db@1.0.30000692",
      "electron-to-chromium": "npm:electron-to-chromium@1.3.14",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@5.0.6": {
      "base64-js": "npm:base64-js@1.2.0",
      "ieee754": "npm:ieee754@1.1.8"
    },
    "npm:chalk@1.1.3": {
      "ansi-styles": "npm:ansi-styles@2.2.1",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:cipher-base@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@2.4.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.7",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.4.0"
    },
    "npm:create-hash@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@2.0.1",
      "sha.js": "npm:sha.js@2.4.8"
    },
    "npm:create-hmac@1.1.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.3",
      "create-hash": "npm:create-hash@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@2.0.1",
      "safe-buffer": "npm:safe-buffer@5.1.0",
      "sha.js": "npm:sha.js@2.4.8"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.4",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.3",
      "create-hmac": "npm:create-hmac@1.1.6",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.12",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.5"
    },
    "npm:css-asset-copier@1.0.2": {
      "babel-runtime": "npm:babel-runtime@6.23.0",
      "fs-extra": "npm:fs-extra@0.30.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:css-url-rewriter-ex@1.0.6": {
      "babel-runtime": "npm:babel-runtime@6.23.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.7",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.5",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:elliptic@6.4.0": {
      "bn.js": "npm:bn.js@4.11.7",
      "brorand": "npm:brorand@1.1.0",
      "hash.js": "npm:hash.js@1.1.1",
      "hmac-drbg": "npm:hmac-drbg@1.0.1",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:font-awesome@4.7.0": {
      "css": "github:systemjs/plugin-css@0.1.35"
    },
    "npm:fs-extra@0.30.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "jsonfile": "npm:jsonfile@2.4.0",
      "klaw": "npm:klaw@1.3.1",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rimraf": "npm:rimraf@2.6.1"
    },
    "npm:fs.realpath@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:glob@7.1.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fs.realpath": "npm:fs.realpath@1.0.0",
      "inflight": "npm:inflight@1.0.6",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@3.0.4",
      "once": "npm:once@1.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-fs@4.1.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.1.1"
    },
    "npm:has-flag@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:hash-base@2.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:hash.js@1.1.1": {
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:hmac-drbg@1.0.1": {
      "hash.js": "npm:hash.js@1.1.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inflight@1.0.6": {
      "once": "npm:once@1.4.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wrappy": "npm:wrappy@1.0.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inherits@2.0.3": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:js-base64@2.1.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:jsonfile@2.4.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-fs": "npm:graceful-fs@4.1.11"
    },
    "npm:klaw@1.3.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.11.7",
      "brorand": "npm:brorand@1.1.0"
    },
    "npm:minimatch@3.0.4": {
      "brace-expansion": "npm:brace-expansion@1.1.8",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:ng-forward@0.0.1-alpha.12": {
      "@reactivex/rxjs": "npm:@reactivex/rxjs@5.0.0-alpha.7",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "reflect-metadata": "npm:reflect-metadata@0.1.10"
    },
    "npm:once@1.4.0": {
      "wrappy": "npm:wrappy@1.0.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:parse-asn1@5.1.0": {
      "asn1.js": "npm:asn1.js@4.9.1",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.12",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-is-absolute@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "create-hmac": "npm:create-hmac@1.1.6",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "ripemd160": "npm:ripemd160@2.0.1",
      "safe-buffer": "npm:safe-buffer@5.1.0",
      "sha.js": "npm:sha.js@2.4.8"
    },
    "npm:postcss@5.2.17": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "chalk": "npm:chalk@1.1.3",
      "js-base64": "npm:js-base64@2.1.9",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.6",
      "supports-color": "npm:supports-color@3.2.3"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.7",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.1.0",
      "randombytes": "npm:randombytes@2.0.5"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.1.0"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:regenerator-runtime@0.10.5": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:rimraf@2.6.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@7.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ripemd160@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "hash-base": "npm:hash-base@2.0.2",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:safe-buffer@5.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:sass.js@0.9.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map-support@0.4.15": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "source-map": "npm:source-map@0.5.6"
    },
    "npm:source-map@0.5.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:strip-ansi@3.0.1": {
      "ansi-regex": "npm:ansi-regex@2.1.1"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:supports-color@3.2.3": {
      "has-flag": "npm:has-flag@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.10"
    },
    "npm:typescript@2.3.4": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "source-map-support": "npm:source-map-support@0.4.15"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
