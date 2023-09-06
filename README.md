# Prismic Challenge Filterable List

This repository contains the `<FilterableList />` component implemented for the Prismic challenge.

The component is a simple items list with an input field. The list of items is filtered according to the filter keyword in the input field.

## Design

The React application has been generated using [NX](https://nx.dev/).
It uses [Tailwind](https://tailwindcss.com/) for styles, [Shadcn](https://ui.shadcn.com/) UI components.
[Storybook](https://storybook.js.org/) is used to develop and test the component.
[Chromatic](https://www.chromatic.com/) is used to deploy Storybook and interaction tests.

## Demo

You can test the application directly in the deployed [Storybook on Chromatic](https://64f8517fa4153ad280a2dc1e-mgaylysaqs.chromatic.com/).

## Start the app

To start the development server run `npx nx run prismic-challenge-filterable-list:serve`. Open your browser and navigate to http://localhost:4200/.

## Start Storybook locally

To start the Storybook server run `npx nx run prismic-challenge-filterable-list:storybook`. Open your browser and navigate to http://localhost:4400/.

## Deploy Storybook on Chromatic

To deploy Storybook and run tests on Chromatic run `npx chromatic --project-token=chpt_XXXXXXXXXX`.
