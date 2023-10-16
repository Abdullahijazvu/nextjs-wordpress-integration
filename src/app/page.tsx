
'use client'

import { useEffect, useState } from "react";
import { fetchWooCommerceProducts } from "../../utils/woocommerce";
import Image from "next/image";
export default function MainPage() {
  const [data,SetData]=useState<any>([])
  const [products,SetProducts] = useState<any>([])
  const [data2,SetData2] = useState<any>([])
  useEffect(() => {
    const fetchData = async () => {
    let mydata=[]
      const products = await fetchWooCommerceProducts();
      // const  mappeddata=JSON.parse(products)
      // console.log("mapped data", mappeddata)
      SetData(products.data);

      console.log(products.data)
      const mappeddata=products.data.map((items:any,index:any) => 
      {
        mydata=items.images[0].src
        SetData2([mydata])
      })
      // Do something with the fetched products
    };

    fetchData();
  }, []);

return(
  <div>
  <h1>Products Data</h1>
  
 <img src={data2[0]} alt="image"/>




  <div>
   
      <div>
    
        <p>{data?.data}</p>
        {/* Add more product details as needed */}
      </div>

  </div>
</div>
)
}
