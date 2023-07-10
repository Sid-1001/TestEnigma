FROM ubuntu:18.04 as base

RUN apt update -y && apt upgrade -y && apt-get update 
RUN apt install -y curl python3.7 python3-pip unixodbc-dev
RUN apt-get update
RUN apt-get install nginx -y


FROM base as python-base

WORKDIR /enigma/test

COPY build ./build
COPY nginx.conf /etc/nginx/nginx.conf
COPY api ./api

WORKDIR /enigma/test/api 

# Add SQL Server ODBC Driver 17 for Ubuntu 18.04
RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add -
RUN curl https://packages.microsoft.com/config/ubuntu/18.04/prod.list > /etc/apt/sources.list.d/mssql-release.list
RUN apt-get update
RUN ACCEPT_EULA=Y apt-get install -y --allow-unauthenticated msodbcsql17
RUN ACCEPT_EULA=Y apt-get install -y --allow-unauthenticated mssql-tools
RUN echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bash_profile
RUN echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bashrc


FROM python-base

WORKDIR /enigma/test/api

RUN pip3 install -r requirements.txt.test
RUN chmod +x start.sh 

ENTRYPOINT ["/bin/bash", "-c", "./start.sh"]