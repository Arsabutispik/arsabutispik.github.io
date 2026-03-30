import { getAllPosts } from '@/lib/blog';
import BlogList from './BlogList';

export default async function Blog() {
  const posts = getAllPosts();
  
  return <BlogList posts={posts} />;
}
