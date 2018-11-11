export class LinkedListNode<T> {
     /**
     *
     */
    constructor(value: T) {
        this.Value = value;

    }
    /// <summary>
    /// The node value
    /// </summary>
    public Value: T;

    /// <summary>
    /// The next node in the linked list (null if last node)
    /// </summary>
    public Next: LinkedListNode<T>;
}
