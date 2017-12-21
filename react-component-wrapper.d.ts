declare module 'hoist-react-statics' {
    export function hoistReactStatic<T>(targetComponent: any, sourceComponent: T): T;
}