import { Stream } from 'xstream';
import { DOMSource, VNode } from '@cycle/dom';
import { TimeSource } from '@cycle/time';

export type Component = (s: BaseSources) => BaseSinks;

export interface BaseSources {
    DOM: DOMSource;
    Time: TimeSource;
}

export interface BaseSinks {
    DOM?: Stream<VNode>;
    eventDispatch?: Stream<[Element, Event]>;
}
