import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/clamuur5v3fbb01uj0vuudz24/master",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Njg3OTg3MDMsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2xhbXV1cjV2M2ZiYjAxdWowdnV1ZHoyNC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZTYzMGFiMGItMmJkNS00MmI5LTkxMzktNzY0MTgzYTRjZGEwIiwianRpIjoiY2xhbXZuc2R4M2U3NjAxdGFjOWJhN2s0YSJ9.vYe3Ft4dXe2NrJMO1VD0vAPU8yu2KdFyWJcYVRVD4t3Ge6jxh6zWtbisPOralbyW6VYCVxl6550xnBEQ8sbKptXkUw_Od631K88RDrSaoB6b6ckw-D44yNYDAwZmZWjz00u3_tLXuVXvZG8WbfXZ56G8bGBbyyFS8j3365_S4f5QKDU9G8JLPhkPWZbiyp7wEIfc8RZZorplOJcmzI4zpefpTtDBKM_2RLfBNluTq9PU1tGunwKM0bVsQmanoD910gknz_UgzzIJjRWLftJ5xTMC8zEQm_4u2X_-t4IGpg_yS2Ee7PcFa6O6NrxiU1jfgz3PAgicvWn0LThsh5JMq9tiXBoNGmcgMrGhcK41W3J3HzQ2qpXN5Te03ecU-yWRrowfVwLiUte954Q6sI3rrQgY6gtUwOisJpAmOau20jI3jfxTBKpY7e_AJLpV7bW8rRYsfhBmB3l4RqLCHgfsHDVhL39El5WR0JSSlII0QqBBjv9WikQVNHEtC01MtYW5JaDx8vf4-AuT9RA8GzFgyuLLXHAUBwP_fosS9S5UMmGTON5Dp2MePtYn1JUeV1OgTIamG4skEqPrvC7mVaxQAw5k5Qt3aYQ4if9GxTSfJGOkhutz_-A7DzJuUdm746tZzK9H8spvuGGTiRYwGlEQBoSyT1uqyvbKoU4JUFhRATI",
  },
  cache: new InMemoryCache(),
});
