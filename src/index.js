import Model from './model';
import View from './view';
import Controller from './controller';
// import { createElement, EventEmitter } from './helper';

const model = new Model();
const view = new View();
const controller = new Controller(model, view);