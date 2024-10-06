This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Exosky

Project developed during the NASA Space Apps Challenge 2024

### What did we develop?

Welcome to Exosky!

Exosky! is meant to be an educational tool to help students of all ages visualize and explore the starry sky of different exoplanets.

Exosky provides the user with general information about different exoplanets. It will also allow them to get an interactive view of the stars visible from each exoplanet, users are then free to explore around and draw their own constellations. 

The goal of Exosky! is to encourage and foster students' interest in space exploration.

### How does it address the challenge?

The challenge required the system to choose an exoplanet, display an interactive star chart and export a high quality image of star chart for 1.printing, 2.viewing on a computer, and 3.viewing on VR displays.

Our application provides a handful of example exoplanets and the feature to search for the others by name. We display name, hostname, year length, size in comparison to earth, the distance to the earth, and the number of stars in the planetary system. For each exoplanet, we provide a dynamic map of the sky from that planetary system. The map includes many features including screenshotting, coordinates, grids, graphic layering, and more. On top of the desired map of the sky, the users have the option to draw lines to create their own constellations.

### Why is it important?

Providing easy to access tools for interested parties, whether they are experts in the field or aspiring students hungry for knowledge, is incredibly important to allow their curiosity and creativity to prosper. This is not only important for making information easy to access but also to inspire students to explore the field that is space exploration. The end goal is to create something as a canvas for the children to flourish their creativity.

## Project Details

A python script uses queries to receive the information on all exoplanets from the NASA Exoplanet Archives. We have a web application implemented using React and Next.js frameworks. It displays a few random examples of exoplanets. Hovering over a planet gives you information such as name, hostname, year length, size in comparison to earth, the distance to the earth, and the number of stars in the planetary system. By clicking on an exoplanet you will be redirected to a new page that embeds a Aladin Lite plugin giving the target as the host star of the planet. The plugin offers features including screenshotting, coordinates, grids, graphic layering, and more. A “start drawing” button gives the user the ability to draw lines on the map to form constellations. Short info on the planet is also shown in the page.

## Use of Artificial Intelligence

We used Chat-GPT as a debugging tool in a few places.

## Space Agency Data

[NASA Exoplanet Archive](https://exoplanetarchive.ipac.caltech.edu/)

## References

[Aladin Lite](https://aladin.cds.unistra.fr/AladinLite/doc/)