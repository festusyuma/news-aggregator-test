### Installation

Install the dependencies:

```bash
npm install
```

Populate environment variables provided

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.


### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 --env-file .env my-app
```
