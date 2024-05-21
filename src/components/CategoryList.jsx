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
      <p className="text-center text-gray-600 my-4">Explore thousands of job opportunities with all the information
        you need. Its your future</p>
      <div className="flex justify-between gap-4 mt-6">
        {
          categoryData.map((category) => (
            <div key={category.id} className="bg-[#FAF8FF] px-10 py-6 flex flex-col justify-center gap-4">
              <img width={70} height={70} src={category.logo} alt=""/>
              <h3 className="font-bold">{category.category_name}</h3>
              <p>{category.availability}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}