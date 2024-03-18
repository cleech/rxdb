"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[9460],{262:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(4848),i=t(8453);const o={title:"WebSockets vs Server-Sent-Events vs Long-Polling vs WebRTC vs WebTransport",slug:"websockets-sse-polling-webrtc-webtransport.html",description:"Explore the pivotal roles of WebSockets, Server-Sent Events, Long-Polling, WebRTC, and WebTransport in shaping real-time web apps. Dive into their unique advantages, limitations, and optimal use cases for informed development choices."},r="WebSockets vs Server-Sent-Events vs Long-Polling vs WebRTC vs WebTransport",a={id:"articles/websockets-sse-polling-webrtc-webtransport",title:"WebSockets vs Server-Sent-Events vs Long-Polling vs WebRTC vs WebTransport",description:"Explore the pivotal roles of WebSockets, Server-Sent Events, Long-Polling, WebRTC, and WebTransport in shaping real-time web apps. Dive into their unique advantages, limitations, and optimal use cases for informed development choices.",source:"@site/docs/articles/websockets-sse-polling-webrtc-webtransport.md",sourceDirName:"articles",slug:"/articles/websockets-sse-polling-webrtc-webtransport.html",permalink:"/articles/websockets-sse-polling-webrtc-webtransport.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"WebSockets vs Server-Sent-Events vs Long-Polling vs WebRTC vs WebTransport",slug:"websockets-sse-polling-webrtc-webtransport.html",description:"Explore the pivotal roles of WebSockets, Server-Sent Events, Long-Polling, WebRTC, and WebTransport in shaping real-time web apps. Dive into their unique advantages, limitations, and optimal use cases for informed development choices."},sidebar:"tutorialSidebar",previous:{title:"RxDB - JSON Database for JavaScript",permalink:"/articles/json-database.html"},next:{title:"Using localStorage in Modern Applications - A Comprehensive Guide",permalink:"/articles/localstorage.html"}},l={},c=[{value:"What is Long Polling?",id:"what-is-long-polling",level:3},{value:"What are WebSockets?",id:"what-are-websockets",level:3},{value:"What are Server-Sent-Events?",id:"what-are-server-sent-events",level:3},{value:"What is the WebTransport API?",id:"what-is-the-webtransport-api",level:3},{value:"What is WebRTC?",id:"what-is-webrtc",level:3},{value:"Limitations of the technologies",id:"limitations-of-the-technologies",level:2},{value:"Sending Data in both directions",id:"sending-data-in-both-directions",level:3},{value:"6-Requests per Domain Limit",id:"6-requests-per-domain-limit",level:3},{value:"Connections are not kept open on mobile apps",id:"connections-are-not-kept-open-on-mobile-apps",level:3},{value:"Proxies and Firewalls",id:"proxies-and-firewalls",level:3},{value:"Performance Comparison",id:"performance-comparison",level:2},{value:"Latency",id:"latency",level:3},{value:"Throughput",id:"throughput",level:3},{value:"Scalability and Server Load",id:"scalability-and-server-load",level:3},{value:"Recommendations and Use-Case Suitability",id:"recommendations-and-use-case-suitability",level:2},{value:"Follow Up",id:"follow-up",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"websockets-vs-server-sent-events-vs-long-polling-vs-webrtc-vs-webtransport",children:"WebSockets vs Server-Sent-Events vs Long-Polling vs WebRTC vs WebTransport"}),"\n",(0,s.jsxs)(n.p,{children:["For modern real-time web applications, the ability to send events from the server to the client is indispensable. This necessity has led to the development of several methods over the years, each with its own set of advantages and drawbacks. Initially, ",(0,s.jsx)(n.a,{href:"#what-is-long-polling",children:"long-polling"})," was the only option available. It was then succeeded by ",(0,s.jsx)(n.a,{href:"#what-are-websockets",children:"WebSockets"}),", which offered a more robust solution for bidirectional communication. Following WebSockets, ",(0,s.jsx)(n.a,{href:"#what-are-server-sent-events",children:"Server-Sent Events (SSE)"})," provided a simpler method for one-way communication from server to client. Looking ahead, the ",(0,s.jsx)(n.a,{href:"#what-is-the-webtransport-api",children:"WebTransport"})," protocol promises to revolutionize this landscape even further by providing a more efficient, flexible, and scalable approach. For niche use cases, ",(0,s.jsx)(n.a,{href:"#what-is-webrtc",children:"WebRTC"})," might also be considered for server-client events."]}),"\n",(0,s.jsxs)(n.p,{children:["This article aims to delve into these technologies, comparing their performance, highlighting their benefits and limitations, and offering recommendations for various use cases to help developers make informed decisions when building real-time web applications. It is a condensed summary of my gathered experience when I implemented the ",(0,s.jsx)(n.a,{href:"/replication.html",children:"RxDB Replication Protocol"})," to be compatible with various backend technologies."]}),"\n",(0,s.jsx)("center",{children:(0,s.jsx)("a",{href:"https://rxdb.info/",children:(0,s.jsx)("img",{src:"../files/logo/rxdb_javascript_database.svg",alt:"JavaScript Database",width:"220"})})}),"\n",(0,s.jsx)(n.h3,{id:"what-is-long-polling",children:"What is Long Polling?"}),"\n",(0,s.jsx)(n.p,{children:'Long polling was the first "hack" to enable a server-client messaging method that can be used in browsers over HTTP. The technique emulates server push communications with normal XHR requests. Unlike traditional polling, where the client repeatedly requests data from the server at regular intervals, long polling establishes a connection to the server that remains open until new data is available. Once the server has new information, it sends the response to the client, and the connection is closed. Immediately after receiving the server\'s response, the client initiates a new request, and the process repeats. This method allows for more immediate data updates and reduces unnecessary network traffic and server load. However, it can still introduce delays in communication and is less efficient than other real-time technologies like WebSockets.'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// long-polling in a JavaScript client\nfunction longPoll() {\n    fetch('http://example.com/poll')\n        .then(response => response.json())\n        .then(data => {\n            console.log(\"Received data:\", data);\n            longPoll(); // Immediately establish a new long polling request\n        })\n        .catch(error => {\n            /**\n             * Errors can appear in normal conditions when a \n             * connection timeout is reached or when the client goes offline.\n             * On errors we just restart the polling after some delay.\n             */\n            setTimeout(longPoll, 10000);\n        });\n}\nlongPoll(); // Initiate the long polling\n"})}),"\n",(0,s.jsx)(n.p,{children:"Implementing long-polling on the client side is pretty simple, as shown in the code above. However on the backend there can be multiple difficulties to ensure the client receives all events and does not miss out updates when the client is currently reconnecting."}),"\n",(0,s.jsx)(n.h3,{id:"what-are-websockets",children:"What are WebSockets?"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSocket?retiredLocale=de",children:"WebSockets"})," provide a full-duplex communication channel over a single, long-lived connection between the client and server. This technology enables browsers and servers to exchange data without the overhead of HTTP request-response cycles, facilitating real-time data transfer for applications like live chat, gaming, or financial trading platforms. WebSockets represent a significant advancement over traditional HTTP by allowing both parties to send data independently once the connection is established, making it ideal for scenarios that require low latency and high-frequency updates."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// WebSocket in a JavaScript client\nconst socket = new WebSocket('ws://example.com');\n\nsocket.onopen = function(event) {\n  console.log('Connection established');\n  // Sending a message to the server\n  socket.send('Hello Server!');\n};\n\nsocket.onmessage = function(event) {\n  console.log('Message from server:', event.data);\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["While the basics of the WebSocket API are easy to use it has shown to be rather complex in production. A socket can loose connection and must be re-created accordingly. Especially detecting if a connection is still usable or not, can be very tricky. Mostly you would add a ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#pings_and_pongs_the_heartbeat_of_websockets",children:"ping-and-pong"})," heartbeath to ensure that the open connection is not closed.\nThis complexity is why most people use a library on top of WebSockets like ",(0,s.jsx)(n.a,{href:"https://socket.io/",children:"Socket.IO"})," which handles all these cases and even provides fallbacks to long-polling if required."]}),"\n",(0,s.jsx)(n.h3,{id:"what-are-server-sent-events",children:"What are Server-Sent-Events?"}),"\n",(0,s.jsx)(n.p,{children:"Server-Sent Events (SSE) provide a standard way to push server updates to the client over HTTP. Unlike WebSockets, SSEs are designed exclusively for one-way communication from server to client, making them ideal for scenarios like live news feeds, sports scores, or any situation where the client needs to be updated in real time without sending data to the server."}),"\n",(0,s.jsx)(n.p,{children:"You can think of Server-Sent-Events as a single HTTP request where the backend does not send the whole body at once, but instead keeps the connection open and trickles the answer by sending a single line each time an event has to be send to the client."}),"\n",(0,s.jsxs)(n.p,{children:["Creating a connection for receiving events with SSE is straightforward. On the client side in a browser, you initialize an ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/EventSource",children:"EventSource"})," instance with the URL of the server-side script that generates the events."]}),"\n",(0,s.jsx)(n.p,{children:"Listening for messages involves attaching event handlers directly to the EventSource instance. The API distinguishes between generic message events and named events, allowing for more structured communication. Here's how you can set it up in JavaScript:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// Connecting to the server-side event stream\nconst evtSource = new EventSource(\"https://example.com/events\");\n\n// Handling generic message events\nevtSource.onmessage = event => {\n    console.log('got message: ' + event.data);\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"In difference to WebSockets, an EventSource will automatically reconnect on connection loss."}),"\n",(0,s.jsxs)(n.p,{children:["On the server side, your script must set the ",(0,s.jsx)(n.code,{children:"Content-Type"})," header to ",(0,s.jsx)(n.code,{children:"text/event-stream"})," and format each message according to the ",(0,s.jsx)(n.a,{href:"https://www.w3.org/TR/2012/WD-eventsource-20120426/",children:"SSE specification"}),". This includes specifying event types, data payloads, and optional fields like event ID and retry timing."]}),"\n",(0,s.jsx)(n.p,{children:"Here's how you can set up a simple SSE endpoint in a Node.js Express app:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import express from 'express';\nconst app = express();\nconst PORT = process.env.PORT || 3000;\n\napp.get('/events', (req, res) => {\n    res.writeHead(200, {\n        'Content-Type': 'text/event-stream',\n        'Cache-Control': 'no-cache',\n        'Connection': 'keep-alive',\n    });\n\n    const sendEvent = (data) => {\n        // all message lines must be prefixed with 'data: '\n        const formattedData = `data: ${JSON.stringify(data)}\\n\\n`;\n        res.write(formattedData);\n    };\n\n    // Send an event every 2 seconds\n    const intervalId = setInterval(() => {\n        const message = {\n            time: new Date().toTimeString(),\n            message: 'Hello from the server!',\n        };\n        sendEvent(message);\n    }, 2000);\n\n    // Clean up when the connection is closed\n    req.on('close', () => {\n        clearInterval(intervalId);\n        res.end();\n    });\n});\napp.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));\n"})}),"\n",(0,s.jsx)(n.h3,{id:"what-is-the-webtransport-api",children:"What is the WebTransport API?"}),"\n",(0,s.jsxs)(n.p,{children:["WebTransport is a cutting-edge API designed for efficient, low-latency communication between web clients and servers. It leverages the ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/HTTP/3",children:"HTTP/3 QUIC protocol"})," to enable a variety of data transfer capabilities, such as sending data over multiple streams, in both reliable and unreliable manners, and even allowing data to be sent out of order. This makes WebTransport a powerful tool for applications requiring high-performance networking, such as real-time gaming, live streaming, and collaborative platforms. However, it's important to note that WebTransport is currently a working draft and has not yet achieved widespread adoption.\nAs of now (March 2024), WebTransport is in a ",(0,s.jsx)(n.a,{href:"https://w3c.github.io/webtransport/",children:"Working Draft"})," and not widely supported. You cannot yet use WebTransport in the ",(0,s.jsx)(n.a,{href:"https://caniuse.com/webtransport",children:"Safari browser"})," and there is also no native support ",(0,s.jsx)(n.a,{href:"https://github.com/w3c/webtransport/issues/511",children:"in Node.js"}),". This limits its usability across different platforms and environments."]}),"\n",(0,s.jsx)(n.p,{children:"Even when WebTransport will become widely supported, its API is very complex to use and likely it would be something where people build libraries on top of WebTransport, not using it directly in an application's sourcecode."}),"\n",(0,s.jsx)(n.h3,{id:"what-is-webrtc",children:"What is WebRTC?"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://webrtc.org/",children:"WebRTC"})," (Web Real-Time Communication) is an open-source project and API standard that enables real-time communication (RTC) capabilities directly within web browsers and mobile applications without the need for complex server infrastructure or the installation of additional plugins. It supports peer-to-peer connections for streaming audio, video, and data exchange between browsers. WebRTC is designed to work through NATs and firewalls, utilizing protocols like ICE, STUN, and TURN to establish a connection between peers."]}),"\n",(0,s.jsx)(n.p,{children:"While WebRTC is made to be used for client-client interactions, it could also be leveraged for server-client communication where the server just simulated being also a client. This approach only makes sense for niche use cases which is why in the following WebRTC will be ignored as an option."}),"\n",(0,s.jsx)(n.p,{children:"The problem is that for WebRTC to work, you need a signaling-server anyway which would then again run over websockets, SSE or WebTransport. This defeats the purpose of using WebRTC as a replacement for these technologies."}),"\n",(0,s.jsx)(n.h2,{id:"limitations-of-the-technologies",children:"Limitations of the technologies"}),"\n",(0,s.jsx)(n.h3,{id:"sending-data-in-both-directions",children:"Sending Data in both directions"}),"\n",(0,s.jsx)(n.p,{children:"Only WebSockets and WebTransport allow to send data in both directions so that you can receive server-data and send client-data over the same connection."}),"\n",(0,s.jsxs)(n.p,{children:["While it would also be possible with ",(0,s.jsx)(n.strong,{children:"Long-Polling"}),' in theory, it is not recommended because sending "new" data to an existing long-polling connection would require\nto do an additional http-request anyway. So instead of doing that you can send data directly from the client to the server with an additional http-request without interrupting\nthe long-polling connection.']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Server-Sent-Events"})," do not support sending any additional data to the server. You can only do the initial request, and even there you cannot send POST-like data in the http-body by default with the native ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/EventSource",children:"EventSource API"}),". Instead you have to put all data inside of the url parameters which is considered a bad practice for security because credentials might leak into server logs, proxies and caches. To fix this problem, ",(0,s.jsx)(n.a,{href:"https://rxdb.info/",children:"RxDB"})," for example uses the ",(0,s.jsx)(n.a,{href:"https://github.com/EventSource/eventsource",children:"eventsource polyfill"})," instead of the native ",(0,s.jsx)(n.code,{children:"EventSource API"}),". This library adds additional functionality like sending ",(0,s.jsx)(n.strong,{children:"custom http headers"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"6-requests-per-domain-limit",children:"6-Requests per Domain Limit"}),"\n",(0,s.jsx)(n.p,{children:"Most modern browsers allow six connections per domain () which limits the usability of all steady server-to-client messaging methods. The limitation of six connections is even shared across browser tabs so when you open the same page in multiple tabs, they would have to shared the six-connection-pool with each other. This limitation is part of the HTTP/1.1-RFC (which even defines a lower number of only two connections)."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Quote From ",(0,s.jsx)(n.a,{href:"https://www.w3.org/Protocols/rfc2616/rfc2616-sec8.html#sec8.1.4",children:"RFC 2616 \u2013 Section 8.1.4"}),': "Clients that use persistent connections SHOULD limit the number of simultaneous connections that they maintain to a given server. A single-user client SHOULD NOT maintain more than ',(0,s.jsx)(n.strong,{children:"2 connections"}),' with any server or proxy. A proxy SHOULD use up to 2*N connections to another server or proxy, where N is the number of simultaneously active users. These guidelines are intended to improve HTTP response times and avoid congestion."']}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["While that policy makes sense to prevent website owners from using their visitors to D-DOS other websites, it can be a big problem when multiple connections are required to handle server-client communication for legitimate use cases. To workaround the limitation you have to use HTTP/2 or HTTP/3 with which the browser will only open a single connection per domain and then use multiplexing to run all data through a single connection. While this gives you a virtually infinity amount of parallel connections, there is a ",(0,s.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc7540#section-6.5.2",children:"SETTINGS_MAX_CONCURRENT_STREAMS"})," setting which limits the actually connections amount. The default is 100 concurrent streams for most configurations."]}),"\n",(0,s.jsxs)(n.p,{children:['In theory the connection limit could also be increased by the browser, at least for specific APIs like EventSource, but the issues have beem marked as "won\'t fix" by ',(0,s.jsx)(n.a,{href:"https://issues.chromium.org/issues/40329530",children:"chromium"})," and ",(0,s.jsx)(n.a,{href:"https://bugzilla.mozilla.org/show_bug.cgi?id=906896",children:"firefox"}),"."]}),"\n",(0,s.jsx)(n.admonition,{title:"Lower the amount of connections in Browser Apps",type:"note",children:(0,s.jsxs)(n.p,{children:["When you build a browser application, you have to assume that your users will use the app not only once, but in multiple browser tabs in parallel.\nBy default you likely will open one server-stream-connection per tab which is often not necessary at all. Instead you open only a single connection and shared it between tabs, no matter how many tabs are open. ",(0,s.jsx)(n.a,{href:"https://rxdb.info/",children:"RxDB"})," does that with the ",(0,s.jsx)(n.a,{href:"/leader-election.html",children:"LeaderElection"})," from the ",(0,s.jsx)(n.a,{href:"https://github.com/pubkey/broadcast-channel",children:"broadcast-channel npm package"})," to only have one stream of replication between server and clients. You can use that package standalone (without RxDB) for any type of application."]})}),"\n",(0,s.jsx)(n.h3,{id:"connections-are-not-kept-open-on-mobile-apps",children:"Connections are not kept open on mobile apps"}),"\n",(0,s.jsxs)(n.p,{children:["In the context of mobile applications running on operating systems like Android and iOS, maintaining open connections, such as those used for WebSockets and the others, poses a significant challenge. Mobile operating systems are designed to automatically move applications into the background after a certain period of inactivity, effectively closing any open connections. This behavior is a part of the operating system's resource management strategy to conserve battery and optimize performance. As a result, developers often rely on ",(0,s.jsx)(n.strong,{children:"mobile push notifications"})," as an efficient and reliable method to send data from servers to clients. Push notifications allow servers to alert the application of new data, prompting an action or update, without the need for a persistent open connection."]}),"\n",(0,s.jsx)(n.h3,{id:"proxies-and-firewalls",children:"Proxies and Firewalls"}),"\n",(0,s.jsxs)(n.p,{children:["From consutling many ",(0,s.jsx)(n.a,{href:"https://rxdb.info/",children:"RxDB"}),' users, it was shown that in enterprise environments (aka "at work") it is often hard to implement a WebSocket server into the infrastructure because many proxies and firewalls block non-HTTP connections. Therefore using the Server-Sent-Events provides and easier way of enterprise integration. Also long-polling uses only plain HTTP-requests and might be an option.']}),"\n",(0,s.jsx)("center",{children:(0,s.jsx)("a",{href:"https://rxdb.info/",children:(0,s.jsx)("img",{src:"../files/logo/rxdb_javascript_database.svg",alt:"JavaScript Database",width:"220"})})}),"\n",(0,s.jsx)(n.h2,{id:"performance-comparison",children:"Performance Comparison"}),"\n",(0,s.jsx)(n.p,{children:"Comparing the performance of WebSockets, Server-Sent Events (SSE), Long-Polling and WebTransport directly involves evaluating key aspects such as latency, throughput, server load, and scalability under various conditions."}),"\n",(0,s.jsxs)(n.p,{children:["First lets look at the raw numbers. A good performance comparison can be found in ",(0,s.jsx)(n.a,{href:"https://github.com/Sh3b0/realtime-web?tab=readme-ov-file#demos",children:"this repo"})," which tests the messages times in a ",(0,s.jsx)(n.a,{href:"https://go.dev/",children:"Go Lang"})," server implementation. Here we can see that the performance of WebSockets, WebRTC and WebTransport are comparable:"]}),"\n",(0,s.jsx)("center",{children:(0,s.jsx)("a",{href:"https://rxdb.info/",children:(0,s.jsx)("img",{src:"../files/websocket-webrtc-webtransport-performance.png",alt:"WebSocket WebRTC WebTransport Performance",width:"360"})})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Remember that WebTransport is a pretty new technologie based on the also new HTTP/3 protocol. In the future (after March 2024) there might be more performance optimizations. Also WebTransport is optimized to use less power which metric is not tested."})}),"\n",(0,s.jsx)(n.p,{children:"Lets also compare the Latency, the throughput and the scalability:"}),"\n",(0,s.jsx)(n.h3,{id:"latency",children:"Latency"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"WebSockets"}),": Offers the lowest latency due to its full-duplex communication over a single, persistent connection. Ideal for real-time applications where immediate data exchange is critical."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Server-Sent Events"}),": Also provides low latency for server-to-client communication but cannot natively send messages back to the server without additional HTTP requests."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Long-Polling"}),": Incurs higher latency as it relies on establishing new HTTP connections for each data transmission, making it less efficient for real-time updates. Also it can occur that the server wants to send an event when the client is still in the process of opening a new connection. In these cases the latency would be significantly larger."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"WebTransport"}),": Promises to offer low latency similar to WebSockets, with the added benefits of leveraging the HTTP/3 protocol for more efficient multiplexing and congestion control."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"throughput",children:"Throughput"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"WebSockets"}),": Capable of high throughput due to its persistent connection, but throughput can be limited by the overhead of managing multiple connections on the server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Server-Sent Events"}),": Efficient for broadcasting messages to many clients with less overhead than WebSockets, leading to potentially higher throughput for unidirectional server-to-client communication."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Long-Polling"}),": Generally offers lower throughput due to the overhead of frequently opening and closing connections, which consumes more server resources."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"WebTransport"}),": Expected to support high throughput for both unidirectional and bidirectional streams within a single connection, outperforming WebSockets in scenarios requiring multiple streams."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"scalability-and-server-load",children:"Scalability and Server Load"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"WebSockets"}),": Maintaining a large number of WebSocket connections can significantly increase server load, potentially affecting scalability for applications with many users."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Server-Sent Events"}),": More scalable for scenarios that primarily require updates from server to client, as it uses less connection overhead than WebSockets."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Long-Polling"}),": The least scalable due to the high server load generated by frequent connection establishment, making it suitable only as a fallback mechanism."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"WebTransport"}),": Designed to be highly scalable, benefiting from HTTP/3's efficiency in handling connections and streams, potentially reducing server load compared to WebSockets and SSE."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"recommendations-and-use-case-suitability",children:"Recommendations and Use-Case Suitability"}),"\n",(0,s.jsxs)(n.p,{children:["In the landscape of server-client communication technologies, each has its distinct advantages and use case suitability. ",(0,s.jsx)(n.strong,{children:"Server-Sent Events"})," (SSE) emerge as the most straightforward option to implement, leveraging the same HTTP/S protocols as traditional web requests, thereby circumventing corporate firewall restrictions and other technical problems that can appear with other protocols. They are easily integrated into Node.js and other server frameworks, making them an ideal choice for applications requiring frequent server-to-client updates, such as news feeds, stock tickers, and live event streaming."]}),"\n",(0,s.jsxs)(n.p,{children:["On the other hand, ",(0,s.jsx)(n.strong,{children:"WebSockets"})," excel in scenarios demanding ongoing, two-way communication. Their ability to support continuous interaction makes them the prime choice for browser games, chat applications, and live sports updates."]}),"\n",(0,s.jsxs)(n.p,{children:["However, ",(0,s.jsx)(n.strong,{children:"WebTransport"}),", despite its potential, faces adoption challenges. It is not widely supported by server frameworks ",(0,s.jsx)(n.a,{href:"https://github.com/w3c/webtransport/issues/511",children:"including Node.js"})," and lacks compatibility with ",(0,s.jsx)(n.a,{href:"https://caniuse.com/webtransport",children:"safari"}),". Moreover, its reliance on HTTP/3 further limits its immediate applicability because many WebServers like nginx only have ",(0,s.jsx)(n.a,{href:"https://nginx.org/en/docs/quic.html",children:"experimental"})," HTTP/3 support. While promising for future applications with its support for both reliable and unreliable data transmission, WebTransport is not yet a viable option for most use cases."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Long-Polling"}),", once a common technique, is now largely outdated due to its inefficiency and the high overhead of repeatedly establishing new HTTP connections. Although it may serve as a fallback in environments lacking support for WebSockets or SSE, its use is generally discouraged due to significant performance limitations."]}),"\n",(0,s.jsx)(n.h2,{id:"follow-up",children:"Follow Up"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Learn how to use Server-Sent-Events to ",(0,s.jsx)(n.a,{href:"/replication-http.html#pullstream-for-ongoing-changes",children:"replicate a client side RxDB database with your backend"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Learn how to use RxDB with the ",(0,s.jsx)(n.a,{href:"/quickstart.html",children:"RxDB Quickstart"})]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(6540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);