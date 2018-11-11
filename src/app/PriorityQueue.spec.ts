import { TestBed, async } from '@angular/core/testing';
import { Queue } from './queue';
import { PriorityQueue } from './PriorityQueue';



describe('PriorityQueueTests', () => {

    it('Enqueue_Simple', async(() => {

        let q = new PriorityQueue<number>();
        for (let i = 0; i < 4; i++) {
            q.Enqueue(i);
        }
        //console.log(q.Count());

        expect(q.Count()).toEqual(4);

        let expected = 3;
        while (q.Count() > 0) {
            expect(expected).toEqual(q.Dequeue())
            //q.Dequeue();
            expected--;
        }
    }));
    it('Enqueue_Specific', async(() => {

        let q = new PriorityQueue<number>();
        q.Enqueue(5);
        q.Enqueue(1);
        q.Enqueue(2);
        q.Enqueue(4);
        q.Enqueue(4);
        q.Enqueue(6);
        q.Enqueue(3);
        expect(q.Dequeue()).toEqual(6);
        expect(q.Dequeue()).toEqual(5);
        expect(q.Dequeue()).toEqual(4);
        expect(q.Dequeue()).toEqual(4);
        expect(q.Dequeue()).toEqual(3);
        expect(q.Dequeue()).toEqual(2);
        expect(q.Dequeue()).toEqual(1);
    }));
    it('Enumeration_Simple', async(() => {

        let input = [2, 4, 7, 4, 2, 8, 1];
        let expected = [8, 7, 4, 4, 2, 2, 1];

        let queue = new PriorityQueue<number>();
        input.forEach(i => queue.Enqueue(i));

        let expected1 = 0;
        let node = queue.GetEnumerator().Head;
        node.Next = queue.GetEnumerator().Head.Next;
        while (node != null) {
            expect(node.Value).toEqual(expected[expected1++]);
            node = node.Next;
        }
    }));
});