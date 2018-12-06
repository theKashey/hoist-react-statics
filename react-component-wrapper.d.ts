declare module 'hoist-react-statics' {
    export default function hoistReactStatic<T>(targetComponent: any, sourceComponent: T): T;
}