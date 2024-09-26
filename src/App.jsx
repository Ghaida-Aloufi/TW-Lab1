
import './App.css'

function App() {

  return (
    <>

<div className="navbar bg-[#facc15] ">
 
  <div className="flex-none ">
    <ul className="menu menu-horizontal px-1 text-center ml-36  ">
      <li><a>All CATEGORIES</a></li>
      <li><a>TODAY DEALS</a></li>
      <li><a>ELECTRONICS</a></li>
      <li><a>CLOTHINGS</a></li>
      <li><a>COMPUTERS</a></li>
      <li><a>FURNITUES</a></li>
      <li><a>MOM A BABY</a></li>
      <li><a>BOOKS A MORE</a></li>
    </ul>
  </div>
</div>

<div className='flex  items-center'>
<div className="carousel w-[60%] h-[50vh] m-8">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://static.hiamag.com/styles/autox754/public/article/25/03/2018/6669691-2087393030.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>


<div className="card bg-base-100 w-96 h-[50vh] shadow-xl">
  <div className="card-body text-center ">
    <h2 className="card-title text-3xl font-sans">PACK 5 T-SHIRTS FOR SUMMER</h2>
    <p className='font-bold'>Starting at <span className='text-red-600'>$99.99</span></p>
  </div>
  <figure>
    <img className='w-[80%]'
      src="https://images-eu.ssl-images-amazon.com/images/I/71plvKrxgcL._AC_UL600_SR600,600_.jpg"
      alt="Shoes" />
  </figure>
</div>
</div>

<h1 className='font-bold m-6 text-3xl'> Top Catrgories Of The Month</h1>
<hr></hr>

<div className='flex flex-wrap items-center justify-center h-[70vh] gap-6  '>
<div className="card card-side bg-base-100 w-[32%] h-[30vh]  shadow-xl">
  <figure>
  <img className='w-[80%]'
      src="https://www.sony.com/image/23b090be2b2ac87c3b495afc2f531928?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF"
      alt="Movie" />
  </figure>
  <div className="card-body ">
    <p>        TV Televisions
         <span>Air Conditioners</span>
               Washing Machines
               Audio & Theaters
             Office Electronica</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>


<div className="card card-side bg-base-100 w-[32%] h-[30vh] shadow-xl">
  <figure>
    <img className='w-[80%]'
      src="https://image.made-in-china.com/202f0j00qyYWvQBFaErt/Customized-94-Polyester-6-Elastane-Winter-Coat-Outdoor-Sport-Wear-Men-s-Clothing-Casual-Softshell-Jacket.webp"
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Clothings </h2>
    <p> Women
           Mens
         Bass & Backpack
           Accessories</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>


<div className="card card-side bg-base-100 w-[32%] h-[30vh] shadow-xl">
  <figure>
 
  <img className='w-[80%]'
      src="https://i.pinimg.com/736x/b4/f4/c5/b4f4c56ced361f7aa09199e819efb4bf.jpg"
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Computers </h2>
    <p>       Desktop PC
Laptop
PC Gaming
Storage & Memory
PC Componenta</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>


<div className="card card-side bg-base-100 w-[32%] h-[30vh] shadow-xl">
  <figure>
    <img className='w-[60%]'
      src="https://cdn.salla.sa/7bTaTTjgPLxh0ePYmSEe9tDqEznKvE7xkUp3LTxi.jpeg"
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Home & Kitchen </h2>
    <p>        Funitures
Decor
Cookwares
Utensil & Gadgets
Garden Tools
</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>


<div className="card card-side bg-base-100 w-[32%] h-[30vh] shadow-xl">
  <figure>
    <img className='w-[80%]'
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3lrmoVDM2ATvfF3ervXOmT65AGCZf28L4gg&s"
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Healthy & Beauty </h2>
    <p>        Makeup skin Care
Hair Care
Tools a Equipments
Perfumes</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>


<div className="card card-side bg-base-100 w-[32%] h-[30vh] shadow-xl">
  <figure>
    <img className='w-[80%]'
      src="https://fossil.scene7.com/is/image/FossilPartners/FS6029_main?$sfcc_fos_medium$"
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Jexlry & Watch</h2>
    <p>        Pendant
Necklace
Watch
Bracelets
Accessories</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
</div>




<div className='flex flex-row-reverse w-[100%] justify-around items-center bg-base-200 mt-[10vh] ' >
<img className='w-[30%]' src="https://png.pngtree.com/png-vector/20240129/ourlarge/pngtree-a-pair-of-sleek-bluetooth-headphones-delivering-premium-sound-quality-against-png-image_11596934.png" alt="" />
<div className='flex flex-col  justify-between h-[20vh]'>
  <h3 className='text-center'><del>$290.50</del></h3>
  <h2 className='text-green-400 text-4xl'>$219.05</h2>
  <button className='bg-[#facc15] text-black font-bold p-3'>Shop Now</button>
</div>
<div className='w-[50vh]'>
  <h1 className='font-medium text-4xl  font-serif mb-3'>Bose Bluetooth
Wireless Headphones</h1>
<h2>Crisp powerful sound from the best sounding wireless headphones in its class</h2>
</div>

</div>


    </>
  )
}

export default App
