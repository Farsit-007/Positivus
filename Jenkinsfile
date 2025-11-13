pipeline {
    agent any

    environment {
        IMAGE_NAME = "positivus-demo-app"
        COMPOSE_FILE = "docker-compose.yml"
    }

    options {
        timestamps()
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh '''
                    cd app
                    npm ci
                '''
            }
        }

        stage('Unit Tests') {
            steps {
                sh '''
                    cd app
                    npm test
                '''
            }
        }

        stage('Package Docker Image') {
            steps {
                sh 'docker build -t ${IMAGE_NAME}:latest .'
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                sh '''
                    if command -v docker compose >/dev/null 2>&1; then
                        docker compose -f "${COMPOSE_FILE}" up -d
                    else
                        docker-compose -f "${COMPOSE_FILE}" up -d
                    fi
                '''
            }
        }

        stage('Health Check') {
            steps {
                sh '''
                    chmod +x healthcheck.sh
                    ./healthcheck.sh
                '''
            }
        }
    }

    post {
        always {
            sh '''
                if command -v docker compose >/dev/null 2>&1; then
                    docker compose -f "${COMPOSE_FILE}" down || true
                else
                    docker-compose -f "${COMPOSE_FILE}" down || true
                fi
                rm -rf app/node_modules
            '''
        }
    }
}

