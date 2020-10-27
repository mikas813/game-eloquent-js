import {drawGrid, elt} from '@/index';

export default class DOMDisplay {
    constructor(parent, level) {
        this.dom = elt('div', {class: 'game'}, drawGrid(level));
        this.actorLayer = null;
        parent.appendChild(this.dom);
    }

    clear() { this.dom.remove(); }
}