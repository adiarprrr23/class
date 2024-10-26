pipeline {
    agent any

    tools {
        // Use the configured Node.js version, replace "nodejs_16" with the name you gave in Jenkins tool configuration
        nodejs 'nodejs_16'
    }

    stages {
        stage('Setup') {
            steps {
                script {
                    // Verify Node and NPM versions
                    sh 'node -v'
                    sh 'npm -v'
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    // Install dependencies using npm ci
                    sh 'npm ci'
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    // Build the project
                    sh 'npm run build'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    // Run tests
                    sh 'npm test'
                }
            }
        }
    }
}
