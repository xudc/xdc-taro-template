"use strict";
const DEFAULT_EMPTY_ARRAY = "[]";
const NO_DEFAULT_VALUE = "";
const DEFAULT_TRUE = "!0";
const DEFAULT_FALSE = "!1";
const touchEvents = {
  bindTouchStart: NO_DEFAULT_VALUE,
  bindTouchMove: NO_DEFAULT_VALUE,
  bindTouchEnd: NO_DEFAULT_VALUE,
  bindTouchCancel: NO_DEFAULT_VALUE,
  bindLongTap: NO_DEFAULT_VALUE
};
const animation = {
  animation: NO_DEFAULT_VALUE,
  bindAnimationStart: NO_DEFAULT_VALUE,
  bindAnimationIteration: NO_DEFAULT_VALUE,
  bindAnimationEnd: NO_DEFAULT_VALUE,
  bindTransitionEnd: NO_DEFAULT_VALUE
};
function singleQuote(s) {
  return `'${s}'`;
}
const View = Object.assign(Object.assign({ "hover-class": singleQuote("none"), "hover-stop-propagation": DEFAULT_FALSE, "hover-start-time": "50", "hover-stay-time": "400" }, touchEvents), animation);
const Icon = {
  type: NO_DEFAULT_VALUE,
  size: "23",
  color: NO_DEFAULT_VALUE
};
const MapComp = Object.assign({ longitude: NO_DEFAULT_VALUE, latitude: NO_DEFAULT_VALUE, scale: "16", markers: DEFAULT_EMPTY_ARRAY, covers: NO_DEFAULT_VALUE, polyline: DEFAULT_EMPTY_ARRAY, circles: DEFAULT_EMPTY_ARRAY, controls: DEFAULT_EMPTY_ARRAY, "include-points": DEFAULT_EMPTY_ARRAY, "show-location": NO_DEFAULT_VALUE, "layer-style": "1", bindMarkerTap: NO_DEFAULT_VALUE, bindControlTap: NO_DEFAULT_VALUE, bindCalloutTap: NO_DEFAULT_VALUE, bindUpdated: NO_DEFAULT_VALUE }, touchEvents);
const Progress = {
  percent: NO_DEFAULT_VALUE,
  "stroke-width": "6",
  color: singleQuote("#09BB07"),
  activeColor: singleQuote("#09BB07"),
  backgroundColor: singleQuote("#EBEBEB"),
  active: DEFAULT_FALSE,
  "active-mode": singleQuote("backwards"),
  "show-info": DEFAULT_FALSE
};
const RichText = {
  nodes: DEFAULT_EMPTY_ARRAY
};
const Text$1 = Object.assign({ selectable: DEFAULT_FALSE, space: NO_DEFAULT_VALUE, decode: DEFAULT_FALSE }, touchEvents);
const Button = Object.assign({ size: singleQuote("default"), type: NO_DEFAULT_VALUE, plain: DEFAULT_FALSE, disabled: NO_DEFAULT_VALUE, loading: DEFAULT_FALSE, "form-type": NO_DEFAULT_VALUE, "open-type": NO_DEFAULT_VALUE, "hover-class": singleQuote("button-hover"), "hover-stop-propagation": DEFAULT_FALSE, "hover-start-time": "20", "hover-stay-time": "70", name: NO_DEFAULT_VALUE, bindagreeprivacyauthorization: NO_DEFAULT_VALUE }, touchEvents);
const Checkbox = {
  value: NO_DEFAULT_VALUE,
  disabled: NO_DEFAULT_VALUE,
  checked: DEFAULT_FALSE,
  color: singleQuote("#09BB07"),
  name: NO_DEFAULT_VALUE
};
const CheckboxGroup = {
  bindChange: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
const Form = {
  "report-submit": DEFAULT_FALSE,
  bindSubmit: NO_DEFAULT_VALUE,
  bindReset: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
const Input = {
  value: NO_DEFAULT_VALUE,
  type: singleQuote(NO_DEFAULT_VALUE),
  password: DEFAULT_FALSE,
  placeholder: NO_DEFAULT_VALUE,
  "placeholder-style": NO_DEFAULT_VALUE,
  "placeholder-class": singleQuote("input-placeholder"),
  disabled: NO_DEFAULT_VALUE,
  maxlength: "140",
  "cursor-spacing": "0",
  focus: DEFAULT_FALSE,
  "confirm-type": singleQuote("done"),
  "confirm-hold": DEFAULT_FALSE,
  cursor: "-1",
  "selection-start": "-1",
  "selection-end": "-1",
  bindInput: NO_DEFAULT_VALUE,
  bindFocus: NO_DEFAULT_VALUE,
  bindBlur: NO_DEFAULT_VALUE,
  bindConfirm: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
const Label = Object.assign({ for: NO_DEFAULT_VALUE, name: NO_DEFAULT_VALUE }, touchEvents);
const Picker = {
  mode: singleQuote("selector"),
  disabled: NO_DEFAULT_VALUE,
  range: NO_DEFAULT_VALUE,
  "range-key": NO_DEFAULT_VALUE,
  value: NO_DEFAULT_VALUE,
  start: NO_DEFAULT_VALUE,
  end: NO_DEFAULT_VALUE,
  fields: singleQuote("day"),
  "custom-item": NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE,
  bindCancel: NO_DEFAULT_VALUE,
  bindChange: NO_DEFAULT_VALUE,
  bindColumnChange: NO_DEFAULT_VALUE
};
const PickerView = {
  value: NO_DEFAULT_VALUE,
  "indicator-style": NO_DEFAULT_VALUE,
  "indicator-class": NO_DEFAULT_VALUE,
  "mask-style": NO_DEFAULT_VALUE,
  "mask-class": NO_DEFAULT_VALUE,
  bindChange: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
const PickerViewColumn = {
  name: NO_DEFAULT_VALUE
};
const Radio = {
  value: NO_DEFAULT_VALUE,
  checked: DEFAULT_FALSE,
  disabled: NO_DEFAULT_VALUE,
  color: singleQuote("#09BB07"),
  name: NO_DEFAULT_VALUE
};
const RadioGroup = {
  bindChange: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
const Slider = {
  min: "0",
  max: "100",
  step: "1",
  disabled: NO_DEFAULT_VALUE,
  value: "0",
  activeColor: singleQuote("#1aad19"),
  backgroundColor: singleQuote("#e9e9e9"),
  "block-size": "28",
  "block-color": singleQuote("#ffffff"),
  "show-value": DEFAULT_FALSE,
  bindChange: NO_DEFAULT_VALUE,
  bindChanging: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
const Switch = {
  checked: DEFAULT_FALSE,
  disabled: NO_DEFAULT_VALUE,
  type: singleQuote("switch"),
  color: singleQuote("#04BE02"),
  bindChange: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
const Textarea = {
  value: NO_DEFAULT_VALUE,
  placeholder: NO_DEFAULT_VALUE,
  "placeholder-style": NO_DEFAULT_VALUE,
  "placeholder-class": singleQuote("textarea-placeholder"),
  disabled: NO_DEFAULT_VALUE,
  maxlength: "140",
  "auto-focus": DEFAULT_FALSE,
  focus: DEFAULT_FALSE,
  "auto-height": DEFAULT_FALSE,
  fixed: DEFAULT_FALSE,
  "cursor-spacing": "0",
  cursor: "-1",
  "selection-start": "-1",
  "selection-end": "-1",
  bindFocus: NO_DEFAULT_VALUE,
  bindBlur: NO_DEFAULT_VALUE,
  bindLineChange: NO_DEFAULT_VALUE,
  bindInput: NO_DEFAULT_VALUE,
  bindConfirm: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
const CoverImage = {
  src: NO_DEFAULT_VALUE,
  bindLoad: "eh",
  bindError: "eh"
};
const CoverView = Object.assign({ "scroll-top": DEFAULT_FALSE }, touchEvents);
const MovableArea = {
  "scale-area": DEFAULT_FALSE
};
const MovableView = Object.assign(Object.assign({ direction: "none", inertia: DEFAULT_FALSE, "out-of-bounds": DEFAULT_FALSE, x: NO_DEFAULT_VALUE, y: NO_DEFAULT_VALUE, damping: "20", friction: "2", disabled: NO_DEFAULT_VALUE, scale: DEFAULT_FALSE, "scale-min": "0.5", "scale-max": "10", "scale-value": "1", bindChange: NO_DEFAULT_VALUE, bindScale: NO_DEFAULT_VALUE, bindHTouchMove: NO_DEFAULT_VALUE, bindVTouchMove: NO_DEFAULT_VALUE, width: singleQuote("10px"), height: singleQuote("10px") }, touchEvents), animation);
const ScrollView = Object.assign(Object.assign({ "scroll-x": DEFAULT_FALSE, "scroll-y": DEFAULT_FALSE, "upper-threshold": "50", "lower-threshold": "50", "scroll-top": NO_DEFAULT_VALUE, "scroll-left": NO_DEFAULT_VALUE, "scroll-into-view": NO_DEFAULT_VALUE, "scroll-with-animation": DEFAULT_FALSE, "enable-back-to-top": DEFAULT_FALSE, bindScrollToUpper: NO_DEFAULT_VALUE, bindScrollToLower: NO_DEFAULT_VALUE, bindScroll: NO_DEFAULT_VALUE }, touchEvents), animation);
const Swiper = Object.assign({ "indicator-dots": DEFAULT_FALSE, "indicator-color": singleQuote("rgba(0, 0, 0, .3)"), "indicator-active-color": singleQuote("#000000"), autoplay: DEFAULT_FALSE, current: "0", interval: "5000", duration: "500", circular: DEFAULT_FALSE, vertical: DEFAULT_FALSE, "previous-margin": singleQuote("0px"), "next-margin": singleQuote("0px"), "display-multiple-items": "1", bindChange: NO_DEFAULT_VALUE, bindTransition: NO_DEFAULT_VALUE, bindAnimationFinish: NO_DEFAULT_VALUE }, touchEvents);
const SwiperItem = {
  "item-id": NO_DEFAULT_VALUE
};
const Navigator = {
  url: NO_DEFAULT_VALUE,
  "open-type": singleQuote("navigate"),
  delta: "1",
  "hover-class": singleQuote("navigator-hover"),
  "hover-stop-propagation": DEFAULT_FALSE,
  "hover-start-time": "50",
  "hover-stay-time": "600",
  bindSuccess: NO_DEFAULT_VALUE,
  bindFail: NO_DEFAULT_VALUE,
  bindComplete: NO_DEFAULT_VALUE
};
const Audio = {
  id: NO_DEFAULT_VALUE,
  src: NO_DEFAULT_VALUE,
  loop: DEFAULT_FALSE,
  controls: DEFAULT_FALSE,
  poster: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE,
  author: NO_DEFAULT_VALUE,
  bindError: NO_DEFAULT_VALUE,
  bindPlay: NO_DEFAULT_VALUE,
  bindPause: NO_DEFAULT_VALUE,
  bindTimeUpdate: NO_DEFAULT_VALUE,
  bindEnded: NO_DEFAULT_VALUE
};
const Camera = {
  "device-position": singleQuote("back"),
  flash: singleQuote("auto"),
  bindStop: NO_DEFAULT_VALUE,
  bindError: NO_DEFAULT_VALUE
};
const Image = Object.assign({ src: NO_DEFAULT_VALUE, mode: singleQuote("scaleToFill"), "lazy-load": DEFAULT_FALSE, bindError: NO_DEFAULT_VALUE, bindLoad: NO_DEFAULT_VALUE }, touchEvents);
const LivePlayer = Object.assign({ src: NO_DEFAULT_VALUE, autoplay: DEFAULT_FALSE, muted: DEFAULT_FALSE, orientation: singleQuote("vertical"), "object-fit": singleQuote("contain"), "background-mute": DEFAULT_FALSE, "min-cache": "1", "max-cache": "3", bindStateChange: NO_DEFAULT_VALUE, bindFullScreenChange: NO_DEFAULT_VALUE, bindNetStatus: NO_DEFAULT_VALUE }, animation);
const Video = Object.assign({ src: NO_DEFAULT_VALUE, duration: NO_DEFAULT_VALUE, controls: DEFAULT_TRUE, "danmu-list": NO_DEFAULT_VALUE, "danmu-btn": NO_DEFAULT_VALUE, "enable-danmu": NO_DEFAULT_VALUE, autoplay: DEFAULT_FALSE, loop: DEFAULT_FALSE, muted: DEFAULT_FALSE, "initial-time": "0", "page-gesture": DEFAULT_FALSE, direction: NO_DEFAULT_VALUE, "show-progress": DEFAULT_TRUE, "show-fullscreen-btn": DEFAULT_TRUE, "show-play-btn": DEFAULT_TRUE, "show-center-play-btn": DEFAULT_TRUE, "enable-progress-gesture": DEFAULT_TRUE, "object-fit": singleQuote("contain"), poster: NO_DEFAULT_VALUE, "show-mute-btn": DEFAULT_FALSE, bindPlay: NO_DEFAULT_VALUE, bindPause: NO_DEFAULT_VALUE, bindEnded: NO_DEFAULT_VALUE, bindTimeUpdate: NO_DEFAULT_VALUE, bindFullScreenChange: NO_DEFAULT_VALUE, bindWaiting: NO_DEFAULT_VALUE, bindError: NO_DEFAULT_VALUE }, animation);
const Canvas = Object.assign({ "canvas-id": NO_DEFAULT_VALUE, "disable-scroll": DEFAULT_FALSE, bindError: NO_DEFAULT_VALUE }, touchEvents);
const Ad = {
  "unit-id": NO_DEFAULT_VALUE,
  "ad-intervals": NO_DEFAULT_VALUE,
  bindLoad: NO_DEFAULT_VALUE,
  bindError: NO_DEFAULT_VALUE,
  bindClose: NO_DEFAULT_VALUE
};
const WebView = {
  src: NO_DEFAULT_VALUE,
  bindMessage: NO_DEFAULT_VALUE,
  bindLoad: NO_DEFAULT_VALUE,
  bindError: NO_DEFAULT_VALUE
};
const Block = {};
const SlotView = {
  name: NO_DEFAULT_VALUE
};
const Slot = {
  name: NO_DEFAULT_VALUE
};
const NativeSlot = {
  name: NO_DEFAULT_VALUE
};
const Script = {};
const internalComponents = {
  View,
  Icon,
  Progress,
  RichText,
  Text: Text$1,
  Button,
  Checkbox,
  CheckboxGroup,
  Form,
  Input,
  Label,
  Picker,
  PickerView,
  PickerViewColumn,
  Radio,
  RadioGroup,
  Slider,
  Switch,
  CoverImage,
  Textarea,
  CoverView,
  MovableArea,
  MovableView,
  ScrollView,
  Swiper,
  SwiperItem,
  Navigator,
  Audio,
  Camera,
  Image,
  LivePlayer,
  Video,
  Canvas,
  Ad,
  WebView,
  Block,
  Map: MapComp,
  Slot,
  SlotView,
  NativeSlot,
  Script
};
const controlledComponent = /* @__PURE__ */ new Set([
  "input",
  "checkbox",
  "picker",
  "picker-view",
  "radio",
  "slider",
  "switch",
  "textarea"
]);
var PLATFORM_TYPE;
(function(PLATFORM_TYPE2) {
  PLATFORM_TYPE2["MINI"] = "mini";
  PLATFORM_TYPE2["ASCF"] = "ascf";
  PLATFORM_TYPE2["WEB"] = "web";
  PLATFORM_TYPE2["RN"] = "rn";
  PLATFORM_TYPE2["HARMONY"] = "harmony";
  PLATFORM_TYPE2["QUICK"] = "quickapp";
})(PLATFORM_TYPE || (PLATFORM_TYPE = {}));
({
  h5: {
    type: PLATFORM_TYPE.WEB
  },
  harmony: {
    type: PLATFORM_TYPE.HARMONY
  },
  ascf: {
    type: PLATFORM_TYPE.ASCF
  },
  mini: {
    type: PLATFORM_TYPE.MINI
  },
  rn: {
    type: PLATFORM_TYPE.RN
  },
  quickapp: {
    type: PLATFORM_TYPE.QUICK
  }
});
class Events {
  constructor(opts) {
    var _a2;
    this.callbacks = (_a2 = opts === null || opts === void 0 ? void 0 : opts.callbacks) !== null && _a2 !== void 0 ? _a2 : {};
  }
  on(eventName, callback, context) {
    let event, tail, _eventName;
    if (!callback) {
      return this;
    }
    if (typeof eventName === "symbol") {
      _eventName = [eventName];
    } else {
      _eventName = eventName.split(Events.eventSplitter);
    }
    this.callbacks || (this.callbacks = {});
    const calls = this.callbacks;
    while (event = _eventName.shift()) {
      const list = calls[event];
      const node = list ? list.tail : {};
      node.next = tail = {};
      node.context = context;
      node.callback = callback;
      calls[event] = {
        tail,
        next: list ? list.next : node
      };
    }
    return this;
  }
  once(events, callback, context) {
    const wrapper = (...args) => {
      callback.apply(this, args);
      this.off(events, wrapper, context);
    };
    this.on(events, wrapper, context);
    return this;
  }
  off(events, callback, context) {
    let event, calls, _events;
    if (!(calls = this.callbacks)) {
      return this;
    }
    if (!(events || callback || context)) {
      delete this.callbacks;
      return this;
    }
    if (typeof events === "symbol") {
      _events = [events];
    } else {
      _events = events ? events.split(Events.eventSplitter) : Object.keys(calls);
    }
    while (event = _events.shift()) {
      let node = calls[event];
      delete calls[event];
      if (!node || !(callback || context)) {
        continue;
      }
      const tail = node.tail;
      while ((node = node.next) !== tail) {
        const cb = node.callback;
        const ctx = node.context;
        if (callback && cb !== callback || context && ctx !== context) {
          this.on(event, cb, ctx);
        }
      }
    }
    return this;
  }
  trigger(events, ...args) {
    let event, node, calls, _events;
    if (!(calls = this.callbacks)) {
      return this;
    }
    if (typeof events === "symbol") {
      _events = [events];
    } else {
      _events = events.split(Events.eventSplitter);
    }
    while (event = _events.shift()) {
      if (node = calls[event]) {
        const tail = node.tail;
        while ((node = node.next) !== tail) {
          node.callback.apply(node.context || this, args);
        }
      }
    }
    return this;
  }
}
Events.eventSplitter = ",";
class PageEvts extends Events {
  constructor() {
    super(...arguments);
    this.exeList = [];
  }
  on(eventName, callback) {
    super.on(eventName, callback, this);
    this.exeList = this.exeList.reduce((prev, item) => {
      if (item.eventName === eventName) {
        super.trigger(item.eventName, item.data);
      } else {
        prev.push(item);
      }
      return prev;
    }, []);
    return this;
  }
  emit(events, data) {
    routeChannel.trigger(events, data);
  }
}
const pageChannel = new PageEvts();
class RouteEvts extends Events {
  emit(events, data) {
    pageChannel.off(events);
    pageChannel.exeList.push({
      eventName: events,
      data
    });
  }
  addEvents(events) {
    if (!events || typeof events !== "object")
      return;
    Object.keys(events).forEach((key) => {
      this.off(key);
      this.on(key, events[key], this);
    });
  }
}
const routeChannel = new RouteEvts();
function isString$1(o) {
  return typeof o === "string";
}
function isUndefined(o) {
  return typeof o === "undefined";
}
function isNull(o) {
  return o === null;
}
function isObject$1(o) {
  return o !== null && typeof o === "object";
}
function isFunction$1(o) {
  return typeof o === "function";
}
function isNumber(o) {
  if (Number.isFinite)
    return Number.isFinite(o);
  return typeof o === "number";
}
const isArray$1 = Array.isArray;
var HOOK_TYPE;
(function(HOOK_TYPE2) {
  HOOK_TYPE2[HOOK_TYPE2["SINGLE"] = 0] = "SINGLE";
  HOOK_TYPE2[HOOK_TYPE2["MULTI"] = 1] = "MULTI";
  HOOK_TYPE2[HOOK_TYPE2["WATERFALL"] = 2] = "WATERFALL";
})(HOOK_TYPE || (HOOK_TYPE = {}));
const defaultMiniLifecycle = {
  app: [
    "onLaunch",
    "onShow",
    "onHide"
  ],
  page: [
    "onLoad",
    "onUnload",
    "onReady",
    "onShow",
    "onHide",
    [
      "onPullDownRefresh",
      "onReachBottom",
      "onPageScroll",
      "onResize",
      "defer:onTabItemTap",
      // defer: 需要等页面组件挂载后再调用
      "onTitleClick",
      "onOptionMenuClick",
      "onPopMenuClick",
      "onPullIntercept",
      "onAddToFavorites"
    ],
    [
      "onShareAppMessage",
      "onShareTimeline"
    ]
  ],
  component: [
    "attached",
    "detached"
  ]
};
function TaroHook(type, initial) {
  return {
    type,
    initial: initial || null
  };
}
class TaroHooks extends Events {
  constructor(hooks2, opts) {
    super(opts);
    this.hooks = hooks2;
    for (const hookName in hooks2) {
      const { initial } = hooks2[hookName];
      if (isFunction$1(initial)) {
        this.on(hookName, initial);
      }
    }
  }
  tapOneOrMany(hookName, callback) {
    const list = isFunction$1(callback) ? [callback] : callback;
    list.forEach((cb) => this.on(hookName, cb));
  }
  tap(hookName, callback) {
    const hooks2 = this.hooks;
    const { type, initial } = hooks2[hookName];
    if (type === HOOK_TYPE.SINGLE) {
      this.off(hookName);
      this.on(hookName, isFunction$1(callback) ? callback : callback[callback.length - 1]);
    } else {
      initial && this.off(hookName, initial);
      this.tapOneOrMany(hookName, callback);
    }
  }
  call(hookName, ...rest) {
    var _a2;
    const hook = this.hooks[hookName];
    if (!hook)
      return;
    const { type } = hook;
    const calls = this.callbacks;
    if (!calls)
      return;
    const list = calls[hookName];
    if (list) {
      const tail = list.tail;
      let node = list.next;
      let args = rest;
      let res;
      while (node !== tail) {
        res = (_a2 = node.callback) === null || _a2 === void 0 ? void 0 : _a2.apply(node.context || this, args);
        if (type === HOOK_TYPE.WATERFALL) {
          const params = [res];
          args = params;
        }
        node = node.next;
      }
      return res;
    }
  }
  isExist(hookName) {
    var _a2;
    return Boolean((_a2 = this.callbacks) === null || _a2 === void 0 ? void 0 : _a2[hookName]);
  }
}
const hooks = new TaroHooks({
  getMiniLifecycle: TaroHook(HOOK_TYPE.SINGLE, (defaultConfig) => defaultConfig),
  getMiniLifecycleImpl: TaroHook(HOOK_TYPE.SINGLE, function() {
    return this.call("getMiniLifecycle", defaultMiniLifecycle);
  }),
  getLifecycle: TaroHook(HOOK_TYPE.SINGLE, (instance, lifecycle) => instance[lifecycle]),
  modifyRecursiveComponentConfig: TaroHook(HOOK_TYPE.SINGLE, (defaultConfig) => defaultConfig),
  getPathIndex: TaroHook(HOOK_TYPE.SINGLE, (indexOfNode) => `[${indexOfNode}]`),
  getEventCenter: TaroHook(HOOK_TYPE.SINGLE, (Events2) => new Events2()),
  isBubbleEvents: TaroHook(HOOK_TYPE.SINGLE, (eventName) => {
    const BUBBLE_EVENTS = /* @__PURE__ */ new Set([
      "touchstart",
      "touchmove",
      "touchcancel",
      "touchend",
      "touchforcechange",
      "tap",
      "longpress",
      "longtap",
      "transitionend",
      "animationstart",
      "animationiteration",
      "animationend"
    ]);
    return BUBBLE_EVENTS.has(eventName);
  }),
  getSpecialNodes: TaroHook(HOOK_TYPE.SINGLE, () => ["view", "text", "image"]),
  onRemoveAttribute: TaroHook(HOOK_TYPE.SINGLE),
  batchedEventUpdates: TaroHook(HOOK_TYPE.SINGLE),
  mergePageInstance: TaroHook(HOOK_TYPE.SINGLE),
  modifyPageObject: TaroHook(HOOK_TYPE.SINGLE),
  createPullDownComponent: TaroHook(HOOK_TYPE.SINGLE),
  getDOMNode: TaroHook(HOOK_TYPE.SINGLE),
  modifyHydrateData: TaroHook(HOOK_TYPE.SINGLE),
  transferHydrateData: TaroHook(HOOK_TYPE.SINGLE),
  modifySetAttrPayload: TaroHook(HOOK_TYPE.SINGLE),
  modifyRmAttrPayload: TaroHook(HOOK_TYPE.SINGLE),
  onAddEvent: TaroHook(HOOK_TYPE.SINGLE),
  proxyToRaw: TaroHook(HOOK_TYPE.SINGLE, function(proxyObj) {
    return proxyObj;
  }),
  modifyMpEvent: TaroHook(HOOK_TYPE.MULTI),
  modifyMpEventImpl: TaroHook(HOOK_TYPE.SINGLE, function(e) {
    try {
      this.call("modifyMpEvent", e);
    } catch (error) {
      console.warn("[Taro modifyMpEvent hook Error]: " + (error === null || error === void 0 ? void 0 : error.message));
    }
  }),
  injectNewStyleProperties: TaroHook(HOOK_TYPE.SINGLE),
  modifyTaroEvent: TaroHook(HOOK_TYPE.MULTI),
  dispatchTaroEvent: TaroHook(HOOK_TYPE.SINGLE, (e, node) => {
    node.dispatchEvent(e);
  }),
  dispatchTaroEventFinish: TaroHook(HOOK_TYPE.MULTI),
  modifyTaroEventReturn: TaroHook(HOOK_TYPE.SINGLE, () => void 0),
  modifyDispatchEvent: TaroHook(HOOK_TYPE.MULTI),
  initNativeApi: TaroHook(HOOK_TYPE.MULTI),
  patchElement: TaroHook(HOOK_TYPE.MULTI),
  modifyAddEventListener: TaroHook(HOOK_TYPE.SINGLE),
  modifyRemoveEventListener: TaroHook(HOOK_TYPE.SINGLE),
  getMemoryLevel: TaroHook(HOOK_TYPE.SINGLE)
});
const EMPTY_OBJ$1 = {};
function toDashed(s) {
  return s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
function toCamelCase(s) {
  let camel = "";
  let nextCap = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "-") {
      camel += nextCap ? s[i].toUpperCase() : s[i];
      nextCap = false;
    } else {
      nextCap = true;
    }
  }
  return camel;
}
function ensure(condition, msg2) {
  if (!condition) {
    {
      const reportIssue = "\n如有疑问，请提交 issue 至：https://github.com/nervjs/taro/issues";
      throw new Error(msg2 + reportIssue);
    }
  }
}
function warn$3(condition, msg2) {
  {
    if (condition) {
      console.warn(`[taro warn] ${msg2}`);
    }
  }
}
let _uniqueId = 1;
const _loadTime = (/* @__PURE__ */ new Date()).getTime().toString();
function getUniqueKey() {
  return _loadTime + _uniqueId++;
}
function mergeInternalComponents(components2) {
  Object.keys(components2).forEach((name) => {
    if (name in internalComponents) {
      Object.assign(internalComponents[name], components2[name]);
    } else {
      internalComponents[name] = components2[name];
    }
  });
  return internalComponents;
}
function getComponentsAlias$1(origin) {
  const mapping = {};
  const viewAttrs = origin.View;
  const extraList = {
    "#text": {},
    StaticView: viewAttrs,
    StaticImage: origin.Image,
    StaticText: origin.Text,
    PureView: viewAttrs,
    CatchView: viewAttrs,
    ClickView: viewAttrs
  };
  origin = Object.assign(Object.assign({}, origin), extraList);
  Object.keys(origin).sort((a, b) => {
    const reg = /^(Static|Pure|Catch|Click)*(View|Image|Text)$/;
    const isACommonly = reg.test(a);
    const isBCommonly = reg.test(b);
    if (isACommonly && isBCommonly) {
      return a > b ? 1 : -1;
    } else if (isACommonly) {
      return -1;
    } else if (isBCommonly) {
      return 1;
    } else {
      return a >= b ? 1 : -1;
    }
  }).forEach((key, num) => {
    const obj = {
      _num: String(num)
    };
    Object.keys(origin[key]).filter((attr) => !/^bind/.test(attr) && !["focus", "blur"].includes(attr)).sort().forEach((attr, index) => {
      obj[toCamelCase(attr)] = "p" + index;
    });
    mapping[toDashed(key)] = obj;
  });
  return mapping;
}
function mergeReconciler(hostConfig2, hooksForTest) {
  const obj = hooksForTest || hooks;
  const keys = Object.keys(hostConfig2);
  keys.forEach((key) => {
    obj.tap(key, hostConfig2[key]);
  });
}
function nonsupport(api) {
  return function() {
    console.warn(`小程序暂不支持 ${api}`);
  };
}
function setUniqueKeyToRoute(key, obj) {
  const routerParamsPrivateKey = "__key_";
  const useDataCacheApis = [
    "navigateTo",
    "redirectTo",
    "reLaunch",
    "switchTab"
  ];
  if (useDataCacheApis.indexOf(key) > -1) {
    const url = obj.url = obj.url || "";
    const hasMark = url.indexOf("?") > -1;
    const cacheKey = getUniqueKey();
    obj.url += (hasMark ? "&" : "?") + `${routerParamsPrivateKey}=${cacheKey}`;
  }
}
const needPromiseApis$1 = /* @__PURE__ */ new Set([
  "addPhoneContact",
  "authorize",
  "canvasGetImageData",
  "canvasPutImageData",
  "canvasToTempFilePath",
  "checkSession",
  "chooseAddress",
  "chooseImage",
  "chooseInvoiceTitle",
  "chooseLocation",
  "chooseVideo",
  "clearStorage",
  "closeBLEConnection",
  "closeBluetoothAdapter",
  "closeSocket",
  "compressImage",
  "connectSocket",
  "createBLEConnection",
  "downloadFile",
  "exitMiniProgram",
  "getAvailableAudioSources",
  "getBLEDeviceCharacteristics",
  "getBLEDeviceServices",
  "getBatteryInfo",
  "getBeacons",
  "getBluetoothAdapterState",
  "getBluetoothDevices",
  "getClipboardData",
  "getConnectedBluetoothDevices",
  "getConnectedWifi",
  "getExtConfig",
  "getFileInfo",
  "getImageInfo",
  "getLocation",
  "getNetworkType",
  "getSavedFileInfo",
  "getSavedFileList",
  "getScreenBrightness",
  "getSetting",
  "getStorage",
  "getStorageInfo",
  "getSystemInfo",
  "getUserInfo",
  "getWifiList",
  "hideHomeButton",
  "hideShareMenu",
  "hideTabBar",
  "hideTabBarRedDot",
  "loadFontFace",
  "login",
  "makePhoneCall",
  "navigateBack",
  "navigateBackMiniProgram",
  "navigateTo",
  "navigateToBookshelf",
  "navigateToMiniProgram",
  "notifyBLECharacteristicValueChange",
  "hideKeyboard",
  "hideLoading",
  "hideNavigationBarLoading",
  "hideToast",
  "openBluetoothAdapter",
  "openDocument",
  "openLocation",
  "openSetting",
  "pageScrollTo",
  "previewImage",
  "queryBookshelf",
  "reLaunch",
  "readBLECharacteristicValue",
  "redirectTo",
  "removeSavedFile",
  "removeStorage",
  "removeTabBarBadge",
  "requestSubscribeMessage",
  "saveFile",
  "saveImageToPhotosAlbum",
  "saveVideoToPhotosAlbum",
  "scanCode",
  "sendSocketMessage",
  "setBackgroundColor",
  "setBackgroundTextStyle",
  "setClipboardData",
  "setEnableDebug",
  "setInnerAudioOption",
  "setKeepScreenOn",
  "setNavigationBarColor",
  "setNavigationBarTitle",
  "setScreenBrightness",
  "setStorage",
  "setTabBarBadge",
  "setTabBarItem",
  "setTabBarStyle",
  "showActionSheet",
  "showFavoriteGuide",
  "showLoading",
  "showModal",
  "showShareMenu",
  "showTabBar",
  "showTabBarRedDot",
  "showToast",
  "startBeaconDiscovery",
  "startBluetoothDevicesDiscovery",
  "startDeviceMotionListening",
  "startPullDownRefresh",
  "stopBeaconDiscovery",
  "stopBluetoothDevicesDiscovery",
  "stopCompass",
  "startCompass",
  "startAccelerometer",
  "stopAccelerometer",
  "showNavigationBarLoading",
  "stopDeviceMotionListening",
  "stopPullDownRefresh",
  "switchTab",
  "uploadFile",
  "vibrateLong",
  "vibrateShort",
  "writeBLECharacteristicValue"
]);
function getCanIUseWebp(taro2) {
  return function() {
    var _a2;
    const res = (_a2 = taro2.getSystemInfoSync) === null || _a2 === void 0 ? void 0 : _a2.call(taro2);
    if (!res) {
      {
        console.error("不支持 API canIUseWebp");
      }
      return false;
    }
    const { platform } = res;
    const platformLower = platform.toLowerCase();
    if (platformLower === "android" || platformLower === "devtools") {
      return true;
    }
    return false;
  };
}
function getNormalRequest(global2) {
  return function request(options2) {
    options2 = options2 ? isString$1(options2) ? { url: options2 } : options2 : {};
    const originSuccess = options2.success;
    const originFail = options2.fail;
    const originComplete = options2.complete;
    let requestTask;
    const p2 = new Promise((resolve, reject) => {
      options2.success = (res) => {
        originSuccess && originSuccess(res);
        resolve(res);
      };
      options2.fail = (res) => {
        originFail && originFail(res);
        reject(res);
      };
      options2.complete = (res) => {
        originComplete && originComplete(res);
      };
      requestTask = global2.request(options2);
    });
    equipTaskMethodsIntoPromise(requestTask, p2);
    p2.abort = (cb) => {
      cb && cb();
      if (requestTask) {
        requestTask.abort();
      }
      return p2;
    };
    return p2;
  };
}
function processApis(taro2, global2, config = {}) {
  const patchNeedPromiseApis = config.needPromiseApis || [];
  const _needPromiseApis = /* @__PURE__ */ new Set([...patchNeedPromiseApis, ...needPromiseApis$1]);
  const preserved = [
    "getEnv",
    "interceptors",
    "Current",
    "getCurrentInstance",
    "options",
    "nextTick",
    "eventCenter",
    "Events",
    "preload",
    "webpackJsonp"
  ];
  const apis = new Set(!config.isOnlyPromisify ? Object.keys(global2).filter((api) => preserved.indexOf(api) === -1) : patchNeedPromiseApis);
  if (config.modifyApis) {
    config.modifyApis(apis);
  }
  apis.forEach((key) => {
    if (_needPromiseApis.has(key)) {
      const originKey = key;
      taro2[originKey] = (options2 = {}, ...args) => {
        let key2 = originKey;
        if (typeof options2 === "string") {
          if (args.length) {
            return global2[key2](options2, ...args);
          }
          return global2[key2](options2);
        }
        if (config.transformMeta) {
          const transformResult = config.transformMeta(key2, options2);
          key2 = transformResult.key;
          options2 = transformResult.options;
          if (!global2.hasOwnProperty(key2)) {
            return nonsupport(key2)();
          }
        }
        let task = null;
        const obj = Object.assign({}, options2);
        setUniqueKeyToRoute(key2, options2);
        const p2 = new Promise((resolve, reject) => {
          obj.success = (res) => {
            var _a2, _b;
            (_a2 = config.modifyAsyncResult) === null || _a2 === void 0 ? void 0 : _a2.call(config, key2, res);
            (_b = options2.success) === null || _b === void 0 ? void 0 : _b.call(options2, res);
            if (key2 === "connectSocket") {
              resolve(Promise.resolve().then(() => task ? Object.assign(task, res) : res));
            } else {
              resolve(res);
            }
          };
          obj.fail = (res) => {
            var _a2;
            (_a2 = options2.fail) === null || _a2 === void 0 ? void 0 : _a2.call(options2, res);
            reject(res);
          };
          obj.complete = (res) => {
            var _a2;
            (_a2 = options2.complete) === null || _a2 === void 0 ? void 0 : _a2.call(options2, res);
          };
          if (args.length) {
            task = global2[key2](obj, ...args);
          } else {
            task = global2[key2](obj);
          }
        });
        if (["uploadFile", "downloadFile"].includes(key2)) {
          equipTaskMethodsIntoPromise(task, p2);
          p2.progress = (cb) => {
            task === null || task === void 0 ? void 0 : task.onProgressUpdate(cb);
            return p2;
          };
          p2.abort = (cb) => {
            cb === null || cb === void 0 ? void 0 : cb();
            task === null || task === void 0 ? void 0 : task.abort();
            return p2;
          };
        }
        return p2;
      };
    } else {
      let platformKey = key;
      if (config.transformMeta) {
        platformKey = config.transformMeta(key, {}).key;
      }
      if (!global2.hasOwnProperty(platformKey)) {
        taro2[key] = nonsupport(key);
        return;
      }
      if (isFunction$1(global2[key])) {
        taro2[key] = (...args) => {
          if (config.handleSyncApis) {
            return config.handleSyncApis(key, global2, args);
          } else {
            return global2[platformKey].apply(global2, args);
          }
        };
      } else {
        taro2[key] = global2[platformKey];
      }
    }
  });
  !config.isOnlyPromisify && equipCommonApis(taro2, global2, config);
}
function equipCommonApis(taro2, global2, apis = {}) {
  taro2.canIUseWebp = getCanIUseWebp(taro2);
  taro2.getCurrentPages = getCurrentPages || nonsupport("getCurrentPages");
  taro2.getApp = getApp || nonsupport("getApp");
  taro2.env = global2.env || {};
  try {
    taro2.requirePlugin = requirePlugin || nonsupport("requirePlugin");
  } catch (error) {
    taro2.requirePlugin = nonsupport("requirePlugin");
  }
  const request = apis.request || getNormalRequest(global2);
  function taroInterceptor(chain) {
    return request(chain.requestParams);
  }
  const link = new taro2.Link(taroInterceptor);
  taro2.request = link.request.bind(link);
  taro2.addInterceptor = link.addInterceptor.bind(link);
  taro2.cleanInterceptors = link.cleanInterceptors.bind(link);
  taro2.miniGlobal = taro2.options.miniGlobal = global2;
  taro2.getAppInfo = function() {
    return {
      platform: "mini",
      taroVersion: "4.1.2",
      designWidth: taro2.config.designWidth
    };
  };
  taro2.createSelectorQuery = delayRef(taro2, global2, "createSelectorQuery", "exec");
  taro2.createIntersectionObserver = delayRef(taro2, global2, "createIntersectionObserver", "observe");
}
function equipTaskMethodsIntoPromise(task, promise) {
  if (!task || !promise)
    return;
  const taskMethods = ["abort", "onHeadersReceived", "offHeadersReceived", "onProgressUpdate", "offProgressUpdate", "onChunkReceived", "offChunkReceived"];
  task && taskMethods.forEach((method) => {
    if (method in task) {
      promise[method] = task[method].bind(task);
    }
  });
}
function delayRef(taro2, global2, name, method) {
  return function(...args) {
    const res = global2[name](...args);
    const raw = res[method].bind(res);
    res[method] = function(...methodArgs) {
      taro2.nextTick(() => raw(...methodArgs));
    };
    return res;
  };
}
var Shortcuts;
(function(Shortcuts2) {
  Shortcuts2["Container"] = "container";
  Shortcuts2["Childnodes"] = "cn";
  Shortcuts2["Text"] = "v";
  Shortcuts2["NodeType"] = "nt";
  Shortcuts2["NodeName"] = "nn";
  Shortcuts2["Sid"] = "sid";
  Shortcuts2["Style"] = "st";
  Shortcuts2["Class"] = "cl";
  Shortcuts2["Src"] = "src";
})(Shortcuts || (Shortcuts = {}));
const needPromiseApis = /* @__PURE__ */ new Set([
  "addFileToFavorites",
  "addVideoToFavorites",
  "authPrivateMessage",
  "checkIsAddedToMyMiniProgram",
  "chooseContact",
  "cropImage",
  "disableAlertBeforeUnload",
  "editImage",
  "enableAlertBeforeUnload",
  "getBackgroundFetchData",
  "getChannelsLiveInfo",
  "getChannelsLiveNoticeInfo",
  "getFuzzyLocation",
  "getGroupEnterInfo",
  "getLocalIPAddress",
  "getShareInfo",
  "getUserProfile",
  "getWeRunData",
  "join1v1Chat",
  "openChannelsActivity",
  "openChannelsEvent",
  "openChannelsLive",
  "openChannelsUserProfile",
  "openCustomerServiceChat",
  "openVideoEditor",
  "saveFileToDisk",
  "scanItem",
  "setEnable1v1Chat",
  "setWindowSize",
  "sendBizRedPacket",
  "startFacialRecognitionVerify"
]);
function initNativeApi(taro2) {
  processApis(taro2, wx, {
    needPromiseApis,
    modifyApis(apis) {
      apis.delete("lanDebug");
    },
    transformMeta(api, options2) {
      var _a2;
      if (api === "showShareMenu") {
        options2.menus = (_a2 = options2.showShareItems) === null || _a2 === void 0 ? void 0 : _a2.map((item) => item === "wechatFriends" ? "shareAppMessage" : item === "wechatMoment" ? "shareTimeline" : item);
      }
      return {
        key: api,
        options: options2
      };
    }
  });
  taro2.cloud = wx.cloud;
  taro2.getTabBar = function(pageCtx) {
    var _a2;
    if (typeof (pageCtx === null || pageCtx === void 0 ? void 0 : pageCtx.getTabBar) === "function") {
      return (_a2 = pageCtx.getTabBar()) === null || _a2 === void 0 ? void 0 : _a2.$taroInstances;
    }
  };
  taro2.getRenderer = function() {
    var _a2, _b, _c;
    return (_c = (_b = (_a2 = taro2.getCurrentInstance()) === null || _a2 === void 0 ? void 0 : _a2.page) === null || _b === void 0 ? void 0 : _b.renderer) !== null && _c !== void 0 ? _c : "webview";
  };
}
const _true = "true";
const _false = "false";
const _empty = "";
const _zero = "0";
const _object = "{}";
const components = {
  // ======== 调整属性 ========
  Progress: {
    "border-radius": _zero,
    "font-size": "16",
    duration: "30",
    bindActiveEnd: _empty
  },
  RichText: {
    space: _empty,
    "user-select": _false,
    mode: "'default'"
  },
  Text: {
    "user-select": _false,
    overflow: "visible",
    "max-lines": ""
  },
  Map: {
    polygons: "[]",
    subkey: _empty,
    rotate: _zero,
    skew: _zero,
    "max-scale": "20",
    "min-scale": "3",
    "enable-3D": _false,
    "show-compass": _false,
    "show-scale": _false,
    "enable-overlooking": _false,
    "enable-auto-max-overlooking": _false,
    "enable-zoom": _true,
    "enable-scroll": _true,
    "enable-rotate": _false,
    "enable-satellite": _false,
    "enable-traffic": _false,
    "enable-poi": _true,
    "enable-building": _true,
    setting: _object,
    bindLabelTap: _empty,
    bindRegionChange: _empty,
    bindPoiTap: _empty,
    bindPolylineTap: _empty,
    bindAbilitySuccess: _empty,
    bindAbilityFailed: _empty,
    bindAuthSuccess: _empty,
    bindInterpolatePoint: _empty,
    bindError: _empty,
    bindAnchorPointTap: _empty
  },
  Button: {
    lang: "en",
    "session-from": _empty,
    "send-message-title": _empty,
    "send-message-path": _empty,
    "send-message-img": _empty,
    "app-parameter": _empty,
    "show-message-card": _false,
    "business-id": _empty,
    bindGetUserInfo: _empty,
    bindContact: _empty,
    bindGetPhoneNumber: _empty,
    bindGetRealTimePhoneNumber: _empty,
    bindChooseAvatar: _empty,
    bindError: _empty,
    bindOpenSetting: _empty,
    bindLaunchApp: _empty,
    bindAgreePrivacyAuthorization: _empty
  },
  Form: {
    "report-submit-timeout": _zero
  },
  Input: {
    "always-embed": _false,
    "adjust-position": _true,
    "hold-keyboard": _false,
    "safe-password-cert-path": "",
    "safe-password-length": "",
    "safe-password-time-stamp": "",
    "safe-password-nonce": "",
    "safe-password-salt": "",
    "safe-password-custom-hash": "",
    "auto-fill": _empty,
    "cursor-color": "",
    bindKeyboardHeightChange: _empty,
    bindNicknameReview: _empty,
    bindSelectionChange: _empty,
    bindKeyboardCompositionStart: _empty,
    bindKeyboardCompositionUpdate: _empty,
    bindKeyboardCompositionEnd: _empty
  },
  Picker: {
    "header-text": _empty,
    level: "region"
  },
  PickerView: {
    "immediate-change": _false,
    bindPickStart: _empty,
    bindPickEnd: _empty
  },
  Slider: {
    color: "'#e9e9e9'",
    "selected-color": "'#1aad19'"
  },
  Textarea: {
    "show-confirm-bar": _true,
    "adjust-position": _true,
    "hold-keyboard": _false,
    "disable-default-padding": _false,
    "confirm-type": "'return'",
    "confirm-hold": _false,
    "adjust-keyboard-to": "'cursor'",
    bindKeyboardHeightChange: _empty,
    bindSelectionChange: _empty,
    bindKeyboardCompositionStart: _empty,
    bindKeyboardCompositionUpdate: _empty,
    bindKeyboardCompositionEnd: _empty
  },
  ScrollView: {
    "enable-flex": _false,
    "scroll-anchoring": _false,
    enhanced: _false,
    "using-sticky": _false,
    "paging-enabled": _false,
    "enable-passive": _false,
    "refresher-enabled": _false,
    "refresher-threshold": "45",
    "refresher-default-style": "'black'",
    "refresher-background": "'#FFF'",
    "refresher-triggered": _false,
    bounces: _true,
    "show-scrollbar": _true,
    "fast-deceleration": _false,
    type: "'list'",
    "associative-container": "''",
    reverse: _false,
    clip: _true,
    "enable-back-to-top": _false,
    "cache-extent": _empty,
    "min-drag-distance": "18",
    "scroll-into-view-within-extent": _false,
    "scroll-into-view-alignment": "'start'",
    padding: "[0,0,0,0]",
    "refresher-two-level-enabled": _false,
    "refresher-two-level-triggered": _false,
    "refresher-two-level-threshold": "150",
    "refresher-two-level-close-threshold": "80",
    "refresher-two-level-scroll-enabled": _false,
    "refresher-ballistic-refresh-enabled": _false,
    "refresher-two-level-pinned": _false,
    bindDragStart: _empty,
    bindDragging: _empty,
    bindDragEnd: _empty,
    bindRefresherPulling: _empty,
    bindRefresherRefresh: _empty,
    bindRefresherRestore: _empty,
    bindRefresherAbort: _empty,
    bindScrollStart: _empty,
    bindScrollEnd: _empty,
    bindRefresherWillRefresh: _empty,
    bindRefresherStatusChange: _empty
  },
  StickySection: {
    "push-pinned-header": _true,
    padding: "[0, 0, 0, 0]"
  },
  GridView: {
    type: "'aligned'",
    "cross-axis-count": "2",
    "max-cross-axis-extent": _zero,
    "main-axis-gap": _zero,
    "cross-axis-gap": _zero,
    padding: "[0, 0, 0, 0]"
  },
  GridBuilder: {
    type: "'aligned'",
    list: "[]",
    "cross-axis-count": "2",
    "max-cross-axis-extent": _zero,
    "main-axis-gap": _zero,
    "cross-axis-gap": _zero,
    padding: "[0, 0, 0, 0]",
    bindItemBuild: _empty,
    bindItemDispose: _empty
  },
  ListView: {
    padding: "[0, 0, 0, 0]"
  },
  ListBuilder: {
    list: "[]",
    type: "static",
    padding: "[0, 0, 0, 0]",
    "child-count": _empty,
    "child-height": _empty,
    bindItemBuild: _empty,
    bindItemDispose: _empty
  },
  StickyHeader: {
    "offset-top": "0",
    padding: "[0, 0, 0, 0]"
  },
  Swiper: {
    "snap-to-edge": _false,
    "easing-function": "'default'",
    "layout-type": "'normal'",
    "transformer-type": "'scaleAndFade'",
    "indicator-type": "'normal'",
    "indicator-margin": "10",
    "indicator-spacing": "4",
    "indicator-radius": "4",
    "indicator-width": "8",
    "indicator-height": "8",
    "indicator-alignment": "'auto'",
    "indicator-offset": "[0, 0]",
    "scroll-with-animation": _true,
    "cache-extent": "0"
  },
  SwiperItem: {
    "skip-hidden-item-layout": _false
  },
  Navigator: {
    target: "'self'",
    "app-id": _empty,
    path: _empty,
    "extra-data": _empty,
    version: "'version'"
  },
  Camera: {
    mode: "'normal'",
    resolution: "'medium'",
    "frame-size": "'medium'",
    bindInitDone: _empty,
    bindScanCode: _empty
  },
  Image: {
    webp: _false,
    "show-menu-by-longpress": _false,
    "fade-in": _false
  },
  LivePlayer: {
    mode: "'live'",
    "sound-mode": "'speaker'",
    "auto-pause-if-navigate": _true,
    "auto-pause-if-open-native": _true,
    "picture-in-picture-mode": "[]",
    "enable-auto-rotation": _false,
    "referrer-policy": "'no-referrer'",
    "enable-casting": _false,
    bindstatechange: _empty,
    bindfullscreenchange: _empty,
    bindnetstatus: _empty,
    bindAudioVolumeNotify: _empty,
    bindEnterPictureInPicture: _empty,
    bindLeavePictureInPicture: _empty,
    bindCastingUserSelect: _empty,
    bindCastingStateChange: _empty,
    bindCastingInterrupt: _empty
  },
  Video: {
    title: _empty,
    "play-btn-position": "'bottom'",
    "enable-play-gesture": _false,
    "auto-pause-if-navigate": _true,
    "auto-pause-if-open-native": _true,
    "vslide-gesture": _false,
    "vslide-gesture-in-fullscreen": _true,
    "show-bottom-progress": _true,
    "ad-unit-id": _empty,
    "poster-for-crawler": _empty,
    "show-casting-button": _false,
    "picture-in-picture-mode": "[]",
    // picture-in-picture-show-progress 属性先注释掉的原因如下：
    // 该属性超过了 wxml 属性的长度限制，实际无法使用且导致编译报错。可等微信官方修复后再放开。
    // 参考1：https://developers.weixin.qq.com/community/develop/doc/000a429beb87f0eac07acc0fc5b400
    // 参考2: https://developers.weixin.qq.com/community/develop/doc/0006883619c48054286a4308258c00?_at=vyxqpllafi
    // 'picture-in-picture-show-progress': 'false',
    "enable-auto-rotation": _false,
    "show-screen-lock-button": _false,
    "show-snapshot-button": _false,
    "show-background-playback-button": _false,
    "background-poster": _empty,
    "referrer-policy": "'no-referrer'",
    "is-drm": _false,
    "is-live": _false,
    "provision-url": _empty,
    "certificate-url": _empty,
    "license-url": _empty,
    "preferred-peak-bit-rate": _empty,
    bindProgress: _empty,
    bindLoadedMetadata: _empty,
    bindControlsToggle: _empty,
    bindEnterPictureInPicture: _empty,
    bindLeavePictureInPicture: _empty,
    bindSeekComplete: _empty,
    bindCastingUserSelect: _empty,
    bindCastingStateChange: _empty,
    bindCastingInterrupt: _empty,
    bindAdLoad: _empty,
    bindAdError: _empty,
    bindAdClose: _empty,
    bindAdPlay: _empty
  },
  Canvas: {
    type: _empty
  },
  Ad: {
    "ad-type": "'banner'",
    "ad-theme": "'white'"
  },
  CoverView: {
    "marker-id": _empty,
    slot: _empty
  },
  // ======== 额外组件 ========
  Editor: {
    "read-only": _false,
    placeholder: _empty,
    "show-img-size": _false,
    "show-img-toolbar": _false,
    "show-img-resize": _false,
    focus: _false,
    bindReady: _empty,
    bindFocus: _empty,
    bindBlur: _empty,
    bindInput: _empty,
    bindStatusChange: _empty,
    name: _empty
  },
  MatchMedia: {
    "min-width": _empty,
    "max-width": _empty,
    width: _empty,
    "min-height": _empty,
    "max-height": _empty,
    height: _empty,
    orientation: _empty
  },
  FunctionalPageNavigator: {
    version: "'release'",
    name: _empty,
    args: _empty,
    bindSuccess: _empty,
    bindFail: _empty,
    bindCancel: _empty
  },
  LivePusher: {
    url: _empty,
    mode: "'RTC'",
    autopush: _false,
    muted: _false,
    "enable-camera": _true,
    "auto-focus": _true,
    orientation: "'vertical'",
    beauty: _zero,
    whiteness: _zero,
    aspect: "'9:16'",
    "min-bitrate": "200",
    "max-bitrate": "1000",
    "audio-quality": "'high'",
    "waiting-image": _empty,
    "waiting-image-hash": _empty,
    zoom: _false,
    "device-position": "'front'",
    "background-mute": _false,
    mirror: _false,
    "remote-mirror": _false,
    "local-mirror": _false,
    "audio-reverb-type": _zero,
    "enable-mic": _true,
    "enable-agc": _false,
    "enable-ans": _false,
    "audio-volume-type": "'voicecall'",
    "video-width": "360",
    "video-height": "640",
    "beauty-style": "'smooth'",
    filter: "'standard'",
    "picture-in-picture-mode": "[]",
    animation: _empty,
    bindStateChange: _empty,
    bindNetStatus: _empty,
    bindBgmStart: _empty,
    bindBgmProgress: _empty,
    bindBgmComplete: _empty,
    bindAudioVolumeNotify: _empty
  },
  OfficialAccount: {
    bindLoad: _empty,
    bindError: _empty
  },
  OpenData: {
    type: _empty,
    "open-gid": _empty,
    lang: "'en'",
    "default-text": _empty,
    "default-avatar": _empty,
    bindError: _empty
  },
  NavigationBar: {
    title: _empty,
    loading: _false,
    "front-color": "'#000000'",
    "background-color": _empty,
    "color-animation-duration": _zero,
    "color-animation-timing-func": "'linear'"
  },
  PageMeta: {
    "background-text-style": _empty,
    "background-color": _empty,
    "background-color-top": _empty,
    "background-color-bottom": _empty,
    "root-background-color": _empty,
    "scroll-top": "''",
    "scroll-duration": "300",
    "page-style": "''",
    "root-font-size": "''",
    "page-orientation": "''",
    bindResize: _empty,
    bindScroll: _empty,
    bindScrollDone: _empty
  },
  VoipRoom: {
    openid: _empty,
    mode: "'camera'",
    "device-position": "'front'",
    bindError: _empty
  },
  AdCustom: {
    "unit-id": _empty,
    "ad-intervals": _empty,
    bindLoad: _empty,
    bindError: _empty
  },
  PageContainer: {
    show: _false,
    duration: "300",
    "z-index": "100",
    overlay: _true,
    position: "'bottom'",
    round: _false,
    "close-on-slide-down": _false,
    "overlay-style": _empty,
    "custom-style": _empty,
    bindBeforeEnter: _empty,
    bindEnter: _empty,
    bindAfterEnter: _empty,
    bindBeforeLeave: _empty,
    bindLeave: _empty,
    bindAfterLeave: _empty,
    bindClickOverlay: _empty
  },
  ShareElement: {
    mapkey: _empty,
    transform: _false,
    duration: "300",
    "easing-function": "'ease-out'",
    "transition-on-gesture": _false,
    "shuttle-on-push": "'to'",
    "shuttle-on-pop": "'to'",
    "rect-tween-type": "'materialRectArc'"
  },
  KeyboardAccessory: {},
  RootPortal: {
    enable: _true
  },
  ChannelLive: {
    "feed-id": _empty,
    "finder-user-name": _empty
  },
  ChannelVideo: {
    "feed-id": _empty,
    "finder-user-name": _empty,
    "feed-token": _empty,
    autoplay: _false,
    loop: _false,
    muted: _false,
    "object-fit": "'contain'",
    bindError: _empty
  },
  Snapshot: {
    mode: "'view'"
  },
  Span: {},
  OpenContainer: {
    transitionType: "'fade'",
    transitionDuration: "300",
    closedColor: "'white'",
    closedElevation: _zero,
    closeBorderRadius: _zero,
    middleColor: _empty,
    openColor: "'white'",
    openElevation: _zero,
    openBorderRadius: _zero
  },
  DraggableSheet: {
    initialChildSize: "0.5",
    minChildSize: "0.25",
    maxChildSize: "1.0",
    snap: _false,
    snapSizes: "[]"
  },
  NestedScrollHeader: {},
  NestedScrollBody: {},
  // skyline手势组件
  DoubleTapGestureHandler: {},
  ForcePressGestureHandler: {},
  HorizontalDragGestureHandler: {},
  LongPressGestureHandler: {},
  PanGestureHandler: {},
  ScaleGestureHandler: {},
  TapGestureHandler: {},
  VerticalDragGestureHandler: {}
};
const hostConfig = {
  initNativeApi,
  getMiniLifecycle(config) {
    const methods = config.page[5];
    if (methods.indexOf("onSaveExitState") === -1) {
      methods.push("onSaveExitState");
    }
    return config;
  },
  transferHydrateData(data, element, componentsAlias2) {
    var _a2;
    if (element.isTransferElement) {
      const pages = getCurrentPages();
      const page = pages[pages.length - 1];
      data[
        "nn"
        /* Shortcuts.NodeName */
      ] = element.dataName;
      page.setData({
        [toCamelCase(data.nn)]: data
      });
      return {
        sid: element.sid,
        [
          "v"
          /* Shortcuts.Text */
        ]: "",
        [
          "nn"
          /* Shortcuts.NodeName */
        ]: ((_a2 = componentsAlias2["#text"]) === null || _a2 === void 0 ? void 0 : _a2._num) || "8"
      };
    }
  }
};
mergeReconciler(hostConfig);
mergeInternalComponents(components);
const PROPERTY_THRESHOLD = 2046;
const TARO_RUNTIME = "Taro runtime";
const HOOKS_APP_ID = "taro-app";
const SET_DATA = "小程序 setData";
const PAGE_INIT = "页面初始化";
const ROOT_STR = "root";
const HTML = "html";
const HEAD = "head";
const BODY = "body";
const APP = "app";
const CONTAINER = "container";
const DOCUMENT_ELEMENT_NAME = "#document";
const DOCUMENT_FRAGMENT = "document-fragment";
const ID = "id";
const UID = "uid";
const CLASS = "class";
const STYLE = "style";
const FOCUS = "focus";
const VIEW = "view";
const STATIC_VIEW = "static-view";
const PURE_VIEW = "pure-view";
const CLICK_VIEW = "click-view";
const PROPS = "props";
const DATASET = "dataset";
const OBJECT = "object";
const VALUE = "value";
const INPUT = "input";
const CHANGE = "change";
const CUSTOM_WRAPPER = "custom-wrapper";
const TARGET = "target";
const CURRENT_TARGET = "currentTarget";
const TYPE = "type";
const CONFIRM = "confirm";
const TIME_STAMP = "timeStamp";
const KEY_CODE = "keyCode";
const TOUCHMOVE = "touchmove";
const DATE = "Date";
const SET_TIMEOUT = "setTimeout";
const COMPILE_MODE = "compileMode";
const CATCHMOVE = "catchMove";
const CATCH_VIEW = "catch-view";
const COMMENT = "comment";
const ON_LOAD = "onLoad";
const ON_READY = "onReady";
const ON_SHOW = "onShow";
const ON_HIDE = "onHide";
const OPTIONS = "options";
const EXTERNAL_CLASSES = "externalClasses";
const EVENT_CALLBACK_RESULT = "e_result";
const BEHAVIORS = "behaviors";
const A = "a";
var CONTEXT_ACTIONS;
(function(CONTEXT_ACTIONS2) {
  CONTEXT_ACTIONS2["INIT"] = "0";
  CONTEXT_ACTIONS2["RESTORE"] = "1";
  CONTEXT_ACTIONS2["RECOVER"] = "2";
  CONTEXT_ACTIONS2["DESTORY"] = "3";
})(CONTEXT_ACTIONS || (CONTEXT_ACTIONS = {}));
const observers = [];
class MutationObserverImpl {
  constructor(callback) {
    this.records = [];
    this.callback = callback;
  }
  /**
   * Configures the MutationObserver
   * to begin receiving notifications
   * through its callback function
   * when DOM changes matching the given options occur.
   *
   * Options matching is to be implemented.
   */
  observe(target, options2) {
    this.disconnect();
    this.target = target;
    this.options = options2 || {};
    observers.push(this);
  }
  /**
   * Stop the MutationObserver instance
   * from receiving further notifications
   * until and unless observe() is called again.
   */
  disconnect() {
    this.target = null;
    const index = observers.indexOf(this);
    if (index >= 0) {
      observers.splice(index, 1);
    }
  }
  /**
   * Removes all pending notifications
   * from the MutationObserver's notification queue
   * and returns them in a new Array of MutationRecord objects.
   */
  takeRecords() {
    return this.records.splice(0, this.records.length);
  }
}
const sidMatches = (observerTarget, target) => {
  return !!observerTarget && observerTarget.sid === (target === null || target === void 0 ? void 0 : target.sid);
};
const isConcerned = (record, options2) => {
  const { characterData, characterDataOldValue, attributes, attributeOldValue, childList } = options2;
  switch (record.type) {
    case "characterData":
      if (characterData) {
        if (!characterDataOldValue)
          record.oldValue = null;
        return true;
      }
      return false;
    case "attributes":
      if (attributes) {
        if (!attributeOldValue)
          record.oldValue = null;
        return true;
      }
      return false;
    case "childList":
      if (childList) {
        return true;
      }
      return false;
  }
};
let pendingMuatations = false;
function logMutation(observer, record) {
  observer.records.push(record);
  if (!pendingMuatations) {
    pendingMuatations = true;
    Promise.resolve().then(() => {
      pendingMuatations = false;
      observers.forEach((observer2) => {
        return observer2.callback(observer2.takeRecords());
      });
    });
  }
}
function recordMutation(record) {
  observers.forEach((observer) => {
    const { options: options2 } = observer;
    for (let t = record.target; t; t = t.parentNode) {
      if (sidMatches(observer.target, t) && isConcerned(record, options2)) {
        logMutation(observer, record);
        break;
      }
      if (!options2.subtree)
        break;
    }
  });
}
class MutationObserver {
  constructor(callback) {
    {
      this.core = new MutationObserverImpl(callback);
    }
  }
  observe(...args) {
    this.core.observe(...args);
  }
  disconnect() {
    this.core.disconnect();
  }
  takeRecords() {
    return this.core.takeRecords();
  }
  static record(record) {
    recordMutation(record);
  }
}
const eventCenter = hooks.call("getEventCenter", Events);
const env = {
  window: EMPTY_OBJ$1,
  document: EMPTY_OBJ$1
};
const taroGetComputedStyleProvider = function(element) {
  return element.style;
};
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
class RuntimeCache {
  constructor(name) {
    this.cache = /* @__PURE__ */ new Map();
    this.name = name;
  }
  has(identifier) {
    return this.cache.has(identifier);
  }
  set(identifier, ctx) {
    if (identifier && ctx) {
      this.cache.set(identifier, ctx);
    }
  }
  get(identifier) {
    if (this.has(identifier))
      return this.cache.get(identifier);
  }
  delete(identifier) {
    this.cache.delete(identifier);
  }
}
var _TaroHistory_instances, _TaroHistory_location, _TaroHistory_stack, _TaroHistory_cur, _TaroHistory_window, _TaroHistory_reset;
const cache$1 = new RuntimeCache("history");
class TaroHistory extends Events {
  constructor(location, options2) {
    super();
    _TaroHistory_instances.add(this);
    _TaroHistory_location.set(this, void 0);
    _TaroHistory_stack.set(this, []);
    _TaroHistory_cur.set(this, 0);
    _TaroHistory_window.set(this, void 0);
    __classPrivateFieldSet(this, _TaroHistory_window, options2.window, "f");
    __classPrivateFieldSet(this, _TaroHistory_location, location, "f");
    __classPrivateFieldGet(this, _TaroHistory_location, "f").on("__record_history__", (href) => {
      var _a2;
      __classPrivateFieldSet(this, _TaroHistory_cur, (_a2 = __classPrivateFieldGet(this, _TaroHistory_cur, "f"), _a2++, _a2), "f");
      __classPrivateFieldSet(this, _TaroHistory_stack, __classPrivateFieldGet(this, _TaroHistory_stack, "f").slice(0, __classPrivateFieldGet(this, _TaroHistory_cur, "f")), "f");
      __classPrivateFieldGet(this, _TaroHistory_stack, "f").push({
        state: null,
        title: "",
        url: href
      });
    }, null);
    __classPrivateFieldGet(this, _TaroHistory_location, "f").on("__reset_history__", (href) => {
      __classPrivateFieldGet(this, _TaroHistory_instances, "m", _TaroHistory_reset).call(this, href);
    }, null);
    this.on(CONTEXT_ACTIONS.INIT, () => {
      __classPrivateFieldGet(this, _TaroHistory_instances, "m", _TaroHistory_reset).call(this);
    }, null);
    this.on(CONTEXT_ACTIONS.RESTORE, (pageId2) => {
      cache$1.set(pageId2, {
        location: __classPrivateFieldGet(this, _TaroHistory_location, "f"),
        stack: __classPrivateFieldGet(this, _TaroHistory_stack, "f").slice(),
        cur: __classPrivateFieldGet(this, _TaroHistory_cur, "f")
      });
    }, null);
    this.on(CONTEXT_ACTIONS.RECOVER, (pageId2) => {
      if (cache$1.has(pageId2)) {
        const ctx = cache$1.get(pageId2);
        __classPrivateFieldSet(this, _TaroHistory_location, ctx.location, "f");
        __classPrivateFieldSet(this, _TaroHistory_stack, ctx.stack, "f");
        __classPrivateFieldSet(this, _TaroHistory_cur, ctx.cur, "f");
      }
    }, null);
    this.on(CONTEXT_ACTIONS.DESTORY, (pageId2) => {
      cache$1.delete(pageId2);
    }, null);
    __classPrivateFieldGet(this, _TaroHistory_instances, "m", _TaroHistory_reset).call(this);
  }
  /* public property */
  get length() {
    return __classPrivateFieldGet(this, _TaroHistory_stack, "f").length;
  }
  get state() {
    return __classPrivateFieldGet(this, _TaroHistory_stack, "f")[__classPrivateFieldGet(this, _TaroHistory_cur, "f")].state;
  }
  /* public method */
  go(delta) {
    if (!isNumber(delta) || isNaN(delta))
      return;
    let targetIdx = __classPrivateFieldGet(this, _TaroHistory_cur, "f") + delta;
    targetIdx = Math.min(Math.max(targetIdx, 0), this.length - 1);
    __classPrivateFieldSet(this, _TaroHistory_cur, targetIdx, "f");
    __classPrivateFieldGet(this, _TaroHistory_location, "f").trigger("__set_href_without_history__", __classPrivateFieldGet(this, _TaroHistory_stack, "f")[__classPrivateFieldGet(this, _TaroHistory_cur, "f")].url);
    __classPrivateFieldGet(this, _TaroHistory_window, "f").trigger("popstate", __classPrivateFieldGet(this, _TaroHistory_stack, "f")[__classPrivateFieldGet(this, _TaroHistory_cur, "f")]);
  }
  back() {
    this.go(-1);
  }
  forward() {
    this.go(1);
  }
  pushState(state, title, url) {
    if (!url || !isString$1(url))
      return;
    __classPrivateFieldSet(this, _TaroHistory_stack, __classPrivateFieldGet(this, _TaroHistory_stack, "f").slice(0, __classPrivateFieldGet(this, _TaroHistory_cur, "f") + 1), "f");
    __classPrivateFieldGet(this, _TaroHistory_stack, "f").push({
      state,
      title,
      url
    });
    __classPrivateFieldSet(this, _TaroHistory_cur, this.length - 1, "f");
    __classPrivateFieldGet(this, _TaroHistory_location, "f").trigger("__set_href_without_history__", url);
  }
  replaceState(state, title, url) {
    if (!url || !isString$1(url))
      return;
    __classPrivateFieldGet(this, _TaroHistory_stack, "f")[__classPrivateFieldGet(this, _TaroHistory_cur, "f")] = {
      state,
      title,
      url
    };
    __classPrivateFieldGet(this, _TaroHistory_location, "f").trigger("__set_href_without_history__", url);
  }
  // For debug
  get cache() {
    return cache$1;
  }
}
_TaroHistory_location = /* @__PURE__ */ new WeakMap(), _TaroHistory_stack = /* @__PURE__ */ new WeakMap(), _TaroHistory_cur = /* @__PURE__ */ new WeakMap(), _TaroHistory_window = /* @__PURE__ */ new WeakMap(), _TaroHistory_instances = /* @__PURE__ */ new WeakSet(), _TaroHistory_reset = function _TaroHistory_reset2(href = "") {
  __classPrivateFieldSet(this, _TaroHistory_stack, [
    {
      state: null,
      title: "",
      url: href || __classPrivateFieldGet(this, _TaroHistory_location, "f").href
    }
  ], "f");
  __classPrivateFieldSet(this, _TaroHistory_cur, 0, "f");
};
const History = TaroHistory;
const Current = {
  app: null,
  router: null,
  page: null
};
const getCurrentInstance$1 = () => Current;
var _dict, _a;
const findReg = /[!'()~]|%20|%00/g;
const plusReg = /\+/g;
const replaceCharMap = {
  "!": "%21",
  "'": "%27",
  "(": "%28",
  ")": "%29",
  "~": "%7E",
  "%20": "+",
  "%00": "\0"
};
function replacer$1(match) {
  return replaceCharMap[match];
}
function appendTo(dict, name, value) {
  const res = isArray$1(value) ? value.join(",") : value;
  if (name in dict)
    dict[name].push(res);
  else
    dict[name] = [res];
}
function addEach(value, key) {
  appendTo(this, key, value);
}
function decode(str) {
  return decodeURIComponent(str.replace(plusReg, " "));
}
function encode(str) {
  return encodeURIComponent(str).replace(findReg, replacer$1);
}
const URLSearchParams = (_a = class {
  constructor(query) {
    _dict.set(this, /* @__PURE__ */ Object.create(null));
    query !== null && query !== void 0 ? query : query = "";
    const dict = __classPrivateFieldGet(this, _dict, "f");
    if (typeof query === "string") {
      if (query.charAt(0) === "?") {
        query = query.slice(1);
      }
      for (let pairs = query.split("&"), i = 0, length = pairs.length; i < length; i++) {
        const value = pairs[i];
        const index = value.indexOf("=");
        try {
          if (index > -1) {
            appendTo(dict, decode(value.slice(0, index)), decode(value.slice(index + 1)));
          } else if (value.length) {
            appendTo(dict, decode(value), "");
          }
        } catch (err) {
          {
            console.warn(`[Taro warn] URL 参数 ${value} decode 异常`);
          }
        }
      }
    } else {
      if (isArray$1(query)) {
        for (let i = 0, length = query.length; i < length; i++) {
          const value = query[i];
          appendTo(dict, value[0], value[1]);
        }
      } else if (query.forEach) {
        query.forEach(addEach, dict);
      } else {
        for (const key in query) {
          appendTo(dict, key, query[key]);
        }
      }
    }
  }
  append(name, value) {
    appendTo(__classPrivateFieldGet(this, _dict, "f"), name, value);
  }
  delete(name) {
    delete __classPrivateFieldGet(this, _dict, "f")[name];
  }
  get(name) {
    const dict = __classPrivateFieldGet(this, _dict, "f");
    return name in dict ? dict[name][0] : null;
  }
  getAll(name) {
    const dict = __classPrivateFieldGet(this, _dict, "f");
    return name in dict ? dict[name].slice(0) : [];
  }
  has(name) {
    return name in __classPrivateFieldGet(this, _dict, "f");
  }
  keys() {
    return Object.keys(__classPrivateFieldGet(this, _dict, "f"));
  }
  set(name, value) {
    __classPrivateFieldGet(this, _dict, "f")[name] = ["" + value];
  }
  forEach(callback, thisArg) {
    const dict = __classPrivateFieldGet(this, _dict, "f");
    Object.getOwnPropertyNames(dict).forEach(function(name) {
      dict[name].forEach(function(value) {
        callback.call(thisArg, value, name, this);
      }, this);
    }, this);
  }
  toJSON() {
    return {};
  }
  toString() {
    const dict = __classPrivateFieldGet(this, _dict, "f");
    const query = [];
    for (const key in dict) {
      const name = encode(key);
      for (let i = 0, value = dict[key]; i < value.length; i++) {
        query.push(name + "=" + encode(value[i]));
      }
    }
    return query.join("&");
  }
}, _dict = /* @__PURE__ */ new WeakMap(), _a);
var _TaroURL_hash, _TaroURL_hostname, _TaroURL_pathname, _TaroURL_port, _TaroURL_protocol, _TaroURL_search;
class TaroURL {
  static createObjectURL() {
    throw new Error("Oops, not support URL.createObjectURL() in miniprogram.");
  }
  static revokeObjectURL() {
    throw new Error("Oops, not support URL.revokeObjectURL() in miniprogram.");
  }
  constructor(url, base) {
    _TaroURL_hash.set(this, "");
    _TaroURL_hostname.set(this, "");
    _TaroURL_pathname.set(this, "");
    _TaroURL_port.set(this, "");
    _TaroURL_protocol.set(this, "");
    _TaroURL_search.set(this, void 0);
    if (!isString$1(url))
      url = String(url);
    const parseResult = parseUrlBase(url, base);
    const { hash, hostname, pathname, port, protocol, search } = parseResult;
    __classPrivateFieldSet(this, _TaroURL_hash, hash, "f");
    __classPrivateFieldSet(this, _TaroURL_hostname, hostname, "f");
    __classPrivateFieldSet(this, _TaroURL_pathname, pathname || "/", "f");
    __classPrivateFieldSet(this, _TaroURL_port, port, "f");
    __classPrivateFieldSet(this, _TaroURL_protocol, protocol, "f");
    __classPrivateFieldSet(this, _TaroURL_search, new URLSearchParams(search), "f");
  }
  /* public property */
  get protocol() {
    return __classPrivateFieldGet(this, _TaroURL_protocol, "f");
  }
  set protocol(val) {
    isString$1(val) && __classPrivateFieldSet(this, _TaroURL_protocol, val.trim(), "f");
  }
  get host() {
    return this.hostname + (this.port ? ":" + this.port : "");
  }
  set host(val) {
    if (val && isString$1(val)) {
      val = val.trim();
      const { hostname, port } = parseUrl(`//${val}`);
      this.hostname = hostname;
      this.port = port;
    }
  }
  get hostname() {
    return __classPrivateFieldGet(this, _TaroURL_hostname, "f");
  }
  set hostname(val) {
    val && isString$1(val) && __classPrivateFieldSet(this, _TaroURL_hostname, val.trim(), "f");
  }
  get port() {
    return __classPrivateFieldGet(this, _TaroURL_port, "f");
  }
  set port(val) {
    isString$1(val) && __classPrivateFieldSet(this, _TaroURL_port, val.trim(), "f");
  }
  get pathname() {
    return __classPrivateFieldGet(this, _TaroURL_pathname, "f");
  }
  set pathname(val) {
    if (isString$1(val)) {
      val = val.trim();
      const HEAD_REG = /^(\/|\.\/|\.\.\/)/;
      let temp = val;
      while (HEAD_REG.test(temp)) {
        temp = temp.replace(HEAD_REG, "");
      }
      if (temp)
        __classPrivateFieldSet(this, _TaroURL_pathname, "/" + temp, "f");
      else
        __classPrivateFieldSet(this, _TaroURL_pathname, "/", "f");
    }
  }
  get search() {
    const val = __classPrivateFieldGet(this, _TaroURL_search, "f").toString();
    return val.length === 0 || val.startsWith("?") ? val : `?${val}`;
  }
  set search(val) {
    if (isString$1(val)) {
      val = val.trim();
      __classPrivateFieldSet(this, _TaroURL_search, new URLSearchParams(val), "f");
    }
  }
  get hash() {
    return __classPrivateFieldGet(this, _TaroURL_hash, "f");
  }
  set hash(val) {
    if (isString$1(val)) {
      val = val.trim();
      if (val)
        __classPrivateFieldSet(this, _TaroURL_hash, val.startsWith("#") ? val : `#${val}`, "f");
      else
        __classPrivateFieldSet(this, _TaroURL_hash, "", "f");
    }
  }
  get href() {
    return `${this.protocol}//${this.host}${this.pathname}${this.search}${this.hash}`;
  }
  set href(val) {
    if (val && isString$1(val)) {
      val = val.trim();
      const { protocol, hostname, port, hash, search, pathname } = parseUrl(val);
      this.protocol = protocol;
      this.hostname = hostname;
      this.pathname = pathname;
      this.port = port;
      this.hash = hash;
      this.search = search;
    }
  }
  get origin() {
    return `${this.protocol}//${this.host}`;
  }
  set origin(val) {
    if (val && isString$1(val)) {
      val = val.trim();
      const { protocol, hostname, port } = parseUrl(val);
      this.protocol = protocol;
      this.hostname = hostname;
      this.port = port;
    }
  }
  get searchParams() {
    return __classPrivateFieldGet(this, _TaroURL_search, "f");
  }
  // public method
  toString() {
    return this.href;
  }
  toJSON() {
    return this.toString();
  }
  // convenient for deconstructor
  _toRaw() {
    return {
      protocol: this.protocol,
      port: this.port,
      host: this.host,
      hostname: this.hostname,
      pathname: this.pathname,
      hash: this.hash,
      search: this.search,
      origin: this.origin,
      href: this.href
    };
  }
}
_TaroURL_hash = /* @__PURE__ */ new WeakMap(), _TaroURL_hostname = /* @__PURE__ */ new WeakMap(), _TaroURL_pathname = /* @__PURE__ */ new WeakMap(), _TaroURL_port = /* @__PURE__ */ new WeakMap(), _TaroURL_protocol = /* @__PURE__ */ new WeakMap(), _TaroURL_search = /* @__PURE__ */ new WeakMap();
const TaroURLProvider = TaroURL;
function parseUrl(url = "") {
  const result = {
    href: "",
    origin: "",
    protocol: "",
    hostname: "",
    host: "",
    port: "",
    pathname: "",
    search: "",
    hash: ""
  };
  if (!url || !isString$1(url))
    return result;
  url = url.trim();
  const PATTERN = /^(([^:/?#]+):)?\/\/(([^/?#]+):(.+)@)?([^/?#:]*)(:(\d+))?([^?#]*)(\?([^#]*))?(#(.*))?/;
  const matches = url.match(PATTERN);
  if (!matches)
    return result;
  result.protocol = matches[1] || "https:";
  result.hostname = matches[6] || "taro.com";
  result.port = matches[8] || "";
  result.pathname = matches[9] || "/";
  result.search = matches[10] || "";
  result.hash = matches[12] || "";
  result.href = url;
  result.origin = result.protocol + "//" + result.hostname;
  result.host = result.hostname + (result.port ? `:${result.port}` : "");
  return result;
}
function parseUrlBase(url, base) {
  const VALID_URL = /^(https?:)\/\//i;
  let fullUrl = "";
  let parsedBase = null;
  if (!isUndefined(base)) {
    base = String(base).trim();
    if (!VALID_URL.test(base))
      throw new TypeError(`Failed to construct 'URL': Invalid base URL`);
    parsedBase = parseUrl(base);
  }
  url = String(url).trim();
  if (VALID_URL.test(url)) {
    fullUrl = url;
  } else if (parsedBase) {
    if (url) {
      if (url.startsWith("//")) {
        fullUrl = parsedBase.protocol + url;
      } else {
        fullUrl = parsedBase.origin + (url.startsWith("/") ? url : `/${url}`);
      }
    } else {
      fullUrl = parsedBase.href;
    }
  } else {
    throw new TypeError(`Failed to construct 'URL': Invalid URL`);
  }
  return parseUrl(fullUrl);
}
var _TaroLocation_instances, _TaroLocation_url, _TaroLocation_noCheckUrl, _TaroLocation_window, _TaroLocation_reset, _TaroLocation_getPreValue, _TaroLocation_rollBack, _TaroLocation_recordHistory, _TaroLocation_checkUrlChange;
const INIT_URL = "https://taro.com";
const cache = new RuntimeCache("location");
class TaroLocation extends Events {
  constructor(options2) {
    super();
    _TaroLocation_instances.add(this);
    _TaroLocation_url.set(this, new TaroURLProvider(INIT_URL));
    _TaroLocation_noCheckUrl.set(this, false);
    _TaroLocation_window.set(this, void 0);
    __classPrivateFieldSet(this, _TaroLocation_window, options2.window, "f");
    __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_reset).call(this);
    this.on("__set_href_without_history__", (href) => {
      __classPrivateFieldSet(this, _TaroLocation_noCheckUrl, true, "f");
      const lastHash = __classPrivateFieldGet(this, _TaroLocation_url, "f").hash;
      __classPrivateFieldGet(this, _TaroLocation_url, "f").href = generateFullUrl(href);
      if (lastHash !== __classPrivateFieldGet(this, _TaroLocation_url, "f").hash) {
        __classPrivateFieldGet(this, _TaroLocation_window, "f").trigger("hashchange");
      }
      __classPrivateFieldSet(this, _TaroLocation_noCheckUrl, false, "f");
    }, null);
    this.on(CONTEXT_ACTIONS.INIT, () => {
      __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_reset).call(this);
    }, null);
    this.on(CONTEXT_ACTIONS.RESTORE, (pageId2) => {
      cache.set(pageId2, {
        lastHref: this.href
      });
    }, null);
    this.on(CONTEXT_ACTIONS.RECOVER, (pageId2) => {
      if (cache.has(pageId2)) {
        const ctx = cache.get(pageId2);
        __classPrivateFieldSet(this, _TaroLocation_noCheckUrl, true, "f");
        __classPrivateFieldGet(this, _TaroLocation_url, "f").href = ctx.lastHref;
        __classPrivateFieldSet(this, _TaroLocation_noCheckUrl, false, "f");
      }
    }, null);
    this.on(CONTEXT_ACTIONS.DESTORY, (pageId2) => {
      cache.delete(pageId2);
    }, null);
  }
  /* public property */
  get protocol() {
    return __classPrivateFieldGet(this, _TaroLocation_url, "f").protocol;
  }
  set protocol(val) {
    const REG = /^(http|https):$/i;
    if (!val || !isString$1(val) || !REG.test(val.trim()))
      return;
    val = val.trim();
    const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
    __classPrivateFieldGet(this, _TaroLocation_url, "f").protocol = val;
    if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
      __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
  }
  get host() {
    return __classPrivateFieldGet(this, _TaroLocation_url, "f").host;
  }
  set host(val) {
    if (!val || !isString$1(val))
      return;
    val = val.trim();
    const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
    __classPrivateFieldGet(this, _TaroLocation_url, "f").host = val;
    if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
      __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
  }
  get hostname() {
    return __classPrivateFieldGet(this, _TaroLocation_url, "f").hostname;
  }
  set hostname(val) {
    if (!val || !isString$1(val))
      return;
    val = val.trim();
    const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
    __classPrivateFieldGet(this, _TaroLocation_url, "f").hostname = val;
    if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
      __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
  }
  get port() {
    return __classPrivateFieldGet(this, _TaroLocation_url, "f").port;
  }
  set port(val) {
    const xVal = Number(val = val.trim());
    if (!isNumber(xVal) || xVal <= 0)
      return;
    const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
    __classPrivateFieldGet(this, _TaroLocation_url, "f").port = val;
    if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
      __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
  }
  get pathname() {
    return __classPrivateFieldGet(this, _TaroLocation_url, "f").pathname;
  }
  set pathname(val) {
    if (!val || !isString$1(val))
      return;
    val = val.trim();
    const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
    __classPrivateFieldGet(this, _TaroLocation_url, "f").pathname = val;
    if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
      __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
  }
  get search() {
    return __classPrivateFieldGet(this, _TaroLocation_url, "f").search;
  }
  set search(val) {
    if (!val || !isString$1(val))
      return;
    val = val.trim();
    val = val.startsWith("?") ? val : `?${val}`;
    const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
    __classPrivateFieldGet(this, _TaroLocation_url, "f").search = val;
    if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
      __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
  }
  get hash() {
    return __classPrivateFieldGet(this, _TaroLocation_url, "f").hash;
  }
  // 小程序的navigateTo存在截断hash字符串的问题
  set hash(val) {
    if (!val || !isString$1(val))
      return;
    val = val.trim();
    val = val.startsWith("#") ? val : `#${val}`;
    const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
    __classPrivateFieldGet(this, _TaroLocation_url, "f").hash = val;
    if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
      __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
  }
  get href() {
    return __classPrivateFieldGet(this, _TaroLocation_url, "f").href;
  }
  set href(val) {
    const REG = /^(http:|https:)?\/\/.+/;
    if (!val || !isString$1(val) || !REG.test(val = val.trim()))
      return;
    const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
    __classPrivateFieldGet(this, _TaroLocation_url, "f").href = val;
    if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
      __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
  }
  get origin() {
    return __classPrivateFieldGet(this, _TaroLocation_url, "f").origin;
  }
  set origin(val) {
    const REG = /^(http:|https:)?\/\/.+/;
    if (!val || !isString$1(val) || !REG.test(val = val.trim()))
      return;
    const preValue = __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
    __classPrivateFieldGet(this, _TaroLocation_url, "f").origin = val;
    if (__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
      __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
  }
  /* public method */
  assign() {
    warn$3(true, "小程序环境中调用location.assign()无效.");
  }
  reload() {
    warn$3(true, "小程序环境中调用location.reload()无效.");
  }
  replace(url) {
    this.trigger("__set_href_without_history__", url);
  }
  toString() {
    return this.href;
  }
  // For debug
  get cache() {
    return cache;
  }
}
_TaroLocation_url = /* @__PURE__ */ new WeakMap(), _TaroLocation_noCheckUrl = /* @__PURE__ */ new WeakMap(), _TaroLocation_window = /* @__PURE__ */ new WeakMap(), _TaroLocation_instances = /* @__PURE__ */ new WeakSet(), _TaroLocation_reset = function _TaroLocation_reset2() {
  const Current2 = getCurrentInstance$1();
  const router = Current2.router;
  if (router) {
    const { path, params } = router;
    const searchArr = Object.keys(params).map((key) => {
      return `${key}=${params[key]}`;
    });
    const searchStr = searchArr.length > 0 ? "?" + searchArr.join("&") : "";
    const url = `${INIT_URL}${path.startsWith("/") ? path : "/" + path}${searchStr}`;
    __classPrivateFieldSet(this, _TaroLocation_url, new TaroURLProvider(url), "f");
    this.trigger("__reset_history__", this.href);
  }
}, _TaroLocation_getPreValue = function _TaroLocation_getPreValue2() {
  return __classPrivateFieldGet(this, _TaroLocation_url, "f")._toRaw();
}, _TaroLocation_rollBack = function _TaroLocation_rollBack2(href) {
  __classPrivateFieldGet(this, _TaroLocation_url, "f").href = href;
}, _TaroLocation_recordHistory = function _TaroLocation_recordHistory2() {
  this.trigger("__record_history__", this.href);
}, _TaroLocation_checkUrlChange = function _TaroLocation_checkUrlChange2(preValue) {
  if (__classPrivateFieldGet(this, _TaroLocation_noCheckUrl, "f")) {
    return false;
  }
  const { protocol, hostname, port, pathname, search, hash } = __classPrivateFieldGet(this, _TaroLocation_url, "f")._toRaw();
  if (protocol !== preValue.protocol || hostname !== preValue.hostname || port !== preValue.port) {
    __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_rollBack).call(this, preValue.href);
    return false;
  }
  if (pathname !== preValue.pathname) {
    return true;
  }
  if (search !== preValue.search) {
    return true;
  }
  if (hash !== preValue.hash) {
    __classPrivateFieldGet(this, _TaroLocation_window, "f").trigger("hashchange");
    return true;
  }
  __classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_rollBack).call(this, preValue.href);
  return false;
};
const Location = TaroLocation;
function generateFullUrl(val = "") {
  const origin = INIT_URL;
  if (/^[/?#]/.test(val)) {
    return origin + val;
  }
  return val;
}
const machine = "Macintosh";
const arch = "Intel Mac OS X 10_14_5";
const engine = "AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36";
const msg = "(" + machine + "; " + arch + ") " + engine;
const nav = {
  appCodeName: "Mozilla",
  appName: "Netscape",
  appVersion: "5.0 " + msg,
  cookieEnabled: true,
  mimeTypes: [],
  onLine: true,
  platform: "MacIntel",
  plugins: [],
  product: "Taro",
  productSub: "20030107",
  userAgent: "Mozilla/5.0 " + msg,
  vendor: "Joyent",
  vendorSub: ""
};
let now;
(function() {
  let loadTime;
  if (typeof performance !== "undefined" && performance !== null && performance.now) {
    now = () => performance.now();
  } else if (Date.now) {
    loadTime = Date.now();
    now = () => Date.now() - loadTime;
  } else {
    loadTime = (/* @__PURE__ */ new Date()).getTime();
    now = () => (/* @__PURE__ */ new Date()).getTime() - loadTime;
  }
})();
let lastTime = 0;
const _raf = function(callback) {
  const _now = now();
  const nextTime = Math.max(lastTime + 16, _now);
  return setTimeout(function() {
    callback(lastTime = nextTime);
  }, nextTime - _now);
};
const _caf = function(seed) {
  clearTimeout(seed);
};
class TaroWindow extends Events {
  constructor() {
    super();
    this.navigator = nav;
    this.requestAnimationFrame = _raf;
    this.cancelAnimationFrame = _caf;
    this.getComputedStyle = taroGetComputedStyleProvider;
    const globalProperties = [
      ...Object.getOwnPropertyNames(global || {}),
      ...Object.getOwnPropertySymbols(global || {})
    ];
    globalProperties.forEach((property) => {
      if (property === "atob" || property === "document")
        return;
      if (!Object.prototype.hasOwnProperty.call(this, property)) {
        try {
          this[property] = global[property];
        } catch (e) {
          {
            console.warn(`[Taro warn] window.${String(property)} 在赋值到 window 时报错`);
          }
        }
      }
    });
    this.Date || (this.Date = Date);
    this.location = new Location({ window: this });
    this.history = new History(this.location, { window: this });
    this.initEvent();
  }
  initEvent() {
    const _location = this.location;
    const _history = this.history;
    this.on(CONTEXT_ACTIONS.INIT, (pageId2) => {
      _location.trigger(CONTEXT_ACTIONS.INIT, pageId2);
    }, null);
    this.on(CONTEXT_ACTIONS.RECOVER, (pageId2) => {
      _location.trigger(CONTEXT_ACTIONS.RECOVER, pageId2);
      _history.trigger(CONTEXT_ACTIONS.RECOVER, pageId2);
    }, null);
    this.on(CONTEXT_ACTIONS.RESTORE, (pageId2) => {
      _location.trigger(CONTEXT_ACTIONS.RESTORE, pageId2);
      _history.trigger(CONTEXT_ACTIONS.RESTORE, pageId2);
    }, null);
    this.on(CONTEXT_ACTIONS.DESTORY, (pageId2) => {
      _location.trigger(CONTEXT_ACTIONS.DESTORY, pageId2);
      _history.trigger(CONTEXT_ACTIONS.DESTORY, pageId2);
    }, null);
  }
  get document() {
    return env.document;
  }
  addEventListener(event, callback) {
    if (!isString$1(event))
      return;
    this.on(event, callback, null);
  }
  removeEventListener(event, callback) {
    if (!isString$1(event))
      return;
    this.off(event, callback, null);
  }
  setTimeout(...args) {
    return setTimeout(...args);
  }
  clearTimeout(...args) {
    return clearTimeout(...args);
  }
}
const taroWindowProvider = env.window = new TaroWindow();
const taroLocationProvider = taroWindowProvider.location;
const taroHistoryProvider = taroWindowProvider.history;
const incrementId = () => {
  const chatCodes = [];
  for (let i = 65; i <= 90; i++) {
    chatCodes.push(i);
  }
  for (let i = 97; i <= 122; i++) {
    chatCodes.push(i);
  }
  const chatCodesLen = chatCodes.length - 1;
  const list = [0, 0];
  return () => {
    const target = list.map((item) => chatCodes[item]);
    const res = String.fromCharCode(...target);
    let tailIdx = list.length - 1;
    list[tailIdx]++;
    while (list[tailIdx] > chatCodesLen) {
      list[tailIdx] = 0;
      tailIdx = tailIdx - 1;
      if (tailIdx < 0) {
        list.push(0);
        break;
      }
      list[tailIdx]++;
    }
    return res;
  };
};
function isElement(node) {
  return node.nodeType === 1;
}
function isText(node) {
  return node.nodeType === 3;
}
function isComment(node) {
  return node.nodeName === COMMENT;
}
function isHasExtractProp(el) {
  const res = Object.keys(el.props).find((prop) => {
    return !(/^(class|style|id)$/.test(prop) || prop.startsWith("data-"));
  });
  return Boolean(res);
}
function isParentBinded(node, type) {
  var _a2;
  while (node = (node === null || node === void 0 ? void 0 : node.parentElement) || null) {
    if (!node || node.nodeName === ROOT_STR || node.nodeName === "root-portal") {
      return false;
    } else if ((_a2 = node.__handlers[type]) === null || _a2 === void 0 ? void 0 : _a2.length) {
      return true;
    }
  }
  return false;
}
function shortcutAttr(key) {
  switch (key) {
    case STYLE:
      return "st";
    case ID:
      return UID;
    case CLASS:
      return "cl";
    default:
      return key;
  }
}
const customWrapperCache = /* @__PURE__ */ new Map();
function extend$1(ctor, methodName, options2) {
  if (isFunction$1(options2)) {
    options2 = {
      value: options2
    };
  }
  Object.defineProperty(ctor.prototype, methodName, Object.assign({ configurable: true, enumerable: true }, options2));
}
let componentsAlias$1;
function getComponentsAlias() {
  if (!componentsAlias$1) {
    componentsAlias$1 = getComponentsAlias$1(internalComponents);
  }
  return componentsAlias$1;
}
function convertNumber2PX(value) {
  return value + "px";
}
class ClassList {
  constructor(className, el) {
    this.tokenList = [];
    this.el = el;
    className.trim().split(/\s+/).forEach((token) => this.tokenList.push(token));
  }
  get value() {
    return this.toString();
  }
  get length() {
    return this.tokenList.length;
  }
  add() {
    let index = 0;
    let updated = false;
    const tokens = arguments;
    const length = tokens.length;
    const tokenList = this.tokenList;
    do {
      const token = tokens[index];
      if (this.checkTokenIsValid(token) && !~tokenList.indexOf(token)) {
        tokenList.push(token);
        updated = true;
      }
    } while (++index < length);
    if (updated) {
      this._update();
    }
  }
  remove() {
    let i = 0;
    let updated = false;
    const tokens = arguments;
    const length = tokens.length;
    const tokenList = this.tokenList;
    do {
      const token = tokens[i] + "";
      if (!this.checkTokenIsValid(token))
        continue;
      const index = tokenList.indexOf(token);
      if (~tokenList.indexOf(token)) {
        tokenList.splice(index, 1);
        updated = true;
      }
    } while (++i < length);
    if (updated) {
      this._update();
    }
  }
  contains(token) {
    if (!this.checkTokenIsValid(token))
      return false;
    return !!~this.tokenList.indexOf(token);
  }
  toggle(token, force) {
    const result = this.contains(token);
    const method = result ? force !== true && "remove" : force !== false && "add";
    if (method) {
      this[method](token);
    }
    if (force === true || force === false) {
      return force;
    } else {
      return !result;
    }
  }
  replace(token, replacement_token) {
    if (!this.checkTokenIsValid(token) || !this.checkTokenIsValid(replacement_token))
      return;
    const index = this.tokenList.indexOf(token);
    if (~index) {
      this.tokenList.splice(index, 1, replacement_token);
      this._update();
    }
  }
  toString() {
    return this.tokenList.filter((v) => v !== "").join(" ");
  }
  checkTokenIsValid(token) {
    if (token === "" || /\s/.test(token))
      return false;
    return true;
  }
  _update() {
    this.el.className = this.value;
  }
}
class EventSource extends Map {
  removeNode(child) {
    const { sid, uid: uid2 } = child;
    this.delete(sid);
    if (uid2 !== sid && uid2)
      this.delete(uid2);
  }
  removeNodeTree(child) {
    this.removeNode(child);
    const { childNodes } = child;
    childNodes.forEach((node) => this.removeNodeTree(node));
  }
}
const eventSource = new EventSource();
let SPECIAL_NODES;
let componentsAlias;
function hydrate(node) {
  var _a2;
  componentsAlias || (componentsAlias = getComponentsAlias());
  SPECIAL_NODES || (SPECIAL_NODES = hooks.call("getSpecialNodes"));
  const nodeName = node.nodeName;
  let compileModeName = null;
  if (isText(node)) {
    return {
      sid: node.sid,
      [
        "v"
        /* Shortcuts.Text */
      ]: node.nodeValue,
      [
        "nn"
        /* Shortcuts.NodeName */
      ]: ((_a2 = componentsAlias[nodeName]) === null || _a2 === void 0 ? void 0 : _a2._num) || "8"
    };
  }
  const data = {
    [
      "nn"
      /* Shortcuts.NodeName */
    ]: nodeName,
    sid: node.sid
  };
  if (node.uid !== node.sid) {
    data.uid = node.uid;
  }
  if (SPECIAL_NODES.indexOf(nodeName) > -1) {
    if (!node.isAnyEventBinded()) {
      data[
        "nn"
        /* Shortcuts.NodeName */
      ] = `static-${nodeName}`;
      if (nodeName === VIEW && !isHasExtractProp(node)) {
        data[
          "nn"
          /* Shortcuts.NodeName */
        ] = PURE_VIEW;
      }
    }
    if (nodeName === VIEW && node.isOnlyClickBinded() && !isHasExtractProp(node)) {
      data[
        "nn"
        /* Shortcuts.NodeName */
      ] = CLICK_VIEW;
    }
  }
  const { props } = node;
  for (const prop in props) {
    const propInCamelCase = toCamelCase(prop);
    if (!prop.startsWith("data-") && // 在 node.dataset 的数据
    prop !== CLASS && prop !== STYLE && prop !== ID && propInCamelCase !== CATCHMOVE && propInCamelCase !== COMPILE_MODE) {
      data[propInCamelCase] = props[prop];
    }
    if (nodeName === VIEW && propInCamelCase === CATCHMOVE && props[prop] !== false) {
      data[
        "nn"
        /* Shortcuts.NodeName */
      ] = CATCH_VIEW;
    }
    if (propInCamelCase === COMPILE_MODE) {
      compileModeName = props[prop];
    }
  }
  data[
    "cn"
    /* Shortcuts.Childnodes */
  ] = node.childNodes.filter((node2) => !isComment(node2)).map(hydrate);
  if (node.className !== "") {
    data[
      "cl"
      /* Shortcuts.Class */
    ] = node.className;
  }
  const cssText = node.cssText;
  if (cssText !== "" && nodeName !== "swiper-item") {
    data[
      "st"
      /* Shortcuts.Style */
    ] = cssText;
  }
  hooks.call("modifyHydrateData", data, node);
  const nn = data[
    "nn"
    /* Shortcuts.NodeName */
  ];
  const componentAlias = componentsAlias[nn];
  if (componentAlias) {
    data[
      "nn"
      /* Shortcuts.NodeName */
    ] = componentAlias._num;
    for (const prop in data) {
      if (prop in componentAlias) {
        data[componentAlias[prop]] = data[prop];
        delete data[prop];
      }
    }
  }
  if (compileModeName !== null) {
    data[
      "nn"
      /* Shortcuts.NodeName */
    ] = compileModeName;
  }
  const resData = hooks.call("transferHydrateData", data, node, componentAlias);
  return resData || data;
}
class TaroEventTarget {
  constructor() {
    this.__handlers = {};
  }
  addEventListener(type, handler, options2) {
    type = type.toLowerCase();
    hooks.call("onAddEvent", type, handler, options2, this);
    if (type === "regionchange") {
      this.addEventListener("begin", handler, options2);
      this.addEventListener("end", handler, options2);
      return;
    }
    let isCapture = Boolean(options2);
    let isOnce = false;
    if (isObject$1(options2)) {
      isCapture = Boolean(options2.capture);
      isOnce = Boolean(options2.once);
    }
    if (isOnce) {
      const wrapper = function() {
        handler.apply(this, arguments);
        this.removeEventListener(type, wrapper);
      };
      this.addEventListener(type, wrapper, Object.assign(Object.assign({}, options2), { once: false }));
      return;
    }
    warn$3(isCapture, "Taro 暂未实现 event 的 capture 特性。");
    const oldHandler = handler;
    handler = function() {
      return oldHandler.apply(this, arguments);
    };
    handler.oldHandler = oldHandler;
    const handlers = this.__handlers[type];
    if (isArray$1(handlers)) {
      handlers.push(handler);
    } else {
      this.__handlers[type] = [handler];
    }
  }
  removeEventListener(type, handler) {
    type = type.toLowerCase();
    if (type === "regionchange") {
      this.removeEventListener("begin", handler);
      this.removeEventListener("end", handler);
      return;
    }
    if (!handler) {
      return;
    }
    const handlers = this.__handlers[type];
    if (!isArray$1(handlers)) {
      return;
    }
    const index = handlers.findIndex((item) => {
      if (item === handler || item.oldHandler === handler)
        return true;
    });
    warn$3(index === -1, `事件: '${type}' 没有注册在 DOM 中，因此不会被移除。`);
    handlers.splice(index, 1);
  }
  isAnyEventBinded() {
    const handlers = this.__handlers;
    const isAnyEventBinded = Object.keys(handlers).find((key) => handlers[key].length);
    return Boolean(isAnyEventBinded);
  }
  isOnlyClickBinded() {
    const handlers = this.__handlers;
    const isOnlyClickBinded = handlers.tap && Object.keys(handlers).length === 1;
    return Boolean(isOnlyClickBinded);
  }
}
const CHILDNODES = "cn";
const nodeId = incrementId();
class TaroNode extends TaroEventTarget {
  constructor() {
    super();
    this.parentNode = null;
    this.childNodes = [];
    this.hydrate = (node) => () => hydrate(node);
    this.uid = "_" + nodeId();
    this.sid = this.uid;
    eventSource.set(this.sid, this);
  }
  updateChildNodes(isClean) {
    const cleanChildNodes = () => [];
    const rerenderChildNodes = () => {
      const childNodes = this.childNodes.filter((node) => !isComment(node));
      return childNodes.map(hydrate);
    };
    this.enqueueUpdate({
      path: `${this._path}.${CHILDNODES}`,
      value: isClean ? cleanChildNodes : rerenderChildNodes
    });
  }
  updateSingleChild(index) {
    this.childNodes.forEach((child, childIndex) => {
      if (isComment(child))
        return;
      if (index && childIndex < index)
        return;
      this.enqueueUpdate({
        path: child._path,
        value: this.hydrate(child)
      });
    });
  }
  get _root() {
    var _a2;
    return ((_a2 = this.parentNode) === null || _a2 === void 0 ? void 0 : _a2._root) || null;
  }
  findIndex(refChild) {
    const index = this.childNodes.indexOf(refChild);
    ensure(index !== -1, "The node to be replaced is not a child of this node.");
    return index;
  }
  get _path() {
    const parentNode = this.parentNode;
    if (parentNode) {
      const list = parentNode.childNodes.filter((node) => !isComment(node));
      const indexOfNode = list.indexOf(this);
      const index = hooks.call("getPathIndex", indexOfNode);
      return `${parentNode._path}.${CHILDNODES}.${index}`;
    }
    return "";
  }
  get nextSibling() {
    const parentNode = this.parentNode;
    return (parentNode === null || parentNode === void 0 ? void 0 : parentNode.childNodes[parentNode.findIndex(this) + 1]) || null;
  }
  get previousSibling() {
    const parentNode = this.parentNode;
    return (parentNode === null || parentNode === void 0 ? void 0 : parentNode.childNodes[parentNode.findIndex(this) - 1]) || null;
  }
  get parentElement() {
    const parentNode = this.parentNode;
    if ((parentNode === null || parentNode === void 0 ? void 0 : parentNode.nodeType) === 1) {
      return parentNode;
    }
    return null;
  }
  get firstChild() {
    return this.childNodes[0] || null;
  }
  get lastChild() {
    const childNodes = this.childNodes;
    return childNodes[childNodes.length - 1] || null;
  }
  /**
   * @textContent 目前只能置空子元素
   * @TODO 等待完整 innerHTML 实现
   */
  // eslint-disable-next-line accessor-pairs
  set textContent(text) {
    const removedNodes = this.childNodes.slice();
    const addedNodes = [];
    while (this.firstChild) {
      this.removeChild(this.firstChild, { doUpdate: false });
    }
    if (text === "") {
      this.updateChildNodes(true);
    } else {
      const newText = env.document.createTextNode(text);
      addedNodes.push(newText);
      this.appendChild(newText);
      this.updateChildNodes();
    }
    MutationObserver.record({
      type: "childList",
      target: this,
      removedNodes,
      addedNodes
    });
  }
  /**
   * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/insertBefore
   * @scenario
   * [A,B,C]
   *   1. insert D before C, D has no parent
   *   2. insert D before C, D has the same parent of C
   *   3. insert D before C, D has the different parent of C
   */
  insertBefore(newChild, refChild, isReplace) {
    if (newChild.nodeName === DOCUMENT_FRAGMENT) {
      newChild.childNodes.reduceRight((previousValue, currentValue) => {
        this.insertBefore(currentValue, previousValue);
        return currentValue;
      }, refChild);
      return newChild;
    }
    newChild.remove({ cleanRef: false });
    let index = 0;
    newChild.parentNode = this;
    if (refChild) {
      index = this.findIndex(refChild);
      this.childNodes.splice(index, 0, newChild);
    } else {
      this.childNodes.push(newChild);
    }
    const childNodesLength = this.childNodes.length;
    if (this._root) {
      if (!refChild) {
        const isOnlyChild = childNodesLength === 1;
        if (isOnlyChild) {
          this.updateChildNodes();
        } else {
          this.enqueueUpdate({
            path: newChild._path,
            value: this.hydrate(newChild)
          });
        }
      } else if (isReplace) {
        this.enqueueUpdate({
          path: newChild._path,
          value: this.hydrate(newChild)
        });
      } else {
        const mark = childNodesLength * 2 / 3;
        if (mark > index) {
          this.updateChildNodes();
        } else {
          this.updateSingleChild(index);
        }
      }
    }
    MutationObserver.record({
      type: "childList",
      target: this,
      addedNodes: [newChild],
      removedNodes: isReplace ? [refChild] : [],
      nextSibling: isReplace ? refChild.nextSibling : refChild || null,
      /** insertBefore & appendChild */
      previousSibling: newChild.previousSibling
    });
    return newChild;
  }
  /**
   * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/appendChild
   * @scenario
   * [A,B,C]
   *   1. append C, C has no parent
   *   2. append C, C has the same parent of B
   *   3. append C, C has the different parent of B
   */
  appendChild(newChild) {
    return this.insertBefore(newChild);
  }
  /**
   * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/replaceChild
   * @scenario
   * [A,B,C]
   *   1. replace B with C, C has no parent
   *   2. replace B with C, C has no parent, C has the same parent of B
   *   3. replace B with C, C has no parent, C has the different parent of B
   */
  replaceChild(newChild, oldChild) {
    if (oldChild.parentNode !== this)
      return;
    this.insertBefore(newChild, oldChild, true);
    oldChild.remove({ doUpdate: false });
    return oldChild;
  }
  /**
   * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/removeChild
   * @scenario
   * [A,B,C]
   *   1. remove A or B
   *   2. remove C
   */
  removeChild(child, options2 = {}) {
    const { cleanRef, doUpdate } = options2;
    if (cleanRef !== false && doUpdate !== false) {
      MutationObserver.record({
        type: "childList",
        target: this,
        removedNodes: [child],
        nextSibling: child.nextSibling,
        previousSibling: child.previousSibling
      });
    }
    const index = this.findIndex(child);
    this.childNodes.splice(index, 1);
    child.parentNode = null;
    if (cleanRef !== false) {
      eventSource.removeNodeTree(child);
    }
    if (this._root && doUpdate !== false) {
      this.updateChildNodes();
    }
    return child;
  }
  remove(options2) {
    var _a2;
    (_a2 = this.parentNode) === null || _a2 === void 0 ? void 0 : _a2.removeChild(this, options2);
  }
  hasChildNodes() {
    return this.childNodes.length > 0;
  }
  enqueueUpdate(payload) {
    var _a2;
    (_a2 = this._root) === null || _a2 === void 0 ? void 0 : _a2.enqueueUpdate(payload);
  }
  get ownerDocument() {
    return env.document;
  }
  static extend(methodName, options2) {
    extend$1(TaroNode, methodName, options2);
  }
}
const WEBKIT = "webkit";
const styleProperties = [
  "all",
  "appearance",
  "backdropFilter",
  "blockOverflow",
  "blockSize",
  "bottom",
  "clear",
  "contain",
  "content",
  "continue",
  "cursor",
  "direction",
  "display",
  "filter",
  "float",
  "gap",
  "height",
  "inset",
  "isolation",
  "left",
  "letterSpacing",
  "lightingColor",
  "markerSide",
  "mixBlendMode",
  "opacity",
  "order",
  "position",
  "quotes",
  "resize",
  "right",
  "rowGap",
  "tabSize",
  "tableLayout",
  "top",
  "userSelect",
  "verticalAlign",
  "visibility",
  "voiceFamily",
  "volume",
  "whiteSpace",
  "widows",
  "width",
  "zIndex",
  "pointerEvents",
  "aspectRatio"
  /** 非常用 style */
  // 'azimuth',
  // 'backfaceVisibility',
  // 'baselineShift',
  // 'captionSide',
  // 'chains',
  // 'dominantBaseline',
  // 'elevation',
  // 'emptyCells',
  // 'forcedColorAdjust',
  // 'glyphOrientationVertical',
  // 'hangingPunctuation',
  // 'hyphenateCharacter',
  // 'hyphens',
  // 'imageOrientation',
  // 'imageResolution',
  // 'orphans',
  // 'playDuring',
  // 'pointerEvents',
  // 'regionFragment',
  // 'richness',
  // 'running',
  // 'scrollBehavior',
  // 'speechRate',
  // 'stress',
  // 'stringSet',
  // 'unicodeBidi',
  // 'willChange',
  // 'writingMode',
];
function combine(prefix, list, excludeSelf) {
  !excludeSelf && styleProperties.push(prefix);
  list.forEach((item) => {
    styleProperties.push(prefix + item);
    if (prefix === WEBKIT) {
      styleProperties.push("Webkit" + item);
    }
  });
}
const color = "Color";
const style = "Style";
const width = "Width";
const image = "Image";
const size = "Size";
const color_style_width = [color, style, width];
const fitlength_fitwidth_image = ["FitLength", "FitWidth", image];
const fitlength_fitwidth_image_radius = [...fitlength_fitwidth_image, "Radius"];
const color_style_width_fitlength_fitwidth_image = [...color_style_width, ...fitlength_fitwidth_image];
const endRadius_startRadius = ["EndRadius", "StartRadius"];
const bottom_left_right_top = ["Bottom", "Left", "Right", "Top"];
const end_start = ["End", "Start"];
const content_items_self = ["Content", "Items", "Self"];
const blockSize_height_inlineSize_width = ["BlockSize", "Height", "InlineSize", width];
const after_before = ["After", "Before"];
combine("borderBlock", color_style_width);
combine("borderBlockEnd", color_style_width);
combine("borderBlockStart", color_style_width);
combine("outline", [...color_style_width, "Offset"]);
combine("border", [...color_style_width, "Boundary", "Break", "Collapse", "Radius", "Spacing"]);
combine("borderFit", ["Length", width]);
combine("borderInline", color_style_width);
combine("borderInlineEnd", color_style_width);
combine("borderInlineStart", color_style_width);
combine("borderLeft", color_style_width_fitlength_fitwidth_image);
combine("borderRight", color_style_width_fitlength_fitwidth_image);
combine("borderTop", color_style_width_fitlength_fitwidth_image);
combine("borderBottom", color_style_width_fitlength_fitwidth_image);
combine("textDecoration", [color, style, "Line"]);
combine("textEmphasis", [color, style, "Position"]);
combine("scrollMargin", bottom_left_right_top);
combine("scrollPadding", bottom_left_right_top);
combine("padding", bottom_left_right_top);
combine("margin", [...bottom_left_right_top, "Trim"]);
combine("scrollMarginBlock", end_start);
combine("scrollMarginInline", end_start);
combine("scrollPaddingBlock", end_start);
combine("scrollPaddingInline", end_start);
combine("gridColumn", end_start);
combine("gridRow", end_start);
combine("insetBlock", end_start);
combine("insetInline", end_start);
combine("marginBlock", end_start);
combine("marginInline", end_start);
combine("paddingBlock", end_start);
combine("paddingInline", end_start);
combine("pause", after_before);
combine("cue", after_before);
combine("mask", ["Clip", "Composite", image, "Mode", "Origin", "Position", "Repeat", size, "Type"]);
combine("borderImage", ["Outset", "Repeat", "Slice", "Source", "Transform", width]);
combine("maskBorder", ["Mode", "Outset", "Repeat", "Slice", "Source", width]);
combine("font", ["Family", "FeatureSettings", "Kerning", "LanguageOverride", "MaxSize", "MinSize", "OpticalSizing", "Palette", size, "SizeAdjust", "Stretch", style, "Weight", "VariationSettings"]);
combine("transform", ["Box", "Origin", style]);
combine("background", [color, image, "Attachment", "BlendMode", "Clip", "Origin", "Position", "Repeat", size]);
combine("listStyle", [image, "Position", "Type"]);
combine("scrollSnap", ["Align", "Stop", "Type"]);
combine("grid", ["Area", "AutoColumns", "AutoFlow", "AutoRows"]);
combine("gridTemplate", ["Areas", "Columns", "Rows"]);
combine("overflow", ["Block", "Inline", "Wrap", "X", "Y"]);
combine("transition", ["Delay", "Duration", "Property", "TimingFunction"]);
combine("color", ["Adjust", "InterpolationFilters", "Scheme"]);
combine("textAlign", ["All", "Last"]);
combine("page", ["BreakAfter", "BreakBefore", "BreakInside"]);
combine("animation", ["Delay", "Direction", "Duration", "FillMode", "IterationCount", "Name", "PlayState", "TimingFunction"]);
combine("flex", ["Basis", "Direction", "Flow", "Grow", "Shrink", "Wrap"]);
combine("offset", [...after_before, ...end_start, "Anchor", "Distance", "Path", "Position", "Rotate"]);
combine("perspective", ["Origin"]);
combine("clip", ["Path", "Rule"]);
combine("flow", ["From", "Into"]);
combine("align", ["Content", "Items", "Self"], true);
combine("alignment", ["Adjust", "Baseline"], true);
combine("borderStart", endRadius_startRadius, true);
combine("borderEnd", endRadius_startRadius, true);
combine("borderCorner", ["Fit", image, "ImageTransform"], true);
combine("borderTopLeft", fitlength_fitwidth_image_radius, true);
combine("borderTopRight", fitlength_fitwidth_image_radius, true);
combine("borderBottomLeft", fitlength_fitwidth_image_radius, true);
combine("borderBottomRight", fitlength_fitwidth_image_radius, true);
combine("column", ["s", "Count", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "Span", width], true);
combine("break", [...after_before, "Inside"], true);
combine("wrap", [...after_before, "Flow", "Inside", "Through"], true);
combine("justify", content_items_self, true);
combine("place", content_items_self, true);
combine("max", [...blockSize_height_inlineSize_width, "Lines"], true);
combine("min", blockSize_height_inlineSize_width, true);
combine("line", ["Break", "Clamp", "Grid", "Height", "Padding", "Snap"], true);
combine("inline", ["BoxAlign", size, "Sizing"], true);
combine("text", ["CombineUpright", "GroupAlign", "Height", "Indent", "Justify", "Orientation", "Overflow", "Shadow", "SpaceCollapse", "SpaceTrim", "Spacing", "Transform", "UnderlinePosition", "Wrap"], true);
combine("shape", ["ImageThreshold", "Inside", "Margin", "Outside"], true);
combine("word", ["Break", "Spacing", "Wrap"], true);
combine("object", ["Fit", "Position"], true);
combine("box", ["DecorationBreak", "Shadow", "Sizing", "Snap"], true);
combine(WEBKIT, ["LineClamp", "BoxOrient", "TextFillColor", "TextStroke", "TextStrokeColor", "TextStrokeWidth"], true);
function recordCss(obj) {
  MutationObserver.record({
    type: "attributes",
    target: obj._element,
    attributeName: "style",
    oldValue: obj.cssText
  });
}
function enqueueUpdate(obj) {
  const element = obj._element;
  if (element._root) {
    element.enqueueUpdate({
      path: `${element._path}.${"st"}`,
      value: obj.cssText
    });
  }
}
function setStyle$1(newVal, styleKey) {
  warn$3(isString$1(newVal) && newVal.length > PROPERTY_THRESHOLD, `Style 属性 ${styleKey} 的值数据量过大，可能会影响渲染性能，考虑使用 CSS 类或其它方案替代。`);
  const old = this[styleKey];
  if (old === newVal)
    return;
  !this._pending && recordCss(this);
  if (isNull(newVal) || isUndefined(newVal) || newVal === "") {
    this._usedStyleProp.delete(styleKey);
    delete this._value[styleKey];
  } else {
    this._usedStyleProp.add(styleKey);
    this._value[styleKey] = newVal;
  }
  !this._pending && enqueueUpdate(this);
}
function initStyle(ctor, styleProperties2) {
  const properties = {};
  for (let i = 0; i < styleProperties2.length; i++) {
    const styleKey = styleProperties2[i];
    if (ctor[styleKey])
      return;
    properties[styleKey] = {
      get() {
        const val = this._value[styleKey];
        return isNull(val) || isUndefined(val) ? "" : val;
      },
      set(newVal) {
        setStyle$1.call(this, newVal, styleKey);
      }
    };
  }
  Object.defineProperties(ctor.prototype, properties);
}
function isCssVariable(propertyName) {
  return /^--/.test(propertyName);
}
class Style {
  constructor(element) {
    this._element = element;
    this._usedStyleProp = /* @__PURE__ */ new Set();
    this._value = {};
  }
  setCssVariables(styleKey) {
    this.hasOwnProperty(styleKey) || Object.defineProperty(this, styleKey, {
      enumerable: true,
      configurable: true,
      get: () => {
        return this._value[styleKey] || "";
      },
      set: (newVal) => {
        setStyle$1.call(this, newVal, styleKey);
      }
    });
  }
  get cssText() {
    if (!this._usedStyleProp.size)
      return "";
    const texts = [];
    this._usedStyleProp.forEach((key) => {
      const val = this[key];
      if (isNull(val) || isUndefined(val))
        return;
      let styleName = isCssVariable(key) ? key : toDashed(key);
      if (styleName.indexOf("webkit") === 0 || styleName.indexOf("Webkit") === 0) {
        styleName = `-${styleName}`;
      }
      texts.push(`${styleName}: ${val};`);
    });
    return texts.join(" ");
  }
  set cssText(str) {
    this._pending = true;
    recordCss(this);
    this._usedStyleProp.forEach((prop) => {
      this.removeProperty(prop);
    });
    if (str === "" || isUndefined(str) || isNull(str)) {
      this._pending = false;
      enqueueUpdate(this);
      return;
    }
    const rules = str.split(";");
    for (let i = 0; i < rules.length; i++) {
      const rule = rules[i].trim();
      if (rule === "") {
        continue;
      }
      const [propName, ...valList] = rule.split(":");
      const val = valList.join(":");
      if (isUndefined(val)) {
        continue;
      }
      this.setProperty(propName.trim(), val.trim());
    }
    this._pending = false;
    enqueueUpdate(this);
  }
  setProperty(propertyName, value) {
    if (propertyName[0] === "-") {
      this.setCssVariables(propertyName);
    } else {
      propertyName = toCamelCase(propertyName);
    }
    if (isNull(value) || isUndefined(value)) {
      this.removeProperty(propertyName);
    } else {
      this[propertyName] = value;
    }
  }
  removeProperty(propertyName) {
    propertyName = toCamelCase(propertyName);
    if (!this._usedStyleProp.has(propertyName)) {
      return "";
    }
    const value = this[propertyName];
    this[propertyName] = void 0;
    return value;
  }
  getPropertyValue(propertyName) {
    propertyName = toCamelCase(propertyName);
    const value = this[propertyName];
    if (!value) {
      return "";
    }
    return value;
  }
}
initStyle(Style, styleProperties);
hooks.tap("injectNewStyleProperties", (newStyleProperties) => {
  if (isArray$1(newStyleProperties)) {
    initStyle(Style, newStyleProperties);
  } else {
    if (typeof newStyleProperties !== "string")
      return;
    initStyle(Style, [newStyleProperties]);
  }
});
function returnTrue() {
  return true;
}
function treeToArray(root, predict) {
  const array = [];
  const filter = predict !== null && predict !== void 0 ? predict : returnTrue;
  let object = root;
  while (object) {
    if (object.nodeType === 1 && filter(object)) {
      array.push(object);
    }
    object = following(object, root);
  }
  return array;
}
function following(el, root) {
  const firstChild = el.firstChild;
  const isElmentTypeValid = el.nodeType === 1 || el.nodeType === 9;
  if (firstChild && isElmentTypeValid) {
    return firstChild;
  }
  let current = el;
  do {
    if (current === root) {
      return null;
    }
    const nextSibling = current.nextSibling;
    if (nextSibling) {
      return nextSibling;
    }
    current = current.parentElement;
  } while (current);
  return null;
}
class TaroElement extends TaroNode {
  constructor() {
    super();
    this.props = {};
    this.dataset = EMPTY_OBJ$1;
    this.nodeType = 1;
    this.style = new Style(this);
    hooks.call("patchElement", this);
  }
  _stopPropagation(event) {
    let target = this;
    while (target = target.parentNode) {
      const listeners = target.__handlers[event.type];
      if (!isArray$1(listeners)) {
        continue;
      }
      for (let i = listeners.length; i--; ) {
        const l = listeners[i];
        l._stop = true;
      }
    }
  }
  get id() {
    return this.getAttribute(ID);
  }
  set id(val) {
    this.setAttribute(ID, val);
  }
  get className() {
    return this.getAttribute(CLASS) || "";
  }
  set className(val) {
    this.setAttribute(CLASS, val);
  }
  get cssText() {
    return this.getAttribute(STYLE) || "";
  }
  get classList() {
    return new ClassList(this.className, this);
  }
  get children() {
    return this.childNodes.filter(isElement);
  }
  get attributes() {
    const props = this.props;
    const propKeys = Object.keys(props);
    const style2 = this.style.cssText;
    const attrs = propKeys.map((key) => ({ name: key, value: props[key] }));
    return attrs.concat(style2 ? { name: STYLE, value: style2 } : []);
  }
  get textContent() {
    let text = "";
    const childNodes = this.childNodes;
    for (let i = 0; i < childNodes.length; i++) {
      text += childNodes[i].textContent;
    }
    return text;
  }
  set textContent(text) {
    super.textContent = text;
  }
  hasAttribute(qualifiedName) {
    return !isUndefined(this.props[qualifiedName]);
  }
  hasAttributes() {
    return this.attributes.length > 0;
  }
  get focus() {
    return function() {
      this.setAttribute(FOCUS, true);
    };
  }
  // 兼容 Vue3，详情请见：https://github.com/NervJS/taro/issues/10579
  set focus(value) {
    this.setAttribute(FOCUS, value);
  }
  blur() {
    this.setAttribute(FOCUS, false);
  }
  setAttribute(qualifiedName, value) {
    warn$3(isString$1(value) && value.length > PROPERTY_THRESHOLD, `元素 ${this.nodeName} 的 ${qualifiedName} 属性值数据量过大，可能会影响渲染性能。考虑降低图片转为 base64 的阈值或在 CSS 中使用 base64。`);
    const isPureView = this.nodeName === VIEW && !isHasExtractProp(this) && !this.isAnyEventBinded();
    if (qualifiedName !== STYLE) {
      MutationObserver.record({
        target: this,
        type: "attributes",
        attributeName: qualifiedName,
        oldValue: this.getAttribute(qualifiedName)
      });
    }
    switch (qualifiedName) {
      case STYLE:
        this.style.cssText = value;
        break;
      case ID:
        if (this.uid !== this.sid) {
          eventSource.delete(this.uid);
        }
        value = String(value);
        this.props[qualifiedName] = this.uid = value;
        eventSource.set(value, this);
        break;
      default:
        this.props[qualifiedName] = value;
        if (qualifiedName.startsWith("data-")) {
          if (this.dataset === EMPTY_OBJ$1) {
            this.dataset = /* @__PURE__ */ Object.create(null);
          }
          this.dataset[toCamelCase(qualifiedName.replace(/^data-/, ""))] = value;
        }
        break;
    }
    if (!this._root)
      return;
    const componentsAlias2 = getComponentsAlias();
    const _alias = componentsAlias2[this.nodeName];
    const viewAlias = componentsAlias2[VIEW]._num;
    const clickViewAlias = componentsAlias2[CLICK_VIEW]._num;
    const staticViewAlias = componentsAlias2[STATIC_VIEW]._num;
    const catchViewAlias = componentsAlias2[CATCH_VIEW]._num;
    const _path = this._path;
    qualifiedName = shortcutAttr(qualifiedName);
    const qualifiedNameInCamelCase = toCamelCase(qualifiedName);
    const payload = {
      path: `${_path}.${qualifiedNameInCamelCase}`,
      value: isFunction$1(value) ? () => value : value
    };
    hooks.call("modifySetAttrPayload", this, qualifiedName, payload, componentsAlias2);
    if (_alias) {
      const qualifiedNameAlias = _alias[qualifiedNameInCamelCase] || qualifiedName;
      payload.path = `${_path}.${toCamelCase(qualifiedNameAlias)}`;
    }
    this.enqueueUpdate(payload);
    if (this.nodeName === VIEW) {
      if (qualifiedNameInCamelCase === CATCHMOVE) {
        this.enqueueUpdate({
          path: `${_path}.${"nn"}`,
          value: value ? catchViewAlias : this.isOnlyClickBinded() && !isHasExtractProp(this) ? clickViewAlias : this.isAnyEventBinded() ? viewAlias : staticViewAlias
        });
      } else if (isPureView && isHasExtractProp(this)) {
        this.enqueueUpdate({
          path: `${_path}.${"nn"}`,
          value: staticViewAlias
        });
      }
    }
  }
  removeAttribute(qualifiedName) {
    const isStaticView = this.nodeName === VIEW && isHasExtractProp(this) && !this.isAnyEventBinded();
    MutationObserver.record({
      target: this,
      type: "attributes",
      attributeName: qualifiedName,
      oldValue: this.getAttribute(qualifiedName)
    });
    if (qualifiedName === STYLE) {
      this.style.cssText = "";
    } else {
      const isInterrupt = hooks.call("onRemoveAttribute", this, qualifiedName);
      if (isInterrupt) {
        return;
      }
      if (!this.props.hasOwnProperty(qualifiedName)) {
        return;
      }
      delete this.props[qualifiedName];
    }
    if (!this._root)
      return;
    const componentsAlias2 = getComponentsAlias();
    const _alias = componentsAlias2[this.nodeName];
    const viewAlias = componentsAlias2[VIEW]._num;
    const staticViewAlias = componentsAlias2[STATIC_VIEW]._num;
    const pureViewAlias = componentsAlias2[PURE_VIEW]._num;
    const clickViewAlias = componentsAlias2[CLICK_VIEW]._num;
    const _path = this._path;
    qualifiedName = shortcutAttr(qualifiedName);
    const qualifiedNameInCamelCase = toCamelCase(qualifiedName);
    const payload = {
      path: `${_path}.${qualifiedNameInCamelCase}`,
      value: ""
    };
    hooks.call("modifyRmAttrPayload", this, qualifiedName, payload, componentsAlias2);
    if (_alias) {
      const qualifiedNameAlias = _alias[qualifiedNameInCamelCase] || qualifiedName;
      payload.path = `${_path}.${toCamelCase(qualifiedNameAlias)}`;
    }
    this.enqueueUpdate(payload);
    if (this.nodeName === VIEW) {
      if (qualifiedNameInCamelCase === CATCHMOVE) {
        this.enqueueUpdate({
          path: `${_path}.${"nn"}`,
          value: this.isOnlyClickBinded() && !isHasExtractProp(this) ? clickViewAlias : this.isAnyEventBinded() ? viewAlias : isHasExtractProp(this) ? staticViewAlias : pureViewAlias
        });
      } else if (isStaticView && !isHasExtractProp(this)) {
        this.enqueueUpdate({
          path: `${_path}.${"nn"}`,
          value: pureViewAlias
        });
      }
    }
  }
  getAttribute(qualifiedName) {
    const attr = qualifiedName === STYLE ? this.style.cssText : this.props[qualifiedName];
    return attr !== null && attr !== void 0 ? attr : "";
  }
  getElementsByTagName(tagName) {
    return treeToArray(this, (el) => {
      return el.nodeName === tagName || tagName === "*" && this !== el;
    });
  }
  getElementsByClassName(className) {
    const classNames = className.trim().split(/\s+/);
    return treeToArray(this, (el) => {
      const classList = el.classList;
      return classNames.every((c) => classList.contains(c));
    });
  }
  dispatchEvent(event) {
    const cancelable = event.cancelable;
    const listeners = this.__handlers[event.type];
    if (!isArray$1(listeners)) {
      return false;
    }
    for (let i = listeners.length; i--; ) {
      const listener = listeners[i];
      let result;
      if (listener._stop) {
        listener._stop = false;
      } else {
        hooks.call("modifyDispatchEvent", event, this);
        result = listener.call(this, event);
      }
      if ((result === false || event._end) && cancelable) {
        event.defaultPrevented = true;
      }
      if (!isUndefined(result) && event.mpEvent) {
        const res = hooks.call("modifyTaroEventReturn", this, event, result);
        if (res) {
          event.mpEvent[EVENT_CALLBACK_RESULT] = result;
        }
      }
      if (event._end && event._stop) {
        break;
      }
    }
    if (event._stop) {
      this._stopPropagation(event);
    }
    return listeners != null;
  }
  addEventListener(type, handler, options2) {
    const name = this.nodeName;
    const SPECIAL_NODES2 = hooks.call("getSpecialNodes");
    let sideEffect = true;
    if (isObject$1(options2) && options2.sideEffect === false) {
      sideEffect = false;
      delete options2.sideEffect;
    }
    hooks.call("modifyAddEventListener", this, sideEffect, getComponentsAlias);
    if (sideEffect !== false && !this.isAnyEventBinded() && SPECIAL_NODES2.indexOf(name) > -1) {
      const componentsAlias2 = getComponentsAlias();
      const alias = componentsAlias2[name]._num;
      this.enqueueUpdate({
        path: `${this._path}.${"nn"}`,
        value: alias
      });
    }
    super.addEventListener(type, handler, options2);
  }
  removeEventListener(type, handler, sideEffect = true) {
    super.removeEventListener(type, handler);
    const name = this.nodeName;
    const SPECIAL_NODES2 = hooks.call("getSpecialNodes");
    hooks.call("modifyRemoveEventListener", this, sideEffect, getComponentsAlias);
    if (sideEffect !== false && !this.isAnyEventBinded() && SPECIAL_NODES2.indexOf(name) > -1) {
      const componentsAlias2 = getComponentsAlias();
      const value = isHasExtractProp(this) ? `static-${name}` : `pure-${name}`;
      const valueAlias = componentsAlias2[value]._num;
      this.enqueueUpdate({
        path: `${this._path}.${"nn"}`,
        value: valueAlias
      });
    }
  }
  static extend(methodName, options2) {
    extend$1(TaroElement, methodName, options2);
  }
}
const options = {
  prerender: true,
  debug: false
};
function initPosition() {
  return {
    index: 0,
    column: 0,
    line: 0
  };
}
function feedPosition(position, str, len) {
  const start = position.index;
  const end = position.index = start + len;
  for (let i = start; i < end; i++) {
    const char = str.charAt(i);
    if (char === "\n") {
      position.line++;
      position.column = 0;
    } else {
      position.column++;
    }
  }
}
function jumpPosition(position, str, end) {
  const len = end - position.index;
  return feedPosition(position, str, len);
}
function copyPosition(position) {
  return {
    index: position.index,
    line: position.line,
    column: position.column
  };
}
const whitespace = /\s/;
function isWhitespaceChar(char) {
  return whitespace.test(char);
}
const equalSign = /=/;
function isEqualSignChar(char) {
  return equalSign.test(char);
}
function shouldBeIgnore(tagName) {
  const name = tagName.toLowerCase();
  if (options.html.skipElements.has(name)) {
    return true;
  }
  return false;
}
const alphanumeric = /[A-Za-z0-9]/;
function findTextEnd(str, index) {
  while (true) {
    const textEnd = str.indexOf("<", index);
    if (textEnd === -1) {
      return textEnd;
    }
    const char = str.charAt(textEnd + 1);
    if (char === "/" || char === "!" || alphanumeric.test(char)) {
      return textEnd;
    }
    index = textEnd + 1;
  }
}
function isWordEnd(cursor, wordBegin, html) {
  if (!isWhitespaceChar(html.charAt(cursor)))
    return false;
  const len = html.length;
  for (let i = cursor - 1; i > wordBegin; i--) {
    const char = html.charAt(i);
    if (!isWhitespaceChar(char)) {
      if (isEqualSignChar(char))
        return false;
      break;
    }
  }
  for (let i = cursor + 1; i < len; i++) {
    const char = html.charAt(i);
    if (!isWhitespaceChar(char)) {
      if (isEqualSignChar(char))
        return false;
      return true;
    }
  }
}
class Scaner {
  constructor(html) {
    this.tokens = [];
    this.position = initPosition();
    this.html = html;
  }
  scan() {
    const { html, position } = this;
    const len = html.length;
    while (position.index < len) {
      const start = position.index;
      this.scanText();
      if (position.index === start) {
        const isComment2 = html.startsWith("!--", start + 1);
        if (isComment2) {
          this.scanComment();
        } else {
          const tagName = this.scanTag();
          if (shouldBeIgnore(tagName)) {
            this.scanSkipTag(tagName);
          }
        }
      }
    }
    return this.tokens;
  }
  scanText() {
    const type = "text";
    const { html, position } = this;
    let textEnd = findTextEnd(html, position.index);
    if (textEnd === position.index) {
      return;
    }
    if (textEnd === -1) {
      textEnd = html.length;
    }
    const start = copyPosition(position);
    const content = html.slice(position.index, textEnd);
    jumpPosition(position, html, textEnd);
    const end = copyPosition(position);
    this.tokens.push({ type, content, position: { start, end } });
  }
  scanComment() {
    const type = "comment";
    const { html, position } = this;
    const start = copyPosition(position);
    feedPosition(position, html, 4);
    let contentEnd = html.indexOf("-->", position.index);
    let commentEnd = contentEnd + 3;
    if (contentEnd === -1) {
      contentEnd = commentEnd = html.length;
    }
    const content = html.slice(position.index, contentEnd);
    jumpPosition(position, html, commentEnd);
    this.tokens.push({
      type,
      content,
      position: {
        start,
        end: copyPosition(position)
      }
    });
  }
  scanTag() {
    this.scanTagStart();
    const tagName = this.scanTagName();
    this.scanAttrs();
    this.scanTagEnd();
    return tagName;
  }
  scanTagStart() {
    const type = "tag-start";
    const { html, position } = this;
    const secondChar = html.charAt(position.index + 1);
    const close = secondChar === "/";
    const start = copyPosition(position);
    feedPosition(position, html, close ? 2 : 1);
    this.tokens.push({ type, close, position: { start } });
  }
  scanTagEnd() {
    const type = "tag-end";
    const { html, position } = this;
    const firstChar = html.charAt(position.index);
    const close = firstChar === "/";
    feedPosition(position, html, close ? 2 : 1);
    const end = copyPosition(position);
    this.tokens.push({ type, close, position: { end } });
  }
  scanTagName() {
    const type = "tag";
    const { html, position } = this;
    const len = html.length;
    let start = position.index;
    while (start < len) {
      const char = html.charAt(start);
      const isTagChar = !(isWhitespaceChar(char) || char === "/" || char === ">");
      if (isTagChar)
        break;
      start++;
    }
    let end = start + 1;
    while (end < len) {
      const char = html.charAt(end);
      const isTagChar = !(isWhitespaceChar(char) || char === "/" || char === ">");
      if (!isTagChar)
        break;
      end++;
    }
    jumpPosition(position, html, end);
    const tagName = html.slice(start, end);
    this.tokens.push({
      type,
      content: tagName
    });
    return tagName;
  }
  scanAttrs() {
    const { html, position, tokens } = this;
    let cursor = position.index;
    let quote = null;
    let wordBegin = cursor;
    const words = [];
    const len = html.length;
    while (cursor < len) {
      const char = html.charAt(cursor);
      if (quote) {
        const isQuoteEnd = char === quote;
        if (isQuoteEnd) {
          quote = null;
        }
        cursor++;
        continue;
      }
      const isTagEnd = char === "/" || char === ">";
      if (isTagEnd) {
        if (cursor !== wordBegin) {
          words.push(html.slice(wordBegin, cursor));
        }
        break;
      }
      if (isWordEnd(cursor, wordBegin, html)) {
        if (cursor !== wordBegin) {
          words.push(html.slice(wordBegin, cursor));
        }
        wordBegin = cursor + 1;
        cursor++;
        continue;
      }
      const isQuoteStart = char === "'" || char === '"';
      if (isQuoteStart) {
        quote = char;
        cursor++;
        continue;
      }
      cursor++;
    }
    jumpPosition(position, html, cursor);
    const wLen = words.length;
    const type = "attribute";
    for (let i = 0; i < wLen; i++) {
      const word = words[i];
      const isNotPair = word.includes("=");
      if (isNotPair) {
        const secondWord = words[i + 1];
        if (secondWord && secondWord.startsWith("=")) {
          if (secondWord.length > 1) {
            const newWord = word + secondWord;
            tokens.push({ type, content: newWord });
            i += 1;
            continue;
          }
          const thirdWord = words[i + 2];
          i += 1;
          if (thirdWord) {
            const newWord = word + "=" + thirdWord;
            tokens.push({ type, content: newWord });
            i += 1;
            continue;
          }
        }
      }
      if (word.endsWith("=")) {
        const secondWord = words[i + 1];
        if (secondWord && !secondWord.includes("=")) {
          const newWord2 = word + secondWord;
          tokens.push({ type, content: newWord2 });
          i += 1;
          continue;
        }
        const newWord = word.slice(0, -1);
        tokens.push({ type, content: newWord });
        continue;
      }
      tokens.push({ type, content: word });
    }
  }
  scanSkipTag(tagName) {
    const { html, position } = this;
    const safeTagName = tagName.toLowerCase();
    const len = html.length;
    while (position.index < len) {
      const nextTag = html.indexOf("</", position.index);
      if (nextTag === -1) {
        this.scanText();
        break;
      }
      jumpPosition(position, html, nextTag);
      const name = this.scanTag();
      if (safeTagName === name.toLowerCase()) {
        break;
      }
    }
  }
}
function unquote(str) {
  const car = str.charAt(0);
  const end = str.length - 1;
  const isQuoteStart = car === '"' || car === "'";
  if (isQuoteStart && car === str.charAt(end)) {
    return str.slice(1, end);
  }
  return str;
}
const LEFT_BRACKET = "{";
const RIGHT_BRACKET = "}";
const CLASS_SELECTOR = ".";
const ID_SELECTOR = "#";
const CHILD_COMBINATOR = ">";
const GENERAL_SIBLING_COMBINATOR = "~";
const ADJACENT_SIBLING_COMBINATOR = "+";
class StyleTagParser {
  constructor() {
    this.styles = [];
  }
  extractStyle(src) {
    const REG_STYLE = /<style\s?[^>]*>((.|\n|\s)+?)<\/style>/g;
    let html = src;
    html = html.replace(REG_STYLE, (_, $1) => {
      const style2 = $1.trim();
      this.stringToSelector(style2);
      return "";
    });
    return html.trim();
  }
  stringToSelector(style2) {
    let lb = style2.indexOf(LEFT_BRACKET);
    while (lb > -1) {
      const rb = style2.indexOf(RIGHT_BRACKET);
      const selectors = style2.slice(0, lb).trim();
      let content = style2.slice(lb + 1, rb);
      content = content.replace(/:(.*);/g, function(_, $1) {
        const t = $1.trim().replace(/ +/g, "+++");
        return `:${t};`;
      });
      content = content.replace(/ /g, "");
      content = content.replace(/\+\+\+/g, " ");
      if (!/;$/.test(content)) {
        content += ";";
      }
      selectors.split(",").forEach((src) => {
        const selectorList = this.parseSelector(src);
        this.styles.push({
          content,
          selectorList
        });
      });
      style2 = style2.slice(rb + 1);
      lb = style2.indexOf(LEFT_BRACKET);
    }
  }
  parseSelector(src) {
    const list = src.trim().replace(/ *([>~+]) */g, " $1").replace(/ +/g, " ").replace(/\[\s*([^[\]=\s]+)\s*=\s*([^[\]=\s]+)\s*\]/g, "[$1=$2]").split(" ");
    const selectors = list.map((item) => {
      const firstChar = item.charAt(0);
      const selector = {
        isChild: firstChar === CHILD_COMBINATOR,
        isGeneralSibling: firstChar === GENERAL_SIBLING_COMBINATOR,
        isAdjacentSibling: firstChar === ADJACENT_SIBLING_COMBINATOR,
        tag: null,
        id: null,
        class: [],
        attrs: []
      };
      item = item.replace(/^[>~+]/, "");
      item = item.replace(/\[(.+?)\]/g, function(_, $1) {
        const [key, value] = $1.split("=");
        const all = $1.indexOf("=") === -1;
        const attr = {
          all,
          key,
          value: all ? null : value
        };
        selector.attrs.push(attr);
        return "";
      });
      item = item.replace(/([.#][A-Za-z0-9-_]+)/g, function(_, $1) {
        if ($1[0] === ID_SELECTOR) {
          selector.id = $1.substr(1);
        } else if ($1[0] === CLASS_SELECTOR) {
          selector.class.push($1.substr(1));
        }
        return "";
      });
      if (item !== "") {
        selector.tag = item;
      }
      return selector;
    });
    return selectors;
  }
  matchStyle(tagName, el, list) {
    const res = sortStyles(this.styles).reduce((str, { content, selectorList }, i) => {
      let idx = list[i];
      let selector = selectorList[idx];
      const nextSelector = selectorList[idx + 1];
      if ((nextSelector === null || nextSelector === void 0 ? void 0 : nextSelector.isGeneralSibling) || (nextSelector === null || nextSelector === void 0 ? void 0 : nextSelector.isAdjacentSibling)) {
        selector = nextSelector;
        idx += 1;
        list[i] += 1;
      }
      let isMatch = this.matchCurrent(tagName, el, selector);
      if (isMatch && selector.isGeneralSibling) {
        let prev = getPreviousElement(el);
        while (prev) {
          if (prev.h5tagName && this.matchCurrent(prev.h5tagName, prev, selectorList[idx - 1])) {
            isMatch = true;
            break;
          }
          prev = getPreviousElement(prev);
          isMatch = false;
        }
      }
      if (isMatch && selector.isAdjacentSibling) {
        const prev = getPreviousElement(el);
        if (!prev || !prev.h5tagName) {
          isMatch = false;
        } else {
          const isSiblingMatch = this.matchCurrent(prev.h5tagName, prev, selectorList[idx - 1]);
          if (!isSiblingMatch) {
            isMatch = false;
          }
        }
      }
      if (isMatch) {
        if (idx === selectorList.length - 1) {
          return str + content;
        } else if (idx < selectorList.length - 1) {
          list[i] += 1;
        }
      } else {
        if (selector.isChild && idx > 0) {
          list[i] -= 1;
          if (this.matchCurrent(tagName, el, selectorList[list[i]])) {
            list[i] += 1;
          }
        }
      }
      return str;
    }, "");
    return res;
  }
  matchCurrent(tagName, el, selector) {
    if (selector.tag && selector.tag !== tagName)
      return false;
    if (selector.id && selector.id !== el.id)
      return false;
    if (selector.class.length) {
      const classList = el.className.split(" ");
      for (let i = 0; i < selector.class.length; i++) {
        const cls = selector.class[i];
        if (classList.indexOf(cls) === -1) {
          return false;
        }
      }
    }
    if (selector.attrs.length) {
      for (let i = 0; i < selector.attrs.length; i++) {
        const { all, key, value } = selector.attrs[i];
        if (all && !el.hasAttribute(key)) {
          return false;
        } else {
          const attr = el.getAttribute(key);
          if (attr !== unquote(value || "")) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
function getPreviousElement(el) {
  const parent = el.parentElement;
  if (!parent)
    return null;
  const prev = el.previousSibling;
  if (!prev)
    return null;
  if (prev.nodeType === 1) {
    return prev;
  } else {
    return getPreviousElement(prev);
  }
}
function sortStyles(styles) {
  return styles.sort((s1, s2) => {
    const hundreds1 = getHundredsWeight(s1.selectorList);
    const hundreds2 = getHundredsWeight(s2.selectorList);
    if (hundreds1 !== hundreds2)
      return hundreds1 - hundreds2;
    const tens1 = getTensWeight(s1.selectorList);
    const tens2 = getTensWeight(s2.selectorList);
    if (tens1 !== tens2)
      return tens1 - tens2;
    const ones1 = getOnesWeight(s1.selectorList);
    const ones2 = getOnesWeight(s2.selectorList);
    return ones1 - ones2;
  });
}
function getHundredsWeight(selectors) {
  return selectors.reduce((pre, cur) => pre + (cur.id ? 1 : 0), 0);
}
function getTensWeight(selectors) {
  return selectors.reduce((pre, cur) => pre + cur.class.length + cur.attrs.length, 0);
}
function getOnesWeight(selectors) {
  return selectors.reduce((pre, cur) => pre + (cur.tag ? 1 : 0), 0);
}
function makeMap$1(str, expectsLowerCase) {
  const map2 = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map2[list[i]] = true;
  }
  return (val) => !!map2[val.toLowerCase()];
}
const specialMiniElements = {
  img: "image",
  iframe: "web-view"
};
const internalCompsList = Object.keys(internalComponents).map((i) => i.toLowerCase()).join(",");
const isMiniElements = makeMap$1(internalCompsList);
const isInlineElements = makeMap$1("a,i,abbr,iframe,select,acronym,slot,small,span,bdi,kbd,strong,big,map,sub,sup,br,mark,mark,meter,template,canvas,textarea,cite,object,time,code,output,u,data,picture,tt,datalist,var,dfn,del,q,em,s,embed,samp,b");
const isBlockElements = makeMap$1("address,fieldset,li,article,figcaption,main,aside,figure,nav,blockquote,footer,ol,details,form,p,dialog,h1,h2,h3,h4,h5,h6,pre,dd,header,section,div,hgroup,table,dl,hr,ul,dt");
const closingTagAncestorBreakers = {
  li: ["ul", "ol", "menu"],
  dt: ["dl"],
  dd: ["dl"],
  tbody: ["table"],
  thead: ["table"],
  tfoot: ["table"],
  tr: ["table"],
  td: ["table"]
};
function hasTerminalParent(tagName, stack2) {
  const tagParents = closingTagAncestorBreakers[tagName];
  if (tagParents) {
    let currentIndex = stack2.length - 1;
    while (currentIndex >= 0) {
      const parentTagName = stack2[currentIndex].tagName;
      if (parentTagName === tagName) {
        break;
      }
      if (tagParents && tagParents.includes(parentTagName)) {
        return true;
      }
      currentIndex--;
    }
  }
  return false;
}
function getTagName(tag) {
  if (options.html.renderHTMLTag) {
    return tag;
  }
  if (specialMiniElements[tag]) {
    return specialMiniElements[tag];
  } else if (isMiniElements(tag)) {
    return tag;
  } else if (isBlockElements(tag)) {
    return "view";
  } else if (isInlineElements(tag)) {
    return "text";
  }
  return "view";
}
function splitEqual(str) {
  const sep = "=";
  const idx = str.indexOf(sep);
  if (idx === -1)
    return [str];
  const key = str.slice(0, idx).trim();
  const value = str.slice(idx + sep.length).trim();
  return [key, value];
}
function format(children, document, styleOptions, parent) {
  return children.filter((child) => {
    if (child.type === "comment") {
      return false;
    } else if (child.type === "text") {
      return child.content !== "";
    }
    return true;
  }).map((child) => {
    if (child.type === "text") {
      let text = document.createTextNode(child.content);
      if (isFunction$1(options.html.transformText)) {
        text = options.html.transformText(text, child);
      }
      parent === null || parent === void 0 ? void 0 : parent.appendChild(text);
      return text;
    }
    const el = document.createElement(getTagName(child.tagName));
    el.h5tagName = child.tagName;
    parent === null || parent === void 0 ? void 0 : parent.appendChild(el);
    if (!options.html.renderHTMLTag) {
      el.className = `h5-${child.tagName}`;
    }
    for (let i = 0; i < child.attributes.length; i++) {
      const attr = child.attributes[i];
      const [key, value] = splitEqual(attr);
      if (key === "class") {
        el.className += " " + unquote(value);
      } else if (key[0] === "o" && key[1] === "n") {
        continue;
      } else {
        el.setAttribute(key, value == null ? true : unquote(value));
      }
    }
    const { styleTagParser, descendantList } = styleOptions;
    const list = descendantList.slice();
    const style2 = styleTagParser.matchStyle(child.tagName, el, list);
    el.setAttribute("style", style2 + el.style.cssText);
    format(child.children, document, {
      styleTagParser,
      descendantList: list
    }, el);
    if (isFunction$1(options.html.transformElement)) {
      return options.html.transformElement(el, child);
    }
    return el;
  });
}
function parser(html, document) {
  const styleTagParser = new StyleTagParser();
  html = styleTagParser.extractStyle(html);
  const tokens = new Scaner(html).scan();
  const root = { tagName: "", children: [], type: "element", attributes: [] };
  const state = { tokens, cursor: 0, stack: [root] };
  parse(state);
  return format(root.children, document, {
    styleTagParser,
    descendantList: Array(styleTagParser.styles.length).fill(0)
  });
}
function parse(state) {
  const { tokens, stack: stack2 } = state;
  let { cursor } = state;
  const len = tokens.length;
  let nodes = stack2[stack2.length - 1].children;
  while (cursor < len) {
    const token = tokens[cursor];
    if (token.type !== "tag-start") {
      nodes.push(token);
      cursor++;
      continue;
    }
    const tagToken = tokens[++cursor];
    cursor++;
    const tagName = tagToken.content.toLowerCase();
    if (token.close) {
      let index = stack2.length;
      let shouldRewind = false;
      while (--index > -1) {
        if (stack2[index].tagName === tagName) {
          shouldRewind = true;
          break;
        }
      }
      while (cursor < len) {
        const endToken = tokens[cursor];
        if (endToken.type !== "tag-end")
          break;
        cursor++;
      }
      if (shouldRewind) {
        stack2.splice(index);
        break;
      } else {
        continue;
      }
    }
    const isClosingTag = options.html.closingElements.has(tagName);
    let shouldRewindToAutoClose = isClosingTag;
    if (shouldRewindToAutoClose) {
      shouldRewindToAutoClose = !hasTerminalParent(tagName, stack2);
    }
    if (shouldRewindToAutoClose) {
      let currentIndex = stack2.length - 1;
      while (currentIndex > 0) {
        if (tagName === stack2[currentIndex].tagName) {
          stack2.splice(currentIndex);
          const previousIndex = currentIndex - 1;
          nodes = stack2[previousIndex].children;
          break;
        }
        currentIndex = currentIndex - 1;
      }
    }
    const attributes = [];
    let attrToken;
    while (cursor < len) {
      attrToken = tokens[cursor];
      if (attrToken.type === "tag-end")
        break;
      attributes.push(attrToken.content);
      cursor++;
    }
    cursor++;
    const children = [];
    const element = {
      type: "element",
      tagName: tagToken.content,
      attributes,
      children
    };
    nodes.push(element);
    const hasChildren = !(attrToken.close || options.html.voidElements.has(tagName));
    if (hasChildren) {
      stack2.push({ tagName, children });
      const innerState = { tokens, cursor, stack: stack2 };
      parse(innerState);
      cursor = innerState.cursor;
    }
  }
  state.cursor = cursor;
}
options.html = {
  skipElements: /* @__PURE__ */ new Set(["style", "script"]),
  voidElements: /* @__PURE__ */ new Set([
    "!doctype",
    "area",
    "base",
    "br",
    "col",
    "command",
    "embed",
    "hr",
    "img",
    "input",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
  ]),
  closingElements: /* @__PURE__ */ new Set([
    "html",
    "head",
    "body",
    "p",
    "dt",
    "dd",
    "li",
    "option",
    "thead",
    "th",
    "tbody",
    "tr",
    "td",
    "tfoot",
    "colgroup"
  ]),
  renderHTMLTag: false
};
function setInnerHTML(element, html) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  const children = parser(html, element.ownerDocument);
  for (let i = 0; i < children.length; i++) {
    element.appendChild(children[i]);
  }
}
function getTemplateContent(ctx) {
  if (ctx.nodeName === "template") {
    const document = ctx.ownerDocument;
    const content = document.createElement(DOCUMENT_FRAGMENT);
    content.childNodes = ctx.childNodes;
    ctx.childNodes = [content];
    content.parentNode = ctx;
    content.childNodes.forEach((nodes) => {
      nodes.parentNode = content;
    });
    return content;
  }
}
function insertAdjacentHTML(position, html) {
  var _a2, _b;
  const parsedNodes = parser(html, this.ownerDocument);
  for (let i = 0; i < parsedNodes.length; i++) {
    const n = parsedNodes[i];
    switch (position) {
      case "beforebegin":
        (_a2 = this.parentNode) === null || _a2 === void 0 ? void 0 : _a2.insertBefore(n, this);
        break;
      case "afterbegin":
        if (this.hasChildNodes()) {
          this.insertBefore(n, this.childNodes[0]);
        } else {
          this.appendChild(n);
        }
        break;
      case "beforeend":
        this.appendChild(n);
        break;
      case "afterend":
        (_b = this.parentNode) === null || _b === void 0 ? void 0 : _b.appendChild(n);
        break;
    }
  }
}
function cloneNode(isDeep = false) {
  const document = this.ownerDocument;
  let newNode;
  if (this.nodeType === 1) {
    newNode = document.createElement(this.nodeName);
  } else if (this.nodeType === 3) {
    newNode = document.createTextNode("");
  }
  for (const key in this) {
    const value = this[key];
    if ([PROPS, DATASET].includes(key) && typeof value === OBJECT) {
      newNode[key] = Object.assign({}, value);
    } else if (key === "_value") {
      newNode[key] = value;
    } else if (key === STYLE) {
      newNode.style._value = Object.assign({}, value._value);
      newNode.style._usedStyleProp = new Set(Array.from(value._usedStyleProp));
    }
  }
  if (isDeep) {
    newNode.childNodes = this.childNodes.map((node) => node.cloneNode(true));
  }
  return newNode;
}
if ("mini" !== PLATFORM_TYPE.WEB && "mini" !== PLATFORM_TYPE.HARMONY) {
  {
    TaroNode.extend("innerHTML", {
      set(html) {
        setInnerHTML.call(this, this, html);
      },
      get() {
        return "";
      }
    });
    {
      TaroNode.extend("insertAdjacentHTML", insertAdjacentHTML);
    }
  }
  {
    TaroNode.extend("cloneNode", cloneNode);
  }
  {
    TaroElement.extend("content", {
      get() {
        return getTemplateContent(this);
      }
    });
  }
}
class TaroEvent {
  constructor(type, opts, event) {
    this._stop = false;
    this._end = false;
    this.defaultPrevented = false;
    this.button = 0;
    this.timeStamp = Date.now();
    this.type = type.toLowerCase();
    this.mpEvent = event;
    this.bubbles = Boolean(opts && opts.bubbles);
    this.cancelable = Boolean(opts && opts.cancelable);
  }
  stopPropagation() {
    this._stop = true;
  }
  stopImmediatePropagation() {
    this._end = this._stop = true;
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
  get target() {
    var _a2, _b, _c, _d, _e;
    const cacheTarget = this.cacheTarget;
    if (!cacheTarget) {
      const target = Object.create(((_a2 = this.mpEvent) === null || _a2 === void 0 ? void 0 : _a2.target) || null);
      const currentEle = env.document.getElementById(((_b = target.dataset) === null || _b === void 0 ? void 0 : _b.sid) || target.id || null);
      const element = env.document.getElementById(((_c = target.targetDataset) === null || _c === void 0 ? void 0 : _c.sid) || ((_d = target.dataset) === null || _d === void 0 ? void 0 : _d.sid) || target.id || null);
      target.dataset = Object.assign(Object.assign({}, currentEle !== null ? currentEle.dataset : EMPTY_OBJ$1), element !== null ? element.dataset : EMPTY_OBJ$1);
      for (const key in (_e = this.mpEvent) === null || _e === void 0 ? void 0 : _e.detail) {
        target[key] = this.mpEvent.detail[key];
      }
      this.cacheTarget = target;
      return target;
    } else {
      return cacheTarget;
    }
  }
  get currentTarget() {
    var _a2, _b, _c, _d, _e, _f, _g, _h;
    const cacheCurrentTarget = this.cacheCurrentTarget;
    if (!cacheCurrentTarget) {
      const doc2 = env.document;
      const currentTarget = Object.create(((_a2 = this.mpEvent) === null || _a2 === void 0 ? void 0 : _a2.currentTarget) || null);
      const element = doc2.getElementById(((_b = currentTarget.dataset) === null || _b === void 0 ? void 0 : _b.sid) || currentTarget.id || null);
      const targetElement = doc2.getElementById(((_e = (_d = (_c = this.mpEvent) === null || _c === void 0 ? void 0 : _c.target) === null || _d === void 0 ? void 0 : _d.dataset) === null || _e === void 0 ? void 0 : _e.sid) || ((_g = (_f = this.mpEvent) === null || _f === void 0 ? void 0 : _f.target) === null || _g === void 0 ? void 0 : _g.id) || null);
      if (element === null || element && element === targetElement) {
        this.cacheCurrentTarget = this.target;
        return this.target;
      }
      currentTarget.dataset = element.dataset;
      for (const key in (_h = this.mpEvent) === null || _h === void 0 ? void 0 : _h.detail) {
        currentTarget[key] = this.mpEvent.detail[key];
      }
      this.cacheCurrentTarget = currentTarget;
      return currentTarget;
    } else {
      return cacheCurrentTarget;
    }
  }
}
function createEvent(event, node) {
  if (typeof event === "string") {
    return new TaroEvent(event, { bubbles: true, cancelable: true });
  }
  const domEv = new TaroEvent(event.type, { bubbles: true, cancelable: true }, event);
  for (const key in event) {
    if (key === CURRENT_TARGET || key === TARGET || key === TYPE || key === TIME_STAMP) {
      continue;
    } else {
      domEv[key] = event[key];
    }
  }
  if (domEv.type === CONFIRM && (node === null || node === void 0 ? void 0 : node.nodeName) === INPUT) {
    domEv[KEY_CODE] = 13;
  }
  return domEv;
}
const eventsBatch = {};
function getEventCBResult(event) {
  const result = event[EVENT_CALLBACK_RESULT];
  if (!isUndefined(result)) {
    delete event[EVENT_CALLBACK_RESULT];
  }
  return result;
}
function eventHandler(event) {
  var _a2, _b;
  event.type === void 0 && Object.defineProperty(event, "type", {
    value: event._type
    // ohos only
  });
  event.detail === void 0 && Object.defineProperty(event, "detail", {
    value: event._detail || Object.assign({}, event)
    // ohos only
  });
  event.currentTarget = event.currentTarget || event.target || Object.assign({}, event);
  hooks.call("modifyMpEventImpl", event);
  const currentTarget = event.currentTarget;
  const id = ((_a2 = currentTarget.dataset) === null || _a2 === void 0 ? void 0 : _a2.sid) || currentTarget.id || ((_b = event.detail) === null || _b === void 0 ? void 0 : _b.id) || "";
  const node = env.document.getElementById(id);
  if (node) {
    const dispatch = () => {
      const e = createEvent(event, node);
      hooks.call("modifyTaroEvent", e, node);
      hooks.call("dispatchTaroEvent", e, node);
      hooks.call("dispatchTaroEventFinish", e, node);
    };
    if (hooks.isExist("batchedEventUpdates")) {
      const type = event.type;
      if (!hooks.call("isBubbleEvents", type) || !isParentBinded(node, type) || type === TOUCHMOVE && !!node.props.catchMove) {
        hooks.call("batchedEventUpdates", () => {
          if (eventsBatch[type]) {
            eventsBatch[type].forEach((fn) => fn());
            delete eventsBatch[type];
          }
          dispatch();
        });
        return getEventCBResult(event);
      } else {
        (eventsBatch[type] || (eventsBatch[type] = [])).push(dispatch);
      }
    } else {
      dispatch();
      return getEventCBResult(event);
    }
  }
}
class FormElement extends TaroElement {
  get type() {
    var _a2;
    return (_a2 = this.props[TYPE]) !== null && _a2 !== void 0 ? _a2 : "";
  }
  set type(val) {
    this.setAttribute(TYPE, val);
  }
  get value() {
    const val = this.props[VALUE];
    return val == null ? "" : val;
  }
  set value(val) {
    this.setAttribute(VALUE, val);
  }
  dispatchEvent(event) {
    if (event.mpEvent) {
      const val = event.mpEvent.detail.value;
      if (event.type === CHANGE) {
        this.props.value = val;
      } else if (event.type === INPUT) {
        this.value = val;
      }
    }
    return super.dispatchEvent(event);
  }
}
function throttle(fn, threshold = 250, scope) {
  let lastTime2 = 0;
  let deferTimer;
  return function(...args) {
    const context = scope || this;
    const now2 = Date.now();
    if (now2 - lastTime2 > threshold) {
      fn.apply(this, args);
      lastTime2 = now2;
    } else {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(() => {
        lastTime2 = now2;
        fn.apply(context, args);
      }, threshold);
    }
  };
}
function debounce(fn, ms = 250, scope) {
  let timer;
  return function(...args) {
    const context = scope || this;
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, ms);
  };
}
var _Performance_instances, _Performance_parseTime;
class Performance {
  constructor() {
    _Performance_instances.add(this);
    this.recorder = /* @__PURE__ */ new Map();
  }
  start(id) {
    if (!options.debug) {
      return;
    }
    this.recorder.set(id, Date.now());
  }
  stop(id, now2 = Date.now()) {
    if (!options.debug) {
      return;
    }
    const prev = this.recorder.get(id);
    if (!(prev >= 0))
      return;
    this.recorder.delete(id);
    const time = now2 - prev;
    console.log(`${id} 时长： ${time}ms 开始时间：${__classPrivateFieldGet(this, _Performance_instances, "m", _Performance_parseTime).call(this, prev)} 结束时间：${__classPrivateFieldGet(this, _Performance_instances, "m", _Performance_parseTime).call(this, now2)}`);
  }
  delayStop(id, delay = 500) {
    if (!options.debug) {
      return;
    }
    return debounce((now2 = Date.now(), cb) => {
      this.stop(id, now2);
      cb === null || cb === void 0 ? void 0 : cb();
    }, delay);
  }
}
_Performance_instances = /* @__PURE__ */ new WeakSet(), _Performance_parseTime = function _Performance_parseTime2(time) {
  const d = new Date(time);
  return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${`${d.getMilliseconds()}`.padStart(3, "0")}`;
};
const perf$1 = new Performance();
function findCustomWrapper(root, dataPathArr) {
  const list = dataPathArr.slice(1);
  let currentData = root;
  let customWrapper;
  let splitedPath = "";
  list.some((item, i) => {
    const key = item.replace(/^\[(.+)\]$/, "$1").replace(/\bcn\b/g, "childNodes");
    currentData = currentData[key];
    if (isArray$1(currentData)) {
      currentData = currentData.filter((el) => !isComment(el));
    }
    if (isUndefined(currentData))
      return true;
    if (currentData.nodeName === CUSTOM_WRAPPER) {
      const res = customWrapperCache.get(currentData.sid);
      if (res) {
        customWrapper = res;
        splitedPath = dataPathArr.slice(i + 2).join(".");
      }
    }
  });
  if (customWrapper) {
    return {
      customWrapper,
      splitedPath
    };
  }
}
class TaroRootElement extends TaroElement {
  constructor() {
    super();
    this.updatePayloads = [];
    this.updateCallbacks = [];
    this.pendingUpdate = false;
    this.ctx = null;
    this.nodeName = ROOT_STR;
    this.tagName = ROOT_STR.toUpperCase();
  }
  get _path() {
    return ROOT_STR;
  }
  get _root() {
    return this;
  }
  scheduleTask(fn) {
    setTimeout(fn);
  }
  enqueueUpdate(payload) {
    this.updatePayloads.push(payload);
    if (!this.pendingUpdate && this.ctx) {
      this.performUpdate();
    }
  }
  performUpdate(initRender = false, prerender) {
    this.pendingUpdate = true;
    const ctx = hooks.call("proxyToRaw", this.ctx);
    this.scheduleTask(() => {
      const setDataMark = `${SET_DATA} 开始时间戳 ${Date.now()}`;
      perf$1.start(setDataMark);
      const data = /* @__PURE__ */ Object.create(null);
      const resetPaths = new Set(initRender ? ["root.cn.[0]", "root.cn[0]"] : []);
      while (this.updatePayloads.length > 0) {
        const { path, value } = this.updatePayloads.shift();
        if (path.endsWith(
          "cn"
          /* Shortcuts.Childnodes */
        )) {
          resetPaths.add(path);
        }
        data[path] = value;
      }
      for (const path in data) {
        resetPaths.forEach((p2) => {
          if (path.includes(p2) && path !== p2) {
            delete data[path];
          }
        });
        const value = data[path];
        if (isFunction$1(value)) {
          data[path] = value();
        }
      }
      if (isFunction$1(prerender))
        return prerender(data);
      this.pendingUpdate = false;
      let normalUpdate = {};
      const customWrapperMap = /* @__PURE__ */ new Map();
      if (initRender) {
        normalUpdate = data;
      } else {
        for (const p2 in data) {
          const dataPathArr = p2.split(".");
          const found = findCustomWrapper(this, dataPathArr);
          if (found) {
            const { customWrapper, splitedPath } = found;
            customWrapperMap.set(customWrapper, Object.assign(Object.assign({}, customWrapperMap.get(customWrapper) || {}), { [`i.${splitedPath}`]: data[p2] }));
          } else {
            normalUpdate[p2] = data[p2];
          }
        }
      }
      const customWrapperCount = customWrapperMap.size;
      const isNeedNormalUpdate = Object.keys(normalUpdate).length > 0;
      const updateArrLen = customWrapperCount + (isNeedNormalUpdate ? 1 : 0);
      let executeTime = 0;
      const cb = () => {
        if (++executeTime === updateArrLen) {
          perf$1.stop(setDataMark);
          this.flushUpdateCallback();
          initRender && perf$1.stop(PAGE_INIT);
        }
      };
      if (customWrapperCount) {
        customWrapperMap.forEach((data2, ctx2) => {
          if (options.debug) {
            console.log("custom wrapper setData: ", data2);
          }
          ctx2.setData(data2, cb);
        });
      }
      if (isNeedNormalUpdate) {
        if (options.debug) {
          console.log("page setData:", normalUpdate);
        }
        ctx.setData(normalUpdate, cb);
      }
    });
  }
  enqueueUpdateCallback(cb, ctx) {
    this.updateCallbacks.push(() => {
      ctx ? cb.call(ctx) : cb();
    });
  }
  flushUpdateCallback() {
    const updateCallbacks = this.updateCallbacks;
    if (!updateCallbacks.length)
      return;
    const copies = updateCallbacks.slice(0);
    this.updateCallbacks.length = 0;
    for (let i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }
}
class TaroText extends TaroNode {
  constructor(value) {
    super();
    this.nodeType = 3;
    this.nodeName = "#text";
    this._value = value;
  }
  set textContent(text) {
    MutationObserver.record({
      target: this,
      type: "characterData",
      oldValue: this._value
    });
    this._value = text;
    this.enqueueUpdate({
      path: `${this._path}.${"v"}`,
      value: text
    });
  }
  get textContent() {
    return this._value;
  }
  set nodeValue(text) {
    this.textContent = text;
  }
  get nodeValue() {
    return this._value;
  }
  set data(text) {
    this.textContent = text;
  }
  get data() {
    return this._value;
  }
}
class AnchorElement extends TaroElement {
  get href() {
    var _a2;
    return (_a2 = this.props[
      "href"
      /* AnchorElementAttrs.HREF */
    ]) !== null && _a2 !== void 0 ? _a2 : "";
  }
  set href(val) {
    this.setAttribute("href", val);
  }
  get protocol() {
    var _a2;
    return (_a2 = this.props[
      "protocol"
      /* AnchorElementAttrs.PROTOCOL */
    ]) !== null && _a2 !== void 0 ? _a2 : "";
  }
  get host() {
    var _a2;
    return (_a2 = this.props[
      "host"
      /* AnchorElementAttrs.HOST */
    ]) !== null && _a2 !== void 0 ? _a2 : "";
  }
  get search() {
    var _a2;
    return (_a2 = this.props[
      "search"
      /* AnchorElementAttrs.SEARCH */
    ]) !== null && _a2 !== void 0 ? _a2 : "";
  }
  get hash() {
    var _a2;
    return (_a2 = this.props[
      "hash"
      /* AnchorElementAttrs.HASH */
    ]) !== null && _a2 !== void 0 ? _a2 : "";
  }
  get hostname() {
    var _a2;
    return (_a2 = this.props[
      "hostname"
      /* AnchorElementAttrs.HOSTNAME */
    ]) !== null && _a2 !== void 0 ? _a2 : "";
  }
  get port() {
    var _a2;
    return (_a2 = this.props[
      "port"
      /* AnchorElementAttrs.PORT */
    ]) !== null && _a2 !== void 0 ? _a2 : "";
  }
  get pathname() {
    var _a2;
    return (_a2 = this.props[
      "pathname"
      /* AnchorElementAttrs.PATHNAME */
    ]) !== null && _a2 !== void 0 ? _a2 : "";
  }
  setAttribute(qualifiedName, value) {
    if (qualifiedName === "href") {
      const willSetAttr = parseUrl(value);
      for (const k in willSetAttr) {
        super.setAttribute(k, willSetAttr[k]);
      }
    } else {
      super.setAttribute(qualifiedName, value);
    }
  }
}
class TransferElement extends TaroElement {
  constructor(dataName) {
    super();
    this.dataName = dataName;
    this.isTransferElement = true;
  }
  get _path() {
    return this.dataName;
  }
}
class TaroDocument extends TaroElement {
  constructor() {
    super();
    this.createEvent = createEvent;
    this.nodeType = 9;
    this.nodeName = DOCUMENT_ELEMENT_NAME;
  }
  createElement(type) {
    const nodeName = type.toLowerCase();
    let element;
    switch (true) {
      case nodeName === ROOT_STR:
        element = new TaroRootElement();
        return element;
      case controlledComponent.has(nodeName):
        element = new FormElement();
        break;
      case nodeName === A:
        element = new AnchorElement();
        break;
      case nodeName === "page-meta":
      case nodeName === "navigation-bar":
        element = new TransferElement(toCamelCase(nodeName));
        break;
      default:
        element = new TaroElement();
        break;
    }
    element.nodeName = nodeName;
    element.tagName = type.toUpperCase();
    return element;
  }
  // an ugly fake createElementNS to deal with @vue/runtime-dom's
  // support mounting app to svg container since vue@3.0.8
  createElementNS(_svgNS, type) {
    return this.createElement(type);
  }
  createTextNode(text) {
    return new TaroText(text);
  }
  getElementById(id) {
    const el = eventSource.get(id);
    return isUndefined(el) ? null : el;
  }
  querySelector(query) {
    if (/^#/.test(query)) {
      return this.getElementById(query.slice(1));
    }
    return null;
  }
  querySelectorAll() {
    return [];
  }
  // @TODO: @PERF: 在 hydrate 移除掉空的 node
  createComment() {
    const textnode = new TaroText("");
    textnode.nodeName = COMMENT;
    return textnode;
  }
  get defaultView() {
    return env.window;
  }
}
function createDocument() {
  const doc2 = new TaroDocument();
  const documentCreateElement = doc2.createElement.bind(doc2);
  const html = documentCreateElement(HTML);
  const head = documentCreateElement(HEAD);
  const body = documentCreateElement(BODY);
  const app = documentCreateElement(APP);
  app.id = APP;
  const container = documentCreateElement(CONTAINER);
  doc2.appendChild(html);
  html.appendChild(head);
  html.appendChild(body);
  body.appendChild(container);
  container.appendChild(app);
  doc2.documentElement = html;
  doc2.head = head;
  doc2.body = body;
  return doc2;
}
const taroDocumentProvider = env.document = createDocument();
class SVGElement extends TaroElement {
}
const addLeadingSlash = (url = "") => url.charAt(0) === "/" ? url : "/" + url;
const hasBasename = (path = "", prefix = "") => new RegExp("^" + prefix + "(\\/|\\?|#|$)", "i").test(path) || path === prefix;
const stripBasename = (path = "", prefix = "") => hasBasename(path, prefix) ? path.substring(prefix.length) : path;
const stripTrailing = (str = "") => str.replace(/[?#][\s\S]*$/, "");
const stripSuffix = (path = "", suffix = "") => path.includes(suffix) ? path.substring(0, path.length - suffix.length) : path;
const getHomePage = (path = "", basename = "", customRoutes = {}, entryPagePath = "") => {
  var _a2;
  const routePath = addLeadingSlash(stripBasename(path, basename));
  const alias = ((_a2 = Object.entries(customRoutes).find(([key]) => key === routePath)) === null || _a2 === void 0 ? void 0 : _a2[1]) || routePath;
  return entryPagePath || (typeof alias === "string" ? alias : alias[0]) || basename;
};
const getCurrentPage = (routerMode = "hash", basename = "/") => {
  const pagePath = routerMode === "hash" ? taroLocationProvider.hash.slice(1).split("?")[0] : taroLocationProvider.pathname;
  return addLeadingSlash(stripBasename(pagePath, basename));
};
const instances = /* @__PURE__ */ new Map();
const pageId = incrementId();
function injectPageInstance(inst, id) {
  hooks.call("mergePageInstance", instances.get(id), inst);
  instances.set(id, inst);
}
function getPageInstance(id) {
  return instances.get(id);
}
function removePageInstance(id) {
  instances.delete(id);
}
function safeExecute(path, lifecycle, ...args) {
  const instance = instances.get(path);
  if (instance == null) {
    return;
  }
  const func = hooks.call("getLifecycle", instance, lifecycle);
  if (isArray$1(func)) {
    const res = func.map((fn) => fn.apply(instance, args));
    return res[0];
  }
  if (!isFunction$1(func)) {
    return;
  }
  return func.apply(instance, args);
}
function stringify(obj) {
  if (obj == null) {
    return "";
  }
  const path = Object.keys(obj).map((key) => {
    return key + "=" + obj[key];
  }).join("&");
  return path === "" ? path : "?" + path;
}
function getPath(id, options2) {
  const idx = id.indexOf("?");
  {
    return `${idx > -1 ? id.substring(0, idx) : id}${stringify(options2)}`;
  }
}
function getOnReadyEventKey(path) {
  return path + "." + ON_READY;
}
function getOnShowEventKey(path) {
  return path + "." + ON_SHOW;
}
function getOnHideEventKey(path) {
  return path + "." + ON_HIDE;
}
function createPageConfig(component, pageName, data, pageConfig) {
  const id = pageName !== null && pageName !== void 0 ? pageName : `taro_page_${pageId()}`;
  const [ONLOAD, ONUNLOAD, ONREADY, ONSHOW, ONHIDE, LIFECYCLES, SIDE_EFFECT_LIFECYCLES] = hooks.call("getMiniLifecycleImpl").page;
  let pageElement = null;
  let unmounting = false;
  let prepareMountList = [];
  function setCurrentRouter(page) {
    const router = page.route || page.__route__ || page.$taroPath;
    Current.router = {
      params: page.$taroParams,
      path: addLeadingSlash(router),
      $taroPath: page.$taroPath,
      onReady: getOnReadyEventKey(id),
      onShow: getOnShowEventKey(id),
      onHide: getOnHideEventKey(id)
    };
    if (!isUndefined(page.exitState)) {
      Current.router.exitState = page.exitState;
    }
  }
  let loadResolver;
  let hasLoaded;
  const config = {
    [ONLOAD](options2 = {}, cb) {
      hasLoaded = new Promise((resolve) => {
        loadResolver = resolve;
      });
      perf$1.start(PAGE_INIT);
      Current.page = this;
      this.config = pageConfig || {};
      const uniqueOptions = Object.assign({}, options2, { $taroTimestamp: Date.now() });
      const $taroPath = this.$taroPath = getPath(id, uniqueOptions);
      if (this.$taroParams == null) {
        this.$taroParams = uniqueOptions;
      }
      setCurrentRouter(this);
      {
        taroWindowProvider.trigger(CONTEXT_ACTIONS.INIT, $taroPath);
      }
      const mount = () => {
        Current.app.mount(component, $taroPath, () => {
          pageElement = env.document.getElementById($taroPath);
          ensure(pageElement !== null, "没有找到页面实例。");
          safeExecute($taroPath, ON_LOAD, this.$taroParams);
          loadResolver();
          {
            pageElement.ctx = this;
            pageElement.performUpdate(true, cb);
          }
        });
      };
      if (unmounting) {
        prepareMountList.push(mount);
      } else {
        mount();
      }
    },
    [ONUNLOAD]() {
      const $taroPath = this.$taroPath;
      {
        taroWindowProvider.trigger(CONTEXT_ACTIONS.DESTORY, $taroPath);
      }
      safeExecute($taroPath, ONUNLOAD);
      unmounting = true;
      Current.app.unmount($taroPath, () => {
        unmounting = false;
        instances.delete($taroPath);
        if (pageElement) {
          pageElement.ctx = null;
          pageElement = null;
        }
        if (prepareMountList.length) {
          prepareMountList.forEach((fn) => fn());
          prepareMountList = [];
        }
      });
    },
    [ONREADY]() {
      hasLoaded.then(() => {
        safeExecute(this.$taroPath, ON_READY);
        _raf(() => eventCenter.trigger(getOnReadyEventKey(id)));
        this.onReady.called = true;
      });
    },
    [ONSHOW](options2 = {}) {
      hasLoaded.then(() => {
        Current.page = this;
        setCurrentRouter(this);
        {
          taroWindowProvider.trigger(CONTEXT_ACTIONS.RECOVER, this.$taroPath);
        }
        safeExecute(this.$taroPath, ON_SHOW, options2);
        _raf(() => eventCenter.trigger(getOnShowEventKey(id)));
      });
    },
    [ONHIDE]() {
      {
        taroWindowProvider.trigger(CONTEXT_ACTIONS.RESTORE, this.$taroPath);
      }
      if (Current.page === this) {
        Current.page = null;
        Current.router = null;
      }
      safeExecute(this.$taroPath, ON_HIDE);
      eventCenter.trigger(getOnHideEventKey(id));
    }
  };
  LIFECYCLES.forEach((lifecycle) => {
    let isDefer = false;
    lifecycle = lifecycle.replace(/^defer:/, () => {
      isDefer = true;
      return "";
    });
    config[lifecycle] = function() {
      const exec = () => safeExecute(this.$taroPath, lifecycle, ...arguments);
      if (isDefer) {
        hasLoaded.then(exec);
      } else {
        return exec();
      }
    };
  });
  SIDE_EFFECT_LIFECYCLES.forEach((lifecycle) => {
    var _a2;
    if (component[lifecycle] || ((_a2 = component.prototype) === null || _a2 === void 0 ? void 0 : _a2[lifecycle]) || component[lifecycle.replace(/^on/, "enable")] || (pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig[lifecycle.replace(/^on/, "enable")])) {
      config[lifecycle] = function(...args) {
        var _a3;
        const target = (_a3 = args[0]) === null || _a3 === void 0 ? void 0 : _a3.target;
        if (target === null || target === void 0 ? void 0 : target.id) {
          const id2 = target.id;
          const element = env.document.getElementById(id2);
          if (element) {
            target.dataset = element.dataset;
          }
        }
        return safeExecute(this.$taroPath, lifecycle, ...args);
      };
    }
  });
  config.eh = eventHandler;
  if (!isUndefined(data)) {
    config.data = data;
  }
  hooks.call("modifyPageObject", config);
  return config;
}
function createComponentConfig(component, componentName, data) {
  const id = componentName !== null && componentName !== void 0 ? componentName : `taro_component_${pageId()}`;
  let componentElement = null;
  const [ATTACHED, DETACHED] = hooks.call("getMiniLifecycleImpl").component;
  const config = {
    [ATTACHED]() {
      var _a2;
      perf$1.start(PAGE_INIT);
      this.pageIdCache = ((_a2 = this.getPageId) === null || _a2 === void 0 ? void 0 : _a2.call(this)) || pageId();
      const path = getPath(id, { id: this.pageIdCache });
      Current.app.mount(component, path, () => {
        componentElement = env.document.getElementById(path);
        ensure(componentElement !== null, "没有找到组件实例。");
        this.$taroInstances = instances.get(path);
        safeExecute(path, ON_LOAD);
        {
          componentElement.ctx = this;
          componentElement.performUpdate(true);
        }
      });
    },
    [DETACHED]() {
      const path = getPath(id, { id: this.pageIdCache });
      Current.app.unmount(path, () => {
        instances.delete(path);
        if (componentElement) {
          componentElement.ctx = null;
        }
      });
    },
    methods: {
      eh: eventHandler
    }
  };
  if (!isUndefined(data)) {
    config.data = data;
  }
  [OPTIONS, EXTERNAL_CLASSES, BEHAVIORS].forEach((key) => {
    var _a2;
    config[key] = (_a2 = component[key]) !== null && _a2 !== void 0 ? _a2 : EMPTY_OBJ$1;
  });
  return config;
}
function createRecursiveComponentConfig(componentName) {
  const isCustomWrapper = componentName === CUSTOM_WRAPPER;
  const [ATTACHED, DETACHED] = hooks.call("getMiniLifecycleImpl").component;
  const lifeCycles = isCustomWrapper ? {
    [ATTACHED]() {
      var _a2, _b;
      const componentId = ((_a2 = this.data.i) === null || _a2 === void 0 ? void 0 : _a2.sid) || ((_b = this.props.i) === null || _b === void 0 ? void 0 : _b.sid);
      if (isString$1(componentId)) {
        customWrapperCache.set(componentId, this);
        const el = env.document.getElementById(componentId);
        if (el) {
          el.ctx = this;
        }
      }
    },
    [DETACHED]() {
      var _a2, _b;
      const componentId = ((_a2 = this.data.i) === null || _a2 === void 0 ? void 0 : _a2.sid) || ((_b = this.props.i) === null || _b === void 0 ? void 0 : _b.sid);
      if (isString$1(componentId)) {
        customWrapperCache.delete(componentId);
        const el = env.document.getElementById(componentId);
        if (el) {
          el.ctx = null;
        }
      }
    }
  } : EMPTY_OBJ$1;
  const extraOptions = {};
  return hooks.call("modifyRecursiveComponentConfig", Object.assign({ properties: {
    i: {
      type: Object,
      value: {
        [
          "nn"
          /* Shortcuts.NodeName */
        ]: getComponentsAlias$1(internalComponents)[VIEW]._num
      }
    },
    l: {
      type: String,
      value: ""
    }
  }, options: Object.assign(Object.assign({}, extraOptions), { virtualHost: !isCustomWrapper }), methods: {
    eh: eventHandler
  } }, lifeCycles), { isCustomWrapper });
}
const TIMEOUT = 100;
const nextTick$1 = (cb, ctx) => {
  const beginTime = Date.now();
  const router = Current.router;
  const timerFunc = () => {
    setTimeout(function() {
      ctx ? cb.call(ctx) : cb();
    }, 1);
  };
  if (router === null)
    return timerFunc();
  const path = router.$taroPath;
  function next() {
    const pageElement = env.document.getElementById(path);
    if (pageElement === null || pageElement === void 0 ? void 0 : pageElement.pendingUpdate) {
      {
        pageElement.enqueueUpdateCallback(cb, ctx);
      }
    } else if (Date.now() - beginTime > TIMEOUT) {
      timerFunc();
    } else {
      setTimeout(() => next(), 20);
    }
  }
  next();
};
function handlePolyfill() {
}
const dist$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  A,
  APP,
  BEHAVIORS,
  BODY,
  CATCHMOVE,
  CATCH_VIEW,
  CHANGE,
  CLASS,
  CLICK_VIEW,
  COMMENT,
  COMPILE_MODE,
  CONFIRM,
  CONTAINER,
  get CONTEXT_ACTIONS() {
    return CONTEXT_ACTIONS;
  },
  CURRENT_TARGET,
  CUSTOM_WRAPPER,
  Current,
  DATASET,
  DATE,
  DOCUMENT_ELEMENT_NAME,
  DOCUMENT_FRAGMENT,
  EVENT_CALLBACK_RESULT,
  EXTERNAL_CLASSES,
  Events,
  FOCUS,
  FormElement,
  HEAD,
  HOOKS_APP_ID,
  HTML,
  History,
  ID,
  INPUT,
  KEY_CODE,
  Location,
  MutationObserver,
  OBJECT,
  ON_HIDE,
  ON_LOAD,
  ON_READY,
  ON_SHOW,
  OPTIONS,
  PAGE_INIT,
  PROPERTY_THRESHOLD,
  PROPS,
  PURE_VIEW,
  ROOT_STR,
  SET_DATA,
  SET_TIMEOUT,
  STATIC_VIEW,
  STYLE,
  SVGElement,
  Style,
  TARGET,
  TARO_RUNTIME,
  TIME_STAMP,
  TOUCHMOVE,
  TYPE,
  TaroElement,
  TaroEvent,
  TaroNode,
  TaroRootElement,
  TaroText,
  UID,
  URL: TaroURLProvider,
  URLSearchParams,
  VALUE,
  VIEW,
  addLeadingSlash,
  cancelAnimationFrame: _caf,
  convertNumber2PX,
  createComponentConfig,
  createEvent,
  createPageConfig,
  createRecursiveComponentConfig,
  customWrapperCache,
  debounce,
  document: taroDocumentProvider,
  env,
  eventCenter,
  eventHandler,
  eventSource,
  extend: extend$1,
  getComponentsAlias,
  getComputedStyle: taroGetComputedStyleProvider,
  getCurrentInstance: getCurrentInstance$1,
  getCurrentPage,
  getHomePage,
  getOnHideEventKey,
  getOnReadyEventKey,
  getOnShowEventKey,
  getPageInstance,
  getPath,
  handlePolyfill,
  hasBasename,
  history: taroHistoryProvider,
  hooks,
  hydrate,
  incrementId,
  injectPageInstance,
  isComment,
  isElement,
  isHasExtractProp,
  isParentBinded,
  isText,
  location: taroLocationProvider,
  navigator: nav,
  nextTick: nextTick$1,
  get now() {
    return now;
  },
  options,
  parseUrl,
  perf: perf$1,
  removePageInstance,
  requestAnimationFrame: _raf,
  safeExecute,
  shortcutAttr,
  stringify,
  stripBasename,
  stripSuffix,
  stripTrailing,
  throttle,
  window: taroWindowProvider
}, Symbol.toStringTag, { value: "Module" }));
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function makeMap(str) {
  const map2 = /* @__PURE__ */ Object.create(null);
  for (const key of str.split(","))
    map2[key] = 1;
  return (val) => val in map2;
}
const EMPTY_OBJ = Object.freeze({});
const EMPTY_ARR = Object.freeze([]);
const NOOP = () => {
};
const NO = () => false;
const isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
(key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty$1.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const isBuiltInDirective = /* @__PURE__ */ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
const cacheStringFunction = (fn) => {
  const cache2 = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache2[str];
    return hit || (cache2[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
const toHandlerKey = cacheStringFunction((str) => {
  const s = str ? `on${capitalize(str)}` : ``;
  return s;
});
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, ...arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](...arg);
  }
};
const def = (obj, key, value, writable = false) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    writable,
    value
  });
};
const looseToNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof taroWindowProvider !== "undefined" ? taroWindowProvider : typeof global !== "undefined" ? global : {});
};
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value) || isObject(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const MATH_TAGS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
const isMathMLTag = /* @__PURE__ */ makeMap(MATH_TAGS);
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const isRef$1 = (val) => {
  return !!(val && val["__v_isRef"] === true);
};
const toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? isRef$1(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (isRef$1(val)) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2], i) => {
        entries[stringifySymbol(key, i) + " =>"] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v))
    };
  } else if (isSymbol(val)) {
    return stringifySymbol(val);
  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
const stringifySymbol = (v, i = "") => {
  var _a2;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    isSymbol(v) ? `Symbol(${(_a2 = v.description) != null ? _a2 : i})` : v
  );
};
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function warn$2(msg2, ...args) {
  console.warn(`[Vue warn] ${msg2}`, ...args);
}
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.detached = detached;
    this._active = true;
    this._on = 0;
    this.effects = [];
    this.cleanups = [];
    this._isPaused = false;
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = true;
      let i, l;
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].pause();
        }
      }
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].pause();
      }
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active) {
      if (this._isPaused) {
        this._isPaused = false;
        let i, l;
        if (this.scopes) {
          for (i = 0, l = this.scopes.length; i < l; i++) {
            this.scopes[i].resume();
          }
        }
        for (i = 0, l = this.effects.length; i < l; i++) {
          this.effects[i].resume();
        }
      }
    }
  }
  run(fn) {
    if (this._active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    } else {
      warn$2(`cannot run an inactive effect scope.`);
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    if (++this._on === 1) {
      this.prevScope = activeEffectScope;
      activeEffectScope = this;
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      activeEffectScope = this.prevScope;
      this.prevScope = void 0;
    }
  }
  stop(fromParent) {
    if (this._active) {
      this._active = false;
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      this.effects.length = 0;
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      this.cleanups.length = 0;
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.parent = void 0;
    }
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
let activeSub;
const pausedQueueEffects = /* @__PURE__ */ new WeakSet();
class ReactiveEffect {
  constructor(fn) {
    this.fn = fn;
    this.deps = void 0;
    this.depsTail = void 0;
    this.flags = 1 | 4;
    this.next = void 0;
    this.cleanup = void 0;
    this.scheduler = void 0;
    if (activeEffectScope && activeEffectScope.active) {
      activeEffectScope.effects.push(this);
    }
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    if (this.flags & 64) {
      this.flags &= -65;
      if (pausedQueueEffects.has(this)) {
        pausedQueueEffects.delete(this);
        this.trigger();
      }
    }
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags & 2 && !(this.flags & 32)) {
      return;
    }
    if (!(this.flags & 8)) {
      batch(this);
    }
  }
  run() {
    if (!(this.flags & 1)) {
      return this.fn();
    }
    this.flags |= 2;
    cleanupEffect(this);
    prepareDeps(this);
    const prevEffect = activeSub;
    const prevShouldTrack = shouldTrack;
    activeSub = this;
    shouldTrack = true;
    try {
      return this.fn();
    } finally {
      if (activeSub !== this) {
        warn$2("Active effect was not restored correctly - this is likely a Vue internal bug.");
      }
      cleanupDeps(this);
      activeSub = prevEffect;
      shouldTrack = prevShouldTrack;
      this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let link = this.deps; link; link = link.nextDep) {
        removeSub(link);
      }
      this.deps = this.depsTail = void 0;
      cleanupEffect(this);
      this.onStop && this.onStop();
      this.flags &= -2;
    }
  }
  trigger() {
    if (this.flags & 64) {
      pausedQueueEffects.add(this);
    } else if (this.scheduler) {
      this.scheduler();
    } else {
      this.runIfDirty();
    }
  }
  /**
   * @internal
   */
  runIfDirty() {
    if (isDirty(this)) {
      this.run();
    }
  }
  get dirty() {
    return isDirty(this);
  }
}
let batchDepth = 0;
let batchedSub;
let batchedComputed;
function batch(sub, isComputed = false) {
  sub.flags |= 8;
  if (isComputed) {
    sub.next = batchedComputed;
    batchedComputed = sub;
    return;
  }
  sub.next = batchedSub;
  batchedSub = sub;
}
function startBatch() {
  batchDepth++;
}
function endBatch() {
  if (--batchDepth > 0) {
    return;
  }
  if (batchedComputed) {
    let e = batchedComputed;
    batchedComputed = void 0;
    while (e) {
      const next = e.next;
      e.next = void 0;
      e.flags &= -9;
      e = next;
    }
  }
  let error;
  while (batchedSub) {
    let e = batchedSub;
    batchedSub = void 0;
    while (e) {
      const next = e.next;
      e.next = void 0;
      e.flags &= -9;
      if (e.flags & 1) {
        try {
          ;
          e.trigger();
        } catch (err) {
          if (!error)
            error = err;
        }
      }
      e = next;
    }
  }
  if (error)
    throw error;
}
function prepareDeps(sub) {
  for (let link = sub.deps; link; link = link.nextDep) {
    link.version = -1;
    link.prevActiveLink = link.dep.activeLink;
    link.dep.activeLink = link;
  }
}
function cleanupDeps(sub) {
  let head;
  let tail = sub.depsTail;
  let link = tail;
  while (link) {
    const prev = link.prevDep;
    if (link.version === -1) {
      if (link === tail)
        tail = prev;
      removeSub(link);
      removeDep(link);
    } else {
      head = link;
    }
    link.dep.activeLink = link.prevActiveLink;
    link.prevActiveLink = void 0;
    link = prev;
  }
  sub.deps = head;
  sub.depsTail = tail;
}
function isDirty(sub) {
  for (let link = sub.deps; link; link = link.nextDep) {
    if (link.dep.version !== link.version || link.dep.computed && (refreshComputed(link.dep.computed) || link.dep.version !== link.version)) {
      return true;
    }
  }
  if (sub._dirty) {
    return true;
  }
  return false;
}
function refreshComputed(computed2) {
  if (computed2.flags & 4 && !(computed2.flags & 16)) {
    return;
  }
  computed2.flags &= -17;
  if (computed2.globalVersion === globalVersion) {
    return;
  }
  computed2.globalVersion = globalVersion;
  if (!computed2.isSSR && computed2.flags & 128 && (!computed2.deps && !computed2._dirty || !isDirty(computed2))) {
    return;
  }
  computed2.flags |= 2;
  const dep = computed2.dep;
  const prevSub = activeSub;
  const prevShouldTrack = shouldTrack;
  activeSub = computed2;
  shouldTrack = true;
  try {
    prepareDeps(computed2);
    const value = computed2.fn(computed2._value);
    if (dep.version === 0 || hasChanged(value, computed2._value)) {
      computed2.flags |= 128;
      computed2._value = value;
      dep.version++;
    }
  } catch (err) {
    dep.version++;
    throw err;
  } finally {
    activeSub = prevSub;
    shouldTrack = prevShouldTrack;
    cleanupDeps(computed2);
    computed2.flags &= -3;
  }
}
function removeSub(link, soft = false) {
  const {
    dep,
    prevSub,
    nextSub
  } = link;
  if (prevSub) {
    prevSub.nextSub = nextSub;
    link.prevSub = void 0;
  }
  if (nextSub) {
    nextSub.prevSub = prevSub;
    link.nextSub = void 0;
  }
  if (dep.subsHead === link) {
    dep.subsHead = nextSub;
  }
  if (dep.subs === link) {
    dep.subs = prevSub;
    if (!prevSub && dep.computed) {
      dep.computed.flags &= -5;
      for (let l = dep.computed.deps; l; l = l.nextDep) {
        removeSub(l, true);
      }
    }
  }
  if (!soft && !--dep.sc && dep.map) {
    dep.map.delete(dep.key);
  }
}
function removeDep(link) {
  const {
    prevDep,
    nextDep
  } = link;
  if (prevDep) {
    prevDep.nextDep = nextDep;
    link.prevDep = void 0;
  }
  if (nextDep) {
    nextDep.prevDep = prevDep;
    link.nextDep = void 0;
  }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function cleanupEffect(e) {
  const {
    cleanup
  } = e;
  e.cleanup = void 0;
  if (cleanup) {
    const prevSub = activeSub;
    activeSub = void 0;
    try {
      cleanup();
    } finally {
      activeSub = prevSub;
    }
  }
}
let globalVersion = 0;
let Link$1 = class Link {
  constructor(sub, dep) {
    this.sub = sub;
    this.dep = dep;
    this.version = dep.version;
    this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
};
class Dep {
  // TODO isolatedDeclarations "__v_skip"
  constructor(computed2) {
    this.computed = computed2;
    this.version = 0;
    this.activeLink = void 0;
    this.subs = void 0;
    this.map = void 0;
    this.key = void 0;
    this.sc = 0;
    this.__v_skip = true;
    {
      this.subsHead = void 0;
    }
  }
  track(debugInfo) {
    if (!activeSub || !shouldTrack || activeSub === this.computed) {
      return;
    }
    let link = this.activeLink;
    if (link === void 0 || link.sub !== activeSub) {
      link = this.activeLink = new Link$1(activeSub, this);
      if (!activeSub.deps) {
        activeSub.deps = activeSub.depsTail = link;
      } else {
        link.prevDep = activeSub.depsTail;
        activeSub.depsTail.nextDep = link;
        activeSub.depsTail = link;
      }
      addSub(link);
    } else if (link.version === -1) {
      link.version = this.version;
      if (link.nextDep) {
        const next = link.nextDep;
        next.prevDep = link.prevDep;
        if (link.prevDep) {
          link.prevDep.nextDep = next;
        }
        link.prevDep = activeSub.depsTail;
        link.nextDep = void 0;
        activeSub.depsTail.nextDep = link;
        activeSub.depsTail = link;
        if (activeSub.deps === link) {
          activeSub.deps = next;
        }
      }
    }
    if (activeSub.onTrack) {
      activeSub.onTrack(extend({
        effect: activeSub
      }, debugInfo));
    }
    return link;
  }
  trigger(debugInfo) {
    this.version++;
    globalVersion++;
    this.notify(debugInfo);
  }
  notify(debugInfo) {
    startBatch();
    try {
      if (true) {
        for (let head = this.subsHead; head; head = head.nextSub) {
          if (head.sub.onTrigger && !(head.sub.flags & 8)) {
            head.sub.onTrigger(extend({
              effect: head.sub
            }, debugInfo));
          }
        }
      }
      for (let link = this.subs; link; link = link.prevSub) {
        if (link.sub.notify()) {
          ;
          link.sub.dep.notify();
        }
      }
    } finally {
      endBatch();
    }
  }
}
function addSub(link) {
  link.dep.sc++;
  if (link.sub.flags & 4) {
    const computed2 = link.dep.computed;
    if (computed2 && !link.dep.subs) {
      computed2.flags |= 4 | 16;
      for (let l = computed2.deps; l; l = l.nextDep) {
        addSub(l);
      }
    }
    const currentTail = link.dep.subs;
    if (currentTail !== link) {
      link.prevSub = currentTail;
      if (currentTail)
        currentTail.nextSub = link;
    }
    if (link.dep.subsHead === void 0) {
      link.dep.subsHead = link;
    }
    link.dep.subs = link;
  }
}
const targetMap = /* @__PURE__ */ new WeakMap();
const ITERATE_KEY = Symbol("Object iterate");
const MAP_KEY_ITERATE_KEY = Symbol("Map keys iterate");
const ARRAY_ITERATE_KEY = Symbol("Array iterate");
function track(target, type, key) {
  if (shouldTrack && activeSub) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = new Dep());
      dep.map = depsMap;
      dep.key = key;
    }
    {
      dep.track({
        target,
        type,
        key
      });
    }
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    globalVersion++;
    return;
  }
  const run = (dep) => {
    if (dep) {
      {
        dep.trigger({
          target,
          type,
          key,
          newValue,
          oldValue,
          oldTarget
        });
      }
    }
  };
  startBatch();
  if (type === "clear") {
    depsMap.forEach(run);
  } else {
    const targetIsArray = isArray(target);
    const isArrayIndex = targetIsArray && isIntegerKey(key);
    if (targetIsArray && key === "length") {
      const newLength = Number(newValue);
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 === ARRAY_ITERATE_KEY || !isSymbol(key2) && key2 >= newLength) {
          run(dep);
        }
      });
    } else {
      if (key !== void 0 || depsMap.has(void 0)) {
        run(depsMap.get(key));
      }
      if (isArrayIndex) {
        run(depsMap.get(ARRAY_ITERATE_KEY));
      }
      switch (type) {
        case "add":
          if (!targetIsArray) {
            run(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              run(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isArrayIndex) {
            run(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!targetIsArray) {
            run(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              run(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            run(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
  }
  endBatch();
}
function reactiveReadArray(array) {
  const raw = toRaw(array);
  if (raw === array)
    return raw;
  track(raw, "iterate", ARRAY_ITERATE_KEY);
  return isShallow(array) ? raw : raw.map(toReactive);
}
function shallowReadArray(arr) {
  track(arr = toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
  return arr;
}
const arrayInstrumentations = {
  __proto__: null,
  [Symbol.iterator]() {
    return iterator(this, Symbol.iterator, toReactive);
  },
  concat(...args) {
    return reactiveReadArray(this).concat(...args.map((x) => isArray(x) ? reactiveReadArray(x) : x));
  },
  entries() {
    return iterator(this, "entries", (value) => {
      value[1] = toReactive(value[1]);
      return value;
    });
  },
  every(fn, thisArg) {
    return apply(this, "every", fn, thisArg, void 0, arguments);
  },
  filter(fn, thisArg) {
    return apply(this, "filter", fn, thisArg, (v) => v.map(toReactive), arguments);
  },
  find(fn, thisArg) {
    return apply(this, "find", fn, thisArg, toReactive, arguments);
  },
  findIndex(fn, thisArg) {
    return apply(this, "findIndex", fn, thisArg, void 0, arguments);
  },
  findLast(fn, thisArg) {
    return apply(this, "findLast", fn, thisArg, toReactive, arguments);
  },
  findLastIndex(fn, thisArg) {
    return apply(this, "findLastIndex", fn, thisArg, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(fn, thisArg) {
    return apply(this, "forEach", fn, thisArg, void 0, arguments);
  },
  includes(...args) {
    return searchProxy(this, "includes", args);
  },
  indexOf(...args) {
    return searchProxy(this, "indexOf", args);
  },
  join(separator) {
    return reactiveReadArray(this).join(separator);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...args) {
    return searchProxy(this, "lastIndexOf", args);
  },
  map(fn, thisArg) {
    return apply(this, "map", fn, thisArg, void 0, arguments);
  },
  pop() {
    return noTracking(this, "pop");
  },
  push(...args) {
    return noTracking(this, "push", args);
  },
  reduce(fn, ...args) {
    return reduce(this, "reduce", fn, args);
  },
  reduceRight(fn, ...args) {
    return reduce(this, "reduceRight", fn, args);
  },
  shift() {
    return noTracking(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(fn, thisArg) {
    return apply(this, "some", fn, thisArg, void 0, arguments);
  },
  splice(...args) {
    return noTracking(this, "splice", args);
  },
  toReversed() {
    return reactiveReadArray(this).toReversed();
  },
  toSorted(comparer) {
    return reactiveReadArray(this).toSorted(comparer);
  },
  toSpliced(...args) {
    return reactiveReadArray(this).toSpliced(...args);
  },
  unshift(...args) {
    return noTracking(this, "unshift", args);
  },
  values() {
    return iterator(this, "values", toReactive);
  }
};
function iterator(self2, method, wrapValue) {
  const arr = shallowReadArray(self2);
  const iter = arr[method]();
  if (arr !== self2 && !isShallow(self2)) {
    iter._next = iter.next;
    iter.next = () => {
      const result = iter._next();
      if (result.value) {
        result.value = wrapValue(result.value);
      }
      return result;
    };
  }
  return iter;
}
const arrayProto = Array.prototype;
function apply(self2, method, fn, thisArg, wrappedRetFn, args) {
  const arr = shallowReadArray(self2);
  const needsWrap = arr !== self2 && !isShallow(self2);
  const methodFn = arr[method];
  if (methodFn !== arrayProto[method]) {
    const result2 = methodFn.apply(self2, args);
    return needsWrap ? toReactive(result2) : result2;
  }
  let wrappedFn = fn;
  if (arr !== self2) {
    if (needsWrap) {
      wrappedFn = function(item, index) {
        return fn.call(this, toReactive(item), index, self2);
      };
    } else if (fn.length > 2) {
      wrappedFn = function(item, index) {
        return fn.call(this, item, index, self2);
      };
    }
  }
  const result = methodFn.call(arr, wrappedFn, thisArg);
  return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
}
function reduce(self2, method, fn, args) {
  const arr = shallowReadArray(self2);
  let wrappedFn = fn;
  if (arr !== self2) {
    if (!isShallow(self2)) {
      wrappedFn = function(acc, item, index) {
        return fn.call(this, acc, toReactive(item), index, self2);
      };
    } else if (fn.length > 3) {
      wrappedFn = function(acc, item, index) {
        return fn.call(this, acc, item, index, self2);
      };
    }
  }
  return arr[method](wrappedFn, ...args);
}
function searchProxy(self2, method, args) {
  const arr = toRaw(self2);
  track(arr, "iterate", ARRAY_ITERATE_KEY);
  const res = arr[method](...args);
  if ((res === -1 || res === false) && isProxy(args[0])) {
    args[0] = toRaw(args[0]);
    return arr[method](...args);
  }
  return res;
}
function noTracking(self2, method, args = []) {
  pauseTracking();
  startBatch();
  const res = toRaw(self2)[method].apply(self2, args);
  endBatch();
  resetTracking();
  return res;
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol));
function hasOwnProperty(key) {
  if (!isSymbol(key))
    key = String(key);
  const obj = toRaw(this);
  track(obj, "has", key);
  return obj.hasOwnProperty(key);
}
class BaseReactiveHandler {
  constructor(_isReadonly = false, _isShallow = false) {
    this._isReadonly = _isReadonly;
    this._isShallow = _isShallow;
  }
  get(target, key, receiver) {
    if (key === "__v_skip")
      return target["__v_skip"];
    const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return isShallow2;
    } else if (key === "__v_raw") {
      if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
        return target;
      }
      return;
    }
    const targetIsArray = isArray(target);
    if (!isReadonly2) {
      let fn;
      if (targetIsArray && (fn = arrayInstrumentations[key])) {
        return fn;
      }
      if (key === "hasOwnProperty") {
        return hasOwnProperty;
      }
    }
    const res = Reflect.get(
      target,
      key,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      isRef(target) ? target : receiver
    );
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (isShallow2) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key) ? res : res.value;
    }
    if (isObject(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  }
}
class MutableReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(false, isShallow2);
  }
  set(target, key, value, receiver) {
    let oldValue = target[key];
    if (!this._isShallow) {
      const isOldValueReadonly = isReadonly(oldValue);
      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        if (isOldValueReadonly) {
          return false;
        } else {
          oldValue.value = value;
          return true;
        }
      }
    }
    const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value, isRef(target) ? target : receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
    }
    return result;
  }
  deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  ownKeys(target) {
    track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
  }
}
class ReadonlyReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(true, isShallow2);
  }
  set(target, key) {
    {
      warn$2(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
    }
    return true;
  }
  deleteProperty(target, key) {
    {
      warn$2(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
    }
    return true;
  }
}
const mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
const readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
const shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
const shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      // iterator protocol
      next() {
        const {
          value,
          done
        } = innerIterator.next();
        return done ? {
          value,
          done
        } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    {
      const key = args[0] ? `on key "${args[0]}" ` : ``;
      warn$2(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
    }
    return type === "delete" ? false : type === "clear" ? void 0 : this;
  };
}
function createInstrumentations(readonly2, shallow) {
  const instrumentations = {
    get(key) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const rawKey = toRaw(key);
      if (!readonly2) {
        if (hasChanged(key, rawKey)) {
          track(rawTarget, "get", key);
        }
        track(rawTarget, "get", rawKey);
      }
      const {
        has
      } = getProto(rawTarget);
      const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
      if (has.call(rawTarget, key)) {
        return wrap(target.get(key));
      } else if (has.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
      } else if (target !== rawTarget) {
        target.get(key);
      }
    },
    get size() {
      const target = this["__v_raw"];
      !readonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
      return Reflect.get(target, "size", target);
    },
    has(key) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const rawKey = toRaw(key);
      if (!readonly2) {
        if (hasChanged(key, rawKey)) {
          track(rawTarget, "has", key);
        }
        track(rawTarget, "has", rawKey);
      }
      return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
    },
    forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = toRaw(target);
      const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
      !readonly2 && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    }
  };
  extend(instrumentations, readonly2 ? {
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear")
  } : {
    add(value) {
      if (!shallow && !isShallow(value) && !isReadonly(value)) {
        value = toRaw(value);
      }
      const target = toRaw(this);
      const proto = getProto(target);
      const hadKey = proto.has.call(target, value);
      if (!hadKey) {
        target.add(value);
        trigger(target, "add", value, value);
      }
      return this;
    },
    set(key, value) {
      if (!shallow && !isShallow(value) && !isReadonly(value)) {
        value = toRaw(value);
      }
      const target = toRaw(this);
      const {
        has,
        get
      } = getProto(target);
      let hadKey = has.call(target, key);
      if (!hadKey) {
        key = toRaw(key);
        hadKey = has.call(target, key);
      } else {
        checkIdentityKeys(target, has, key);
      }
      const oldValue = get.call(target, key);
      target.set(key, value);
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
      return this;
    },
    delete(key) {
      const target = toRaw(this);
      const {
        has,
        get
      } = getProto(target);
      let hadKey = has.call(target, key);
      if (!hadKey) {
        key = toRaw(key);
        hadKey = has.call(target, key);
      } else {
        checkIdentityKeys(target, has, key);
      }
      const oldValue = get ? get.call(target, key) : void 0;
      const result = target.delete(key);
      if (hadKey) {
        trigger(target, "delete", key, void 0, oldValue);
      }
      return result;
    },
    clear() {
      const target = toRaw(this);
      const hadItems = target.size !== 0;
      const oldTarget = isMap(target) ? new Map(target) : new Set(target);
      const result = target.clear();
      if (hadItems) {
        trigger(target, "clear", void 0, void 0, oldTarget);
      }
      return result;
    }
  });
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    instrumentations[method] = createIterableMethod(method, readonly2, shallow);
  });
  return instrumentations;
}
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = createInstrumentations(isReadonly2, shallow);
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has, key) {
  const rawKey = toRaw(key);
  if (rawKey !== key && has.call(target, rawKey)) {
    const type = toRawType(target);
    warn$2(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function shallowReadonly(target) {
  return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    {
      warn$2(`value cannot be made ${isReadonly2 ? "readonly" : "reactive"}: ${String(target)}`);
    }
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return value ? !!value["__v_raw"] : false;
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  if (!hasOwn(value, "__v_skip") && Object.isExtensible(value)) {
    def(value, "__v_skip", true);
  }
  return value;
}
const toReactive = (value) => isObject(value) ? reactive(value) : value;
const toReadonly = (value) => isObject(value) ? readonly(value) : value;
function isRef(r) {
  return r ? r["__v_isRef"] === true : false;
}
function ref(value) {
  return createRef(value, false);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, isShallow2) {
    this.dep = new Dep();
    this["__v_isRef"] = true;
    this["__v_isShallow"] = false;
    this._rawValue = isShallow2 ? value : toRaw(value);
    this._value = isShallow2 ? value : toReactive(value);
    this["__v_isShallow"] = isShallow2;
  }
  get value() {
    {
      this.dep.track({
        target: this,
        type: "get",
        key: "value"
      });
    }
    return this._value;
  }
  set value(newValue) {
    const oldValue = this._rawValue;
    const useDirectValue = this["__v_isShallow"] || isShallow(newValue) || isReadonly(newValue);
    newValue = useDirectValue ? newValue : toRaw(newValue);
    if (hasChanged(newValue, oldValue)) {
      this._rawValue = newValue;
      this._value = useDirectValue ? newValue : toReactive(newValue);
      {
        this.dep.trigger({
          target: this,
          type: "set",
          key: "value",
          newValue,
          oldValue
        });
      }
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => key === "__v_raw" ? target : unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class ComputedRefImpl {
  constructor(fn, setter, isSSR) {
    this.fn = fn;
    this.setter = setter;
    this._value = void 0;
    this.dep = new Dep(this);
    this.__v_isRef = true;
    this.deps = void 0;
    this.depsTail = void 0;
    this.flags = 16;
    this.globalVersion = globalVersion - 1;
    this.next = void 0;
    this.effect = this;
    this["__v_isReadonly"] = !setter;
    this.isSSR = isSSR;
  }
  /**
   * @internal
   */
  notify() {
    this.flags |= 16;
    if (!(this.flags & 8) && // avoid infinite self recursion
    activeSub !== this) {
      batch(this, true);
      return true;
    }
  }
  get value() {
    const link = this.dep.track({
      target: this,
      type: "get",
      key: "value"
    });
    refreshComputed(this);
    if (link) {
      link.version = this.dep.version;
    }
    return this._value;
  }
  set value(newValue) {
    if (this.setter) {
      this.setter(newValue);
    } else {
      warn$2("Write operation failed: computed value is readonly");
    }
  }
}
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  if (isFunction(getterOrOptions)) {
    getter = getterOrOptions;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, isSSR);
  if (debugOptions && !isSSR) {
    cRef.onTrack = debugOptions.onTrack;
    cRef.onTrigger = debugOptions.onTrigger;
  }
  return cRef;
}
const INITIAL_WATCHER_VALUE = {};
const cleanupMap = /* @__PURE__ */ new WeakMap();
let activeWatcher = void 0;
function onWatcherCleanup(cleanupFn, failSilently = false, owner = activeWatcher) {
  if (owner) {
    let cleanups = cleanupMap.get(owner);
    if (!cleanups)
      cleanupMap.set(owner, cleanups = []);
    cleanups.push(cleanupFn);
  } else if (!failSilently) {
    warn$2(`onWatcherCleanup() was called when there was no active watcher to associate with.`);
  }
}
function watch$1(source, cb, options2 = EMPTY_OBJ) {
  const {
    immediate,
    deep,
    once,
    scheduler,
    augmentJob,
    call
  } = options2;
  const warnInvalidSource = (s) => {
    (options2.onWarn || warn$2)(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`);
  };
  const reactiveGetter = (source2) => {
    if (deep)
      return source2;
    if (isShallow(source2) || deep === false || deep === 0)
      return traverse(source2, 1);
    return traverse(source2);
  };
  let effect;
  let getter;
  let cleanup;
  let boundCleanup;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => reactiveGetter(source);
    forceTrigger = true;
  } else if (isArray(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
    getter = () => source.map((s) => {
      if (isRef(s)) {
        return s.value;
      } else if (isReactive(s)) {
        return reactiveGetter(s);
      } else if (isFunction(s)) {
        return call ? call(s, 2) : s();
      } else {
        warnInvalidSource(s);
      }
    });
  } else if (isFunction(source)) {
    if (cb) {
      getter = call ? () => call(source, 2) : source;
    } else {
      getter = () => {
        if (cleanup) {
          pauseTracking();
          try {
            cleanup();
          } finally {
            resetTracking();
          }
        }
        const currentEffect = activeWatcher;
        activeWatcher = effect;
        try {
          return call ? call(source, 3, [boundCleanup]) : source(boundCleanup);
        } finally {
          activeWatcher = currentEffect;
        }
      };
    }
  } else {
    getter = NOOP;
    warnInvalidSource(source);
  }
  if (cb && deep) {
    const baseGetter = getter;
    const depth = deep === true ? Infinity : deep;
    getter = () => traverse(baseGetter(), depth);
  }
  const scope = getCurrentScope();
  const watchHandle = () => {
    effect.stop();
    if (scope && scope.active) {
      remove(scope.effects, effect);
    }
  };
  if (once && cb) {
    const _cb = cb;
    cb = (...args) => {
      _cb(...args);
      watchHandle();
    };
  }
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = (immediateFirstRun) => {
    if (!(effect.flags & 1) || !effect.dirty && !immediateFirstRun) {
      return;
    }
    if (cb) {
      const newValue = effect.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue))) {
        if (cleanup) {
          cleanup();
        }
        const currentWatcher = activeWatcher;
        activeWatcher = effect;
        try {
          const args = [
            newValue,
            // pass undefined as the old value when it's changed for the first time
            oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
            boundCleanup
          ];
          oldValue = newValue;
          call ? call(cb, 3, args) : (
            // @ts-expect-error
            cb(...args)
          );
        } finally {
          activeWatcher = currentWatcher;
        }
      }
    } else {
      effect.run();
    }
  };
  if (augmentJob) {
    augmentJob(job);
  }
  effect = new ReactiveEffect(getter);
  effect.scheduler = scheduler ? () => scheduler(job, false) : job;
  boundCleanup = (fn) => onWatcherCleanup(fn, false, effect);
  cleanup = effect.onStop = () => {
    const cleanups = cleanupMap.get(effect);
    if (cleanups) {
      if (call) {
        call(cleanups, 4);
      } else {
        for (const cleanup2 of cleanups)
          cleanup2();
      }
      cleanupMap.delete(effect);
    }
  };
  {
    effect.onTrack = options2.onTrack;
    effect.onTrigger = options2.onTrigger;
  }
  if (cb) {
    if (immediate) {
      job(true);
    } else {
      oldValue = effect.run();
    }
  } else if (scheduler) {
    scheduler(job.bind(null, true), true);
  } else {
    effect.run();
  }
  watchHandle.pause = effect.pause.bind(effect);
  watchHandle.resume = effect.resume.bind(effect);
  watchHandle.stop = watchHandle;
  return watchHandle;
}
function traverse(value, depth = Infinity, seen) {
  if (depth <= 0 || !isObject(value) || value["__v_skip"]) {
    return value;
  }
  seen = seen || /* @__PURE__ */ new Set();
  if (seen.has(value)) {
    return value;
  }
  seen.add(value);
  depth--;
  if (isRef(value)) {
    traverse(value.value, depth, seen);
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], depth, seen);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v) => {
      traverse(v, depth, seen);
    });
  } else if (isPlainObject(value)) {
    for (const key in value) {
      traverse(value[key], depth, seen);
    }
    for (const key of Object.getOwnPropertySymbols(value)) {
      if (Object.prototype.propertyIsEnumerable.call(value, key)) {
        traverse(value[key], depth, seen);
      }
    }
  }
  return value;
}
const stack = [];
function pushWarningContext(vnode) {
  stack.push(vnode);
}
function popWarningContext() {
  stack.pop();
}
let isWarning = false;
function warn$1(msg2, ...args) {
  if (isWarning)
    return;
  isWarning = true;
  pauseTracking();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(appWarnHandler, instance, 11, [
      // eslint-disable-next-line no-restricted-syntax
      msg2 + args.map((a) => {
        var _a2, _b;
        return (_b = (_a2 = a.toString) == null ? void 0 : _a2.call(a)) != null ? _b : JSON.stringify(a);
      }).join(""),
      instance && instance.proxy,
      trace.map(({
        vnode
      }) => `at <${formatComponentName(instance, vnode.type)}>`).join("\n"),
      trace
    ]);
  } else {
    const warnArgs = [`[Vue warn]: ${msg2}`, ...args];
    if (trace.length && // avoid spamming console during tests
    true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
  isWarning = false;
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({
  vnode,
  recurseCount
}) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value, raw) {
  if (isString(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if (isRef(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if (isFunction(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw(value);
    return raw ? value : [`${key}=`, value];
  }
}
const ErrorTypeStrings$1 = {
  ["sp"]: "serverPrefetch hook",
  ["bc"]: "beforeCreate hook",
  ["c"]: "created hook",
  ["bm"]: "beforeMount hook",
  ["m"]: "mounted hook",
  ["bu"]: "beforeUpdate hook",
  ["u"]: "updated",
  ["bum"]: "beforeUnmount hook",
  ["um"]: "unmounted hook",
  ["a"]: "activated hook",
  ["da"]: "deactivated hook",
  ["ec"]: "errorCaptured hook",
  ["rtc"]: "renderTracked hook",
  ["rtg"]: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush",
  [15]: "component update",
  [16]: "app unmount cleanup function"
};
function callWithErrorHandling(fn, instance, type, args) {
  try {
    return args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  if (isArray(fn)) {
    const values = [];
    for (let i = 0; i < fn.length; i++) {
      values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    }
    return values;
  } else {
    warn$1(`Invalid value type passed to callWithAsyncErrorHandling(): ${typeof fn}`);
  }
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  const {
    errorHandler,
    throwUnhandledErrorInProduction
  } = instance && instance.appContext.config || EMPTY_OBJ;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = ErrorTypeStrings$1[type];
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    if (errorHandler) {
      pauseTracking();
      callWithErrorHandling(errorHandler, null, 10, [err, exposedInstance, errorInfo]);
      resetTracking();
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev, throwUnhandledErrorInProduction);
}
function logError(err, type, contextVNode, throwInDev = true, throwInProd = false) {
  {
    const info = ErrorTypeStrings$1[type];
    if (contextVNode) {
      pushWarningContext(contextVNode);
    }
    warn$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
    if (contextVNode) {
      popWarningContext();
    }
    if (throwInDev) {
      throw err;
    } else {
      console.error(err);
    }
  }
}
const queue = [];
let flushIndex = -1;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
const RECURSION_LIMIT = 100;
function nextTick(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJob = queue[middle];
    const middleJobId = getId(middleJob);
    if (middleJobId < id || middleJobId === id && middleJob.flags & 2) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  return start;
}
function queueJob(job) {
  if (!(job.flags & 1)) {
    const jobId = getId(job);
    const lastJob = queue[queue.length - 1];
    if (!lastJob || // fast path when the job id is larger than the tail
    !(job.flags & 2) && jobId >= getId(lastJob)) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(jobId), 0, job);
    }
    job.flags |= 1;
    queueFlush();
  }
}
function queueFlush() {
  if (!currentFlushPromise) {
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray(cb)) {
    if (activePostFlushCbs && cb.id === -1) {
      activePostFlushCbs.splice(postFlushIndex + 1, 0, cb);
    } else if (!(cb.flags & 1)) {
      pendingPostFlushCbs.push(cb);
      cb.flags |= 1;
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(instance, seen, i = flushIndex + 1) {
  {
    seen = seen || /* @__PURE__ */ new Map();
  }
  for (; i < queue.length; i++) {
    const cb = queue[i];
    if (cb && cb.flags & 2) {
      if (instance && cb.id !== instance.uid) {
        continue;
      }
      if (checkRecursiveUpdates(seen, cb)) {
        continue;
      }
      queue.splice(i, 1);
      i--;
      if (cb.flags & 4) {
        cb.flags &= -2;
      }
      cb();
      if (!(cb.flags & 4)) {
        cb.flags &= -2;
      }
    }
  }
}
function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)].sort((a, b) => getId(a) - getId(b));
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    {
      seen = seen || /* @__PURE__ */ new Map();
    }
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      const cb = activePostFlushCbs[postFlushIndex];
      if (checkRecursiveUpdates(seen, cb)) {
        continue;
      }
      if (cb.flags & 4) {
        cb.flags &= -2;
      }
      if (!(cb.flags & 8))
        cb();
      cb.flags &= -2;
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? job.flags & 2 ? -1 : Infinity : job.id;
function flushJobs(seen) {
  {
    seen = seen || /* @__PURE__ */ new Map();
  }
  const check = (job) => checkRecursiveUpdates(seen, job);
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && !(job.flags & 8)) {
        if (check(job)) {
          continue;
        }
        if (job.flags & 4) {
          job.flags &= ~1;
        }
        callWithErrorHandling(job, job.i, job.i ? 15 : 14);
        if (!(job.flags & 4)) {
          job.flags &= ~1;
        }
      }
    }
  } finally {
    for (; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job) {
        job.flags &= -2;
      }
    }
    flushIndex = -1;
    queue.length = 0;
    flushPostFlushCbs(seen);
    currentFlushPromise = null;
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}
function checkRecursiveUpdates(seen, fn) {
  const count = seen.get(fn) || 0;
  if (count > RECURSION_LIMIT) {
    const instance = fn.i;
    const componentName = instance && getComponentName(instance.type);
    handleError(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`, null, 10);
    return true;
  }
  seen.set(fn, count + 1);
  return false;
}
let isHmrUpdating = false;
const hmrDirtyComponents = /* @__PURE__ */ new Map();
{
  getGlobalThis().__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
  };
}
const map = /* @__PURE__ */ new Map();
function registerHMR(instance) {
  const id = instance.type.__hmrId;
  let record = map.get(id);
  if (!record) {
    createRecord(id, instance.type);
    record = map.get(id);
  }
  record.instances.add(instance);
}
function unregisterHMR(instance) {
  map.get(instance.type.__hmrId).instances.delete(instance);
}
function createRecord(id, initialDef) {
  if (map.has(id)) {
    return false;
  }
  map.set(id, {
    initialDef: normalizeClassComponent(initialDef),
    instances: /* @__PURE__ */ new Set()
  });
  return true;
}
function normalizeClassComponent(component) {
  return isClassComponent$1(component) ? component.__vccOpts : component;
}
function rerender(id, newRender) {
  const record = map.get(id);
  if (!record) {
    return;
  }
  record.initialDef.render = newRender;
  [...record.instances].forEach((instance) => {
    if (newRender) {
      instance.render = newRender;
      normalizeClassComponent(instance.type).render = newRender;
    }
    instance.renderCache = [];
    isHmrUpdating = true;
    instance.update();
    isHmrUpdating = false;
  });
}
function reload(id, newComp) {
  const record = map.get(id);
  if (!record)
    return;
  newComp = normalizeClassComponent(newComp);
  updateComponentDef(record.initialDef, newComp);
  const instances2 = [...record.instances];
  for (let i = 0; i < instances2.length; i++) {
    const instance = instances2[i];
    const oldComp = normalizeClassComponent(instance.type);
    let dirtyInstances = hmrDirtyComponents.get(oldComp);
    if (!dirtyInstances) {
      if (oldComp !== record.initialDef) {
        updateComponentDef(oldComp, newComp);
      }
      hmrDirtyComponents.set(oldComp, dirtyInstances = /* @__PURE__ */ new Set());
    }
    dirtyInstances.add(instance);
    instance.appContext.propsCache.delete(instance.type);
    instance.appContext.emitsCache.delete(instance.type);
    instance.appContext.optionsCache.delete(instance.type);
    if (instance.ceReload) {
      dirtyInstances.add(instance);
      instance.ceReload(newComp.styles);
      dirtyInstances.delete(instance);
    } else if (instance.parent) {
      queueJob(() => {
        isHmrUpdating = true;
        instance.parent.update();
        isHmrUpdating = false;
        dirtyInstances.delete(instance);
      });
    } else if (instance.appContext.reload) {
      instance.appContext.reload();
    } else if (typeof taroWindowProvider !== "undefined") {
      taroWindowProvider.location.reload();
    } else {
      console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
    }
    if (instance.root.ce && instance !== instance.root) {
      instance.root.ce._removeChildStyle(oldComp);
    }
  }
  queuePostFlushCb(() => {
    hmrDirtyComponents.clear();
  });
}
function updateComponentDef(oldComp, newComp) {
  extend(oldComp, newComp);
  for (const key in oldComp) {
    if (key !== "__file" && !(key in newComp)) {
      delete oldComp[key];
    }
  }
}
function tryWrap(fn) {
  return (id, arg) => {
    try {
      return fn(id, arg);
    } catch (e) {
      console.error(e);
      console.warn(`[HMR] Something went wrong during Vue component hot-reload. Full reload required.`);
    }
  };
}
let devtools$1;
let buffer = [];
let devtoolsNotInstalled = false;
function emit$1(event, ...args) {
  if (devtools$1) {
    devtools$1.emit(event, ...args);
  } else if (!devtoolsNotInstalled) {
    buffer.push({
      event,
      args
    });
  }
}
function setDevtoolsHook$1(hook, target) {
  var _a2, _b;
  devtools$1 = hook;
  if (devtools$1) {
    devtools$1.enabled = true;
    buffer.forEach(({
      event,
      args
    }) => devtools$1.emit(event, ...args));
    buffer = [];
  } else if (
    // handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    typeof taroWindowProvider !== "undefined" && // some envs mock window but not fully
    taroWindowProvider.HTMLElement && // also exclude jsdom
    // eslint-disable-next-line no-restricted-syntax
    !((_b = (_a2 = taroWindowProvider.navigator) == null ? void 0 : _a2.userAgent) == null ? void 0 : _b.includes("jsdom"))
  ) {
    const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
    replay.push((newHook) => {
      setDevtoolsHook$1(newHook, target);
    });
    setTimeout(() => {
      if (!devtools$1) {
        target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
        devtoolsNotInstalled = true;
        buffer = [];
      }
    }, 3e3);
  } else {
    devtoolsNotInstalled = true;
    buffer = [];
  }
}
function devtoolsInitApp(app, version2) {
  emit$1("app:init", app, version2, {
    Fragment,
    Text,
    Comment,
    Static
  });
}
function devtoolsUnmountApp(app) {
  emit$1("app:unmount", app);
}
const devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:added"
  /* COMPONENT_ADDED */
);
const devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:updated"
  /* COMPONENT_UPDATED */
);
const _devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:removed"
  /* COMPONENT_REMOVED */
);
const devtoolsComponentRemoved = (component) => {
  if (devtools$1 && typeof devtools$1.cleanupBuffer === "function" && // remove the component if it wasn't buffered
  !devtools$1.cleanupBuffer(component)) {
    _devtoolsComponentRemoved(component);
  }
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function createDevtoolsComponentHook(hook) {
  return (component) => {
    emit$1(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : void 0, component);
  };
}
const devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook(
  "perf:start"
  /* PERFORMANCE_START */
);
const devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook(
  "perf:end"
  /* PERFORMANCE_END */
);
function createDevtoolsPerformanceHook(hook) {
  return (component, type, time) => {
    emit$1(hook, component.appContext.app, component.uid, component, type, time);
  };
}
function devtoolsComponentEmit(component, event, params) {
  emit$1("component:emit", component.appContext.app, component, event, params);
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx)
    return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    let res;
    try {
      res = fn(...args);
    } finally {
      setCurrentRenderingInstance(prevInstance);
      if (renderFnWithContext._d) {
        setBlockTracking(1);
      }
    }
    {
      devtoolsComponentUpdated(ctx);
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
function validateDirectiveName(name) {
  if (isBuiltInDirective(name)) {
    warn$1("Do not use built-in directive ids as custom directive id: " + name);
  }
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i = 0; i < bindings.length; i++) {
    const binding = bindings[i];
    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance, 8, [vnode.el, binding, vnode, prevVNode]);
      resetTracking();
    }
  }
}
const TeleportEndKey = Symbol("_vte");
const isTeleport = (type) => type.__isTeleport;
function setTransitionHooks(vnode, hooks2) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    vnode.transition = hooks2;
    setTransitionHooks(vnode.component.subTree, hooks2);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks2.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks2.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks2;
  }
}
function markAsyncBoundary(instance) {
  instance.ids = [instance.ids[0] + instance.ids[2]++ + "-", 0, 0];
}
const knownTemplateRefs = /* @__PURE__ */ new WeakSet();
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if (isArray(rawRef)) {
    rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    if (vnode.shapeFlag & 512 && vnode.type.__asyncResolved && vnode.component.subTree.component) {
      setRef(rawRef, oldRawRef, parentSuspense, vnode.component.subTree);
    }
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getComponentPublicInstance(vnode.component) : vnode.el;
  const value = isUnmount ? null : refValue;
  const {
    i: owner,
    r: ref2
  } = rawRef;
  if (!owner) {
    warn$1(`Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.`);
    return;
  }
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  const rawSetupState = toRaw(setupState);
  const canSetSetupRef = setupState === EMPTY_OBJ ? () => false : (key) => {
    {
      if (hasOwn(rawSetupState, key) && !isRef(rawSetupState[key])) {
        warn$1(`Template ref "${key}" used on a non-ref value. It will not work in the production build.`);
      }
      if (knownTemplateRefs.has(rawSetupState[key])) {
        return false;
      }
    }
    return hasOwn(rawSetupState, key);
  };
  if (oldRef != null && oldRef !== ref2) {
    if (isString(oldRef)) {
      refs[oldRef] = null;
      if (canSetSetupRef(oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef(oldRef)) {
      oldRef.value = null;
    }
  }
  if (isFunction(ref2)) {
    callWithErrorHandling(ref2, owner, 12, [value, refs]);
  } else {
    const _isString = isString(ref2);
    const _isRef = isRef(ref2);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? canSetSetupRef(ref2) ? setupState[ref2] : refs[ref2] : ref2.value;
          if (isUnmount) {
            isArray(existing) && remove(existing, refValue);
          } else {
            if (!isArray(existing)) {
              if (_isString) {
                refs[ref2] = [refValue];
                if (canSetSetupRef(ref2)) {
                  setupState[ref2] = refs[ref2];
                }
              } else {
                ref2.value = [refValue];
                if (rawRef.k)
                  refs[rawRef.k] = ref2.value;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref2] = value;
          if (canSetSetupRef(ref2)) {
            setupState[ref2] = value;
          }
        } else if (_isRef) {
          ref2.value = value;
          if (rawRef.k)
            refs[rawRef.k] = value;
        } else {
          warn$1("Invalid template ref type:", ref2, `(${typeof ref2})`);
        }
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    } else {
      warn$1("Invalid template ref type:", ref2, `(${typeof ref2})`);
    }
  }
}
getGlobalThis().requestIdleCallback || ((cb) => setTimeout(cb, 1));
getGlobalThis().cancelIdleCallback || ((id) => clearTimeout(id));
const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(
    type,
    hook,
    keepAliveRoot,
    true
    /* prepend */
  );
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks2 = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      pauseTracking();
      const reset = setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      reset();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks2.unshift(wrappedHook);
    } else {
      hooks2.push(wrappedHook);
    }
    return wrappedHook;
  } else {
    const apiName = toHandlerKey(ErrorTypeStrings$1[type].replace(/ hook$/, ""));
    warn$1(`${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => {
  if (!isInSSRComponentSetup || lifecycle === "sp") {
    injectHook(lifecycle, (...args) => hook(...args), target);
  }
};
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook("bu");
const onUpdated = createHook("u");
const onBeforeUnmount = createHook("bum");
const onUnmounted = createHook("um");
const onServerPrefetch = createHook("sp");
const onRenderTriggered = createHook("rtg");
const onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
const NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
const getPublicInstance = (i) => {
  if (!i)
    return null;
  if (isStatefulComponent(i))
    return getComponentPublicInstance(i);
  return getPublicInstance(i.parent);
};
const publicPropertiesMap = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
    $: (i) => i,
    $el: (i) => i.vnode.el,
    $data: (i) => i.data,
    $props: (i) => shallowReadonly(i.props),
    $attrs: (i) => shallowReadonly(i.attrs),
    $slots: (i) => shallowReadonly(i.slots),
    $refs: (i) => shallowReadonly(i.refs),
    $parent: (i) => getPublicInstance(i.parent),
    $root: (i) => getPublicInstance(i.root),
    $host: (i) => i.ce,
    $emit: (i) => i.emit,
    $options: (i) => resolveMergedOptions(i),
    $forceUpdate: (i) => i.f || (i.f = () => {
      queueJob(i.update);
    }),
    $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
    $watch: (i) => instanceWatch.bind(i)
  })
);
const isReservedPrefix = (key) => key === "_" || key === "$";
const hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
const PublicInstanceProxyHandlers = {
  get({
    _: instance
  }, key) {
    if (key === "__v_skip") {
      return true;
    }
    const {
      ctx,
      setupState,
      data,
      props,
      accessCache,
      type,
      appContext
    } = instance;
    if (key === "__isVue") {
      return true;
    }
    let normalizedProps;
    if (key[0] !== "$") {
      const n = accessCache[key];
      if (n !== void 0) {
        switch (n) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (hasSetupBinding(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if (
        // only cache other properties when instance has declared (thus stable)
        // props
        (normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)
      ) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance.attrs, "get", "");
        markAttrsAccessed();
      } else if (key === "$slots") {
        track(instance, "get", key);
      }
      return publicGetter(instance);
    } else if (
      // css module (injected by vue-loader)
      (cssModule = type.__cssModules) && (cssModule = cssModule[key])
    ) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (
      // global properties
      globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)
    ) {
      {
        return globalProperties[key];
      }
    } else if (currentRenderingInstance && (!isString(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    key.indexOf("__v") !== 0)) {
      if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn(data, key)) {
        warn$1(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`);
      } else if (instance === currentRenderingInstance) {
        warn$1(`Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`);
      }
    }
  },
  set({
    _: instance
  }, key, value) {
    const {
      data,
      setupState,
      ctx
    } = instance;
    if (hasSetupBinding(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (setupState.__isScriptSetup && hasOwn(setupState, key)) {
      warn$1(`Cannot mutate <script setup> binding "${key}" from Options API.`);
      return false;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
      data[key] = value;
      return true;
    } else if (hasOwn(instance.props, key)) {
      warn$1(`Attempting to mutate prop "${key}". Props are readonly.`);
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      warn$1(`Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`);
      return false;
    } else {
      if (key in instance.appContext.config.globalProperties) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          value
        });
      } else {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({
    _: {
      data,
      setupState,
      accessCache,
      ctx,
      appContext,
      propsOptions
    }
  }, key) {
    let normalizedProps;
    return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
{
  PublicInstanceProxyHandlers.ownKeys = (target) => {
    warn$1(`Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`);
    return Reflect.ownKeys(target);
  };
}
function createDevRenderContext(instance) {
  const target = {};
  Object.defineProperty(target, `_`, {
    configurable: true,
    enumerable: false,
    get: () => instance
  });
  Object.keys(publicPropertiesMap).forEach((key) => {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: false,
      get: () => publicPropertiesMap[key](instance),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: NOOP
    });
  });
  return target;
}
function exposePropsOnRenderContext(instance) {
  const {
    ctx,
    propsOptions: [propsOptions]
  } = instance;
  if (propsOptions) {
    Object.keys(propsOptions).forEach((key) => {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => instance.props[key],
        set: NOOP
      });
    });
  }
}
function exposeSetupStateOnRenderContext(instance) {
  const {
    ctx,
    setupState
  } = instance;
  Object.keys(toRaw(setupState)).forEach((key) => {
    if (!setupState.__isScriptSetup) {
      if (isReservedPrefix(key[0])) {
        warn$1(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => setupState[key],
        set: NOOP
      });
    }
  });
}
function normalizePropsOrEmits(props) {
  return isArray(props) ? props.reduce((normalized, p2) => (normalized[p2] = null, normalized), {}) : props;
}
function createDuplicateChecker() {
  const cache2 = /* @__PURE__ */ Object.create(null);
  return (type, key) => {
    if (cache2[key]) {
      warn$1(`${type} property "${key}" is already defined in ${cache2[key]}.`);
    } else {
      cache2[key] = type;
    }
  };
}
let shouldCacheAccess = true;
function applyOptions(instance) {
  const options2 = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options2.beforeCreate) {
    callHook(options2.beforeCreate, instance, "bc");
  }
  const {
    // state
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    // lifecycle
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    // public API
    expose,
    inheritAttrs,
    // assets
    components: components2,
    directives,
    filters
  } = options2;
  const checkDuplicateProperties = createDuplicateChecker();
  {
    const [propsOptions] = instance.propsOptions;
    if (propsOptions) {
      for (const key in propsOptions) {
        checkDuplicateProperties("Props", key);
      }
    }
  }
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction(methodHandler)) {
        {
          Object.defineProperty(ctx, key, {
            value: methodHandler.bind(publicThis),
            configurable: true,
            enumerable: true,
            writable: true
          });
        }
        {
          checkDuplicateProperties("Methods", key);
        }
      } else {
        warn$1(`Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`);
      }
    }
  }
  if (dataOptions) {
    if (!isFunction(dataOptions)) {
      warn$1(`The data option must be a function. Plain object usage is no longer supported.`);
    }
    const data = dataOptions.call(publicThis, publicThis);
    if (isPromise(data)) {
      warn$1(`data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`);
    }
    if (!isObject(data)) {
      warn$1(`data() should return an object.`);
    } else {
      instance.data = reactive(data);
      {
        for (const key in data) {
          checkDuplicateProperties("Data", key);
          if (!isReservedPrefix(key[0])) {
            Object.defineProperty(ctx, key, {
              configurable: true,
              enumerable: true,
              get: () => data[key],
              set: NOOP
            });
          }
        }
      }
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      if (get === NOOP) {
        warn$1(`Computed property "${key}" has no getter.`);
      }
      const set = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : () => {
        warn$1(`Write operation failed: computed property "${key}" is readonly.`);
      };
      const c = computed({
        get,
        set
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v) => c.value = v
      });
      {
        checkDuplicateProperties("Computed", key);
      }
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key) => {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook(created, instance, "c");
  }
  function registerLifecycleHook(register, hook) {
    if (isArray(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render && instance.render === NOOP) {
    instance.render = render;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components2)
    instance.components = components2;
  if (directives)
    instance.directives = directives;
  if (serverPrefetch) {
    markAsyncBoundary(instance);
  }
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
  if (isArray(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject(opt)) {
      if ("default" in opt) {
        injected = inject(opt.from || key, opt.default, true);
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => injected.value,
        set: (v) => injected.value = v
      });
    } else {
      ctx[key] = injected;
    }
    {
      checkDuplicateProperties("Inject", key);
    }
  }
}
function callHook(hook, instance, type) {
  callWithAsyncErrorHandling(isArray(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
  let getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString(raw)) {
    const handler = ctx[raw];
    if (isFunction(handler)) {
      {
        watch(getter, handler);
      }
    } else {
      warn$1(`Invalid watch handler specified by key "${raw}"`, handler);
    }
  } else if (isFunction(raw)) {
    {
      watch(getter, raw.bind(publicThis));
    }
  } else if (isObject(raw)) {
    if (isArray(raw)) {
      raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
    } else {
      const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction(handler)) {
        watch(getter, handler, raw);
      } else {
        warn$1(`Invalid watch handler specified by key "${raw.handler}"`, handler);
      }
    }
  } else {
    warn$1(`Invalid watch option: "${key}"`, raw);
  }
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const {
    mixins,
    extends: extendsOptions
  } = base;
  const {
    mixins: globalMixins,
    optionsCache: cache2,
    config: {
      optionMergeStrategies
    }
  } = instance.appContext;
  const cached = cache2.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach((m) => mergeOptions(resolved, m, optionMergeStrategies, true));
    }
    mergeOptions(resolved, base, optionMergeStrategies);
  }
  if (isObject(base)) {
    cache2.set(base, resolved);
  }
  return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
  const {
    mixins,
    extends: extendsOptions
  } = from;
  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach((m) => mergeOptions(to, m, strats, true));
  }
  for (const key in from) {
    if (asMixin && key === "expose") {
      warn$1(`"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`);
    } else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeEmitsOrPropsOptions,
  emits: mergeEmitsOrPropsOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
  if (to) {
    if (isArray(to) && isArray(from)) {
      return [.../* @__PURE__ */ new Set([...to, ...from])];
    }
    return extend(/* @__PURE__ */ Object.create(null), normalizePropsOrEmits(to), normalizePropsOrEmits(from != null ? from : {}));
  } else {
    return from;
  }
}
function mergeWatchOptions(to, from) {
  if (!to)
    return from;
  if (!from)
    return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid$1 = 0;
function createAppAPI(render, hydrate2) {
  return function createApp2(rootComponent, rootProps = null) {
    if (!isFunction(rootComponent)) {
      rootComponent = extend({}, rootComponent);
    }
    if (rootProps != null && !isObject(rootProps)) {
      warn$1(`root props passed to app.mount() must be an object.`);
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new WeakSet();
    const pluginCleanupFns = [];
    let isMounted = false;
    const app = context.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v) {
        {
          warn$1(`app.config cannot be replaced. Modify individual options instead.`);
        }
      },
      use(plugin, ...options2) {
        if (installedPlugins.has(plugin)) {
          warn$1(`Plugin has already been applied to target app.`);
        } else if (plugin && isFunction(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app, ...options2);
        } else if (isFunction(plugin)) {
          installedPlugins.add(plugin);
          plugin(app, ...options2);
        } else {
          warn$1(`A plugin must either be a function or an object with an "install" function.`);
        }
        return app;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          } else {
            warn$1("Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : ""));
          }
        }
        return app;
      },
      component(name, component) {
        {
          validateComponentName(name, context.config);
        }
        if (!component) {
          return context.components[name];
        }
        if (context.components[name]) {
          warn$1(`Component "${name}" has already been registered in target app.`);
        }
        context.components[name] = component;
        return app;
      },
      directive(name, directive) {
        {
          validateDirectiveName(name);
        }
        if (!directive) {
          return context.directives[name];
        }
        if (context.directives[name]) {
          warn$1(`Directive "${name}" has already been registered in target app.`);
        }
        context.directives[name] = directive;
        return app;
      },
      mount(rootContainer, isHydrate, namespace) {
        if (!isMounted) {
          if (rootContainer.__vue_app__) {
            warn$1(`There is already an app instance mounted on the host container.
 If you want to mount another app on the same host container, you need to unmount the previous app by calling \`app.unmount()\` first.`);
          }
          const vnode = app._ceVNode || createVNode(rootComponent, rootProps);
          vnode.appContext = context;
          if (namespace === true) {
            namespace = "svg";
          } else if (namespace === false) {
            namespace = void 0;
          }
          {
            context.reload = () => {
              const cloned = cloneVNode(vnode);
              cloned.el = null;
              render(cloned, rootContainer, namespace);
            };
          }
          if (isHydrate && hydrate2) {
            hydrate2(vnode, rootContainer);
          } else {
            render(vnode, rootContainer, namespace);
          }
          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;
          {
            app._instance = vnode.component;
            devtoolsInitApp(app, version);
          }
          return getComponentPublicInstance(vnode.component);
        } else {
          warn$1(`App has already been mounted.
If you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. \`const createMyApp = () => createApp(App)\``);
        }
      },
      onUnmount(cleanupFn) {
        if (typeof cleanupFn !== "function") {
          warn$1(`Expected function as first argument to app.onUnmount(), but got ${typeof cleanupFn}`);
        }
        pluginCleanupFns.push(cleanupFn);
      },
      unmount() {
        if (isMounted) {
          callWithAsyncErrorHandling(pluginCleanupFns, app._instance, 16);
          render(null, app._container);
          {
            app._instance = null;
            devtoolsUnmountApp(app);
          }
          delete app._container.__vue_app__;
        } else {
          warn$1(`Cannot unmount an app that is not mounted.`);
        }
      },
      provide(key, value) {
        if (key in context.provides) {
          if (hasOwn(context.provides, key)) {
            warn$1(`App already provides property with key "${String(key)}". It will be overwritten with the new value.`);
          } else {
            warn$1(`App already provides property with key "${String(key)}" inherited from its parent element. It will be overwritten with the new value.`);
          }
        }
        context.provides[key] = value;
        return app;
      },
      runWithContext(fn) {
        const lastApp = currentApp;
        currentApp = app;
        try {
          return fn();
        } finally {
          currentApp = lastApp;
        }
      }
    };
    return app;
  };
}
let currentApp = null;
function provide(key, value) {
  if (!currentInstance) {
    {
      warn$1(`provide() can only be used inside setup().`);
    }
  } else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance || currentApp) {
    let provides = currentApp ? currentApp._context.provides : instance ? instance.parent == null || instance.ce ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : void 0;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
    } else {
      warn$1(`injection "${String(key)}" not found.`);
    }
  } else {
    warn$1(`inject() can only be used inside setup() or functional components.`);
  }
}
const internalObjectProto = {};
const createInternalObject = () => Object.create(internalObjectProto);
const isInternalObject = (obj) => Object.getPrototypeOf(obj) === internalObjectProto;
function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = createInternalObject();
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  {
    validateProps(rawProps || {}, props, instance);
  }
  if (isStateful) {
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function isInHmrContext(instance) {
  while (instance) {
    if (instance.type.__hmrId)
      return true;
    instance = instance.parent;
  }
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const {
    props,
    attrs,
    vnode: {
      patchFlag
    }
  } = instance;
  const rawCurrentProps = toRaw(props);
  const [options2] = instance.propsOptions;
  let hasAttrsChanged = false;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !isInHmrContext(instance) && (optimized || patchFlag > 0) && !(patchFlag & 16)
  ) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key = propsToUpdate[i];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options2) {
          if (hasOwn(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(options2, rawCurrentProps, camelizedKey, value, instance, false);
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !hasOwn(rawProps, key) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
        if (options2) {
          if (rawPrevProps && // for camelCase
          (rawPrevProps[key] !== void 0 || // for kebab-case
          rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(options2, rawCurrentProps, key, void 0, instance, true);
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance.attrs, "set", "");
  }
  {
    validateProps(rawProps || {}, props, instance);
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options2, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options2 && hasOwn(options2, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props[key] = resolvePropValue(options2, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options2, props, key, value, instance, isAbsent) {
  const opt = options2[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && !opt.skipFactory && isFunction(defaultValue)) {
        const {
          propsDefaults
        } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          const reset = setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(null, props);
          reset();
        }
      } else {
        value = defaultValue;
      }
      if (instance.ce) {
        instance.ce._setProp(key, value);
      }
    }
    if (opt[
      0
      /* shouldCast */
    ]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[
        1
        /* shouldCastTrue */
      ] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
const mixinPropsCache = /* @__PURE__ */ new WeakMap();
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache2 = asMixin ? mixinPropsCache : appContext.propsCache;
  const cached = cache2.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend(normalized, props);
      if (keys)
        needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject(comp)) {
      cache2.set(comp, EMPTY_ARR);
    }
    return EMPTY_ARR;
  }
  if (isArray(raw)) {
    for (let i = 0; i < raw.length; i++) {
      if (!isString(raw[i])) {
        warn$1(`props must be strings when using array syntax.`, raw[i]);
      }
      const normalizedKey = camelize(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    if (!isObject(raw)) {
      warn$1(`invalid props options`, raw);
    }
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? {
          type: opt
        } : extend({}, opt);
        const propType = prop.type;
        let shouldCast = false;
        let shouldCastTrue = true;
        if (isArray(propType)) {
          for (let index = 0; index < propType.length; ++index) {
            const type = propType[index];
            const typeName = isFunction(type) && type.name;
            if (typeName === "Boolean") {
              shouldCast = true;
              break;
            } else if (typeName === "String") {
              shouldCastTrue = false;
            }
          }
        } else {
          shouldCast = isFunction(propType) && propType.name === "Boolean";
        }
        prop[
          0
          /* shouldCast */
        ] = shouldCast;
        prop[
          1
          /* shouldCastTrue */
        ] = shouldCastTrue;
        if (shouldCast || hasOwn(prop, "default")) {
          needCastKeys.push(normalizedKey);
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if (isObject(comp)) {
    cache2.set(comp, res);
  }
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$" && !isReservedProp(key)) {
    return true;
  } else {
    warn$1(`Invalid prop name: "${key}" is a reserved property.`);
  }
  return false;
}
function getType(ctor) {
  if (ctor === null) {
    return "null";
  }
  if (typeof ctor === "function") {
    return ctor.name || "";
  } else if (typeof ctor === "object") {
    const name = ctor.constructor && ctor.constructor.name;
    return name || "";
  }
  return "";
}
function validateProps(rawProps, props, instance) {
  const resolvedValues = toRaw(props);
  const options2 = instance.propsOptions[0];
  const camelizePropsKey = Object.keys(rawProps).map((key) => camelize(key));
  for (const key in options2) {
    let opt = options2[key];
    if (opt == null)
      continue;
    validateProp(key, resolvedValues[key], opt, shallowReadonly(resolvedValues), !camelizePropsKey.includes(key));
  }
}
function validateProp(name, value, prop, props, isAbsent) {
  const {
    type,
    required,
    validator,
    skipCheck
  } = prop;
  if (required && isAbsent) {
    warn$1('Missing required prop: "' + name + '"');
    return;
  }
  if (value == null && !required) {
    return;
  }
  if (type != null && type !== true && !skipCheck) {
    let isValid = false;
    const types = isArray(type) ? type : [type];
    const expectedTypes = [];
    for (let i = 0; i < types.length && !isValid; i++) {
      const {
        valid,
        expectedType
      } = assertType(value, types[i]);
      expectedTypes.push(expectedType || "");
      isValid = valid;
    }
    if (!isValid) {
      warn$1(getInvalidTypeMessage(name, value, expectedTypes));
      return;
    }
  }
  if (validator && !validator(value, props)) {
    warn$1('Invalid prop: custom validator check failed for prop "' + name + '".');
  }
}
const isSimpleType = /* @__PURE__ */ makeMap("String,Number,Boolean,Function,Symbol,BigInt");
function assertType(value, type) {
  let valid;
  const expectedType = getType(type);
  if (expectedType === "null") {
    valid = value === null;
  } else if (isSimpleType(expectedType)) {
    const t = typeof value;
    valid = t === expectedType.toLowerCase();
    if (!valid && t === "object") {
      valid = value instanceof type;
    }
  } else if (expectedType === "Object") {
    valid = isObject(value);
  } else if (expectedType === "Array") {
    valid = isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid,
    expectedType
  };
}
function getInvalidTypeMessage(name, value, expectedTypes) {
  if (expectedTypes.length === 0) {
    return `Prop type [] for prop "${name}" won't match anything. Did you mean to use type Array instead?`;
  }
  let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(capitalize).join(" | ")}`;
  const expectedType = expectedTypes[0];
  const receivedType = toRawType(value);
  const expectedValue = styleValue(value, expectedType);
  const receivedValue = styleValue(value, receivedType);
  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += ` with value ${expectedValue}`;
  }
  message += `, got ${receivedType} `;
  if (isExplicable(receivedType)) {
    message += `with value ${receivedValue}.`;
  }
  return message;
}
function styleValue(value, type) {
  if (type === "String") {
    return `"${value}"`;
  } else if (type === "Number") {
    return `${Number(value)}`;
  } else {
    return `${value}`;
  }
}
function isExplicable(type) {
  const explicitTypes = ["string", "number", "boolean"];
  return explicitTypes.some((elem) => type.toLowerCase() === elem);
}
function isBoolean(...args) {
  return args.some((elem) => elem.toLowerCase() === "boolean");
}
const isInternalKey = (key) => key[0] === "_" || key === "$stable";
const normalizeSlotValue = (value) => isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
const normalizeSlot = (key, rawSlot, ctx) => {
  if (rawSlot._n) {
    return rawSlot;
  }
  const normalized = withCtx((...args) => {
    if (currentInstance && !(ctx === null && currentRenderingInstance) && !(ctx && ctx.root !== currentInstance.root)) {
      warn$1(`Slot "${key}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`);
    }
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key))
      continue;
    const value = rawSlots[key];
    if (isFunction(value)) {
      slots[key] = normalizeSlot(key, value, ctx);
    } else if (value != null) {
      {
        warn$1(`Non-function value encountered for slot "${key}". Prefer function slots for better performance.`);
      }
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance, children) => {
  if (!isKeepAlive(instance.vnode) && true) {
    warn$1(`Non-function value encountered for default slot. Prefer function slots for better performance.`);
  }
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
const assignSlots = (slots, children, optimized) => {
  for (const key in children) {
    if (optimized || !isInternalKey(key)) {
      slots[key] = children[key];
    }
  }
};
const initSlots = (instance, children, optimized) => {
  const slots = instance.slots = createInternalObject();
  if (instance.vnode.shapeFlag & 32) {
    const cacheIndexes = children.__;
    if (cacheIndexes)
      def(slots, "__", cacheIndexes, true);
    const type = children._;
    if (type) {
      assignSlots(slots, children, optimized);
      if (optimized) {
        def(slots, "_", type, true);
      }
    } else {
      normalizeObjectSlots(children, slots);
    }
  } else if (children) {
    normalizeVNodeSlots(instance, children);
  }
};
const updateSlots = (instance, children, optimized) => {
  const {
    vnode,
    slots
  } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      if (isHmrUpdating) {
        assignSlots(slots, children, optimized);
        trigger(instance, "set", "$slots");
      } else if (optimized && type === 1) {
        needDeletionCheck = false;
      } else {
        assignSlots(slots, children, optimized);
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = {
      default: 1
    };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && deletionComparisonTarget[key] == null) {
        delete slots[key];
      }
    }
  }
};
let supported;
let perf;
function startMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    perf.mark(`vue-${type}-${instance.uid}`);
  }
  {
    devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
  }
}
function endMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    const startTag = `vue-${type}-${instance.uid}`;
    const endTag = startTag + `:end`;
    perf.mark(endTag);
    perf.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
    perf.clearMarks(startTag);
    perf.clearMarks(endTag);
  }
  {
    devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
  }
}
function isSupported() {
  if (supported !== void 0) {
    return supported;
  }
  if (typeof taroWindowProvider !== "undefined" && taroWindowProvider.performance) {
    supported = true;
    perf = taroWindowProvider.performance;
  } else {
    supported = false;
  }
  return supported;
}
function initFeatureFlags() {
  const needWarn = [];
  if (needWarn.length) {
    const multi = needWarn.length > 1;
    console.warn(`Feature flag${multi ? `s` : ``} ${needWarn.join(", ")} ${multi ? `are` : `is`} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options2) {
  return baseCreateRenderer(options2);
}
function baseCreateRenderer(options2, createHydrationFns) {
  {
    initFeatureFlags();
  }
  const target = getGlobalThis();
  target.__VUE__ = true;
  {
    setDevtoolsHook$1(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
  }
  const {
    insert: hostInsert,
    remove: hostRemove,
    patchProp: hostPatchProp,
    createElement: hostCreateElement,
    createText: hostCreateText,
    createComment: hostCreateComment,
    setText: hostSetText,
    setElementText: hostSetElementText,
    parentNode: hostParentNode,
    nextSibling: hostNextSibling,
    setScopeId: hostSetScopeId = NOOP,
    insertStaticContent: hostInsertStaticContent
  } = options2;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace = void 0, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const {
      type,
      ref: ref2,
      shapeFlag
    } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, namespace);
        } else {
          patchStaticNode(n1, n2, container, namespace);
        }
        break;
      case Fragment:
        processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        break;
      default:
        if (shapeFlag & 1) {
          processElement(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        } else if (shapeFlag & 6) {
          processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        } else if (shapeFlag & 64) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
        } else if (shapeFlag & 128) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
        } else {
          warn$1("Invalid VNode type:", type, `(${typeof type})`);
        }
    }
    if (ref2 != null && parentComponent) {
      setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    } else if (ref2 == null && n1 && n1.ref != null) {
      setRef(n1.ref, null, parentSuspense, n1, true);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, namespace) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, namespace, n2.el, n2.anchor);
  };
  const patchStaticNode = (n1, n2, container, namespace) => {
    if (n2.children !== n1.children) {
      const anchor = hostNextSibling(n1.anchor);
      removeStaticNode(n1);
      [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, namespace);
    } else {
      n2.el = n1.el;
      n2.anchor = n1.anchor;
    }
  };
  const moveStaticNode = ({
    el,
    anchor
  }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({
    el,
    anchor
  }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    if (n2.type === "svg") {
      namespace = "svg";
    } else if (n2.type === "math") {
      namespace = "mathml";
    }
    if (n1 == null) {
      mountElement(n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
    } else {
      patchElement(n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const {
      props,
      shapeFlag,
      transition,
      dirs
    } = vnode;
    el = vnode.el = hostCreateElement(vnode.type, namespace, props && props.is, props);
    if (shapeFlag & 8) {
      hostSetElementText(el, vnode.children);
    } else if (shapeFlag & 16) {
      mountChildren(vnode.children, el, null, parentComponent, parentSuspense, resolveChildrenNamespace(vnode, namespace), slotScopeIds, optimized);
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "created");
    }
    setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    if (props) {
      for (const key in props) {
        if (key !== "value" && !isReservedProp(key)) {
          hostPatchProp(el, key, null, props[key], namespace, parentComponent);
        }
      }
      if ("value" in props) {
        hostPatchProp(el, "value", null, props.value, namespace);
      }
      if (vnodeHook = props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
    }
    {
      def(el, "__vnode", vnode, true);
      def(el, "__vueParentComponent", parentComponent, true);
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = needTransition(parentSuspense, transition);
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (subTree.patchFlag > 0 && subTree.patchFlag & 2048) {
        subTree = filterSingleRoot(subTree.children) || subTree;
      }
      if (vnode === subTree || isSuspense(subTree.type) && (subTree.ssContent === vnode || subTree.ssFallback === vnode)) {
        const parentVNode = parentComponent.vnode;
        setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0) => {
    for (let i = start; i < children.length; i++) {
      const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(null, child, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    {
      el.__vnode = n2;
    }
    let {
      patchFlag,
      dynamicChildren,
      dirs
    } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ;
    const newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    if (isHmrUpdating) {
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }
    if (oldProps.innerHTML && newProps.innerHTML == null || oldProps.textContent && newProps.textContent == null) {
      hostSetElementText(el, "");
    }
    if (dynamicChildren) {
      patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, resolveChildrenNamespace(n2, namespace), slotScopeIds);
      {
        traverseStaticChildren(n1, n2);
      }
    } else if (!optimized) {
      patchChildren(n1, n2, el, null, parentComponent, parentSuspense, resolveChildrenNamespace(n2, namespace), slotScopeIds, false);
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(el, oldProps, newProps, parentComponent, namespace);
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, namespace);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i = 0; i < propsToUpdate.length; i++) {
            const key = propsToUpdate[i];
            const prev = oldProps[key];
            const next = newProps[key];
            if (next !== prev || key === "value") {
              hostPatchProp(el, key, prev, next, namespace, parentComponent);
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(el, oldProps, newProps, parentComponent, namespace);
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds) => {
    for (let i = 0; i < newChildren.length; i++) {
      const oldVNode = oldChildren[i];
      const newVNode = newChildren[i];
      const container = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
        oldVNode.shapeFlag & (6 | 64 | 128)) ? hostParentNode(oldVNode.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          fallbackContainer
        )
      );
      patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, true);
    }
  };
  const patchProps = (el, oldProps, newProps, parentComponent, namespace) => {
    if (oldProps !== newProps) {
      if (oldProps !== EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!isReservedProp(key) && !(key in newProps)) {
            hostPatchProp(el, key, oldProps[key], null, namespace, parentComponent);
          }
        }
      }
      for (const key in newProps) {
        if (isReservedProp(key))
          continue;
        const next = newProps[key];
        const prev = oldProps[key];
        if (next !== prev && key !== "value") {
          hostPatchProp(el, key, prev, next, namespace, parentComponent);
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let {
      patchFlag,
      dynamicChildren,
      slotScopeIds: fragmentSlotScopeIds
    } = n2;
    if (
      // #5523 dev root fragment may inherit directives
      isHmrUpdating || patchFlag & 2048
    ) {
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(
        // #10007
        // such fragment like `<></>` will be compiled into
        // a fragment which doesn't have a children.
        // In this case fallback to an empty array
        n2.children || [],
        container,
        fragmentEndAnchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      n1.dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, namespace, slotScopeIds);
        {
          traverseStaticChildren(n1, n2);
        }
      } else {
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(n2, container, anchor, namespace, optimized);
      } else {
        mountComponent(n2, container, anchor, parentComponent, parentSuspense, namespace, optimized);
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) => {
    const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
    if (instance.type.__hmrId) {
      registerHMR(instance);
    }
    {
      pushWarningContext(initialVNode);
      startMeasure(instance, `mount`);
    }
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      {
        startMeasure(instance, `init`);
      }
      setupComponent(instance, false, optimized);
      {
        endMeasure(instance, `init`);
      }
    }
    if (isHmrUpdating)
      initialVNode.el = null;
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect, optimized);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }
    } else {
      setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, namespace, optimized);
    }
    {
      popWarningContext();
      endMeasure(instance, `mount`);
    }
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        {
          pushWarningContext(n2);
        }
        updateComponentPreRender(instance, n2, optimized);
        {
          popWarningContext();
        }
        return;
      } else {
        instance.next = n2;
        instance.update();
      }
    } else {
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const {
          el,
          props
        } = initialVNode;
        const {
          bm,
          m,
          parent,
          root,
          type
        } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          invokeArrayFns(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance, true);
        if (el && hydrateNode) {
          const hydrateSubTree = () => {
            {
              startMeasure(instance, `render`);
            }
            instance.subTree = renderComponentRoot(instance);
            {
              endMeasure(instance, `render`);
            }
            {
              startMeasure(instance, `hydrate`);
            }
            hydrateNode(el, instance.subTree, instance, parentSuspense, null);
            {
              endMeasure(instance, `hydrate`);
            }
          };
          if (isAsyncWrapperVNode && type.__asyncHydrate) {
            type.__asyncHydrate(el, instance, hydrateSubTree);
          } else {
            hydrateSubTree();
          }
        } else {
          if (root.ce && // @ts-expect-error _def is private
          root.ce._def.shadowRoot !== false) {
            root.ce._injectChildStyle(type);
          }
          {
            startMeasure(instance, `render`);
          }
          const subTree = instance.subTree = renderComponentRoot(instance);
          {
            endMeasure(instance, `render`);
          }
          {
            startMeasure(instance, `patch`);
          }
          patch(null, subTree, container, anchor, instance, parentSuspense, namespace);
          {
            endMeasure(instance, `patch`);
          }
          initialVNode.el = subTree.el;
        }
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
        }
        if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        {
          devtoolsComponentAdded(instance);
        }
        initialVNode = container = anchor = null;
      } else {
        let {
          next,
          bu,
          u,
          parent,
          vnode
        } = instance;
        {
          const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
          if (nonHydratedAsyncRoot) {
            if (next) {
              next.el = vnode.el;
              updateComponentPreRender(instance, next, optimized);
            }
            nonHydratedAsyncRoot.asyncDep.then(() => {
              if (!instance.isUnmounted) {
                componentUpdateFn();
              }
            });
            return;
          }
        }
        let originNext = next;
        let vnodeHook;
        {
          pushWarningContext(next || instance.vnode);
        }
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          invokeArrayFns(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        toggleRecurse(instance, true);
        {
          startMeasure(instance, `render`);
        }
        const nextTree = renderComponentRoot(instance);
        {
          endMeasure(instance, `render`);
        }
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        {
          startMeasure(instance, `patch`);
        }
        patch(
          prevTree,
          nextTree,
          // parent may have changed if it's in a teleport
          hostParentNode(prevTree.el),
          // anchor may have changed if it's in a fragment
          getNextHostNode(prevTree),
          instance,
          parentSuspense,
          namespace
        );
        {
          endMeasure(instance, `patch`);
        }
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
        }
        {
          devtoolsComponentUpdated(instance);
        }
        {
          popWarningContext();
        }
      }
    };
    instance.scope.on();
    const effect = instance.effect = new ReactiveEffect(componentUpdateFn);
    instance.scope.off();
    const update = instance.update = effect.run.bind(effect);
    const job = instance.job = effect.runIfDirty.bind(effect);
    job.i = instance;
    job.id = instance.uid;
    effect.scheduler = () => queueJob(job);
    toggleRecurse(instance, true);
    {
      effect.onTrack = instance.rtc ? (e) => invokeArrayFns(instance.rtc, e) : void 0;
      effect.onTrigger = instance.rtg ? (e) => invokeArrayFns(instance.rtg, e) : void 0;
    }
    update();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    pauseTracking();
    flushPreFlushCbs(instance);
    resetTracking();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const {
      patchFlag,
      shapeFlag
    } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i;
    for (i = 0; i < commonLength; i++) {
      const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
    }
    if (oldLength > newLength) {
      unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
    } else {
      mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, commonLength);
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    let i = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i <= e1 && i <= e2) {
      const n1 = c1[i];
      const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
      } else {
        break;
      }
      i++;
    }
    while (i <= e1 && i <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i > e1) {
      if (i <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i <= e2) {
          patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
          i++;
        }
      }
    } else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } else {
      const s1 = i;
      const s2 = i;
      const keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i = s2; i <= e2; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (nextChild.key != null) {
          if (keyToNewIndexMap.has(nextChild.key)) {
            warn$1(`Duplicate keys found during update:`, JSON.stringify(nextChild.key), `Make sure keys are unique.`);
          }
          keyToNewIndexMap.set(nextChild.key, i);
        }
      }
      let j;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i = 0; i < toBePatched; i++)
        newIndexToOldIndexMap[i] = 0;
      for (i = s1; i <= e1; i++) {
        const prevChild = c1[i];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      for (i = toBePatched - 1; i >= 0; i--) {
        const nextIndex = s2 + i;
        const nextChild = c2[nextIndex];
        const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
        if (newIndexToOldIndexMap[i] === 0) {
          patch(null, nextChild, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        } else if (moved) {
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(nextChild, container, anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const {
      el,
      type,
      transition,
      children,
      shapeFlag
    } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition2) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const {
          leave,
          delayLeave,
          afterLeave
        } = transition;
        const remove22 = () => {
          if (vnode.ctx.isUnmounted) {
            hostRemove(el);
          } else {
            hostInsert(el, container, anchor);
          }
        };
        const performLeave = () => {
          leave(el, () => {
            remove22();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove22, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const {
      type,
      props,
      ref: ref2,
      children,
      dynamicChildren,
      shapeFlag,
      patchFlag,
      dirs,
      cacheIndex
    } = vnode;
    if (patchFlag === -2) {
      optimized = false;
    }
    if (ref2 != null) {
      pauseTracking();
      setRef(ref2, null, parentSuspense, vnode, true);
      resetTracking();
    }
    if (cacheIndex != null) {
      parentComponent.renderCache[cacheIndex] = void 0;
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(vnode, parentComponent, parentSuspense, internals, doRemove);
      } else if (dynamicChildren && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !dynamicChildren.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
      } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove2 = (vnode) => {
    const {
      type,
      el,
      anchor,
      transition
    } = vnode;
    if (type === Fragment) {
      if (vnode.patchFlag > 0 && vnode.patchFlag & 2048 && transition && !transition.persisted) {
        vnode.children.forEach((child) => {
          if (child.type === Comment) {
            hostRemove(child.el);
          } else {
            remove2(child);
          }
        });
      } else {
        removeFragment(el, anchor);
      }
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const {
        leave,
        delayLeave
      } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    if (instance.type.__hmrId) {
      unregisterHMR(instance);
    }
    const {
      bum,
      scope,
      job,
      subTree,
      um,
      m,
      a,
      parent,
      slots: {
        __: slotCacheKeys
      }
    } = instance;
    invalidateMount(m);
    invalidateMount(a);
    if (bum) {
      invokeArrayFns(bum);
    }
    if (parent && isArray(slotCacheKeys)) {
      slotCacheKeys.forEach((v) => {
        parent.renderCache[v] = void 0;
      });
    }
    scope.stop();
    if (job) {
      job.flags |= 8;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;
      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }
    {
      devtoolsComponentRemoved(instance);
    }
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    const el = hostNextSibling(vnode.anchor || vnode.el);
    const teleportEnd = el && el[TeleportEndKey];
    return teleportEnd ? hostNextSibling(teleportEnd) : el;
  };
  let isFlushing = false;
  const render = (vnode, container, namespace) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(container._vnode || null, vnode, container, null, null, null, namespace);
    }
    container._vnode = vnode;
    if (!isFlushing) {
      isFlushing = true;
      flushPreFlushCbs();
      flushPostFlushCbs();
      isFlushing = false;
    }
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options2
  };
  let hydrate2;
  let hydrateNode;
  if (createHydrationFns) {
    [hydrate2, hydrateNode] = createHydrationFns(internals);
  }
  return {
    render,
    hydrate: hydrate2,
    createApp: createAppAPI(render, hydrate2)
  };
}
function resolveChildrenNamespace({
  type,
  props
}, currentNamespace) {
  return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
}
function toggleRecurse({
  effect,
  job
}, allowed) {
  if (allowed) {
    effect.flags |= 32;
    job.flags |= 4;
  } else {
    effect.flags &= -33;
    job.flags &= -5;
  }
}
function needTransition(parentSuspense, transition) {
  return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if (isArray(ch1) && isArray(ch2)) {
    for (let i = 0; i < ch1.length; i++) {
      const c1 = ch1[i];
      let c2 = ch2[i];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }
        if (!shallow && c2.patchFlag !== -2)
          traverseStaticChildren(c1, c2);
      }
      if (c2.type === Text) {
        c2.el = c1.el;
      }
      if (c2.type === Comment && !c2.el) {
        c2.el = c1.el;
      }
      {
        c2.el && (c2.el.__vnode = c2);
      }
    }
  }
}
function getSequence(arr) {
  const p2 = arr.slice();
  const result = [0];
  let i, j, u, v, c;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p2[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = u + v >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p2[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p2[v];
  }
  return result;
}
function locateNonHydratedAsyncRoot(instance) {
  const subComponent = instance.subTree.component;
  if (subComponent) {
    if (subComponent.asyncDep && !subComponent.asyncResolved) {
      return subComponent;
    } else {
      return locateNonHydratedAsyncRoot(subComponent);
    }
  }
}
function invalidateMount(hooks2) {
  if (hooks2) {
    for (let i = 0; i < hooks2.length; i++)
      hooks2[i].flags |= 8;
  }
}
const ssrContextKey = Symbol.for("v-scx");
const useSSRContext = () => {
  {
    const ctx = inject(ssrContextKey);
    if (!ctx) {
      warn$1(`Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build.`);
    }
    return ctx;
  }
};
function watch(source, cb, options2) {
  if (!isFunction(cb)) {
    warn$1(`\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`);
  }
  return doWatch(source, cb, options2);
}
function doWatch(source, cb, options2 = EMPTY_OBJ) {
  const {
    immediate,
    deep,
    flush,
    once
  } = options2;
  if (!cb) {
    if (immediate !== void 0) {
      warn$1(`watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`);
    }
    if (deep !== void 0) {
      warn$1(`watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`);
    }
    if (once !== void 0) {
      warn$1(`watch() "once" option is only respected when using the watch(source, callback, options?) signature.`);
    }
  }
  const baseWatchOptions = extend({}, options2);
  baseWatchOptions.onWarn = warn$1;
  const runsImmediately = cb && immediate || !cb && flush !== "post";
  let ssrCleanup;
  if (isInSSRComponentSetup) {
    if (flush === "sync") {
      const ctx = useSSRContext();
      ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
    } else if (!runsImmediately) {
      const watchStopHandle = () => {
      };
      watchStopHandle.stop = NOOP;
      watchStopHandle.resume = NOOP;
      watchStopHandle.pause = NOOP;
      return watchStopHandle;
    }
  }
  const instance = currentInstance;
  baseWatchOptions.call = (fn, type, args) => callWithAsyncErrorHandling(fn, instance, type, args);
  let isPre = false;
  if (flush === "post") {
    baseWatchOptions.scheduler = (job) => {
      queuePostRenderEffect(job, instance && instance.suspense);
    };
  } else if (flush !== "sync") {
    isPre = true;
    baseWatchOptions.scheduler = (job, isFirstRun) => {
      if (isFirstRun) {
        job();
      } else {
        queueJob(job);
      }
    };
  }
  baseWatchOptions.augmentJob = (job) => {
    if (cb) {
      job.flags |= 4;
    }
    if (isPre) {
      job.flags |= 2;
      if (instance) {
        job.id = instance.uid;
        job.i = instance;
      }
    }
  };
  const watchHandle = watch$1(source, cb, baseWatchOptions);
  if (isInSSRComponentSetup) {
    if (ssrCleanup) {
      ssrCleanup.push(watchHandle);
    } else if (runsImmediately) {
      watchHandle();
    }
  }
  return watchHandle;
}
function instanceWatch(source, value, options2) {
  const publicThis = this.proxy;
  const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options2 = value;
  }
  const reset = setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options2);
  reset();
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
const getModelModifiers = (props, modelName) => {
  return modelName === "modelValue" || modelName === "model-value" ? props.modelModifiers : props[`${modelName}Modifiers`] || props[`${camelize(modelName)}Modifiers`] || props[`${hyphenate(modelName)}Modifiers`];
};
function emit(instance, event, ...rawArgs) {
  if (instance.isUnmounted)
    return;
  const props = instance.vnode.props || EMPTY_OBJ;
  {
    const {
      emitsOptions,
      propsOptions: [propsOptions]
    } = instance;
    if (emitsOptions) {
      if (!(event in emitsOptions) && true) {
        if (!propsOptions || !(toHandlerKey(camelize(event)) in propsOptions)) {
          warn$1(`Component emitted event "${event}" but it is neither declared in the emits option nor as an "${toHandlerKey(camelize(event))}" prop.`);
        }
      } else {
        const validator = emitsOptions[event];
        if (isFunction(validator)) {
          const isValid = validator(...rawArgs);
          if (!isValid) {
            warn$1(`Invalid event arguments: event validation failed for event "${event}".`);
          }
        }
      }
    }
  }
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modifiers = isModelListener2 && getModelModifiers(props, event.slice(7));
  if (modifiers) {
    if (modifiers.trim) {
      args = rawArgs.map((a) => isString(a) ? a.trim() : a);
    }
    if (modifiers.number) {
      args = rawArgs.map(looseToNumber);
    }
  }
  {
    devtoolsComponentEmit(instance, event, args);
  }
  {
    const lowerCaseEvent = event.toLowerCase();
    if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) {
      warn$1(`Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(instance, instance.type)} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${hyphenate(event)}" instead of "${event}".`);
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
  props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(handler, instance, 6, args);
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(onceHandler, instance, 6, args);
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache2 = appContext.emitsCache;
  const cached = cache2.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject(comp)) {
      cache2.set(comp, null);
    }
    return null;
  }
  if (isArray(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend(normalized, raw);
  }
  if (isObject(comp)) {
    cache2.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options2, key) {
  if (!options2 || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn(options2, key[0].toLowerCase() + key.slice(1)) || hasOwn(options2, hyphenate(key)) || hasOwn(options2, key);
}
let accessedAttrs = false;
function markAttrsAccessed() {
  accessedAttrs = true;
}
function renderComponentRoot(instance) {
  const {
    type: Component,
    vnode,
    proxy,
    withProxy,
    propsOptions: [propsOptions],
    slots,
    attrs,
    emit: emit2,
    render,
    renderCache,
    props,
    data,
    setupState,
    ctx,
    inheritAttrs
  } = instance;
  const prev = setCurrentRenderingInstance(instance);
  let result;
  let fallthroughAttrs;
  {
    accessedAttrs = false;
  }
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      const thisProxy = setupState.__isScriptSetup ? new Proxy(proxyToUse, {
        get(target, key, receiver) {
          warn$1(`Property '${String(key)}' was accessed via 'this'. Avoid using 'this' in templates.`);
          return Reflect.get(target, key, receiver);
        }
      }) : proxyToUse;
      result = normalizeVNode(render.call(thisProxy, proxyToUse, renderCache, true ? shallowReadonly(props) : props, setupState, data, ctx));
      fallthroughAttrs = attrs;
    } else {
      const render2 = Component;
      if (attrs === props) {
        markAttrsAccessed();
      }
      result = normalizeVNode(render2.length > 1 ? render2(true ? shallowReadonly(props) : props, true ? {
        get attrs() {
          markAttrsAccessed();
          return shallowReadonly(attrs);
        },
        slots,
        emit: emit2
      } : {
        attrs,
        slots,
        emit: emit2
      }) : render2(true ? shallowReadonly(props) : props, null));
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1);
    result = createVNode(Comment);
  }
  let root = result;
  let setRoot = void 0;
  if (result.patchFlag > 0 && result.patchFlag & 2048) {
    [root, setRoot] = getChildRoot(result);
  }
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs);
    const {
      shapeFlag
    } = root;
    if (keys.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys.some(isModelListener)) {
          fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
        }
        root = cloneVNode(root, fallthroughAttrs, false, true);
      } else if (!accessedAttrs && root.type !== Comment) {
        const allAttrs = Object.keys(attrs);
        const eventAttrs = [];
        const extraAttrs = [];
        for (let i = 0, l = allAttrs.length; i < l; i++) {
          const key = allAttrs[i];
          if (isOn(key)) {
            if (!isModelListener(key)) {
              eventAttrs.push(key[2].toLowerCase() + key.slice(3));
            }
          } else {
            extraAttrs.push(key);
          }
        }
        if (extraAttrs.length) {
          warn$1(`Extraneous non-props attributes (${extraAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`);
        }
        if (eventAttrs.length) {
          warn$1(`Extraneous non-emits event listeners (${eventAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
        }
      }
    }
  }
  if (vnode.dirs) {
    if (!isElementRoot(root)) {
      warn$1(`Runtime directive used on component with non-element root node. The directives will not function as intended.`);
    }
    root = cloneVNode(root, null, false, true);
    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    if (!isElementRoot(root)) {
      warn$1(`Component inside <Transition> renders non-element root node that cannot be animated.`);
    }
    setTransitionHooks(root, vnode.transition);
  }
  if (setRoot) {
    setRoot(root);
  } else {
    result = root;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
const getChildRoot = (vnode) => {
  const rawChildren = vnode.children;
  const dynamicChildren = vnode.dynamicChildren;
  const childRoot = filterSingleRoot(rawChildren, false);
  if (!childRoot) {
    return [vnode, void 0];
  } else if (childRoot.patchFlag > 0 && childRoot.patchFlag & 2048) {
    return getChildRoot(childRoot);
  }
  const index = rawChildren.indexOf(childRoot);
  const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
  const setRoot = (updatedRoot) => {
    rawChildren[index] = updatedRoot;
    if (dynamicChildren) {
      if (dynamicIndex > -1) {
        dynamicChildren[dynamicIndex] = updatedRoot;
      } else if (updatedRoot.patchFlag > 0) {
        vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
      }
    }
  };
  return [normalizeVNode(childRoot), setRoot];
};
function filterSingleRoot(children, recurse = true) {
  let singleRoot;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (isVNode(child)) {
      if (child.type !== Comment || child.children === "v-if") {
        if (singleRoot) {
          return;
        } else {
          singleRoot = child;
          if (recurse && singleRoot.patchFlag > 0 && singleRoot.patchFlag & 2048) {
            return filterSingleRoot(singleRoot.children);
          }
        }
      }
    } else {
      return;
    }
  }
  return singleRoot;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
const filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs) {
    if (!isModelListener(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
const isElementRoot = (vnode) => {
  return vnode.shapeFlag & (6 | 1) || vnode.type === Comment;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const {
    props: prevProps,
    children: prevChildren,
    component
  } = prevVNode;
  const {
    props: nextProps,
    children: nextChildren,
    patchFlag
  } = nextVNode;
  const emits = component.emitsOptions;
  if ((prevChildren || nextChildren) && isHmrUpdating) {
    return true;
  }
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i = 0; i < dynamicProps.length; i++) {
        const key = dynamicProps[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({
  vnode,
  parent
}, el) {
  while (parent) {
    const root = parent.subTree;
    if (root.suspense && root.suspense.activeBranch === vnode) {
      root.el = vnode.el;
    }
    if (root === vnode) {
      (vnode = parent.vnode).el = el;
      parent = parent.parent;
    } else {
      break;
    }
  }
}
const isSuspense = (type) => type.__isSuspense;
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
const Fragment = Symbol.for("v-fgt");
const Text = Symbol.for("v-txt");
const Comment = Symbol.for("v-cmt");
const Static = Symbol.for("v-stc");
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value, inVOnce = false) {
  isBlockTreeEnabled += value;
  if (value < 0 && currentBlock && inVOnce) {
    currentBlock.hasOnce = true;
  }
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  if (n2.shapeFlag & 6 && n1.component) {
    const dirtyInstances = hmrDirtyComponents.get(n2.type);
    if (dirtyInstances && dirtyInstances.has(n1.component)) {
      n1.shapeFlag &= -257;
      n2.shapeFlag &= -513;
      return false;
    }
  }
  return n1.type === n2.type && n1.key === n2.key;
}
const createVNodeWithArgsTransform = (...args) => {
  return _createVNode(...args);
};
const normalizeKey = ({
  key
}) => key != null ? key : null;
const normalizeRef = ({
  ref: ref2,
  ref_key,
  ref_for
}) => {
  if (typeof ref2 === "number") {
    ref2 = "" + ref2;
  }
  return ref2 != null ? isString(ref2) || isRef(ref2) || isFunction(ref2) ? {
    i: currentRenderingInstance,
    r: ref2,
    k: ref_key,
    f: !!ref_for
  } : ref2 : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null,
    ctx: currentRenderingInstance
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString(children) ? 8 : 16;
  }
  if (vnode.key !== vnode.key) {
    warn$1(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
  }
  if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
  !isBlockNode && // has current parent block
  currentBlock && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode = createVNodeWithArgsTransform;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    if (!type) {
      warn$1(`Invalid vnode type when creating vnode: ${type}.`);
    }
    type = Comment;
  }
  if (isVNode(type)) {
    const cloned = cloneVNode(
      type,
      props,
      true
      /* mergeRef: true */
    );
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag = -2;
    return cloned;
  }
  if (isClassComponent$1(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let {
      class: klass,
      style: style2
    } = props;
    if (klass && !isString(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject(style2)) {
      if (isProxy(style2) && !isArray(style2)) {
        style2 = extend({}, style2);
      }
      props.style = normalizeStyle(style2);
    }
  }
  const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
  if (shapeFlag & 4 && isProxy(type)) {
    type = toRaw(type);
    warn$1(`Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`, `
Component that was made reactive: `, type);
  }
  return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
  if (!props)
    return null;
  return isProxy(props) || isInternalObject(props) ? extend({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
  const {
    props,
    ref: ref2,
    patchFlag,
    children,
    transition
  } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      mergeRef && ref2 ? isArray(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps)
    ) : ref2,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children: patchFlag === -1 && isArray(children) ? children.map(deepCloneVNode) : children,
    target: vnode.target,
    targetStart: vnode.targetStart,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor,
    ctx: vnode.ctx,
    ce: vnode.ce
  };
  if (transition && cloneTransition) {
    setTransitionHooks(cloned, transition.clone(cloned));
  }
  return cloned;
}
function deepCloneVNode(vnode) {
  const cloned = cloneVNode(vnode);
  if (isArray(vnode.children)) {
    cloned.children = vnode.children.map(deepCloneVNode);
  }
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if (isArray(child)) {
    return createVNode(
      Fragment,
      null,
      // #3666, avoid reference pollution when reusing vnode
      child.slice()
    );
  } else if (isVNode(child)) {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const {
    shapeFlag
  } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !isInternalObject(children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction(children)) {
    children = {
      default: children,
      _ctx: currentRenderingInstance
    };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i = 0; i < args.length; i++) {
    const toMerge = args[i];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [vnode, prevVNode]);
}
const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new EffectScope(
      true
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    ids: parent ? parent.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: EMPTY_OBJ,
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    // suspense related
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  {
    instance.ctx = createDevRenderContext(instance);
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
let internalSetCurrentInstance;
let setInSSRSetupState;
{
  const g = getGlobalThis();
  const registerGlobalSetter = (key, setter) => {
    let setters;
    if (!(setters = g[key]))
      setters = g[key] = [];
    setters.push(setter);
    return (v) => {
      if (setters.length > 1)
        setters.forEach((set) => set(v));
      else
        setters[0](v);
    };
  };
  internalSetCurrentInstance = registerGlobalSetter(`__VUE_INSTANCE_SETTERS__`, (v) => currentInstance = v);
  setInSSRSetupState = registerGlobalSetter(`__VUE_SSR_SETTERS__`, (v) => isInSSRComponentSetup = v);
}
const setCurrentInstance = (instance) => {
  const prev = currentInstance;
  internalSetCurrentInstance(instance);
  instance.scope.on();
  return () => {
    instance.scope.off();
    internalSetCurrentInstance(prev);
  };
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  internalSetCurrentInstance(null);
};
const isBuiltInTag = /* @__PURE__ */ makeMap("slot,component");
function validateComponentName(name, {
  isNativeTag
}) {
  if (isBuiltInTag(name) || isNativeTag(name)) {
    warn$1("Do not use built-in or reserved HTML elements as component id: " + name);
  }
}
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false, optimized = false) {
  isSSR && setInSSRSetupState(isSSR);
  const {
    props,
    children
  } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children, optimized || isSSR);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isSSR && setInSSRSetupState(false);
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  var _a2;
  const Component = instance.type;
  {
    if (Component.name) {
      validateComponentName(Component.name, instance.appContext.config);
    }
    if (Component.components) {
      const names = Object.keys(Component.components);
      for (let i = 0; i < names.length; i++) {
        validateComponentName(names[i], instance.appContext.config);
      }
    }
    if (Component.directives) {
      const names = Object.keys(Component.directives);
      for (let i = 0; i < names.length; i++) {
        validateDirectiveName(names[i]);
      }
    }
    if (Component.compilerOptions && isRuntimeOnly()) {
      warn$1(`"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`);
    }
  }
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
  {
    exposePropsOnRenderContext(instance);
  }
  const {
    setup
  } = Component;
  if (setup) {
    pauseTracking();
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    const reset = setCurrentInstance(instance);
    const setupResult = callWithErrorHandling(setup, instance, 0, [shallowReadonly(instance.props), setupContext]);
    const isAsyncSetup = isPromise(setupResult);
    resetTracking();
    reset();
    if ((isAsyncSetup || instance.sp) && !isAsyncWrapper(instance)) {
      markAsyncBoundary(instance);
    }
    if (isAsyncSetup) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch((e) => {
          handleError(e, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
        if (!instance.suspense) {
          const name = (_a2 = Component.name) != null ? _a2 : "Anonymous";
          warn$1(`Component <${name}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
        }
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if (isObject(setupResult)) {
    if (isVNode(setupResult)) {
      warn$1(`setup() should not return VNodes directly - return a render function instead.`);
    }
    {
      instance.devtoolsRawSetupState = setupResult;
    }
    instance.setupState = proxyRefs(setupResult);
    {
      exposeSetupStateOnRenderContext(instance);
    }
  } else if (setupResult !== void 0) {
    warn$1(`setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`);
  }
  finishComponentSetup(instance, isSSR);
}
let compile;
const isRuntimeOnly = () => !compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    if (!isSSR && compile && !Component.render) {
      const template = Component.template || resolveMergedOptions(instance).template;
      if (template) {
        {
          startMeasure(instance, `compile`);
        }
        const {
          isCustomElement,
          compilerOptions
        } = instance.appContext.config;
        const {
          delimiters,
          compilerOptions: componentCompilerOptions
        } = Component;
        const finalCompilerOptions = extend(extend({
          isCustomElement,
          delimiters
        }, compilerOptions), componentCompilerOptions);
        Component.render = compile(template, finalCompilerOptions);
        {
          endMeasure(instance, `compile`);
        }
      }
    }
    instance.render = Component.render || NOOP;
  }
  {
    const reset = setCurrentInstance(instance);
    pauseTracking();
    try {
      applyOptions(instance);
    } finally {
      resetTracking();
      reset();
    }
  }
  if (!Component.render && instance.render === NOOP && !isSSR) {
    if (Component.template) {
      warn$1(`Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`);
    } else {
      warn$1(`Component is missing template or render function: `, Component);
    }
  }
}
const attrsProxyHandlers = {
  get(target, key) {
    markAttrsAccessed();
    track(target, "get", "");
    return target[key];
  },
  set() {
    warn$1(`setupContext.attrs is readonly.`);
    return false;
  },
  deleteProperty() {
    warn$1(`setupContext.attrs is readonly.`);
    return false;
  }
};
function getSlotsProxy(instance) {
  return new Proxy(instance.slots, {
    get(target, key) {
      track(instance, "get", "$slots");
      return target[key];
    }
  });
}
function createSetupContext(instance) {
  const expose = (exposed) => {
    {
      if (instance.exposed) {
        warn$1(`expose() should be called only once per setup().`);
      }
      if (exposed != null) {
        let exposedType = typeof exposed;
        if (exposedType === "object") {
          if (isArray(exposed)) {
            exposedType = "array";
          } else if (isRef(exposed)) {
            exposedType = "ref";
          }
        }
        if (exposedType !== "object") {
          warn$1(`expose() should be passed a plain object, received ${exposedType}.`);
        }
      }
    }
    instance.exposed = exposed || {};
  };
  {
    let attrsProxy;
    let slotsProxy;
    return Object.freeze({
      get attrs() {
        return attrsProxy || (attrsProxy = new Proxy(instance.attrs, attrsProxyHandlers));
      },
      get slots() {
        return slotsProxy || (slotsProxy = getSlotsProxy(instance));
      },
      get emit() {
        return (event, ...args) => instance.emit(event, ...args);
      },
      expose
    });
  }
}
function getComponentPublicInstance(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      },
      has(target, key) {
        return key in target || key in publicPropertiesMap;
      }
    }));
  } else {
    return instance.proxy;
  }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
  return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function formatComponentName(instance, Component, isRoot = false) {
  let name = getComponentName(Component);
  if (!name && Component.__file) {
    const match = Component.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance && instance.parent) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };
    name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent$1(value) {
  return isFunction(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions) => {
  const c = computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
  {
    const i = getCurrentInstance();
    if (i && i.appContext.config.warnRecursiveComputed) {
      c._warnRecursive = true;
    }
  }
  return c;
};
function h(type, propsOrChildren, children) {
  const l = arguments.length;
  if (l === 2) {
    if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      }
      return createVNode(type, propsOrChildren);
    } else {
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }
    return createVNode(type, propsOrChildren, children);
  }
}
function initCustomFormatter() {
  if (typeof taroWindowProvider === "undefined") {
    return;
  }
  const vueStyle = {
    style: "color:#3ba776"
  };
  const numberStyle = {
    style: "color:#1677ff"
  };
  const stringStyle = {
    style: "color:#f5222d"
  };
  const keywordStyle = {
    style: "color:#eb2f96"
  };
  const formatter = {
    __vue_custom_formatter: true,
    header(obj) {
      if (!isObject(obj)) {
        return null;
      }
      if (obj.__isVue) {
        return ["div", vueStyle, `VueInstance`];
      } else if (isRef(obj)) {
        pauseTracking();
        const value = obj.value;
        resetTracking();
        return ["div", {}, ["span", vueStyle, genRefFlag(obj)], "<", formatValue(value), `>`];
      } else if (isReactive(obj)) {
        return ["div", {}, ["span", vueStyle, isShallow(obj) ? "ShallowReactive" : "Reactive"], "<", formatValue(obj), `>${isReadonly(obj) ? ` (readonly)` : ``}`];
      } else if (isReadonly(obj)) {
        return ["div", {}, ["span", vueStyle, isShallow(obj) ? "ShallowReadonly" : "Readonly"], "<", formatValue(obj), ">"];
      }
      return null;
    },
    hasBody(obj) {
      return obj && obj.__isVue;
    },
    body(obj) {
      if (obj && obj.__isVue) {
        return ["div", {}, ...formatInstance(obj.$)];
      }
    }
  };
  function formatInstance(instance) {
    const blocks = [];
    if (instance.type.props && instance.props) {
      blocks.push(createInstanceBlock("props", toRaw(instance.props)));
    }
    if (instance.setupState !== EMPTY_OBJ) {
      blocks.push(createInstanceBlock("setup", instance.setupState));
    }
    if (instance.data !== EMPTY_OBJ) {
      blocks.push(createInstanceBlock("data", toRaw(instance.data)));
    }
    const computed2 = extractKeys(instance, "computed");
    if (computed2) {
      blocks.push(createInstanceBlock("computed", computed2));
    }
    const injected = extractKeys(instance, "inject");
    if (injected) {
      blocks.push(createInstanceBlock("injected", injected));
    }
    blocks.push(["div", {}, ["span", {
      style: keywordStyle.style + ";opacity:0.66"
    }, "$ (internal): "], ["object", {
      object: instance
    }]]);
    return blocks;
  }
  function createInstanceBlock(type, target) {
    target = extend({}, target);
    if (!Object.keys(target).length) {
      return ["span", {}];
    }
    return ["div", {
      style: "line-height:1.25em;margin-bottom:0.6em"
    }, ["div", {
      style: "color:#476582"
    }, type], ["div", {
      style: "padding-left:1.25em"
    }, ...Object.keys(target).map((key) => {
      return ["div", {}, ["span", keywordStyle, key + ": "], formatValue(target[key], false)];
    })]];
  }
  function formatValue(v, asRaw = true) {
    if (typeof v === "number") {
      return ["span", numberStyle, v];
    } else if (typeof v === "string") {
      return ["span", stringStyle, JSON.stringify(v)];
    } else if (typeof v === "boolean") {
      return ["span", keywordStyle, v];
    } else if (isObject(v)) {
      return ["object", {
        object: asRaw ? toRaw(v) : v
      }];
    } else {
      return ["span", stringStyle, String(v)];
    }
  }
  function extractKeys(instance, type) {
    const Comp = instance.type;
    if (isFunction(Comp)) {
      return;
    }
    const extracted = {};
    for (const key in instance.ctx) {
      if (isKeyOfType(Comp, key, type)) {
        extracted[key] = instance.ctx[key];
      }
    }
    return extracted;
  }
  function isKeyOfType(Comp, key, type) {
    const opts = Comp[type];
    if (isArray(opts) && opts.includes(key) || isObject(opts) && key in opts) {
      return true;
    }
    if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
      return true;
    }
    if (Comp.mixins && Comp.mixins.some((m) => isKeyOfType(m, key, type))) {
      return true;
    }
  }
  function genRefFlag(v) {
    if (isShallow(v)) {
      return `ShallowRef`;
    }
    if (v.effect) {
      return `ComputedRef`;
    }
    return `Ref`;
  }
  if (taroWindowProvider.devtoolsFormatters) {
    taroWindowProvider.devtoolsFormatters.push(formatter);
  } else {
    taroWindowProvider.devtoolsFormatters = [formatter];
  }
}
const version = "3.5.17";
const warn = warn$1;
let policy = void 0;
const tt = typeof taroWindowProvider !== "undefined" && taroWindowProvider.trustedTypes;
if (tt) {
  try {
    policy = /* @__PURE__ */ tt.createPolicy("vue", {
      createHTML: (val) => val
    });
  } catch (e) {
    warn(`Error creating trusted types policy: ${e}`);
  }
}
const unsafeToTrustedHTML = policy ? (val) => policy.createHTML(val) : (val) => val;
const svgNS = "http://www.w3.org/2000/svg";
const mathmlNS = "http://www.w3.org/1998/Math/MathML";
const doc = typeof taroDocumentProvider !== "undefined" ? taroDocumentProvider : null;
const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, namespace, is, props) => {
    const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : is ? doc.createElement(tag, {
      is
    }) : doc.createElement(tag);
    if (tag === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }
    return el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector) => doc.querySelector(selector),
  setScopeId(el, id) {
    el.setAttribute(id, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(content, parent, anchor, namespace, start, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start && (start === end || start.nextSibling)) {
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling))
          break;
      }
    } else {
      templateContainer.innerHTML = unsafeToTrustedHTML(namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content);
      const template = templateContainer.content;
      if (namespace === "svg" || namespace === "mathml") {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent.insertBefore(template, anchor);
    }
    return [
      // first
      before ? before.nextSibling : parent.firstChild,
      // last
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};
const vtcKey = Symbol("_vtc");
function patchClass(el, value, isSVG) {
  const transitionClasses = el[vtcKey];
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}
const vShowOriginalDisplay = Symbol("_vod");
const vShowHidden = Symbol("_vsh");
const CSS_VAR_TEXT = Symbol("CSS_VAR_TEXT");
const displayRE = /(^|;)\s*display\s*:/;
function patchStyle(el, prev, next) {
  const style2 = el.style;
  const isCssString = isString(next);
  let hasControlledDisplay = false;
  if (next && !isCssString) {
    if (prev) {
      if (!isString(prev)) {
        for (const key in prev) {
          if (next[key] == null) {
            setStyle(style2, key, "");
          }
        }
      } else {
        for (const prevStyle of prev.split(";")) {
          const key = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
          if (next[key] == null) {
            setStyle(style2, key, "");
          }
        }
      }
    }
    for (const key in next) {
      if (key === "display") {
        hasControlledDisplay = true;
      }
      setStyle(style2, key, next[key]);
    }
  } else {
    if (isCssString) {
      if (prev !== next) {
        const cssVarText = style2[CSS_VAR_TEXT];
        if (cssVarText) {
          next += ";" + cssVarText;
        }
        style2.cssText = next;
        hasControlledDisplay = displayRE.test(next);
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
  }
  if (vShowOriginalDisplay in el) {
    el[vShowOriginalDisplay] = hasControlledDisplay ? style2.display : "";
    if (el[vShowHidden]) {
      style2.display = "none";
    }
  }
}
const semicolonRE = /[^\\];\s*$/;
const importantRE = /\s*!important$/;
function setStyle(style2, name, val) {
  if (isArray(val)) {
    val.forEach((v) => setStyle(style2, name, v));
  } else {
    if (val == null)
      val = "";
    {
      if (semicolonRE.test(val)) {
        warn(`Unexpected semicolon at the end of '${name}' style value: '${val}'`);
      }
    }
    if (name.startsWith("--")) {
      style2.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style2, name);
      if (importantRE.test(val)) {
        style2.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
      } else {
        style2[prefixed] = val;
      }
    }
  }
}
const prefixes = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style2, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = camelize(rawName);
  if (name !== "filter" && name in style2) {
    return prefixCache[rawName] = name;
  }
  name = capitalize(name);
  for (let i = 0; i < prefixes.length; i++) {
    const prefixed = prefixes[i] + name;
    if (prefixed in style2) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance, isBoolean2 = isSpecialBooleanAttr(key)) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (value == null || isBoolean2 && !includeBooleanAttr(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean2 ? "" : isSymbol(value) ? String(value) : value);
    }
  }
}
function patchDOMProp(el, key, value, parentComponent, attrName) {
  if (key === "innerHTML" || key === "textContent") {
    if (value != null) {
      el[key] = key === "innerHTML" ? unsafeToTrustedHTML(value) : value;
    }
    return;
  }
  const tag = el.tagName;
  if (key === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
  !tag.includes("-")) {
    const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
    const newValue = value == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      el.type === "checkbox" ? "on" : ""
    ) : String(value);
    if (oldValue !== newValue || !("_value" in el)) {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key);
    }
    el._value = value;
    return;
  }
  let needRemove = false;
  if (value === "" || value == null) {
    const type = typeof el[key];
    if (type === "boolean") {
      value = includeBooleanAttr(value);
    } else if (value == null && type === "string") {
      value = "";
      needRemove = true;
    } else if (type === "number") {
      value = 0;
      needRemove = true;
    }
  }
  try {
    el[key] = value;
  } catch (e) {
    if (!needRemove) {
      warn(`Failed setting prop "${key}" on <${tag.toLowerCase()}>: value ${value} is invalid.`, e);
    }
  }
  needRemove && el.removeAttribute(attrName || key);
}
function addEventListener(el, event, handler, options2) {
  el.addEventListener(event, handler, options2);
}
function removeEventListener(el, event, handler, options2) {
  el.removeEventListener(event, handler, options2);
}
const veiKey = Symbol("_vei");
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el[veiKey] || (el[veiKey] = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = sanitizeEventValue(nextValue, rawName);
  } else {
    const [name, options2] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(sanitizeEventValue(nextValue, rawName), instance);
      addEventListener(el, name, invoker, options2);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options2);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options2;
  if (optionsModifierRE.test(name)) {
    options2 = {};
    let m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options2[m[0].toLowerCase()] = true;
    }
  }
  const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
  return [event, options2];
}
let cachedNow = 0;
const p = /* @__PURE__ */ Promise.resolve();
const getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
  const invoker = (e) => {
    if (!e._vts) {
      e._vts = Date.now();
    } else if (e._vts <= invoker.attached) {
      return;
    }
    callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5, [e]);
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function sanitizeEventValue(value, propName) {
  if (isFunction(value) || isArray(value)) {
    return value;
  }
  warn(`Wrong type passed as event handler to ${propName} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof value}.`);
  return NOOP;
}
function patchStopImmediatePropagation(e, value) {
  if (isArray(value)) {
    const originalStop = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      originalStop.call(e);
      e._stopped = true;
    };
    return value.map((fn) => (e2) => !e2._stopped && fn && fn(e2));
  } else {
    return value;
  }
}
const isNativeOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // lowercase letter
key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
const patchProp = (el, key, prevValue, nextValue, namespace, parentComponent) => {
  const isSVG = namespace === "svg";
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key)) {
    if (!isModelListener(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue);
    if (!el.tagName.includes("-") && (key === "value" || key === "checked" || key === "selected")) {
      patchAttr(el, key, nextValue, isSVG, parentComponent, key !== "value");
    }
  } else if (
    // #11081 force set props for possible async custom element
    el._isVueCE && (/[A-Z]/.test(key) || !isString(nextValue))
  ) {
    patchDOMProp(el, camelize(key), nextValue, parentComponent, key);
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && isNativeOn(key) && isFunction(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable" || key === "translate" || key === "autocorrect") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (key === "width" || key === "height") {
    const tag = el.tagName;
    if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") {
      return false;
    }
  }
  if (isNativeOn(key) && isString(value)) {
    return false;
  }
  return key in el;
}
const rendererOptions = /* @__PURE__ */ extend({
  patchProp
}, nodeOps);
let renderer;
function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions));
}
const createApp = (...args) => {
  const app = ensureRenderer().createApp(...args);
  {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }
  const {
    mount
  } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (!container)
      return;
    const component = app._component;
    if (!isFunction(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    }
    if (container.nodeType === 1) {
      container.textContent = "";
    }
    const proxy = mount(container, false, resolveRootNamespace(container));
    if (container instanceof TaroElement) {
      container.removeAttribute("v-cloak");
      container.setAttribute("data-v-app", "");
    }
    return proxy;
  };
  return app;
};
function resolveRootNamespace(container) {
  if (container instanceof SVGElement) {
    return "svg";
  }
  if (typeof MathMLElement === "function" && container instanceof MathMLElement) {
    return "mathml";
  }
}
function injectNativeTagCheck(app) {
  Object.defineProperty(app.config, "isNativeTag", {
    value: (tag) => isHTMLTag(tag) || isSVGTag(tag) || isMathMLTag(tag),
    writable: false
  });
}
function injectCompilerOptionsCheck(app) {
  if (isRuntimeOnly()) {
    const isCustomElement = app.config.isCustomElement;
    Object.defineProperty(app.config, "isCustomElement", {
      get() {
        return isCustomElement;
      },
      set() {
        warn(`The \`isCustomElement\` config option is deprecated. Use \`compilerOptions.isCustomElement\` instead.`);
      }
    });
    const compilerOptions = app.config.compilerOptions;
    const msg2 = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc`;
    Object.defineProperty(app.config, "compilerOptions", {
      get() {
        warn(msg2);
        return compilerOptions;
      },
      set() {
        warn(msg2);
      }
    });
  }
}
function normalizeContainer(container) {
  if (isString(container)) {
    const res = taroDocumentProvider.querySelector(container);
    if (!res) {
      warn(`Failed to mount app: mount target selector "${container}" returned null.`);
    }
    return res;
  }
  if (taroWindowProvider.ShadowRoot && container instanceof taroWindowProvider.ShadowRoot && container.mode === "closed") {
    warn(`mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`);
  }
  return container;
}
/**
* vue v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function initDev() {
  {
    initCustomFormatter();
  }
}
{
  initDev();
}
function createTaroHook(lifecycle) {
  return (fn) => {
    const id = inject("id");
    const fnRef = ref(fn);
    let inst;
    let callback;
    onMounted(() => {
      inst = getPageInstance(id);
      if (inst === void 0) {
        inst = /* @__PURE__ */ Object.create({
          $options: {}
        });
        injectPageInstance(inst, id);
      }
      inst = inst.$options;
      callback = (...args) => fnRef.value(...args);
      const currentCallback = inst[lifecycle];
      if (isUndefined(currentCallback)) {
        inst[lifecycle] = callback;
      } else if (isFunction$1(currentCallback)) {
        inst[lifecycle] = [inst[lifecycle], callback];
      } else if (isArray$1(currentCallback)) {
        inst[lifecycle] = [...currentCallback, callback];
      }
    });
    onUnmounted(() => {
      if (!inst || !callback) {
        return;
      }
      const list = inst[lifecycle];
      if (list === callback) {
        inst[lifecycle] = void 0;
      } else if (isArray$1(list)) {
        inst[lifecycle] = list.filter((item) => item !== callback);
      }
      inst = null;
      callback = null;
    });
  };
}
const useDidShow = createTaroHook("onShow");
const useDidHide = createTaroHook("onHide");
const useError = createTaroHook("onError");
const useUnhandledRejection = createTaroHook("onUnhandledRejection");
const useLaunch = createTaroHook("onLaunch");
const usePageNotFound = createTaroHook("onPageNotFound");
const useLoad = createTaroHook("onLoad");
const usePageScroll = createTaroHook("onPageScroll");
const usePullDownRefresh = createTaroHook("onPullDownRefresh");
const usePullIntercept = createTaroHook("onPullIntercept");
const useReachBottom = createTaroHook("onReachBottom");
const useResize = createTaroHook("onResize");
const useUnload = createTaroHook("onUnload");
const useAddToFavorites = createTaroHook("onAddToFavorites");
const useOptionMenuClick = createTaroHook("onOptionMenuClick");
const useSaveExitState = createTaroHook("onSaveExitState");
const useShareAppMessage = createTaroHook("onShareAppMessage");
const useShareTimeline = createTaroHook("onShareTimeline");
const useTitleClick = createTaroHook("onTitleClick");
const useReady = createTaroHook("onReady");
const useRouter = () => {
  return Current.router;
};
const useTabItemTap = createTaroHook("onTabItemTap");
var taroHooks = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  useAddToFavorites,
  useDidHide,
  useDidShow,
  useError,
  useLaunch,
  useLoad,
  useOptionMenuClick,
  usePageNotFound,
  usePageScroll,
  usePullDownRefresh,
  usePullIntercept,
  useReachBottom,
  useReady,
  useResize,
  useRouter,
  useSaveExitState,
  useShareAppMessage,
  useShareTimeline,
  useTabItemTap,
  useTitleClick,
  useUnhandledRejection,
  useUnload
});
const setGlobalDataPlugin = {
  install: (app, data) => {
    app.taroGlobalData = data;
  }
};
function setDefaultDescriptor(obj) {
  obj.writable = true;
  obj.enumerable = true;
  return obj;
}
function setRouterParams(options2) {
  Current.router = Object.assign({ params: options2 === null || options2 === void 0 ? void 0 : options2.query }, options2);
}
function setReconciler() {
  hooks.tap("getLifecycle", function(instance, lifecycle) {
    return instance.$options[lifecycle];
  });
}
function createVue3Page(h2, id) {
  return function(component) {
    var _a2, _b, _c, _d;
    component = isClassComponent(component) ? component.__vccOpts : component;
    const inject2 = {
      props: {
        tid: String
      },
      created() {
        injectPageInstance(this, id);
      }
    };
    if (isArray$1(component.mixins)) {
      const mixins = component.mixins;
      const idx = mixins.length - 1;
      if (!((_a2 = mixins[idx].props) === null || _a2 === void 0 ? void 0 : _a2.tid)) {
        component.mixins.push(inject2);
      } else {
        component.mixins[idx] = inject2;
      }
    } else {
      component.mixins = [inject2];
    }
    const ProviderComponent = {
      setup() {
        provide("id", id);
      },
      render() {
        return this.$slots.default();
      }
    };
    const RootElement = "root";
    const PageComponent = Object.assign({}, component);
    const option = ((_d = (_c = (_b = PageComponent.props) === null || _b === void 0 ? void 0 : _b.option) === null || _c === void 0 ? void 0 : _c.default) === null || _d === void 0 ? void 0 : _d.call(_c)) || {};
    return h2(ProviderComponent, {
      key: id
    }, {
      default() {
        return [
          h2(RootElement, {
            id,
            class: ""
          }, [
            h2(PageComponent, { tid: id, option })
          ])
        ];
      }
    });
  };
}
function createVue3App(app, h2, config) {
  let pages = [];
  let appInstance;
  ensure(!(isFunction$1(app._component) && !isClassComponent(app._component)), "入口组件不支持使用函数式组件");
  setReconciler();
  app._component.render = function() {
    return pages.slice();
  };
  {
    appInstance = app.mount("#app");
  }
  const [ONLAUNCH, ONSHOW, ONHIDE] = hooks.call("getMiniLifecycleImpl").app;
  const appConfig = Object.create({
    mount(component, id, cb) {
      const page = createVue3Page(h2, id)(component);
      pages.push(page);
      this.updateAppInstance(cb);
    },
    unmount(id, cb) {
      pages = pages.filter((page) => page.key !== id);
      this.updateAppInstance(cb);
    },
    updateAppInstance(cb) {
      appInstance.$forceUpdate();
      appInstance.$nextTick(cb);
    }
  }, {
    config: setDefaultDescriptor({
      configurable: true,
      value: config
    }),
    [ONLAUNCH]: setDefaultDescriptor({
      value(options2) {
        var _a2;
        setRouterParams(options2);
        if (app["taroGlobalData"]) {
          const globalData = app["taroGlobalData"];
          const keys = Object.keys(globalData);
          const descriptors = Object.getOwnPropertyDescriptors(globalData);
          keys.forEach((key) => {
            Object.defineProperty(this, key, {
              configurable: true,
              enumerable: true,
              get() {
                return globalData[key];
              },
              set(value) {
                globalData[key] = value;
              }
            });
          });
          Object.defineProperties(this, descriptors);
        }
        const onLaunch = (_a2 = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a2 === void 0 ? void 0 : _a2.onLaunch;
        isFunction$1(onLaunch) && onLaunch.call(appInstance, options2);
      }
    }),
    [ONSHOW]: setDefaultDescriptor({
      value(options2) {
        var _a2;
        setRouterParams(options2);
        const onShow = (_a2 = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a2 === void 0 ? void 0 : _a2.onShow;
        isFunction$1(onShow) && onShow.call(appInstance, options2);
      }
    }),
    [ONHIDE]: setDefaultDescriptor({
      value(options2) {
        var _a2;
        const onHide = (_a2 = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a2 === void 0 ? void 0 : _a2.onHide;
        isFunction$1(onHide) && onHide.call(appInstance, options2);
      }
    }),
    onError: setDefaultDescriptor({
      value(error) {
        var _a2;
        const onError = (_a2 = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a2 === void 0 ? void 0 : _a2.onError;
        isFunction$1(onError) && onError.call(appInstance, error);
      }
    }),
    onUnhandledRejection: setDefaultDescriptor({
      value(error) {
        var _a2;
        const onUnhandledRejection = (_a2 = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a2 === void 0 ? void 0 : _a2.onUnhandledRejection;
        isFunction$1(onUnhandledRejection) && onUnhandledRejection.call(appInstance, error);
      }
    }),
    onPageNotFound: setDefaultDescriptor({
      value(res) {
        var _a2;
        const onPageNotFound = (_a2 = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a2 === void 0 ? void 0 : _a2.onPageNotFound;
        isFunction$1(onPageNotFound) && onPageNotFound.call(appInstance, res);
      }
    })
  });
  Current.app = appConfig;
  return appConfig;
}
function isClassComponent(value) {
  return isFunction$1(value) && "__vccOpts" in value;
}
incrementId();
hooks.tap("initNativeApi", function(taro2) {
  for (const hook in taroHooks) {
    taro2[hook] = taroHooks[hook];
  }
  taro2.setGlobalDataPlugin = setGlobalDataPlugin;
});
hooks.tap("proxyToRaw", function(proxyObj) {
  return toRaw(proxyObj);
});
function getAugmentedNamespace(n) {
  if (n.__esModule)
    return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else
    a = {};
  Object.defineProperty(a, "__esModule", {
    value: true
  });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var taro = { exports: {} };
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(dist$1);
const ENV_TYPE = {
  ASCF: "ASCF",
  WEAPP: "WEAPP",
  SWAN: "SWAN",
  ALIPAY: "ALIPAY",
  TT: "TT",
  QQ: "QQ",
  JD: "JD",
  WEB: "WEB",
  RN: "RN",
  HARMONY: "HARMONY",
  QUICKAPP: "QUICKAPP",
  HARMONYHYBRID: "HARMONYHYBRID"
};
function getEnv() {
  {
    return ENV_TYPE.WEAPP;
  }
}
class Chain {
  constructor(requestParams, interceptors2, index) {
    this.index = index || 0;
    this.requestParams = requestParams || {};
    this.interceptors = interceptors2 || [];
  }
  proceed(requestParams = {}) {
    this.requestParams = requestParams;
    if (this.index >= this.interceptors.length) {
      throw new Error("chain 参数错误, 请勿直接修改 request.chain");
    }
    const nextInterceptor = this._getNextInterceptor();
    const nextChain = this._getNextChain();
    const p2 = nextInterceptor(nextChain);
    const res = p2.catch((err) => Promise.reject(err));
    Object.keys(p2).forEach((k) => isFunction$1(p2[k]) && (res[k] = p2[k]));
    return res;
  }
  _getNextInterceptor() {
    return this.interceptors[this.index];
  }
  _getNextChain() {
    return new Chain(this.requestParams, this.interceptors, this.index + 1);
  }
}
class Link2 {
  constructor(interceptor) {
    this.taroInterceptor = interceptor;
    this.chain = new Chain();
  }
  request(requestParams) {
    const chain = this.chain;
    const taroInterceptor = this.taroInterceptor;
    chain.interceptors = chain.interceptors.filter((interceptor) => interceptor !== taroInterceptor).concat(taroInterceptor);
    return chain.proceed(Object.assign({}, requestParams));
  }
  addInterceptor(interceptor) {
    this.chain.interceptors.push(interceptor);
  }
  cleanInterceptors() {
    this.chain = new Chain();
  }
}
function interceptorify(promiseifyApi) {
  return new Link2(function(chain) {
    return promiseifyApi(chain.requestParams);
  });
}
function timeoutInterceptor(chain) {
  const requestParams = chain.requestParams;
  let p2;
  const res = new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      reject(new Error("网络链接超时,请稍后再试！"));
    }, requestParams && requestParams.timeout || 6e4);
    p2 = chain.proceed(requestParams);
    p2.then((res2) => {
      if (!timeout)
        return;
      clearTimeout(timeout);
      resolve(res2);
    }).catch((err) => {
      timeout && clearTimeout(timeout);
      reject(err);
    });
  });
  if (!isUndefined(p2) && isFunction$1(p2.abort))
    res.abort = p2.abort;
  return res;
}
function logInterceptor(chain) {
  const requestParams = chain.requestParams;
  const { method, data, url } = requestParams;
  console.log(`http ${method || "GET"} --> ${url} data: `, data);
  const p2 = chain.proceed(requestParams);
  const res = p2.then((res2) => {
    console.log(`http <-- ${url} result:`, res2);
    return res2;
  });
  if (isFunction$1(p2.abort))
    res.abort = p2.abort;
  return res;
}
const interceptors = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  logInterceptor,
  timeoutInterceptor
}, Symbol.toStringTag, { value: "Module" }));
function Behavior(options2) {
  return options2;
}
function getPreload(current) {
  return function(key, val) {
    current.preloadData = isObject$1(key) ? key : {
      [key]: val
    };
  };
}
const defaultDesignWidth = 750;
const defaultDesignRatio = {
  640: 2.34 / 2,
  750: 1,
  828: 1.81 / 2
};
const defaultBaseFontSize = 20;
const defaultUnitPrecision = 5;
const defaultTargetUnit = "rpx";
function getInitPxTransform(taro2) {
  return function(config) {
    const { designWidth = defaultDesignWidth, deviceRatio = defaultDesignRatio, baseFontSize = defaultBaseFontSize, targetUnit = defaultTargetUnit, unitPrecision = defaultUnitPrecision } = config;
    taro2.config = taro2.config || {};
    taro2.config.designWidth = designWidth;
    taro2.config.deviceRatio = deviceRatio;
    taro2.config.baseFontSize = baseFontSize;
    taro2.config.targetUnit = targetUnit;
    taro2.config.unitPrecision = unitPrecision;
  };
}
function getPxTransform(taro2) {
  return function(size2) {
    const config = taro2.config || {};
    const baseFontSize = config.baseFontSize;
    const deviceRatio = config.deviceRatio || defaultDesignRatio;
    const designWidth = ((input = 0) => isFunction$1(config.designWidth) ? config.designWidth(input) : config.designWidth || defaultDesignWidth)(size2);
    if (!(designWidth in deviceRatio)) {
      throw new Error(`deviceRatio 配置中不存在 ${designWidth} 的设置！`);
    }
    const targetUnit = config.targetUnit || defaultTargetUnit;
    const unitPrecision = config.unitPrecision || defaultUnitPrecision;
    const formatSize = ~~size2;
    let rootValue = 1 / deviceRatio[designWidth];
    switch (targetUnit) {
      case "rem":
        rootValue *= baseFontSize * 2;
        break;
      case "px":
        rootValue *= 2;
        break;
    }
    let val = formatSize / rootValue;
    if (unitPrecision >= 0 && unitPrecision <= 100) {
      val = Number(val.toFixed(unitPrecision));
    }
    return val + targetUnit;
  };
}
const Taro = {
  Behavior,
  getEnv,
  ENV_TYPE,
  Link: Link2,
  interceptors,
  Current,
  getCurrentInstance: getCurrentInstance$1,
  options,
  nextTick: nextTick$1,
  eventCenter,
  Events,
  getInitPxTransform,
  interceptorify
};
Taro.initPxTransform = getInitPxTransform(Taro);
Taro.preload = getPreload(Current);
Taro.pxTransform = getPxTransform(Taro);
const dist = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Taro
}, Symbol.toStringTag, { value: "Module" }));
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(dist);
(function(module2) {
  const { hooks: hooks2 } = require$$0;
  const taro2 = require$$1.default;
  if (hooks2.isExist("initNativeApi")) {
    hooks2.call("initNativeApi", taro2);
  }
  module2.exports = taro2;
  module2.exports.default = module2.exports;
})(taro);
var taroExports = taro.exports;
exports.createApp = createApp;
exports.createBaseVNode = createBaseVNode;
exports.createElementBlock = createElementBlock;
exports.createPageConfig = createPageConfig;
exports.createRecursiveComponentConfig = createRecursiveComponentConfig;
exports.createVue3App = createVue3App;
exports.h = h;
exports.openBlock = openBlock;
exports.ref = ref;
exports.taroExports = taroExports;
exports.taroWindowProvider = taroWindowProvider;
exports.toDisplayString = toDisplayString;
