import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { FaUser, FaClock} from "react-icons/fa6"
import SideBar from '../components/SideBar'

const SingleBlog = () => {
        const data = useLoaderData();
        // console.log(data);
        const {title, image, category, author, published_date, reading_time, content} = data[0];

  return (
    <div>
        <div className='py-10 text-center text-white px-4'>
            {/* <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Single Blog Page</h2> */}
        </div>

        {/* blog details */}
        <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
            <div className='lg:w-3/4 mx-auto'>
                <div>
                    <img src={image} alt="" className='w-full mx-auto rounded'/>
                </div>
                <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
                <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2'/>{author} | {published_date}</p>
                <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2'/>{reading_time}</p>
                <p className='text-base text-gray-500 mb-6'>{content}</p>
                <div className='text-base text-gray-500'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore dicta quia voluptate eum nesciunt, doloremque rem voluptatem nisi, perferendis adipisci unde vel ea at laboriosam neque repudiandae, ipsum doloribus fugiat non veritatis laudantium eius labore laborum voluptates? Similique tempore nemo fugit ullam ipsum, eligendi est delectus perferendis soluta quaerat tenetur!</p> <br/>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio veritatis ipsam commodi architecto expedita quas facilis quos minus sunt laborum id accusantium dicta quidem corrupti at, quae totam quo voluptatibus exercitationem. Vero, numquam! Rerum saepe officia, deleniti numquam obcaecati suscipit reprehenderit esse quis voluptate, quia ipsam corrupti nam quam libero?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim consequatur rerum dolor dolorem ad iusto quia delectus quae architecto quo, hic, perspiciatis minus, aliquid est praesentium aspernatur distinctio culpa! Dolor voluptatem dolorem fuga vitae. Earum perferendis veniam, aperiam repellat ipsa, et explicabo ut in quas obcaecati similique, aut harum cumque.</p> <br />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam vitae, rem dolor ut quasi reiciendis, corporis sequi fuga quod non accusamus et harum nesciunt porro sint provident temporibus similique dolores dolore mollitia commodi natus, labore iusto. Blanditiis ex illo nulla? Harum commodi fuga accusantium porro? Aliquam voluptates atque modi corporis.</p><br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi recusandae, quibusdam quia in dicta voluptate autem veniam cumque, culpa assumenda nemo, beatae doloribus porro ex illum! Fuga, obcaecati architecto ipsam molestiae animi incidunt, eveniet dolorum, et ex voluptatibus quod soluta? Neque perspiciatis ullam modi facilis dolore ipsam vero, iusto eaque?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non reprehenderit libero sit nostrum necessitatibus sapiente voluptas dicta, eveniet, mollitia consequuntur, ex voluptatibus aspernatur accusantium dolorum distinctio laudantium. Nulla, consectetur obcaecati cum perspiciatis necessitatibus sapiente dolorum tempore asperiores sint sit assumenda magni nam. Quaerat voluptate eligendi commodi voluptatibus nulla nihil perferendis.</p><br />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam vitae, rem dolor ut quasi reiciendis, corporis sequi fuga quod non accusamus et harum nesciunt porro sint provident temporibus similique dolores dolore mollitia commodi natus, labore iusto. Blanditiis ex illo nulla? Harum commodi fuga accusantium porro? Aliquam voluptates atque modi corporis.</p><br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi recusandae, quibusdam quia in dicta voluptate autem veniam cumque, culpa assumenda nemo, beatae doloribus porro ex illum! Fuga, obcaecati architecto ipsam molestiae animi incidunt, eveniet dolorum, et ex voluptatibus quod soluta? Neque perspiciatis ullam modi facilis dolore ipsam vero, iusto eaque?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non reprehenderit libero sit nostrum necessitatibus sapiente voluptas dicta, eveniet, mollitia consequuntur, ex voluptatibus aspernatur accusantium dolorum distinctio laudantium. Nulla, consectetur obcaecati cum perspiciatis necessitatibus sapiente dolorum tempore asperiores sint sit assumenda magni nam. Quaerat voluptate eligendi commodi voluptatibus nulla nihil perferendis.</p><br />
                </div>
            </div>
            
            <div className="lg:w-1/2">
                <SideBar/>
            </div>
        </div>
    </div>
  )
}

export default SingleBlog