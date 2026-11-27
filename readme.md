# Booku App
Simple app for frontend test

## How to run
- Install dependencies `yarn install`
- Run in development mode `yarn dev`

## Tech Stack
- Next js
- Typescript
- Redux Toolkit (w persist)
- SWR
- Framer Motion
- Tailwind CSS
- Daisy UI
- Axios

## Screenshots
<table>
  <tr>
    <td>
      <img src='https://user-images.githubusercontent.com/39044004/166297530-25df9536-628b-4c42-b329-47994d909458.png'>
    </td>
    <td>
      <img src='https://user-images.githubusercontent.com/39044004/166297841-e8eabcbb-6674-4dd9-9ab7-599dc2dc5e26.png'>
    </td>
  </tr>
  <tr>
    <td>
      <img src='https://user-images.githubusercontent.com/39044004/166297666-6621815c-9be4-407a-9fa6-0de2e934c4bb.png'>
    </td>
    <td>
      <img src='https://user-images.githubusercontent.com/39044004/166298026-b69b79cb-3903-429a-8654-5e8b06549a7e.png'>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td>
      <img src='https://user-images.githubusercontent.com/39044004/166298469-abc3a2c0-d957-42e1-a9b0-2bd00cc10268.png'>
    </td>
    <td>
      <img src='https://user-images.githubusercontent.com/39044004/166298786-93d97e53-4c12-44a6-ba56-02898a5c3bee.png'>
    </td>
    <td>
      <img src='https://user-images.githubusercontent.com/39044004/166299045-b0ea1891-80c0-4a5a-b22e-2f03564430a5.png'>
    </td>
    <td>
      <img src='https://user-images.githubusercontent.com/39044004/166299235-6344e928-2a81-4551-bba9-e58fc752e725.png'>
    </td>
    <td>
      <img src='https://user-images.githubusercontent.com/39044004/166299401-7eb8ba64-93eb-4c5b-86e3-ebefee84a022.png'>
    </td>
  </tr>
</table>


## Mock server

The real backend (`asia-southeast2-sejutacita-app.cloudfunctions.net`) is going away, so a local mock is bundled in `mock-server/`.

```bash
yarn mock   # terminal 1: mock backend on http://localhost:4000
yarn dev    # terminal 2: app on http://localhost:3000
```

- Serves `GET /fee-assessment-categories`, `GET /fee-assessment-books?categoryId&page&size` (0-based pages, `[]` past the end) and cover images at `/covers/*`.
- Data and covers are snapshots in `mock-server/data` and `mock-server/assets/covers`. Re-snapshot (only possible while the real backend is still up) with `yarn mock:harvest`.
- The app reads the backend URL from `NEXT_PUBLIC_API_BASE_URL` (`.env`); point it elsewhere to use a different backend.
