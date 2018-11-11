import { TestBed, async } from '@angular/core/testing';
import { Queue } from './queue';



describe('QueueListTests', () => {

    it('Enqueue_Updates_Count', async(() => {

        let queue = new Queue<number>();

        expect(queue.Count()).toEqual(0);

        for (let i = 0; i < 10; i++) {
            expect(queue.Count()).toEqual(i);
            queue.Enqueue(i);
            expect(queue.Count()).toEqual(i + 1);
        }

    }));
    it('Dequeue_Peek_Correct_Order', async(() => {

        let queue = new Queue<number>();
        for (let i = 0; i < 10; i++) {
            queue.Enqueue(i);
        }

        let expectedCount = queue.Count();

        for (let expected = 0; expected < 10; expected++) {
            expect(queue.Count()).toEqual(expectedCount);
            expect(queue.Peek()).toEqual(expected);
            expect(queue.Count()).toEqual(expectedCount);
            expect(queue.Dequeue()).toEqual(expected);
            expect(queue.Count()).toEqual(expectedCount - 1);
            expectedCount--;
        }

    }));

    it('Enqueue_Dequeue_Mix', async(() => {

        let queue = new Queue<number>();
        for (let i = 0; i < 8; i++) {
            queue.Enqueue(i);
        }
        let expected = 0;
        let node = queue.GetEnumerator().Head;
        node.Next = queue.GetEnumerator().Head.Next;
        while (node != null) {
            expect(node.Value).toEqual(expected++);
            node = node.Next;
        }
        // now remove three items 
        expect(queue.Dequeue()).toEqual(0);
        expect(queue.Dequeue()).toEqual(1);
        expect(queue.Dequeue()).toEqual(2);


        // now 3..7 are left

        for (let i = 0; i < 4; i++) {
            queue.Enqueue(i);
        }
        expect(queue.Dequeue()).toEqual(3);
        expect(queue.Dequeue()).toEqual(4);
        expect(queue.Dequeue()).toEqual(5);
        expect(queue.Dequeue()).toEqual(6);
        expect(queue.Dequeue()).toEqual(7);
        expect(queue.Dequeue()).toEqual(0);
        expect(queue.Dequeue()).toEqual(1);
        expect(queue.Dequeue()).toEqual(2);
    }));
    it('Enumeration_Simple', async(() => {

        let queue = new Queue<number>();
        for (let i = 0; i < 10; i++) {
            queue.Enqueue(i);
        }

        let expected = 0;

        let node = queue.GetEnumerator().Head;
        node.Next = queue.GetEnumerator().Head.Next;
        while (node != null) {
            expect(node.Value).toEqual(expected++);
            node = node.Next;
        }
    }));
});