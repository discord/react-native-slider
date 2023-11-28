var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _index=_interopRequireDefault(require("./index"));var _excluded=["onValueChange","onSlidingStart","onSlidingComplete","onAccessibilityAction"];var _this=this,_jsxFileName="/Users/patrick.mick/Documents/Developer/react-native-slider/src/Slider.tsx";var LIMIT_MIN_VALUE=Number.MIN_SAFE_INTEGER;var LIMIT_MAX_VALUE=Number.MAX_SAFE_INTEGER;var SliderComponent=function SliderComponent(props,forwardedRef){var _props$accessibilityS;var style=_reactNative.StyleSheet.compose(props.style,styles.slider);var onValueChange=props.onValueChange,onSlidingStart=props.onSlidingStart,onSlidingComplete=props.onSlidingComplete,onAccessibilityAction=props.onAccessibilityAction,localProps=(0,_objectWithoutProperties2.default)(props,_excluded);var onValueChangeEvent=onValueChange?function(event){onValueChange(event.nativeEvent.value);}:null;var _disabled=typeof props.disabled==='boolean'?props.disabled:((_props$accessibilityS=props.accessibilityState)==null?void 0:_props$accessibilityS.disabled)===true;var _accessibilityState=typeof props.disabled==='boolean'?Object.assign({},props.accessibilityState,{disabled:props.disabled}):props.accessibilityState;var onSlidingStartEvent=onSlidingStart?function(event){onSlidingStart(event.nativeEvent.value);}:null;var onSlidingCompleteEvent=onSlidingComplete?function(event){onSlidingComplete(event.nativeEvent.value);}:null;var onAccessibilityActionEvent=onAccessibilityAction?function(event){onAccessibilityAction(event);}:null;var lowerLimit=!!localProps.lowerLimit||localProps.lowerLimit===0?localProps.lowerLimit:LIMIT_MIN_VALUE;var upperLimit=!!localProps.upperLimit||localProps.upperLimit===0?localProps.upperLimit:LIMIT_MAX_VALUE;return _react.default.createElement(_index.default,(0,_extends2.default)({},localProps,{lowerLimit:lowerLimit,upperLimit:upperLimit,accessibilityState:_accessibilityState,thumbImage:_reactNative.Platform.OS==='web'?props.thumbImage:props.thumbImage?_reactNative.Image.resolveAssetSource(props.thumbImage):undefined,ref:forwardedRef,style:style,onChange:onValueChangeEvent,onRNCSliderSlidingStart:onSlidingStartEvent,onRNCSliderSlidingComplete:onSlidingCompleteEvent,onRNCSliderValueChange:onValueChangeEvent,disabled:_disabled,onStartShouldSetResponder:function onStartShouldSetResponder(){return true;},onResponderTerminationRequest:function onResponderTerminationRequest(){return false;},onRNCSliderAccessibilityAction:onAccessibilityActionEvent,__self:_this,__source:{fileName:_jsxFileName,lineNumber:244,columnNumber:5}}));};var SliderWithRef=_react.default.forwardRef(SliderComponent);SliderWithRef.defaultProps={value:0,minimumValue:0,maximumValue:1,step:0,inverted:false,tapToSeek:false,lowerLimit:LIMIT_MIN_VALUE,upperLimit:LIMIT_MAX_VALUE};var styles=_reactNative.StyleSheet.create(_reactNative.Platform.OS==='ios'?{slider:{height:40}}:{slider:{}});var _default=SliderWithRef;exports.default=_default;