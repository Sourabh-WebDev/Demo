import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import React-Quill styles
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const AddBlog = () => {
    const [formData, setFormData] = useState({
        bloggerName: "",
        category: "Business",
        date: "",
        comments: "0",
        blogHeader: "",
        overview: "",
        whatToInclude: "", // WYSIWYG content
    });

    const [message, setMessage] = useState("");

    const isLocalHost = window.location.hostname === "localhost";

    // If it's not localhost, return null to prevent rendering
    if (!isLocalHost) {
        return null; // Page won't render if not on localhost
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle WYSIWYG editor change
    const handleWYSIWYGChange = (content) => {
        setFormData({ ...formData, whatToInclude: content });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.category) {
            alert("Please select a category.");
            return;
        }

        const formattedDate = new Date(formData.date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });

        const updatedFormData = { ...formData, date: formattedDate };

        try {
            const response = await fetch("/api/hello", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedFormData),
            });

            const data = await response.json();
            if (data.message === "Blog added successfully.") {
                setMessage("Blog added successfully!");
                setFormData({
                    bloggerName: "",
                    category: "",
                    date: "",
                    comments: "",
                    blogHeader: "",
                    overview: "",
                    whatToInclude: "",
                });
            } else {
                setMessage("Error adding blog. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting blog:", error);
            setMessage("Server error. Please try again later.");
        }
    };

    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"], // Add image option
        ],
    };

    const isFormValid = formData.category !== "" && formData.bloggerName !== "" && formData.blogHeader !== "";


    return (
        <Layout>
            <PageBanner
                pageName="Add Blog"
                img="https://thumbs.dreamstime.com/z/open-notepad-affiliate-marketing-sketch-concept-87455335.jpg?w=992"
            />
            <section className="course-details-area py-30 rpt-100">
                <div className="container">
                    <div className="row large-gap">
                        <div className="col-lg-12">
                            <h3 className="mt-10 form-title">Add Your Blog</h3>
                            <form className="blog-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="bloggerName">Blogger Name</label>
                                    <input
                                        id="bloggerName"
                                        type="text"
                                        name="bloggerName"
                                        className="form-control"
                                        placeholder="Enter your name"
                                        value={formData.bloggerName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="category">Category</label>
                                    <select
                                        id="category"
                                        name="category"
                                        className="form-control"
                                        value={formData.category}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Category</option>
                                        <option value="Business">Business</option>
                                        <option value="Life">Life</option>
                                        <option value="Health">Health</option>
                                        <option value="WebDesign">Web Design</option>
                                        <option value="SEO">SEO</option>
                                    </select>

                                </div>
                                <div className="form-group">
                                    <label htmlFor="date">Date</label>
                                    <input
                                        id="date"
                                        type="date"
                                        name="date"
                                        className="form-control"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="blogHeader">Main Heading</label>
                                    <input
                                        id="blogHeader"
                                        type="text"
                                        name="blogHeader"
                                        className="form-control"
                                        placeholder="Enter blog title"
                                        value={formData.blogHeader}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="overview">Overview</label>
                                    <textarea
                                        id="overview"
                                        name="overview"
                                        className="form-control"
                                        placeholder="Write a brief overview"
                                        value={formData.overview}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="whatToInclude">What to Include</label>
                                    <ReactQuill
                                        value={formData.whatToInclude}
                                        onChange={handleWYSIWYGChange}
                                        modules={modules}
                                        theme="snow"
                                    />
                                </div>

                                <button type="submit" disabled={!isFormValid} className="submit-button">Add Blog</button>
                                {message && <p className="form-message">{message}</p>}
                            </form>
                        </div>
                    </div>
                </div>
                <style jsx="true">{`
          .blog-form {
            background: #f6f0f0;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            --mask: radial-gradient(30px at 50% 30px,#0000 97%,#000) 50% -30px/ 55.5px 100%;
            -webkit-mask: var(--mask);
            mask: var(--mask);
            padding-top: 40px;
            padding-bottom: 80px;
          }

          .form-title {
            color: #333;
            font-weight: 700;
            margin-bottom: 20px;
            text-align: center;
          }

          .form-group {
            margin-bottom: 15px;
          }

          .form-group label {
            display: block;
            font-weight: 600;
            margin-bottom: 5px;
            color: #555;
          }

          .form-control {
            width: 100%;
            padding: 10px 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
            transition: border-color 0.3s ease;
          }

          .form-control:focus {
            border-color: #007bff;
            outline: none;
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
          }

          textarea {
            resize: vertical;
            min-height: 80px;
          }

          .submit-button {
            background: #007bff;
            color: #fff;
            font-size: 16px;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.3s ease;
          }

          .submit-button:hover {
            background: #0056b3;
          }

          .form-message {
            margin-top: 15px;
            font-size: 14px;
            font-weight: 600;
            text-align: center;
            color: #28a745;
          }
        `}</style>
            </section>
        </Layout>
    );
};

export default AddBlog;
