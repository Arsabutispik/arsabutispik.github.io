'use client';

import { Container, Typography, Box, Card, CardContent, CardActionArea } from '@mui/material';
import Link from 'next/link';

type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

export default function BlogList({ posts }: { posts: Post[] }) {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Blog
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Thoughts, tutorials, and my journey in software engineering.
        </Typography>
      </Box>

      {posts.length === 0 && (
        <Typography>No posts yet.</Typography>
      )}

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {posts.map((post) => (
          <Card key={post.slug} variant="outlined">
            <CardActionArea component={Link} href={`/blog/${post.slug}`}>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {post.date}
                </Typography>
                <Typography variant="body1">
                  {post.excerpt}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

