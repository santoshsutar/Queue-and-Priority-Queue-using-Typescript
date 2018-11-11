import { LinkedList } from "./linked-list";

export  abstract class Struct<T> {
    public _items: LinkedList<T> = new LinkedList<T>();
    /// <summary>
    /// Adds an item to the back of the queue
    /// </summary>
    /// <param name="item">The item to place in the queue</param>
    abstract Enqueue(item: T): void;

    /// <summary>
    /// Removes and returns the front item from the queue
    /// </summary>
    /// <returns>The front item from the queue</returns>
    public Dequeue(): T {
        if (this._items.Count == 0) {
            throw "The queue is empty.";
        }
        
        
        
        // store the last value in a temporary variable
        if (this._items.Head ==null) {       
            //console.log(this._items);     
            return null;
        }
        let value: T = this._items.Head.Value;

        // remove the last item
        this._items.RemoveFirst();

        // return the stored last value
        return value;
    }

    /// <summary>
    /// Returns the front item from the queue without removing it from the queue
    /// </summary>
    /// <returns>The front item from the queue</returns>
    public Peek(): T {
        if (this._items.Count == 0) {
            throw "The queue is empty.";
        }

        // return the last value in the queue
        return this._items.Head.Value;
    }

    /// <summary>
    /// The number of items in the queue
    /// </summary>
    public Count(): number {
        return this._items.Count;

    }

    /// <summary>
    /// Removes all items from the queue
    /// </summary>
    public Clear(): void {
        this._items.Clear();
    }

    public GetEnumerator(): LinkedList<T> {
        return this._items;
    }
    
}

export class Queue<T> extends Struct<T> {
    /// <summary>
    /// Adds an item to the back of the queue
    /// </summary>
    /// <param name="item">The item to place in the queue</param>
    public Enqueue(item: T): void {
        this._items.AddValueLast(item);
    }
}

