import { LinkedListNode } from "./linked-list-node";
import { Struct } from "./queue";
export class PriorityQueue<T> extends Struct<T> {
    /// <summary>
    /// Adds an item to the back of the queue
    /// </summary>
    /// <param name="item">The item to place in the queue</param>
    public Enqueue(item: T): void {
        // if the list is empty, just add the item
        if (this._items.Count == 0) {
            this._items.AddValueLast(item);
            return;
        }
        // find the proper insert point
        var current = this._items.Head;


        // while we're not at the end of the list and the current value
        // is larger than the value being inserted...
        let pre;
        while (current != null && current.Value >= item) {
            pre = current;
            current = current.Next;
        }
        if (current == null) {
            // we made it to the end of the list
            this._items.AddValueLast(item);
            return;
        }
        if (pre == null) {
            this._items.AddValueFirst(item);
            return;
        }
        this._items.AddBefore(pre, current, new LinkedListNode<T>(item));
    }
}