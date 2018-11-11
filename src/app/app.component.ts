import { Component } from '@angular/core';
import { Queue, Struct } from './queue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'queue';
  private _queue: Struct<number>;
  /**
   *
   */
  constructor(qu: Struct<number>) {
    this._queue = qu;
  }

  public proccessed = [];
  public Queue = [];
  public button_Create_Click(): void {
    this._queue.Enqueue(Math.floor(Math.random() * 200) + 0);
    this.updateQueue();
  }
  public button_Process_Click(): void {
    this.proccessed.push(this._queue.Dequeue());
    this.updateQueue();
  }
  private updateQueue(): void {
    this.Queue = [];
    let node = this._queue.GetEnumerator().Head;
    if (node == null) {
      return;
    }
    node.Next = this._queue.GetEnumerator().Head.Next;
    while (node != null) {
      this.Queue.push(node.Value);
      node = node.Next;
    }
  }
}
