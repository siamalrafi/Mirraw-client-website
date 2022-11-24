import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCategory = () => {

    fetch('/products.json')
        .then(response => response.json())
        .then(json =>
            console.log(json))



    return (
        <div>
            <h1>SingleCategorySingleCategorySingleCategory</h1>
            <h1>SingleCategorySingleCategorySingleCategory</h1>
            <h1>SingleCategorySingleCategorySingleCategory</h1>
        </div>
    );
};

export default SingleCategory;