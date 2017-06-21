declare module 'ng-forward' {
    export function Injectable(): ClassDecorator;
    export function Inject(...injectables: any[]);

    export function Component(componentConfig: any): ClassDecorator;
    export function Directive(directiveConfig: any): ClassDecorator;
    export function Input(attrName?: string): PropertyDecorator;
    export function Output(attrName?: string): PropertyDecorator;
    export function Resolve(attrName?: string): PropertyDecorator;

    export function StateConfig(states: any[]): ClassDecorator;

    export function bootstrap(component: any, otherProviders?: any[]): void;

    export function getInjectableName(clazz: any): string;
}
