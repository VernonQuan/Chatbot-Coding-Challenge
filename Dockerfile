FROM nginx:stable-alpine AS server
COPY dist /usr/share/nginx/html

# Optional: expose a custom port mapping via docker run -p
EXPOSE 80

# Use 'nginx -g "daemon off;"' as default CMD
