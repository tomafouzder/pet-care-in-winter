import React from 'react';
import img1 from "../../assets/8488709.jpg"
import img2 from "../../assets/9278744.jpg"
import img3 from "../../assets/dog-enjoying-healthy-meal-with-fresh-ingredients.jpg"
import img4 from "../../assets/pharma-hemp-complex-LvZqsx-vJL8-unsplash.jpg"
import bathImg1 from "../../assets/beauty-concept-with-different-products.jpg"
import bathImg2 from "../../assets/8388340.jpg"
import bathImg3 from "../../assets/8411762.jpg"

const ShopProducts = () => {
    return (
        <div className='w-11/12 mx-auto pt-10'>
            <h2 className='text-5xl font-bold text-center'>Look Our Products :</h2>
            <p className='text-lg font-semibold text-center text-gray-700 pt-6 pb-16'>
                Discover high-quality pet products designed to keep your furry friends happy, healthy, and comfortable. From nutritious dog food and playful cat toys to gentle grooming kits, our collection offers everything your pet deserves. Each item is carefully selected for safety, comfort, and fun — ensuring the best care for your loyal companions every day.
            </p>
            {/* food details */}
            <div>
                <div>
                    <p className='text-4xl font-bold py-2 border-t-2 border-gray-500'>Food Details</p>
                    <h4 className='text-gray-600 text-xl pb-4'>Feed pets balanced meals, provide fresh water daily, avoid overfeeding, maintain a consistent schedule, and choose age-appropriate nutritious food.</h4>
                    <section className=' grid grid-cols-1 lg:grid-cols-2 gap-2 mb-2'>
                        <div className='p-4'>
                            <img className='w-2xl' src={img1} alt="" />
                            <p className='text-3xl font-bold py-2'>price: 40 $</p>
                            <h3 className='text-lg font-semibold text-gray-500'>Always choose high-quality, fresh pet food with natural ingredients, free from fillers, artificial colors, or preservatives for better health.</h3>
                        </div>
                        <div className='p-4'>
                            <img className='w-2xl' src={img2} alt="" />
                            <p className='text-3xl font-bold py-2'>price: 60 $</p>
                            <h3 className='text-lg font-semibold text-gray-500'>Check expiration dates, verify manufacturer credibility, and select nutrient-rich formulas to ensure your pet receives safe, quality nutrition daily.</h3>
                        </div>
                    </section>

                    {/* food section : 2 */}
                    <section className=' grid grid-cols-1 lg:grid-cols-2 gap-2'>
                        <div className='p-4'>
                            <img className='w-2xl' src={img3} alt="" />
                            <p className='text-3xl font-bold py-2'>price: 80 $</p>
                            <h3 className='text-lg font-semibold text-gray-500'>Prioritize organic or premium pet food, avoid low-quality brands, and ensure balanced vitamins and minerals for optimal growth.</h3>
                        </div>
                        <div className='p-4'>
                            <img className='w-2xl' src={img4} alt="" />
                            <p className='text-3xl font-bold py-2'>price: 35 $</p>
                            <h3 className='text-lg font-semibold text-gray-500'>Inspect packaging integrity, maintain proper storage, and feed only high-quality food to protect your pet from contamination or illness.</h3>
                        </div>
                    </section>
                </div>
            </div>

            {/* bath products details */}
            <div className='py-16 '>
                <div>
                    <p className='text-4xl font-bold  py-2 border-t-2 border-gray-500'>Bath Products Details</p>
                    <h4 className='text-gray-600 text-xl pb-4'>Gentle shampoo with premium ingredients, cleanses thoroughly while protecting skin, ensuring a soft, shiny, and healthy coat for your beloved pet every bath. Herbal conditioner enriched with natural extracts, detangles fur, prevents dryness, and nourishes skin, leaving your pet’s coat smooth, silky, and naturally vibrant. Flea & tick bath solution with safe, high-quality formula, eliminates pests effectively, maintains skin health, and keeps pets fresh, clean, and comfortable after every wash.</h4>
                    <section className=' grid grid-cols-1 lg:grid-cols-2 gap-2 mb-2'>
                        <div className='p-4'>
                            <img className='w-2xl' src={bathImg2} alt="" />
                            <p className='text-3xl font-bold py-2'>price: 55 $</p>
                            <h3 className='text-lg font-semibold text-gray-500'>Flea & Tick Bath Solution – Protects your pet from fleas and ticks while cleansing gently. Maintains healthy skin, removes dirt, and keeps your furry friend fresh and itch-free. Safe for regular use.</h3>
                        </div>
                        <div className='p-4 '>
                            <img className='w-2xl' src={bathImg3} alt="" />
                            <p className='text-3xl font-bold py-2'>price: 70 $</p>
                            <h3 className='text-lg font-semibold text-gray-500'>Herbal Pet Conditioner – Enriched with natural herbs, this conditioner detangles fur, reduces itching, and adds shine. Leaves coats smooth, silky, and healthy without harsh chemicals. Perfect after every wash.</h3>
                        </div>
                    </section>

                    {/* bath section : 2 */}
                    <section className=' flex items-center justify-center border-b-2 border-gray-400 '>
                        <div className='p-4'>
                            <img className='w-2xl' src={bathImg1} alt="" />
                            <p className='text-3xl font-bold py-2'>price: 90 $</p>
                            <h3 className='text-lg font-semibold text-gray-500'>Gentle Puppy Shampoo – A mild, tear-free shampoo perfect for puppies. Cleanses dirt and odors while keeping your pet’s skin soft, hydrated, and healthy. Ideal for sensitive skin and regular bath time.</h3>
                        </div>

                    </section>
                </div>
            </div>

        </div>
    );
};

export default ShopProducts;