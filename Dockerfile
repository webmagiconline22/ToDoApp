# Use the official httpd (Apache HTTP Server) image as the base image
FROM httpd:latest

# Optionally, you can set the working directory inside the container
WORKDIR /usr/local/apache2/htdocs

# Copy your website files to the container's web root
COPY . /usr/local/apache2/htdocs

# Expose port 80 (the default HTTP port for Apache)
EXPOSE 80
