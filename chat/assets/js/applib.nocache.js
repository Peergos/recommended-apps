function applib(){
  var $wnd_0 = window, $doc_0 = document, gwtOnLoad_0, bodyDone, base = '', metaProps = {}, values = [], providers = [], answers = [], softPermutationId = 0, onLoadErrorFunc, propertyErrorFunc;
  if (!$wnd_0.__gwt_stylesLoaded) {
    $wnd_0.__gwt_stylesLoaded = {};
  }
  if (!$wnd_0.__gwt_scriptsLoaded) {
    $wnd_0.__gwt_scriptsLoaded = {};
  }
  function isHostedMode(){
    var result = false;
    try {
      var query = $wnd_0.location.search;
      return (query.indexOf('gwt.codesvr=') != -1 || (query.indexOf('gwt.hosted=') != -1 || $wnd_0.external && $wnd_0.external.gwtOnLoad)) && query.indexOf('gwt.hybrid') == -1;
    }
     catch (e) {
    }
    isHostedMode = function(){
      return result;
    }
    ;
    return result;
  }

  function maybeStartModule(){
    if (gwtOnLoad_0 && bodyDone) {
      gwtOnLoad_0(onLoadErrorFunc, 'applib', base, softPermutationId);
    }
  }

  function computeScriptBase(){
    var thisScript, markerId = '__gwt_marker_applib', markerScript;
    $doc_0.write('<script id="' + markerId + '"><\/script>');
    markerScript = $doc_0.getElementById(markerId);
    thisScript = markerScript && markerScript.previousSibling;
    while (thisScript && thisScript.tagName != 'SCRIPT') {
      thisScript = thisScript.previousSibling;
    }
    function getDirectoryOfFile(path){
      var hashIndex = path.lastIndexOf('#');
      if (hashIndex == -1) {
        hashIndex = path.length;
      }
      var queryIndex = path.indexOf('?');
      if (queryIndex == -1) {
        queryIndex = path.length;
      }
      var slashIndex = path.lastIndexOf('/', Math.min(queryIndex, hashIndex));
      return slashIndex >= 0?path.substring(0, slashIndex + 1):'';
    }

    ;
    if (thisScript && thisScript.src) {
      base = getDirectoryOfFile(thisScript.src);
    }
    if (base == '') {
      var baseElements = $doc_0.getElementsByTagName('base');
      if (baseElements.length > 0) {
        base = baseElements[baseElements.length - 1].href;
      }
       else {
        base = getDirectoryOfFile($doc_0.location.href);
      }
    }
     else if (base.match(/^\w+:\/\//)) {
    }
     else {
      var img = $doc_0.createElement('img');
      img.src = base + 'clear.cache.gif';
      base = getDirectoryOfFile(img.src);
    }
    if (markerScript) {
      markerScript.parentNode.removeChild(markerScript);
    }
  }

  function processMetas(){
    var metas = document.getElementsByTagName('meta');
    for (var i = 0, n = metas.length; i < n; ++i) {
      var meta = metas[i], name_0 = meta.getAttribute('name'), content_0;
      if (name_0) {
        if (name_0 == 'gwt:property') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            var value_0, eq = content_0.indexOf('=');
            if (eq >= 0) {
              name_0 = content_0.substring(0, eq);
              value_0 = content_0.substring(eq + 1);
            }
             else {
              name_0 = content_0;
              value_0 = '';
            }
            metaProps[name_0] = value_0;
          }
        }
         else if (name_0 == 'gwt:onPropertyErrorFn') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            try {
              propertyErrorFunc = eval(content_0);
            }
             catch (e) {
              alert('Bad handler "' + content_0 + '" for "gwt:onPropertyErrorFn"');
            }
          }
        }
         else if (name_0 == 'gwt:onLoadErrorFn') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            try {
              onLoadErrorFunc = eval(content_0);
            }
             catch (e) {
              alert('Bad handler "' + content_0 + '" for "gwt:onLoadErrorFn"');
            }
          }
        }
      }
    }
  }

  __gwt_isKnownPropertyValue = function(propName, propValue){
    return propValue in values[propName];
  }
  ;
  __gwt_getMetaProperty = function(name_0){
    var value_0 = metaProps[name_0];
    return value_0 == null?null:value_0;
  }
  ;
  applib.onScriptLoad = function(gwtOnLoadFunc){
    applib = null;
    gwtOnLoad_0 = gwtOnLoadFunc;
    maybeStartModule();
  }
  ;
  if (isHostedMode()) {
    alert('Single-script hosted mode not yet implemented. See issue ' + 'http://code.google.com/p/google-web-toolkit/issues/detail?id=2079');
    return;
  }
  computeScriptBase();
  processMetas();
  try {
    var strongName;
    strongName = 'EC5D514DB1F51B9D903C4D465FD91EDC';
    var idx = strongName.indexOf(':');
    if (idx != -1) {
      softPermutationId = Number(strongName.substring(idx + 1));
    }
  }
   catch (e) {
    return;
  }
  var onBodyDoneTimerId;
  function onBodyDone(){
    if (!bodyDone) {
      bodyDone = true;
      maybeStartModule();
      if ($doc_0.removeEventListener) {
        $doc_0.removeEventListener('DOMContentLoaded', onBodyDone, false);
      }
      if (onBodyDoneTimerId) {
        clearInterval(onBodyDoneTimerId);
      }
    }
  }

  if ($doc_0.addEventListener) {
    $doc_0.addEventListener('DOMContentLoaded', function(){
      onBodyDone();
    }
    , false);
  }
  var onBodyDoneTimerId = setInterval(function(){
    if (/loaded|complete/.test($doc_0.readyState)) {
      onBodyDone();
    }
  }
  , 50);
}

applib();
(function () {var $gwt_version = "2.8.3";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {$wnd.__gwtStatsEvent(a)} : null;var $strongName = 'EC5D514DB1F51B9D903C4D465FD91EDC';var $intern_0 = -17592186044416, $intern_1 = 17592186044416, $intern_2 = 4194304, $intern_3 = 1048575, $intern_4 = {3:1}, $intern_5 = {3:1, 4:1}, $intern_6 = {3:1, 5:1, 4:1}, $intern_7 = {34:1}, $intern_8 = {3:1, 9:1, 19:1}, $intern_9 = {17:1}, $intern_10 = {38:1}, $intern_11 = 4194303, $intern_12 = 524288, $intern_13 = {3:1, 15:1, 4:1}, $intern_14 = 86400, $intern_15 = 1000000000, $intern_16 = 3600000000000, $intern_17 = 60000000000, $intern_18 = {9:1, 22:1}, $intern_19 = {12:1};
var _, prototypesByTypeId_0, initFnList_0, permutationId = -1;
function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function typeMarkerFn(){
}

function toString_2(object){
  var number;
  if (Array.isArray(object) && object.typeMarker === typeMarkerFn) {
    return $getName(getClass__Ljava_lang_Class___devirtual$(object)) + '@' + (number = hashCode__I__devirtual$(object) >>> 0 , number.toString(16));
  }
  return object.toString();
}

function provide(namespace, optCtor){
  var cur = $wnd;
  if (namespace === '') {
    return cur;
  }
  var parts = namespace.split('.');
  !(parts[0] in cur) && cur.execScript && cur.execScript('var ' + parts[0]);
  if (optCtor) {
    var clazz = optCtor.prototype.___clazz;
    clazz.jsConstructor = optCtor;
  }
  for (var part; parts.length && (part = parts.shift());) {
    cur = cur[part] = cur[part] || !parts.length && optCtor || {};
  }
  return cur;
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function makeLambdaFunction(samMethod, ctor, ctorArguments){
  var lambda = function(){
    return samMethod.apply(lambda, arguments);
  }
  ;
  ctor.apply(lambda, ctorArguments);
  return lambda;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeIdOrPrototype, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0, superPrototype;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = prototype_0 instanceof Array?prototype_0[0]:null;
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = (superPrototype = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype , !superPrototype && (superPrototype = prototypesByTypeId_0[superTypeIdOrPrototype]) , portableObjCreate(superPrototype));
    _.castableTypeMap = castableTypeMap;
    !superTypeIdOrPrototype && (_.typeMarker = typeMarkerFn);
    prototypesByTypeId[typeId] = _;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz = clazz);
}

function bootstrap(){
  prototypesByTypeId_0 = {};
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
  function now_0(){
    return (new Date).getTime();
  }

  !Date.now && (Date.now = now_0);
}

$wnd.goog = $wnd.goog || {};
$wnd.goog.global = $wnd.goog.global || $wnd;
bootstrap();
function $equals(this$static, other){
  return maskUndefined(this$static) === maskUndefined(other);
}

function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return instanceOfString(this$static)?$equals_0(this$static, other):instanceOfDouble(this$static)?(checkCriticalNotNull(this$static) , maskUndefined(this$static) === maskUndefined(other)):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , maskUndefined(this$static) === maskUndefined(other)):hasJavaObjectVirtualDispatch(this$static)?this$static.equals_0(other):isJavaArray(this$static)?$equals(this$static, other):!!this$static && !!this$static.equals?this$static.equals(other):maskUndefined(this$static) === maskUndefined(other);
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return instanceOfString(this$static)?Ljava_lang_String_2_classLit:instanceOfDouble(this$static)?Ljava_lang_Double_2_classLit:instanceOfBoolean(this$static)?Ljava_lang_Boolean_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz:isJavaArray(this$static)?this$static.___clazz:this$static.___clazz || Array.isArray(this$static) && getClassLiteralForArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1) || Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return instanceOfString(this$static)?getHashCode_0(this$static):instanceOfDouble(this$static)?round_int((checkCriticalNotNull(this$static) , this$static)):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static)?1231:1237:hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode_0():isJavaArray(this$static)?getHashCode(this$static):!!this$static && !!this$static.hashCode?this$static.hashCode():getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals_0 = function equals(other){
  return $equals(this, other);
}
;
_.getClass_0 = function getClass_0(){
  return this.___clazz;
}
;
_.hashCode_0 = function hashCode_0(){
  return getHashCode(this);
}
;
_.toString_0 = function toString_0(){
  var number;
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (number = hashCode__I__devirtual$(this) >>> 0 , number.toString(16));
}
;
_.equals = function(other){
  return this.equals_0(other);
}
;
_.hashCode = function(){
  return this.hashCode_0();
}
;
_.toString = function(){
  return this.toString_0();
}
;
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !supportsErrorStack();
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector_1 = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(error){
  $clinit_StackTraceCreator();
  collector_1.collect(error);
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function supportsErrorStack(){
  if (Error.stackTraceLimit > 0) {
    $wnd.Error.stackTraceLimit = Error.stackTraceLimit = 64;
    return true;
  }
  return 'stack' in new Error;
}

var collector_1;
defineClass(138, 1, {});
function StackTraceCreator$CollectorLegacy(){
}

defineClass(85, 138, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(error){
  var seen = {}, name_1;
  var fnStack = [];
  error['fnStack'] = fnStack;
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
defineClass(139, 138, {});
_.collect = function collect_0(error){
}
;
function StackTraceCreator$CollectorModernNoSourceMap(){
}

defineClass(86, 139, {}, StackTraceCreator$CollectorModernNoSourceMap);
function canSet(array, value_0){
  var elementTypeCategory;
  switch (getElementTypeCategory(array)) {
    case 6:
      return instanceOfString(value_0);
    case 7:
      return instanceOfDouble(value_0);
    case 8:
      return instanceOfBoolean(value_0);
    case 3:
      return Array.isArray(value_0) && (elementTypeCategory = getElementTypeCategory(value_0) , !(elementTypeCategory >= 14 && elementTypeCategory <= 16));
    case 11:
      return value_0 != null && isFunction(value_0);
    case 12:
      return value_0 != null && (typeof value_0 === 'object' || typeof value_0 == 'function');
    case 0:
      return canCast(value_0, array.__elementTypeId$);
    case 2:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn);
    case 1:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn) || canCast(value_0, array.__elementTypeId$);
    default:return true;
  }
}

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function getElementTypeCategory(array){
  return array.__elementTypeCategory$ == null?10:array.__elementTypeCategory$;
}

function initUnidimensionalArray(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory != 0, leafClassLiteral, elementTypeCategory, length_0);
  elementTypeCategory != 10 && stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initializeArrayElementsWithDefaults(isLastDimension, arrayClass, elementTypeCategory, length_0){
  var result;
  if (isLastDimension && !!window.ArrayBuffer) {
    result = null;
    ($equals_0(arrayClass.compoundName, 'Byte') || $equals_0(arrayClass.compoundName, 'byte')) && (result = new Int8Array(length_0));
    if (result) {
      return result;
    }
  }
  return initializeArrayElementsWithDefaultsOrig(elementTypeCategory, length_0);
}

function initializeArrayElementsWithDefaultsOrig(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 14:
    case 15:
      initValue = 0;
      break;
    case 16:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function isJavaArray(src_0){
  return Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function setCheck(array, index_0, value_0){
  checkCriticalArrayType(value_0 == null || canSet(array, value_0));
  return array[index_0] = value_0;
}

function stampJavaTypeInfo(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz = arrayClass;
  array.castableTypeMap = castableTypeMap;
  array.typeMarker = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function stampJavaTypeInfo_0(array, referenceType){
  getElementTypeCategory(referenceType) != 10 && stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(referenceType), referenceType.castableTypeMap, referenceType.__elementTypeId$, getElementTypeCategory(referenceType), array);
  return array;
}

function canCast(src_0, dstId){
  if (instanceOfString(src_0)) {
    return !!stringCastMap[dstId];
  }
   else if (src_0.castableTypeMap) {
    return !!src_0.castableTypeMap[dstId];
  }
   else if (instanceOfDouble(src_0)) {
    return !!doubleCastMap[dstId];
  }
   else if (instanceOfBoolean(src_0)) {
    return !!booleanCastMap[dstId];
  }
  return false;
}

function castTo(src_0, dstId){
  checkCriticalType(src_0 == null || canCast(src_0, dstId));
  return src_0;
}

function castToFunction(src_0){
  checkCriticalType(src_0 == null || isFunction(src_0));
  return src_0;
}

function castToJso(src_0){
  checkCriticalType(src_0 == null || isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn));
  return src_0;
}

function castToString(src_0){
  checkCriticalType(src_0 == null || instanceOfString(src_0));
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfBoolean(src_0){
  return typeof src_0 === 'boolean';
}

function instanceOfDouble(src_0){
  return typeof src_0 === 'number';
}

function instanceOfJso(src_0){
  return src_0 != null && isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn);
}

function instanceOfNative(src_0, jsType){
  return src_0 && jsType && src_0 instanceof jsType;
}

function instanceOfString(src_0){
  return typeof src_0 === 'string';
}

function isFunction(src_0){
  return typeof src_0 === 'function';
}

function isJsObjectOrFunction(src_0){
  return typeof src_0 === 'object' || typeof src_0 === 'function';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return Math.max(Math.min(x_0, 2147483647), -2147483648) | 0;
}

var booleanCastMap, doubleCastMap, stringCastMap;
function toJava(e){
  var javaException;
  if (instanceOf(e, 4)) {
    return e;
  }
  javaException = e && e.__java$exception;
  if (!javaException) {
    javaException = new JavaScriptException(e);
    captureStackTrace(javaException);
  }
  return javaException;
}

function toJs(t){
  return t.backingJsObject;
}

function add_1(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a + b;
    if ($intern_0 < result && result < $intern_1) {
      return result;
    }
  }
  return createLongEmul(add_0(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function compare_0(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if (!isNaN(result)) {
      return result;
    }
  }
  return compare(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b);
}

function createLongEmul(big_0){
  var a2;
  a2 = big_0.h;
  if (a2 == 0) {
    return big_0.l + big_0.m * $intern_2;
  }
  if (a2 == $intern_3) {
    return big_0.l + big_0.m * $intern_2 - $intern_1;
  }
  return big_0;
}

function div(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a / b;
    if ($intern_0 < result && result < $intern_1) {
      return result < 0?$wnd.Math.ceil(result):$wnd.Math.floor(result);
    }
  }
  return createLongEmul(divMod(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b, false));
}

function eq(a, b){
  return compare_0(a, b) == 0;
}

function fromDouble_0(value_0){
  if ($intern_0 < value_0 && value_0 < $intern_1) {
    return value_0 < 0?$wnd.Math.ceil(value_0):$wnd.Math.floor(value_0);
  }
  return createLongEmul(fromDouble(value_0));
}

function gt(a, b){
  return compare_0(a, b) > 0;
}

function gte_0(a, b){
  return compare_0(a, b) >= 0;
}

function isSmallLong0(value_0){
  return typeof value_0 === 'number';
}

function lt(a, b){
  return compare_0(a, b) < 0;
}

function mod(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a % b;
    if ($intern_0 < result && result < $intern_1) {
      return result;
    }
  }
  return createLongEmul((divMod(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b, true) , remainder));
}

function mul_0(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a * b;
    if ($intern_0 < result && result < $intern_1) {
      return result;
    }
  }
  return createLongEmul(mul(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function neg_0(a){
  var result;
  if (isSmallLong0(a)) {
    result = 0 - a;
    if (!isNaN(result)) {
      return result;
    }
  }
  return createLongEmul(neg(a));
}

function neq(a, b){
  return compare_0(a, b) != 0;
}

function shru_0(a, n){
  return createLongEmul(shru(isSmallLong0(a)?toBigLong(a):a, n));
}

function sub_1(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if ($intern_0 < result && result < $intern_1) {
      return result;
    }
  }
  return createLongEmul(sub_0(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function toBigLong(longValue){
  var a0, a1, a3, value_0;
  value_0 = longValue;
  a3 = 0;
  if (value_0 < 0) {
    value_0 += $intern_1;
    a3 = $intern_3;
  }
  a1 = round_int(value_0 / $intern_2);
  a0 = round_int(value_0 - a1 * $intern_2);
  return create0(a0, a1, a3);
}

function toInt(a){
  if (isSmallLong0(a)) {
    return a | 0;
  }
  return a.l | a.m << 22;
}

function xor_0(a, b){
  return createLongEmul(xor(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function $isInstance(instance){
  var type_0;
  if (instance == null) {
    return false;
  }
  type_0 = typeof(instance);
  return $equals_0(type_0, 'boolean') || $equals_0(type_0, 'number') || $equals_0(type_0, 'string') || instance.$implements__java_io_Serializable || Array.isArray(instance);
}

function $addSuppressed(this$static, exception){
  checkCriticalNotNull_0(exception);
  checkCriticalArgument(exception != this$static, 'Exception can not suppress itself.');
  if (this$static.disableSuppression) {
    return;
  }
  this$static.suppressedExceptions == null?(this$static.suppressedExceptions = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Throwable_2_classLit, 1), $intern_4, 4, 0, [exception])):(this$static.suppressedExceptions[this$static.suppressedExceptions.length] = exception);
}

function $fillInStackTrace(this$static){
  this$static.writableStackTrace && this$static.backingJsObject !== '__noinit__' && this$static.initializeBackingError();
  return this$static;
}

function $linkBack(this$static, error){
  if (error instanceof Object) {
    try {
      error.__java$exception = this$static;
      if (navigator.userAgent.toLowerCase().indexOf('msie') != -1 && $doc.documentMode < 9) {
        return;
      }
      var throwable = this$static;
      Object.defineProperties(error, {cause:{get:function(){
        var cause = throwable.getCause();
        return cause && cause.getBackingJsObject();
      }
      }, suppressed:{get:function(){
        return throwable.getBackingSuppressed();
      }
      }});
    }
     catch (ignored) {
    }
  }
}

function $setBackingJsObject(this$static, backingJsObject){
  this$static.backingJsObject = backingJsObject;
  $linkBack(this$static, backingJsObject);
}

function $toString(this$static, message){
  var className;
  className = $getName(this$static.___clazz);
  return message == null?className:className + ': ' + message;
}

function fixIE(e){
  if (!('stack' in e)) {
    try {
      throw e;
    }
     catch (ignored) {
    }
  }
  return e;
}

function of_1(e){
  var throwable;
  if (e != null) {
    throwable = e.__java$exception;
    if (throwable) {
      return throwable;
    }
  }
  return instanceOfNative(e, TypeError)?new NullPointerException_0(e):new JsException(e);
}

defineClass(4, 1, $intern_5);
_.createError = function createError(msg){
  return new Error(msg);
}
;
_.getBackingJsObject = function getBackingJsObject(){
  return this.backingJsObject;
}
;
_.getBackingSuppressed = function getBackingSuppressed(){
  var collected;
  return collected = castTo($collect($map(stream((this.suppressedExceptions == null && (this.suppressedExceptions = initUnidimensionalArray(Ljava_lang_Throwable_2_classLit, $intern_4, 4, 0, 0, 1)) , this.suppressedExceptions)), makeLambdaFunction(Throwable$lambda$0$Type.prototype.apply_0, Throwable$lambda$0$Type, [])), of_4(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_4, 16, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))), 19) , collected.toArray_0(initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, collected.size(), 5, 1));
}
;
_.getCause = function getCause(){
  return this.cause_0;
}
;
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.initializeBackingError = function initializeBackingError(){
  $setBackingJsObject(this, fixIE(this.createError($toString(this, this.detailMessage))));
  captureStackTrace(this);
}
;
_.toString_0 = function toString_1(){
  return $toString(this, this.getMessage());
}
;
_.backingJsObject = '__noinit__';
_.disableSuppression = false;
_.writableStackTrace = true;
function Exception(message){
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(27, 4, $intern_5);
function RuntimeException(){
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function RuntimeException_0(message){
  Exception.call(this, message);
}

defineClass(5, 27, $intern_6);
function IndexOutOfBoundsException(message){
  RuntimeException_0.call(this, message);
}

defineClass(30, 5, $intern_6, IndexOutOfBoundsException);
function ArrayIndexOutOfBoundsException(msg){
  IndexOutOfBoundsException.call(this, msg);
}

defineClass(68, 30, $intern_6, ArrayIndexOutOfBoundsException);
function ArrayStoreException(){
  RuntimeException.call(this);
}

defineClass(111, 5, $intern_6, ArrayStoreException);
function $isInstance_3(instance){
  var type_0;
  type_0 = typeof(instance);
  if ($equals_0(type_0, 'boolean') || $equals_0(type_0, 'number') || $equals_0(type_0, 'string')) {
    return true;
  }
  return instance != null && instance.$implements__java_lang_Comparable;
}

function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
}

function $isInstance_0(instance){
  $clinit_Boolean();
  return $equals_0('boolean', typeof(instance));
}

booleanCastMap = {3:1, 20:1};
function $isInstance_1(instance){
  if ($equals_0(typeof(instance), 'string')) {
    return true;
  }
  return instance != null && instance.$implements__java_lang_CharSequence;
}

function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(typeId, enumConstantsFunc){
  var clazz;
  clazz = createClassObject('java.util.stream', 'Collector/Characteristics');
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function createForInterface(packageName, compoundClassName){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  clazz.modifiers = 2;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  return prototypesByTypeId_0[typeId];
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz = clazz;
}

defineClass(48, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString_0 = function toString_4(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
function ClassCastException(){
  RuntimeException_0.call(this, null);
}

defineClass(84, 5, $intern_6, ClassCastException);
function $isInstance_2(instance){
  if (instance == null) {
    return false;
  }
  return instance.$implements__java_lang_Cloneable || Array.isArray(instance);
}

function $isInstance_4(instance){
  return $equals_0('number', typeof(instance)) || instanceOfNative(instance, $wnd.java.lang.Number$impl);
}

defineClass(134, 1, $intern_4);
function $isInstance_5(instance){
  return $equals_0('number', typeof(instance));
}

doubleCastMap = {3:1, 20:1};
defineClass(43, 1, {3:1, 20:1, 43:1});
_.compareTo = function compareTo(other){
  return this.ordinal_0 - other.ordinal_0;
}
;
_.equals = function equals_0(other){
  return this === other;
}
;
_.equals_0 = function(other){
  return this.equals(other);
}
;
_.hashCode = function hashCode_1(){
  return getHashCode(this);
}
;
_.hashCode_0 = function(){
  return this.hashCode();
}
;
_.name = function name_2(){
  return this.name_0 != null?this.name_0:'' + this.ordinal_0;
}
;
_.ordinal = function ordinal(){
  return this.ordinal_0;
}
;
_.toString = function toString_5(){
  return this.name_0 != null?this.name_0:'' + this.ordinal_0;
}
;
_.toString_0 = function(){
  return this.toString();
}
;
_.ordinal_0 = 0;
function IllegalArgumentException(message){
  RuntimeException_0.call(this, message);
}

defineClass(42, 5, $intern_6, IllegalArgumentException);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(){
  RuntimeException_0.call(this, "Stream already terminated, can't be modified or used");
}

defineClass(46, 5, $intern_6, IllegalStateException, IllegalStateException_0);
function compare_1(x_0, y_0){
  return x_0 < y_0?-1:x_0 > y_0?1:0;
}

function numberOfLeadingZeros_0(i){
  var m, n, y_0;
  if (i < 0) {
    return 0;
  }
   else if (i == 0) {
    return 32;
  }
   else {
    y_0 = -(i >> 16);
    m = y_0 >> 16 & 16;
    n = 16 - m;
    i = i >> m;
    y_0 = i - 256;
    m = y_0 >> 16 & 8;
    n += m;
    i <<= m;
    y_0 = i - 4096;
    m = y_0 >> 16 & 4;
    n += m;
    i <<= m;
    y_0 = i - 16384;
    m = y_0 >> 16 & 2;
    n += m;
    i <<= m;
    y_0 = i >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
  }
}

function numberOfTrailingZeros(i){
  var r, rtn;
  if (i == 0) {
    return 32;
  }
   else {
    rtn = 0;
    for (r = 1; (r & i) == 0; r <<= 1) {
      ++rtn;
    }
    return rtn;
  }
}

function JsException(backingJsObject){
  $fillInStackTrace(this);
  this.backingJsObject = backingJsObject;
  $linkBack(this, backingJsObject);
  this.detailMessage = backingJsObject == null?'null':toString_2(backingJsObject);
}

defineClass(26, 5, $intern_6, JsException);
defineClass(188, 1, {});
function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(typeError){
  JsException.call(this, typeError);
}

function NullPointerException_1(){
  RuntimeException_0.call(this, 'Cannot suppress a null exception.');
}

defineClass(33, 26, $intern_6, NullPointerException, NullPointerException_0, NullPointerException_1);
_.createError = function createError_0(msg){
  return new TypeError(msg);
}
;
function $charAt(this$static, index_0){
  checkCriticalStringElementIndex(index_0, this$static.length);
  return this$static.charCodeAt(index_0);
}

function $equals_0(this$static, other){
  return checkCriticalNotNull(this$static) , maskUndefined(this$static) === maskUndefined(other);
}

function $isInstance_6(instance){
  return $equals_0('string', typeof(instance));
}

function $substring(this$static, beginIndex){
  return this$static.substr(beginIndex);
}

function $substring_0(this$static, endIndex){
  return this$static.substr(0, endIndex);
}

function valueOf(x_0){
  return x_0 == null?'null':toString_2(x_0);
}

stringCastMap = {3:1, 49:1, 20:1, 2:1};
function StringIndexOutOfBoundsException(message){
  IndexOutOfBoundsException.call(this, message);
}

defineClass(102, 30, $intern_6, StringIndexOutOfBoundsException);
function $apply(arg0){
  return castTo(arg0, 4).backingJsObject;
}

function Throwable$lambda$0$Type(){
}

defineClass(147, $wnd.Function, $intern_7, Throwable$lambda$0$Type);
_.apply_0 = function apply_1(arg0){
  return $apply(arg0);
}
;
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(8, 5, $intern_6, UnsupportedOperationException, UnsupportedOperationException_0);
function $advanceToFind(this$static, o, remove){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext_0();) {
    e = iter.next_1();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      remove && iter.remove_0();
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkCriticalNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    if (!this$static.contains(e)) {
      return false;
    }
  }
  return true;
}

function $toArray(this$static){
  return this$static.toArray_0(initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, this$static.size(), 5, 1));
}

function $toArray_0(this$static, a){
  var i, it, result, size_0;
  size_0 = this$static.size();
  a.length < size_0 && (a = stampJavaTypeInfo_1(new Array(size_0), a));
  result = a;
  it = this$static.iterator();
  for (i = 0; i < size_0; ++i) {
    setCheck(result, i, it.next_1());
  }
  a.length > size_0 && setCheck(a, size_0, null);
  return a;
}

function $toString_2(this$static){
  var e, e$iterator, joiner;
  joiner = new StringJoiner(', ', '[', ']');
  for (e$iterator = this$static.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    $add_1(joiner, maskUndefined(e) === maskUndefined(this$static)?'(this Collection)':e == null?'null':toString_2(e));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}

defineClass(140, 1, {9:1});
_.add = function add_2(o){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this collection'));
}
;
_.addAll = function addAll(c){
  var changed, e, e$iterator;
  checkCriticalNotNull(c);
  changed = false;
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    changed = changed | this.add(e);
  }
  return changed;
}
;
_.clear = function clear_0(){
  var iter;
  for (iter = this.iterator(); iter.hasNext_0();) {
    iter.next_1();
    iter.remove_0();
  }
}
;
_.contains = function contains(o){
  return $advanceToFind(this, o, false);
}
;
_.containsAll = function containsAll(c){
  return $containsAll(this, c);
}
;
_.isEmpty = function isEmpty(){
  return this.size() == 0;
}
;
_.remove = function remove_0(o){
  return $advanceToFind(this, o, true);
}
;
_.removeAll = function removeAll(c){
  var changed, iter, o;
  checkCriticalNotNull(c);
  changed = false;
  for (iter = this.iterator(); iter.hasNext_0();) {
    o = iter.next_1();
    if (c.contains(o)) {
      iter.remove_0();
      changed = true;
    }
  }
  return changed;
}
;
_.retainAll = function retainAll(c){
  var changed, iter, o;
  checkCriticalNotNull(c);
  changed = false;
  for (iter = this.iterator(); iter.hasNext_0();) {
    o = iter.next_1();
    if (!c.contains(o)) {
      iter.remove_0();
      changed = true;
    }
  }
  return changed;
}
;
_.toArray = function toArray(){
  return $toArray(this);
}
;
_.toArray_0 = function toArray_0(a){
  return $toArray_0(this, a);
}
;
_.toString_0 = function toString_10(){
  return $toString_2(this);
}
;
function $indexOf(this$static, toFind){
  var i, n;
  for (i = 0 , n = this$static.size(); i < n; ++i) {
    if (equals_11(toFind, this$static.getAtIndex(i))) {
      return i;
    }
  }
  return -1;
}

defineClass(141, 140, {9:1, 19:1});
_.addAtIndex = function add_3(index_0, element){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this list'));
}
;
_.add = function add_4(obj){
  this.addAtIndex(this.size(), obj);
  return true;
}
;
_.addAllAtIndex = function addAll_0(index_0, c){
  var changed, e, e$iterator;
  checkCriticalNotNull(c);
  changed = false;
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    this.addAtIndex(index_0++, e);
    changed = true;
  }
  return changed;
}
;
_.clear = function clear_4(){
  this.removeRange(0, this.size());
}
;
_.equals_0 = function equals_7(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 19)) {
    return false;
  }
  other = castTo(o, 19);
  if (this.size() != other.size()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext_0();) {
    elem = elem$iterator.next_1();
    elemOther = iterOther.next_1();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode_0 = function hashCode_8(){
  return hashCode_13(this);
}
;
_.indexOf = function indexOf(toFind){
  return $indexOf(this, toFind);
}
;
_.iterator = function iterator_1(){
  return new AbstractList$IteratorImpl(this);
}
;
_.lastIndexOf = function lastIndexOf(toFind){
  var i;
  for (i = this.size() - 1; i > -1; --i) {
    if (equals_11(toFind, this.getAtIndex(i))) {
      return i;
    }
  }
  return -1;
}
;
_.removeAtIndex = function remove_5(index_0){
  throw toJs(new UnsupportedOperationException_0('Remove not supported on this list'));
}
;
_.removeRange = function removeRange(fromIndex, endIndex){
  var i, iter;
  iter = new AbstractList$ListIteratorImpl(this, fromIndex);
  for (i = fromIndex; i < endIndex; ++i) {
    checkCriticalElement(iter.i < iter.this$01.size());
    iter.this$01.getAtIndex(iter.last = iter.i++);
    $remove_1(iter);
  }
}
;
_.setAtIndex = function set_1(index_0, o){
  throw toJs(new UnsupportedOperationException_0('Set not supported on this list'));
}
;
_.subList = function subList(fromIndex, toIndex){
  return new AbstractList$SubList(this, fromIndex, toIndex);
}
;
function $forEachRemaining(this$static, consumer){
  checkCriticalNotNull(consumer);
  while (this$static.hasNext_0()) {
    $accept_0(consumer, this$static.next_1());
  }
}

function $remove_1(this$static){
  checkCriticalState(this$static.last != -1);
  this$static.this$01.removeAtIndex(this$static.last);
  this$static.i = this$static.last;
  this$static.last = -1;
}

function AbstractList$IteratorImpl(this$0){
  this.this$01 = this$0;
}

defineClass(55, 1, {}, AbstractList$IteratorImpl);
_.forEachRemaining = function forEachRemaining_0(consumer){
  $forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_0(){
  return this.i < this.this$01.size();
}
;
_.next_1 = function next_0(){
  return checkCriticalElement(this.i < this.this$01.size()) , this.this$01.getAtIndex(this.last = this.i++);
}
;
_.remove_0 = function remove_6(){
  $remove_1(this);
}
;
_.i = 0;
_.last = -1;
function AbstractList$ListIteratorImpl(this$0, start_0){
  AbstractList$IteratorImpl.call(this, this$0);
  checkCriticalPositionIndex(start_0, this$0.size());
  this.i = start_0;
}

defineClass(87, 55, {}, AbstractList$ListIteratorImpl);
_.remove_0 = function remove_7(){
  $remove_1(this);
}
;
function AbstractList$SubList(wrapped, fromIndex, toIndex){
  checkCriticalPositionIndexes(fromIndex, toIndex, wrapped.size());
  this.wrapped = wrapped;
  this.fromIndex = fromIndex;
  this.size_0 = toIndex - fromIndex;
}

defineClass(88, 141, {9:1, 19:1}, AbstractList$SubList);
_.addAtIndex = function add_5(index_0, element){
  checkCriticalPositionIndex(index_0, this.size_0);
  this.wrapped.addAtIndex(this.fromIndex + index_0, element);
  ++this.size_0;
}
;
_.getAtIndex = function get_3(index_0){
  checkCriticalElementIndex(index_0, this.size_0);
  return this.wrapped.getAtIndex(this.fromIndex + index_0);
}
;
_.removeAtIndex = function remove_8(index_0){
  var result;
  checkCriticalElementIndex(index_0, this.size_0);
  result = this.wrapped.removeAtIndex(this.fromIndex + index_0);
  --this.size_0;
  return result;
}
;
_.setAtIndex = function set_2(index_0, element){
  checkCriticalElementIndex(index_0, this.size_0);
  return this.wrapped.setAtIndex(this.fromIndex + index_0, element);
}
;
_.size = function size_4(){
  return this.size_0;
}
;
_.fromIndex = 0;
_.size_0 = 0;
function $add(this$static, o){
  this$static.array[this$static.array.length] = o;
  return true;
}

function $forEach(this$static, consumer){
  var e, e$array, e$index, e$max;
  checkCriticalNotNull(consumer);
  for (e$array = this$static.array , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
    e = e$array[e$index];
    lambda$0(consumer.throwables_0, e);
  }
}

function $get(this$static, index_0){
  checkCriticalElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_0(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_11(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $lastIndexOf(this$static, o, index_0){
  for (; index_0 >= 0; --index_0) {
    if (equals_11(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $remove_2(this$static, index_0){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  removeFrom(this$static.array, index_0, 1);
  return previous;
}

function ArrayList(){
  this.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 5, 1);
}

defineClass(11, 141, $intern_8, ArrayList);
_.addAtIndex = function add_6(index_0, o){
  checkCriticalPositionIndex(index_0, this.array.length);
  insertTo(this.array, index_0, o);
}
;
_.add = function add_7(o){
  return $add(this, o);
}
;
_.addAllAtIndex = function addAll_1(index_0, c){
  var cArray, len;
  checkCriticalPositionIndex(index_0, this.array.length);
  cArray = c.toArray();
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  insertTo_0(this.array, index_0, cArray);
  return true;
}
;
_.addAll = function addAll_2(c){
  var cArray, len;
  cArray = c.toArray();
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  insertTo_0(this.array, this.array.length, cArray);
  return true;
}
;
_.clear = function clear_7(){
  this.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 5, 1);
}
;
_.contains = function contains_3(o){
  return $indexOf_0(this, o, 0) != -1;
}
;
_.getAtIndex = function get_4(index_0){
  return $get(this, index_0);
}
;
_.indexOf = function indexOf_0(o){
  return $indexOf_0(this, o, 0);
}
;
_.isEmpty = function isEmpty_1(){
  return this.array.length == 0;
}
;
_.iterator = function iterator_4(){
  return new ArrayList$1(this);
}
;
_.lastIndexOf = function lastIndexOf_0(o){
  return $lastIndexOf(this, o, this.array.length - 1);
}
;
_.removeAtIndex = function remove_12(index_0){
  return $remove_2(this, index_0);
}
;
_.remove = function remove_13(o){
  var i;
  i = $indexOf_0(this, o, 0);
  if (i == -1) {
    return false;
  }
  checkCriticalElementIndex(i, this.array.length);
  removeFrom(this.array, i, 1);
  return true;
}
;
_.removeRange = function removeRange_0(fromIndex, endIndex){
  var count;
  checkCriticalPositionIndexes(fromIndex, endIndex, this.array.length);
  count = endIndex - fromIndex;
  removeFrom(this.array, fromIndex, count);
}
;
_.setAtIndex = function set_3(index_0, o){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this.array.length) , this.array[index_0]);
  this.array[index_0] = o;
  return previous;
}
;
_.size = function size_7(){
  return this.array.length;
}
;
_.toArray = function toArray_1(){
  return clone(this.array, this.array.length);
}
;
_.toArray_0 = function toArray_2(out){
  var i, size_0;
  size_0 = this.array.length;
  out.length < size_0 && (out = stampJavaTypeInfo_1(new Array(size_0), out));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}
;
function ArrayList$1(this$0){
  this.this$01 = this$0;
}

defineClass(100, 1, {}, ArrayList$1);
_.forEachRemaining = function forEachRemaining_3(consumer){
  $forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_3(){
  return this.i < this.this$01.array.length;
}
;
_.next_1 = function next_3(){
  checkCriticalElement(this.i < this.this$01.array.length);
  this.last = this.i++;
  return this.this$01.array[this.last];
}
;
_.remove_0 = function remove_14(){
  checkCriticalState(this.last != -1);
  $remove_2(this.this$01, this.i = this.last);
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
function hashCode_11(a){
  var e, e$array, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$array = a , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
    e = e$array[e$index];
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function spliterator_0(array, endExclusive){
  return checkCriticalArrayBounds(endExclusive, array.length) , new Spliterators$ArraySpliterator(array, endExclusive);
}

function stream(array){
  return new StreamImpl(null, spliterator_0(array, array.length));
}

function stream_0(array, endExclusive){
  return new StreamImpl(null, (checkCriticalArrayBounds(endExclusive, array.length) , new Spliterators$ArraySpliterator(array, endExclusive)));
}

function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
}

function hashCode_12(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function hashCode_13(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

var EMPTY_LIST;
function Collections$EmptyList(){
}

defineClass(92, 141, $intern_8, Collections$EmptyList);
_.contains = function contains_5(object){
  return false;
}
;
_.getAtIndex = function get_6(location_0){
  checkCriticalElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_5(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_0;
}
;
_.size = function size_9(){
  return 0;
}
;
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_0 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(93, 1, {}, Collections$EmptyListIterator);
_.forEachRemaining = function forEachRemaining_4(consumer){
  $forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_4(){
  return false;
}
;
_.next_1 = function next_4(){
  throw toJs(new NoSuchElementException);
}
;
_.remove_0 = function remove_15(){
  throw toJs(new IllegalStateException);
}
;
var INSTANCE_0;
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(57, 5, $intern_6, NoSuchElementException);
function equals_11(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_15(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function requireNonNull(obj){
  if (!obj) {
    throw toJs(new NullPointerException);
  }
  return obj;
}

function $forEachRemaining_0(this$static, consumer){
  while (this$static.tryAdvance(consumer))
  ;
}

function checkCriticalArrayBounds(end, length_0){
  if (0 > end || end > length_0) {
    throw toJs(new ArrayIndexOutOfBoundsException('fromIndex: 0, toIndex: ' + end + ', length: ' + length_0));
  }
}

defineClass(69, 1, {});
_.forEachRemaining = function forEachRemaining_8(consumer){
  $forEachRemaining_0(this, consumer);
}
;
_.characteristics_0 = function characteristics_0(){
  return this.characteristics;
}
;
_.estimateSize_0 = function estimateSize(){
  return this.sizeEstimate;
}
;
_.characteristics = 0;
_.sizeEstimate = 0;
function Spliterators$AbstractSpliterator(size_0, characteristics){
  this.sizeEstimate = size_0;
  this.characteristics = (characteristics & 64) != 0?characteristics | 16384:characteristics;
}

defineClass(50, 69, {});
function $forEachRemaining_1(this$static, consumer){
  checkCriticalNotNull(consumer);
  while (this$static.index_0 < this$static.limit) {
    $consume(this$static, consumer, this$static.index_0++);
  }
}

function $tryAdvance(this$static, consumer){
  checkCriticalNotNull(consumer);
  if (this$static.index_0 < this$static.limit) {
    $consume(this$static, consumer, this$static.index_0++);
    return true;
  }
  return false;
}

defineClass(70, 1, {});
_.forEachRemaining = function forEachRemaining_9(consumer){
  $forEachRemaining_0(this, consumer);
}
;
_.characteristics_0 = function characteristics_1(){
  return this.characteristics;
}
;
_.estimateSize_0 = function estimateSize_0(){
  return this.limit - this.index_0;
}
;
_.characteristics = 0;
_.index_0 = 0;
_.limit = 0;
function $consume(this$static, consumer, index_0){
  consumer.accept(this$static.array[index_0]);
}

function Spliterators$ArraySpliterator(array, limit){
  this.index_0 = 0;
  this.limit = limit;
  this.characteristics = 17488;
  this.array = array;
}

defineClass(51, 70, {}, Spliterators$ArraySpliterator);
_.forEachRemaining = function forEachRemaining_10(consumer){
  $forEachRemaining_1(this, consumer);
}
;
_.tryAdvance = function tryAdvance(consumer){
  return $tryAdvance(this, consumer);
}
;
function $lambda$0(this$static, after_1, t_1){
  this$static.accept(t_1);
  after_1.accept(t_1);
}

function Consumer$lambda$0$Type($$outer_0, after_1){
  this.$$outer_0 = $$outer_0;
  this.after_1 = after_1;
}

defineClass(14, 1, $intern_9, Consumer$lambda$0$Type);
_.accept = function accept_1(t){
  $lambda$0(this.$$outer_0, this.after_1, t);
}
;
_.andThen = function andThen_1(after){
  return requireNonNull(after) , new Consumer$lambda$0$Type(this, after);
}
;
function Function$lambda$0$Type(){
}

defineClass(148, $wnd.Function, $intern_7, Function$lambda$0$Type);
_.apply_0 = function apply_4(t){
  return t;
}
;
function of_3(supplier, accumulator, combiner, finisher, characteristics){
  checkCriticalNotNull(supplier);
  checkCriticalNotNull(accumulator);
  checkCriticalNotNull(combiner);
  checkCriticalNotNull(finisher);
  checkCriticalNotNull(characteristics);
  return new CollectorImpl(supplier, accumulator, finisher);
}

function of_4(supplier, accumulator, combiner, characteristics){
  checkCriticalNotNull(supplier);
  checkCriticalNotNull(accumulator);
  checkCriticalNotNull(combiner);
  checkCriticalNotNull(characteristics);
  return new CollectorImpl(supplier, accumulator, makeLambdaFunction(Function$lambda$0$Type.prototype.apply_0, Function$lambda$0$Type, []));
}

function $clinit_Collector$Characteristics(){
  $clinit_Collector$Characteristics = emptyMethod;
  CONCURRENT = new Collector$Characteristics('CONCURRENT', 0);
  IDENTITY_FINISH = new Collector$Characteristics('IDENTITY_FINISH', 1);
  UNORDERED = new Collector$Characteristics('UNORDERED', 2);
}

function Collector$Characteristics(enum$name, enum$ordinal){
  this.name_0 = enum$name;
  this.ordinal_0 = enum$ordinal;
}

function values_1(){
  $clinit_Collector$Characteristics();
  return stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_4, 16, 0, [CONCURRENT, IDENTITY_FINISH, UNORDERED]);
}

defineClass(16, 43, {3:1, 20:1, 43:1, 16:1}, Collector$Characteristics);
var CONCURRENT, IDENTITY_FINISH, UNORDERED;
function CollectorImpl(supplier, accumulator, finisher){
  this.supplier = supplier;
  this.accumulator = accumulator;
  $clinit_Collections();
  this.finisher = finisher;
}

defineClass(58, 1, {}, CollectorImpl);
function Collectors$20methodref$add$Type(){
}

defineClass(66, 1, {}, Collectors$20methodref$add$Type);
_.accept_0 = function accept_2(arg0, arg1){
  castTo(arg0, 9).add(arg1);
}
;
function Collectors$21methodref$ctor$Type(){
}

defineClass(65, 1, {}, Collectors$21methodref$ctor$Type);
_.get_0 = function get_8(){
  return new ArrayList;
}
;
function Collectors$lambda$42$Type(){
}

defineClass(67, 1, {}, Collectors$lambda$42$Type);
function $close(this$static){
  if (!this$static.root) {
    this$static.terminated = true;
    $runClosers(this$static);
  }
   else {
    $close(this$static.root);
  }
}

function $onClose(this$static, closeHandler){
  !this$static.root?$add(this$static.onClose, closeHandler):$onClose(this$static.root, closeHandler);
  return this$static;
}

function $runClosers(this$static){
  var e, i, size_0, suppressed, throwables;
  throwables = new ArrayList;
  $forEach(this$static.onClose, new TerminatableStream$lambda$0$Type(throwables));
  this$static.onClose.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 5, 1);
  if (throwables.array.length != 0) {
    e = (checkCriticalElementIndex(0, throwables.array.length) , castTo(throwables.array[0], 4));
    for (i = 1 , size_0 = throwables.array.length; i < size_0; ++i) {
      suppressed = (checkCriticalElementIndex(i, throwables.array.length) , castTo(throwables.array[i], 4));
      suppressed != e && $addSuppressed(e, suppressed);
    }
    if (instanceOf(e, 5)) {
      throw toJs(castTo(e, 5));
    }
    if (instanceOf(e, 15)) {
      throw toJs(castTo(e, 15));
    }
  }
}

function $terminate(this$static){
  if (!this$static.root) {
    $throwIfTerminated(this$static);
    this$static.terminated = true;
  }
   else {
    $terminate(this$static.root);
  }
}

function $throwIfTerminated(this$static){
  if (this$static.root) {
    $throwIfTerminated(this$static.root);
  }
   else if (this$static.terminated) {
    throw toJs(new IllegalStateException_0);
  }
}

function TerminatableStream(previous){
  if (!previous) {
    this.root = null;
    this.onClose = new ArrayList;
  }
   else {
    this.root = previous;
    this.onClose = null;
  }
}

function lambda$0(throwables_0, runnable_1){
  var e;
  try {
    runnable_1.run();
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 4)) {
      e = $e0;
      throwables_0.array[throwables_0.array.length] = e;
    }
     else 
      throw toJs($e0);
  }
}

defineClass(103, 1, {});
_.terminated = false;
function concat(a, b){
  var result, spliterator, spliteratorOfStreams;
  spliteratorOfStreams = new Spliterators$IteratorSpliterator(new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Stream_2_classLit, 1), $intern_4, 122, 0, [a, b])), 16);
  spliterator = new Stream$2(spliteratorOfStreams);
  result = new StreamImpl(null, spliterator);
  return $onClose($onClose(result, new Stream$0methodref$close$Type(a)), new Stream$1methodref$close$Type(b));
}

function $collect(this$static, collector){
  var lastArg;
  return collector.finisher.call(null, $reduce(this$static, collector.supplier.get_0(), (lastArg = new StreamImpl$lambda$4$Type(collector) , lastArg)));
}

function $map(this$static, mapper){
  $throwIfTerminated(this$static);
  return new StreamImpl(this$static, new StreamImpl$MapToObjSpliterator(mapper, this$static.spliterator));
}

function $reduce(this$static, identity, accumulator){
  var consumer;
  $terminate(this$static);
  consumer = new StreamImpl$ValueConsumer;
  consumer.value_0 = identity;
  this$static.spliterator.forEachRemaining(new StreamImpl$lambda$5$Type(consumer, accumulator));
  return consumer.value_0;
}

function StreamImpl(prev, spliterator){
  TerminatableStream.call(this, prev);
  this.spliterator = spliterator;
}

function lambda$4(collector_0, a_1, t_2){
  collector_0.accumulator.accept_0(a_1, t_2);
  return a_1;
}

function lambda$5(consumer_0, accumulator_1, item_2){
  $accept(consumer_0, $apply_0(accumulator_1, consumer_0.value_0, item_2));
}

defineClass(21, 103, {38:1, 149:1, 122:1}, StreamImpl);
function $lambda$0_1(this$static, action_1, u_1){
  action_1.accept($apply(u_1));
}

function StreamImpl$MapToObjSpliterator(map_0, original){
  Spliterators$AbstractSpliterator.call(this, original.estimateSize_0(), original.characteristics_0() & -6);
  checkCriticalNotNull(map_0);
  this.map_0 = map_0;
  this.original = original;
}

defineClass(104, 50, {}, StreamImpl$MapToObjSpliterator);
_.tryAdvance = function tryAdvance_2(action){
  return this.original.tryAdvance(new StreamImpl$MapToObjSpliterator$lambda$0$Type(this, action));
}
;
function StreamImpl$MapToObjSpliterator$lambda$0$Type($$outer_0, action_1){
  this.$$outer_0 = $$outer_0;
  this.action_1 = action_1;
}

defineClass(106, 1, $intern_9, StreamImpl$MapToObjSpliterator$lambda$0$Type);
_.accept = function accept_6(arg0){
  $lambda$0_1(this.$$outer_0, this.action_1, arg0);
}
;
_.andThen = function andThen_3(after){
  return requireNonNull(after) , new Consumer$lambda$0$Type(this, after);
}
;
function $accept(this$static, value_0){
  this$static.value_0 = value_0;
}

function StreamImpl$ValueConsumer(){
}

defineClass(105, 1, $intern_9, StreamImpl$ValueConsumer);
_.andThen = function andThen_4(after){
  return requireNonNull(after) , new Consumer$lambda$0$Type(this, after);
}
;
_.accept = function accept_7(value_0){
  $accept(this, value_0);
}
;
function $apply_0(this$static, arg0, arg1){
  return lambda$4(this$static.collector_0, arg0, arg1);
}

function StreamImpl$lambda$4$Type(collector_0){
  this.collector_0 = collector_0;
}

defineClass(107, 1, {}, StreamImpl$lambda$4$Type);
function $accept_0(this$static, arg0){
  lambda$5(this$static.consumer_0, this$static.accumulator_1, arg0);
}

function StreamImpl$lambda$5$Type(consumer_0, accumulator_1){
  this.consumer_0 = consumer_0;
  this.accumulator_1 = accumulator_1;
}

defineClass(108, 1, $intern_9, StreamImpl$lambda$5$Type);
_.accept = function accept_8(arg0){
  $accept_0(this, arg0);
}
;
_.andThen = function andThen_5(after){
  return requireNonNull(after) , new Consumer$lambda$0$Type(this, after);
}
;
function clone(array, toIndex){
  var result;
  result = array.slice(0, toIndex);
  return stampJavaTypeInfo_0(result, array);
}

function copy(src_0, srcOfs, dest, destOfs, len){
  var batchEnd, batchStart, destArray, end, spliceArgs;
  if (src_0 === dest) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  destArray = dest;
  for (batchStart = srcOfs , end = srcOfs + len; batchStart < end;) {
    batchEnd = $wnd.Math.min(batchStart + 10000, end);
    len = batchEnd - batchStart;
    spliceArgs = src_0.slice(batchStart, batchEnd);
    spliceArgs.splice(0, 0, destOfs, 0);
    Array.prototype.splice.apply(destArray, spliceArgs);
    batchStart = batchEnd;
    destOfs += len;
  }
}

function insertTo(array, index_0, value_0){
  array.splice(index_0, 0, value_0);
}

function insertTo_0(array, index_0, values){
  copy(values, 0, array, index_0, values.length);
}

function removeFrom(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

defineClass(190, 1, {});
function stampJavaTypeInfo_1(array, referenceType){
  return stampJavaTypeInfo_0(array, referenceType);
}

function checkCriticalArgument(expression, errorMessage){
  if (!expression) {
    throw toJs(new IllegalArgumentException(errorMessage));
  }
}

function checkCriticalArithmetic(expression){
  if (!expression) {
    throw toJs(new ArithmeticException);
  }
}

function checkCriticalArrayType(expression){
  if (!expression) {
    throw toJs(new ArrayStoreException);
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw toJs(new NoSuchElementException);
  }
}

function checkCriticalElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new IndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalNotNull(reference){
  if (reference == null) {
    throw toJs(new NullPointerException);
  }
  return reference;
}

function checkCriticalNotNull_0(reference){
  if (!reference) {
    throw toJs(new NullPointerException_1);
  }
}

function checkCriticalPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw toJs(new IndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalPositionIndexes(start_0, end, size_0){
  if (start_0 < 0 || end > size_0) {
    throw toJs(new IndexOutOfBoundsException('fromIndex: ' + start_0 + ', toIndex: ' + end + ', size: ' + size_0));
  }
  if (start_0 > end) {
    throw toJs(new IllegalArgumentException('fromIndex: ' + start_0 + ' > toIndex: ' + end));
  }
}

function checkCriticalState(expression){
  if (!expression) {
    throw toJs(new IllegalStateException);
  }
}

function checkCriticalStringElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new StringIndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalType(expression){
  if (!expression) {
    throw toJs(new ClassCastException);
  }
}

defineClass(186, 1, {});
function getHashCode(o){
  return o.$H || (o.$H = ++nextHashId);
}

var nextHashId = 0;
function $clinit_StringHashCache(){
  $clinit_StringHashCache = emptyMethod;
  back_0 = new Object_0;
  front = new Object_0;
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = (checkCriticalStringElementIndex(i + 3, str.length) , str.charCodeAt(i + 3) + (checkCriticalStringElementIndex(i + 2, str.length) , 31 * (str.charCodeAt(i + 2) + (checkCriticalStringElementIndex(i + 1, str.length) , 31 * (str.charCodeAt(i + 1) + (checkCriticalStringElementIndex(i, str.length) , 31 * (str.charCodeAt(i) + 31 * hashCode)))))));
    hashCode = hashCode | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  hashCode = hashCode | 0;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_StringHashCache();
  var hashCode, key, result;
  key = ':' + str;
  result = front[key];
  if (result != null) {
    return round_int((checkCriticalNotNull(result) , result));
  }
  result = back_0[key];
  hashCode = result == null?compute(str):round_int((checkCriticalNotNull(result) , result));
  increment();
  front[key] = hashCode;
  return hashCode;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = new Object_0;
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1);
var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 138);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 85);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 139);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 86);
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 4);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 27);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 5);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 30);
var Ljava_lang_ArrayIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'ArrayIndexOutOfBoundsException', 68);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 111);
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 124);
var Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 48);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 84);
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 134);
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 135);
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 43);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 42);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 46);
var Ljava_lang_JsException_2_classLit = createForClass('java.lang', 'JsException', 26);
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 33);
var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'StringIndexOutOfBoundsException', 102);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 8);
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 140);
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 141);
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 55);
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 87);
var Ljava_util_AbstractList$SubList_2_classLit = createForClass('java.util', 'AbstractList/SubList', 88);
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 11);
var Ljava_util_ArrayList$1_2_classLit = createForClass('java.util', 'ArrayList/1', 100);
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 92);
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 93);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 57);
var Ljava_util_Spliterators$BaseSpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseSpliterator', 69);
var Ljava_util_Spliterators$AbstractSpliterator_2_classLit = createForClass('java.util', 'Spliterators/AbstractSpliterator', 50);
var Ljava_util_Spliterators$BaseArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseArraySpliterator', 70);
var Ljava_util_Spliterators$ArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/ArraySpliterator', 51);
var Ljava_util_function_Consumer$lambda$0$Type_2_classLit = createForClass('java.util.function', 'Consumer/lambda$0$Type', 14);
var Ljava_util_stream_Collector$Characteristics_2_classLit = createForEnum(16, values_1);
var Ljava_util_stream_CollectorImpl_2_classLit = createForClass('java.util.stream', 'CollectorImpl', 58);
var Ljava_util_stream_Collectors$20methodref$add$Type_2_classLit = createForClass('java.util.stream', 'Collectors/20methodref$add$Type', 66);
var Ljava_util_stream_Collectors$21methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'Collectors/21methodref$ctor$Type', 65);
var Ljava_util_stream_Collectors$lambda$42$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$42$Type', 67);
var Ljava_util_stream_TerminatableStream_2_classLit = createForClass('java.util.stream', 'TerminatableStream', 103);
var Ljava_util_stream_Stream_2_classLit = createForInterface('java.util.stream', 'Stream');
var Ljava_util_stream_StreamImpl_2_classLit = createForClass('java.util.stream', 'StreamImpl', 21);
var Ljava_util_stream_StreamImpl$MapToObjSpliterator_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToObjSpliterator', 104);
var Ljava_util_stream_StreamImpl$MapToObjSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToObjSpliterator/lambda$0$Type', 106);
var Ljava_util_stream_StreamImpl$ValueConsumer_2_classLit = createForClass('java.util.stream', 'StreamImpl/ValueConsumer', 105);
var Ljava_util_stream_StreamImpl$lambda$4$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/lambda$4$Type', 107);
var Ljava_util_stream_StreamImpl$lambda$5$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/lambda$5$Type', 108);
defineClass(120, 1, $intern_10);
var Ljava_io_OutputStream_2_classLit = createForClass('java.io', 'OutputStream', 120);
defineClass(119, 120, $intern_10);
var Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io', 'FilterOutputStream', 119);
function PrintStream(){
}

defineClass(53, 119, $intern_10, PrintStream);
var Ljava_io_PrintStream_2_classLit = createForClass('java.io', 'PrintStream', 53);
function ConsolePrintStream(){
  new StringBuilder;
}

defineClass(54, 53, $intern_10, ConsolePrintStream);
var Lapp_client_ConsolePrintStream_2_classLit = createForClass('app.client', 'ConsolePrintStream', 54);
function asList(array){
  return new Arrays$ArrayList(array);
}

function asSet(array){
  return castTo($collect(new StreamImpl(null, new Spliterators$IteratorSpliterator(new Arrays$ArrayList(array), 16)), of_3(new Collectors$23methodref$ctor$Type, new Collectors$24methodref$add$Type, new Collectors$lambda$50$Type, makeLambdaFunction(Collectors$lambda$51$Type.prototype.apply_0, Collectors$lambda$51$Type, []), stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_4, 16, 0, [($clinit_Collector$Characteristics() , UNORDERED), IDENTITY_FINISH]))), 22);
}

function emptyList(){
  return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
}

function emptyOptional(){
  return $clinit_Optional() , $clinit_Optional() , EMPTY;
}

function now_1(){
  var now_0, offset;
  return $clinit_LocalDateTime() , $clinit_LocalDateTime() , now_0 = ofEpochMilli(($clinit_System() , fromDouble_0(Date.now()))) , offset = ($clinit_ZoneOffset() , UTC_0) , ofEpochSecond(now_0.seconds, now_0.nanos, offset);
}

function optionalOf(of){
  return $clinit_Optional() , new Optional(checkCriticalNotNull(of));
}

defineClass(121, 1, {});
var Lapp_client_JsUtil_2_classLit = createForClass('app.client', 'JsUtil', 121);
function incomplete(){
  return new CompletableFuture;
}

function of_0(val){
  return new CompletableFuture_0(val);
}

defineClass(123, 1, {});
var Lapp_shared_util_Futures_2_classLit = createForClass('app.shared.util', 'Futures', 123);
defineClass(101, 26, $intern_6);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 101);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(castToJso(exception)):instanceOfString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(castToJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  JsException.call(this, e);
  this.description = '';
  this.e = e;
  this.description = '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(29, 101, {29:1, 3:1, 5:1, 4:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  $ensureInit(this);
  return this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 29);
function now_2(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

defineClass(118, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 118);
function $clinit_Impl(){
  $clinit_Impl = emptyMethod;
  !!($clinit_StackTraceCreator() , collector_1);
}

function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_2();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  $clinit_Impl();
  return function(){
    return entry0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry;
  initialEntry = enter();
  try {
    return apply_0(jsFunction, thisObj, args);
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function reportToBrowser(e){
  $clinit_Impl();
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function SchedulerImpl(){
}

function push_0(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].$_nullMethod() && (rescheduled = push_0(rescheduled, t)):t[0].$_nullMethod();
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 4)) {
        e = $e0;
        $clinit_Impl();
        reportToBrowser(instanceOf(e, 29)?castTo(e, 29).getThrown():e);
      }
       else 
        throw toJs($e0);
    }
  }
  return rescheduled;
}

defineClass(112, 118, {}, SchedulerImpl);
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 112);
function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_11;
  a1 = value_0 >> 22 & $intern_11;
  a2 = value_0 < 0?$intern_3:0;
  return create0(a0, a1, a2);
}

function create_0(a){
  return create0(a.l, a.m, a.h);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function divMod(a, b, computeRemainder){
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw toJs(new ArithmeticException_0);
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create0(0, 0, 0);
  }
  if (b.h == $intern_12 && b.m == 0 && b.l == 0) {
    return divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (b.h >> 19 != 0) {
    b = neg(b);
    negative = !negative;
  }
  bpower = powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (a.h == $intern_12 && a.m == 0 && a.l == 0) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = create_0(($clinit_BigLongLib$Const() , MAX_VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = shr(a, bpower);
      negative && negate(c);
      computeRemainder && (remainder = create0(0, 0, 0));
      return c;
    }
  }
   else if (a.h >> 19 != 0) {
    aIsNegative = true;
    a = neg(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (compare(a, b) < 0) {
    computeRemainder && (aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h)));
    return create0(0, 0, 0);
  }
  return divModHelper(aIsCopy?a:create0(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

function divModByMinValue(a, computeRemainder){
  if (a.h == $intern_12 && a.m == 0 && a.l == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create_0(($clinit_BigLongLib$Const() , ONE));
  }
  computeRemainder && (remainder = create0(a.l, a.m, a.h));
  return create0(0, 0, 0);
}

function divModByShift(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = shr(a, bpower);
  negative && negate(c);
  if (computeRemainder) {
    a = maskRight(a, bpower);
    aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h));
  }
  return c;
}

function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift_0, a1, a2, a0;
  shift_0 = numberOfLeadingZeros(b) - numberOfLeadingZeros(a);
  bshift = shl(b, shift_0);
  quotient = create0(0, 0, 0);
  while (shift_0 >= 0) {
    gte = trialSubtract(a, bshift);
    if (gte) {
      shift_0 < 22?(quotient.l |= 1 << shift_0 , undefined):shift_0 < 44?(quotient.m |= 1 << shift_0 - 22 , undefined):(quotient.h |= 1 << shift_0 - 44 , undefined);
      if (a.l == 0 && a.m == 0 && a.h == 0) {
        break;
      }
    }
    a1 = bshift.m;
    a2 = bshift.h;
    a0 = bshift.l;
    bshift.h = a2 >>> 1;
    bshift.m = a1 >>> 1 | (a2 & 1) << 21;
    bshift.l = a0 >>> 1 | (a1 & 1) << 21;
    --shift_0;
  }
  negative && negate(quotient);
  if (computeRemainder) {
    if (aIsNegative) {
      remainder = neg(a);
      aIsMinValue && (remainder = sub_0(remainder, ($clinit_BigLongLib$Const() , ONE)));
    }
     else {
      remainder = create0(a.l, a.m, a.h);
    }
  }
  return quotient;
}

function maskRight(a, bits){
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = a.l & (1 << bits) - 1;
    b1 = b2 = 0;
  }
   else if (bits <= 44) {
    b0 = a.l;
    b1 = a.m & (1 << bits - 22) - 1;
    b2 = 0;
  }
   else {
    b0 = a.l;
    b1 = a.m;
    b2 = a.h & (1 << bits - 44) - 1;
  }
  return create0(b0, b1, b2);
}

function negate(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_11;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_11;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_3;
  a.l = neg0;
  a.m = neg1;
  a.h = neg2;
}

function numberOfLeadingZeros(a){
  var b1, b2;
  b2 = numberOfLeadingZeros_0(a.h);
  if (b2 == 32) {
    b1 = numberOfLeadingZeros_0(a.m);
    return b1 == 32?numberOfLeadingZeros_0(a.l) + 32:b1 + 20 - 10;
  }
   else {
    return b2 - 12;
  }
}

function powerOfTwo(a){
  var h, l, m;
  l = a.l;
  if ((l & l - 1) != 0) {
    return -1;
  }
  m = a.m;
  if ((m & m - 1) != 0) {
    return -1;
  }
  h = a.h;
  if ((h & h - 1) != 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l == 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l != 0) {
    return numberOfTrailingZeros(l);
  }
  if (h == 0 && m != 0 && l == 0) {
    return numberOfTrailingZeros(m) + 22;
  }
  if (h != 0 && m == 0 && l == 0) {
    return numberOfTrailingZeros(h) + 44;
  }
  return -1;
}

function trialSubtract(a, b){
  var sum0, sum1, sum2;
  sum2 = a.h - b.h;
  if (sum2 < 0) {
    return false;
  }
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  a.l = sum0 & $intern_11;
  a.m = sum1 & $intern_11;
  a.h = sum2 & $intern_3;
  return true;
}

var remainder;
function add_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l + b.l;
  sum1 = a.m + b.m + (sum0 >> 22);
  sum2 = a.h + b.h + (sum1 >> 22);
  return create0(sum0 & $intern_11, sum1 & $intern_11, sum2 & $intern_3);
}

function and(a, b){
  return create0(a.l & b.l, a.m & b.m, a.h & b.h);
}

function compare(a, b){
  var a0, a1, a2, b0, b1, b2, signA, signB;
  signA = a.h >> 19;
  signB = b.h >> 19;
  if (signA != signB) {
    return signB - signA;
  }
  a2 = a.h;
  b2 = b.h;
  if (a2 != b2) {
    return a2 - b2;
  }
  a1 = a.m;
  b1 = b.m;
  if (a1 != b1) {
    return a1 - b1;
  }
  a0 = a.l;
  b0 = b.l;
  return a0 - b0;
}

function fromDouble(value_0){
  var a0, a1, a2, negative, result;
  if (isNaN(value_0)) {
    return $clinit_BigLongLib$Const() , ZERO;
  }
  if (value_0 < -9223372036854775808) {
    return $clinit_BigLongLib$Const() , MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return $clinit_BigLongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_1) {
    a2 = round_int(value_0 / $intern_1);
    value_0 -= a2 * $intern_1;
  }
  a1 = 0;
  if (value_0 >= $intern_2) {
    a1 = round_int(value_0 / $intern_2);
    value_0 -= a1 * $intern_2;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && negate(result);
  return result;
}

function mul(a, b){
  var a0, a1, a2, a3, a4, b0, b1, b2, b3, b4, c0, c00, c01, c1, c10, c11, c12, c13, c2, c22, c23, c24, p0, p1, p2, p3, p4;
  a0 = a.l & 8191;
  a1 = a.l >> 13 | (a.m & 15) << 9;
  a2 = a.m >> 4 & 8191;
  a3 = a.m >> 17 | (a.h & 255) << 5;
  a4 = (a.h & 1048320) >> 8;
  b0 = b.l & 8191;
  b1 = b.l >> 13 | (b.m & 15) << 9;
  b2 = b.m >> 4 & 8191;
  b3 = b.m >> 17 | (b.h & 255) << 5;
  b4 = (b.h & 1048320) >> 8;
  p0 = a0 * b0;
  p1 = a1 * b0;
  p2 = a2 * b0;
  p3 = a3 * b0;
  p4 = a4 * b0;
  if (b1 != 0) {
    p1 += a0 * b1;
    p2 += a1 * b1;
    p3 += a2 * b1;
    p4 += a3 * b1;
  }
  if (b2 != 0) {
    p2 += a0 * b2;
    p3 += a1 * b2;
    p4 += a2 * b2;
  }
  if (b3 != 0) {
    p3 += a0 * b3;
    p4 += a1 * b3;
  }
  b4 != 0 && (p4 += a0 * b4);
  c00 = p0 & $intern_11;
  c01 = (p1 & 511) << 13;
  c0 = c00 + c01;
  c10 = p0 >> 22;
  c11 = p1 >> 9;
  c12 = (p2 & 262143) << 4;
  c13 = (p3 & 31) << 17;
  c1 = c10 + c11 + c12 + c13;
  c22 = p2 >> 18;
  c23 = p3 >> 5;
  c24 = (p4 & 4095) << 8;
  c2 = c22 + c23 + c24;
  c1 += c0 >> 22;
  c0 &= $intern_11;
  c2 += c1 >> 22;
  c1 &= $intern_11;
  c2 &= $intern_3;
  return create0(c0, c1, c2);
}

function neg(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_11;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_11;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_3;
  return create0(neg0, neg1, neg2);
}

function or(a, b){
  return create0(a.l | b.l, a.m | b.m, a.h | b.h);
}

function shl(a, n){
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = a.m << n | a.l >> 22 - n;
    res2 = a.h << n | a.m >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = a.l << n - 22;
    res2 = a.m << n - 22 | a.l >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << n - 44;
  }
  return create0(res0 & $intern_11, res1 & $intern_11, res2 & $intern_3);
}

function shr(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_12) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_3:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_3:0;
    res1 = negative?$intern_11:0;
    res0 = a2 >> n - 44;
  }
  return create0(res0 & $intern_11, res1 & $intern_11, res2 & $intern_3);
}

function shru(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_3;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = a.m >> n - 22 | a.h << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return create0(res0 & $intern_11, res1 & $intern_11, res2 & $intern_3);
}

function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return create0(sum0 & $intern_11, sum1 & $intern_11, sum2 & $intern_3);
}

function xor(a, b){
  return create0(a.l ^ b.l, a.m ^ b.m, a.h ^ b.h);
}

function $clinit_BigLongLib$Const(){
  $clinit_BigLongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_11, $intern_11, 524287);
  MIN_VALUE = create0(0, 0, $intern_12);
  ONE = create(1);
  create(2);
  ZERO = create(0);
}

var MAX_VALUE, MIN_VALUE, ONE, ZERO;
function init(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $clinit_System();
  new ConsolePrintStream;
  new ConsolePrintStream;
}

function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals_0('safari', runtimeValue)) {
    throw toJs(new UserAgentAsserter$UserAgentAssertionError(runtimeValue));
  }
}

function Error_0(message, cause){
  this.cause_0 = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(15, 4, $intern_13);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 15);
defineClass(7, 15, $intern_13);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 7);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.' == null?'null':toString_2('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 4)?castTo('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 4):null);
}

defineClass(64, 7, $intern_13, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 64);
function $getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

defineClass(52, 27, $intern_5);
var Ljava_io_IOException_2_classLit = createForClass('java.io', 'IOException', 52);
function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(40, 1, {49:1});
_.toString_0 = function toString_3(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 40);
function ArithmeticException(){
  RuntimeException.call(this);
}

function ArithmeticException_0(){
  RuntimeException_0.call(this, 'divide by zero');
}

defineClass(60, 5, $intern_6, ArithmeticException, ArithmeticException_0);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 60);
function $append(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_0(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_1(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $deleteCharAt(this$static, start_0){
  this$static.string = $substring_0(this$static.string, start_0) + '' + $substring(this$static.string, start_0 + 1);
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_1(s){
  AbstractStringBuilder.call(this, (checkCriticalNotNull(s) , s));
}

defineClass(35, 40, {49:1}, StringBuilder, StringBuilder_0, StringBuilder_1);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 35);
function $clinit_System(){
  $clinit_System = emptyMethod;
  new PrintStream;
  new PrintStream;
}

defineClass(196, 1, {});
defineClass(83, 52, $intern_5);
var Ljava_net_SocketException_2_classLit = createForClass('java.net', 'SocketException', 83);
function ConnectException(msg){
  Exception.call(this, msg);
}

defineClass(136, 83, $intern_5, ConnectException);
var Ljava_net_ConnectException_2_classLit = createForClass('java.net', 'ConnectException', 136);
function Path_0(pathString){
  this.pathString = pathString;
}

defineClass(36, 1, {36:1}, Path_0);
_.equals_0 = function equals_1(o){
  var path;
  if (this === o)
    return true;
  if (o == null || Ljava_nio_file_Path_2_classLit != getClass__Ljava_lang_Class___devirtual$(o))
    return false;
  path = castTo(o, 36);
  return this.pathString == path.pathString;
}
;
_.hashCode_0 = function hashCode_2(){
  return hashCode_11(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 5, [this.pathString]));
}
;
_.toString_0 = function toString_6(){
  return this.pathString;
}
;
var Ljava_nio_file_Path_2_classLit = createForClass('java.nio.file', 'Path', 36);
function get_0(firstPath){
  var $i, pathString, set_0;
  pathString = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_4, 2, arguments.length - 1, 6, 1);
  for ($i = 0; $i < arguments.length - 1; $i++) {
    pathString[$i] = arguments[$i + 1];
  }
  if (firstPath == null) {
    throw toJs(new IllegalArgumentException('Paths.get() does not support null path'));
  }
  if ($equals_0(firstPath, '')) {
    return new Path_0('');
  }
  return new Path_0(castToString($collect(concat(new StreamImpl(null, new Spliterators$IteratorSpliterator(($clinit_Collections() , set_0 = new HashSet_0 , $putStringValue(set_0.map_0, firstPath, set_0) , new Collections$UnmodifiableSet(set_0)), 1)), stream_0(pathString, pathString.length)), of_3(new Collectors$lambda$15$Type, new Collectors$9methodref$add$Type, new Collectors$10methodref$merge$Type, makeLambdaFunction(Collectors$11methodref$toString$Type.prototype.apply_0, Collectors$11methodref$toString$Type, []), stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_4, 16, 0, [])))));
}

defineClass(137, 1, {});
var Ljava_nio_file_Paths_2_classLit = createForClass('java.nio.file', 'Paths', 137);
function DateTimeException(){
  RuntimeException_0.call(this, 'Instant exceeds minimum or maximum instant');
}

defineClass(116, 5, $intern_6, DateTimeException);
var Ljava_time_DateTimeException_2_classLit = createForClass('java.time', 'DateTimeException', 116);
function $clinit_Instant(){
  $clinit_Instant = emptyMethod;
  EPOCH = new Instant(0, 0);
}

function Instant(epochSecond, nanos){
  this.seconds = epochSecond;
  this.nanos = nanos;
}

function create_1(seconds, nanoOfSecond){
  if (eq(createLongEmul(or(isSmallLong0(seconds)?toBigLong(seconds):seconds, isSmallLong0(nanoOfSecond)?toBigLong(nanoOfSecond):nanoOfSecond)), 0)) {
    return EPOCH;
  }
  if (lt(seconds, {l:2364416, m:802897, h:1046782}) || gt(seconds, {l:1407231, m:3361770, h:1793})) {
    throw toJs(new DateTimeException);
  }
  return new Instant(seconds, nanoOfSecond);
}

function ofEpochMilli(epochMilli){
  $clinit_Instant();
  var mos, secs;
  secs = (checkCriticalArithmetic(true) , gte_0(xor_0(epochMilli, 1000), 0)?div(epochMilli, 1000):sub_1(div(add_1(epochMilli, 1), 1000), 1));
  mos = (checkCriticalArithmetic(true) , toInt(mod(add_1(mod(epochMilli, 1000), 1000), 1000)));
  return create_1(secs, mos * 1000000);
}

defineClass(59, 1, {}, Instant);
_.nanos = 0;
_.seconds = 0;
var EPOCH;
var Ljava_time_Instant_2_classLit = createForClass('java.time', 'Instant', 59);
function $clinit_LocalDate(){
  $clinit_LocalDate = emptyMethod;
  new LocalDate(999999999, 12, 31);
  MIN = new LocalDate(-999999999, 1, 1);
}

function $compareTo(this$static, otherDate){
  var cmp;
  cmp = this$static.year - otherDate.year;
  if (cmp == 0) {
    cmp = this$static.month - otherDate.month;
    cmp == 0 && (cmp = this$static.day - otherDate.day);
  }
  return cmp;
}

function $equals_1(this$static, obj){
  if (maskUndefined(this$static) === maskUndefined(obj)) {
    return true;
  }
  if (instanceOf(obj, 25)) {
    return $compareTo(this$static, castTo(obj, 25)) == 0;
  }
  return false;
}

function $hashCode(this$static){
  var dayValue, monthValue, yearValue;
  yearValue = this$static.year;
  monthValue = this$static.month;
  dayValue = this$static.day;
  return yearValue & -2048 ^ (yearValue << 11) + (monthValue << 6) + dayValue;
}

function $toEpochDay(this$static){
  var m, total, y_0;
  y_0 = this$static.year;
  m = this$static.month;
  total = 0;
  total = add_1(total, mul_0(365, y_0));
  compare_0(y_0, 0) >= 0?(total = add_1(total, add_1(sub_1(div(add_1(y_0, 3), 4), div(add_1(y_0, 99), 100)), div(add_1(y_0, 399), 400)))):(total = sub_1(total, add_1(sub_1(div(y_0, -4), div(y_0, -100)), div(y_0, -400))));
  total = add_1(total, div(sub_1(mul_0(367, m), 362), 12));
  total = add_1(total, this$static.day - 1);
  if (compare_0(m, 2) > 0) {
    total = sub_1(total, 1);
    isLeapYear(this$static.year) || (total = sub_1(total, 1));
  }
  return sub_1(total, 719528);
}

function $toString_0(this$static){
  var absYear, buf, dayValue, monthValue, yearValue;
  yearValue = this$static.year;
  monthValue = this$static.month;
  dayValue = this$static.day;
  absYear = $wnd.Math.abs(yearValue);
  buf = new StringBuilder_0;
  if (absYear < 1000) {
    yearValue < 0?$deleteCharAt((buf.string += yearValue - 10000 , buf), 1):$deleteCharAt((buf.string += yearValue + 10000 , buf), 0);
  }
   else {
    yearValue > 9999 && (buf.string += '+' , buf);
    buf.string += yearValue;
  }
  return $append($append_1($append((buf.string += monthValue < 10?'-0':'-' , buf), monthValue), dayValue < 10?'-0':'-'), dayValue).string;
}

function LocalDate(year, month, dayOfMonth){
  this.year = year;
  this.month = month << 16 >> 16;
  this.day = dayOfMonth << 16 >> 16;
}

function isLeapYear(prolepticYear){
  return eq(createLongEmul(and(isSmallLong0(prolepticYear)?toBigLong(prolepticYear):prolepticYear, isSmallLong0(3)?toBigLong(3):3)), 0) && (neq(mod(prolepticYear, 100), 0) || eq(mod(prolepticYear, 400), 0));
}

function ofEpochDay(epochDay){
  $clinit_LocalDate();
  var adjust, adjustCycles, dom, doyEst, marchDoy0, marchMonth0, month, year, yearEst, zeroDay;
  zeroDay = add_1(epochDay, 719528);
  zeroDay = sub_1(zeroDay, 60);
  adjust = 0;
  if (compare_0(zeroDay, 0) < 0) {
    adjustCycles = sub_1(div(add_1(zeroDay, 1), 146097), 1);
    adjust = mul_0(adjustCycles, 400);
    zeroDay = add_1(zeroDay, mul_0(neg_0(adjustCycles), 146097));
  }
  yearEst = div(add_1(mul_0(400, zeroDay), 591), 146097);
  doyEst = sub_1(zeroDay, add_1(sub_1(add_1(mul_0(365, yearEst), div(yearEst, 4)), div(yearEst, 100)), div(yearEst, 400)));
  if (compare_0(doyEst, 0) < 0) {
    yearEst = sub_1(yearEst, 1);
    doyEst = sub_1(zeroDay, add_1(sub_1(add_1(mul_0(365, yearEst), div(yearEst, 4)), div(yearEst, 100)), div(yearEst, 400)));
  }
  yearEst = add_1(yearEst, adjust);
  marchDoy0 = toInt(doyEst);
  marchMonth0 = (marchDoy0 * 5 + 2) / 153 | 0;
  month = (marchMonth0 + 2) % 12 + 1;
  dom = marchDoy0 - ((marchMonth0 * 306 + 5) / 10 | 0) + 1;
  yearEst = add_1(yearEst, marchMonth0 / 10 | 0);
  year = toInt(yearEst);
  return new LocalDate(year, month, dom);
}

defineClass(25, 1, {20:1, 25:1}, LocalDate);
_.equals_0 = function equals_2(obj){
  return $equals_1(this, obj);
}
;
_.hashCode_0 = function hashCode_3(){
  return $hashCode(this);
}
;
_.toString_0 = function toString_7(){
  return $toString_0(this);
}
;
_.day = 0;
_.month = 0;
_.year = 0;
var MIN;
var Ljava_time_LocalDate_2_classLit = createForClass('java.time', 'LocalDate', 25);
function $clinit_LocalDateTime(){
  $clinit_LocalDateTime = emptyMethod;
  new LocalDateTime(($clinit_LocalDate() , MIN), ($clinit_LocalTime() , MIN_0));
}

function LocalDateTime(date, time){
  this.date = date;
  this.time = time;
}

function ofEpochSecond(epochSecond, nanoOfSecond, offset){
  var date, localEpochDay, localSecond, secsOfDay, time;
  localSecond = add_1(epochSecond, offset.totalSeconds);
  localEpochDay = (checkCriticalArithmetic(true) , gte_0(xor_0(localSecond, $intern_14), 0)?div(localSecond, $intern_14):sub_1(div(add_1(localSecond, 1), $intern_14), 1));
  secsOfDay = (checkCriticalArithmetic(true) , toInt(mod(add_1(mod(localSecond, $intern_14), $intern_14), $intern_14)));
  date = ofEpochDay(localEpochDay);
  time = ofNanoOfDay(add_1(mul_0(secsOfDay, $intern_15), nanoOfSecond));
  return new LocalDateTime(date, time);
}

defineClass(28, 1, {20:1, 28:1}, LocalDateTime);
_.compareTo = function compareTo_0(other){
  var cmp;
  cmp = $compareTo(this.date, other.date);
  cmp == 0 && (cmp = $compareTo_0(this.time, other.time));
  return cmp;
}
;
_.equals_0 = function equals_3(obj){
  var other;
  if (this === obj) {
    return true;
  }
  if (instanceOf(obj, 28)) {
    other = castTo(obj, 28);
    return $equals_1(this.date, other.date) && $equals_2(this.time, other.time);
  }
  return false;
}
;
_.hashCode_0 = function hashCode_4(){
  var nod;
  return $hashCode(this.date) ^ (nod = $toNanoOfDay(this.time) , toInt(xor_0(nod, shru_0(nod, 32))));
}
;
_.toEpochSecond = function toEpochSecond(offset){
  var epochDay, secs;
  epochDay = $toEpochDay(this.date);
  secs = add_1(mul_0(epochDay, $intern_14), $toSecondOfDay(this.time));
  secs = sub_1(secs, offset.totalSeconds);
  return secs;
}
;
_.toString_0 = function toString_8(){
  return $toString_0(this.date) + 'T' + $toString_1(this.time);
}
;
var Ljava_time_LocalDateTime_2_classLit = createForClass('java.time', 'LocalDateTime', 28);
function $clinit_LocalTime(){
  $clinit_LocalTime = emptyMethod;
  var i;
  HOURS = initUnidimensionalArray(Ljava_time_LocalTime_2_classLit, $intern_4, 18, 24, 0, 1);
  for (i = 0; i < HOURS.length; i++) {
    HOURS[i] = new LocalTime(i, 0, 0, 0);
  }
  MIN_0 = HOURS[0];
  new LocalTime(23, 59, 59, 999999999);
}

function $compareTo_0(this$static, other){
  var cmp;
  cmp = compare_1(this$static.hour, other.hour);
  if (cmp == 0) {
    cmp = compare_1(this$static.minute, other.minute);
    if (cmp == 0) {
      cmp = compare_1(this$static.second, other.second);
      cmp == 0 && (cmp = compare_1(this$static.nano, other.nano));
    }
  }
  return cmp;
}

function $equals_2(this$static, obj){
  var other;
  if (maskUndefined(this$static) === maskUndefined(obj)) {
    return true;
  }
  if (instanceOf(obj, 18)) {
    other = castTo(obj, 18);
    return this$static.hour == other.hour && this$static.minute == other.minute && this$static.second == other.second && this$static.nano == other.nano;
  }
  return false;
}

function $toNanoOfDay(this$static){
  var total;
  total = mul_0(this$static.hour, $intern_16);
  total = add_1(total, mul_0(this$static.minute, $intern_17));
  total = add_1(total, mul_0(this$static.second, $intern_15));
  total = add_1(total, this$static.nano);
  return total;
}

function $toSecondOfDay(this$static){
  var total;
  total = this$static.hour * 3600;
  total += this$static.minute * 60;
  total += this$static.second;
  return total;
}

function $toString_1(this$static){
  var sb;
  sb = new StringBuilder;
  this$static.hour < 10 && (sb.string += '0' , sb);
  $append(sb, this$static.hour);
  sb.string += ':';
  this$static.minute < 10 && (sb.string += '0' , sb);
  $append(sb, this$static.minute);
  sb.string += ':';
  this$static.second < 10 && (sb.string += '0' , sb);
  $append(sb, this$static.second);
  return sb.string;
}

function LocalTime(hour, minute, second, nanoOfSecond){
  this.hour = hour << 24 >> 24;
  this.minute = minute << 24 >> 24;
  this.second = second << 24 >> 24;
  this.nano = nanoOfSecond;
}

function create_2(hour, minute, second, nanoOfSecond){
  if ((minute | second | nanoOfSecond) == 0) {
    return HOURS[hour];
  }
  return new LocalTime(hour, minute, second, nanoOfSecond);
}

function ofNanoOfDay(nanoOfDay){
  $clinit_LocalTime();
  var hours, minutes, seconds;
  hours = toInt(div(nanoOfDay, $intern_16));
  nanoOfDay = sub_1(nanoOfDay, mul_0(hours, $intern_16));
  minutes = toInt(div(nanoOfDay, $intern_17));
  nanoOfDay = sub_1(nanoOfDay, mul_0(minutes, $intern_17));
  seconds = toInt(div(nanoOfDay, $intern_15));
  nanoOfDay = sub_1(nanoOfDay, mul_0(seconds, $intern_15));
  return create_2(hours, minutes, seconds, toInt(nanoOfDay));
}

defineClass(18, 1, {20:1, 18:1}, LocalTime);
_.equals_0 = function equals_4(obj){
  return $equals_2(this, obj);
}
;
_.hashCode_0 = function hashCode_5(){
  var nod;
  return nod = $toNanoOfDay(this) , toInt(xor_0(nod, shru_0(nod, 32)));
}
;
_.toString_0 = function toString_9(){
  return $toString_1(this);
}
;
_.hour = 0;
_.minute = 0;
_.nano = 0;
_.second = 0;
var HOURS, MIN_0;
var Ljava_time_LocalTime_2_classLit = createForClass('java.time', 'LocalTime', 18);
defineClass(144, 1, {});
var Ljava_time_ZoneId_2_classLit = createForClass('java.time', 'ZoneId', 144);
function $clinit_ZoneOffset(){
  $clinit_ZoneOffset = emptyMethod;
  UTC_0 = new ZoneOffset;
}

function ZoneOffset(){
  this.totalSeconds = 0;
}

defineClass(110, 144, {}, ZoneOffset);
_.totalSeconds = 0;
var UTC_0;
var Ljava_time_ZoneOffset_2_classLit = createForClass('java.time', 'ZoneOffset', 110);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = instanceOfString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !(instanceOfString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key))) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key, remove){
  var entry, iter, k;
  for (iter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static)).this$01); iter.hasNext;) {
    entry = $next(iter);
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      if (remove) {
        entry = new AbstractMap$SimpleEntry(entry.getKey(), entry.getValue());
        $remove_0(iter);
      }
      return entry;
    }
  }
  return null;
}

function $toString_3(this$static, o){
  return o === this$static?'(this Map)':o == null?'null':toString_2(o);
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(143, 1, {63:1});
_.getOrDefault = function getOrDefault(key, defaultValue){
  var currentValue;
  return currentValue = instanceOfString(key)?$getStringValue(this, key):getEntryValueOrNull($getEntry(this.hashCodeMap, key)) , currentValue == null && !(instanceOfString(key)?$hasStringValue(this, key):!!$getEntry(this.hashCodeMap, key))?defaultValue:currentValue;
}
;
_.putIfAbsent = function putIfAbsent(key, value_0){
  var currentValue;
  return currentValue = instanceOfString(key)?$getStringValue(this, key):getEntryValueOrNull($getEntry(this.hashCodeMap, key)) , currentValue != null?currentValue:instanceOfString(key)?$putStringValue(this, key, value_0):$put_0(this.hashCodeMap, key, value_0);
}
;
_.replace = function replace(key, value_0){
  return (instanceOfString(key)?$hasStringValue(this, key):!!$getEntry(this.hashCodeMap, key))?instanceOfString(key)?$putStringValue(this, key, value_0):$put_0(this.hashCodeMap, key, value_0):null;
}
;
_.clear = function clear_1(){
  $reset((new AbstractHashMap$EntrySet(this)).this$01);
}
;
_.containsKey = function containsKey(key){
  return !!$implFindEntry(this, key, false);
}
;
_.containsValue = function containsValue(value_0){
  var entry, entry$iterator, v;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this)).this$01); entry$iterator.hasNext;) {
    entry = $next(entry$iterator);
    v = entry.getValue();
    if (maskUndefined(value_0) === maskUndefined(v) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, v)) {
      return true;
    }
  }
  return false;
}
;
_.equals_0 = function equals_5(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 37)) {
    return false;
  }
  otherMap = castTo(obj, 63);
  if (this.hashCodeMap.size_0 + this.stringMap.size_0 != otherMap.hashCodeMap.size_0 + otherMap.stringMap.size_0) {
    return false;
  }
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(otherMap)).this$01); entry$iterator.hasNext;) {
    entry = $next(entry$iterator);
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.get = function get_1(key){
  return getEntryValueOrNull($implFindEntry(this, key, false));
}
;
_.hashCode_0 = function hashCode_6(){
  return hashCode_12(new AbstractHashMap$EntrySet(this));
}
;
_.isEmpty = function isEmpty_0(){
  return this.hashCodeMap.size_0 + this.stringMap.size_0 == 0;
}
;
_.keySet = function keySet(){
  return new AbstractMap$1(this);
}
;
_.put = function put(key, value_0){
  throw toJs(new UnsupportedOperationException_0('Put not supported on this map'));
}
;
_.putAll = function putAll(map_0){
  var e, e$iterator;
  checkCriticalNotNull(map_0);
  for (e$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(map_0)).this$01); e$iterator.hasNext;) {
    e = $next(e$iterator);
    $put(this, e.getKey(), e.getValue());
  }
}
;
_.remove = function remove_1(key){
  return getEntryValueOrNull($implFindEntry(this, key, true));
}
;
_.size = function size_1(){
  return $size((new AbstractHashMap$EntrySet(this)).this$01);
}
;
_.toString_0 = function toString_11(){
  var entry, entry$iterator, joiner;
  joiner = new StringJoiner(', ', '{', '}');
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this)).this$01); entry$iterator.hasNext;) {
    entry = $next(entry$iterator);
    $add_1(joiner, $toString_3(this, entry.getKey()) + '=' + $toString_3(this, entry.getValue()));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
_.values = function values_0(){
  return new AbstractMap$2(this);
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 143);
function $containsKey(this$static, key){
  return instanceOfString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $containsValue(this$static, value_0){
  return $containsValue_0(value_0, this$static.stringMap) || $containsValue_0(value_0, this$static.hashCodeMap);
}

function $containsValue_0(value_0, entries){
  var entry, entry$iterator;
  for (entry$iterator = entries.iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 12);
    if ($equals_4(value_0, entry.getValue())) {
      return true;
    }
  }
  return false;
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):$get_0(this$static.stringMap, key);
}

function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):$contains_1(this$static.stringMap, key);
}

function $put(this$static, key, value_0){
  return instanceOfString(key)?$putStringValue(this$static, key, value_0):$put_0(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_0(this$static.hashCodeMap, null, value_0):$put_1(this$static.stringMap, key, value_0);
}

function $remove(this$static, key){
  return instanceOfString(key)?key == null?$remove_3(this$static.hashCodeMap, null):$remove_4(this$static.stringMap, key):$remove_3(this$static.hashCodeMap, key);
}

function $reset(this$static){
  this$static.hashCodeMap = new InternalHashCodeMap(this$static);
  this$static.stringMap = new InternalStringMap(this$static);
  structureChanged(this$static);
}

function $size(this$static){
  return this$static.hashCodeMap.size_0 + this$static.stringMap.size_0;
}

defineClass(47, 143, {63:1});
_.clear = function clear_2(){
  $reset(this);
}
;
_.containsKey = function containsKey_0(key){
  return $containsKey(this, key);
}
;
_.containsValue = function containsValue_0(value_0){
  return $containsValue(this, value_0);
}
;
_.get = function get_2(key){
  return instanceOfString(key)?$getStringValue(this, key):getEntryValueOrNull($getEntry(this.hashCodeMap, key));
}
;
_.put = function put_0(key, value_0){
  return $put(this, key, value_0);
}
;
_.remove = function remove_2(key){
  return $remove(this, key);
}
;
_.size = function size_2(){
  return $size(this);
}
;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 47);
function $equals_3(this$static, o){
  var other;
  if (maskUndefined(o) === maskUndefined(this$static)) {
    return true;
  }
  if (!instanceOf(o, 22)) {
    return false;
  }
  other = castTo(o, 22);
  if (other.size() != this$static.size()) {
    return false;
  }
  return $containsAll(this$static, other);
}

defineClass(142, 140, $intern_18);
_.equals_0 = function equals_6(o){
  return $equals_3(this, o);
}
;
_.hashCode_0 = function hashCode_7(){
  return hashCode_12(this);
}
;
_.removeAll = function removeAll_0(c){
  var iter, o, o$iterator, size_0;
  checkCriticalNotNull(c);
  size_0 = this.size();
  if (size_0 < c.size()) {
    for (iter = this.iterator(); iter.hasNext_0();) {
      o = iter.next_1();
      c.contains(o) && iter.remove_0();
    }
  }
   else {
    for (o$iterator = c.iterator(); o$iterator.hasNext_0();) {
      o = o$iterator.next_1();
      this.remove(o);
    }
  }
  return size_0 != this.size();
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 142);
function $contains(this$static, o){
  if (instanceOf(o, 12)) {
    return $containsEntry(this$static.this$01, castTo(o, 12));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(10, 142, $intern_18, AbstractHashMap$EntrySet);
_.clear = function clear_3(){
  $reset(this.this$01);
}
;
_.contains = function contains_0(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_0(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.remove = function remove_3(entry){
  var key;
  if ($contains(this, entry)) {
    key = castTo(entry, 12).getKey();
    $remove(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size = function size_3(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 10);
function $computeHasNext(this$static){
  if (this$static.current.hasNext_0()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = new InternalHashCodeMap$1(this$static.this$01.hashCodeMap);
  return this$static.current.hasNext_0();
}

function $next(this$static){
  var rv;
  checkStructuralChange(this$static.this$01, this$static);
  checkCriticalElement(this$static.hasNext);
  this$static.last = this$static.current;
  rv = castTo(this$static.current.next_1(), 12);
  this$static.hasNext = $computeHasNext(this$static);
  return rv;
}

function $remove_0(this$static){
  checkCriticalState(!!this$static.last);
  checkStructuralChange(this$static.this$01, this$static);
  this$static.last.remove_0();
  this$static.last = null;
  this$static.hasNext = $computeHasNext(this$static);
  recordLastKnownStructure(this$static.this$01, this$static);
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = new InternalStringMap$1(this.this$01.stringMap);
  this.current = this.stringMapEntries;
  this.hasNext = $computeHasNext(this);
  this.$modCount = this$0.$modCount;
}

defineClass(13, 1, {}, AbstractHashMap$EntrySetIterator);
_.forEachRemaining = function forEachRemaining(consumer){
  $forEachRemaining(this, consumer);
}
;
_.next_1 = function next(){
  return $next(this);
}
;
_.hasNext_0 = function hasNext(){
  return this.hasNext;
}
;
_.remove_0 = function remove_4(){
  $remove_0(this);
}
;
_.hasNext = false;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 13);
function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(44, 142, $intern_18, AbstractMap$1);
_.clear = function clear_5(){
  $reset(this.this$01);
}
;
_.contains = function contains_1(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator = function iterator_2(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.remove = function remove_9(key){
  if ($containsKey(this.this$01, key)) {
    $remove(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size = function size_5(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 44);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(45, 1, {}, AbstractMap$1$1);
_.forEachRemaining = function forEachRemaining_1(consumer){
  $forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_1(){
  return this.val$outerIter2.hasNext;
}
;
_.next_1 = function next_1(){
  var entry;
  return entry = $next(this.val$outerIter2) , entry.getKey();
}
;
_.remove_0 = function remove_10(){
  $remove_0(this.val$outerIter2);
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 45);
function AbstractMap$2(this$0){
  this.this$01 = this$0;
}

defineClass(98, 140, {9:1}, AbstractMap$2);
_.clear = function clear_6(){
  $reset(this.this$01);
}
;
_.contains = function contains_2(value_0){
  return $containsValue(this.this$01, value_0);
}
;
_.iterator = function iterator_3(){
  var outerIter;
  outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01);
  return new AbstractMap$2$1(outerIter);
}
;
_.size = function size_6(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractMap$2_2_classLit = createForClass('java.util', 'AbstractMap/2', 98);
function AbstractMap$2$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(99, 1, {}, AbstractMap$2$1);
_.forEachRemaining = function forEachRemaining_2(consumer){
  $forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_2(){
  return this.val$outerIter2.hasNext;
}
;
_.next_1 = function next_2(){
  var entry;
  entry = $next(this.val$outerIter2);
  return entry.getValue();
}
;
_.remove_0 = function remove_11(){
  $remove_0(this.val$outerIter2);
}
;
var Ljava_util_AbstractMap$2$1_2_classLit = createForClass('java.util', 'AbstractMap/2/1', 99);
defineClass(97, 1, $intern_19);
_.equals_0 = function equals_8(other){
  var entry;
  if (!instanceOf(other, 12)) {
    return false;
  }
  entry = castTo(other, 12);
  return equals_11(this.key, entry.getKey()) && equals_11(this.value_0, entry.getValue());
}
;
_.getKey = function getKey(){
  return this.key;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
_.hashCode_0 = function hashCode_9(){
  return hashCode_15(this.key) ^ hashCode_15(this.value_0);
}
;
_.setValue = function setValue(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString_0 = function toString_12(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 97);
function AbstractMap$SimpleEntry(key, value_0){
  this.key = key;
  this.value_0 = value_0;
}

defineClass(56, 97, $intern_19, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 56);
defineClass(145, 1, $intern_19);
_.equals_0 = function equals_9(other){
  var entry;
  if (!instanceOf(other, 12)) {
    return false;
  }
  entry = castTo(other, 12);
  return equals_11(this.val$entry2.value[0], entry.getKey()) && equals_11($getValue(this), entry.getValue());
}
;
_.hashCode_0 = function hashCode_10(){
  return hashCode_15(this.val$entry2.value[0]) ^ hashCode_15($getValue(this));
}
;
_.toString_0 = function toString_13(){
  return this.val$entry2.value[0] + '=' + $getValue(this);
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 145);
function $toArray_1(this$static, out){
  var i, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = stampJavaTypeInfo_1(new Array(size_0), out));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function Arrays$ArrayList(array){
  checkCriticalNotNull(array);
  this.array = array;
}

defineClass(41, 141, $intern_8, Arrays$ArrayList);
_.contains = function contains_4(o){
  return $indexOf(this, o) != -1;
}
;
_.getAtIndex = function get_5(index_0){
  return checkCriticalElementIndex(index_0, this.array.length) , this.array[index_0];
}
;
_.setAtIndex = function set_4(index_0, value_0){
  var was;
  was = (checkCriticalElementIndex(index_0, this.array.length) , this.array[index_0]);
  setCheck(this.array, index_0, value_0);
  return was;
}
;
_.size = function size_8(){
  return this.array.length;
}
;
_.toArray = function toArray_3(){
  return $toArray_1(this, initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, this.array.length, 5, 1));
}
;
_.toArray_0 = function toArray_4(out){
  return $toArray_1(this, out);
}
;
var Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util', 'Arrays/ArrayList', 41);
defineClass(94, 1, {9:1});
_.add = function add_8(o){
  throw toJs(new UnsupportedOperationException);
}
;
_.addAll = function addAll_3(c){
  throw toJs(new UnsupportedOperationException);
}
;
_.clear = function clear_8(){
  throw toJs(new UnsupportedOperationException);
}
;
_.contains = function contains_6(o){
  return $contains_0(this.coll, o);
}
;
_.containsAll = function containsAll_0(c){
  return $containsAll(this.coll, c);
}
;
_.isEmpty = function isEmpty_2(){
  return $size(this.coll.map_0) == 0;
}
;
_.iterator = function iterator_6(){
  var outerIter;
  return new Collections$UnmodifiableCollectionIterator((outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this.coll.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter)));
}
;
_.remove = function remove_16(o){
  throw toJs(new UnsupportedOperationException);
}
;
_.removeAll = function removeAll_1(c){
  throw toJs(new UnsupportedOperationException);
}
;
_.retainAll = function retainAll_0(c){
  throw toJs(new UnsupportedOperationException);
}
;
_.size = function size_10(){
  return $size(this.coll.map_0);
}
;
_.toArray = function toArray_5(){
  return $toArray(this.coll);
}
;
_.toArray_0 = function toArray_6(a){
  return $toArray_0(this.coll, a);
}
;
_.toString_0 = function toString_14(){
  return $toString_2(this.coll);
}
;
var Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollection', 94);
function Collections$UnmodifiableCollectionIterator(it){
  this.it = it;
}

defineClass(96, 1, {}, Collections$UnmodifiableCollectionIterator);
_.forEachRemaining = function forEachRemaining_5(consumer){
  $forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_5(){
  return this.it.val$outerIter2.hasNext;
}
;
_.next_1 = function next_5(){
  var entry;
  return entry = $next(this.it.val$outerIter2) , entry.getKey();
}
;
_.remove_0 = function remove_17(){
  throw toJs(new UnsupportedOperationException);
}
;
var Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollectionIterator', 96);
function Collections$UnmodifiableSet(set_0){
  this.coll = set_0;
}

defineClass(95, 94, $intern_18, Collections$UnmodifiableSet);
_.equals_0 = function equals_10(o){
  return $equals_3(this.coll, o);
}
;
_.hashCode_0 = function hashCode_14(){
  return hashCode_12(this.coll);
}
;
var Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableSet', 95);
function checkStructuralChange(host, iterator){
  if (iterator.$modCount != host.$modCount) {
    throw toJs(new ConcurrentModificationException);
  }
}

function recordLastKnownStructure(host, iterator){
  iterator.$modCount = host.$modCount;
}

function structureChanged(host){
  var modCount, modCountable;
  modCountable = host;
  modCount = modCountable.$modCount | 0;
  modCountable.$modCount = modCount + 1;
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(117, 5, $intern_6, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 117);
function $equals_4(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

function HashMap(){
  $reset(this);
}

function HashMap_0(){
  checkCriticalArgument(true, 'Negative initial capacity');
  checkCriticalArgument(true, 'Non-positive load factor');
  $reset(this);
}

defineClass(37, 47, {3:1, 37:1, 63:1}, HashMap, HashMap_0);
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 37);
function $add_0(this$static, o){
  var old;
  old = $put(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_0(this$static, o){
  return $containsKey(this$static.map_0, o);
}

function HashSet(){
  this.map_0 = new HashMap;
}

function HashSet_0(){
  this.map_0 = new HashMap_0;
}

defineClass(31, 142, {3:1, 9:1, 31:1, 22:1}, HashSet, HashSet_0);
_.add = function add_9(o){
  return $add_0(this, o);
}
;
_.clear = function clear_9(){
  $reset(this.map_0);
}
;
_.contains = function contains_7(o){
  return $contains_0(this, o);
}
;
_.isEmpty = function isEmpty_3(){
  return $size(this.map_0) == 0;
}
;
_.iterator = function iterator_7(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.remove = function remove_18(o){
  return $remove(this.map_0, o) != null;
}
;
_.size = function size_11(){
  return $size(this.map_0);
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 31);
function $findEntryInChain(key, chain){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = chain , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if ($equals_4(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $getChainOrEmpty(this$static, hashCode){
  var chain;
  chain = this$static.backingMap.get(hashCode);
  return chain == null?new Array:chain;
}

function $getEntry(this$static, key){
  var hashCode;
  return $findEntryInChain(key, $getChainOrEmpty(this$static, key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0)));
}

function $put_0(this$static, key, value_0){
  var chain, chain0, entry, hashCode, hashCode0;
  hashCode0 = key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0);
  chain0 = (chain = this$static.backingMap.get(hashCode0) , chain == null?new Array:chain);
  if (chain0.length == 0) {
    this$static.backingMap.set(hashCode0, chain0);
  }
   else {
    entry = $findEntryInChain(key, chain0);
    if (entry) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain0, chain0.length, new AbstractMap$SimpleEntry(key, value_0));
  ++this$static.size_0;
  structureChanged(this$static.host);
  return null;
}

function $remove_3(this$static, key){
  var chain, chain0, entry, hashCode, hashCode0, i;
  hashCode0 = key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0);
  chain0 = (chain = this$static.backingMap.get(hashCode0) , chain == null?new Array:chain);
  for (i = 0; i < chain0.length; i++) {
    entry = chain0[i];
    if ($equals_4(key, entry.getKey())) {
      if (chain0.length == 1) {
        chain0.length = 0;
        $delete(this$static.backingMap, hashCode0);
      }
       else {
        chain0.splice(i, 1);
      }
      --this$static.size_0;
      structureChanged(this$static.host);
      return entry.getValue();
    }
  }
  return null;
}

function InternalHashCodeMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(115, 1, {}, InternalHashCodeMap);
_.iterator = function iterator_8(){
  return new InternalHashCodeMap$1(this);
}
;
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass('java.util', 'InternalHashCodeMap', 115);
function InternalHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = new Array;
}

defineClass(62, 1, {}, InternalHashCodeMap$1);
_.forEachRemaining = function forEachRemaining_6(consumer){
  $forEachRemaining(this, consumer);
}
;
_.next_1 = function next_6(){
  return this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.hasNext_0 = function hasNext_6(){
  var current;
  if (this.itemIndex < this.chain.length) {
    return true;
  }
  current = this.chains.next();
  if (!current.done) {
    this.chain = current.value[1];
    this.itemIndex = 0;
    return true;
  }
  return false;
}
;
_.remove_0 = function remove_19(){
  $remove_3(this.this$01, this.lastEntry.getKey());
  this.itemIndex != 0 && --this.itemIndex;
}
;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalHashCodeMap/1', 62);
function $delete(this$static, key){
  var fn;
  fn = this$static['delete'];
  fn.call(this$static, key);
}

function $delete_0(this$static, key){
  var fn;
  fn = this$static['delete'];
  fn.call(this$static, key);
}

function $clinit_InternalJsMapFactory(){
  $clinit_InternalJsMapFactory = emptyMethod;
  jsMapCtor = getJsMapConstructor();
}

function canHandleObjectCreateAndProto(){
  if (!Object.create || !Object.getOwnPropertyNames) {
    return false;
  }
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  if (Object.getOwnPropertyNames(map_0).length == 0) {
    return false;
  }
  return true;
}

function getJsMapConstructor(){
  function isCorrectIterationProtocol(){
    try {
      return (new Map).entries().next().done;
    }
     catch (e) {
      return false;
    }
  }

  if (typeof Map === 'function' && Map.prototype.entries && isCorrectIterationProtocol()) {
    return Map;
  }
   else {
    return getJsMapPolyFill();
  }
}

function getJsMapPolyFill(){
  function Stringmap(){
    this.obj = this.createObject();
  }

  ;
  Stringmap.prototype.createObject = function(key){
    return Object.create(null);
  }
  ;
  Stringmap.prototype.get = function(key){
    return this.obj[key];
  }
  ;
  Stringmap.prototype.set = function(key, value_0){
    this.obj[key] = value_0;
  }
  ;
  Stringmap.prototype['delete'] = function(key){
    delete this.obj[key];
  }
  ;
  Stringmap.prototype.keys = function(){
    return Object.getOwnPropertyNames(this.obj);
  }
  ;
  Stringmap.prototype.entries = function(){
    var keys_0 = this.keys();
    var map_0 = this;
    var nextIndex = 0;
    return {next:function(){
      if (nextIndex >= keys_0.length)
        return {done:true};
      var key = keys_0[nextIndex++];
      return {value:[key, map_0.get(key)], done:false};
    }
    };
  }
  ;
  if (!canHandleObjectCreateAndProto()) {
    Stringmap.prototype.createObject = function(){
      return {};
    }
    ;
    Stringmap.prototype.get = function(key){
      return this.obj[':' + key];
    }
    ;
    Stringmap.prototype.set = function(key, value_0){
      this.obj[':' + key] = value_0;
    }
    ;
    Stringmap.prototype['delete'] = function(key){
      delete this.obj[':' + key];
    }
    ;
    Stringmap.prototype.keys = function(){
      var result = [];
      for (var key in this.obj) {
        key.charCodeAt(0) == 58 && result.push(key.substring(1));
      }
      return result;
    }
    ;
  }
  return Stringmap;
}

function newJsMap(){
  $clinit_InternalJsMapFactory();
  return new jsMapCtor;
}

var jsMapCtor;
function $contains_1(this$static, key){
  return !(this$static.backingMap.get(key) === undefined);
}

function $get_0(this$static, key){
  return this$static.backingMap.get(key);
}

function $put_1(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap.get(key);
  this$static.backingMap.set(key, value_0 === undefined?null:value_0);
  if (oldValue === undefined) {
    ++this$static.size_0;
    structureChanged(this$static.host);
  }
   else {
    ++this$static.valueMod;
  }
  return oldValue;
}

function $remove_4(this$static, key){
  var value_0;
  value_0 = this$static.backingMap.get(key);
  if (value_0 === undefined) {
    ++this$static.valueMod;
  }
   else {
    $delete_0(this$static.backingMap, key);
    --this$static.size_0;
    structureChanged(this$static.host);
  }
  return value_0;
}

function InternalStringMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(113, 1, {}, InternalStringMap);
_.iterator = function iterator_9(){
  return new InternalStringMap$1(this);
}
;
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass('java.util', 'InternalStringMap', 113);
function InternalStringMap$1(this$0){
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

defineClass(61, 1, {}, InternalStringMap$1);
_.forEachRemaining = function forEachRemaining_7(consumer){
  $forEachRemaining(this, consumer);
}
;
_.next_1 = function next_7(){
  return this.last = this.current , this.current = this.entries_0.next() , new InternalStringMap$2(this.this$01, this.last, this.this$01.valueMod);
}
;
_.hasNext_0 = function hasNext_7(){
  return !this.current.done;
}
;
_.remove_0 = function remove_20(){
  $remove_4(this.this$01, this.last.value[0]);
}
;
var Ljava_util_InternalStringMap$1_2_classLit = createForClass('java.util', 'InternalStringMap/1', 61);
function $getValue(this$static){
  if (this$static.this$01.valueMod != this$static.val$lastValueMod3) {
    return $get_0(this$static.this$01, this$static.val$entry2.value[0]);
  }
  return this$static.val$entry2.value[1];
}

function InternalStringMap$2(this$0, val$entry, val$lastValueMod){
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
}

defineClass(114, 145, $intern_19, InternalStringMap$2);
_.getKey = function getKey_0(){
  return this.val$entry2.value[0];
}
;
_.getValue = function getValue_0(){
  return $getValue(this);
}
;
_.setValue = function setValue_0(object){
  return $put_1(this.this$01, this.val$entry2.value[0], object);
}
;
_.val$lastValueMod3 = 0;
var Ljava_util_InternalStringMap$2_2_classLit = createForClass('java.util', 'InternalStringMap/2', 114);
function $clinit_Optional(){
  $clinit_Optional = emptyMethod;
  EMPTY = new Optional(null);
}

function Optional(ref){
  $clinit_Optional();
  this.ref = ref;
}

function empty(){
  $clinit_Optional();
  return EMPTY;
}

function of_2(value_0){
  $clinit_Optional();
  return new Optional(checkCriticalNotNull(value_0));
}

defineClass(23, 1, {23:1}, Optional);
_.equals_0 = function equals_12(obj){
  var other;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 23)) {
    return false;
  }
  other = castTo(obj, 23);
  return equals_11(this.ref, other.ref);
}
;
_.get = function get_7(){
  checkCriticalElement(this.ref != null);
  return this.ref;
}
;
_.hashCode_0 = function hashCode_16(){
  return hashCode_15(this.ref);
}
;
_.isEmpty = function isEmpty_4(){
  return this.ref == null;
}
;
_.isPresent = function isPresent(){
  return this.ref != null;
}
;
_.toString_0 = function toString_15(){
  return this.ref != null?'Optional.of(' + valueOf(this.ref) + ')':'Optional.empty()';
}
;
var EMPTY;
var Ljava_util_Optional_2_classLit = createForClass('java.util', 'Optional', 23);
function $initIterator(this$static){
  if (!this$static.it) {
    this$static.it = this$static.collection.iterator();
    this$static.estimateSize = this$static.collection.size();
  }
}

function $tryAdvance_0(this$static, consumer){
  checkCriticalNotNull(consumer);
  $initIterator(this$static);
  if (this$static.it.hasNext_0()) {
    consumer.accept(this$static.it.next_1());
    return true;
  }
  return false;
}

function Spliterators$IteratorSpliterator(collection, characteristics){
  this.collection = (checkCriticalNotNull(collection) , collection);
  this.characteristics = (characteristics & 4096) == 0?characteristics | 64 | 16384:characteristics;
}

defineClass(39, 1, {}, Spliterators$IteratorSpliterator);
_.characteristics_0 = function characteristics_2(){
  return this.characteristics;
}
;
_.estimateSize_0 = function estimateSize_1(){
  $initIterator(this);
  return this.estimateSize;
}
;
_.forEachRemaining = function forEachRemaining_11(consumer){
  $initIterator(this);
  this.it.forEachRemaining(consumer);
}
;
_.tryAdvance = function tryAdvance_0(consumer){
  return $tryAdvance_0(this, consumer);
}
;
_.characteristics = 0;
_.estimateSize = 0;
var Ljava_util_Spliterators$IteratorSpliterator_2_classLit = createForClass('java.util', 'Spliterators/IteratorSpliterator', 39);
function $add_1(this$static, newElement){
  !this$static.builder?(this$static.builder = new StringBuilder_1(this$static.prefix)):$append_1(this$static.builder, this$static.delimiter);
  $append_0(this$static.builder, newElement);
  return this$static;
}

function $toString_4(this$static){
  return !this$static.builder?this$static.emptyValue:this$static.suffix.length == 0?this$static.builder.string:this$static.builder.string + ('' + this$static.suffix);
}

function StringJoiner(delimiter, prefix, suffix){
  this.delimiter = (checkCriticalNotNull(delimiter) , delimiter);
  this.prefix = (checkCriticalNotNull(prefix) , prefix);
  this.suffix = (checkCriticalNotNull(suffix) , suffix);
  this.emptyValue = this.prefix + ('' + this.suffix);
}

defineClass(24, 1, {24:1}, StringJoiner);
_.toString_0 = function toString_16(){
  return $toString_4(this);
}
;
var Ljava_util_StringJoiner_2_classLit = createForClass('java.util', 'StringJoiner', 24);
function $complete(this$static, value_0){
  var function_0, future, i, i0, i1, i2, t;
  this$static.value_0 = value_0;
  this$static.isDone = true;
  for (i0 = 0; i0 < this$static.applies.array.length; i0++) {
    function_0 = castToFunction($get(this$static.applies, i0));
    future = castTo($get(this$static.applyFutures, i0), 6);
    try {
      $complete(future, function_0(value_0));
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 4)) {
        t = $e0;
        $completeExceptionally(future, t);
      }
       else 
        throw toJs($e0);
    }
  }
  for (i1 = 0; i1 < this$static.consumers.array.length; i1++) {
    function_0 = castTo($get(this$static.consumers, i1), 17);
    future = castTo($get(this$static.consumeFutures, i1), 6);
    try {
      function_0.accept(value_0);
      $complete(future, null);
    }
     catch ($e1) {
      $e1 = toJava($e1);
      if (instanceOf($e1, 4)) {
        t = $e1;
        $completeExceptionally(future, t);
      }
       else 
        throw toJs($e1);
    }
  }
  for (i2 = 0; i2 < this$static.composers.array.length; i2++) {
    function_0 = castToFunction($get(this$static.composers, i2));
    future = castTo($get(this$static.composeFutures, i2), 6);
    try {
      $exceptionally($thenAccept(castTo(function_0(value_0), 78), new CompletableFuture$lambda$2$Type(future)), makeLambdaFunction(CompletableFuture$lambda$3$Type.prototype.apply_0, CompletableFuture$lambda$3$Type, [future]));
    }
     catch ($e2) {
      $e2 = toJava($e2);
      if (instanceOf($e2, 4)) {
        t = $e2;
        $completeExceptionally(future, t);
      }
       else 
        throw toJs($e2);
    }
  }
  for (i = 0; i < this$static.errors.array.length; i++) {
    future = castTo($get(this$static.errorFutures, i), 6);
    castToFunction($get(this$static.errors, i));
    try {
      $complete(future, value_0);
    }
     catch ($e3) {
      $e3 = toJava($e3);
      if (instanceOf($e3, 4)) {
        t = $e3;
        $completeExceptionally(future, t);
      }
       else 
        throw toJs($e3);
    }
  }
  this$static.errors.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 5, 1);
  this$static.errorFutures.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 5, 1);
  this$static.composers.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 5, 1);
  this$static.composeFutures.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 5, 1);
  this$static.consumers.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 5, 1);
  this$static.consumeFutures.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 5, 1);
  this$static.applies.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 5, 1);
  this$static.applyFutures.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 5, 1);
  return true;
}

function $completeExceptionally(this$static, err){
  this$static.reason = err;
  this$static.isDone = true;
  $execute(($clinit_ForkJoinPool() , $clinit_ForkJoinPool() , instance_0), new CompletableFuture$lambda$4$Type(this$static, err));
  return true;
}

function $exceptionally(this$static, handler){
  var fut, t;
  if (this$static.isDone) {
    if (this$static.isDone && !!this$static.reason) {
      try {
        return new CompletableFuture_0(handler(this$static.reason));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 4)) {
          t = $e0;
          fut = new CompletableFuture;
          $completeExceptionally(fut, t);
          return fut;
        }
         else 
          throw toJs($e0);
      }
    }
     else {
      return this$static;
    }
  }
   else {
    fut = new CompletableFuture;
    $add(this$static.errorFutures, fut);
    $add(this$static.errors, handler);
    return fut;
  }
}

function $lambda$4(this$static, err_1){
  var function_0, future, i, i0, i1, i2, t;
  for (i0 = 0; i0 < this$static.applies.array.length; i0++) {
    future = castTo($get(this$static.applyFutures, i0), 6);
    try {
      $completeExceptionally(future, err_1);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 4)) {
        t = $e0;
        $completeExceptionally(future, t);
      }
       else 
        throw toJs($e0);
    }
  }
  for (i1 = 0; i1 < this$static.consumers.array.length; i1++) {
    future = castTo($get(this$static.consumeFutures, i1), 6);
    try {
      $completeExceptionally(future, err_1);
    }
     catch ($e1) {
      $e1 = toJava($e1);
      if (instanceOf($e1, 4)) {
        t = $e1;
        $completeExceptionally(future, t);
      }
       else 
        throw toJs($e1);
    }
  }
  for (i2 = 0; i2 < this$static.composers.array.length; i2++) {
    future = castTo($get(this$static.composeFutures, i2), 6);
    try {
      $completeExceptionally(future, err_1);
    }
     catch ($e2) {
      $e2 = toJava($e2);
      if (instanceOf($e2, 4)) {
        t = $e2;
        $completeExceptionally(future, t);
      }
       else 
        throw toJs($e2);
    }
  }
  for (i = 0; i < this$static.errors.array.length; i++) {
    future = castTo($get(this$static.errorFutures, i), 6);
    function_0 = castToFunction($get(this$static.errors, i));
    try {
      $complete(future, function_0(err_1));
    }
     catch ($e3) {
      $e3 = toJava($e3);
      if (instanceOf($e3, 4)) {
        t = $e3;
        $completeExceptionally(future, t);
      }
       else 
        throw toJs($e3);
    }
  }
  this$static.errors.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 5, 1);
  this$static.errorFutures.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 5, 1);
  this$static.composers.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 5, 1);
  this$static.composeFutures.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 5, 1);
  this$static.consumers.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 5, 1);
  this$static.consumeFutures.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 5, 1);
  this$static.applies.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 5, 1);
  this$static.applyFutures.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 5, 1);
}

function $thenAccept(this$static, action){
  var fut, t;
  fut = new CompletableFuture;
  if (this$static.isDone) {
    if (this$static.reason) {
      $completeExceptionally(fut, this$static.reason);
    }
     else {
      try {
        action.accept(this$static.value_0);
        $complete(fut, null);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 4)) {
          t = $e0;
          $completeExceptionally(fut, t);
        }
         else 
          throw toJs($e0);
      }
    }
  }
   else {
    $add(this$static.consumeFutures, fut);
    $add(this$static.consumers, action);
  }
  return fut;
}

function CompletableFuture(){
  CompletableFuture_1.call(this, null, false);
}

function CompletableFuture_0(value_0){
  CompletableFuture_1.call(this, value_0, true);
}

function CompletableFuture_1(value_0, isDone){
  this.consumers = new ArrayList;
  this.consumeFutures = new ArrayList;
  this.applies = new ArrayList;
  this.applyFutures = new ArrayList;
  this.composers = new ArrayList;
  this.composeFutures = new ArrayList;
  this.errors = new ArrayList;
  this.errorFutures = new ArrayList;
  this.value_0 = value_0;
  this.reason = null;
  this.isDone = isDone;
}

defineClass(6, 1, {6:1, 78:1}, CompletableFuture, CompletableFuture_0);
_.complete = function complete(value_0){
  return $complete(this, value_0);
}
;
_.completeExceptionally = function completeExceptionally(err){
  return $completeExceptionally(this, err);
}
;
_.exceptionally = function exceptionally(handler){
  return $exceptionally(this, handler);
}
;
_.thenApply = function thenApply(fn){
  var fut, t;
  fut = new CompletableFuture;
  if (this.isDone) {
    if (this.reason) {
      $completeExceptionally(fut, this.reason);
    }
     else {
      try {
        $complete(fut, fn(this.value_0));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 4)) {
          t = $e0;
          $completeExceptionally(fut, t);
        }
         else 
          throw toJs($e0);
      }
    }
  }
   else {
    $add(this.applyFutures, fut);
    $add(this.applies, fn);
  }
  return fut;
}
;
_.thenCompose = function thenCompose(fn){
  var fut, t;
  fut = new CompletableFuture;
  if (this.isDone) {
    if (this.reason) {
      $completeExceptionally(fut, this.reason);
    }
     else {
      try {
        $exceptionally($thenAccept(castTo(fn(this.value_0), 78), new CompletableFuture$0methodref$complete$Type(fut)), makeLambdaFunction(CompletableFuture$lambda$1$Type.prototype.apply_0, CompletableFuture$lambda$1$Type, [fut]));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 4)) {
          t = $e0;
          $completeExceptionally(fut, t);
        }
         else 
          throw toJs($e0);
      }
    }
  }
   else {
    $add(this.composeFutures, fut);
    $add(this.composers, fn);
  }
  return fut;
}
;
_.isDone = false;
var Ljava_util_concurrent_CompletableFuture_2_classLit = createForClass('java.util.concurrent', 'CompletableFuture', 6);
function CompletableFuture$0methodref$complete$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(79, 1, $intern_9, CompletableFuture$0methodref$complete$Type);
_.accept = function accept(arg0){
  $complete(this.$$outer_0, arg0);
}
;
_.andThen = function andThen(after){
  return requireNonNull(after) , new Consumer$lambda$0$Type(this, after);
}
;
var Ljava_util_concurrent_CompletableFuture$0methodref$complete$Type_2_classLit = createForClass('java.util.concurrent', 'CompletableFuture/0methodref$complete$Type', 79);
function CompletableFuture$lambda$1$Type(fut_0){
  this.fut_0 = fut_0;
}

defineClass(151, $wnd.Function, $intern_7, CompletableFuture$lambda$1$Type);
_.apply_0 = function apply_2(arg0){
  return $completeExceptionally(this.fut_0, castTo(arg0, 4)) , null;
}
;
function CompletableFuture$lambda$2$Type(future_0){
  this.future_0 = future_0;
}

defineClass(80, 1, $intern_9, CompletableFuture$lambda$2$Type);
_.accept = function accept_0(arg0){
  $complete(this.future_0, arg0);
}
;
_.andThen = function andThen_0(after){
  return requireNonNull(after) , new Consumer$lambda$0$Type(this, after);
}
;
var Ljava_util_concurrent_CompletableFuture$lambda$2$Type_2_classLit = createForClass('java.util.concurrent', 'CompletableFuture/lambda$2$Type', 80);
function CompletableFuture$lambda$3$Type(future_0){
  this.future_0 = future_0;
}

defineClass(152, $wnd.Function, $intern_7, CompletableFuture$lambda$3$Type);
_.apply_0 = function apply_3(arg0){
  return $completeExceptionally(this.future_0, castTo(arg0, 4)) , null;
}
;
function CompletableFuture$lambda$4$Type($$outer_0, err_1){
  this.$$outer_0 = $$outer_0;
  this.err_1 = err_1;
}

defineClass(81, 1, {}, CompletableFuture$lambda$4$Type);
_.run = function run(){
  $lambda$4(this.$$outer_0, this.err_1);
}
;
var Ljava_util_concurrent_CompletableFuture$lambda$4$Type_2_classLit = createForClass('java.util.concurrent', 'CompletableFuture/lambda$4$Type', 81);
function $clinit_ForkJoinPool(){
  $clinit_ForkJoinPool = emptyMethod;
  instance_0 = new ForkJoinPool(new $wnd.ForkJoinJS.JSForkJoinPool);
}

function $execute(this$static, task){
  this$static.pool.execute(task);
}

function ForkJoinPool(pool){
  this.pool = pool;
}

defineClass(82, 1, {}, ForkJoinPool);
var instance_0;
var Ljava_util_concurrent_ForkJoinPool_2_classLit = createForClass('java.util.concurrent', 'ForkJoinPool', 82);
function Collectors$10methodref$merge$Type(){
}

defineClass(91, 1, {}, Collectors$10methodref$merge$Type);
var Ljava_util_stream_Collectors$10methodref$merge$Type_2_classLit = createForClass('java.util.stream', 'Collectors/10methodref$merge$Type', 91);
function Collectors$11methodref$toString$Type(){
}

defineClass(155, $wnd.Function, $intern_7, Collectors$11methodref$toString$Type);
_.apply_0 = function apply_5(arg0){
  return $toString_4(castTo(arg0, 24));
}
;
function Collectors$23methodref$ctor$Type(){
}

defineClass(71, 1, {}, Collectors$23methodref$ctor$Type);
_.get_0 = function get_9(){
  return new HashSet;
}
;
var Ljava_util_stream_Collectors$23methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'Collectors/23methodref$ctor$Type', 71);
function Collectors$24methodref$add$Type(){
}

defineClass(72, 1, {}, Collectors$24methodref$add$Type);
_.accept_0 = function accept_3(arg0, arg1){
  $add_0(castTo(arg0, 31), arg1);
}
;
var Ljava_util_stream_Collectors$24methodref$add$Type_2_classLit = createForClass('java.util.stream', 'Collectors/24methodref$add$Type', 72);
function Collectors$9methodref$add$Type(){
}

defineClass(90, 1, {}, Collectors$9methodref$add$Type);
_.accept_0 = function accept_4(arg0, arg1){
  $add_1(castTo(arg0, 24), castTo(arg1, 49));
}
;
var Ljava_util_stream_Collectors$9methodref$add$Type_2_classLit = createForClass('java.util.stream', 'Collectors/9methodref$add$Type', 90);
function Collectors$lambda$15$Type(){
  this.delimiter_0 = '/';
  this.prefix_1 = '';
  this.suffix_2 = '';
}

defineClass(89, 1, {}, Collectors$lambda$15$Type);
_.get_0 = function get_10(){
  return new StringJoiner(this.delimiter_0, this.prefix_1, this.suffix_2);
}
;
var Ljava_util_stream_Collectors$lambda$15$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$15$Type', 89);
function Collectors$lambda$50$Type(){
}

defineClass(73, 1, {}, Collectors$lambda$50$Type);
var Ljava_util_stream_Collectors$lambda$50$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$50$Type', 73);
function Collectors$lambda$51$Type(){
}

defineClass(150, $wnd.Function, $intern_7, Collectors$lambda$51$Type);
_.apply_0 = function apply_6(arg0){
  return castTo(arg0, 31);
}
;
function Stream$0methodref$close$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(75, 1, {}, Stream$0methodref$close$Type);
_.run = function run_0(){
  $close(this.$$outer_0);
}
;
var Ljava_util_stream_Stream$0methodref$close$Type_2_classLit = createForClass('java.util.stream', 'Stream/0methodref$close$Type', 75);
function Stream$1methodref$close$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(76, 1, {}, Stream$1methodref$close$Type);
_.run = function run_1(){
  $close(this.$$outer_0);
}
;
var Ljava_util_stream_Stream$1methodref$close$Type_2_classLit = createForClass('java.util.stream', 'Stream/1methodref$close$Type', 76);
function $advanceToNextSpliterator(this$static){
  while (!this$static.next_0) {
    if (!$tryAdvance_0(this$static.val$spliteratorOfStreams4, new Stream$2$lambda$0$Type(this$static))) {
      return false;
    }
  }
  return true;
}

function $lambda$0_0(this$static, n_0){
  !!n_0 && (this$static.next_0 = ($terminate(n_0) , n_0.spliterator));
}

function Stream$2(val$spliteratorOfStreams){
  this.val$spliteratorOfStreams4 = val$spliteratorOfStreams;
  Spliterators$AbstractSpliterator.call(this, {l:$intern_11, m:$intern_11, h:524287}, 0);
}

defineClass(74, 50, {}, Stream$2);
_.tryAdvance = function tryAdvance_1(action){
  while ($advanceToNextSpliterator(this)) {
    if (this.next_0.tryAdvance(action)) {
      return true;
    }
     else {
      this.next_0 = null;
    }
  }
  return false;
}
;
var Ljava_util_stream_Stream$2_2_classLit = createForClass('java.util.stream', 'Stream/2', 74);
function Stream$2$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(77, 1, $intern_9, Stream$2$lambda$0$Type);
_.accept = function accept_5(arg0){
  $lambda$0_0(this.$$outer_0, arg0);
}
;
_.andThen = function andThen_2(after){
  return requireNonNull(after) , new Consumer$lambda$0$Type(this, after);
}
;
var Ljava_util_stream_Stream$2$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'Stream/2/lambda$0$Type', 77);
function TerminatableStream$lambda$0$Type(throwables_0){
  this.throwables_0 = throwables_0;
}

defineClass(109, 1, $intern_9, TerminatableStream$lambda$0$Type);
_.accept = function accept_9(arg0){
  lambda$0(this.throwables_0, arg0);
}
;
_.andThen = function andThen_6(after){
  return requireNonNull(after) , new Consumer$lambda$0$Type(this, after);
}
;
var Ljava_util_stream_TerminatableStream$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'TerminatableStream/lambda$0$Type', 109);
_ = provide('app.client.JsUtil');
_.asList = asList;
_.asSet = asSet;
_.emptyList = emptyList;
_.emptyOptional = emptyOptional;
_.now = now_1;
_.optionalOf = optionalOf;
_ = provide('app.shared.util.Futures');
_.incomplete = incomplete;
_.of = of_0;
_ = provide('java.io.Serializable');
_.$isInstance = $isInstance;
$clinit_Boolean();
_ = provide('java.lang.Boolean');
_.$isInstance = $isInstance_0;
_ = provide('java.lang.CharSequence');
_.$isInstance = $isInstance_1;
_ = provide('java.lang.Cloneable');
_.$isInstance = $isInstance_2;
_ = provide('java.lang.Comparable');
_.$isInstance = $isInstance_3;
_ = provide('java.lang.Double');
_.$isInstance = $isInstance_5;
_ = provide('java.lang.Number');
_.$isInstance = $isInstance_4;
_ = provide('java.lang.String');
_.$isInstance = $isInstance_6;
_ = provide('java.lang.Throwable');
_.of = of_1;
_ = provide('java.net.ConnectException', ConnectException);
_ = provide('java.nio.file.Paths');
_.get = get_0;
$clinit_Optional();
_ = provide('java.util.Optional');
_.empty = empty;
_.of = of_2;
var $entry = ($clinit_Impl() , entry_0);
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['user.agent', 'safari']]]);
if (applib) applib.onScriptLoad(gwtOnLoad);})();