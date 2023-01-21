import React from "react";
import Categories1 from "../../../Assets/Categories/categories-2.jpg";
import Categories2 from "../../../Assets/Categories/categories-1.jpg";
import Categories3 from "../../../Assets/Categories/categories-3.jpg";
import Categories4 from "../../../Assets/Categories/categories-5.jpg";
import Categories5 from "../../../Assets/Categories/categories-7.jpg";
import Categories6 from "../../../Assets/Categories/categories-6.jpg";
const Categories = () => {
  const Categorie = [
    {
      id: 1,
      name: "BlueTooth & Wireless",
      img: Categories3,
      descr: "Headphones, Accessories",
    },
    {
      id: 2,
      name: "Computers & Laptop",
      img: Categories6,
      descr: "Laptop, Accessories",
    },
    {
      id: 3,
      name: "Mobiles & Tablets",
      img: Categories4,
      descr: "Mobile, Accessories",
    },
    {
      id: 4,
      name: "Camera, Photo & Video",
      img: Categories1,
      descr: "Action, Accessories",
    },
    {
      id: 5,
      name: "Portable Speakers",
      img: Categories2,
      descr: "Blue Players, Accessories",
    },
    {
      id: 6,
      name: "Video Games",
      img: Categories5,
      descr: "Headsets, Accessories",
    },
  ];
  return (
    <div className="mt-40">
      <h1 className="text-center md:text-4xl  text-3xl text-[#FF8549] font-mono font-bold">
        Check Best{" "}
        <span className="border-b-4 text-black border-[#FF8549]">
          Categories
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 md:px-28  px-4 mt-20 items-center font-mono">
        {Categorie.map((item) => (
          <div key={item.id}>
            <div>
              <div class="card card-side rounded-lg bg-base-100 h-44 mb-8 shadow-xl items-center">
                <div class="card-body">
                  <h2 class="card-title font-semibold">{item.name}</h2>
                  <p>{item.descr}</p>
                </div>
                <figure>
                  <img src={item.img} alt="categori" />
                </figure>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
