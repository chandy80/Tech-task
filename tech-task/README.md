# Tech task - React

Task: Open Targets - React data table
--------

This app package contains the following:
```
- src
    - Assets
      - data-table.jsx
      - expandable-row.jsx
    - App.css
    - App.jsx
    - main.css
    - main.jsx
- index.html
```
## Overview

I used Vite to run this app locally, but this will run in anything else you use to run React.

I have set this up to use React + Javascript with JSX syntax extension. I chose to do it this way rather than React + Typescript as it is a bit more native and familiar when reading through the code. Typescript generally has some advantages, but I preferred to do it this way for this particular task.

## Installation
As part of this app, I chose to use the following node libraries:  
- Chart.js for the charts as this is my preferred library and I've used it for years in varying degrees. 
- Tanstack Query with the `useQuery`, `QueryClient` and `QueryClientProvider` hooks for my data requests as this is generally what I use and have used more often due to its feature sets.
- GraphQL Request to unify the data from the API.

> [!NOTE]
> I'm using the following node libraries which would need installing (if they aren't already):

```bash
npm install
npm install @tanstack/react-query graphql-request react-chartjs-2 chart.js
```

> [!IMPORTANT]
> All of the imports I'm using are:

```javascript
import React from 'react';
import { request } from 'graphql-request';
import { useQuery } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Bar, Radar } from 'react-chartjs-2';
```

> [!IMPORTANT]
> This should be all you need to get this running, however if you have any queries please reach out.
