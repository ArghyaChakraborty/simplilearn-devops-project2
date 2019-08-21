# Getting a bare Cent OS image
FROM centos

# Setting maintainer 
LABEL maintainer="arghya.gniit@gmail.com"

# Install network tools
RUN yum update; yum install -y net-tools

# Install apache web server
RUN  yum install -y httpd

# Install node js
RUN curl -sL https://rpm.nodesource.com/setup_10.x | bash - && yum install nodejs -y

# Copy to-do-list-app inside container
COPY ./to-do-list-app /root/to-do-list-app

# Create a director inside web root for the app
RUN mkdir -p /var/www/html/to-do-list-app

# Build the react app & copy the build artifacts under web root
RUN cd /root/to-do-list-app/ && npm install && npm run build && cp -R ./build/* /var/www/html/to-do-list-app/

# Start apache damon when container runs
CMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]

# Expose port 80
EXPOSE 80
