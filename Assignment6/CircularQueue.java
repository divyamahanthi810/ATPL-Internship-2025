class CircularQueue {
private int[] arr;
private int front, rear, size, capacity;
public CircularQueue(int capacity) {
    this.capacity = capacity;
	arr = new int[capacity];
 	front = 0;
	rear = -1;
	size = 0;
}
public void enqueue(int data) {
if (isFull()){
    System.out.println("Queue is full cannot insert " + data);
    return;
}
    rear = (rear + 1) % capacity;
    arr[rear] = data;
    size++;
    System.out.println(data + " enqueued");
} 
public void dequeue() {
if (isEmpty()) {
    System.out.println("Queue is empty Cannot dequeue.");
    return;
}
System.out.println(arr[front] + " dequeued");
front = (front + 1) % capacity;
size--;
}
public int peek() {
if (isEmpty()) {
    System.out.println("Queue is empty! Nothing to peek."); 
    return -1;
}
return arr[front];
}
public boolean isFull() 
{
 return size == capacity;
} 
public boolean isEmpty() {
return size == 0;
}
public void display() {
if (isEmpty()) {
    System.out.println("Queue is empty!");
    return;
}
    System.out.print("Queue: "); 
for (int i = 0; i < size; i++) {
    System.out.print(arr[(front + i) % capacity] + " ");
}
    System.out.println();
}
public static void main(String[] args) {
CircularQueue q = new CircularQueue(5);
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);
q.display();
q.dequeue();
q.display();
q.enqueue(60);
q.display();
System.out.println("Peek: " + q.peek());
System.out.println("is Full? " + q.isFull());
}
}
