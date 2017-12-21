import hoistNonReactStatic from 'hoist-non-react-statics'

const hoistReactStatic = (targetComponent, sourceComponent) => {
  hoistNonReactStatic(targetComponent, sourceComponent);
  targetComponent.WrappedComponent = sourceComponent;
  targetComponent.propTypes = sourceComponent.propTypes;
}

export default hoistReactStatic;