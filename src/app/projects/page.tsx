'use client';

import { Container, Typography, Box, Grid, Card, CardContent, CardActions, Button, Chip, Stack } from '@mui/material';
import projects from './projects';

export default function Projects() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Projects & Contributions
        </Typography>
        <Typography variant="h6" color="text.secondary">
          An overview of my open-source work, packages, and volunteer positions.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {projects.map((project, idx) => (
          <Grid size={{ xs: 12, md: 6 }} key={idx}>
            <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
                  <Typography variant="h5" component="h2" sx={{ m: 0 }}>
                    {project.title}
                  </Typography>
                  <Chip label={project.tag} color={project.tagColor} size="small" />
                </Stack>
                <Typography variant="subtitle2" color="primary" gutterBottom>
                  {project.role}
                </Typography>
                <Typography color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                {project.links.map((link, i) => (
                  <Button key={i} size="small" variant={link.variant} href={link.href} target="_blank">
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
