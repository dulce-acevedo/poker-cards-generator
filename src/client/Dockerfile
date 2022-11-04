FROM node:16

# Set basic AWS credentials and API Key variables
ENV AWS_ACCESS_KEY_ID XXID
ENV AWS_SECRET_ACCESS_KEY XXSECRET
ENV AWS_SESSION_TOKEN XXTOKEN
ENV FLICKR_API_KEY XXKEY
ENV AWS_SDK_LOAD_CONFIG=


# Copy the application folder inside the container
COPY . ./src/client
# Set the default directory where CMD will execute
WORKDIR /src/client


COPY package*.json ./
COPY yarn.lock ./

RUN yarn

EXPOSE 5173
# Set the default command to execute when creating a new container
CMD yarn --cwd src/client run dev