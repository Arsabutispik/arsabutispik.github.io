import { Container, Typography, Box, Button } from '@mui/material';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';

// This is required for Next.js static export (output: "export") 
// to know which pages to generate at build time.
export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const { slug } = params;

  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <Container maxWidth="md">
        <Typography variant="h4" sx={{ mt: 4 }}>Post not found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Link href="/blog" passHref legacyBehavior>
          <Button 
            startIcon={<ArrowBackIcon />}
            sx={{ mb: 4 }}
            color="inherit"
          >
            Back to Blog
          </Button>
        </Link>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Published on {post.date}
        </Typography>
      </Box>

      <Box sx={{ 
        typography: 'body1', 
        lineHeight: 1.8,
        '& pre': {
          bgcolor: '#1e1e1e',
          color: '#d4d4d4',
          p: 2,
          borderRadius: 1,
          overflowX: 'auto',
          marginY: 2,
        },
        '& code': {
          fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
          fontSize: '0.9em',
        }
      }}>
        <MDXRemote 
          source={post.content} 
          options={{
            mdxOptions: {
              rehypePlugins: [
                [rehypePrettyCode, { theme: 'github-dark' }]
              ],
            },
          }}
        />
      </Box>
    </Container>
  );
}
