export const AUTO_PROMPT_OPTIONS = `export interface AutoPromptOptions { force?: boolean; forceSlidedownOverNative?: boolean; slidedownPromptOptions?: IOneSignalAutoPromptOptions; }`;
export const SLIDEDOWN_OPTIONS = `export interface IOneSignalAutoPromptOptions { force?: boolean; forceSlidedownOverNative?: boolean; isInUpdateMode?: boolean; categoryOptions?: IOneSignalCategories; }`;
export const CATEGORY_OPTIONS = `export interface IOneSignalCategories { positiveUpdateButton: string; negativeUpdateButton: string; savingButtonText: string; errorButtonText: string; updateMessage: string; tags: IOneSignalTagCategory[]; }`;
export const TAG_CATEGORY = `export interface IOneSignalTagCategory { tag: string; label: string; checked?: boolean; }`;
export const PUSH_SUBSCRIPTION_NAMESPACE_PROPERTIES = `export type PushSubscriptionNamespaceProperties = { id: string | null | undefined; token: string | null | undefined; optedIn: boolean; };`;
export const SUBSCRIPTION_CHANGE_EVENT = `export type SubscriptionChangeEvent = { previous: PushSubscriptionNamespaceProperties; current: PushSubscriptionNamespaceProperties; };`;
export const NOTIFICATION_EVENT_NAME = `export type NotificationEventName = 'click' | 'foregroundWillDisplay' | 'dismiss' | 'permissionChange' | 'permissionPromptDisplay';`;
export const NOTIFICATION_BUTTON_ACTION_BUTTON = `export interface IOSNotificationActionButton {
  /**
   * Any unique identifier to represent which button was clicked. This is typically passed back to the service worker
   * and host page through events to identify which button was clicked.
   * e.g. 'like-button'
   */
  readonly actionId: string;
  /**
   * The notification action button's text.
   */
  readonly text: string;
  /**
   * A valid publicly reachable HTTPS URL to an image.
   */
  readonly icon?: string;
  /**
   * The URL to open the web browser to when this action button is clicked.
   */
  readonly launchURL?: string;
}
`;
export const SLIDEDOWN_EVENT_NAME = `export type SlidedownEventName = 'slidedownAllowClick' | 'slidedownCancelClick' | 'slidedownClosed' | 'slidedownQueued' | 'slidedownShown';`;
export const ONESIGNAL_DEFERRED_CALLBACK = `export type OneSignalDeferredLoadedCallback = (onesignal: IOneSignalOneSignal) => void;`;
export const OS_NOTIFICATION = `export interface IOSNotification {
  /**
   * The OneSignal notification id;
   *  - Primary id on OneSignal's REST API and dashboard
   */
  readonly notificationId: string;

  /**
   * Visible title text on the notification
   */
  readonly title?: string;

  /**
   * Visible body text on the notification
   */
  readonly body: string;

  /**
   * Visible icon the notification; URL format
   */
  readonly icon?: string;

  /**
   * Visible small badgeIcon that displays on some devices; URL format
   * Example: On Android's status bar
   */
  readonly badgeIcon?: string;

  /**
   * Visible image on the notification; URL format
   */
  readonly image?: string;

  /**
   * Visible buttons on the notification
   */
  readonly actionButtons?: IOSNotificationActionButton[];

  /**
   * If this value is the same as existing notification, it will replace it
   * Can be set when creating the notification with "Web Push Topic" on the dashboard
   * or web_push_topic from the REST API.
   */
  readonly topic?: string;

  /**
   * Custom object that was sent with the notification;
   * definable when creating the notification from the OneSignal REST API or dashboard
   */
  readonly additionalData?: object;

  /**
   * URL to open when clicking or tapping on the notification
   */
  readonly launchURL?: string;

  /**
   * Confirm the push was received by reporting back to OneSignal
   */
  readonly confirmDelivery: boolean;
}
`;
export const NOTIFICATION_CLICK_RESULT = `export interface NotificationClickResult {
  readonly actionId?: string;
  readonly url?: string;
}
`;
export const NOTIFICATION_FOREGROUND_WILL_DISPLAY_EVENT = `export interface NotificationForegroundWillDisplayEvent {
  readonly notification: IOSNotification;
  preventDefault(): void;
}
`;
export const NOTIFICATION_EVENT_TYPE_MAP = `export type NotificationEventTypeMap = {
  'click': NotificationClickEvent;
  'foregroundWillDisplay': NotificationForegroundWillDisplayEvent;
  'dismiss': NotificationDismissEvent;
  'permissionChange': boolean;
  'permissionPromptDisplay': void;
};
`;
export const NOTIFICATION_DISMISS_EVENT = `export interface NotificationDismissEvent {
  notification: IOSNotification;
}
`;
export const NOTIFICATION_CLICK_EVENT = `export interface NotificationClickEvent {
  readonly notification: IOSNotification;
  readonly result: NotificationClickResult;
}
`;
export const USER_CHANGE_EVENT = `export type UserChangeEvent = {
  current: UserNamespaceProperties;
};`;
export const USER_NAMESPACE_PROPERTIES = `export type UserNamespaceProperties = {
  onesignalId: string | undefined;
  externalId: string | undefined;
};`;
