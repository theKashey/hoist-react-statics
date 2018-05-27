[![NPM](https://nodei.co/npm/hoist-react-statics.png?downloads=true&stars=true)](https://nodei.co/npm/hoist-react-statics/) [![Greenkeeper badge](https://badges.greenkeeper.io/theKashey/hoist-react-statics.svg)](https://greenkeeper.io/)

## The problem

How many times you wrap one component by another? Use the React's HOC paradigm?
```js
const MySuperComponentWrapper = props => (
   <AmazingStuff><WrappedComponent {...props} /></AmazingStuff>
)
```
That about propTypes? types?

## The Solution 
```js
import hoistReactStatics from 'hoist-react-staticsr';

const MySuperComponentWrapper = hoistReactStatics(props => (
  <AmazingStuff><WrappedComponent {...props} /></AmazingStuff>
), WrappedComponent);
```

## But why?
Are you mad mate? I need only one line to solve this problem! I have written 
```js
const MySuperComponentWrapper = props => (
   <AmazingStuff><WrappedComponent {...props} /></AmazingStuff>
)
MySuperComponentWrapper.propTypes = WrappedComponent.propTypes;
```

But 
- what about Flow/TS types?   
Huh?

# Licence
 MIT
 