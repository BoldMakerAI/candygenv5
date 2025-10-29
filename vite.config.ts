import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This 'define' block makes the API key available to your app after it's built.
  // It replaces any mention of 'process.env.API_KEY' in your code with the actual key.
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  },
  // ===================================================================================
  // !!! IMPORTANT !!!
  // Replace 'your-repo-name' with the actual name of your GitHub repository.
  // For example, if your repository URL is https://github.com/your-username/my-candy-generator,
  // the base should be '/my-candy-generator/'
  // This is the most common reason for a blank page after deployment.
  // ===================================================================================
  base: '/your-repo-name/', 
})