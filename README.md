# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

The browser will contact a Domain Name Server (DNS) to retrieve the IP address associated with the techtonic URL. All domain names are associated with an IP address as domain names are easier for humans to remember.  The IP address is then returned to the browser (client) and the browser uses the IP address to find the web server on the internet that stores the web page. The server returns the html page to the client, the browser renders the HTML to display the webpage to the user.


## From start to finish, how does data reach you to be rendered in the browser?

The client-side code makes a request, the server-side code processes that request and returns a response.

## What code is rendered in the browser?

HTML.

## What is the server-side code’s main function?

The function of server-side code is to process requests from the client.  For example, when a user completes a form and pushes the submit button on the client, the information is sent to the server, processed and stored in the database.  The server-side code may also return a page to the client indicating a success or failure of the process.


## What is the client-side code’s main function?

The function of client-side code is to display information to the user in a browser. It provides a dynamic web-surfing experience, allowing the user to interact with forms and buttons, videos, etc.

## What is runtime?

Runtime is the time during which a program is running.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

As many copies as there are clients accessing the server.

## How many instances of the server-side code are available at any given time?

One per server.

## How many instances of the databases connected to the server application are created?

One instance.
