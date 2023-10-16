'use client'

// import { useEffect, useState } from "react";
// import { fetchWooCommerceProducts } from "../../utils/woocommerce";
// import Image from "next/image";
// export default function MainPage() {
//   const [data,SetData]=useState<any>([])
//   const [products,SetProducts] = useState<any>([])
//   const [data2,SetData2] = useState<any>([])
//   useEffect(() => {
//     const fetchData = async () => {
//     let mydata=[]
//       const products = await fetchWooCommerceProducts();
//       // const  mappeddata=JSON.parse(products)
//       // console.log("mapped data", mappeddata)
//       SetData(products.data);

//       console.log(products.data)
//       const mappeddata=products.data.map((items:any,index:any) => 
//       {
//         <div>{items.name}</div>
//         mydata=items.images[0].src
//         SetData2([mydata])
//       })
//     };

//     fetchData();
//   }, []);

// return(
//   <div>
//   <h1>Products Data</h1>
//   <h2>{products.data}</h2>
//  <img src={data2[0]} alt="image" width={300} height={300}/>
//   <div>
//       <div>
//         <p>{data?.data}</p>
//       </div>
//   </div>
// </div>
// )
// }


import { useEffect, useState } from "react";
import { fetchWooCommerceProducts } from "../../utils/woocommerce";
import Image from "next/image";
import Link from "next/link";

interface Products{
  name: string
  images: {src: string}[]
  description: string
  slug: string
}

export default function MainPage() {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchWooCommerceProducts();
      const productsData = response.data;
      setProducts(productsData);
    };

    fetchData();
  }, []);

  // const truncateDescription = (description, wordCount) => {
  //   const words = description.split(" ");
  //   if (words.length <= wordCount) {
  //     return description;
  //   }
  //   const truncatedWords = words.slice(0, wordCount);
  //   return truncatedWords.join(" ") + " ...";
  // };
  const truncateHTML = (html, wordCount) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    const text = div.textContent || div.innerText || "";
    const words = text.split(" ");
    if (words.length <= wordCount) {
      return html;
    }
    const truncatedWords = words.slice(0, wordCount);
    const truncatedText = truncatedWords.join(" ") + " ...";
    div.innerHTML = truncatedText;
    return div.innerHTML;
  };

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-3xl font-bold text-center pb-[18px]">Products Data</h1>
      <div className="flex flex-wrap justify-between">
        {products.map((item, index) => (
          <div className="w-[30%] py-6" key={index}>
            <Link href={`/product/${item.slug}`}>
            <img src={item.images[0].src} alt={item.name} width={300} height={300} />
            </Link>
            <h2 className="text-1xl font-bold">{item.name}</h2>
            <div dangerouslySetInnerHTML={{ __html: truncateHTML(item.description, 8) }} />
          </div>
        ))}
      </div>
    </div>
  );
}