import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import { plugin } from 'postcss'

export default defineConfig({
    base: "/Cia-Compa-ia-de-arte-y-vida",
    plugins: [react()],
})