import React from 'react';

const Blogs = () => {
    return (
        <div>
            <section className="bg-base-200 text-black">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl font-bold">Our Blogs Are Here.</h2>

                    <div className="space-y-4 py-5">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none  ">What are the different ways to manage a state in a React application ?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-black">
                                State management is one of the important and unavoidable features of any dynamic application. React provides a simple and flexible API to support state management in a React component. Let us understand how to maintain state in React application in this chapter.

                                There are four main types of state you need to properly manage in your React apps

                                <li>Local state </li>
                                Local (UI) state – Local state is data we manage in one or another component

                                <li>Global state</li>
                                Local state is most often managed in React using the useState hook

                                <li>Server state </li>
                                Server state – Data that comes from an external server that must be integrated with our UI state.


                                <li>URL state </li>

                                URL state – Data that exists on our URLs, including the pathname and query parameters
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                                How does prototypical inheritance work?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-black">
                                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object
                                Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.

                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                                What is a unit test? Why should we write unit tests? </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-black">
                                Unit testing, a testing technique using which individual modules are tested to determine if there are any issues by the developer himself. It is concerned with functional correctness of the standalone modules.
                                The main aim is to isolate each unit of the system to identify, analyze and fix the defects.
                                A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                                React vs. Angular vs. Vue? </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-black">
                                <mark>React or ReactJS</mark> was originally developed by Facebook and it acts on view layer for web and mobile based application. It integrates well with Node js environment. Following are key features of React. Reacts make Facebook, PayPal, Netflix, Airbnb, Instagram etc.
                                <br />
                                <mark className='mr-2'>Angular</mark>
                                8 is a TypeScript based full-stack web framework for building web and mobile applications. One of the major advantage is that the Angular 8 support for web application that can fit in any screen resolution. Angular application is fully compatible for mobiles, tablets, laptops or desktops. Angular 8 has an excellent user interface library for web developers which contains reusable UI components. Google, Microsoft's Office 365 online applications use Angular

                                <br />
                                <mark className='mr-2'>Vue.js</mark>
                                is javascript based MVC framework and is very helpful in creating responsive UI.Following are key features of Vue.js.
                                Vue.js makes Laravel, Alibaba, GitLab, Trustpilot, etc.


                            </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;