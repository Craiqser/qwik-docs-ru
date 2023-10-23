import type {
  QwikAnimationEvent,
  QwikChangeEvent,
  QwikClipboardEvent,
  QwikCompositionEvent,
  QwikDragEvent,
  QwikFocusEvent,
  QwikInvalidEvent,
  QwikKeyboardEvent,
  QwikMouseEvent,
  QwikPointerEvent,
  QwikSubmitEvent,
  QwikTouchEvent,
  QwikTransitionEvent,
  QwikUIEvent,
  QwikWheelEvent,
} from './jsx-qwik-events';

export type QwikEventMap<T> = {
  Copy: QwikClipboardEvent<T>;
  CopyCapture: QwikClipboardEvent<T>;
  Cut: QwikClipboardEvent<T>;
  CutCapture: QwikClipboardEvent<T>;
  Paste: QwikClipboardEvent<T>;
  PasteCapture: QwikClipboardEvent<T>;
  CompositionEnd: QwikCompositionEvent<T>;
  CompositionEndCapture: QwikCompositionEvent<T>;
  CompositionStart: QwikCompositionEvent<T>;
  CompositionStartCapture: QwikCompositionEvent<T>;
  CompositionUpdate: QwikCompositionEvent<T>;
  CompositionUpdateCapture: QwikCompositionEvent<T>;
  Focus: QwikFocusEvent<T>;
  FocusCapture: QwikFocusEvent<T>;
  Focusin: QwikFocusEvent<T>;
  FocusinCapture: QwikFocusEvent<T>;
  Focusout: QwikFocusEvent<T>;
  FocusoutCapture: QwikFocusEvent<T>;
  Blur: QwikFocusEvent<T>;
  BlurCapture: QwikFocusEvent<T>;
  Change: QwikChangeEvent<T>;
  ChangeCapture: QwikChangeEvent<T>;
  Input: Event;
  InputCapture: Event;
  Reset: Event;
  ResetCapture: Event;
  Submit: QwikSubmitEvent<T>;
  SubmitCapture: Event;
  Invalid: QwikInvalidEvent<T>;
  InvalidCapture: QwikInvalidEvent<T>;
  Load: Event;
  LoadCapture: Event;
  Error: Event; // also a Media Event
  ErrorCapture: Event; // also a Media Event
  KeyDown: QwikKeyboardEvent<T>;
  KeyDownCapture: QwikKeyboardEvent<T>;
  KeyPress: QwikKeyboardEvent<T>;
  KeyPressCapture: QwikKeyboardEvent<T>;
  KeyUp: QwikKeyboardEvent<T>;
  KeyUpCapture: QwikKeyboardEvent<T>;
  AuxClick: QwikMouseEvent<T>;
  Click: QwikMouseEvent<T>;
  ClickCapture: QwikMouseEvent<T>;
  ContextMenu: QwikMouseEvent<T>;
  ContextMenuCapture: QwikMouseEvent<T>;
  DblClick: QwikMouseEvent<T>;
  DblClickCapture: QwikMouseEvent<T>;
  Drag: QwikDragEvent<T>;
  DragCapture: QwikDragEvent<T>;
  DragEnd: QwikDragEvent<T>;
  DragEndCapture: QwikDragEvent<T>;
  DragEnter: QwikDragEvent<T>;
  DragEnterCapture: QwikDragEvent<T>;
  DragExit: QwikDragEvent<T>;
  DragExitCapture: QwikDragEvent<T>;
  DragLeave: QwikDragEvent<T>;
  DragLeaveCapture: QwikDragEvent<T>;
  DragOver: QwikDragEvent<T>;
  DragOverCapture: QwikDragEvent<T>;
  DragStart: QwikDragEvent<T>;
  DragStartCapture: QwikDragEvent<T>;
  Drop: QwikDragEvent<T>;
  DropCapture: QwikDragEvent<T>;
  MouseDown: QwikMouseEvent<T>;
  MouseDownCapture: QwikMouseEvent<T>;
  MouseEnter: QwikMouseEvent<T>;
  MouseLeave: QwikMouseEvent<T>;
  MouseMove: QwikMouseEvent<T>;
  MouseMoveCapture: QwikMouseEvent<T>;
  MouseOut: QwikMouseEvent<T>;
  MouseOutCapture: QwikMouseEvent<T>;
  MouseOver: QwikMouseEvent<T>;
  MouseOverCapture: QwikMouseEvent<T>;
  MouseUp: QwikMouseEvent<T>;
  MouseUpCapture: QwikMouseEvent<T>;
  TouchCancel: QwikTouchEvent<T>;
  TouchCancelCapture: QwikTouchEvent<T>;
  TouchEnd: QwikTouchEvent<T>;
  TouchEndCapture: QwikTouchEvent<T>;
  TouchMove: QwikTouchEvent<T>;
  TouchMoveCapture: QwikTouchEvent<T>;
  TouchStart: QwikTouchEvent<T>;
  TouchStartCapture: QwikTouchEvent<T>;
  PointerDown: QwikPointerEvent<T>;
  PointerDownCapture: QwikPointerEvent<T>;
  PointerMove: QwikPointerEvent<T>;
  PointerMoveCapture: QwikPointerEvent<T>;
  PointerUp: QwikPointerEvent<T>;
  PointerUpCapture: QwikPointerEvent<T>;
  PointerCancel: QwikPointerEvent<T>;
  PointerCancelCapture: QwikPointerEvent<T>;
  PointerEnter: QwikPointerEvent<T>;
  PointerEnterCapture: QwikPointerEvent<T>;
  PointerLeave: QwikPointerEvent<T>;
  PointerLeaveCapture: QwikPointerEvent<T>;
  PointerOver: QwikPointerEvent<T>;
  PointerOverCapture: QwikPointerEvent<T>;
  PointerOut: QwikPointerEvent<T>;
  PointerOutCapture: QwikPointerEvent<T>;
  GotPointerCapture: QwikPointerEvent<T>;
  GotPointerCaptureCapture: QwikPointerEvent<T>;
  LostPointerCapture: QwikPointerEvent<T>;
  LostPointerCaptureCapture: QwikPointerEvent<T>;
  Scroll: QwikUIEvent<T>;
  ScrollCapture: QwikUIEvent<T>;
  Wheel: QwikWheelEvent<T>;
  WheelCapture: QwikWheelEvent<T>;
  AnimationStart: QwikAnimationEvent<T>;
  AnimationStartCapture: QwikAnimationEvent<T>;
  AnimationEnd: QwikAnimationEvent<T>;
  AnimationEndCapture: QwikAnimationEvent<T>;
  AnimationIteration: QwikAnimationEvent<T>;
  AnimationIterationCapture: QwikAnimationEvent<T>;
  TransitionEnd: QwikTransitionEvent<T>;
  TransitionEndCapture: QwikTransitionEvent<T>;

  //Audio / Video Events
  AudioProcess: Event;
  CanPlay: Event;
  CanPlayThrough: Event;
  Complete: Event;
  DurationChange: Event;
  Emptied: Event;
  Ended: Event;
  LoadedData: Event;
  LoadedMetadata: Event;
  Pause: Event;
  Play: Event;
  Playing: Event;
  Progress: Event;
  RateChange: Event;
  Seeked: Event;
  Seeking: Event;
  Stalled: Event;
  Suspend: Event;
  TimeUpdate: Event;
  VolumeChange: Event;
  Waiting: Event;
};

export type PreventDefault<T extends Element> = {
  [K in keyof QwikEventMap<T> as `preventdefault:${Lowercase<K>}`]?: boolean;
};

export type QwikKeysEvents = Lowercase<keyof QwikEventMap<any>>;
