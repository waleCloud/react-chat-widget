import { MessageDetails } from './src/store/types';
// Type definitions for react-chat-widget v3.0.0
// Project: <https://github.com/Wolox/react-chat-widget>
// Definitions by: Martín Callegari <https://github.com/mcallegari10>

import { ElementType, FC } from 'react';

declare const Widget: FC<any>;

export function addUserMessage(message: MessageDetails): void;
export function addUserMessage(message: MessageDetails, id: string): void;

export function addResponseMessage(message: MessageDetails,): void;
export function addResponseMessage(message: MessageDetails, id: string): void;

export function addLinkSnippet(link: { link: string, title: string, target?: string }): void;
export function addLinkSnippet(link: { link: string, title: string, target?: string }, id: string): void;

export function renderCustomComponent(component: ElementType, props: any): void;
export function renderCustomComponent(component: ElementType, props: any, showAvatar: boolean): void;
export function renderCustomComponent(component: ElementType, props: any, showAvatar: boolean, id: string): void;

export function toggleMsgLoader(): void;
export function toggleWidget(): void;
export function toggleInputDisabled(): void;
export function dropMessages(): void;
export function isWidgetOpened(): boolean;
export function setQuickButtons(buttons: Array<{ label: string, value: string | number }>): void;

export function deleteMessages(count: number): void;
export function deleteMessages(count: number, id: string): void;

export function markAllAsRead(): void;
export function setBadgeCount(count: number): void;

export as namespace ReactChatWidget;
