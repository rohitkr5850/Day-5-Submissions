1. What is Node.js? How does it differ from browser JavaScript?

Node.js is a runtime environment that allows JavaScript to run outside the browser, mainly on the server. It is built on Chrome’s V8 engine and is designed for building scalable backend applications. Browser JavaScript focuses on DOM manipulation and UI interactions, while Node.js focuses on server-side tasks like file handling, APIs, and databases. Node.js has access to system resources such as file system and network, which browsers do not allow. Also, Node.js uses an event-driven, non-blocking architecture.

2. What is the event loop in Node.js? Explain how it works.

The event loop is the mechanism that allows Node.js to handle multiple tasks asynchronously using a single thread. It continuously checks the call stack and the callback queue to decide what to execute next. When the call stack is empty, the event loop picks tasks from queues like timers, I/O callbacks, or promises. This helps Node.js execute non-blocking operations efficiently. The event loop makes Node.js fast and scalable.

3. What is non-blocking I/O? How does Node.js achieve it?

Non-blocking I/O means the program does not wait for an operation to finish before moving to the next task. In Node.js, I/O operations like file reading or network requests run in the background. Once the operation completes, a callback or promise is pushed to the event loop. This allows Node.js to handle many requests at the same time without blocking the main thread. This is one of the key reasons Node.js performs well under high load.

4. Explain the difference between synchronous and asynchronous code.

Synchronous code runs line by line and blocks the execution until a task is completed. If one operation takes time, the entire program waits. Asynchronous code allows long-running tasks to execute in the background without blocking the main thread. Node.js mostly uses asynchronous code for better performance. This helps in handling multiple requests efficiently.

5. What are callbacks? What is callback hell?

Callbacks are functions passed as arguments to another function and executed after a task completes. They are commonly used in asynchronous operations like file reading or API calls. Callback hell occurs when multiple callbacks are nested inside each other. This makes the code hard to read, maintain, and debug. It also leads to poor error handling and messy logic.

6. What are Promises? How do they solve callback hell?

Promises represent the eventual result of an asynchronous operation, either resolved or rejected. They provide a cleaner way to handle async code compared to callbacks. Using .then() and .catch(), promises avoid deep nesting of callbacks. This makes the code more readable and easier to manage. Promises also improve error handling by allowing centralized error catching.

7. What is async/await? How does it work internally?

Async/await is syntactic sugar built on top of promises that makes asynchronous code look synchronous. The async keyword makes a function return a promise, and await pauses execution until the promise resolves. Internally, it still uses promises and the event loop. The main thread is not blocked during await. This improves readability and simplifies error handling using try/catch.

8. What is the difference between process.nextTick() and setImmediate()?

process.nextTick() executes its callback immediately after the current operation completes, before the event loop continues. setImmediate() executes its callback in the check phase of the event loop. nextTick() has higher priority and can block the event loop if overused. setImmediate() allows I/O operations to complete before execution. Both are used for scheduling async tasks but in different phases.

9. What are streams in Node.js? Name the types of streams.

Streams are objects that allow data to be processed piece by piece instead of loading everything into memory. They are useful for handling large files and real-time data. Streams improve performance and reduce memory usage. The four main types of streams are Readable, Writable, Duplex, and Transform. Streams are widely used in file handling and network operations.

10. What is the Buffer class in Node.js?

The Buffer class is used to handle binary data in Node.js. It is especially useful when working with files, streams, and network operations. Buffers store raw memory data outside the V8 heap. Since JavaScript does not handle binary data natively, Buffer acts as a bridge. It allows efficient reading and writing of binary data.