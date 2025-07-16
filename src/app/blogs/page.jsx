import Image from "next/image"
import Link from "next/link"



export async function generateMetadata({params}) {


  return {
 robots: "noindex, nofollow",
 };

}


export default function BlogsPage() {
  // Sample blog data - in a real app, this would come from an API or CMS
  const blogs = [
    {
      id: 1,
      title: "Mindful rTMS",
      excerpt:
        "Combining Mindfulness with Repetitive Transcranial Magnetic Stimulation for Enhanced Mental Well‑Being.",
      date: "December 15, 2024",
      author: "Sarah Johnson",
      image: "https://mindfultms.in/_next/image?url=%2FclinicImages%2FDelhi6.webp&w=1920&q=75",
      category: "Development",
      readTime: "5 min read",
      slug: "mindful-rTMS",
    },
    {
      id: 2,
      title: "The Future of Web Development",
      excerpt:
        "Exploring emerging trends and technologies that will shape the future of web development in 2025 and beyond.",
      date: "December 12, 2024",
      author: "Mike Chen",
      image: "https://mindfultms.in/_next/image?url=%2FclinicImages%2FDelhi6.webp&w=1920&q=75",
      category: "Technology",
      readTime: "8 min read",
      slug: "future-of-web-development",
    },
    {
      id: 3,
      title: "Building Responsive Designs with Tailwind CSS",
      excerpt:
        "Master the art of creating beautiful, responsive layouts using Tailwind CSS utility classes and mobile-first approach.",
      date: "December 10, 2024",
      author: "Emily Rodriguez",
      image: "https://mindfultms.in/_next/image?url=%2FclinicImages%2FDelhi6.webp&w=1920&q=75",
      category: "Design",
      readTime: "6 min read",
      slug: "responsive-designs-with-tailwind-css",
    },
    {
      id: 4,
      title: "JavaScript Performance Optimization Tips",
      excerpt:
        "Discover practical techniques to optimize your JavaScript code for better performance and user experience.",
      date: "December 8, 2024",
      author: "David Kim",
      image: "https://mindfultms.in/_next/image?url=%2FclinicImages%2FDelhi6.webp&w=1920&q=75",
      category: "Performance",
      readTime: "7 min read",
      slug: "javascript-performance-optimization-tips",
    },
    {
      id: 5,
      title: "Understanding React Server Components",
      excerpt:
        "A comprehensive guide to React Server Components and how they revolutionize the way we build React applications.",
      date: "December 5, 2024",
      author: "Lisa Wang",
      image: "https://mindfultms.in/_next/image?url=%2FclinicImages%2FDelhi6.webp&w=1920&q=75",
      category: "React",
      readTime: "10 min read",
      slug: "understanding-react-server-components",
    },
    {
      id: 6,
      title: "CSS Grid vs Flexbox: When to Use What",
      excerpt:
        "Learn the differences between CSS Grid and Flexbox, and discover when to use each layout method for optimal results.",
      date: "December 3, 2024",
      author: "Alex Thompson",
      image: "https://mindfultms.in/_next/image?url=%2FclinicImages%2FDelhi6.webp&w=1920&q=75",
      category: "CSS",
      readTime: "4 min read",
      slug: "css-grid-vs-flexbox",
    },
  ]


  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900">Our Blog</h1>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Discover insights, tutorials, and the latest trends in web development
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto  lg:px-8 py-8">
        {/* Blog Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link
             href={`/blogs/${blog.slug}`}
              key={blog.slug}
              className="bg-white cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Blog Image */}
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Blog Content */}
              <div className="p-4 sm:p-6">
                {/* Category and Read Time */}
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full">
                    {blog.category}
                  </span>
                  <span className="text-xs text-gray-500">{blog.readTime}</span>
                </div>

                {/* Title */}
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                  <span>{blog.title}</span>
                </h2>

                {/* Excerpt */}
                <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>

                {/* Author and Date */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-gray-600">
                        {blog.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{blog.author}</span>
                  </div>
                  <time className="text-xs text-gray-500">{blog.date}</time>
                </div>
              </div>
            </Link>
          ))}
        </div>

       
      </main>

 
    </div>
  )
}
