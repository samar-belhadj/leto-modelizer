import { Subject } from 'rxjs';

/**
 * Represent a rxjs Event object to emit and to receive events about file opening.
 * The event should be an Object that contains the `id` (path), the `label`
 * and the `content` of the file.
 * Example: { id: 'terraform/app.tf', label: 'app.tf', content: 'Hello World' }
 * @typedef {Subject} OpenFileEvent
 */
const OpenFileEvent = new Subject();

/**
 * Represent a rxjs Event object to emit and to receive events about file selecting.
 * The event should be an Object that contains the `id` (path) of the file and `isSelected` boolean.
 * Example: { isSelected: true, id: 'terraform/app.tf' }
 * @typedef {Subject} SelectFileEvent
 */
const SelectFileEvent = new Subject();

export default {
  OpenFileEvent,
  SelectFileEvent,
};