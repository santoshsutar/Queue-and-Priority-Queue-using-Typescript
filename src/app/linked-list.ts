import { LinkedListNode } from "./linked-list-node";

export class LinkedList<T>  {
    public Head: LinkedListNode<T>;

    public Tail: LinkedListNode<T>;


    public Count: number;

    /**
     *
     */
    constructor() {
        this.Count = 0;
        this.Head = null;
        this.Tail = null;

    }
    /// <summary>
    /// Adds the specified node to the start of the link list
    /// </summary>
    /// <param name="node">The node to add to the start of the list</param>
    public AddFirst(node: LinkedListNode<T>): void {
        // Save off the head node so we don't lose it
        let temp: LinkedListNode<T> = this.Head;

        // Point head to the new node
        this.Head = node;

        // Insert the rest of the list behind the head
        this.Head.Next = temp;

        this.Count = this.Count + 1;
        //console.log(this.Count);

        if (this.Count == 1) {
            // if the list was empty then Head and Tail should
            // both point to the new node.
            this.Tail = this.Head;


        }


    }
    /// <summary>
    /// Add the node to the end of the list
    /// </summary>
    /// <param name="value">The node to add</param>
    public AddLast(node: LinkedListNode<T>): void {
        if (this.Count == 0) {
            this.Head = node;
        }
        else {
            this.Tail.Next = node;
        }

        this.Tail = node;

        this.Count++;
    }
    /// <summary>
    /// Adds the specified value to the start of the linked list
    /// </summary>
    /// <param name="value">The value to add to the start of the list</param>
    public AddValueFirst(value: T): void {
        this.AddFirst(new LinkedListNode<T>(value));
    }
    /// <summary>
    /// Add the value to the end of the list
    /// </summary>
    /// <param name="value">The value to add</param>
    public AddValueLast(value: T): void {
        this.AddLast(new LinkedListNode<T>(value));
    }
    /// <summary>
    /// Adds the specified value to the front of the list
    /// </summary>
    /// <param name="item">The value to add</param>
    public Add(item: T): void {
        this.AddValueFirst(item);
    }
    public Clear(): void {
        this.Head = null;
        this.Tail = null;
        this.Count = 0;
    }
    /// <summary>
    /// Removes the first node from the list.
    /// </summary>
    public RemoveFirst(): void {
        if (this.Count != 0) {
            // Before: Head -> 3 -> 5
            // After:  Head ------> 5

            // Head -> 3 -> null
            // Head ------> null
            //console.log(this.Head.Next);
            this.Head = this.Head.Next;
            this.Count--;


            if (this.Count == 0) {
                this.Tail = null;
            }
        }
    }
    public AddBefore(previousItem: LinkedListNode<T>, currentItem: LinkedListNode<T>, newItem: LinkedListNode<T>): void {
        previousItem.Next = newItem;
        newItem.Next = currentItem;
        this.Count++;
    }
}


