# Positivus CI/CD Demo

End-to-end example of a Jenkins-driven CI/CD pipeline that builds, tests, containerises, deploys, and health-checks a lightweight Node.js web application. The pipeline is designed to run locally using Docker and can be executed entirely inside a Dockerised Jenkins (Docker-in-Docker) environment.

## 📁 Repository Layout

- `app/` – Express demo service with `/` and `/health` endpoints plus unit tests.
- `Dockerfile` – Builds the application image (`positivus-demo-app`).
- `docker-compose.yml` – Deploys the container locally and exposes port `5000`.
- `Jenkinsfile` – Declarative pipeline implementing build → test → package → deploy → health check.
- `healthcheck.sh` – Re-usable script to verify the running container.
- `jenkins/` – Optional Docker-in-Docker Jenkins setup for the bonus requirement.
- `docs/` – Capture pipeline evidence (add your screenshot & console log after running).

> The legacy Next.js landing-page sources remain in `src/` for reference but are not used in this CI/CD walkthrough.

## 🚀 Quick Start (Without Jenkins)

```bash
cd app
npm ci                                      # Install dependencies
npm test                                    # Run the unit tests
cd ..                                       # Return to repo root
docker build -t positivus-demo-app:latest . # Build container image
docker compose up -d                        # Deploy locally
./healthcheck.sh                            # Verify health (requires curl)
docker compose down                         # Tear down
```

The service responds at `http://localhost:5000/` and exposes a health endpoint at `http://localhost:5000/health`.

## 🧪 Jenkins Pipeline

The `Jenkinsfile` contains the following stages:

1. **Install Dependencies** – Executes `npm ci` inside `app/`.
2. **Unit Tests** – Runs `npm test`.
3. **Package Docker Image** – Builds `positivus-demo-app:latest`.
4. **Deploy with Docker Compose** – Runs `docker compose up -d`.
5. **Health Check** – Calls `./healthcheck.sh` to ensure the service is live.

Cleanup (`docker compose down` and Node modules removal) runs automatically in the `post` block.

### Running the Pipeline Natively

1. Install Jenkins with the Docker, Pipeline, and Git plugins.
2. Ensure the Jenkins agent has access to `node`, `npm`, `docker`, and `docker compose`.
3. Create a Multibranch Pipeline or Pipeline job pointing to this repository.
4. Trigger a build; you should see the stages complete in order.

### Bonus: Docker-in-Docker Jenkins

1. `cd jenkins`
2. `docker compose up -d --build`
3. Visit `http://localhost:8080`, retrieve the initial admin password from the container logs, and complete the setup.
4. Inside Jenkins, create a Pipeline job pointing at `/workspace` (the repository is mounted for you).
5. Run the job; Docker commands will use the host Docker Engine via the shared socket.

Remember to shut Jenkins down when finished:

```bash
cd jenkins
docker compose down
```

## 📸 Evidence Collection

After you run the pipeline successfully:

- Save the Jenkins console output to `docs/pipeline-run.log` (or similar).
- Capture a screenshot showing the green pipeline steps and add it to `docs/`.

These artefacts are required deliverables alongside the repository.

## 🧹 Housekeeping

- `healthcheck.sh` uses Bash and `curl`; make it executable (`chmod +x healthcheck.sh`) before use.
- The Docker image exposes port `5000`; adjust `docker-compose.yml` if you need a different port.
- If you tailor the pipeline for another environment, update this README so the runbook stays accurate.

Happy shipping! 🛳️