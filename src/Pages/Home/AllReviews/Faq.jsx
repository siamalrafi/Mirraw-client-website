import React from 'react';

const Faq = () => {
    return (
        <div>
            <section className="  bg-base-200 text-gray-100">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl text-black font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="text-black px-4 py-6 focus:outline-none focus-visible:ring- text-black">Why Do You Trust this website ?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-black">This is the save time for potential customers and your customer support team. Customers won't need to sit on a phone waiting for answers, and your customer service team won't need to answer individual questions.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring- text-black">What Makes a Good Us?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4  text-black">Even though this post's goal is to share some enviable FAQ page examples, it's essential to know how to get started with a new FAQ page or improve an existing one. Here are some best practices to consider when creating a FAQ page or knowledge base. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring- text-black">Why Do I Need It?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4  text-black">There are more reasons than we can fit into this article about why you need a Facebook business page in terms of building your business, but we'll give you some of the rules about it, too. For example, did you know that you can't use a personal profile page for a business. </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;