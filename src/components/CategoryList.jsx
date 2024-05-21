import {useEffect, useState} from "react";

export default function CategoryList() {
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        fetch("categories.json")
            .then((res) => res.json())
            .then((data) => setCategoryData(data));
    }, []);

    return (
        <div className="mt-10">
            <h1 className="text-4xl text-center font-bold">Job Category List</h1>
            <p className="text-center text-gray-600 my-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="flex justify-between gap-4">
                {
                    categoryData.map((category) => (
                        <div key={category.id}>
                            <div>
                                <img src={category.logo} alt=""/>
                            </div>
                            <div>
                                <h3 className="font-bold">{category.category_name}</h3>
                                <p>{category.availability}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}