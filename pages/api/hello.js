// /pages/api/blogs.js
import clientPromise from "../../lib/dbConnect";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("mydatabase"); // Replace with your database name

  if (req.method === "GET") {
    // Fetch blogs from MongoDB
    const blogs = await db.collection("Blogs").find({}).toArray();
    res.status(200).json(blogs);
  } else if (req.method === "POST") {
    // Add a new blog to MongoDB
    const { id, bloggerName, date, comments, blogContent } = req.body;

    if (!id || !bloggerName || !date || !comments || !blogContent) {
      return res.status(400).json({ message: "Please provide all required fields." });
    }

    const result = await db.collection("Blogs").insertOne({
      id,
      bloggerName,
      date,
      comments,
      blogContent,
    });

    res.status(201).json({ message: "Blog added successfully.", blog: result });
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed.` });
  }
}
