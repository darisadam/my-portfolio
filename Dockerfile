# --- Stage 1: Build React App ---
    FROM node:18-alpine as builder

    # Set working directory
    WORKDIR /app

    # Copy package files first (untuk memanfaatkan cache layer Docker)
    COPY package.json package-lock.json ./

    # Install dependencies
    RUN npm ci

    # Copy source code
    COPY . .

    # Build aplikasi (hasilnya ada di folder /app/dist)
    RUN npm run build

    # --- Stage 2: Serve with Nginx ---
    FROM nginx:alpine

    # Copy hasil build dari Stage 1 ke folder default Nginx
    COPY --from=builder /app/dist /usr/share/nginx/html

    # (Opsional) Copy custom nginx config jika perlu. 
    # Untuk sekarang default sudah cukup.

    # Expose port 80
    EXPOSE 80

    # Start Nginx
    CMD ["nginx", "-g", "daemon off;"]