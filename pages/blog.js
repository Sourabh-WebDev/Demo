import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import Pagination from "../src/Pagination";
import parse from 'html-react-parser';
import { useEffect, useState } from "react";
const BlogStandard = () => {

  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(3);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('/api/hello');
      const data = await response.json();
      console.log(data); // Log the fetched data
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Calculate total number of pages
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log(blogs, 'blogs')

  const extractContent = (htmlString) => {

    console.log(htmlString, 'htmlString')
    // Parse the HTML string
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");

    // Extract paragraphs
    const paragraphs = Array.from(doc.querySelectorAll("p")).map(p => p.textContent);

    // Extract images
    const images = Array.from(doc.querySelectorAll("img")).map(img => img.src);

    return { paragraphs, images };
};

// const wysiwygContent = formData.whatToInclude;
// const { paragraphs, images } = extractContent(wysiwygContent);

// console.log("Paragraphs:", paragraphs); // Array of paragraph text
// console.log("Images:", images); 


  return (
    <Layout>
      <PageBanner pageName={"Our Blogs"} />
      <section className="blog-standard-area py-130 rpt-95 rpb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-standard-wrap">
                {/* {
                  blogs?.map((blogs, index) => (
                    <div className="blog-standard-item wow fadeInUp delay-0-2s">
                      <div className="image">
                        <img
                          src="assets/images/blog/blog-standard1.jpg"
                          alt="Blog"
                        />
                        <a href="#">
                          <i className="fas fa-share-alt" />
                        </a>
                      </div>
                      <div className="blog-standard-content">
                        <div className="author">
                          <img
                            src="assets/images/blog/blog-standard-author1.jpg"
                            alt="Author"
                          />
                        </div>
                        <div className="content">
                          <ul className="blog-standard-header">
                            <li>
                              <span className="name">{blogs?.bloggerName}</span>
                            </li>
                            <li>
                              <i className="far fa-calendar-alt" />{" "}
                              <Link href="/blog-details">February 20, 2022</Link>
                            </li>
                            <li>
                              <i className="far fa-comments" />{" "}
                              <Link href="/blog-details">Comments (05)</Link>
                            </li>
                          </ul>
                          <h3>
                            {blogs?.blogHeader}
                          </h3>
                          <p>
                            <b>Overview:</b> {blogs?.overview}<br />
                            <b>What to include:</b>  {parse(blogs?.whatToInclude)}{""}
                          </p>
                          <Link href="/blog-details">
                            <a className="theme-btn style-two">
                              Learn more <i className="fas fa-arrow-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                } */}
                   {
                  blogs?.map((blog, index) => {
                    const { paragraphs, images } = extractContent(blog?.whatToInclude); // Extract content from each blog
                    console.log("Paragraphs:", paragraphs); // Array of paragraph text
                    console.log("Images:", images); // Array of image URLs

                    return (
                      <div key={index} className="blog-standard-item wow fadeInUp delay-0-2s">
                        <div className="image">
                          <img
                            src={images}
                            alt="Blog"
                          />
                          <a href="#">
                            <i className="fas fa-share-alt" />
                          </a>
                        </div>
                        <div className="blog-standard-content">
                          <div className="author">
                            <img
                              src="assets/images/blog/blog-standard-author1.jpg"
                              alt="Author"
                            />
                          </div>
                          <div className="content">
                            <ul className="blog-standard-header">
                              <li>
                                <span className="name">{blog?.bloggerName}</span>
                              </li>
                              <li>
                                <i className="far fa-calendar-alt" />{" "}
                                <Link href="/blog-details">February 20, 2022</Link>
                              </li>
                              <li>
                                <i className="far fa-comments" />{" "}
                                <Link href="/blog-details">Comments (05)</Link>
                              </li>
                            </ul>
                            <h3>
                              {blog?.blogHeader}
                            </h3>
                            <p>
                              <b>Overview:</b> {blog?.overview}<br />
                              <b>What to include:</b> {paragraphs}{""}
                            </p>
                            <Link href="/blog-details">
                              <a className="theme-btn style-two">
                                Learn more <i className="fas fa-arrow-right" />
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })
                }
                <ul className="pagination flex-wrap">
                  <Pagination paginationCls={".blog-standard-item"} sort={3} />
                  {/* <Pagination
                    paginationCls={".blog-standard-item"}
                    sort={3}
                    totalPages={totalPages}
                    paginate={paginate}
                  /> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-sidebar rmt-75">
                <div className="widget widget-about wow fadeInUp delay-0-4s">
                  <div className="image">
                    <img src="assets/images/widgets/about.jpg" alt="Author" />
                  </div>
                  <h4>James D. Thomas</h4>
                  <p>
                    Apexpath are a technology driven and innovation oriented progressive company which provides a distinct platform that caters to a wide range of customers across the globe.
                    Sit amet consectetur adipiscing elits do eiusmod tempor
                    incididunt ut labore etdol magna aliquas uspensis.{" "}
                  </p>
                  <div className="social-style-two">

                    <Link href="/www.facebook.com/tricklesolutions">
                      <a>
                        <i className="fab fa-facebook-f" />
                      </a>
                    </Link>
                    <Link href="/www.twitter.com/tricklesolutions">
                      <a>
                        <i className="fab fa-twitter" />
                      </a>
                    </Link>
                    <Link href="/www.linkdincom/tricklesolutions">
                      <a>
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </Link>
                    <Link href="/www.youtube.comsolutions">
                      <a>
                        <i className="fab fa-youtube" />
                      </a>
                    </Link>
                  </div>
                </div>
                {/* <div className="widget widget-menu wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Category</h4>
                  <ul>
                    <li>
                      <Link href="/blog">Business Coach </Link>{" "}
                      <span>(25)</span>
                    </li>
                    <li>
                      <Link href="/blog">Life Coach </Link> <span>(07)</span>
                    </li>
                    <li>
                      <Link href="/blog">Health Coach </Link> <span>(12)</span>
                    </li>
                    <li>
                      <Link href="/blog">Web Design </Link> <span>(55)</span>
                    </li>
                    <li>
                      <Link href="/blog">Web Development </Link>{" "}
                      <span>(14)</span>
                    </li>
                    <li>
                      <Link href="/blog">SEO Optimizations </Link>{" "}
                      <span>(30)</span>
                    </li>
                    <li>
                      <Link href="/blog">Digital Analysis </Link>{" "}
                      <span>(18)</span>
                    </li>
                  </ul>
                </div> */}
                {/* <div className="widget widget-recent-courses wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Recent Courses</h4>
                  <ul>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/course1.jpg"
                          alt="Course"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <Link href="/course-details">
                            How to Learn Basic Web (UI) Design
                          </Link>
                        </h6>
                        <span>
                          By <Link href="/course-list">Williams</Link>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/course2.jpg"
                          alt="Course"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <Link href="/course-details">
                            How to Learn Basic Web Development
                          </Link>
                        </h6>
                        <span>
                          By <Link href="/course-list">Somalia</Link>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/course3.jpg"
                          alt="Course"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <Link href="/course-details">
                            How to Learn Basic (SEO) Marketing
                          </Link>{" "}
                        </h6>
                        <span>
                          By <Link href="/course-list">Blanchard</Link>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/course4.jpg"
                          alt="Course"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <Link href="/course-details">
                            Business Strategy Managements
                          </Link>
                        </h6>
                        <span>
                          By <Link href="/course-list">Johnson</Link>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div> */}
                <div className="widget widget-tag-cloud wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Category</h4>
                  <div className="tag-coulds">
                    {blogs.map((blog, index) => (
                      blog.category ? (
                          <Link href={`/blog/${blog.id}`}>{blog.category}</Link>
                      ) : null
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default BlogStandard;
