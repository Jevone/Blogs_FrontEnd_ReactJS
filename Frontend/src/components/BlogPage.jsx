import React, { useEffect, useState } from 'react'
import  BlogCards  from './BlogCards'
import Pagination from './Pagination'
import CategorySelection from './CategorySelection'
import Sidebar from './SideBar.jsx';


const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setcurrentPage] = useState(1);
    const pageSize = 12 // blogs per page
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        async function fetchBlogs() {    
            let url = `http://localhost:5000/blogs?spage=${currentPage}&limit=${pageSize}`;

            // filter category
            if(selectedCategory){
                url += `&category=${selectedCategory}`;
            }

            const response = await fetch(url);
            const data = await response.json();
            
            setBlogs(data);
            console.log(selectedCategory)
        }

        fetchBlogs();
    }, [currentPage, pageSize, selectedCategory])

    //page changing btn
    const handlePageChange = (pageNumber) => {
        setcurrentPage(pageNumber);
    }

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setcurrentPage(1);
        setActiveCategory(category);
    }

    return (
        <div>
            {/* // category section */}
            <div>
                <CategorySelection onSelectCategory ={handleCategoryChange} selectedCategory={selectedCategory} activeCategory ={activeCategory} />
            </div>

            {/* // blogCards section */}
            <div className='flex flex-col lg:flex-row gap-12 '>
                {/* blog cards component */}
                <BlogCards blogs={blogs} currentPage = {currentPage} selectedCategory={selectedCategory} pageSize={pageSize}/>

                {/* sidebar component */}
                <div>
                    <Sidebar />
                </div>
            </div>

            {/* pagination section */}
            <div>
                <Pagination onPageChange = {handlePageChange} currentPage = {currentPage} blogs={blogs} pageSize = {pageSize}/>
            </div>
        </div>
    )
}
export default BlogPage;
