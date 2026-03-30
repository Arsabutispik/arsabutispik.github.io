'use client';

import {Container, Typography, Box, Button, Grid, Card, CardContent, CardActions, Chip, Stack} from '@mui/material';
import Link from 'next/link';
import projects from './projects/projects';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 8, mb: 12, textAlign: 'center' }}>
        <Box 
          component="img"
          src="/android-chrome-512x512.png" 
          alt="İspik's Cat"
          sx={{ 
            display: 'block',
            mx: 'auto',
            width: 150, 
            height: 150, 
            borderRadius: '50%', 
            objectFit: 'cover',
            mb: 4,
            boxShadow: 3
          }} 
        />
        <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
          Hi, I am İspik
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          A mechatronics engineering student with a passion for building software. I specialize mostly in
          backend development with a little bit of frontend
        </Typography>
        <Box sx={{mt: 4, display: 'flex', gap: 2, justifyContent: 'center'}}>
          <Button variant="contained" size="large" component={Link} href="/projects">
            View My Work
          </Button>
          <Button variant="outlined" size="large" component={Link} href="/blog">
            Read My Blog
          </Button>
        </Box>
      </Box>

      <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" sx={{mt: 8, mb: 4}}>
        Featured Projects
      </Typography>

      <Grid container spacing={4}>
        {projects.slice(0, 2).map((item, idx) => (
          <Grid size={{xs: 12, md: 6}} key={idx}>
            <Card variant="outlined" sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
              <CardContent sx={{flexGrow: 1}}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{mb: 1}}>
                  <Typography variant="h5" component="h2" sx={{m: 0}}>
                    {item.title}
                  </Typography>
                  <Chip label={item.tag} color={item.tagColor} size="small"/>
                </Stack>
                <Typography color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                {item.links.map((link, i) => (
                  <Button key={i} size="small" variant={link.variant} href={link.href}
                          target="_blank">
                    {link.label}
                  </Button>
                ))}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
