/*! For license information please see main.320589a7.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./ sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.js)$":function(module,exports,__webpack_require__){var map={"./src/components/useFormGenerator/index.stories.js":"./src/components/useFormGenerator/index.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./ sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.js)$"},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./ sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.js)$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src/components/useFormGenerator/index.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DefaultFormGenerator",(function(){return index_stories_DefaultFormGenerator}));__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var react=__webpack_require__("./node_modules/react/index.js"),chakra_ui_layout_esm=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js"),chakra_ui_switch_esm=__webpack_require__("./node_modules/@chakra-ui/switch/dist/chakra-ui-switch.esm.js"),chakra_ui_radio_esm=__webpack_require__("./node_modules/@chakra-ui/radio/dist/chakra-ui-radio.esm.js"),chakra_ui_slider_esm=__webpack_require__("./node_modules/@chakra-ui/slider/dist/chakra-ui-slider.esm.js"),dist=(__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/schema-to-yup/dist/index.js")),chakra_ui_button_esm=(__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.async-iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js")),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");var FormContainer=Object(emotion_styled_base_browser_esm.a)("form",{target:"e1df64a12"})({name:"16dyfka",styles:"aligncontent:center;display:flex;flexdirection:column;justifycontent:center;marginbottom:2rem;textalign:right;fieldset{border:none;margin:0 auto;max-width:500px;padding:1rem 0;width:100%;}input{margin-left:1rem;width:40%;}"}),FieldContainer=Object(emotion_styled_base_browser_esm.a)("div",{target:"e1df64a11"})({name:"rohh5n",styles:"padding:0.2rem 0"}),ErrorContainer=Object(emotion_styled_base_browser_esm.a)("div",{target:"e1df64a10"})({name:"1kxg0i9",styles:"color:red;text-align:right"}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return generator._invoke=function(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}(innerFn,self,context),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==typeof value&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;this._invoke=function(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}}function maybeInvokeDelegate(delegate,context){var method=delegate.iterator[context.method];if(void 0===method){if(context.delegate=null,"throw"===context.method){if(delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method))return ContinueSentinel;context.method="throw",context.arg=new TypeError("The iterator does not provide a 'throw' method")}return ContinueSentinel}var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,define(Gp,"constructor",GeneratorFunctionPrototype),define(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(object){var keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var defaultWrappers={InputWrapper:function InputWrapper(_ref){var children=_ref.children;return Object(jsx_runtime.jsx)(FieldContainer,{children:children})},InputFieldsContainer:function InputFieldsContainer(_ref2){var fields=_ref2.fields,onInputChange=_ref2.onInputChange;return Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{children:fields.map((function(field,i){return Object(jsx_runtime.jsx)(field.component,{name:field.name,value:field.value,onChange:onInputChange},i)}))})},ErrorWrapper:function ErrorWrapper(_ref3){var children=_ref3.children;return Object(jsx_runtime.jsx)(ErrorContainer,{children:children})},FormWrapper:function FormWrapper(_ref4){var formDataRef=_ref4.formDataRef,_ref4$setFormData=_ref4.setFormData,setFormData=void 0===_ref4$setFormData?function(){}:_ref4$setFormData,yupSchema=_ref4.yupSchema,onFormSubmit=_ref4.onFormSubmit,inputFields=_ref4.inputFields,InputFieldsContainer=_ref4.InputFieldsContainer,ErrorWrapper=_ref4.ErrorWrapper,_useState2=_slicedToArray(Object(react.useState)(""),2),error=_useState2[0],setError=_useState2[1],handleSubmit=function(){var _ref5=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(e){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return e.preventDefault(),_context.prev=1,_context.next=4,yupSchema.validate(formDataRef.current);case 4:_context.next=9;break;case 6:return _context.prev=6,_context.t0=_context.catch(1),_context.abrupt("return",setError(_context.t0.message));case 9:setError(""),onFormSubmit(e,formDataRef.current),console.log("Sample quotation form submitted!",formDataRef.current);case 12:case"end":return _context.stop()}}),_callee,null,[[1,6]])})));return function handleSubmit(_x){return _ref5.apply(this,arguments)}}();return Object(jsx_runtime.jsx)(FormContainer,{onSubmit:handleSubmit,children:Object(jsx_runtime.jsxs)("fieldset",{children:[Object(jsx_runtime.jsx)(InputFieldsContainer,{fields:inputFields,onInputChange:function onInputChange(propName,val){setFormData(propName,val)}}),error&&Object(jsx_runtime.jsx)(ErrorWrapper,{children:error}),Object(jsx_runtime.jsx)(chakra_ui_button_esm.a,{type:"submit",colorScheme:"yellow",children:"Submit sample form"})]})})}},defaultWrappers_component=defaultWrappers,defaultActions_util={onValueChange:function onValueChange(){},onFormSubmit:function onFormSubmit(){}};function inputGenerator_util_slicedToArray(arr,i){return function inputGenerator_util_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function inputGenerator_util_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function inputGenerator_util_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return inputGenerator_util_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return inputGenerator_util_arrayLikeToArray(o,minLen)}(arr,i)||function inputGenerator_util_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function inputGenerator_util_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var inputGenerator_util=function generateInput(name,value,schemaProp,schemaConfig,_ref){var Wrapper=_ref.Wrapper;return function(_ref2){var step,onChange=_ref2.onChange,_useState2=inputGenerator_util_slicedToArray(Object(react.useState)(value),2),val=_useState2[0],setVal=_useState2[1],typeAttr=function getInputTypeAttr(type){switch(type){case"integer":case"number":return"number";default:return"string"}}(schemaProp.type);"number"===typeAttr&&(step=function getNumberInputStep(multipleOf){return multipleOf||1}(schemaProp.multipleOf));var otherInputProps={};step&&(otherInputProps.step=step);return Object(jsx_runtime.jsxs)(Wrapper,{children:[Object(jsx_runtime.jsx)("label",{htmlFor:name,children:schemaProp.title}),Object(jsx_runtime.jsx)("input",Object.assign({id:name,name:name,type:typeAttr,value:val,onChange:function onHandleChange(e){setVal(e.target.value),onChange(name,e.target.value)},placeholder:schemaProp.description||""},otherInputProps))]})}},components_useFormGenerator=function useFormGenerator(schema){var config=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},initialFormData=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},wrappers=arguments.length>3&&void 0!==arguments[3]?arguments[3]:defaultWrappers_component,actions=arguments.length>4&&void 0!==arguments[4]?arguments[4]:defaultActions_util,components=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},formDataRef=Object(react.useRef)(initialFormData),formData=formDataRef.current,setFormData=function setFormData(prop,newVal){formDataRef.current[prop]=newVal},yupSchema=Object(dist.buildYup)(schema,config),props=schema.properties,_config$privates=config.privates,privates=void 0===_config$privates?[]:_config$privates,nodes=yupSchema._nodes,inputFields=nodes.filter((function(propName){return privates.indexOf(propName)<0})).map((function(propName){var propValue=void 0!==formData[propName]?formData[propName]:void 0!==props[propName].default?props[propName].default:"";return{name:propName,value:propValue,component:components[propName]||inputGenerator_util(propName,propValue,props[propName],config,{Wrapper:wrappers.InputWrapper})}})),data={yupSchema:yupSchema,components:inputFields,Form:function Form(){return Object(jsx_runtime.jsx)(wrappers.FormWrapper,Object.assign({formDataRef:formDataRef,setFormData:setFormData,yupSchema:yupSchema,inputFields:inputFields,InputFieldsContainer:wrappers.InputFieldsContainer,ErrorWrapper:wrappers.ErrorWrapper},actions))}};return data},chakra_ui_react_esm=__webpack_require__("./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js"),theme1=Object(chakra_ui_react_esm.b)(Object.assign({},{breakpoints:{mobile:"480px",tablet:"768px",desktop:"1280px",desktopPlus:"1280px"},styles:{global:{"html, body":{fontFamily:"'roboto', 'Noto Sans TC', 'Noto Sans SC', sans-serif"}}}}));function index_stories_slicedToArray(arr,i){return function index_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function index_stories_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function index_stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return index_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return index_stories_arrayLikeToArray(o,minLen)}(arr,i)||function index_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function index_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_exports__.default={title:"FormGenerator"};var index_stories_DefaultFormGenerator=function DefaultFormGenerator(){var schema=index_stories_slicedToArray(Object(react.useState)({$schema:"http://json-schema.org/draft-07/schema#",$id:"http://example.com/quotation.schema.json",title:"Quotation",description:"Quotation",type:"object",properties:{quote_date:{type:"string",title:"Quotation date",description:"Quotation Date",required:!0},rep:{type:"integer",title:"Rep",description:"ID of sales staff (auth_user)",required:!0},cusID:{type:"integer",title:"Customer ID",description:"ID of customer (Partymaster)",required:!0},status:{type:"integer",enum:[1,2],title:"Status",description:"ID of status",required:!0},is_obsolete:{type:"boolean",title:"Obsolete",description:"Is it obsolete?",required:!0},created_by:{type:"integer",exclusiveMinimum:0,description:"ID of user"},modified_by:{type:"integer",exclusiveMinimum:0,private:!0,description:"ID of user"}},required:["quote_date","rep","cusID","billing_address","shipping_address","total_amt","status"]}),1)[0],data={cusID:"100",quote_date:new Date,is_obsolete:!0,status:1,rep:50},sampleQuotation=components_useFormGenerator(schema,{errMessages:{quote_date:{required:"Quote date is missing",format:"Not a valid date"},rep:{required:"Rep is missing"},cusID:{required:"cusID is missing"},billing_address:{required:"Billing address is missing"},shipping_address:{required:"Shipping address is missing"},total_amt:{required:"Total amount is missing"},status:{required:"Status is missing"},email:{required:"You must enter an email address",format:"Not a valid email address"}},privates:["created_by","modified_by"]},data,void 0,void 0,{is_obsolete:function IsObsoleteComp(_ref){var name=_ref.name,value=_ref.value,_onChange=_ref.onChange,_useState4=index_stories_slicedToArray(Object(react.useState)(value),2),val=_useState4[0],setVal=_useState4[1];return Object(jsx_runtime.jsxs)(chakra_ui_layout_esm.a,{paddingBottom:"1rem",children:[Object(jsx_runtime.jsx)("h3",{children:"Is obsolete"}),Object(jsx_runtime.jsx)(chakra_ui_switch_esm.a,{size:"lg",isChecked:!!val,onChange:function onChange(){setVal(!val),_onChange(name,!val)}})]})},status:function StatusComp(_ref2){var name=_ref2.name,value=_ref2.value,_onChange2=_ref2.onChange,_useState6=index_stories_slicedToArray(Object(react.useState)(value),2),val=_useState6[0],setVal=_useState6[1];return Object(jsx_runtime.jsxs)(chakra_ui_layout_esm.a,{paddingBottom:"1rem",children:[Object(jsx_runtime.jsx)("h3",{children:"Status"}),Object(jsx_runtime.jsx)(chakra_ui_radio_esm.b,{value:val,onChange:function onChange(newVal){setVal(+newVal),_onChange2(name,+newVal)},children:Object(jsx_runtime.jsxs)(chakra_ui_layout_esm.b,{direction:"row",children:[Object(jsx_runtime.jsx)(chakra_ui_radio_esm.a,{value:1,children:"Status 1"}),Object(jsx_runtime.jsx)(chakra_ui_radio_esm.a,{value:2,children:"Status 2"})]})})]})},rep:function RepComp(_ref3){var name=_ref3.name,value=_ref3.value,_onChange3=_ref3.onChange,_useState8=index_stories_slicedToArray(Object(react.useState)(value),2),val=_useState8[0],setVal=_useState8[1];return Object(jsx_runtime.jsxs)(chakra_ui_layout_esm.a,{paddingBottom:"1rem",children:[Object(jsx_runtime.jsx)("h3",{children:"Rep"}),Object(jsx_runtime.jsxs)(chakra_ui_slider_esm.a,{"aria-label":"slider-ex-5",name:name,value:val,min:1,max:60,step:1,onChange:function onChange(v){setVal(v),_onChange3(name,v)},children:[Object(jsx_runtime.jsx)(chakra_ui_slider_esm.d,{children:Object(jsx_runtime.jsx)(chakra_ui_slider_esm.b,{})}),Object(jsx_runtime.jsx)(chakra_ui_slider_esm.c,{})]})]})}});return Object(jsx_runtime.jsx)("div",{className:"App",children:Object(jsx_runtime.jsxs)(chakra_ui_react_esm.a,{theme:theme1,children:[Object(jsx_runtime.jsx)("h2",{align:"center",children:"React Formik Generator"}),sampleQuotation.Form&&Object(jsx_runtime.jsx)(sampleQuotation.Form,{})]})})};index_stories_DefaultFormGenerator.displayName="DefaultFormGenerator"},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,2,3]]]);
//# sourceMappingURL=main.320589a7.iframe.bundle.js.map